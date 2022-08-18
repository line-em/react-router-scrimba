import { Route, Routes } from "react-router-dom";
import Book from "./pages/Book";
import Booklist from "./pages/Booklist";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./pages/Nav";
import NotFound from "./pages/NotFound";

// React Router documentation is found here: https://reactrouter.com/docs/en/v6/getting-started/concepts

function App() {
	// First, use <BrowserRouter> to create a <Router> component. Our <App /> is wrapped in it.
	// Then, you can proceed as follows:
	return (
		<>
			{/* This is the part that doesn't change. */}
			{/* In this case, I've put the Navbar here. */}
			<Nav />
			{/* Whatever will be changed, will be found wrapped in <Routes> */}
			{/* Here we DEFINE the routes, but it doesn't generate any anchor links nor anything like that. */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				{/* The following is not a self-closing tag. That's because there's child navigation. */}
				{/* This is a nested route. */}
				<Route path="/booklist" element={<Booklist />}>
					<Route path=":id" element={<Book />} />
					{/* (:) means this is a dynamic token: it can and will vary */}
					{/* Due to it being a child, the path will look like this, for example: /booklist/1  */}
					{/* If it wasn't a child, and all the Routes would be self closing, meaning that the following link would look like this: <Route path="/booklist/:id" element={<Book />} /> */}
				</Route>
				{/* Example with profile */}
				{/* <Route path="/profile/" element={<Profile />}>
					<Route path=":id" element={<ProfileId />} />
					<Route path=":id/edit" element={<ProfileEdit />} />
					<Route path="settings" element={<ProfileSettings />} />
				</Route> */}
				{/* The typical 404 page is represented by an asterisk (*) */}
				{/* To see how an ideal NotFound page should look like, see the corresponding page. */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
