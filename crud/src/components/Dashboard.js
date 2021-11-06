import React, { useState } from 'react';

//bootstrap
import { Card, Button, Alert } from 'react-bootstrap'

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
        <>
            <Card className='w-100'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Perfil</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="/update-profile" className='btn btn-primary w-100 mt-3'>Atualizar Perfil</Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
