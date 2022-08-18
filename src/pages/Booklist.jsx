import { NavLink } from "react-router-dom";

export default function Booklist() {
	return (
		<div>
			<h1>Booklist</h1>
			<ul>
				<li>
					<NavLink to={`/booklist/1`}>Book 1</NavLink>
				</li>
				<li>
					<NavLink to={`/booklist/2`}>Book 2</NavLink>
				</li>
			</ul>
		</div>
	);
}
