import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GetBasedonId() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div>
            <h1>Data:</h1>
            {user ? (
                <div>
                    <p>Name: {user.firstName} {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Username: {user.username}</p>
                    {/* Render additional user properties as needed */}
                </div>
            ) : (
                <p>No user available</p>
            )}
        </div>
    );
}
