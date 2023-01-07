import React from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { Input, Label } from "reactstrap";

const Login = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [wrong, setWrong] = React.useState(false);
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const user = { username: username, password: password };

    fetch(`http://localhost:5000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);
      console.log(res.status);
      if (res.status === 200) {
        setIsLoged(true);
        localStorage.setItem("loged", true);
      } else if (res.status === 400) {
        setWrong(true);
        localStorage.setItem("loged", false);
      }
      //window.location.reload(false);
    });
  };

  return (
    <Container
      style={{
        marginTop: "10rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="login__container">
        <h3 className="text-center login__title">Veuillez vous connecter</h3>
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
  );
};

export default Login;
