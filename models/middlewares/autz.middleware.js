const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Нет доступа' });
  }

  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer') {
    return res.status(400).json({ error: 'Не правильный type' });
  }

  try {
    req.user = await jwt.verify(token, toString(process.env.SECRET_JWT_KEY));
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Не правильный token' });
  }
};
