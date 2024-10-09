import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button
  } from "@mui/material"
 

  import { useState } from "react"
  
  export const EveSche = () => {
    const [open, setOpen] = useState(false)
    return (
      <>

        <Button style={{
        color:"white",
       fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
       background: 'linear-gradient(to right, #00c6ff, #0072ff)',
       borderRadius:'20px',
        // width: '250px',height:' 110px'
        }} onClick={() => setOpen(true)}><span id="es_img"></span>Event Scheduler</Button>
        <Dialog
         open={open} 
         onClose={() => setOpen(false)}
         >
          <DialogTitle id='dialog-title' >Event Scheduler</DialogTitle>
          <DialogContent id='dialog-desp' style={{fontSize:"larger"}}>
            
            <h4><strong>Event Scheduler</strong></h4>
            <p><strong>Technologies used: &nbsp;NEXT JS & MUI</strong></p>
            <p><p><strong>Description:</strong></p>An event scheduler built with Next.js facilitates time and event slot management. 
              Using JS functions users can allocate time slots for events with ease. 
              Next.js enables server-side rendering and dynamic routing for enhanced performance. 
              The scheduler provides real-time updates and seamless navigation for efficient event planning. 
              It offers a user-friendly interface to streamline time management and event organization.</p>
            <p><strong>Time Taken : &nbsp;1 Month</strong></p>
            <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>         
            {/* <p><b>App URL</b> :  Added Shortly</p> */}
          </DialogContent>
        </Dialog>
      </>
    )
  }
  
  export default EveSche
  