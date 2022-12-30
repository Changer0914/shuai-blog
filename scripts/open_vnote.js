var exec = require('child_process').exec;
hexo.on('new', function(data){
    exec('open -a "/Applications/vnote.app" ' + data.path);
});


