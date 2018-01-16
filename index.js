require('simple-git')()
     .add('./*')
     .commit("first commit!")
     .push([], () => console.log('done'));