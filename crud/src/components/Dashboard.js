import React, { useState } from 'react';

//bootstrap
import { Card, Button, Alert, Image, Stack } from 'react-bootstrap'

//context hook
import { useAuth } from '../contexts/AuthContext'

//routing
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout();
            navigate("/login")
        } catch {
            setError('Falha ao sair');
        }
    }

    return (
    <div className='bg-primary d-flex align-items-center' style={{ minHeight: "100vh" }}>
        <Card className='col-8 mx-auto'>
            <Card.Body className='d-flex flex-column align-items-center'>

                <h2 className='text-center mb-4'>Perfil</h2>
                {error && <Alert variant='danger'>{error}</Alert>}

                <Image src={currentUser.photoURL} roundedCircle
                border="primary"
                style={{
                    width: '100%',
                    maxWidth: '128px',
                    height: "100%",
                    maxHeight: "128px"
                }}/>

                <p className='mt-4'><strong>Nome: </strong>{currentUser.displayName}</p>

                <p><strong>Email: </strong>{currentUser.email}</p>
                <Stack gap={2}>
                    <Link to="/posts" className='btn btn-primary w-100 mt-3'>Ir para Posts</Link>

                    <Link to="/update-profile" className='btn btn-primary w-100 mt-3'>Atualizar Perfil</Link>
                    <Link to='/posts'><Button className='w-100' variant="outline-primary">Voltar</Button></Link>
                    <Button variant='outline-danger' onClick={handleLogout}>Sair</Button>
                </Stack>
            </Card.Body>
        </Card>
    </div>
    )
}
