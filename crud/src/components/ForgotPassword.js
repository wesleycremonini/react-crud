import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link, Navigate } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth();
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
        }
        setLoading(false)
    }

    return (
        <>
            {currentUser != null && <Navigate to='/'/>}
            <Card className='w-100'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Resetar Senha</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group className='mb-3' id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit'>Resetar Senha</Button>

                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/login'>Entrar</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Nao tem uma conta? <Link to='/cadastro'>Cadastrar</Link>
            </div>
        </>
    )
};

