import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

    const progressBar = <center><div class="loader" id="loader4"></div></center>;
    return(
        <>
        <center><div>Home Page</div></center> 
        {loading ? lyricsItem : progressBar}
        </>
    )
}
export default Home;
