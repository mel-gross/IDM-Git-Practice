const minify = require('minify');

const src = 'src/styles.css';
const fn = 'main.min.js';
const code = fs.readFileSync(src, 'utf8');
const result = minify(code);

if (result.error) {
  console.log(result.error);
} else {
  console.log('');
  console.log('Result Code:');
  console.log(result.code);
  console.log('');
  console.log('Generating file...');
  const buildDir = './dis';
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }

minify('client.js', (error, data) => {
    if (error)
        return console.error(error.message);
    
    console.log(data);
});
