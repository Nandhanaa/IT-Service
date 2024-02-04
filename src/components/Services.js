import React from 'react';
import {useState} from "react";
import './Services.css';

const Services = () => {
    const[cards]=useState([
        {
            title:'SOFTWARE DEVELOPMENT',
            text:`	We create custom software solutions
            tailored to meet specific business needs.
             This includes Web Applications, Mobile Apps, Desktop Software, and Enterprise Solutions`
           
        },
        {
            title:'WEB DEVELOPMENT AND DESIGN',
            text:`We Design and Develop websites
             ensuring they are user-friendly, visually appealing, and functional. We work on technologies 
             like HTML, CSS, JavaScript, and various web frameworks`
           
        },
        {
            title:'MOBILE APP DEVELOPMENT',
            text:`We create mobile applications for various platforms,
             such as iOS and Android. These apps can be
              for Business purposes, Entertainment, Education, or any other Specific Requirement`
           
        },
        {
            title:'IT CONSULTING',
            text:`We provide expert advice on how businesses can use technology to achieve their objectives
            . This involves analyzing existing systems,
             identifying areas for improvement, and recommending solutions`
           
        },
        {
            title:'CLOUD COMPUTING SEVICES',
            text:`We help businesses migrate their infrastructure,
             applications, and data to cloud platforms like AWS, 
             Azure, and Google Cloud. They also provide Cloud-based solutions and services

                              `
        },
        {
            title:'DATA ANALYTICS AND BUSINESS INTELLIGENCE',
            text:`We help businesses analyze large sets of data to gain
             valuable insights. We use tools and techniques like Data Mining,
              Machine Learning, and Statistical Analysis to provide actionable Business Intelligence`
           
        },
        {
            title:'NETWORK SETUP AND MANAGEMENT',
            text:`We Design, implement, and manage
             computer networks for businesses. This includes setting up routers,
              switches, and other networking hardware, as well as ensuring network security and performance`
           
        },
        {
            title:'HARDWARE SUPPORT AND MAINTANENCE',
            text:`We provide support and maintenance services for computer hardware.
             This includes troubleshooting, repairs, and upgrades for servers, workstations, and
              other devices`
           
        },
        {
            title:'ERP(Enterprise Resource Planning) Implementation' ,
            text:`We implement ERP software solutions to streamline business
             processes and improve overall efficiency. ERP systems integrate 
             various functions within an organization, such as accounting, human resources, and inventory management

            `
           
        },
        {
            title:'CUSTOMER SUPPORT AND CRM(Customer Relationship Management) Solutions',
            text:`We help businesses implement CRM software for managing customer 
            interactions, improving customer service, and maximizing customer satisfaction.
             We also provide customer support services, including helpdesk support and ticketing systems`
           
        }
       
    ])
    return (
        <div>
           <section>
            <div className="container">
                <h1 className="head1">Our Services</h1>
                <div className="cards">
                {
                    cards.map((card,i)=>(
                        <div key={i} className="card">
                        <h3 className="title1">{card.title}</h3>
                        <br></br>

                        <p className="p1">{card.text} </p>
                    </div>
                    ))
                }
                   
                </div>
            </div>
           </section>
           <br>
           </br>
           <br></br>
           
        </div>
    );
}

export default Services;
