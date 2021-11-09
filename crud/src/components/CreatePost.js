import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Spinner, Stack } from 'react-bootstrap'

//contexts
import { useDB } from '../contexts/DBContext'

//routing
import { Link, useNavigate } from 'react-router-dom'


export default function CreatePost() {
    const infoRef = useRef();
    const typeRef = useRef();
    const nameRef = useRef();
    const { createPost } = useDB();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await createPost(typeRef.current.value , infoRef.current.value, nameRef.current.value)
            navigate("/posts");
        } catch {
            setError('Falha ao criar')
            setLoading(false);
        }
    }

    return (
    <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>
        <Card className='col-8 mx-auto'>
            <Card.Body>
                <h2 className='text-center mb-4'>Criar Bug</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Select ref={typeRef} required>
                            <option value="Bug">Bug</option>
                            <option value="Tarefa">Tarefa</option>
                            <option value="Crash">Crash</option>
                            <option value="Documentação">Documentação</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Info</Form.Label>
                        <Form.Control type="text" ref={infoRef} required />
                    </Form.Group>

                    <Form.Group className='mb-3' required>
                        <Form.Label>Para quem?</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>

                    {loading ? 
                    <Spinner animation="border align-self-center" /> : 
                    <Stack gap={2}>
                        <Button className='w-100' type='submit'>Criar</Button>
                        <Link to='/posts'><Button className='w-100' variant="outline-danger">Cancelar</Button></Link>
                    </Stack>
                    }

                </Form>
            </Card.Body>
        </Card>
    </div>
    )
};

