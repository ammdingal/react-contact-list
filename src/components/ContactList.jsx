import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/stylesheets/style.css';

function ContactList() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submittedInputs, setSubmittedInputs] = useState([]);

    useEffect(() => {
        const storedInputs = JSON.parse(localStorage.getItem('contacts'));
        if (storedInputs) {
            setSubmittedInputs(storedInputs);
        }
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const newInput = { name, email };
        const updatedInputs = [...submittedInputs, newInput];
        localStorage.setItem('contacts', JSON.stringify(updatedInputs));
        setSubmittedInputs(updatedInputs);
        setName('');
        setEmail('');
    }

    return (
        <div id='contacts'>
            <h1>CONTACT REGISTRATION FORM</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId="formBasicName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Add</Button>
            </Form>
            <div id='details'>
                <h2>CONTACTS</h2>  
                <ul>
                    {submittedInputs.map((input, index) => (
                        <li key={index}>
                        <span>
                            <strong>{input.name}</strong>
                            <p>{input.email}</p>
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactList;
