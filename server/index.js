//1. install http express mongoose

const express = require('express');
//import 'package:express/express.dart'
const PORT = 3000;

const app = express();

//2. creating and api
//http://<your address>/hello-world

//create a GET Request giving a json response with key of name
// and value of your name
//{
//     'name': 'Rivvan'
// }

app.get('/', (req, res) => {
    res.json({ name: 'Rivaan' });
});

app.get('/hello-world', (req, res) => {
    res.json({ hi: 'hello world' });
});
//GET, PUT, POST, DELETE, UPDATE => CRUD
app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});
//localhost

