import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className="heading2">
        <h1 className="first1">About Us</h1>
        <p className="first2">Athi Consultancy Services provide a wide range of services to
         businesses and organizations,leveraging technology to solve problems,
         improve efficiency, and achieve their goals</p>
         <br>

         </br>
         <br></br>
          <div className="container2">
            <section className="about">
                <div className="aboutimage">
                    <img src="https://img.freepik.com/free-vector/software-engineer-statistician-visualizer-analyst-working-project-big-data-conference-big-data-presentation-data-science-concept-bright-vibrant-violet-isolated-illustration_335657-391.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais" alt="aboutiage" className="aboutimag"></img>
                    
                </div>
                <div className="aboutcontent">
            
                <p className="new1">Our expertise lies in identifying technologically-driven solutions that help 
                businesses increase productivity, streamline processes, and thrive in the digital
                 age.The diverse services encompass technology integration, strategic consultancy,
                  digital transformation, and custom software development, empowering organizations to adapt and innovate. </p>
                  <br></br>
                
                <p className="second">It focuses on insights from data analysis and provides customized methods to promote 
                  faster growth and well-informed decision-making. Furthermore, the extensive training programs guarantee 
                  that teams  are equipped with the necessary skills to leverage technology effectively.
                  It continues to be a strategic partner for businesses, facilitating their evolution 
                  and sustained success in an ever-changing technological realm.</p>
                  <br></br>
                  </div>
            </section>
          </div>
        </div>
        
    );
}

export default About;
