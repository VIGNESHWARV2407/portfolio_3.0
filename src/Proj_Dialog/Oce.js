import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button
  } from "@mui/material"
  
  import { useState } from "react"
  
  export const Oce = () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button style={{
        color:"white",
       fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
       background: 'linear-gradient(to right, #ff4500, #ff8c00)',
       borderRadius:'20px',
        // width: '300px',height:' 110px'
        }} onClick={() => setOpen(true)}><span id="oce_img"></span>Online Currency Converter</Button>
        <Dialog
         open={open} 
         onClose={() => setOpen(false)}
         >
          <DialogTitle id='dialog-title' >Online Currency Converter</DialogTitle>
          <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
            
            <h4>Online Currency Converter</h4>
            <p><strong>Technologies used: &nbsp;REACT JS , MUI & API Connection</strong></p>
            <p><p><strong>Description:</strong></p>A currency converter developed in React.js utilizes the FreeCurrency API for real-time currency data. 
              With HTML, CSS, and JavaScript, the user-friendly interface allows input of currency values and selection of conversion rates. 
              React.js components ensure dynamic rendering, while API integration provides up-to-date exchange rates. 
              The converter offers seamless currency conversion, meeting diverse user needs across regions and currencies.</p>
            <p><strong>Time Taken : &nbsp;15 Days</strong></p>
            <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>
            {/* <p><b>App URL : </b> Added Shortly</p> */}
          </DialogContent>
        </Dialog>
      </>
    )
  }
  
  export default Oce
  