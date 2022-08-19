import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/", { state: { message: "Page not found! Back to home..." } });
			// We can pass a persistant state, like a message, to the next page.
			// We can access this with useLocation(). Check <Home />, our redirect page,
			// to see how we can access this state.
		}, 1000);
	}, []);

	return (
		<div>
			{/* If you don't want to redirect users to some other page that exists */}
			<h1>NotFound</h1>
			{/* if you want to automatically navigate someone to a certain page, like Home. */}
		</div>
	);
}
