const fs = require('fs');
const path = require('path');

module.exports = async (pathToFile) => {
    if (!pathToFile) {
        return true;
    }

    const fullPath = path.join(__dirname, "..", "assets", pathToFile);

    fs.access(fullPath, (err) => {
        if (err) {
            console.error('File not found!');
        }

        fs.unlink(fullPath, function(err) {
            console.error(err);
        });
    });
}
