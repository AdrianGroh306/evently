const events = [
    { id: 1, title: 'Hackathon Berlin', date: '2025-03-15', location: 'Berlin' },
    { id: 2, title: 'Tech Meetup Hamburg', date: '2025-04-10', location: 'Hamburg' },
  ];
  
  export const EventList = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Kommende Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id} className="border-b py-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{event.date} - {event.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };