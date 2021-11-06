import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link, useNavigate, Navigate } from 'react-router-dom'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/");
        } catch {
            setError('Algo deu errado');
        }
        setLoading(false);
    }

    return (
        <>
            {currentUser != null && <Navigate to='/'/>}
            <Card className='w-100'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Entrar</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group className='mb-3' id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Form.Group className='mb-3' id='password'>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit'>Entrar</Button>

                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/esqueci-senha'>Esqueci minha senha</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Nao tem uma conta? <Link to='/cadastro'>Cadastrar</Link>
            </div>
        </>
    )
};

export default Login;
