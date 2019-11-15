#!/usr/bin/env node
const yargs = require('yargs');
const { addMinutes } = require('./addMinutes');

const options = yargs
  .option('time', {
    alias: 't',
    describe: 'starting time in the following format: "10:15 AM"',
    type: 'string',
    demandOption: true,
  })
  .option('minutes', {
    alias: ['m', 'min'],
    describe: 'number of minutes added to start time',
    type: 'number',
    demandOption: true,
  }).argv;

const { time, minutes } = options;

console.log(
  `starting time: ${time}`,
  `\nminutes to add: ${minutes}`,
  `\nnew time: ${addMinutes(time, minutes)}`,
);
