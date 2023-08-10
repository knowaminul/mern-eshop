import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@email.com',
    password: bcrypt.hashSync('user', 10),
  },
];

export default users;
