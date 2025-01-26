export const EventForm = () => {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Event erstellen</h2>
        <input
          type="text"
          placeholder="Titel"
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="date"
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="text"
          placeholder="Standort"
          className="border rounded w-full p-2 mb-4"
        />
        <textarea
          placeholder="Beschreibung"
          className="border rounded w-full p-2 mb-4"
        ></textarea>
        <button className="w-full bg-blue-500 text-white p-2 rounded">Event speichern</button>
      </div>
    );
  };

  