import React from 'react';

const AddServices = () => {

    const handleAddServices = () => {
        console.log('add services');
    }

    return (
        <div>
            <h2>this is to add services.</h2>
            <button onClick={() => handleAddServices()}>
                Add Services
            </button>
        </div>
    );
};

export default AddServices;