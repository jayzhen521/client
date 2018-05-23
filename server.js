var servePackage = require('./scripts/gulp/serve-package');

function packageServerHostname(){
    return process.env.PACKAGE_SERVER_HOSTNAME || 'localhost';
}

servePackage(3001, packageServerHostname());