const path = require('path');
const fs = require('fs');
const logger = require('rapid-console').default;

const FILTER = ['learn-npm-pkg-a', 'learn-npm-pkg-b'];

function iterateNodeModules (dir, depth = 0) {
  const selfDepth = depth;
  const nodeModulesDir = path.resolve(dir, './node_modules/');
  if (!fs.existsSync(nodeModulesDir)) return;
  fs.readdirSync(nodeModulesDir).forEach(subDir => {
    if (FILTER.includes(subDir)) {
      const pkg = path.join(nodeModulesDir, subDir, './package.json');
      if (selfDepth > 0) {
        logger.info(` |${new Array(selfDepth - 1).fill('_').join('')} ${subDir} ==> ${require(pkg).version}`);
      } else {
        logger.info(`${new Array(selfDepth).fill(' ').join('')} ${subDir} ==> ${require(pkg).version}`);
      }
      iterateNodeModules(path.join(nodeModulesDir, subDir), selfDepth + 2);
    }
  });
}

iterateNodeModules(__dirname);
