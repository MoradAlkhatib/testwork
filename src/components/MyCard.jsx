import Card from 'react-bootstrap/Card';

function MyCard({cardData}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardData.image} />
      <Card.Body>
        <Card.Title>{cardData.name}</Card.Title>
        <Card.Text>
        {cardData.description}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default MyCard;