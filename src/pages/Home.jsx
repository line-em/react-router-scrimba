import { useLocation } from "react-router-dom";

export default function Home() {
	const location = useLocation();
	// This is how to access previous state.
	return (
		<div>
			{location?.state?.message && (
				<sub style={{ color: "magenta" }}>{location.state.message}</sub>
			)}
			{/* It's useful to use optional chaining, as to avoid errors. In this case, if there is a state, it will show an special message. (Page not found! Back to Home...) */}
			<h2 className="">Homepage</h2>
			<p>Hypothetical list of books I plan to read...</p>
		</div>
	);
}
