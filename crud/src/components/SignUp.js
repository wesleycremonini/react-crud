import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link, useNavigate } from 'react-router-dom'


function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Senhas não são iguais')
        } else if (passwordRef.current.value.length < 6) {
            return setError('Senha muito curta')
        };

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")

        } catch {
            setError('Não foi possível criar uma conta')
        }
        setLoading(false);
    }

    return (
        <>
            <Card className='w-100'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Cadastro</h2>
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

                        <Form.Group className='mb-3' id='password-confirm'>
                            <Form.Label>Repita a Senha</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit'>Cadastrar</Button>

                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Ja tem uma conta? <Link to='/login'>Entrar</Link>
            </div>
        </>
    )
};

export default SignUp;
