"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
function default_1(app) {
    const exports = {};
    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico')),
    };
    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs'),
    };
    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public'),
    };
    exports.keys = '123456';
    exports.middleware = [
    // 'access'
    ];
    return exports;
}
exports.default = default_1;
