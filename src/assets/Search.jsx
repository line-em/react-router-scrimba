import { NavLink, useSearchParams } from "react-router-dom";

export default function Search() {
	const [searchParams, setSearchParams] = useSearchParams("");
	const search = searchParams.get("search");

	// If you want to store search data, do it like this, with useSearchParams.
	return (
		<>
			<h2>Search</h2>
			<input
				type={"text"}
				onChange={(e) => setSearchParams({ search: e.target.value })}
				value={search}
			/>
			<br />
			<ul>
				<li>Do you want to go to...</li>
				<li>
					<NavLink to={`{/search?${search}}`}>{search}</NavLink>
				</li>
			</ul>
			<sub>PS: No guarantee it exists!</sub>
		</>
	);
}
