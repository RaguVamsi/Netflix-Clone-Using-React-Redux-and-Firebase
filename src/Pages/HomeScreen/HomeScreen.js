import React from 'react'
import Nav from '../../components/Nav/Nav';
import "./HomeScreen.css"
import Banner from '../../components/Banner/Banner'
import Row from '../../components/Row/Row';
import Requests from '../../helpers/Requests';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Nav/>

        <Banner/>

        <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title="Trending Now" fetchUrl={Requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={Requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={Requests.fetchTrending}/>

    </div>
  );
};

export default HomeScreen;