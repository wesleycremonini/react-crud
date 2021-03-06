import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Spinner, Stack } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link, useNavigate } from 'react-router-dom'



export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const photoURLRef = useRef();
    const { currentUser, upEmail, upPassword, upProfile } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Senhas não são iguais')
        } else if (passwordRef.current.value.length !== 0 && passwordRef.current.value.length < 6) {
            return setError('Senha muito curta')
        };

        const promises = [];
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(upEmail(emailRef.current.value))
        };
        if (passwordRef.current.value) {
            promises.push(upPassword(passwordRef.current.value))
        };
        if (photoURLRef.current.value !== currentUser.photoURL) {
            promises.push(upProfile({displayName: currentUser.displayName, photoURL: photoURLRef.current.value}))
        }
        
        Promise.all(promises).then(() => {
            navigate("/")
        }).catch(() => {
            setError('Falha ao atualizar')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>
            <Card className='col-8 mx-auto'>
                <Card.Body >
                    <h2 className='text-center mb-4'>Atualizar Perfil</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                        
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder='Deixe em branco para manter'/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Repita a Senha</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder='Deixe em branco para manter'/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Foto de perfil: (URL)</Form.Label>
                            <Form.Control type="url" ref={photoURLRef} 
                            defaultValue={currentUser.photoURL}
                            placeholder='Não obrigatório'/>
                        </Form.Group>

                        {loading ? <Spinner animation="border align-self-center" /> : 
                        <Stack gap={2}>
                            <Button className='w-100' type='submit'>Confirmar</Button>
                            <Link to='/'><Button className='w-100' variant="outline-danger">Cancelar</Button></Link>
                        </Stack>
                        }

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
};
