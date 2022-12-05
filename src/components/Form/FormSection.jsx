import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './form.css';

const FormSection = () => {
    const [name, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    // const [genre, setGenre] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [date, setDate] = React.useState('homme');

    const [formData, setData] = React.useState({ name: "", lastName: "", email: "", phone: "",
     message: "", date: null });


    const handleChangeName = (e) => {
        setName(e.target.value);
        setData({ ...formData, name: e.target.value });
      };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
        setData({ ...formData, lastName: e.target.value });
      };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setData({ ...formData, email: e.target.value });
      };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
        setData({ ...formData, phone: e.target.value });
      };
    // const handleChangeGenre = (e) => {
    //     setGenre(e.target.value);
    //     setData({ ...formData, genre: e.target.value });
    //   };
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
        setData({ ...formData, message: e.target.value });
      };
    const handleChangeDate = (e) => {
        setDate(e.target.value);
        setData({ ...formData, date: e.target.value });
      };


  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Le Nom est Obligatoire !";
    }
    if (!values.lastName) {
      errors.lastName = "Le Prénom est Obligatoire!";
    }
    // if (!values.email) {
    //   errors.email = "Email est Obligatoire!";
    // }
    if (!values.phone) {
      errors.phone = "Le Numéro de téléphone est Obligatoire!";
    }else if (values.phone.length !== 8) {
      errors.phone = "Le Numéro doit être 8 chiffres!";
    } 
    if (!values.date) {
      errors.date = "La Date est Obligatoire!";
    }
   
    return errors;
  };



      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setFormErrors(validate(formData));
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const patient = { name, lastName, email, phone, message, date };
            console.log(patient);
            console.log(JSON.stringify(patient));
            //const patient1 = { name:"name", lastName:"lastName", email:"email", phone:"phone", message:"message" };
            fetch(`http://localhost:5000/patients/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(patient),
            }).then(() => {
            console.log("new patient added");
            console.log(patient);
            });
        }
        else{
            console.log(formErrors)
            console.log("Error!")
        }
      };

  return (
    <section className='formSection' id="form" >
        <div className="form__title d-flex align-items-center justify-content-center">
            <h3 className='mt-4'>Prendre un Rendez-Vous</h3>
        </div>
        <Container className='formContainer' style={{"margin-top": "30px"}}>
            
            <Form className='form mb-2 mt-1'
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
            >
                    <FormGroup className='w-100'>
                        <Label for="exampleName" className='label'> 
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
                    {/* {formErrors.name && <Alert color="danger">{formErrors.name}</Alert>} */}
                    <span style={{"color":"red", "fontWeight":"600", "fontSize":"0.9rem"}} className="w-100">
                        {formErrors.name && formErrors.name}
                    </span>
                    
                    <FormGroup className='mt-2 w-100'>
                        <Label for="examplePrenom" className='label'>
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
                    <span style={{"color":"red", "fontWeight":"600", "fontSize":"0.9rem"}} className="w-100">
                        {formErrors.lastName && formErrors.lastName}
                    </span>
                
                <FormGroup className='w-100'>
                        <Label for="exampleEmail" className='label'>
                        Email
                        </Label>
                        <Input
                        className='input'
                        id="exampleEmail"
                        name="email"
                        placeholder="Tapez votre Email..."
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        />
                    </FormGroup>
                    {/* {formErrors.email && <Alert color="danger">{formErrors.email}</Alert>} */}
                    {/* <span style={{"color":"red", "fontWeight":"600", "fontSize":"0.9rem"}} className="w-100">
                        {formErrors.email && formErrors.email}
                    </span> */}

                    <FormGroup className='w-100'>
                        <Label for="examplePhone" className='label'>
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
                    <span style={{"color":"red", "fontWeight":"600", "fontSize":"0.9rem"}} className="w-100">
                        {formErrors.phone && formErrors.phone}
                    </span>
                    {/* <FormGroup tag="fieldset">
                        <Label className='label mb-3'>
                        Genre
                        </Label>
                        <div className='d-flex gap-1' >
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Homme
                                </Label>
                            </FormGroup>
                            <FormGroup className='ml-3'>
                            /{' '}
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Femme
                                </Label>
                            </FormGroup>
                        </div>
                        
                    </FormGroup> */}
                {/* </div> */}
                
                
                <FormGroup>
                    <Label for="exampleText" className='label'>
                    Message
                    </Label>
                    <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    placeholder='Tapez votre message...'
                    value={message}
                    onChange={handleChangeMessage}
                    />
                </FormGroup>

                <FormGroup className='w-100'>
                        <Label for="exampledate" className='label'>
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
                <span style={{"color":"red", "fontWeight":"600", "fontSize":"0.9rem"}} className="w-100">
                        {formErrors.date && formErrors.date}
                    </span>

                <div className="d-flex justify-content-center">
                    <Button disabled={Object.keys(formErrors).length === 0 && isSubmit} type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>
    </section>
  )
}

export default FormSection