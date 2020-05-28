import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">
            <Fade bottom cascade>
               <div className="row section-head">
                  <h1>Get In Touch.</h1>
                  <div className="row">
                     <p className="lead">{message}</p>
                  </div>
               </div>

               <div className="row">
                  <div className="widget widget_contact">
                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>
               </div>
            </Fade>
         </section>
      );
   }
}

export default Contact;
