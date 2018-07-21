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

# Testing and Continuous Integration
* Unit test: independent test on a single function or module
* Integration test: interactions between modules
* UI test: automate interactions with UI

## Testing frameworks
* Mocha
* Jasmine
* Tape
* QUnit
* AVA
* Jest: For React, wrapper on Jasmine

## Assertion library
* chai

## Helper libraries
* JSDOM: simulate browser's DOM, run DOM related tests witout a browser
* Cheerio: jQuery for the server, query virtual DOM with jQuery selectors

## Where to run tests
* Karma, Testem: run on browser
* PhantomJS: headless browser
* JSDOM: in-memory DOM

## Continuous Integration (CI) server
* Travis
* Appveyor
* Jenkins

# HTTP
* Node
  - http lib
  - request lib
* Browser
  - XMLHttpRequest (XHR) - ugly
  - jQuery
  - Fetch
  - or framework-based
* Node & Browser
  - isomorphic-fetch (run on client and server)
  - xhr
  - axios
  - superagent

## Centralized API calls
- one place to configure all calls
- handle preloader logic
- handle errors
- single seam for mocking

## polyfill
- a piece of code to mimic missing feature on old browsers

## mocking apis
* unit test
* instant response
* rapid prototyping
* avoid inter-team bottleneck
* Options
  - Nock
  - static json
  - create a dev server
    - api-mock
    - json server (actually updates static data on local file)
    - json schema faker (fake dynamic data)
    - browsersync
    - express, etc

## Mocking HTTP
* JSON schema faker
* generate random data
  - faker.js
  - chance.js
  - randexp.js
* Serve data via API: JSON server

* `import whateverNameWillBeDefaultExport from 'A.js'`
* `import {namedExport} from 'B.js'`

# Project structure

## Put JS in .js file
* The Configuration Object Pattern
  - SHOULD NOT generate JS from backend code
  - SHOULD get personalized __data__ from database and use JS to determine the action

## Organize by Feature
* Organize by file types
  - mode/
  - view/
  - component/
* Organize by feature (for larger projects)
  - user/
  - courses/
## Extract as much logic to POJOs 
* POJO: plain old Javascript object

# Automated Production Build
## Minification
* shorten variable/function names
* removes comments
* removes whitespaces/newlines
* tree shaking (dead-code elimination)
* debug via sourcemap

## Sourcemaps

## Dynamic HTML
* auto reference bundle 
* dynamic bundle name
* Minify
* 3 ways to handle
  - hard code reference to bundle.js
  - manipulate via node.js (regex)
  - html-webpack-plugin
* good for Cache busting

## Bundle splitting
* speed initial page load
* avoid re-downloading all libraries
  - put external depenencies in a bundle
  - put our app in a separate bundle
  - after app update client doesn't need to load external dependencies again

## Cache busting
* Set bundle.js not expired for up to 1 year
* To push app change, we need to use new bundle name
* Plan
  - Hash bundle filename
  - generate HTML dynamically
  
## Production Error logging
* TrackJS
* Sentry
* New Relic
* Raygun
* Use EmbeddedJS (EJS) to inject conditional logic into html

# Deploy App to Production
## Separate UI and API
* Why?
  - UI deployment is simple and low risk
  - separate concerns
  - scale back-end separately
  - cheap UI hosting
  - static frontend can be served by CDN
  - use the API tech you like (Go, C#, etc)

## Cloud Hosting
* AWS
* Azure
* Heroku
* Google Cloud Platform
* Github, Surge: static UI hosting

## Heroku for API
0. go to your API repo
1. `heroku login`
2. `heroku create`: returns an URL and random appname
3. `heroku git:remote -a [appname]`
4. `git push heroku master`: publish the app to heroku

## Automated UI Deployment
0. go to your UI repo
1. npm start (dev build)
2. npm run build (prod build)
3. npm run deploy (prod deploy)

## Update Approaches
* Options
    * Yeoman
    * github
    * npm

* What to centralize?
    - Centralized
        - buildScripts
        - scripts in package.json
        - webpack.config
        - .eslintrc
    - Decentralized
        - .editorconfig
        - .babelrc
        - CI config
        - package references in package.json

