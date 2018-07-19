# npm notes
* `npm help install`
* `npm apihelp install`
* `npm init`: interactively create package.json
* `npm set init-author-name`
* `npm get init-author-name`
* `npm config delete init-author-name`
* Configs are saved in .npmrc
* `npm install lodash --save|-S`: install package and save it in package.json
* `npm uninstall lodash --save`: uninstall package and remove it in package.json
* `npm install lodash --save-dev|-D`: install package that is dev only not for prod and save it in package.json
* `npm list --depth 1 --global true --long true`
* `npm i gulp -g`: install package globally for all projects
* `npm list -g --depth 0`: check global packages
* `npm i underscore@1.8.3`: install specific semantic version of the package
* `npm i underscore@1.8.x`: install latest of 1.8 of the package
* `npm i underscore@1.8`: install latest of 1.8 of the package
* `npm i underscore@">=1.8 <2.0"`: install any version in the range of the package
* `npm i underscore@1.8.3 --save --save-exact`: put exact version in package.json
* `npm i`: install packages described in package.json
* in package.json
    - "*" or "x": the latest version
    - "^1.7.1": at least 1.7.1
    - "~1.7.1": the latest of the minor release 1.7
    - "1.7.1": exact version 1.7.1
* `npm update`: easy update dependencies to the latest version

# Advanced npm notes
* `npm install https://github.com/...`: install from git repo
* `npm i gist:<hash>`: install from gits
* `npm i ../../hello-mars`: install from folder
* www.npmjs.com: npm registry
* `npm search underscore`
* `npm prune`: remove installed packages not in package.json
* `npm prune --production`: remove installed packages not in package.json production 
* `npm repo underscore`: go to the repo of the package
* `npm i npm@latest -g`: upgrade npm. __must be admin__
* `npm test`: in package.json. Two important scripts:
    ```json 
    "scripts": {
        "test": "node test.js",
        "start": "node index.js"
    }
    ```
