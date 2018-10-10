var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default',function(){
    //JSON function
    nodemon({
        script: 'app.js',
        ext: 'js',
        env :{
            PORT:8080
        },
        ignore :[ './node_modules/**']
    })
    .on('restart', function() {
        console.log("restarting");
    }
    );
});