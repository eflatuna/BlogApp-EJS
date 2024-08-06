//* Error Handler

module.exports = (err, req, res, next) => {
	console.log(err);
	const errorStatusCode = res?.errorStatusCode || 500;
	// res.status(errorStatusCode).send({
	//   error: true,
	//   status: errorStatusCode,
	//   message: err.message,
	//   cause: err.cause,
	//   // stack: err.stack
	// });

	const errorData = {
		error: true,
		status: errorStatusCode,
		message: err.message,
		cause: err.cause,
	};
	if (req.url.startWith("/api")) {
		res.status(errorStatusCode).send(errorData);
	} else {
		res.render("error", { data: errorData });
	}
};
