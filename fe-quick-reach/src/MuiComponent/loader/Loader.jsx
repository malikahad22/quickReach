import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader({ loading, setLoading }) {
   const handleClose = () => {
      setLoading(false);
   };

   return (
      <div>
         <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
            onClick={handleClose}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
      </div>
   );
}
