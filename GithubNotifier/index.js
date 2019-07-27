require('dotenv').config();
require("@babel/register")({
    presets: ["@babel/preset-env"]
});

require('./main.js');