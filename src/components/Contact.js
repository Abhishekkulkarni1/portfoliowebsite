// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/con2.png";

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
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//         ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     setButtonText('Sending, Please Wait.');
//     let response = await fetch("https://localhost:3001/api/contact", {
//         method:"POST",
//         headers:{
//             "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if(result.code === 200){
//         setStatus({success: true, message: 'Message sent successfully.'})
//     }else{
//         setStatus({success: false, message: 'Something went wrong, please try again.'})
//     }

//   }

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img src={contactImg} alt="contact me" />
//           </Col>
//           <Col md={6}>
//             <h2>Get In Touch With Me</h2>
//             <form onSubmit={handleSubmit}>
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
//                 {status.message && (
//                   <Col>
//                     <p className={status.success === false ? "danger" : "success"}>
//                       {status.message}
//                     </p>
//                   </Col>
//                 )}
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/con2.png";

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
  const [status, setStatus] = useState({});

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
      const response = await fetch("https://formsubmit.co/abhiwebsite12@gmail.com", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: "Message sent successfully." });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Something went wrong, please try again." });
    }

    setButtonText("Send");
    setFormDetails(formInitialDetails);
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
            <form  onSubmit={handleSubmit}>

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
                {status.message && (
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};