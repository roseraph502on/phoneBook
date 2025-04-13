import React from 'react'
import { useState } from 'react';
import {Box,TextField,Button} from '@mui/material';
import usePhonebookStore from '../store/usePhonebookStore';



const ContactForm = () => {

    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const {addContact} = usePhonebookStore();

    const hadleAddContact=()=>{
        console.log("hadleAddContact");
        if(!name.trim() || !phoneNumber.trim()) return

        addContact(name,phoneNumber);
    }
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
            <TextField id="addField" label="이름" variant="outlined"
             value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField id="addField" label="전화번호" variant="outlined"
            value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
            <Button id="addField" variant="contained" color="" 
            onClick={hadleAddContact}>추가하기</Button>

        </Box>
    )
}

export default ContactForm
