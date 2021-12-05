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

function formatData(data) {
    return data.split('\n').map((value) => parseInt(value, 10));
}

function checkPrevious(data) {
    let count = 0;
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
        if (data[i] > data[i - 1]) {
            console.log(`${data[i]} (increased)`);
            count += 1;
        } else if (data[i] < data[i - 1]) {
            console.log(`${data[i]} (decreased)`);
        } else {
            console.log(`${data[i]} No previous value`);
        }
    }

    return count;
}

// First part value
// console.log(checkPrevious(formatData(fetchValues())));

function addNextThree(data) {
    for (let i = 0; i < data.length; i++) {
        let sum = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
        console.log(sum);
    }
}

console.log(addNextThree(formatData(fetchValues())));
