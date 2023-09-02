import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import SectionContainer from "./SectionContainer";
const homeData = {
  skills: ["Web Engineer", "Artist", "Cricketer", "Husband", "Dog Father"],
};
const Home = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0);
    }, 3500);
    return () => clearInterval(interval);
  });
  const { navChange } = useContext(context);
  return (
    <SectionContainer name={"home"}>
      <div className="elisc_tm_home">
        <div className="tm_content">
          <div className="details">
            <div className="left">
              <div className="title">
                <h3>
                  Hi, I'm <span className="blueColor">Navneeth</span>
                </h3>
                <h3>
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="cd-words-wrapper">
                      {homeData.skills.map((skill, i) => (
                        <b
                          key={i}
                          className={text === i ? "is-visible" : "is-hidden"}
                        >
                          {skill}
                        </b>
                      ))}
                    </span>
                  </span>
                </h3>
                <h3>Based in Bay Area</h3>
              </div>
              <div className="subtitle">
                <p>
                  I'm a San Francisco Bay Area based Web & Frontend Engineer with <span className="blueColor"> 6+ years</span> of
                  experience
                </p>
              </div>
              <div className="buttons">
                <div className="elisc_tm_button transition_link">
                  <a href="#portfolio" onClick={() => navChange("portfolio")}>
                    Projects
                  </a>
                </div>
                <div
                  className="elisc_tm_button transition_link"
                  data-style="border"
                >
                  <a href="#contact" onClick={() => navChange("contact")}>
                    Let's talk
                  </a>
                </div>
              </div>
              <div className="info">
                <ul>
                  <li>
                    <a href="tel:+77 022 444 05 05">+1 925 301 5495</a>
                  </li>
                  <li>
                    <a href="mailto:rnavaneethkishore@gmail.com">rnavaneethkishore@gmail.com</a>
                  </li>
                  <li>
                    <a className="href_location" href="#">
                      Pleasanton, California
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <img src="img/about/2.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
