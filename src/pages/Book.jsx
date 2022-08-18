import { useState } from "react";
import { useParams } from "react-router-dom";
import booksData from "../assets/booksData";

export default function Book(props) {
	let params = useParams();
	// used to find which book correspond to the parameters being received from the Route.
	// This will allow for us to use its data.
	const currentBook = booksData.find((book) => {
		return book.id.toString() === params.id;
	});

	const maxDescriptionLength = 200;

	const [isShortDescription, setIsShortDescription] = useState(true);

	const toggleDescription = () => setIsShortDescription(!isShortDescription);

	// toggle between read more and read less, using substring to shorten the description.
	const shortDescription = currentBook.description.substring(0, maxDescriptionLength);
	const longDescription = currentBook.description;
	const description = isShortDescription ? shortDescription : longDescription;

	return (
		<div>
			<hr />
			<sub style={{ color: "magenta" }}>
				This is the book sub-content, placed with an Outlet tag.
			</sub>
			<div className="flex">
				<div>
					<h2>{currentBook.title}</h2>
					<hr />
					<h4>Author: {currentBook.author}</h4>
				</div>
				<p>
					{description}
					<br />
					<br />
					{isShortDescription ? (
						<button onClick={toggleDescription}>Read More</button>
					) : (
						<button onClick={toggleDescription}>Read Less</button>
					)}
				</p>
				<img src={currentBook.image} alt={currentBook.title} />
			</div>
		</div>
	);
}
