'use strict';

const path = require('path');
const { default: compiler } = require('refs-compiler');
const debug = require('debug');

const logger = debug('docs:builder');
const inputTemplate = path.resolve(`${__dirname}/spec.yaml`);
const outputFile = path.resolve(`${__dirname}/openapi.yaml`);

logger('Building documentation');
try {
    compiler(inputTemplate, outputFile)
        .then(results => {
            logger(`Documentation created in ${results.outputFile}`);
        })
        .catch(error => {
            logger(`An error occurred while building the documentation: ${error.message}`);
            logger(error.stack);
        });
}
catch (error) {
    logger(`An error occurred while building the documentation: ${error.message}`);
    logger(error.stack);
}

process.on('unhandledRejection', error => {
    logger(`An Unhandled Rejection happened: ${error.message}`);
    logger(error.stack);
});
