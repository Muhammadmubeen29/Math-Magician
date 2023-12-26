const React = require("react");
const { useState, useEffect } = require("react");

const DisplayQuote = () => {
	const quoteCategory = "success";
	const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${quoteCategory}`;
	const [quoteData, setQuoteData] = useState("");
	const [loading, setLoading] = useState(true);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const response = await fetch(apiUrl, {
					method: "GET",
					headers: {
						"X-Api-Key": "EYG4+nl/iDHtmk7LkA/Wgw==6Ayxwjh0eGnR3a8N",
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const jsonData = await response.json();
				setQuoteData(jsonData[0]?.quote || "");
			} catch (error) {
				setFetchError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchQuote();
	}, []);

	if (loading) {
		return React.createElement("h2", null, "Loading...");
	}

	if (fetchError) {
		return React.createElement("p", null, `Error: ${fetchError.message}`);
	}

	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			"div",
			null,
			React.createElement("h1", null, "Quote"),
			React.createElement(
				"ul",
				null,
				React.createElement("li", null, quoteData)
			)
		)
	);
};

module.exports = DisplayQuote;
