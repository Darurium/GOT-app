import React from 'react';
import "./error.css"
import imgError from "./error.jpg";

const Error = () => {
    return (
        <>
            <img src={imgError} alt=""></img>
            <span>Произошла ошибка</span>
        </>
    )
}

export default Error;