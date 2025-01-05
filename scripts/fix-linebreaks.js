const fs = require('fs');
const path = require('path');

function fixLineEndings(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixLineEndings(filePath);
    } else if (stat.isFile() && /\.(ts|tsx|js|jsx|json|css|md)$/.test(file)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/\r\n/g, '\n');
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

fixLineEndings('.');
