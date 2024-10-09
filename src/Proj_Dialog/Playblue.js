import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@mui/material"

import { useState } from "react"

export const Playblue = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={{
        color: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(to right, #26a267, #34495e)',
        // width: '250px',height:' 140px',
        borderRadius:'20px'
      }} onClick={() => setOpen(true)}><span id="pb_img"></span>RetroPlay&emsp;&emsp;&emsp;</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id='dialog-title'>RetroPlay</DialogTitle>
        <DialogContent id='dialog-desp' style={{ fontSize: "larger" }}>

          <h4>Old Arcade Gaming Platform</h4>
          <p><strong>Technologies used: &nbsp;HTML-CSS-JS</strong></p>
          <p><p><strong>Description:</strong></p>
            "RetroPlay" is an arcade game platform developed with HTML, CSS, and JavaScript, offering classic games like Pong, Maze Runner,
            and Tic Tac Toe. The platform provides an immersive gaming experience with intuitive controls and engaging gameplay
            .Players can enjoy nostalgic gaming moments while exploring various levels and challenges
             across different games, all within a user-friendly web interface</p>
          <p><strong>Time Taken : &nbsp;6 Months</strong></p>
          <p><strong>Status : </strong><h5 style={{backgroundColor:'green', width:'fit-content',padding:'5px',color:'white',borderRadius:'10px'}}>Completed</h5></p>          
          <p><b>App URL : </b><a href="https://retro-play.vercel.app/" target="_blank">https://retro-play.vercel.app/</a></p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Playblue
