
import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }
        console.log(adminData)
        const url = `https://rocky-ocean-05457.heroku.com/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server response', res))
    }


    return (
        <section className="container">
            <div>
                <h4 className="text-cnter">Add Admin</h4>
                <form className="field justify-content-center" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" className="form-control mb-3" required defaultValue="Admin Name" {...register("name")} /><br />
                    <input name="email" className="form-control mb-3" required defaultValue="Admin Email" {...register("email")} /><br />
                    <input className="form" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;