import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Spinner, Stack } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { useNavigate } from 'react-router-dom'



export default function UpdateProfile() {
    const nameRef = useRef();
    const photoURLRef = useRef();
    const { currentUser, upProfile } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('');
            setLoading(true);
            await upProfile({displayName: nameRef.current.value, photoURL: photoURLRef.current.value})
            navigate("/posts");
        } catch {
            setError('Algo deu errado');
            setLoading(false);
        }
    }

    return (
        <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>
            <Card className='col-8 mx-auto'>
                <Card.Body >
                    <h2 className='text-center mb-4'>Escolha um nome e foto</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                        
                        <Form.Group className='mb-3'>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" ref={nameRef} required/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Foto de perfil (URL)</Form.Label>
                            <Form.Control type="url" ref={photoURLRef} 
                            defaultValue={currentUser.photoURL}
                            placeholder='Não obrigatório'/>
                        </Form.Group>

                        {loading ? <Spinner animation="border align-self-center" /> : 
                        <Stack gap={2}>
                            <Button className='w-100' type='submit'>Confirmar</Button>
                        </Stack>
                        }

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
};
