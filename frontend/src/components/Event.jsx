import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Map from "./Map"


const Event = () => {
  let { id } = useParams();
    const [event, setEvent] = useState({})
    const [isReady, setIsReady] = useState(false);
    
    useEffect(() => {
        const delay = 2000;
        const event_id = id;
        fetch(`http://127.0.0.1:8000/api/events/${event_id}`)
        .then(res => res.json())
        .then((data) => setEvent(data))
        .catch(err => console.log(err.message)) 
        
     const timer = setTimeout(() => {
      setIsReady(true);
      }, delay);
        
     return () => {
      clearTimeout(timer);
    };
    }, [])


    if (event === 'undefined' || event.length === 0) {
        return (
            <div>
                <h4 className="text bg-gray-700">Loading....</h4>
             </div>
         )
    } else {
    return (
      <div className="flex flex-wrap justify-items-start md:justify-items-center">
          <div className="px-4 py-4">
              <img src={event.image_url} alt="" />
          </div>
            <div>
                <div className="px-4 py-4 w-50 min-w-full md:min-w-0">
                    {!isReady ? (
                        <p>Map loading</p>
                    ) : (
                      <Map location={event.location} latitude={event.latitude} longitude={event.longitude} /> 
                    ) }
             </div>
            </div>
            <div className="px-4 py-4">
             <div className="mt-4 flex justify-between">
                <div>
                    <h1 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {event.title}
                    </h1>
                    <h4 className="bold text-gray-900">{event.description}</h4>
                    <p className="mt-1 text-sm text-gray-500">{event.start_date}</p>
                <p className="text-sm font-medium text-gray-900">{event.end_date}</p>
                </div>
                </div>
            </div>
      </div>
  )
 }
}
   



export default Event



