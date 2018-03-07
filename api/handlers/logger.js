exports.devLogger = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
  }
  return next();
};
