import React from 'react';
import { Card } from 'react-bootstrap';
import './DonationBank.css'

const DonationBank = () => {
      
     
        

    return (
        <div className='container m-5 p-5'>
          <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Make a Sure Donation</Card.Title>
    <Card.Subtitle className="mb-2 text-muted monthly">
    
    <input  value="One-Time"/>
    <input  value="Monthly" />

    </Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
    );
};

export default DonationBank;