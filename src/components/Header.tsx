import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Evently</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">Events</Link>
        <Link to="/new" className="hover:underline">Event hinzufügen</Link>
      </nav>
    </header>
  );
};
