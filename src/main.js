#!/usr/bin/env node

import {
  Command
} from 'commander';

import setVersion from "./set_version.js"

const program = new Command();

program
  .name('change-version')
  .version("1.0.5")
  .option('-i, --in-place')
  .option('-v, --new-version <version>', "new version")
  .argument('type', 'project type')
  .argument('input', 'input file')
  .action((type, input, options) => {
    setVersion(input, options.newVersion, type, options.inPlace)
  })

// registerSubCommand(program)

program.parse(process.argv);