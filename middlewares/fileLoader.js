const fs = require('fs');
const path = require('path');
const multer = require("multer");

module.exports = (destinationPath = null) => {
    let destinationDir = path.join(__dirname, '..', 'assets');

    if (destinationPath) {
        destinationDir = path.join(destinationDir, destinationPath);

        if (!fs.existsSync(destinationDir)) {
            fs.mkdirSync(destinationDir);
        }
    }

    fs.stat(destinationDir, function(err) {
        if (err && err.code === 'ENOENT') {
            console.log('ERROR =====> file or directory does not exist');
        }
    });

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destinationDir);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const splitFileName = file.originalname.split('.');
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + splitFileName[splitFileName.length - 1]);
        }
    });

    return multer({ storage: storage });
}
