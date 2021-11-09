import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Spinner, Stack } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/posts");
        } catch {
            setError('Algo deu errado');
            setLoading(false);
        }
    }

    return (
    <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>
        <Card className='col-8 mx-auto'>
            <Card.Body>
                <h2 className='text-center mb-4'>Entrar</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    
                    {loading ? <Spinner animation="border align-self-center" /> : 
                    <Stack gap={2}>
                        <Button className='w-100' type='submit'>Entrar</Button>
                        <Link to='/cadastro'><Button className='w-100' variant="outline-primary">Criar uma conta</Button></Link>
                        <Link to='/esqueci-senha'><Button className='w-100' variant="outline-danger">Esqueci minha senha</Button></Link>
                    </Stack>
                    }
                </Form>
            </Card.Body>
        </Card>
    </div>
    )
};

export default Login;
