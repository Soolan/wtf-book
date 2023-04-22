# NgxXrplscan

## Overview:
The ngx-xrplscan is an Angular library that allows users to explore transaction details on the XRPL network. This library can be used to retrieve transaction details based on a given tx id, and all transactions in the past 30 days for a given wallet address. It is designed for developers who want to build transaction explorers or other applications that require transaction information.

## Installation:
To install the ngx-xrplscan, you can use npm. Run the following command:

`npm install ngx-xrplscan`

## Usage:
The ngx-xrplscan provides two main functions:
- `getTransactionDetailsById(txId: string): Promise<TransactionDetails>`

This function takes a transaction id as input and returns the details of the corresponding transaction. The details include the sender, receiver, amount, and other relevant information.

- `getTransactionsByAddress(walletAddress: string): Promise<TransactionDetails[]>`

This function takes a wallet address as input and returns an array of transaction details for all transactions that occurred in the past 30 days for the given wallet address.

## Error Handling:
If there is an error retrieving the transaction details, an error object will be returned with a message explaining the error.

## Examples:
Here's an example of how to use the getTransactionDetailsById function:



---

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-xrplscan` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-xrplscan`.
> Note: Don't forget to add `--project ngx-xrplscan` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-xrplscan` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-xrplscan`, go to the dist folder `cd dist/ngx-xrplscan` and run `npm publish`.

## Running unit tests

Run `ng test ngx-xrplscan` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
