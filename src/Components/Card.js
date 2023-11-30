import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../product.json';
import './Card.css'
import { useNavigate } from 'react-router-dom';




function Cards() {

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate("/details", { state: { id } })
    }

    const [item, setItem] = useState(product);
    return (
        <div className='container'>
            <h1>Ecommerce in React and SnipCart</h1>
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

                        <Button variant="primary" onClick={() => { handleClick(value.id) }}>Add to Cart</Button>

                    </Card.Body>
                </Card>
            })}
        </div>
    );
}


export default Cards;