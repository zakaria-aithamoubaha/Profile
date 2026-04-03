import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

// Suspense was wrapping a synchronous component with no lazy() imports.
// Removed the redundant wrapper and the empty <></> fragment.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
