import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'
const Event = (props) => {

    const [event, setEvent] = useState([])
    const [time, setTime] = useState([])
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    // useEffect(() => {
        // (async () => {
    //         try {
    //             // const result = await dates.formatTime(event.time)
    //             // setTime(result)
    //             const formattedTime = new Date(event.time).toLocaleTimeString();
    //             setTime(formattedTime);
    //         }
    //         catch (error) {
    //             throw error
    //         }
    //     }) ()
    // }, [event])

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const timeRemaining = await dates.formatRemainingTime(event.remaining)
    //             setRemaining(timeRemaining)
    //             dates.formatNegativeTimeRemaining(remaining, event.id)
    //         }
    //         catch (error) {
    //             throw error
    //         }
    //     }) ()
    // }, [event])

    useEffect(() => {
        (async () => {
        try {
            const now = new Date();
            const endTime = new Date(event.remaining);
            const timeDiff = endTime - now;
            const remainingHours = Math.floor(timeDiff / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
            const timeRemaining = `${remainingHours} hours and ${remainingMinutes} minutes remaining`;
            setRemaining(timeRemaining);
            
            // Assuming you want to do something when time is negative:
            if(timeDiff < 0) {
                // You can add code to handle negative remaining time here.
                // Example: Notify that the event is over.
            }
        } catch (error) {
            console.error("Error computing remaining time:", error);
        }
    }) ()
    }, [event]);

    return (
        <article className='event-information'>
            <img src={event.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {event.date} <br /> {time}</p>
                    <p id={`remaining-${event.id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event