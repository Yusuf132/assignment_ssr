import React from 'react';

import NewsList from './newsList/newsList.component';
import Header from './header/header.component';
import Pagination from './pagination/pagination.component';
import Chart from './chart/chart.component';


const Home = () => {
    return (
        <div>
            <Header/>
            <NewsList/>
            <Pagination/>
            <Chart/>
        </div>
    )
}

export default Home;