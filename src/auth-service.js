const crypto = require('crypto');

// In-memory "database" of users
const users = [];

// Helper to hash passwords
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Register a new user
function registerUser(username, password) {
  if (!username || !password) {
    return { success: false, message: 'Username and password required' };
  }

  const exists = users.find(u => u.username === username);
  if (exists) {
    return { success: false, message: 'User already exists' };
  }

  const hashed = hashPassword(password);
  const user = { username, password: hashed };
  users.push(user);

  return { success: true, message: 'User registered' };
}

// Authenticate an existing user
function loginUser(username, password) {
  const hashed = hashPassword(password);
  const user = users.find(u => u.username === username && u.password === hashed);

  if (user) {
    return { success: true, message: 'Login successful' };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
}
// Expose functions so other files can use them
module.exports = {
  registerUser,
  loginUser
};
