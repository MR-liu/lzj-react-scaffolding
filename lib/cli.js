var argv = require('minimist')(process.argv.slice(2), {
  string : ['port', 'language' ],//key=port|language返回的就是value的字符串
  boolean: ['debug'],//debug参数的value有就对应ture,无就对应false
  alias: {
      port: 'p',//port在解析的时候，会对应返回的是p
      language: 'l',
  },
  default: { //默认设置的值
      NODE_ENV: 'dev',
      version: '1.0.0'
  },
});

var command = {
  run: function() {
    const { init, build } = argv;

    switch (true) {
      case init:
        require('./init')(argv);
        break;
      case build:
        require('./build')(argv);
        break;
      default:
        require('./server')(argv);
        break;
    }
  },
}

module.exports = {
  run: command.run.bind(command),
  // isCliError: function(err) {
  //     return err instanceof cli.Error;
  // }
};
