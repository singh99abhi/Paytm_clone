import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { Send } from "./pages/Sendmoney";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold">My App</h1>
        <nav className="space-x-4">
          <Link to="/signup" className="hover:text-blue-400">Signup</Link>
          <Link to="/signin" className="hover:text-blue-400">Signin</Link>
          <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
          <Link to="/send" className="hover:text-blue-400">Send Money</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="p-6">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<Send />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
