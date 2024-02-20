import React from 'react'
import { Container} from 'react-bootstrap'
import "react-circular-progressbar/dist/styles.css";
import SkillCard from './Skill_Card';
import {Row, Col} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skillsData } from '../data/skillsConstants';

export default function Skills() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      

      const skillsCards = skillsData.map((item) => {
		return (
            <div className="skillItems">
			    <SkillCard value={item.value} skillName={item.skillName} skillLevel={item.skillLevel}/>
            </div>
		);
	});

  return (
    <section className='skill' id='skills' style={{paddingTop:'150px' }}>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h1 style={{letterSpacing:'1px'}}>Skills</h1>
                    <Carousel responsive={responsive} infinte={true} className="skill-slider">
                        {skillsCards}
                    </Carousel>
                </div>
                    
                    

                </Col>
            </Row>
        </Container>
    </section>
  )
}
