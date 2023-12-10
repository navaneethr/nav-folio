import emailjs from "emailjs-com";
import { useState } from "react";
import SectionContainer from "./SectionContainer";
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <SectionContainer name="contact">
      <div className="elisc_tm_contact">
        <div className="tm_content">
          <div className="wrapper">
            <div className="left">
              <div className="elisc_tm_title">
                <span>- Let's Connect</span>
                <h3>Get in touch</h3>
              </div>
              <div className="text">
                <p>
                  Hey there! The doors of communication are wide open, and I'd love to hear from you. Whether you have questions, thoughts to share, or just want to connect, don't hesitate to reach out. Let's start a conversation and explore the possibilities together. Looking forward to hearing from you soon!
                </p>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <a href="tel:+19253015495">+1 925 301 5495</a>
                  </li>
                  <li>
                    <a href="mailto:rnavaneethkishore@gmail.com">rnavaneethkishore@gmail.com</a>
                  </li>
                  <li>
                    <a className="href_location" href="#">
                      San Francisco Bay Area, California
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com/laetwo/">
                  <i className="icon-facebook-1" />
                </a>
                <a href="https://www.instagram.com/navneethkishore/">
                  <i className="icon-instagram-1" />
                </a>
                <a href="https://github.com/navaneethr">
                  <i className="icon-github-1" />
                </a>
                <a href="https://medium.com/@rnavaneethkishore">
                  <i className="icon-medium" />
                </a>
                <a href="https://www.linkedin.com/in/navaneethkr/">
                  <i className="icon-linkedin-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer >
  );
};
export default Contact;
