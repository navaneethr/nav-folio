import { useContext } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";
import webDev from "../writings/webDev";
import componentArchitecture from "../writings/componentArchitecture";
import continuousLearning from "../writings/continuousLearning";
import leadership from "../writings/leadership";
import mentorship from "../writings/mentorship";
import projectManagement from "../writings/projectManagement";
import webDesign from "../writings/webDesign";


const services = [
  {
    id: 1,
    name: "Web Development",
    image: "/img/service/2.jpg",
    text: webDev
  },
  {
    id: 2,
    name: "Web Design",
    image: "/img/service/1.jpg",
    text: webDesign
  },
  {
    id: 3,
    name: "Component Architecture",
    image: "/img/service/3.jpg",
    text: componentArchitecture
  },
  {
    id: 4,
    name: "Project Management",
    image: "/img/service/4.jpg",
    text: projectManagement
  },
  {
    id: 5,
    name: "Leadership",
    image: "/img/service/1.jpg",
    text: leadership
  },
  {
    id: 6,
    name: "Mentorship",
    image: "/img/service/2.jpg",
    text: mentorship
  },
  {
    id: 7,
    name: "Continuous Learning",
    image: "/img/service/2.jpg",
    text: continuousLearning
  },
];

const Service = () => {
  const { setServiceModal, modalToggle } = useContext(context);
  return (
    <SectionContainer name="service">
      <div className="elisc_tm_services">
        <div className="tm_content">
          <div className="elisc_tm_service_title">
            <div className="elisc_tm_title">
              <h3>My Work</h3>
            </div>
            <a href="mailto:rnavaneethkishore@gmail.com">rnavaneethkishore@gmail.com</a>
          </div>
          <div className="service_list">
            <div className="elisc_tm_counter">
              <ul>
                <li>
                  <div className="list_inner">
                    <h3>6+</h3>
                    <span>Years of Web Experience</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>∞</h3>
                    <span>Lines of Code</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>3</h3>
                    <span>Students Mentored</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="elisc_tm_service_title mb-10">
              <div className="elisc_tm_title">
                <h3>My Skills</h3>
              </div>
            </div>
            <ul className="skill-list">
              {services.map((service) => (
                <li key={service.id}>
                  <img
                    className="popup_image"
                    src={service.image}
                    alt="image"
                  />
                  <div className="list_inner">
                    <div className="details">
                      <div className="title">
                        <h3>{service.name}</h3>
                      </div>
                      <div className="text">
                        <p></p>
                      </div>
                      <div className="elisc_tm_read_more">
                        <a href="#">
                          Read More
                          <span>
                            <img
                              className="svg"
                              src="img/svg/rightArrow.svg"
                              alt="image"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <a
                      className="elisc_tm_full_link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setServiceModal(service);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Service;
