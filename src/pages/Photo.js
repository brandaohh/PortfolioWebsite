import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Photo({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.unsplash.com/photos/${match.params.id}?client_id=8CBEdxCCyADH_r_3RZgsUvNz5pKptIYIpvRgm3dxmZw`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
        document.getElementById('image').src = item.urls.full;
    }

    return (
        <div>
            <h1>{item.description}</h1>
            <img id="image" style={{ height: "500px", margin: "20px" }} src="" alt="" />
        </div>
    );
}

export default Photo;