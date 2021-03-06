import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const ShowAdmin = () => {

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://rocky-ocean-05457.herokuapp.com/showAdmins')
                .then(res => setAdmin(res.data));
        }
        fetchData()
    }, [admin])
    console.log(admin);


    const LoadAdmin = () => {

        return admin.map(memberAdmin =>
        (
            <div className="container admin-container">
                <div className="admin-div">
                    <Table className="table table-bordered" striped bordered hover size="lg">

                        <tbody>
                            <tr>

                                <td> <strong>{memberAdmin.name}</strong></td>
                                <td> <span >{memberAdmin.email}</span></td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
        )

    }


    return (
        <body>
            <section className="container">
                <div id="admin-holder">
                    {/* <h3 className="text-center text-secondary">Total Admin : {memberAdmin.length}</h3> */}
                    {/* <div className="container">
                        <table className="table table-bordered" size="lg">
                            <thead>
                                <tr>
                                    <th >Admin Name</th>
                                    <th >Admin Email</th>

                                </tr>
                            </thead>
                        </table>
                    </div> */}
                    <LoadAdmin />
                </div>
            </section>
        </body>
    );
};


export default ShowAdmin;