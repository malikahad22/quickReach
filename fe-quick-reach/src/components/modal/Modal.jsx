import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box, Typography } from "@mui/material";

export default function DeleteAlertDialog(props) {
   const handleCancel = () => {
      props.setOpenDialogue(false);
   };
   const handleConfirm = async () => {
      props.setOpenDialogue(false);
      props.onDelete(props.id);
   };

   return (
      <React.Fragment>
         <Dialog
            open={props.openDialogue}
            onClose={handleCancel}
         >
            <Box
               sx={{
                  gap: 2,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
               }}
            >
               <Typography
                  sx={{ fontSize: "1.5rem", fontWeight: 600, textAlign: "center" }}
               >
                  {props.title}
               </Typography>
               <Typography>
                  {props.body}
               </Typography>
               <Box
                  sx={{
                     display: "flex",
                     gap: 2,
                     mt: 2,
                     width: "100%",
                     justifyContent: "center",
                  }}
               >
                  <Button
                     sx={{ width: 150, py: 1, fontSize: "1rem" }}
                     variant="outlined"
                     onClick={handleCancel}
                  >
                     Cancel
                  </Button>
                  <Button
                     sx={{ width: 150, py: 1, fontSize: "1rem" }}
                     variant="contained"
                     onClick={handleConfirm}
                  >
                     Delete
                  </Button>
               </Box>
            </Box>
         </Dialog>
      </React.Fragment>
   );
}
