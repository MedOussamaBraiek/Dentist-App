import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
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

const Calendarr = () => {
  const [patients, setPatients] = React.useState([]);

  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [time, setTime] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [formData, setData] = React.useState({
    // name: "",
    // lastName: "",
    title: "",
    phone: "",
    start: "",
    end: "",
    //date: null,
    //time: null,
  });
  const [showForm, setShowForm] = React.useState(false);
  const [api, setApi] = React.useState({});
  const [selected, setSelected] = React.useState({});

  const handleDateClick = (selected) => {
    console.log(selected);
    console.log(selected.startStr.substring(11, 16));
    setStart(selected.startStr);
    setEnd(selected.endStr);
    setDate(selected.startStr.substring(0, 10));
    setShowForm(true);
    setTime(selected.startStr.substring(11, 16));
    //const title = prompt("Please enter a new for your event");
    const calendarApi = selected.view.calendar;
    setApi(calendarApi);
    calendarApi.unselect();

    // if (title) {
    calendarApi.addEvent({
      id: `${selected.dateStr}-${formData.name}`,
      title: formData.name + " " + formData.lastName,
      start: selected.startStr,
      end: selected.endStr,
      //allDay: selected.allDay,
      allDay: false,
      //time: time,
    });
    // }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    setData({ ...formData, name: e.target.value });
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    setData({ ...formData, lastName: e.target.value });
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    setData({ ...formData, phone: e.target.value });
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const { REACT_APP_BACKEND_URL } = process.env;

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    e.target.reset();
    setTitle(name + "-" + lastName);
    //setFormErrors(validate(formData));
    //if (Object.keys(formErrors).length === 0) {
    const appointment = { title, start, end, phone };
    setData(appointment);
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
        // if (title) {
        // api.addEvent({
        //   id: `${selected.dateStr}-${formData.name}`,
        //   title: formData.name + " " + formData.lastName,
        //   start: selected.startStr,
        //   end: selected.endStr,
        //   allDay: selected.allDay,
        // });
        //}

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

  React.useEffect(() => {
    fetch(`${REACT_APP_BACKEND_URL}/appointments`)
      .then((res) => {
        if (!res.ok) {
          //setError(true);
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPatients(data);
        //setPending(false);
        //setError(false);
      })
      .catch((err) => console.log(err));
  }, [patients]);

  return (
    <Box m="20px">
      {/* <Header title="Calendar" subtitle="More Details" /> */}

      <div className="d-flex justify-content-center">
        {showForm && (
          <Form
            name="myForm"
            className="form mb-2 mt-1 align-center"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitAppointment(e);
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
            {/* <span
         style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
         className="w-100"
       >
         {formErrors.name && formErrors.name}
       </span> */}

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
            {/* <span
         style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
         className="w-100"
       >
         {formErrors.lastName && formErrors.lastName}
       </span> */}

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
            {/* <span
         style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
         className="w-100"
       >
         {formErrors.phone && formErrors.phone}
       </span> */}

            {/* <FormGroup className="w-100">
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
            </FormGroup> */}
            {/* <span
         style={{ color: "red", fontWeight: "600", fontSize: "0.9rem" }}
         className="w-100"
       >
         {formErrors.date && formErrors.date}
       </span> */}

            {/* {!isSubmit && ( */}
            <div className="d-flex justify-content-center">
              <Button
                // disabled={Object.keys(formErrors).length !== 0}
                type="submit"
              >
                Submit
              </Button>
            </div>
            {/* )} */}
            {/* {Object.keys(formErrors).length === 0 && isSubmit && (
         <Alert className="d-flex justify-content-center mt-2">
           Ajouté avec succès
         </Alert>
       )} */}
          </Form>
        )}
      </div>

      <h2>Calendar</h2>
      <Box display="flex" justifyContent="space-between">
        {/* SideBar */}

        {/* <Box flex="1 1 20%" p="15px" borderRadius="4px">
          <Typography variant="h5">Appointment</Typography>
          <List>
            {patients.map((patient) => (
              <ListItem
                key={patient.id}
                sx={{
                  backgroundColor: "red",
                  margin: "10px 0",
                  borderRadius: "2px",
                  color: "white",
                }}
              >
                <ListItemText
                  secondary={
                    <Typography>
                      {
                        patient.start
                        // formatDate(patient.start, {
                        //   year: "numeric",
                        //   month: "short",
                        //   day: "numeric",
                        // })
                      }
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box> */}
        {/* Row / shrink / width */}
        <Box flex="1 1 80%">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next, today",
              center: "title",
              //right: "dayGridMonth,timeGridWeek,timeGridDay, listMonth",
              right: "timeGridWeek,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            // eventsSet={(patient) => setPatients(patient)}
            events={patients}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendarr;
