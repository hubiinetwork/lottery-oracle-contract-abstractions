'use strict';

require('chai').should();
const index = require('./index');

describe('index', () => {
    describe('getAbstraction', () => {
        describe('if called with name of existent contract abstraction', () => {
            it('should successfully return the matching contract abstraction', async () => {
                const abstn = index.getAbstraction('Oracle');
                abstn.contractName.should.equal('Oracle');
                abstn.abi.should.be.an('array').that.is.not.empty;
            });
        });

        describe('if called with name of non-existent contract abstraction', () => {
            it('should throw an instance of Error', async () => {
                (() => index.getAbstraction('NonExistentContract')).should.throw(Error);
            });
        });
    });

    describe('getAbstractionNames', () => {
        it('should list the set of abstractions obtained from JSON file names', async () => {
            const names = index.getAbstractionNames();
            names.should.be.an('array').that.is.not.empty;
        });
    });
});
