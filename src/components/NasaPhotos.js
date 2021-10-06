import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <img src={photo.url} alt={photo.title} />
    )
}