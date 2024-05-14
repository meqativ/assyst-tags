sed "s/$(sed 's/\//\\\//g; s/;/\\;/g; s/\n/\\\n/g' ./src/code/modules/codepasta_before.js)/$(sed 's/\//\\\//g; s/;/\\;/g; s/\n/\\\n' ./src/code/modules/codepasta.js)/g" src/code/*.js src/code/**/*.js -i # codepasta
# LATER sed '/^\s*\/\//d; s/\(\/\/[^'\'\"]*\)\|\/\*[^*]*\*\///g; s/\/\*.*\*\///g' src/code/*.js src/code/**/*.js -i # removes comments
