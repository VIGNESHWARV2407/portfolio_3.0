import React from 'react'
import Number from '../Other_CSS/Number'
import MailId from '../Other_CSS/MailId'
function Contacts() {

  return (
    <div className='connections'>
      {/* <div class="border" id="contact"></div> */}
      <h1>Contacts</h1>
      <div class="contact" id="contact">
        <h2>For Contacts & To get connected with me.,</h2>
        <div class="links">
          <a href="https://github.com/VIGNESHWARV2407" id="github" target="_blank"></a>
          <a href="https://www.linkedin.com/in/vigneshwar-v-0b65b322a/" id="linkedin" target="_blank"></a>
          <div className='personal'>
            {/* <Number /><p style={{paddingRight:'60px'}}/> */}

            <a href="tel:9444127645" id="callbtn"></a>
            <MailId />
          </div>
        </div>

      </div> {/* Up  and Down nav button */}
      <a href="#home" className='to_top'><img /></a>
    </div>
  )
}
export default Contacts;
