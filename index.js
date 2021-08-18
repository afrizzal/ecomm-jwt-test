const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Integ123';

//create token sync

const token = jwt.sign({ data: {kelas: 'ecomm'} }, 
JWT_SECRET,
{ expiresIn: '15m' });
console.log(token);