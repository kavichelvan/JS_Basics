var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


//syntax 
//gulp.task('default',function(){nodemon({...}).on('restart',function(){...}); });

gulp.task('default',function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env:{
            PORT:8080
        },
        ignore :['./node_modules/**']
    })
    .on('restart',function() {
        console.log("Restarting...");
    });
});