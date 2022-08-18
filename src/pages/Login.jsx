import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 1000);
	}, []);
	return (
		<>
			<h1>Logging in...</h1>
		</>
	);
};

export default Login;
