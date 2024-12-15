import React from 'react';
import { Card } from 'react-bootstrap';
import './Testimonials.css'

const Testimonial = ({ testimonial }) => {
    const { name, description, img } = testimonial;

    return (


        <Card className='item shadow-effect' style={{ width: '22rem' }}>
            <Card.Img className="img-circle" variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fw-bold' style={{ color: 'crimson' }}>{name}</Card.Title>

                <Card.Text className='paragrap'>

                    {description}
                </Card.Text>
                <i className="fas fa-star" style={{ color: '#f8c51c' }}></i>
                <i className="fas fa-star" style={{ color: '#f8c51c' }}></i>
                <i className="fas fa-star" style={{ color: '#f8c51c' }}></i>
                <i className="fas fa-star" style={{ color: '#f8c51c' }}></i>
                <i className="fas fa-star-half-alt" style={{ color: '#f8c51c' }}></i>
            </Card.Body>
        </Card>
    );
};

export default Testimonial;