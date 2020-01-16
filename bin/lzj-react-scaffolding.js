#!/usr/bin/env node

var cli = require('../lib/cli.js');

try {
  cli.run();
} catch (e) {
  // output user frendly message if cli error
  // if (cli.isCliError(e)) {
  //     console.error(e.message || e);
  //     process.exit(2);
  // }

  // otherwise re-throw exception
  throw e;
}