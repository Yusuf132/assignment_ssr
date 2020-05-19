import React from 'react';

import NewsList from './newsList/newsList.component';
import Header from './header/header.component';
import Pagination from './pagination/pagination.component';


const Home = () => {
    return (
        <div>
            <Header/>
            <NewsList/>
            <Pagination/>
        </div>
    )
}

export default Home;