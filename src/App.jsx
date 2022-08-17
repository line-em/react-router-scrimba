import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Booklist from "./pages/Booklist";

function App() {
	// First, use <BrowserRouter> to create a <Router> component. Our <App /> is wrapped in it.
	// Then, you can proceed as follows:
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<Booklist />} />
				<Route path=":id" element={<Book />} />
			</Routes>
		</>
	);
}

export default App;
