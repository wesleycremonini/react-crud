import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Spinner, Stack } from 'react-bootstrap'

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
            navigate("/nome")

        } catch {
            setError('Não foi possível criar uma conta')
            setLoading(false);
        };
    }

    return (
    <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>

        <Card className='col-8 mx-auto'>
            <Card.Body>
                <h2 className='text-center mb-4'>Cadastro</h2>
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

                    <Form.Group className='mb-3'>
                        <Form.Label>Repita a Senha</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>

                    {loading ? <Spinner animation="border align-self-center" /> : 
                    <Stack gap={2}>
                        <Button className='w-100' type='submit'>Cadastrar</Button>
                        <Link to='/login'><Button className='w-100' variant="outline-primary">Já tenho uma conta</Button></Link>
                    </Stack>
                }

                </Form>
            </Card.Body>
        </Card>
    </div>
    )

};

export default SignUp;
