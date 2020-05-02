var getWebService = function (app) {
  app.get("/api/whoami", (req, res, next) => {
    var reqDate = new Date();
    res.json({
      "ipaddress": req.headers.host,
      "language": req.headers["accept-language"],
      "software": req.headers["user-agent"]
    });
    next();
  });
};

exports.getWebService = getWebService;
