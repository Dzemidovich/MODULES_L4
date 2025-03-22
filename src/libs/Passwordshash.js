const bcrypt = require('bcrypt');

const passwords = [
  'password1', 'password2', 'password3', 'password4', 'password5',
  'password6', 'password7', 'password8', 'password9', 'password10',
  'password11', 'password12', 'password13'
];

const saltRounds = 10;

async function hashPasswords(passwords) {
  for (const password of passwords) {
    const start = Date.now();
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const end = Date.now();
    console.log(`Password hashed in ${end - start} ms`);
  }
}

hashPasswords(passwords);
