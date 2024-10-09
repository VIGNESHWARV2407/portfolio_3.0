import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const QRcode = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={{
        color: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #0073e6, #93d7e0)',
        // width: '190px',height:' 140px',
        borderRadius:'20px'
      }} onClick={() => setOpen(true)}>&emsp;<span id="qr_img"></span>QR Generator</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title'>QR Generator</DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>

          <h4>QR Generator</h4>
          <p><strong>Technologies used: &nbsp;HTML-CSS-JS</strong></p>
          <p><p><strong>Description:</strong></p>
            A QR code generator is a web tool developed using HTML, CSS, and JavaScript.
            It enables users to create customized QR codes for various data types, such as text, URLs, or contact information.</p>
          <p><strong>Time Taken : &nbsp;2 Days</strong></p>
          <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>          
          <p><b>App URL</b> :  <a href="https://vigneshwarv2407.github.io/qr_code_generator/" target="_blank" rel="noreferrer">https://vigneshwarv2407.github.io/qr_code_generator/</a></p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QRcode
