const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Integ123';

jwt.sign({data: { kelas: 'ecomm'}}, JWT_SECRET, { expiresIn: 1600}, (err, token) => {
    console.log(token);
});

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiZWNvbW0ifSwiaWF0IjoxNjI5MTE4OTI0fQ.pOsbhUixpiIj-_jvj12y3bdRHSbEeZzl2nnPEhGXBLc';
jwt.verify(token1, JWT_SECRET, (err, decoded) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(decoded);
});

// console.log('qwertyuiop');

