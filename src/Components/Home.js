import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'; 
const Home = () =>{
    const [ lyricsItem, setLyricsItem ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    const getLyrics = async () =>{
        try{
            const data = await axios.get(`https://api.lyrics.ovh/v1/rihanna/diamonds`)
            .then(resp =>{
                console.log(resp);
                setLyricsItem(resp.data.lyrics);
            })
                setLoading(true);
        }catch(e){
            console.log(e)
        }
    };

    useEffect(()=> {
        getLyrics();
    },[]);

    return(
        <>
        <center><div>Home Page</div></center> 
        {loading ? lyricsItem : <ReactBootStrap.Spinner animation="border" />}
        </>
    )
}
export default Home;
