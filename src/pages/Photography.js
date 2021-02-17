import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Photography() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://api.unsplash.com/users/brandaohh/photos/?client_id=8CBEdxCCyADH_r_3RZgsUvNz5pKptIYIpvRgm3dxmZw'
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    //https://api.unsplash.com/users/brandaohh/photos/?client_id=8CBEdxCCyADH_r_3RZgsUvNz5pKptIYIpvRgm3dxmZw

    return (
        <div className="row">
            {items.map(item => (

                <Link to={`/photography/${item.id}`}>
                    <div className="imageBox">
                        <img key={item.id} style={{ height: "300px" }} src={item.urls.full} alt={item.description} />

                    </div>
                </Link>


            ))}
        </div>
    );
}

export default Photography;