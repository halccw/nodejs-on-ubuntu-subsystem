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

# Bundler
