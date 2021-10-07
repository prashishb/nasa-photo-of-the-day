import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants';
import styled from 'styled-components';

export default function NasaPhotos() {
    
    const [photo, setPhoto] = useState('');
    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
            .then(res => {
                setPhoto(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    const [sendRequest, setSendRequest] = useState(false);
    
    /*
        Creating date object
        for now the button is disabled when clicking it once
        should probably create a date picker but this will do for now
    */
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() -1);
    const dateString = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();

    // axios request on button click to get yesterdays APOD
    useEffect(() => {
        if (sendRequest) {
            axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${dateString}`)
                .then(res => {
                    setPhoto(res.data);
                    if (document.querySelector('button').classList.contains('on')) {
                        document.querySelector('button').classList.toggle('on')
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }, [sendRequest, dateString])

    return (
        <StyledDiv>
            <img src={photo.url} alt={photo.title} />
            <div>
                <h2>{photo.title}</h2>
                <span>{photo.date}</span>
                <p>{photo.explanation}</p>
                <button className='on' disabled={sendRequest} onClick={() => setSendRequest(true)}>Previous Date</button>
            </div>
        </StyledDiv>
    )
}

// Styling
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 100%;
    width: 80%;
    margin: 0 auto;
    padding: 2%;
    border: 1px solid #d2d2d2;
    border-radius: 2%;
    box-shadow: 0px 1px 6px -2px #807f7f;
    font-size: 20px;
    text-align: left;

    img {
        width: 50%;
        object-fit: contain;
    }

    div {
        width: 45%;
    }

    h2 {
        margin-top: 0;
    }

    p {
        line-height: 2;
    }

    button {
        background-color: rgba(52, 58, 64, 40%);
        padding: 10px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: none;
        border-radius: 2px;
        margin-bottom: 0;
    }

    .on:hover {
        background-color: rgba(52, 58, 64, 60%);
        transition: all .4s ease-in-out;
    }

    @media (max-width: 1280px) {
        display: block;
        font-size: 16px;

        img {
            width: 100%;
        }

        div {
            width: 100%;
        }
    }
`
