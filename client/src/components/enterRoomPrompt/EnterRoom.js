import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.dark};
`;

const Modal = styled.div`
    height: 200px;
    width: 300px;
    margin: 15% auto;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    font-size: 30px;
`;

const Input = styled.input`
    margin: 0 0 20px 0;
    border: 0;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
    height: 30px;
    width: 100%;
    background-color: transparent;
    text-align: center;
    outline: none;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 20px;
`;

const Button = styled.button`
    margin: 0;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    border: 0;
    border-radius: 3px;
    height: 30px;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }
`;

const EnterRoom = ({ setUsername }) => {

    const inputRef = useRef();
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!name) {
            inputRef.current.focus();
            return
        }
        
        setUsername(name);

    };

    const handleChange = e => {
        setName(e.target.value);
    };


    return (
        <Container>
            <Modal>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        ref={inputRef}
                        value={name}
                        onChange={handleChange}
                        name="name"
                        placeholder="Enter Name"
                        type="text"
                    />
                    <Button type="submit">
                        Enter Room
                    </Button>
                </Form>
            </Modal>
        </Container>
    )
}

export default EnterRoom
