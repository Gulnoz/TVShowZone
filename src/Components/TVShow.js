import React,{useState, useEffect} from 'react';
import { Card, Row } from 'react-bootstrap';

const TVShow = (props) => {
    const{searchText}=props;
    const [tvShows, setTvshows]=useState([]);

    const sortTVShows=(shows)=>{
        shows.sort((a, b) =>  {
            let nameA = a.show.name.toUpperCase(); 
            let nameB = b.show.name.toUpperCase(); 
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        }) 
    }
    const setTVShowHandler=(shows)=>{
        sortTVShows(shows);
        setTvshows([...shows])
        printShows(shows);
    }
    const printShows=(shows)=>{
        shows.forEach(element => {
            console.log(element.show.name)
        });
    }

   const fetchTVShows = (text) => {
        fetch(`http://api.tvmaze.com/search/shows?q=${text}`)
        .then(res=>res.json())
        .then(shows=> setTVShowHandler(shows))
    };
 
   useEffect(() => {
        fetchTVShows(searchText);
   }, [searchText]);

    const mapTVShow = () => tvShows.filter(item=>item.show.image?.medium).map((item, index) => {
        return (
            <Row 
                className="justify-content-center" 
                key={index} 
                style={{margin:"10px" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{item.show.name}</Card.Title>
                        <Card.Img variant="top" src={item.show.image?.medium} />
                    </Card.Body>
                </Card>
            </Row>
        )
        });

    return(
        <>
            { tvShows.length ? <h2>Search result for "{searchText}":</h2> : null}
            <div> {mapTVShow()} </div>
        </>
    )

}
export default TVShow;
