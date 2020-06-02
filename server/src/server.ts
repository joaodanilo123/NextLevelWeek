import express from 'express';

const app = express();

app.get('/users', (req, res)=>{
    res.json(['Diego', 'Cleiton'])
})

const port = 3333;

app.listen(port, ()=>{
    console.log(`Litening to port ${3333}`)
})