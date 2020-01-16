// var cli = require('clap');
// var parseArgs = require('minimist');

// var command = cli.command('lzj-react-scaffolding', '[input] [output]')
//     .version(require('../package.json').version)
//     .option('-i, --input <filename>', 'Input file')
//     .option('-o, --output <filename>', 'Output file (result outputs to stdout if not set)')
//     .option('-m, --map <destination>', 'Generate source map: none (default), inline, file or <filename>', 'none')
//     .option('-u, --usage <filenane>', 'Usage data file')
//     .option('--input-map <source>', 'Input source map: none, auto (default) or <filename>', 'auto')
//     .option('--restructure-off', 'Turns structure minimization off')
//     .option('--comments <value>', 'Comments to keep: exclamation (default), first-exclamation or none', 'exclamation')
//     .option('--stat', 'Output statistics in stderr')
//     // .option('--debug [level]', 'Output intermediate state of CSS during compression', debugLevel, 0)
//     .action(function(args) {
//       console.log(args, '-----------------')
//         // var options = this.values;
//         // var inputFile = options.input || args[0];
//         // var outputFile = options.output || args[1];
//         // var usageFile = options.usage;
//         // var usageData = false;
//         // var map = options.map;
//         // var inputMap = options.inputMap;
//         // var structureOptimisationOff = options.restructureOff;
//         // var comments = processCommentsOption(options.comments);
//         // var debug = options.debug;
//         // var statistics = options.stat;
//         // var inputStream;

//         // if (process.stdin.isTTY && !inputFile && !outputFile) {
//         //     this.showHelp();
//         //     return;
//         // }

//         // if (!inputFile) {
//         //     inputFile = '<stdin>';
//         //     inputStream = process.stdin;
//         // } else {
//         //     inputFile = path.resolve(process.cwd(), inputFile);
//         //     inputStream = fs.createReadStream(inputFile);
//         // }

//         // if (outputFile) {
//         //     outputFile = path.resolve(process.cwd(), outputFile);
//         // }

//         // if (usageFile) {
//         //     if (!fs.existsSync(usageFile)) {
//         //         console.error('Usage data file doesn\'t found (%s)', usageFile);
//         //         process.exit(2);
//         //     }

//         //     usageData = fs.readFileSync(usageFile, 'utf-8');

//         //     try {
//         //         usageData = JSON.parse(usageData);
//         //     } catch (e) {
//         //         console.error('Usage data parse error (%s)', usageFile);
//         //         process.exit(2);
//         //     }
//         // }

//         // readFromStream(inputStream, function(source) {
//         //     var time = process.hrtime();
//         //     var mem = process.memoryUsage().heapUsed;
//         //     var sourceMap = resolveSourceMap(source, inputMap, map, inputFile, outputFile);
//         //     var sourceMapAnnotation = '';
//         //     var result;

//         //     // main action
//         //     try {
//         //         result = csso.minify(source, {
//         //             filename: inputFile,
//         //             sourceMap: sourceMap.output,
//         //             usage: usageData,
//         //             restructure: !structureOptimisationOff,
//         //             comments: comments,
//         //             debug: debug
//         //         });

//         //         // for backward capability minify returns a string
//         //         if (typeof result === 'string') {
//         //             result = {
//         //                 css: result,
//         //                 map: null
//         //             };
//         //         }
//         //     } catch (e) {
//         //         if (e.parseError) {
//         //             showParseError(source, inputFile, e.parseError, e.message);
//         //             if (!debug) {
//         //                 process.exit(2);
//         //             }
//         //         }

//         //         throw e;
//         //     }

//         //     if (sourceMap.output && result.map) {
//         //         // apply input map
//         //         if (sourceMap.input) {
//         //             result.map.applySourceMap(
//         //                 new SourceMapConsumer(sourceMap.input),
//         //                 inputFile
//         //             );
//         //         }

//         //         // add source map to result
//         //         if (sourceMap.outputFile) {
//         //             // write source map to file
//         //             fs.writeFileSync(sourceMap.outputFile, result.map.toString(), 'utf-8');
//         //             sourceMapAnnotation = '\n' +
//         //                 '/*# sourceMappingURL=' +
//         //                 path.relative(outputFile ? path.dirname(outputFile) : process.cwd(), sourceMap.outputFile) +
//         //                 ' */';
//         //         } else {
//         //             // inline source map
//         //             sourceMapAnnotation = '\n' +
//         //                 '/*# sourceMappingURL=data:application/json;base64,' +
//         //                 new Buffer(result.map.toString()).toString('base64') +
//         //                 ' */';
//         //         }

//         //         result.css += sourceMapAnnotation;
//         //     }

//         //     // output result
//         //     if (outputFile) {
//         //         fs.writeFileSync(outputFile, result.css, 'utf-8');
//         //     } else {
//         //         console.log(result.css);
//         //     }

//         //     // output statistics
//         //     if (statistics) {
//         //         var timeDiff = process.hrtime(time);
//         //         showStat(
//         //             path.relative(process.cwd(), inputFile),
//         //             source.length,
//         //             result.css.length,
//         //             sourceMap.inputFile,
//         //             sourceMapAnnotation.length,
//         //             parseInt(timeDiff[0] * 1e3 + timeDiff[1] / 1e6),
//         //             process.memoryUsage().heapUsed - mem
//         //         );
//         //     }
//         // });
//     });

// module.exports = {
//   run: command.run.bind(command),
//   isCliError: function(err) {
//       return err instanceof cli.Error;
//   }
// };

var argv = require('minimist')(process.argv.slice(2), {
  string : ['port', 'language' ],//key=port|language返回的就是value的字符串
  boolean: ['debug'],//debug参数的value有就对应ture,无就对应false
  alias: {
      port: 'p',//port在解析的时候，会对应返回的是p
      language: 'l',
  },
  default: {
      NODE_ENV: 'dev'//默认设置的值
  }
});

var command = {
  run: function() {
    console.dir(argv);
  },
}

module.exports = {
  run: command.run.bind(command),
  // isCliError: function(err) {
  //     return err instanceof cli.Error;
  // }
};
