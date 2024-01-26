import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as an HTTP-Only cookie. Stored only in Backend to prevent Cross Script Attacks
  // Shouldnt this be https as well ? httpsOnly does not exists
  // Also note, in dev environment we do not have https
  // Once loggedin, this cookie will be sent with other responses
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    // secure: true,

    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
