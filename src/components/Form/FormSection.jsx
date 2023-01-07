import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import "./form.css";

const FormSection = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  // const [genre, setGenre] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [date, setDate] = React.useState(null);

  const [formData, setData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    date: null,
  });

  const errors = {};

  const handleChangeName = (e) => {
    setName(e.target.value);
    setData({ ...formData, name: e.target.value });
    if (!e.target.value) {
      //errors.name = "Le Nom est Obligatoire !";
      setFormErrors({ ...errors, name: "Le Nom est Obligatoire !" });
    }
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    setData({ ...formData, lastName: e.target.value });
    if (!e.target.value) {
      ///errors.lastName = "Le Prénom est Obligatoire!";
      setFormErrors({ ...errors, lastName: "Le Prénom est Obligatoire!" });
    } else {
      setFormErrors({ ...errors });
    }
  };
  const handleChangeEmail = (e) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(e.target.value);
    setData({ ...formData, email: e.target.value });
    if (!e.target.value.match(mailformat) && e.target.value) {
      //errors.email = "Mauvais format!";
      setFormErrors({ ...errors, email: "Mauvais format!" });
    } else {
      setFormErrors({ ...errors });
    }
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    setData({ ...formData, phone: e.target.value });
    if (!e.target.value) {
      //errors.phone = "Le Numéro de téléphone est Obligatoire!";
      setFormErrors({
        ...errors,
        phone: "Le Numéro de téléphone est Obligatoire!",
      });
    } else if (e.target.value.length !== 8) {
      //errors.phone = "Le Numéro doit être 8 chiffres!";
      setFormErrors({
        ...errors,
        phone: "Le Numéro de téléphone est Obligatoire!",
      });
    } else {
      setFormErrors({ ...errors });
    }
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    setData({ ...formData, message: e.target.value });
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
    setData({ ...formData, date: e.target.value });
    if (!e.target.value) {
      // errors.date = "La Date est Obligatoire!";
      setFormErrors({ ...errors, date: "La Date est Obligatoire!" });
    } else {
      setFormErrors({ ...errors });
    }
  };

  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const validate = (values) => {
    const errors = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = "Le Nom est Obligatoire !";
    }
    if (!values.lastName) {
      errors.lastName = "Le Prénom est Obligatoire!";
    }
    if (!values.email.match(mailformat) && values.name) {
      errors.email = "Mauvais format!";
    }
    if (!values.phone) {
      errors.phone = "Le Numéro de téléphone est Obligatoire!";
    } else if (values.phone.length !== 8) {
      errors.phone = "Le Numéro doit être 8 chiffres!";
    }
    if (!values.date) {
      errors.date = "La Date est Obligatoire!";
    }

    return errors;
  };

  const { REACT_APP_BACKEND_URL } = process.env;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setFormErrors(validate(formData));
    if (Object.keys(formErrors).length === 0) {
      const patient = { name, lastName, email, phone, message, date };
      //fetch(`http://localhost:5000/patients/add`, {
      fetch(`${REACT_APP_BACKEND_URL}/patients/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(patient),
      }).then((res) => {
        if (res.status === 200) {
          setName("");
          setLastName("");
          setPhone("");
          setDate(null);
          setMessage("");
          setEmail("");
          setIsSubmit(true);
        }
      });
    } else {
      console.log("Error!");
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-form");
        } else {
          entry.target.classList.remove("show-form");
        }
      });
    });

    const hiddenFormElements = document.querySelectorAll(".formContainer");

    hiddenFormElements.forEach((el) => observer.observe(el));

    const headerFormElements = document.querySelectorAll(".form__title");
    headerFormElements.forEach((el) => observer.observe(el));
  });

  return (
    <section className="formSection" id="form">
      <div className="form__title d-flex align-items-center justify-content-center">
        <h3 className="mt-4">Prendre un Rendez-Vous</h3>
      </div>
      <Container className="formContainer" style={{ "margin-top": "30px" }}>
        <Form
          name="myForm"
          className="form mb-2 mt-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
            e.target.reset();
          }}
        >
          <FormGroup className="w-100">
            <Label for="exampleName" className="label">
              Nom
            </Label>
            <Input
              id="exampleName"
              name="nom"
              placeholder="Tapez votre Nom..."
              type="text"
              value={name}
              onChange={handleChangeName}
            />
          </FormGroup>
          <span
            style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
            className="w-100"
          >
            {formErrors.name && formErrors.name}
          </span>

          <FormGroup className="mt-2 w-100">
            <Label for="examplePrenom" className="label">
              Prénom
            </Label>
            <Input
              id="examplePrenom"
              name="prenom"
              placeholder="Tapez votre Prenom..."
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
            />
          </FormGroup>
          {/* {formErrors.lastName && <Alert color="danger">{formErrors.lastName}</Alert>} */}
          <span
            style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
            className="w-100"
          >
            {formErrors.lastName && formErrors.lastName}
          </span>

          <FormGroup className="w-100">
            <Label for="exampleEmail" className="label">
              Email
            </Label>
            <Input
              className="input"
              id="exampleEmail"
              name="email"
              placeholder="Tapez votre Email..."
              type="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </FormGroup>
          {/* {formErrors.email && <Alert color="danger">{formErrors.email}</Alert>} */}
          <span
            style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
            className="w-100"
          >
            {formErrors.email && formErrors.email}
          </span>

          <FormGroup className="w-100">
            <Label for="examplePhone" className="label">
              Numéro
            </Label>
            <Input
              id="examplePhone"
              name="phone"
              placeholder="Tapez votre Numéro..."
              type="text"
              value={phone}
              onChange={handleChangePhone}
            />
          </FormGroup>
          {/* {formErrors.phone && <Alert color="danger">{formErrors.phone}</Alert>} */}
          <span
            style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
            className="w-100"
          >
            {formErrors.phone && formErrors.phone}
          </span>
          <FormGroup>
            <Label for="exampleText" className="label">
              Message
            </Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Tapez votre message..."
              value={message}
              onChange={handleChangeMessage}
            />
          </FormGroup>

          <FormGroup className="w-100">
            <Label for="exampledate" className="label">
              Date de rendez-vous
            </Label>
            <Input
              id="exampledate"
              name="date"
              placeholder="Tapez votre Numéro..."
              type="date"
              value={date}
              onChange={handleChangeDate}
            />
          </FormGroup>
          <span
            style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
            className="w-100"
          >
            {formErrors.date && formErrors.date}
          </span>

          {!isSubmit && (
            <div className="d-flex justify-content-center">
              <Button
                disabled={Object.keys(formErrors).length !== 0}
                type="submit"
              >
                Submit
              </Button>
            </div>
          )}
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <Alert className="d-flex justify-content-center mt-2">
              Ajouté avec succès
            </Alert>
          )}
        </Form>
      </Container>
    </section>
  );
};

export default FormSection;
