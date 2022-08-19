import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import booksData from "../assets/booksData";

export default function Book(props) {
	let params = useParams();
	// used to find which book correspond to the parameters being received from the Route.
	// This will allow for us to use its data.
	const currentBook = booksData.find((book) => {
		return book.id.toString() === params.id;
	});

	// At the course, it is used useHistory. This doesn't exist in v6.
	// In this case, we can simply use useNavigate.
	const navigate = useNavigate();
	const goBack = () => {
		navigate("/booklist");
	};

	// To go forward or backwards, you could also use:
	// const goForward = () => {
	// 	navigate(`/booklist/${currentBook.id + 1}`);
	// };
	// const goBack = () => {
	// 	navigate(`/booklist/${currentBook.id - 1}`);
	// };
	// Or, also, based on the history:
	// const goForward = () => {
	// 	navigate(1);
	// };
	// const goBack = () => {
	// 	navigate(-1);
	// };

	// toggle between read more and read less, using substring to shorten the description.
	const [isShortDescription, setIsShortDescription] = useState(true);
	const maxDescriptionLength = 200;
	const shortDescription = currentBook.description.substring(0, maxDescriptionLength);
	const longDescription = currentBook.description;
	const description = isShortDescription ? shortDescription : longDescription;
	const toggleDescription = () => setIsShortDescription(!isShortDescription);

	return (
		<div key={currentBook.id}>
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
					<br />
					<button onClick={goBack}>Go Back to Booklist</button>
				</p>
				<img src={currentBook.image} alt={currentBook.title} />
			</div>
		</div>
	);
}
