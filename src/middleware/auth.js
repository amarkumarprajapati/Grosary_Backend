const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      const respdata = {
        success: false,
        message: "No Authorization Token",
      };
      return res.status(401).json(respdata); // Use 401 for unauthorized
    }

    const accessToken = req.headers.authorization.split(" ")[1];
    const tokenSecret = "UV54SVDSV54FBDF6"; // Specify your JWT secret key here
    const decodedToken = jwt.verify(accessToken, tokenSecret);

    // Attach decoded user information to the request object for further use
    req.user = decodedToken;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    const respdata = {
      success: false,
      message: "Invalid or expired token",
    };
    return res.status(401).json(respdata);
  }
};

module.exports = validateToken;
