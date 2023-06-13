import React, { useEffect, useState } from 'react';

export default function Get() {
    // const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {

            // #GET1 other url

            const response = await fetch('https://dummyjson.com/users');
            const jsonData = await response.json();
            const fetchedUsers = jsonData.users;

            // #GET2 db.json url

            // const response = await fetch('http://localhost:3000/users');
            // const jsonData = await response.json()
            // const fetchedUsers = jsonData.data

            // #POST

            // const userData = {
            //     name: "John Doe",
            //     email: "john.doe@example.com",
            //     phone: "1234567890"
            //     // Include other properties as needed
            // };
            
            // const response1 = await fetch('http://localhost:3000/users', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(userData)
            // });

            // if(response1.ok){
            //     const newUser = await response1.json();
            //     setUsers([...users, newUser])
            // }

            // #Delete

            // const response2 = await fetch('http://localhost:3000/users', {
            //     method: "DELETE"
            // }
            // )

            // setData(fetchedUsers);
            setUsers(fetchedUsers);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Data:</h1>
            <div>
                {users && users.length > 0 ? (
                    users.map((user) => (
                        <div key={user.id}>
                            <p>Id: {user.id}</p>
                            <p>Name: {user.firstName} {user.lastName}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Username: {user.username}</p>
                            <br />

                        </div>
                    ))
                ) : (
                    <p>No users available</p>
                )}

                {/* {data && data.length > 0 ? (
                    data.map((user) => (
                        <div style={{ color: "red" }}>
                            <p>Id: {user.id}</p>
                            <p>Name: {user.name}</p>
                            <p>Password: {user.password}</p>
                        </div>
                    )
                    )
                ) : (
                    <p>not a valid data</p>
                )} */}
            </div>
        </div>
    );
}
