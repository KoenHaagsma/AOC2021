// Read file input
const fs = require('fs');
const path = require('path');

function fetchValues() {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
        return data;
    } catch (err) {
        return err;
    }
}

console.log(fetchValues());
