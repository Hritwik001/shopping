import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../product.json';
import './Card.css'




function Cards() {

    const [item, setItem] = useState(product);
    return (
        <div className='container'>
            {item["mobile"]?.map(value => {
                return <Card key={value.id}>
                    <Card.Img className="card-image" variant="top" src={value.image} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Text>
                            {value.description}
                        </Card.Text>
                        <Card.Text>
                            Price: Rs {value.price}
                        </Card.Text>

                        <Button variant="primary" >Add to Cart</Button>

                    </Card.Body>
                </Card>
            })}
        </div>
    );
}


export default Cards;