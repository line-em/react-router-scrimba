import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<div>
			<h1>Nav</h1>
			{/* Link Method */}
			{/*  */}
			{/* This is the basic way of Linking. This is basically an anchor tag. */}
			{/* <Link to={`/`}>Home</Link> */}
			{/* The following is useful for login/sign in pages, for instance. The page will not be recorded in History */}
			{/* <Link to={`/login`} replace>Login</Link> */}
			{/*  */}
			{/* NavLink Method */}
			{/*  */}
			{/* This has some extra functionality, and it's best used in a Navbar. */}
			<NavLink to={`/`}>Home</NavLink> /<NavLink to={`/login`}>Login</NavLink> /
			<NavLink to={`/booklist`}>Booklist</NavLink>
			{/* It will automatically grab the .active class from your styles. Theoritically you can customize, but I was unable to.*/}
			<hr />
		</div>
	);
}
