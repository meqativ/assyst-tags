sed "s/$(sed 's/\//\\\//g' ./src/code/modules/codepasta_before.js)/$(sed 's/\//\\\//g' ./src/code/modules/codepasta.js)/g" * -i # codepasta
sed '/^\s*\/\//d; s/\/\/.*//; s/\/\*.*\*\///g' * -i # removes comments
