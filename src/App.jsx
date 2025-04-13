import { useState } from 'react'
import './App.css'
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import { Grid, Modal, Box } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      
      <h1><img className="logo" src="https://i.pinimg.com/1200x/ac/b4/05/acb4054685d11b626dacf78f4c9bc13a.jpg" /> Phone Book</h1>
      <Box className="phonebook" container spacing={2}  >
        <ContactList />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="addPN"  display="flex" flexDirection="column" alignItems="center">
          <img src="https://i.pinimg.com/1200x/0b/13/7c/0b137c1d970441ee5729aa6a22a50c1a.jpg" alt="" />
          <ContactForm />
        </Box>
      </Modal>

      <img id="addBtn" src="https://cdn-icons-png.flaticon.com/512/3434/3434177.png" onClick={handleOpen} />
    </>
  )
}

export default App
