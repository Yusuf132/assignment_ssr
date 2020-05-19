import React from 'react';

import NewsList from './newsList/newsList.component';
import Header from './header/header.component';


const Home = () => {
    return (
        <div>
            <Header/>
            <NewsList/>
        </div>
    )
}

export default Home;