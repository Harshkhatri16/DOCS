import React, { useEffect } from 'react';
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap';
import './Syllabus.css';

const Syllabus = () => {
    const programs = [
        { title: 'MSC (CA & IT) Integrated', semesters: 10 },
        { title: 'BS in CS', semesters: 8 },
        { title: 'MSC (IT)', semesters: 4 },
        { title: 'PGDCA', semesters: 2 },
    ];
     useEffect(() => {
            // Scroll to the top on page load
            window.scrollTo(0, 0);
        }, []);
    

    return (
        <Container fluid="md" className="py-4 " style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Row>
                {programs.map((program, index) => (
                    <Col md={5} key={index} className="mb-4 justify-content-center">
                        <Card className="shadow-lg border-0 bg-light " style={{ backgroundColor: '#ffffff', borderRadius: '15px' }}>
                            <Card.Body>
                                <Container className='ml-5' >
                                    <h4 className="text-center mb-3 " style={{ fontWeight: 'bold' }}>{program.title} </h4>
                                    <Accordion alwaysOpen className="semester-accordion bg-light ml-5">
                                        {Array.from({ length: program.semesters }, (_, i) => (
                                            <Accordion.Item className='bg-light ' eventKey={i.toString()} key={i}>
                                                <Accordion.Header>
                                                    Semester {i + 1}
                                                </Accordion.Header>
                                                <Accordion.Body className='bg-light'>
                                                    Course details for Semester {i + 1}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>    
    );
};

export default Syllabus;