# studs-app
Application where the members of the Studs project (www.studieresan.se) can upload and view images. There is also a schedule for the field trip.

# installing
## node
Since Ionic requires Node 4 it is recommended to install a Node Version Manger (NVM). For Windows there's https://github.com/coreybutler/nvm-windows
Mac or Linux can run
https://github.com/creationix/nvm

Follow the instructions of the NVM to install a Node version that is supported.


## Ionic
    `npm install -g cordova ionic`  


## Bower
Install Bower after you have installed Node, this gives you the Node Package Manager (npm).
In your console, enter:
    `npm install -g bower`

## Gulp
Gulp also requires Node to be installed. In your console, enter:
    `npm install --global gulp-cli`

## SASS

Sass requires Ruby to be installed, Ruby is already installed on Mac so jump to step 2.

### Step 1
For Windows the simplest way to install Ruby is by using their installer
    `http://rubyinstaller.org/`

For Linux run the command
    `sudo su -c "gem install -g sass"`

### Step 2
Run the command
    `gem install -g sass`


## Clone the repo
After cloning the repo run
    `npm install` , 
    `bower install`


# Testing
Testing uses Gulp (look in gulpfile.js to see what it does) to perform all tasks when testing and it automatically updates changes in the browser. Run:
    `ionic serve -l`
