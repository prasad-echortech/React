import React, { useState, useEffect } from 'react';
import AnotherComponent from './AnotherComponent';


export default function FF() {

    const [formData, setformData] = useState([]);
    const [selectedForm, setselectedForm] = useState("");

    useEffect(() => {
        fetchData();
    }, [selectedForm]);

    const fetchData = async () => {
        try {
            const response = await fetch(` http://localhost:3000/${selectedForm}`);
            const formData = await response.json();
            setformData(formData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    const handleForm = (formName) => {
        setselectedForm(formName)
    }
    return (
        <>
            <div className='mt-2 mb-5'>
                <button className='btn btn-success' onClick={() => handleForm('formdata')}>form1</button>
                <button className='btn btn-success' onClick={() => handleForm('formdata1')}>form2</button>
                <button className='btn btn-success' onClick={() => handleForm('formdata2')}>form3</button>
                <button className='btn btn-success' onClick={() => handleForm('formdata3')}>form4</button>
                <button className='btn btn-success' onClick={() => handleForm('formdata4')}>form5</button>
            </div>
            {selectedForm && (
                <div>
                    <AnotherComponent formData={formData} />
                </div>
            )}
        </>
    );
};

