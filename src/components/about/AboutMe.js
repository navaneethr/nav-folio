import { context } from "@/src/context/context";
import { useContext } from "react";
import SectionContainer from "../SectionContainer";
const AboutMe = () => {
  const { navChange } = useContext(context);
  return (
    <SectionContainer name="about">
      <div className="elisc_tm_about">
        <div className="tm_content">
          <div className="elisc_tm_biography">
            <div className="left">
              <div className="title">
                <span className="mini">Nice to meet you!</span>
                <h3 className="name">Navneeth Rameshwaram</h3>
                <span className="job">
                  <span className="cd-headline rotate-1">
                    <span className="blc">Web Engineer</span>
                  </span>
                </span>
              </div>
              <div className="elisc_tm_abt">
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
              </div>
            </div>
            <div className="right">
              <div className="text">
                <p>
                  Hello there! My name is{" "}
                  <span className="yellowColor">Navneeth Rameshwaram</span>. I am a web
                  engineer.
                </p>
                <p>
                  I believe I'm a spatial learner.<br/> 
                  I have to give the due credit to my eyes for allowing me to 
                  see the beauty of this world, if not for them, I'd never be able to comprehend the intricacies of day to day life and understand what goes behind in making 
                  this place a better one to cherish.
                </p>
                <p>
                  I was born on 2nd October of 1992 in the beautiful Old City of Hyderabad, India. I was the oldest of the 3 kids, Mom and Dad worked for the government in decent positions, 
                  we were taught to work hard to succeed until I realized not all lessons they taught were 100% correct. Life has taught me that I needed to work smart 
                  to succed in life and the hustle begins.
                </p>
                <p>
                  I chose to learn some of these lessons, some I never did and some I unlearnt. I think everyone reaches a point wherein they decide what's right and wrong and so, I have my own "Rules & Principles" book now.
                  Guess I'm going too deep - "That's what she said", I'll stop it right there, talk with me to know more.
                </p>
                <p>
                  Here are a few things I love in no order
                </p>
                <ul>
                  <li className="yellowColor">Cricket</li>
                  <li className="yellowColor">Anything Chicken</li>
                  <li className="yellowColor">Rap Music</li>
                  <li className="yellowColor">Photography & Videography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default AboutMe;
