var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var gulpCopy = require('gulp-copy');
// var otherGulpFunction = require('gulp-other-function');

// copy最外层的目录
gulp.task('fileinclude', function () {
    gulp.src('**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});


var sourceFiles = [ 'logos/*', 'js/*','images/*','css/*','diagrams/*','api-docs/*' ];

gulp.task('copy1',function(){
    gulp.src('logos/*')
    .pipe(gulp.dest('dist/logos'));

    
})
gulp.task('copy2',function(){
    gulp.src('js/*')
    .pipe(gulp.dest('dist/js'));

    
})
    
gulp.task('copy3',function(){
    gulp.src('images/*')
    .pipe(gulp.dest('dist/images'));

    
})

gulp.task('copy4',function(){
    gulp.src('css/*')
    .pipe(gulp.dest('dist/css'));

    
})

gulp.task('copy5',function(){
    gulp.src('diagrams/*')
    .pipe(gulp.dest('dist/diagrams'));

    
})
gulp.task('copy6',function(){
    gulp.src('api-docs/*')
    .pipe(gulp.dest('dist/api-docs'));

    
}) 
var folders=['07','08','10','081','082','090','0100','0101','0102','0110','11','20','21','22']

gulp.task('html', function () {
    for(var i=0;i<folders.length;i++){
        gulp.src(folders[i]+'/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/'+folders[i]));
    }
}); 
gulp.task('documentation', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src(folders[i]+'/documentation/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/'+folders[i]+'/documentation'));
    }
}); 

var streamsVersion=['0102','0110','11','20','21','22']

gulp.task('streams', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src(folders[i]+'/documentation/streams/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/'+folders[i]+'/documentation/streams'));
    }
}); 

gulp.task('10streams', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src('documentation/streams/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/documentation/streams'));
    }
}); 

gulp.task('10streams2', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src('22/documentation/streams/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/22/documentation/streams'));
    }
}); 

gulp.task('21stream-guide', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src('21/documentation/streams/developer-guide/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/21/documentation/streams/developer-guide'));
    }
}); 

gulp.task('22stream-guide', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src('22/documentation/streams/developer-guide/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/22/documentation/streams/developer-guide'));
    }
}); 

gulp.task('22imgae', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src('22/images/**')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/22/images'));
    }
}); 
gulp.task('21imgae', function () {
    for(var i=0;i<folders.length;i++){
    gulp.src('21/images/**')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/21/images'));
    }
}); 


gulp.task('default', gulp.series('fileinclude','copy1','copy2','copy3','copy4','copy5','copy6','html','documentation','streams','10streams','10streams2','22imgae','21imgae','21stream-guide','22stream-guide'))
