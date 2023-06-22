import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events')
        .then(response => response.json())
        .then((data) => setEvents(data))
        .catch(err => console.log(err.message)) 
    }, [])

  return (
     <div>
        <div className="mx-auto max-w-2xl px-2 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {events.map((event) => (
                <div key={event.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                    src={event.image_url}
                    alt={event.image_url}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                     <Link to={{
                        pathname: `/event/${event.id}`
                       }}>
                        <span aria-hidden="true" className="absolute inset-0" />
                         {event.title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{event.start_date}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{event.end_date}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
  )
}

export default Home