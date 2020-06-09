const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public') ,  //path to the webpack output file
        filename: 'bundle.js'       //name of webpack output file
    }
}