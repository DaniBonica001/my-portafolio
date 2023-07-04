import "./styles.css";
import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilServer } from "@iconscout/react-unicons";
import { UilSwatchbook } from "@iconscout/react-unicons";
import { useState } from "react";

function Skills() {

    const [showSkills, setShowSkills] = useState({
        showSkills1: false,
        showSkills2: true,
        showSkills3: false,
    })

    function frontSkills (event) {    
        setShowSkills({          
            ...showSkills,  
            showSkills1: !showSkills.showSkills1            
        });        
    }

    function backSkills (event) {            
        setShowSkills({    
            ...showSkills,      
            showSkills2: !showSkills.showSkills2,            
        })
    }

    function designSkills (event) {   
        setShowSkills({       
            ...showSkills,     
            showSkills3: !showSkills.showSkills3,            
        })
    }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {/* Skills 1 */}
          <div className={`skills__content ${showSkills.showSkills1 ? 'skills__open': 'skills__close'}`}>
            <div className="skills__header" onClick={frontSkills}>
              <UilBracketsCurly className="skills__icon" />

              <div>
                <h1 className="skills__title">FrontEnd developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills 2 */}
          <div className={`skills__content ${showSkills.showSkills2 ? 'skills__open': 'skills__close'}`}>
            <div className="skills__header" onClick={backSkills}>
              <UilServer className="skills__icon" />

              <div>
                <h1 className="skills__title">BackEnd developer</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__php"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__firebase"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Pyhton</h3>
                  <span className="skills__number">55%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Skills 3 */}
          <div className={`skills__content ${showSkills.showSkills3 ? 'skills__open': 'skills__close'}`}>
            <div className="skills__header" onClick={designSkills}>
              <UilSwatchbook className="skills__icon" />

              <div>
                <h1 className="skills__title">Desgined</h1>
                <span className="skills__subtitle">More than 5 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Figma</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__figma"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Sketch</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sketch"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Photoshop</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__photoshop"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
