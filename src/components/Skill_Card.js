import React from 'react'
import Card from 'react-bootstrap/Card';
import { CircularProgressbar } from 'react-circular-progressbar';

export default function SkillCard(props) {
  return (
    <Card style={{ width: '15rem', alignItems:'center', paddingTop:'20px', color:'white', background:'#171721', textAlign:'center', marginLeft: '10px', paddingLeft:'5px' , paddingRight
    : '5px', borderRadius:'25px'}} >
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar value={props.value} text={props.value+'%'}/>
      </div>
      <Card.Body>
        <Card.Title>{props.skillName}</Card.Title>
        <Card.Text style={{ fontSize:'10px'}}>
          {props.skillLevel}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
