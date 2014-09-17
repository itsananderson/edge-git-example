var git = require('edge-git');

var repo = new git.repository('./.git/');

console.log(repo.BranchesSync());
