const cfg = require("../_data/metadata.json");

module.exports = function (path, encode = false) {
    if (encode) {
        path = encodeURIComponent(path);
    }

    return `${cfg.url}${path}`;
};
