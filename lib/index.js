'use strict';

const glob = require('glob');
const path = require('path');

const _getAbstraction = (name) => {
    return require(`../build/contracts/${name}.json`);
};

const _getAbstractionNames = () => {
    const options = {
        cwd: path.resolve(__dirname, '..')
    };
    return glob.sync('build/contracts/*.json', options)
        .map((f) => path.basename(f, '.json'));
};

const _getEvent = (contractName, eventName) => {
    return require(`../events/${contractName}.json`)[eventName];
};

module.exports = {
    getAbstraction: _getAbstraction,
    getAbstractionNames: _getAbstractionNames,
    getEvent: _getEvent
};