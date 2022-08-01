import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function InfoSnackbar() {
  const { message, type } = useSelector((state) => state.alert);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (message) {
      setOpen(true);
    }
    console.log(message);
  }, [message]);

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={closeSnackbar}>
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
