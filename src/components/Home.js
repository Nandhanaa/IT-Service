import React ,{Component} from 'react';


class Home extends Component {
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"d00f3d5c8ae766e77abf70a1de19a451","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
render(){
    return (
        
          <div className="hero">
           <div className="content">
           <h1 className="text1">Athi Consultancy Services</h1>
           <br>
            
           </br>
           <br></br>
          <p className="text2">An IT consultancy firm proficient across multiple sectors delivering innovative solutions and strategies for digital transformation</p>
          </div>
         
           <img src="https://assets-global.website-files.com/62a85c75feb9bdf4905f9f24/6304d8ceb4423ef3e07b9eaa_16.jpg" alt="logo1" className="into-img"/>
            
          
          
        </div>
    );
}
} 
export default Home;
