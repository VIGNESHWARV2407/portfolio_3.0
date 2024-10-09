import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const Spd = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button style={{
        color: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #9013fe, #525252)',
        // width: '300px',height:' 140px',
        borderRadius: '20px'
      }} onClick={() => setOpen(true)}><span id="spd_img"></span>Strong Password Generator</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title'><strong>Strong Password Generator</strong></DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>

          <h4>Strong Password Generator</h4>
          <p><strong>Technologies used: &nbsp;HTML-CSS-JS</strong></p>
          <p><p><strong>Description:</strong></p>A strong password generator is a web tool built using HTML, CSS, and JavaScript.
            It dynamically creates secure passwords with a mix of letters, numbers, and special characters.
            Users can customize password length and character types to generate highly secure passwords for online accounts.</p>
          <p><strong>Time Taken : &nbsp;2 Days</strong></p>
          <p><strong>Status : </strong><h5 style={{ backgroundColor: 'green', width: 'fit-content', padding: '5px', color: 'white', borderRadius: '10px' }}>Completed</h5></p>
          {/* <p><b>App URL</b> :  Added shortly </p> */}

        </DialogContent>
      </Dialog>
    </>
  )
}

export default Spd
