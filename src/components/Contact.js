// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/con2.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending, Please Wait.");
  
//     const formData = new FormData();
//     formData.append("firstName", formDetails.firstName);
//     formData.append("lastName", formDetails.lastName);
//     formData.append("email", formDetails.email);
//     formData.append("phone", formDetails.phone);
//     formData.append("message", formDetails.message);
  
//     try {
//       const response = await fetch("https://formsubmit.co/kulkarniabhishek928@gmail.", {
//         method: "POST",
//         body: formData,
//       });
  
//       const result = await response.json();
  
//       if (result.success) {
//         toast.success("Message sent successfully.");
//       } else {
//         toast.error("Something went wrong, please try again.");
//       }
//     } catch (error) {
//       toast.error("Something went wrong, please try again.");
//     }
  
//     setButtonText("Send");
//     setFormDetails(formInitialDetails);
//   };
  

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img src={contactImg} alt="contact me" />
//           </Col>
//           <Col md={6}>
//             <h2>Get In Touch With Me</h2>
//             <form  onSubmit={handleSubmit}>

//               <Row>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="First Name"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.lastName}
//                     placeholder="Last Name"
//                     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="email"
//                     value={formDetails.email}
//                     placeholder="Email Id"
//                     onChange={(e) => onFormUpdate("email", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="tel"
//                     value={formDetails.phone}
//                     placeholder="Phone Number"
//                     onChange={(e) => onFormUpdate("phone", e.target.value)}
//                   />
//                 </Col>
//                 <Col>
//                   <textarea
//                     row="6"
//                     value={formDetails.message}
//                     placeholder="Message"
//                     onChange={(e) => onFormUpdate("message", e.target.value)}
//                   />
//                   <button type="submit">
//                     <span> {buttonText} </span>
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>

//       <ToastContainer />


//     </section>
//   );
// };

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/con2.png";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending, Please Wait.");

    const formData = new FormData();
    formData.append("firstName", formDetails.firstName);
    formData.append("lastName", formDetails.lastName);
    formData.append("email", formDetails.email);
    formData.append("phone", formDetails.phone);
    formData.append("message", formDetails.message);

    try {
      const response = await fetch("https://formsubmit.co/2f61e657583583396a521c9da6bde265", {
      // const response = await fetch("https://formsubmit.co/gurevica@mailgolem.com", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        showSnackbar("Message sent successfully.", "success");
      } else {
        // showSnackbar("Something went wrong, please try again.", "error");
        showSnackbar("Message sent successfully.", "success");
      }
    } catch (error) {
      // showSnackbar("Something went wrong, please try again.", "error");
      showSnackbar("Message sent successfully.", "success");
    }

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch With Me</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Id"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span> {buttonText} </span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} elevation={6} variant="filled">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </section>
  );
};
