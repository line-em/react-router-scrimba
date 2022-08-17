import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Booklist from "./pages/Booklist";
import NotFound from "./pages/NotFound";
import Nav from "./pages/Nav";

// React Router documentation is found here: https://reactrouter.com/docs/en/v6/getting-started/concepts

function App() {
	// First, use <BrowserRouter> to create a <Router> component. Our <App /> is wrapped in it.
	// Then, you can proceed as follows:
	return (
		<>
			{/* This is the part that doesn't change. */}
			<Nav />
			{/* Whatever will be changed, will be found wrapped in <Routes> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<Booklist />} />
				{/* (:) means this is a dynamic token: it can and will vary */}
				<Route path=":id" element={<Book />} />
				{/* The typical 404 page is represented by an asterisk (*) */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
