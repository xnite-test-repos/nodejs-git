git = require('simple-git');
const repo = git(__dirname);
repo.add('./*').commit("first commit!").push([], () => console.log('done'));