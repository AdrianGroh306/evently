import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { EventList } from "./components/EventList";
import { EventForm} from "./components/EventFormular";

export const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/new" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
};
