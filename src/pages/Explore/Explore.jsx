import React from 'react';
import './Explore.css'
import { getEvents } from '../../utils/tm-api'


class Explore extends React.Component{ 

    state = {
        events: [],
    }

    generateRandomNumber(name){ 
        const competitors = { 
            seatGeek:{ 
                low: 75,
                high: 200
            },
            vividseats:{ 
                low: 75,
                high: 200
            },
            tickmaster:{
                low: 75,
                high: 200
            }

        }
        return(Math.floor(Math.random() * competitors[name].high + competitors[name].low))
    }

    async componentDidMount() {
        const search = await getEvents();
        this.setState({events: search.events})
        const events = await getEvents();
        console.log(events);
    }

    
    render() {
        return(
            this.state.events.map((e, idx) => { 
                return (
                    <div key={idx}  class="text-center">
                        <div className="div-body">{e.name}</div>
                        <img className="img"  src={
                            e.images.sort(function(a, b){
                                return a.height - b.height
                            })[e.images.length - 1].url
                        }/>
                        <div className="div-body">seatGeek:${this.generateRandomNumber("seatGeek")}</div>
                        <div className="div-body">tickmaster:${this.generateRandomNumber("tickmaster")}</div>
                        <div className="div-body">vividseats:${this.generateRandomNumber("vividseats")}</div>
                        <div className="bottom">Date:{e.dates.start.localDate}</div>
                    </div>
                )
            }
                
            )
        );
    }
}

export default Explore;