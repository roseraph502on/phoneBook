import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import usePhonebookStore from '../store/usePhonebookStore';

const ContactList = () => {
    const { phoneBook } = usePhonebookStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(phoneBook); 
    // 초기값을 전체 전화번호부로 설정

    // 검색 버튼 클릭 시 호출되는 함수
    const handleSearch = () => {
        const filtered = phoneBook.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredContacts(filtered); // 필터링된 결과로 상태 업데이트
    };
    React.useEffect(() => {
        setFilteredContacts(phoneBook);
    }, [phoneBook]);


    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            {/* 검색 */}
            <Box display="flex" flexDirection="row" alignItems="center" gap={3}>
                <TextField
                    id="searchField"
                    label="검색할 이름을 입력해주세요"
                    variant="outlined"
                    onChange={(e) => setSearchTerm(e.target.value)} // 검색어 입력 시 상태 업데이트
                />
                <Button variant="contained" color="" onClick={handleSearch}>검색</Button>
                <h2>전체({filteredContacts.length})</h2>
            </Box>
            <Box className='listBox'
            display="flex" flexDirection="column" alignItems="center" gap={3}>
            {filteredContacts.map((item) => (
                <Box className="list" display="flex" flexDirection="row" alignItems="center" gap={2} key={item.id}>
                    <img src="https://static.vecteezy.com/system/resources/previews/020/038/368/non_2x/pink-color-heart-icon-isolated-transparent-background-free-png.png" alt="" />
                    <div>{item.name}</div>
                    <div>{item.phoneNumber}</div>
                    <img src="https://i.pinimg.com/1200x/f8/d8/3d/f8d83df9a75fa81c36bb455d3f6c431c.jpg" alt="" />
                </Box>
            ))}
            </Box>

        </Box>
    );
}

export default ContactList;
