hewo this is my assyst tag repo..
all of the tags are stored in the src/code folder

you can add any of them as tags on your server by doing this command
```
-t create <TAG_NAME> {eval:{download:https://meqativ.github.io/assyst-tags/src/code/<FILE_NAME>.js}}
```
(replace `<TAG_NAME>` and `<FILE_NAME>` please)

some of them might also have settings, you check for those by going through the code for any `{get:name}` subtags.
then just append a `{set:name|value}` RIGHT BEFORE THE `{eval:` (or it's gonna bug out).<br/>
bad example: 
```
-t create <TAG_NAME> {set:angle|  50 }

{eval:{download:https://meqativ.github.io/assyst-tags/src/code/<FILE_NAME>.js}}
```
```
-t create <TAG_NAME> {set:pivot | 12}
      {set:angle|  50 }
{eval:{download:https://meqativ.github.io/assyst-tags/src/code/<FILE_NAME>.js}}
```
good examples: 
```
-t create <TAG_NAME> {set:angle|50}{eval:{download:https://meqativ.github.io/assyst-tags/src/code/<FILE_NAME>.js}}
```
```
-t create <TAG_NAME> {set:pivot|12}{set:angle|50}{eval:{download:https://meqativ.github.io/assyst-tags/src/code/<FILE_NAME>.js}}
```
