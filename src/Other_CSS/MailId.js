import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MailStyling from './Number.module.css'


export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
        <Button href="mailto:vigneshwarvenugopal24@gmail.com" onClick={handleClick({ vertical: 'bottom', horizontal: 'center'})} className={MailStyling.click} sx={{borderRadius:'30%',padding:'35px'}}></Button>
  );

  return (
    <Box sx={{ width: 20 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="vigneshwarvenugopal24@gmail.com"
        key={vertical + horizontal}
      />
    </Box>
  );
}