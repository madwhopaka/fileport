import React, {useState, useEffect} from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';


export const SnackBar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(props.error); 

  useEffect(() => {
     if (error) {
         setOpen(true) ; 
         setTimeout(() => {
            setOpen(false);     
             setError(null) ; 
             
         }, 4000);
     }

     
  }, [props])
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
    
  );


  return <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message= {props.error}
        action={action}
      />
  </div>;
};
