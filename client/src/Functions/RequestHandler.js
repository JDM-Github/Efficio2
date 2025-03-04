import axios from "axios";

class RequestHandler {
	static async handleRequest(method, link, requestData = {}, headers = {}) {
		const development = false;
		const baseURL = development
			? "http://localhost:8888"
			: "https://debahra.netlify.app";

		// get nakikita ung link o na aacccess
		// put binago na pangalan ng post
		// di accessible sa link

		// get, put, post, delete
		const methodUse = method.toLowerCase();
		const axiosMethod =
			methodUse === "get"
				? axios.get
				: methodUse === "put"
				? axios.put
				: axios.post;

		return await axiosMethod(
			baseURL + "/.netlify/functions/api/" + link,
			requestData,
			headers
		)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				throw error;
			});
	}

	static handleFormSubmit = (e, route) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const params = {};

		for (let [key, value] of formData.entries()) params[key] = value;

		return { route, params };
	};
}

export default RequestHandler;
