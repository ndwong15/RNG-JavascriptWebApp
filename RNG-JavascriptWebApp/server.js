'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    // Use below recursive algorithm to generate pseudo-random series of numbers (Linear Congruential)
    // X = a * X + c % m
    let seed, mult, add, mod;
    seed = 162;
    mult = 1664525;
    add = 1013904223;
    mod = 2 ** 32;

    //Output section
    let loops = 100;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    for (let i = 0; i < loops; i++) {
        seed = (mult * seed + add) % mod;
        res.write(seed.toString() + '\n');
    }
    res.end();
}).listen(port);