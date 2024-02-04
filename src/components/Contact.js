import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
        <div className="container1">
    
        <div className="item1">
            <div className="contact1">
            <div className="firsttext">Let's get in touch</div>
            <br></br>
            <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg" alt="image3" className="image3"></img>
            <br></br>
            <div className="sociallinks">
            <span className="secondtext">Connect with us:</span>
            <ul className="socialmedia">
            <li><i class='bx bxl-facebook' ></i></li>
            <li><i class='bx bxl-twitter' ></i></li>
            <li><i class='bx bxl-youtube' ></i></li>
            <li><i class='bx bxl-linkedin' ></i></li>
            </ul>
            </div>
            </div>
                <div className="submitform">
                    <h4 className="thirdtext">Contact Us</h4>
                    <form id="new">
                        <div className="inputbox">
                        <label className="lab">Name</label>
                            <input type="text" className="inp">
                               
                            </input>
                        </div>
                        <div className="inputbox">
                        <label className="lab">Email</label>
                            <input type="email" className="inp">
                              
                            </input>
                        </div>
                        <div className="inputbox">
                        <label className="lab">Phone</label>
                            <input type="text" className="inp">
                                
                            </input>
                        </div>
                        <div className="inputbox">
                        <label className="lab">Message</label>
                           <textarea className="message" cols="27" rows="5"></textarea>
                              
                            
                        </div>
                        <br></br>
                        <input type="submit" value="Submit" className="btn"></input>
                    </form>
                </div>
            </div>
        
        
        </div>
        
        <section className="csection">
        <div className="wrapper">
        <section className="columns">
        <div className="column">
            <h2 className="add">Address 1</h2>
            <br></br>
            <p>SF – 05, Scottish Mall,
             Sohna Road, Gurgaon,
             Haryana – 122018
             </p>
        </div>
        <div className="column">
            <h2 className="add">Address 2</h2>
            <br></br>
            <p>13/21, Dr. Lakshmi Narayanan Nagar, 
                Madurai Road, Manapparai,
                Trichy, Tamil Nadu – 621 306
            </p>
        </div>
        <div className="column">
            <h2 className="add">Address 3</h2>
            <br></br>
            <p>31 B Vengata Muruga Nivas, 
                Jayaraman Main Road,
                Sameera New Vision Township,
                Vengambakkam, 
                East Tambaram, Chennai, 
                Tamil Nadu - 600 126
</p>
        </div>

        </section>
        </div>
        </section>
       
        </div>
    );
}

export default Contact;
