var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
var advance = require(lib + '/advance_math.js');

module.exports = {
	multiplication: advance.multiplication,
	division: advance.division,
};

