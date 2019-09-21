# LOTTERY ORACLE CONTRACT ABSTRACTIONS FOR ROPSTEN

## About the contract abstractions

This package hosts contract abstractions generated from the deployment of 
[lottery oracle contracts] to the Ropsten Ethereum testnet.

## About hubii

See www.hubii.com for more information.

## Prerequisites

* To use this software you need a modern version of **NodeJS and NPM**.
  We recommend having the current LTS version (v8.x) installed, or
  later, and updating NPM to the latest available version.

## Installation

To install the SDK into your project, simply run:

```
npm install lottery-oracle-contract-abstractions-ropsten
```

## Contract abstractions

The package includes directory `build/contracts` that contains the 
actual contract abstractions.

### Symlinks

In a dependent project it will often be more
convenient to have the abstractions available in its own `build/contracts` 
directory rather than having to refer to the lengthy 
`node_modules/lottery-oracle-contract-abstractions-ropsten/build/contracts`.

The package contains scripts to symlink its `build/contracts` to
`../../build/contracts`. In order to run the script you may run

```
npm run symlink:build
```

Alternatively a call to

```
npm run symlink:build:force
```

will also delete previously existent `../../build/contracts` as seen from
the package directory (`node_modules/lottery-oracle-contract-abstractions-ropsten`).
