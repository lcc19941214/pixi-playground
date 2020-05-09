const path = require('path');
const fs = require('fs');

const pixiDir = path.join(__dirname, '../src/views/pixi');
const files = fs.readdirSync(pixiDir, 'utf8');

const routes = files.map((filename) => {
  const basename = path.basename(filename);
  const [, nameWithoutExt = basename] = basename.match(/(.*)\..*$/) || [];
  return {
    path: `/${nameWithoutExt}`,
    name: nameWithoutExt,
    basename,
  };
});

fs.writeFileSync(
  path.join(__dirname, '../src/router/routes.json'),
  JSON.stringify(routes, null, 2)
);
