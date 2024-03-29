[![CircleCI](https://circleci.com/gh/timepurge/farx/tree/master.svg?style=svg)](https://circleci.com/gh/timepurge/farx/tree/master)

# Generate .farx files for Fiddler Autoresponder 

Useful when using Fiddler Autoresponder with builds that generate dynamic filenames, as in `create-react-app`.

### Installation
```sh
npm install farx --save-dev
```
### Usage

Declare a rule json as follows:
```sh
const rule = [
    {
        match: "https://a.com/1.jpg",
        action: "C:\\Documents\\1.jpg"
    }
]
```

To generate farx xml :

```sh
const farxxml = farx.generate(rule);
```

To save farx xml in Desktop, with callback on save:

```sh
const desktopPath = require('path').join(require('os').homedir(), 'Desktop');
const farxxml = farx.generate(rule,desktopPath, (farxfile) => {
    //farxfile is the path to the newly generated file in Desktop
} );
```
