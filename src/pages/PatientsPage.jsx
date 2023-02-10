import React from "react";
import Header from "../components/Header/Header";
import Phone from "../components/Phone/Phone";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  Table,
  Alert,
} from "reactstrap";
import Calendar from "../components/Calendar/Calendarr";

const PatientsPage = () => {
  const [patients, setPatients] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [isPending, setPending] = React.useState(true);

  const [modal, setModal] = React.useState(false);
  const [modal1, setModal1] = React.useState(false);

  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [time, setTime] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [formData, setData] = React.useState({
    name: "",
    lastName: "",
    phone: "",
    date: null,
    time: null,
  });
  const [showForm, setShowForm] = React.useState(false);

  const [selected, setSelected] = React.useState(null);
  const toggle = () => setModal(!modal);
  const toggle1 = () => setModal1(!modal1);

  const [isLoged, setIsLoged] = React.useState(true);
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [wrong, setWrong] = React.useState(false);

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const { REACT_APP_BACKEND_URL } = process.env;

  React.useEffect(() => {
    fetch(`${REACT_APP_BACKEND_URL}/patients`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPatients(data);
        setPending(false);
        setError(false);
      })
      .catch((err) => console.log(err));
  }, [patients]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = { time: time, date: date };

    fetch(`${REACT_APP_BACKEND_URL}/patients/update${selected}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(t),
    }).then(() => {
      //window.location.reload(false);
      setIsLoged(true);
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`${REACT_APP_BACKEND_URL}/patients/${selected}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // window.location.reload(false);
      setIsLoged(true);
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoged(false);
    const user = { username: username, password: password };

    await fetch(`${REACT_APP_BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async (res) => {
      if (res.status === 200) {
        setWrong(false);
        setIsLoged(true);
        localStorage.setItem("logged", true);
      } else if (res.status === 400) {
        setWrong(true);
        await setIsLoged(false);
        localStorage.setItem("logged", false);
      }
      //window.location.reload(false);
    });
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    setData({ ...formData, name: e.target.value });
    // if (!e.target.value) {
    //   //errors.name = "Le Nom est Obligatoire !";
    //   setFormErrors({ ...errors, name: "Le Nom est Obligatoire !" });
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    setData({ ...formData, lastName: e.target.value });
    // if (!e.target.value) {
    //   ///errors.lastName = "Le Prénom est Obligatoire!";
    //   setFormErrors({ ...errors, lastName: "Le Prénom est Obligatoire!" });
    // } else {
    //   setFormErrors({ ...errors });
    // }
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    setData({ ...formData, phone: e.target.value });
    // if (!e.target.value) {
    //   //errors.phone = "Le Numéro de téléphone est Obligatoire!";
    //   setFormErrors({
    //     ...errors,
    //     phone: "Le Numéro de téléphone est Obligatoire!",
    //   });
    // } else if (e.target.value.length !== 8) {
    //   //errors.phone = "Le Numéro doit être 8 chiffres!";
    //   setFormErrors({
    //     ...errors,
    //     phone: "Le Numéro de téléphone est Obligatoire!",
    //   });
    // } else {
    //   setFormErrors({ ...errors });
    // }
  };

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    e.target.reset();
    //setFormErrors(validate(formData));
    //if (Object.keys(formErrors).length === 0) {
    const appointment = { name, lastName, phone, date };
    //fetch(`http://localhost:5000/patients/add`, {
    fetch(`${REACT_APP_BACKEND_URL}/appointments/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(appointment),
    }).then((res) => {
      if (res.status === 200) {
        setName("");
        setLastName("");
        setPhone("");
        setDate(null);
        setTime(null);
        //setIsSubmit(true);
      }
    });
    // } else {
    //   console.log("Error!");
    // }
  };

  return (
    <>
      <Phone />
      <Header />
      {!isLoged && (
        <Container
          style={{
            marginTop: "10rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="login__container">
            <h3 className="text-center login__title">
              Veuillez vous connecter
            </h3>
            <Form
              className="login__form mb-2 mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitLogin(e);
              }}
            >
              <FormGroup className="w-100">
                <Label for="exampleName" className="label">
                  Nom d'utilisateur
                </Label>
                <Input
                  id="exampleName"
                  name="nom"
                  placeholder="Tapez votre d'utilisateur..."
                  type="text"
                  value={username}
                  onChange={handleChangeUserName}
                />
              </FormGroup>
              <FormGroup className="w-100">
                <Label for="exampleName" className="label">
                  Mot de passe
                </Label>
                <Input
                  id="exampleName"
                  name="nom"
                  placeholder="Tapez votre mot de passe..."
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </FormGroup>
              {wrong && (
                <span
                  style={{
                    color: "red",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Nom d'utilisateur ou mot de passe invalide(s).
                </span>
              )}
              <div className="d-flex justify-content-center">
                <Button className="login__button mt-2" type="submit">
                  Connect
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      )}
      {isLoged && (
        <Container style={{ marginTop: "10rem" }}>
          <h1
            className="text-center mb-4"
            style={{ textDecoration: "underline", color: "#1c2498" }}
          >
            Patients
          </h1>
          {error && <h5>Not Found</h5>}
          {isPending && (
            <>
              <Spinner color="dark"></Spinner> Loading...
            </>
          )}
          <Table hover={true} responsive={true}>
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Date</th>
                <th>Temps</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {patients &&
                patients.map((patient, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{patient.name}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.email}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.date.slice(0, 10)}</td>
                    {patient.time ? <td>{patient.time}</td> : <td>--:--</td>}
                    <td>
                      {" "}
                      <button
                        className="button1"
                        onClick={() => {
                          toggle();
                          setSelected(patient._id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>{" "}
                      <button
                        className="button2"
                        onClick={() => {
                          toggle1();
                          setSelected(patient._id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          <Modal
            isOpen={modal}
            toggle={toggle}
            style={{ marginTop: "10rem" }}
            // unmountOnClose={unmountOnClose}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <ModalHeader toggle={toggle}>Changer la date</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label className="labell">Date</Label>
                  <Input
                    onChange={handleChangeDate}
                    value={date}
                    type="date"
                    name="date"
                    rows={5}
                    className="input__modal"
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="labell">Temps</Label>
                  <Input
                    onChange={handleChangeTime}
                    value={time}
                    type="time"
                    name="name"
                    rows={5}
                    className="input__modal"
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  type="submit"
                  onClick={() => {
                    toggle();
                  }}
                >
                  Editer
                </Button>{" "}
                <Button className="button3" color="secondary" onClick={toggle}>
                  Annuler
                </Button>
              </ModalFooter>
            </form>
          </Modal>

          <Modal
            isOpen={modal1}
            toggle={toggle1}
            style={{ marginTop: "10rem" }}
            // unmountOnClose={unmountOnClose}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleDelete(e);
              }}
            >
              <ModalHeader toggle={toggle1}>Supprimer la Patient</ModalHeader>
              <ModalBody>
                <h5>Êtes-vous sûr de vouloir supprimer ce Patient</h5>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="button3"
                  color="success"
                  type="submit"
                  onClick={() => {
                    toggle1();
                  }}
                >
                  Supprimer
                </Button>{" "}
                <Button color="secondary" onClick={toggle1}>
                  Annuler
                </Button>
              </ModalFooter>
            </form>
          </Modal>
        </Container>
      )}

      <Container>
        <Calendar />
      </Container>
    </>
  );
};

export default PatientsPage;
