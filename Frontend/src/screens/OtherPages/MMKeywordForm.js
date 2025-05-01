import React, { useEffect, useState, setError, setLoading } from 'react';
import { Form, Button, Badge, InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import APIClient from './APIClient'; // Adjust your API client import
import Cookies from "js-cookie";

function MMKeywordForm() {
    const [inputValue, setInputValue] = useState('');
    const [keywordOptions, setKeywordOptions] = useState([]);
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    useEffect(() => {
        const fetchKeywords = async () => {
            
            const jwt_token = Cookies.get("jwt_token");

            try {
                if (!jwt_token) {
                    setError("Unauthorized access. Please log in.");
                    setLoading(false);
                    return;
                }
                const response = await APIClient.get("keywords/names", {
                    headers: { Authorization: `Bearer ${jwt_token}` },
                    withCredentials: true,
                });
                const options = response.data.map(name => ({ label: name, value: name }));
                setKeywordOptions(options);
            } catch (error) {
                console.error("Error fetching keywords:", error);
            }
        };
        fetchKeywords();
    }, []);

    const addKeyword = (keyword) => {
        if (!keyword || selectedKeywords.find(k => k === keyword)) return;
        setSelectedKeywords([...selectedKeywords, keyword]);
        setInputValue('');
    };

    const handleSelectChange = (selectedOption) => {
        if (selectedOption) addKeyword(selectedOption.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addKeyword(inputValue.trim());
        }
    };

    const removeKeyword = (keyword) => {
        setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    };

    return (
        <Form>
            <Form.Group controlId="keywordInput">
                <Form.Label>Add Keywords</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Type a keyword"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                    />
                    <Button variant="primary" onClick={() => addKeyword(inputValue.trim())}>
                        Add
                    </Button>
                </InputGroup>

                <Select
                    options={keywordOptions}
                    onChange={handleSelectChange}
                    placeholder="Or select from list"
                    isClearable
                />
            </Form.Group>

            <div className="mt-3">
                {selectedKeywords.map((keyword, index) => (
                    <Badge
                        key={index}
                        pill
                        bg="secondary"
                        className="me-2 mb-2"
                        style={{ cursor: 'pointer' }}
                        onClick={() => removeKeyword(keyword)}
                    >
                        {keyword} &times;
                    </Badge>
                ))}
            </div>
        </Form>
    );
};

export default MMKeywordForm;