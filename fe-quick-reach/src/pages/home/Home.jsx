import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axiosInstance from '../../services/ApiServices';
import { deleteUser, getUser } from '../../routes/api-routes/api-routes';
import { Box, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import Header from '../../components/header/Header';
import Loader from '../../MuiComponent/loader/Loader';
import DeleteAlertDialog from '../../components/modal/Modal';
import { deleteMethod, get } from '../../api';
import { errorHandler, toastHandler } from '../../utils';

const Home = () => {

   const [loading, setLoading] = useState(false)
   const [editUserId, setEditUserId] = useState(null);
   const [selectedUserId, setSelectedUserId] = useState(null);
   const [openDialogue, setOpenDialogue] = useState(false);
   const [users, setUsers] = useState([]);

   const currentUser = useSelector(state => state.user.isloggedIn);

   const fetchUsers = async () => {
      setLoading(true);
      const { data } = await get(getUser);
      setUsers(data);
      setLoading(false)
   }

   const handleEdit = () => {
      setEditUserId()
   };

   const handleDelete = (id) => {
      setSelectedUserId(id);
      setOpenDialogue(true);
   };

   const onDelete = async (selectedId) => {
      try {
         setLoading(true);
         const response = await deleteMethod(`${deleteUser}/${selectedId}`);
         if (!!response.data === false && response.statusCode !== 200) {
            toastHandler('user not deleted', 'error');
            return;
         }
         toastHandler('user deleted Successfully', 'success');
         fetchUsers();
         setLoading(false)
      } catch (error) {
         errorHandler(error);
         setLoading(false);
      }
   }

   useEffect(() => {
      currentUser && fetchUsers();
   }, []);

   return (
      <>
         <Box>
            <Header />
         </Box>
         {
            !loading ?
               <Box>
                  <Paper>
                     {
                        users.length > 0 ?
                           <List>
                              {users.map((user) => (
                                 <ListItem key={user.id} divider>
                                    {/* Displaying user name and email */}
                                    <ListItemText
                                       primary={`Name: ${user?.name || 'User'}`}
                                       secondary={`Email: ${user.email}`}
                                    />
                                    {/* Edit and Update buttons */}
                                    <Button
                                       variant="outlined"
                                       color="primary"
                                       onClick={() => handleEdit(user.id)}
                                       sx={{ marginRight: 1 }}
                                    >
                                       Edit
                                    </Button>
                                    <Button
                                       variant="contained"
                                       color="secondary"
                                       onClick={() => handleDelete(user.id)}
                                    >
                                       Delete
                                    </Button>
                                    <DeleteAlertDialog title={'Confirmation'} body={'Are you sure to delete user!'} openDialogue={openDialogue} setOpenDialogue={setOpenDialogue} onDelete={onDelete} id={selectedUserId} />
                                 </ListItem>
                              ))}
                           </List> :
                           <Typography>No Data</Typography>
                     }
                  </Paper>
               </Box> :
               <>
                  <Loader loading={loading} setLoading={setLoading} />
               </>
         }
      </>
   )
}

export default Home;