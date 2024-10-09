import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const Portfolio = () => {
  const [open, setOpen] = useState(false)
  
  const handleCloseDialog = () => {
    setOpen(false); // once all get hosted., apply it to all the one
  }

  return (
      <>
      <Button style={{
        color: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #f5a623, #f27121)',
        // width: '180px',height:' 140px',
        borderRadius:'20px'
      }} onClick={() => setOpen(true)}><span id="pf_img"></span>Portfolio&nbsp;&nbsp;</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title' ><strong>Portfolio</strong></DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>

          <h4>Personal Portfolio</h4>
          <p><strong>Technologies used: &nbsp;HTML-CSS-JS</strong></p>
          <p><strong>Time Taken : &nbsp;10 Days</strong></p>
          <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>
          <p><b>App URL :</b> <a href="https://vikirealm.vercel.app/" target="blank" onClick={handleCloseDialog}>https://vikirealm.vercel.app/</a></p>
        </DialogContent>
      </Dialog>
    </>
    
  )
}

export default Portfolio
