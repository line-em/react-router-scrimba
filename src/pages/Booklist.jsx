import { NavLink, Outlet } from "react-router-dom";

export default function Booklist() {
	return (
		<div>
			<h2>Booklist</h2>
			<ul>
				<li>
					<NavLink to={`/booklist/1`}>Book 1</NavLink>
				</li>
				<li>
					<NavLink to={`/booklist/2`}>Book 2</NavLink>
				</li>
			</ul>
			<Outlet />
			{/* The Outlet will tell the Router to load the new components here. */}
		</div>
	);
}
