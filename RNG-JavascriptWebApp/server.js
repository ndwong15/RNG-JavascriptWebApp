'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    // Use below recursive algorithm to generate pseudo-random series of numbers (Linear Congruential)
    // X = a * X + c % m

    //Delcarations
    let seed, mult, add, mod;
    seed = 162;
    mult = 1664525;
    add = 1013904223;
    mod = 2 ** 32;

    //User input seed
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Please enter a seed value: ', seed => {
        console.log('User input ' + seed + ' is ' + inputTester(seed));
        readline.close();

        //Output section
        let loops = 100;
        for (let i = 0; i < loops; i++) {
            seed = nextNumber(seed, mult, add, mod);
            console.log(seed);
        }
    });

    /*
    //Output to web server section
    let loops = 100;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    for (let i = 0; i < loops; i++) {
        seed = nextNumber(seed, mult, add, mod);
        res.write(seed.toString() + '\n');
    }
    res.end();
    //*/

    ///*
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Console is Running');
    res.end();
    //*/
}).listen(port);

function nextNumber(seed, multiplier, increment, modulus) {
    return (multiplier * seed + increment) % modulus;
}

// Returns a string stating what kind of data is inside variable 'x'
function inputTester(x) {
    let testResult;

    try {
        if (x == '') throw "Empty String";
        if (isNaN(x)) throw "Not a Number";
        x = Number(x);
        if(x < 0) throw "Negative Number"
    }
    catch (testResult) {
        return testResult;
    }
    return testResult = 'ok';
}