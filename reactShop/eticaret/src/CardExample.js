import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './App.css';

function CardExample (props) {
  return(
    <Card onClick={props.onClick} >
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.cars}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.testProp}</span>
        </Card.Meta>
        <Card.Description>
        { props.houses}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
} 

export default CardExample