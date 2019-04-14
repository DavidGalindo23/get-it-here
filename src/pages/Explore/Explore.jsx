import React from 'react';
import './Explore.css'
import { getEvents } from '../../utils/tm-api'


class Explore extends React.Component{ 

    state = {
        events: [],
    }

    async componentDidMount() {
        const search = await getEvents();
        this.setState({events: search.events})
    }
    
    render() {
        return(
            this.state.events.map((e, idx) => { 
                return (
                    <div key={idx}>
                        <div className="text">{e.name}</div>
                        <img className="img" src={
                            e.images.sort(function(a, b){
                                return a.height - b.height
                            })[e.images.length - 1].url
                        }/>
                    </div>
                )
            }
                
            )
        );
    }
}

export default Explore;