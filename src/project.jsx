import project from '../src/assets/project.png';

import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">My Projects</h2>
          <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect/ 
          I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> 
          <div className="worksImgs">
                   <img src={project} alt="Amazon Clone" className="worksImg" />
               
               </div>

          <button className="workBtn">See More</button>
                  
                  
     </section>
    

     </>
    }
    