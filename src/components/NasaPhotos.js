import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function NasaPhotos() {
    
    const [photo, setPhoto] = useState('');
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Q2FCqhvngGZha6UkJVNF7Ws1xhi13UbEQvyiLdgg')
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
            <StyledDetails>
                <h2>{photo.title}</h2>
                <span>{photo.date}</span>
                <p>{photo.explanation}</p>
            </StyledDetails>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 2%;
    padding: 2%;

    img {
        width: 50%;
        object-fit: contain;
    }
`

const StyledDetails = styled.div`
    width: 45%;
`