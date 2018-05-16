"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ip = require("ip");
module.exports = () => {
    const exports = {};
    exports.static = {
        maxAge: 0,
    };
    exports.development = {
        watchDirs: ['build'],
        ignoreDirs: ['app/web', 'public', 'config'],
    };
    exports.reactssr = {
        injectCss: true,
    };
    const localIP = ip.address();
    const domainWhiteList = [];
    [9000, 9001, 9002].forEach(port => {
        domainWhiteList.push(`http://localhost:${port}`);
        domainWhiteList.push(`http://127.0.0.1:${port}`);
        domainWhiteList.push(`http://${localIP}:${port}`);
    });
    exports.security = { domainWhiteList };
    return exports;
};
