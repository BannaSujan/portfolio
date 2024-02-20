import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import sujan from '../07_Sujan.jpg'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Banner () {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const jobRoles = [ "Software Engineer", "Full Stack Developer", "Programmer", "Java Developer"]
    const [jobTitle, setJobTitle] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return ()=>{clearInterval(ticker)}
    },)

    const tick = () => {
        let i = loopNum % jobRoles.length;
        let fullText = jobRoles[i];
        let updatedText = isDeleting ? fullText.substring(0, jobTitle.length - 1) : fullText.substring(0, jobTitle.length + 1)

        setJobTitle(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }
        else if(!isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum +1)
            setDelta(500)
        }
    }




  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <span className="title"> Sai Sujan Banna</span>
                    <h1 className='designation'>{`I am a `}<span className='wrap'>Full Stack Developer</span></h1>
                    <p className='description'>Highly motivated engineer with successful experience in design, development, testing, and implementation. Proven track record of driving complex engineering projects from concept to production. Adept in leveraging technology to optimize product development cycles and reduce costs. Experienced in working with cross-functional teams and influencing stakeholders to deliver successful outcomes.</p>
                </Col>
                <Col md={6} style={{paddingLeft:'115px',paddingTop:'30px'}}>
                    <Image src={sujan} roundedCircle height={450}/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
