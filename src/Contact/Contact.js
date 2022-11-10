import React from "react";
import { BsTwitter, BsLinkedin,BsDownload,BsGithub } from "react-icons/bs";
function Contact() {
   return (
      <div className="app__social">
         <div>
            <a href="https://github.com/Sikhauli">
                <BsGithub/>
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/sikhauli-vhuthuhawe-87979a1a2/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="https://twitter.com/Sikhaulivhuthu">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="">
               <BsDownload />
            </a>
         </div>
        
      </div>
   );
}
export default Contact;