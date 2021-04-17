import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';



const AddServices = () => {

    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);

    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data.name,
            image: image,
            description: data.description,
            serviceType: data.serviceType,
            serviceCost: data.serviceCost
        }
        const url = `http://localhost:5700/addServices`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response :', res))

    };

    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'f2819ebc8fd1ee226642d4fd74590224')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return (
        <div className="container form-container">
            <h3 className="header text-center"> Thinking About  🤔 New Service <br />Add Service & Modify Service</h3>
            <div className="mt-4 p-5 form-holder-div">
                <form className="field justify-content-center" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" className="form-control mb-3" required defaultValue="Service Name" {...register("name")} /><br />
                    <input name="serviceType" className="form-control mb-3" required defaultValue="Service Type" {...register("type")} /><br />
                    <input name="serviceCost" className="form-control mb-3" required defaultValue="Service Charge" {...register("serviceCost")} /><br />
                    <input name="description" className="form-control mb-3" required defaultValue="Write Something" type="text"  {...register("description")} />
                    <br />

                    <br />
                    <input name="exampleRequired" required className="form-control" type="file" onChange={handleImageUpload} /><br />

                    <input className="form" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;