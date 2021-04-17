import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ShowServices.css';





const ShowServices = (props) => {
    const { name, description, image, _id } = props.service;

    const history = useHistory();
    const handleSelectService = _id => {
        history.push(`/details/${_id}`)
    }

    return (
        <div className="col-md-3  my-3 text-center justify-content-center align-items-center card-div">

            <Card onClick={() => handleSelectService(_id)} className="card-holder text-info" style={{ width: '18rem', height: '26rem', margin: '20px' }}>
                <Card.Img className="cardImage" style={{ height: '13rem' }} variant="top" src={image} />
                <Card.Body>
                    <div className="text-center">

                        <Card.Title><h2>{name}</h2>
                        </Card.Title>
                        <Card.Text className="text-dark">
                            {description}
                        </Card.Text>
                        {/* <Card.Footer className=""><span className="mr-3">Price : {price} </span><button onClick={() => handleBuyProduct(_id)} className="button">Buy Now</button></Card.Footer> */}


                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowServices;