import ISHA from '../src/assets/ISHA.jpg'
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Isha Motwani</span> 
          <img src={ISHA} alt="profile" className="isha" width="750" height="750" align="right" />
          <br/>Website Designer</span>
          <p className="introPara">I am an aspiring web designer trying to gain experience in creating visually appealing user friendly websites.</p>
          <Link><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
          
          </div>
          
     </section>
    

     </>
     }
    