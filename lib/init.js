const fs = require('fs');
const download = require('download-git-repo');
const chalk = require('chalk');


module.exports = ({ project, boilerplate, version = '1.0' } = {}) => {
  console.info('lzj-react-scaffolding[version]:      ', version);

  if (!project || fs.existsSync(project)) {
    console.error(chalk.red(`⚠️  ⚠️  ⚠️  folder ${project} exist`));
    process.exit(0);
  }

  console.log('init');
};

// console.info('0')