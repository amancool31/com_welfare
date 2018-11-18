import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <div>
      <Card.Group>
  <Card>
    <Image size='medium' src='https://firebasestorage.googleapis.com/v0/b/comwelfare-bfc42.appspot.com/o/anish.jpg?alt=media&token=2bbc63d1-9970-4b9c-bb4f-28466783bfa8' />
    <Card.Content>
      <Card.Header>Anish</Card.Header>
      <Card.Meta>
        <span className='date'>Student, Thapar University<br/>anish123@gmail.com</span>
      </Card.Meta>
      <Card.Description>Anish is Web developer</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="www.github.com/anish110910">
        <Icon name='github' />
      </a>
      <a href="www.github.com/anish110910">
        <Icon name='linkedin' />
      </a>
      <a href="www.github.com/anish110910">
        <Icon name='facebook square' />
      </a>
    </Card.Content>
  </Card>

  <Card>
  <Image size='medium' src='https://firebasestorage.googleapis.com/v0/b/comwelfare-bfc42.appspot.com/o/aa.jpg?alt=media&token=189f88b8-32a7-4282-a259-67ea9ad0027a' />
  <Card.Content>
    <Card.Header>Amandeep Singh</Card.Header>
    <Card.Meta>
      <span className='date'>Student, Thapar University<br/>aman123@gmail.com</span>
    </Card.Meta>
    <Card.Description>Aman is Web developer</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a href="www.github.com/amancool31">
      <Icon name='github' />
    </a>
    <a href="www.github.com/amancool31">
      <Icon name='linkedin' />
    </a>
    <a href="www.github.com/amancool31">
      <Icon name='facebook square' />
    </a>
  </Card.Content>
</Card>

<Card>
  <Image size='medium' src='https://firebasestorage.googleapis.com/v0/b/comwelfare-bfc42.appspot.com/o/mu.jpg?alt=media&token=f98b10ac-56e4-4132-a3dc-6a78a8ef0eee' />
  <Card.Content>
    <Card.Header>Mukul</Card.Header>
    <Card.Meta>
      <span className='date'>Student, Thapar University<br/>mukul@gmail.com</span>
    </Card.Meta>
    <Card.Description>Mukul is Web developer</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a href="www.github.com/anish110910">
      <Icon name='github' />
    </a>
    <a href="www.github.com/anish110910">
      <Icon name='linkedin' />
    </a>
    <a href="www.github.com/anish110910">
      <Icon name='facebook square' />
    </a>
  </Card.Content>
</Card>

<Card>
  <Image size='medium' src='https://firebasestorage.googleapis.com/v0/b/comwelfare-bfc42.appspot.com/o/0.jpg?alt=media&token=04c235b8-d4d7-429a-afd0-da2057996ffe' />
  <Card.Content>
    <Card.Header>Deepak</Card.Header>
    <Card.Meta>
      <span className='date'>Student, Thapar University<br/>deepak@gmail.com</span>
    </Card.Meta>
    <Card.Description>Deepak is Web developer</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a href="www.github.com/anish110910">
      <Icon name='github' />
    </a>
    <a href="www.github.com/anish110910">
      <Icon name='linkedin' />
    </a>
    <a href="www.github.com/anish110910">
      <Icon name='facebook square' />
    </a>
  </Card.Content>
</Card>
</Card.Group>
</div>
)

export default CardExampleCard