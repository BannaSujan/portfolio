import { Container,Row,Col,Card } from 'react-bootstrap'
import React from 'react'
import {experiences} from '../data/experienceConstants'

export default function Experience() {
    
  return (
    <section className='experience' id='experience'>
        <Container>
            <h1 style={{textAlign:'center'}}>Experience</h1>
            <Row className="justify-content-center" style={{paddingTop: '50px'}}>
                <Col md={8}>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{exp.title} - {exp.company}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{exp.startDate} - {exp.endDate}</Card.Subtitle>
                                            <Card.Text style={{fontSize:'16px'}}>
                                                {exp.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
