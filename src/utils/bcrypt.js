import bcrypt from 'bcrypt';

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(process.env.SALT));

export const validatePassword = (passwordSend, passwordBdd) =>
  bcrypt.compareSync(passwordSend, passwordBdd);
