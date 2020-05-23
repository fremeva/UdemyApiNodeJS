module.exports = (err, req, res, next) => {
  return res.status(httpStatus).send({
    status: err.status || 500,
    message: err.message || "Internal Error Server",
  });
};
