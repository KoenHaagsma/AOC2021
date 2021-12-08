// Read file input
const fs = require('fs');
const path = require('path');

let horizontalPosition;
let depth;

function fetchValues() {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
        return data;
    } catch (err) {
        return err;
    }
}

function formatData(data) {}
