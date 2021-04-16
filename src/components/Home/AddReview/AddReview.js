import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {

    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);
    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data.name,
            image: image,
            description: data.description,
            serviceType: data.serviceType,
            satisfactionLevel: data.satisfactionLevel
        }
        const url = `http://localhost:5700/addReviews`;
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
        <div>
            <h5 className="header text-center"> Have Idea 🤔 About New Food <br />Add Food & Grocery items</h5>
            <div className="form-container mt-4 p-5">
                <form className="field w-50 justify-content-center" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" className="form" required defaultValue="Your Name" {...register("name")} />
                    <input name="type" className="form" required defaultValue="Service Type" {...register("type")} />
                    <input name="description" className="form" required defaultValue="Write Your Views" type="text"  {...register("description")} />
                    <br />
                    <input name="satisfactionLevel" className="form" required defaultValue="Your Marks Out Of 10 " type="text"  {...register("satisfactionLevel")} />
                    <br />

                    <br />
                    <input name="exampleRequired" required className="form" type="file" onChange={handleImageUpload} />

                    <input className="form" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;