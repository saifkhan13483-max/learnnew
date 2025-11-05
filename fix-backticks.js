import fs from 'fs';

// Read the file
const content = fs.readFileSync('shared/courseData.ts', 'utf8');

// This function escapes single backticks that are not already escaped
// and not part of triple backticks
function escapeInlineBackticks(str) {
  let result = '';
  let i = 0;
  
  while (i < str.length) {
    // Check if current position is a backslash followed by backtick(s)
    if (str[i] === '\\' && str[i + 1] === '`') {
      // Already escaped, keep as is
      result += str[i] + str[i + 1];
      i += 2;
      continue;
    }
    
    // Check if current position is a single backtick
    if (str[i] === '`') {
      // Escape it
      result += '\\`';
      i++;
      continue;
    }
    
    // Regular character
    result += str[i];
    i++;
  }
  
  return result;
}

// Process the file content
// We need to find content: ` ... ` blocks and escape backticks within them
let fixed = content;

// Use a more targeted approach: find and replace inline backticks in markdown
// This regex finds content: ` ... ` blocks
const contentRegex = /content:\s*`([\s\S]*?)`(?=\s*[,}])/g;

let matches = [];
let match;
while ((match = contentRegex.exec(content)) !== null) {
  matches.push({
    fullMatch: match[0],
    contentPart: match[1],
    index: match.index
  });
}

// Process from end to start to maintain indices
for (let i = matches.length - 1; i >= 0; i--) {
  const m = matches[i];
  const escapedContent = escapeInlineBackticks(m.contentPart);
  const newFullMatch = `content: \`${escapedContent}\``;
  
  fixed = fixed.substring(0, m.index) + newFullMatch + fixed.substring(m.index + m.fullMatch.length);
}

// Write the fixed content
fs.writeFileSync('shared/courseData.ts', fixed, 'utf8');

console.log('Fixed backticks in courseData.ts');
