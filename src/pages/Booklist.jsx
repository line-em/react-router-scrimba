import { NavLink, Outlet } from "react-router-dom";
import booksData from "../assets/booksData";

export default function Booklist() {
	const bookLinks = booksData.map((book) => (
		<li>
			<NavLink to={`/booklist/${book.id}`}>
				Book {book.id}: {book.title}
			</NavLink>
		</li>
	));

	console.log(bookLinks);

	return (
		<div>
			<h2>Booklist</h2>
			{/* We will see how to render each different book data at the Book component. */}
			<ul>{bookLinks}</ul>
			<Outlet />
			{/* The Outlet will tell the Router to load the new components here. */}
		</div>
	);
}
