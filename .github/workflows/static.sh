sed "s/$(sed 's/\//\\\//g; s/;/\\;/g' ./src/code/modules/codepasta_before.js)/$(sed 's/\//\\\//g; s/;/\\;/g' ./src/code/modules/codepasta.js)/g" src/* -i # codepasta
sed '/^\s*\/\//d; s/\/\/.*//; s/\/\*.*\*\///g' src/* -i # removes comments
