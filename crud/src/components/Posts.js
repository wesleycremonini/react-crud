import React, { useEffect, useState } from 'react'

//routing
import { Link } from 'react-router-dom' 
//bootstrap
import { Card, Col, Button, Badge, Row, Image, InputGroup, Form } from 'react-bootstrap'

//context DB
import { useDB } from '../contexts/DBContext';
import { useAuth } from '../contexts/AuthContext'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Posts() {
    const { posts } = useDB();
    const { currentUser } = useAuth();
    const [search, setSearch] = useState("");
    const [searchTag, setSearchTag] = useState("");
    const [loading, setLoading] = useState(true);

    function handleClear() {
        setSearch("");
        setSearchTag("");
    };

    useEffect(() => {
        setLoading(false);
    }, [])

    return (
        <div>
            <div style={{ height: "100px" }} md={12} className='text-light justify-content-between align-items-center d-flex bg-dark p-3'>
                <Badge bg="secondary"><h3>BugTracker</h3></Badge>
                <Link to='/'>
                    <Button style={{border: "none"}} className='d-flex flex-row align-items-center bg-transparent'>
                        <Image src={currentUser.photoURL} style={{width: "50px", height: "50px", cursor: "pointer"}} roundedCircle />
                        <h5 className='ms-3'>Meu Perfil</h5>
                    </Button>
                </Link>
            </div>

            <div style={{ height: "150px" }} md={12} className='d-flex bg-light flex-column p-5 pb-0'>
                <div className='col-12 d-flex flex-column gap-3 flex-md-row bg-light align-self-start'>
                    <div className='d-flex flex-row align-items-center '>
                        <h1>Sumário de Bugs</h1>
                        <Link to='/create-post'><Button className='ms-4'><h4>Criar Bug</h4></Button></Link>
                    </div>

                    <div className='d-flex flex-row align-items-center  ms-auto'>
                        <Form.Group className='w-50'>
                            <Form.Select onChange={(e) => setSearchTag(e.target.value.toLowerCase())}>
                                <option value=''>Todos</option>
                                <option value="Bug">Bug</option>
                                <option value="Tarefa">Tarefa</option>
                                <option value="Crash">Crash</option>
                                <option value="Documentação">Documentação</option>
                            </Form.Select>
                        </Form.Group>
                        <InputGroup className='w-100'>
                            <Form.Control
                            placeholder="Buscar..."
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                            />
                            <Button variant="primary" disabled>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup>
                        <Button variant='success' className='ms-5 w-75' onClick={handleClear}>Limpar Filtros</Button>

                    </div>
                </div>
            </div>

            {!loading &&
                <Row xs={12} md={12} style={{ minHeight: "72vh" }}
                className='w-100 bg-light p-3 d-flex flex-row gap-4 justify-content-center'>

                    <Col lg={2} className='bg-white d-flex flex-column gap-2 rounded-3 p-3'>
                        <h3 className='border-bottom border-info border-4'>Abertos</h3>
                        {posts.map((post, idx) => 
                        <div key={idx}>
                            {post.status === 'abertos' &&
                            post.type.toLowerCase().includes(searchTag) &&
                            (post.assigned.toLowerCase().includes(search) ||
                            post.info.toLowerCase().includes(search) ||
                            post.type.toLowerCase().includes(search)
                                ) &&
                            <Card border={post.color} className="text-center w-100 p-0">

                                <Card.Header className={`text-light bg-${post.color}`}>
                                    {post.type}
                                </Card.Header>

                                <Card.Body className='text-start'>
                                    {post.info}
                                </Card.Body>

                                <Card.Footer>
                                    {post.assigned}
                                </Card.Footer>

                                {/* ADICIONAR BOTÃO DE EDITAR */}
                                <Link to={`/${post.id}`}><Button  variant='secondary' className='w-25'></Button></Link>
                            </Card>
                            }
                        </div>
                            )}
                    </Col>

                    <Col lg={2} className='bg-white d-flex flex-column gap-2 rounded-3 p-3'>
                        <h3 className='border-bottom border-info border-4'>Reabertos</h3>
                        {posts.map((post, idx) => 
                        <div key={idx}>
                            {post.status === 'reabertos' &&
                            post.type.toLowerCase().includes(searchTag) &&
                            (post.assigned.toLowerCase().includes(search) ||
                            post.info.toLowerCase().includes(search) ||
                            post.type.toLowerCase().includes(search)
                                ) &&
                            <Card border={post.color} className="text-center w-100 p-0">

                                <Card.Header className={`text-light bg-${post.color}`}>
                                    {post.type}
                                </Card.Header>

                                <Card.Body className='text-start'>
                                    {post.info}
                                </Card.Body>

                                <Card.Footer>
                                    {post.assigned}
                                </Card.Footer>

                            </Card>
                            }
                        </div>
                            )}
                    </Col>

                    <Col lg={2} className='bg-white d-flex flex-column gap-2 rounded-3 p-3'>
                        <h3 className='border-bottom border-info border-4'>Em Progresso</h3>
                        {posts.map((post, idx) => 
                        <div key={idx}>
                            {post.status === 'em progresso' &&
                            post.type.toLowerCase().includes(searchTag) &&
                            (post.assigned.toLowerCase().includes(search) ||
                            post.info.toLowerCase().includes(search) ||
                            post.type.toLowerCase().includes(search)
                                ) &&
                            <Card border={post.color} className="text-center w-100 p-0">

                                <Card.Header className={`text-light bg-${post.color}`}>
                                    {post.type}
                                </Card.Header>

                                <Card.Body className='text-start'>
                                    {post.info}
                                </Card.Body>

                                <Card.Footer>
                                    {post.assigned}
                                </Card.Footer>

                            </Card>
                            }
                        </div>
                            )}
                    </Col>

                    <Col lg={2} className='bg-white d-flex flex-column gap-2 rounded-3 p-3'>
                        <h3 className='border-bottom border-info border-4'>Fechados</h3>
                        {posts.map((post, idx) => 
                        <div key={idx}>
                            {post.status === 'fechados' &&
                            post.type.toLowerCase().includes(searchTag) &&
                            (post.assigned.toLowerCase().includes(search) ||
                            post.info.toLowerCase().includes(search) ||
                            post.type.toLowerCase().includes(search)
                                ) &&
                            <Card border={post.color} className="text-center w-100 p-0">

                                <Card.Header className={`text-light bg-${post.color}`}>
                                    {post.type}
                                </Card.Header>

                                <Card.Body className='text-start'>
                                    {post.info}
                                </Card.Body>

                                <Card.Footer>
                                    {post.assigned}
                                </Card.Footer>

                            </Card>
                            }
                        </div>
                            )}
                    </Col>

                    <Col lg={2} className='bg-white d-flex flex-column gap-2 rounded-3 p-3'>
                        <h3 className='border-bottom border-info border-4'>Para mim</h3>
                        {posts.map((post, idx) => 
                        <div key={idx}>
                            {post.assigned === currentUser.displayName &&
                            post.type.toLowerCase().includes(searchTag) &&
                            (post.assigned.toLowerCase().includes(search) ||
                            post.info.toLowerCase().includes(search) ||
                            post.type.toLowerCase().includes(search)
                                ) &&
                            <Card border={post.color} className="text-center w-100 p-0">

                                <Card.Header className={`text-light bg-${post.color}`}>
                                    {post.type}
                                </Card.Header>

                                <Card.Body className='text-start'>
                                    {post.info}
                                </Card.Body>

                                <Card.Footer>
                                    {post.assigned}
                                </Card.Footer>

                            </Card>
                            }
                        </div>
                            )}
                    </Col>
                    
                
                </Row>
            }
            
        </div>
    )
}


