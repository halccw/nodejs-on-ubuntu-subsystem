# IDE

## Editorconfig
* For cross IDE/editor consistency
* Download editor config plugin for VS Code: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
* Restart VS Code

# Package Management
* npm
* security: nsp (Node Security Project)
    * add security check to your npm start script (slows start slightly)
```bash
sudo npm install --global nsp
cd app/
nsp check
```


# Development Web Server 
* http-server: ultre-simple, lightweight
* liver-server: live-reloading
* express: comprehensive, highly configurable, prod grade, can run it everywhere (competitor: koa, hapi)
* budo: browserify
* webpack: bundler built in
* browsersync: LAN support, all interactions on browser sync, great for cross browser test, integrates with express, webpack

## Share work-in-progress with client w/o cloud
* localtunnel
    - share localhost to a public url
    - `npm install localtunnel -g`
    - start app
    - `lt --port 3000`
    - `lt --port 3000 --subdomain halccw`
    - localtunnel creates a random public URL for your local site
* ngrok
    - secure tunnel to your local machine
* now
    - quick deploy node.js to the cloud
    - `npm install -g now`
    - create start script
    - `now`
* surge
    - host static files to public url
    - only for static files

# Automation
* grunt
    - config over code
    - writes intermediary files between steps
    - eco-system
* gulp
    - in-memory streams (faster than grunt)
    - code over config
    - large plugin eco
* npm scripts
    - declared in package.json
    - leverage OS command line
    - directly use pm packages

## Automation with npm scripts
* All usable package commands are in node_modules/.bin
```json
package.json
"scripts":{
  "prestart": "node buildScripts/startMessage.js",
    "start": "node buildScripts/srcServer.js",
    "security-check": "nsp check",
    "share": "lt --port 3000",
}
```

* Run scripts in parallel

# Transpiling
* TypeScript
    - Enhanced autocomplete
    - enhanced readability
    - safer refactoring
    - interfaces, etc
    - cons: not all libraries are compatible with TypeScript
* Babel
    - Write \standardized JS
    - leverage full JS ecosystem
    - use experimental features earlier
    - no type defs, annotations required
    - ES6 imports are statically analyzable
* Elm
    - nothing like JS
    - functional paradigm

## Babel
* babel configuration can be put in either .babelrc or package.json
* ES6
* node index.js -> babel-node index.js

# Bundling
* why bundle? 
    - CommonJS doesn't work in web browsers
    - pacakge project into file(s)
    - save bandwidth
    - optmized to improve Node perf

## Module formats
* IIFE, AMD, CommonJS, UMD, ES6 Modules
* CommonJS
    - syntx: var ex = require('express');
* ES 6
    - syntax: import ex from 'express';
    - standardized 
    - statically analyzable
        - improved autocomplete
        - intelligent refactoring
        - fails fast
        - tree shaking (dead code elimination)
    - easy to read
        - named imports
        - default exports


## Bundlers
* browserify
    - bundle npm packages for the web
    - large plugin ecosystem
* webpack
    - full feature
    - bundles CSS, images, fonts, HTML, etc like JS
    - built in hot-reloading web server (in memory)
* rollup
    - tree shaking to reduce bundle size
    - faster loading production code
    - quite new
    - great for library authors
* JSPM
    - uses SystemJS, a universal module loader
    - can load module at runtime
    - built in package manager
    - uses rollup

## webpack
* bundle all types of files
    - CSS, images, fonts, HTML
* bundle splitting
* hot module reloading
* webpack2 offers tree shaking

## Debug bundle file
* Use source map

# Linting
* JSLink
* JSHint
* ESLint - de facto standard

## ESLint
* Configure ESLint
  - Where to put configurations?
  - Which rules?
  - Warning or errors?
  - plugins?
  - presets?

* Issue: ESLint does not watch files
  - Use eslint-watch package
