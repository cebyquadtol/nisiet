const fs = require('fs');
const path = require('path');

class FileOperation {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    copyFile() {
        const sourcePath = path.resolve(this.from);
        const destinationPath = path.resolve(this.to);

        fs.copyFile(sourcePath, destinationPath, (err) => {
            if (err) {
                console.error(`Error copying file: ${err}`);
            } else {
                console.log(`File copied from ${this.from} to ${this.to}`);
            }
        });
    }
}

// Usage
const fileOp = new FileOperation('./source.txt', './destination.txt');
fileOp.copyFile();
