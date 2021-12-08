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

function formatData(data) {
    const array = [];
    const formattedData = data.split('\r\n');
    formattedData.forEach((el) => array.push(el.split(' ')));
    return array;
}

function position(data) {
    let horizontalPosition = 0;
    let depth = 0;

    data.forEach((el) => {
        if (el[0] === 'forward') {
            horizontalPosition += parseInt(el[1]);
        } else if (el[0] === 'up') {
            depth -= parseInt(el[1]);
        } else if (el[0] === 'down') {
            depth += parseInt(el[1]);
        }
    });

    console.log(`Horizontal position: ${horizontalPosition}`);
    console.log(`Depth: ${depth}`);
    return horizontalPosition * depth;
}

// First part
// console.log(position(formatData(fetchValues())));

function complicatedPosition(data) {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    data.forEach((el) => {
        if (el[0] === 'forward') {
            horizontalPosition += parseInt(el[1]);
            depth += aim * el[1];
        } else if (el[0] === 'up') {
            aim -= parseInt(el[1]);
        } else if (el[0] === 'down') {
            aim += parseInt(el[1]);
        }
    });

    return horizontalPosition * depth;
}

// Second part
console.log(complicatedPosition(formatData(fetchValues())));
