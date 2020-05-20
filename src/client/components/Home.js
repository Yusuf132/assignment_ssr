import React from 'react';

import NewsList from './newsList/newsList.component';
import Header from './header/header.component';
import Pagination from './pagination/pagination.component';
import Chart from './chart/chart.component';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Hacker News</title>
                <meta property='og:title' content='Hacker News'/>
            </Helmet>
            <Header/>
            <NewsList/>
            <Pagination/>
            <Chart/>
        </div>
    )
}

export default Home;