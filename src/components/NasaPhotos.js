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

    return (
        <StyledDiv>
            <img src={photo.url} alt={photo.title} />
            <div>
                <h2>{photo.title}</h2>
                <span>{photo.date}</span>
                <p>{photo.explanation}</p>
            </div>
        </StyledDiv>
    )
}

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

    img {
        width: 50%;
        object-fit: contain;
    }

    div {
        width: 45%;
    }

    p {
        line-height: 1.5;
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
