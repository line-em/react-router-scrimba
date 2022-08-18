import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<div>
			<h1>Nav</h1>
			{/*  */}
			{/* Link Method */}
			{/*  */}
			{/* This is the basic way of Linking. This is basically an anchor tag. */}
			{/* <Link to={`/`}>Home</Link> */}
			{/* The following is useful for login/sign in pages, for instance. The page will not be recorded in History */}
			{/* <Link to={`/about`} replace>
				About
			</Link> */}
			{/*  */}
			{/*  */}
			{/* NavLink Method */}
			{/*  */}
			{/* This has some extra functionality, and it's best used in a Navbar. */}
			<NavLink to={`/`}>Home</NavLink> /<NavLink to={`/login`}>Login</NavLink> /{" "}
			<NavLink to={`/booklist`} activeClassName="active">
				Booklist
			</NavLink>
			{/* You can manually add an ".active" class. Otherwise, it will automatically grab the .active class from your styles.*/}
		</div>
	);
}
/* The following did not work for me. */

/* <NavLink
				to={`/booklist`}
				style={(
					{ isActive } //You have to deconstruct!
				) => ({
					color: isActive ? "red" : "black"
				})}
			>
				{isActive ? ">" : ""} Booklist */

/* This will add the ">" if isActive is true. */

/* </NavLink> */

/* If this isn't specified, it will grab the .active class. */
