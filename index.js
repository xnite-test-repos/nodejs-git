git = require('simple-git');
const repo = git(__dirname);
repo
    .add('.')
    .commit("automatic commit")
    .push([], function(){
        // do stuff here
        console.log('done');
    });