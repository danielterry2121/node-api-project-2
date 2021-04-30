// implement your server here
const express = require('express');
const server = express();

const postRouter = require('./posts/posts-router');

server.use(express.json());
server.use('/api/posts', postRouter)
// require your posts router and connect it here

server.get('/', (req,res)=>{
    res.send(`<h2>Router API</h2>`)
})

module.exports = server;