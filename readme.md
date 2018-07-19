# Ubuntu subsystem on Windows 10 

* Follow instructions: https://docs.microsoft.com/en-us/windows/wsl/install-win10
    * Run this command in admin prvileged Powershell: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
    * Install __Ubuntu 16.04__ from Microsoft Store (__NOT__ the default one, as Node.js does not support that version)

* Enable GUI on Linux
    - Install Xming on Windows: https://sourceforge.net/projects/xming/

# Install dependencies

```bash
# Update apt-get
sudo apt-get update

# Install git
sudo apt-get install -y git-core

# Install Node.js 10 (https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install firefox
sudo apt-get install -y firefox

# Enable X Window
echo export DISPLAY=:0 >> ~/.bashrc
source ~/.bashrc

# Fix bad bash color scheme
echo "LS_COLORS='rs=0:di=1;35:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lz=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.axa=00;36:*.oga=00;36:*.spx=00;36:*.xspf=00;36:';" >> ~/.bashrc
echo "export LS_COLORS" >> ~/.bashrc
echo "PS1='\e[37;1m\u@\e[35m\W\e[0m\$ ' # this will change your prompt format" >> ~/.bashrc
source ~/.bashrc

# Create a share folder between Linux and Windows
# Create projects folder under your C drive and put a ref link in Linux home dir
cd /mnt/c # all Widnows drives is under /mnt
mkdir projects
cd ~
ln -s /mnt/c/projects/ projects

```

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