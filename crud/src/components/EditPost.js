import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Spinner, Stack } from 'react-bootstrap'

//contexts
import { useDB } from '../contexts/DBContext'

//routing
import { Link, useNavigate } from 'react-router-dom'


export default function EditPost({ postRef, typeValue, infoValue, assignedValue, statusValue }) {
    const infoRef = useRef();
    const typeRef = useRef();
    const nameRef = useRef();
    const statusRef = useRef();
    const { editPost, deletePost } = useDB();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await editPost(postRef, typeRef.current.value, infoRef.current.value, nameRef.current.value, statusRef.current.value)
            navigate("/posts");
        } catch {
            setError('Falha ao editar')
            setLoading(false);
        }
    };

    async function handleDelete(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await deletePost(postRef)
            navigate("/posts");
        } catch {
            setError('Falha ao deletar')
            setLoading(false);
        }
    };

    return (
    <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>
        <Card className='col-8 mx-auto'>
            <Card.Body>
                <h2 className='text-center mb-4'>Editar Bug</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Select defaultValue={typeValue} ref={typeRef} required>
                            <option value="Bug">Bug</option>
                            <option value="Tarefa">Tarefa</option>
                            <option value="Crash">Crash</option>
                            <option value="Documentação">Documentação</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Info</Form.Label>
                        <Form.Control defaultValue={infoValue} type="text" ref={infoRef} required />
                    </Form.Group>

                    <Form.Group className='mb-3' required>
                        <Form.Label>Para quem?</Form.Label>
                        <Form.Control defaultValue={assignedValue} type="text" ref={nameRef} required />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Estado</Form.Label>
                        <Form.Select defaultValue={statusValue} ref={statusRef} required>
                            <option value="abertos">Aberto</option>
                            <option value="reabertos">Reaberto</option>
                            <option value="em progresso">Em Progresso</option>
                            <option value="fechados">Fechado</option>
                        </Form.Select>
                    </Form.Group>

                    {loading ? 
                    <Spinner animation="border align-self-center" /> : 
                    <Stack gap={2}>
                        <Button className='w-100' type='submit'>Editar</Button>
                        <Link to='/posts'><Button className='w-100' variant="outline-danger">Cancelar</Button></Link>
                        <Button className='w-100' variant="danger" onClick={handleDelete}>Deletar</Button>
                    </Stack>
                    }

                </Form>
            </Card.Body>
        </Card>
    </div>
    )
};

