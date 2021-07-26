import React, { useState, useEffect } from 'react';

//config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL }  from '../config';


//components



//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//ImageButton
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const { state, loading, error } = useHomeFetch();
    console.log(state);

    return  <div>Home Page</div>
}

export default Home;


