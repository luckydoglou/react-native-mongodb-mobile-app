const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) { return res.status(401).send('No Token, Access Denied'); }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    // Add user from payload
    req.user = decoded;
    next();
    
  } catch (err) {
    res.status(400).json({ error: 'Invalid Token' });
  }
};

module.exports = auth;