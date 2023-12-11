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
                    <a href="#service" onClick={() => navChange("service")}>
                      My Work?
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
                  In the beautiful tapestry of my life, I am Navaneeth—a husband, dog dad, frontend engineer, cricketer, food enthusiast, and, above all, a family man. As a husband, my journey is woven with shared dreams and the everyday joys of companionship. Together, we navigate life's twists and turns, finding strength in the bond we've built.
                </p>
                <p>
                  In the realm of parenthood, I extend my love to a furry family member, embracing the title of a dedicated dog dad. Our home resonates with the pitter-patter of paws, and each wag of the tail adds a layer of warmth to our shared experiences.
                </p>

                <p>
                  By day, I don the hat of a frontend engineer, translating ideas into digital realities. The lines of code are my brushstrokes, and the user interfaces I create are a testament to the fusion of technology and creativity.
                </p>

                <p>
                  On the cricket field, I am an allrounder, fueled by the thrill of competition and the camaraderie with teammates. The sound of leather meeting willow is a language I speak with passion, expressing my love for the game.
                </p>
                <p>
                  Beyond the screens and cricket pitches, I am a fervent food lover, exploring the world through flavors. From culinary adventures to the comfort of home-cooked meals, each dish is a journey, and every taste is a cherished memory.
                </p>
                <p>
                  Yet, amidst these varied roles, my heart finds its anchor in family. Balancing work, sports, and culinary pursuits, the laughter and love shared at the family table are the threads that bind my diverse roles into a harmonious and fulfilling life.
                </p>
                <p>
                  Here are a few things I love in no order
                </p>
                <ul>
                  <li className="yellowColor">Cricket</li>
                  <li className="yellowColor">Anything Chicken</li>
                  <li className="yellowColor">Rap Music</li>
                  <li className="yellowColor">Photography</li>
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
