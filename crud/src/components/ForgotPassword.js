import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Spinner, Stack } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setMessage('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Instruções foram enviadas ao seu email')
        } catch {
            setError('Não foi possível resetar a senha')
            setLoading(false);
        }
    }

    return (
    <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>

        <Card className='col-8 mx-auto'>
            <Card.Body>
                <h2 className='text-center mb-4'>Resetar Senha</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    {loading ? <Spinner animation="border align-self-center" /> :
                    <Stack gap={2}>
                        <Button className='w-100' type='submit'>Resetar Senha</Button>
                        <Link to='/login'><Button className='w-100' variant="outline-primary">Entrar</Button></Link>
                        <Link to='/cadastro'><Button className='w-100' variant="outline-danger">Criar uma conta</Button></Link>
                    </Stack>
                    }

                </Form>
            </Card.Body>
        </Card>
    </div>
    )
};

