import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'

//contexts
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link, useNavigate } from 'react-router-dom'



export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, upEmail, upPassword } = useAuth();
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
        
        Promise.all(promises).then(() => {
            navigate("/")
        }).catch(() => {
            setError('Falha ao atualizar')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <Card className='w-100'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Atualizar Perfil</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group className='mb-3' id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        </Form.Group>

                        <Form.Group className='mb-3' id='password'>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder='Deixe em branco para manter'/>
                        </Form.Group>

                        <Form.Group className='mb-3' id='password-confirm'>
                            <Form.Label>Repita a Senha</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder='Deixe em branco para manter'/>
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit'>Confirmar</Button>

                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Link to='/'>Cancelar</Link>
            </div>
        </>
    )
};
