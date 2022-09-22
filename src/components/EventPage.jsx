import React, { useState } from 'react'
import './EventPageStyle.css'
import  { useNavigate} from 'react-router-dom'



export default function EventPage() {

const [eventName, setEventName] = useState();
const [hostName, setHostName] = useState();
const [date, setDate] = useState();
const [location, setLocation] = useState();
const [start, setStart] = useState();
const [end, setEnd] = useState();
const [file, setFile] = useState();

const navigate = useNavigate();

console.log(eventName, hostName, date, location, start, end, file)

const handleSubmit = event => {
  event.preventDefault();
  navigate('/create');
};

  return (
    <div className="container">
  <div className="title">Event Registration</div>
  <form action="#" onSubmit={handleSubmit}>
    <div className="user__details">
      <div className="input__box">
        <span className="details">Event Name</span>
        <input value={eventName} onChange={e => setEventName(e.target.value)} type="text" placeholder="E.g: Birthday" required />
      </div>
      <div className="input__box">
        <span className="details">Host name</span>
        <input value={hostName} onChange={e => setHostName(e.target.value)}  type="text" placeholder="Adam" required />
      </div>
      <div className="input__box">
        <span className="details">Date</span>
        <input value={date} onChange={e => setDate(e.target.value)} type="date" placeholder="02.10.2022" required />
      </div>
      <div className="input__box">
        <span className="details">Location</span>
        <input value={location} onChange={e => setLocation(e.target.value)} type="address" placeholder="23,  51 Avenue, NYC" required/>
      </div>
      <div className="input__box">
        <span className="details">Start Time</span>
        <input  value={start} onChange={e => setStart(e.target.value)} type="time" required />
      </div>
      <div className="input__box">
        <span className="details">Finish Time</span>
        <input  value={end} onChange={e => setEnd(e.target.value)} type="time" required />
      </div>
      <div className="input__box">
        <span className="details">Event Photo</span>
        <input  value={file} onChange={e => setFile(e.target.value)} type="file" required />
      </div>
     

    </div>
    <div className="button">
      <input type="submit" value="Next"  />
    </div>
  </form>
</div>
  )
}
