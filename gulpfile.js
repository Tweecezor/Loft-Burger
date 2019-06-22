const {src, dest,task,series, watch,parallel} = require('gulp');
const rm = require( 'gulp-rm' );
const  sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo')
const svgSprite = require('gulp-svg-sprite')
const {DIST_PATH, SRC_PATH, STYLE_LIBS,JS_LIBS} = require("./gulp.config")
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

sass.compiler = require('node-sass');

task( 'clean', function() {
    console.log(env);
    return src( 'dist/**/*', { read: false }).pipe( rm() )
  });

task('copy:html',()=>{
    return src("src/*.html")
        .pipe(dest('dist'))
        .pipe(reload({stream:true}));
});
task('copy:svg',function(){
    return src("src/icons/map-marker.svg")
    .pipe(dest('dist/icons'))
    .pipe(reload({stream:true}))
})
const fonts = [
    'src/fonts/Gagalin/*',
    'src/fonts/lifehack/*',
    'src/fonts/Ubuntu/*',
    'src/fonts/Lifehack*'
]
task('copy:fonts',()=>{
    return src(fonts)
        .pipe(dest('dist/fonts'))
        .pipe(reload({stream:true}));
});
const images = [
    'src/image/*.png',
    'src/image/*.jpg',
    'src/image/avatars/*',
    'src/image/backgrounds/*.jpg',
    'src/burgers-slider/*',
    'src/image/player/*'
    ]

task('copy:image',()=>{
    return src(images)
        .pipe(dest('dist/images'))
        .pipe(reload({stream:true}));
});
task('copy:video',()=>{
    return src("src/video/*")
        .pipe(dest('dist/video'))
        .pipe(reload({stream:true}));
});

const libs =[
    // "node_modules/jquery/dist/jquery.js",
    "src/js/*.js"
]

task('scripts',()=>{
    return src(libs)
    .pipe(gulpif(env=== 'dev', sourcemaps.init()))
    .pipe(concat('main.min.js',{ newLine : ';'}))
    .pipe(
        gulpif(env === "prod",
        babel({
            presets: ['@babel/env']
        })
        )
    )
    .pipe(gulpif(env === "prod",uglify()))
    .pipe(gulpif(env==="dev",sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(reload({stream:true}))
        
});
const icons = [
    "src/icons/*.svg"
]

task("icons",()=>{
    return src("src/icons/*.svg")
    .pipe(
        svgo({
            plugins:[
                {
                    removeAttrs:{
                        attrs:"()"
                    }
                }
            ]
        })
    )
    .pipe(
        svgSprite({
            mode:{
                symbol:{
                    sprite:"../sprite.svg"
                }
            }
        })
    )
    .pipe(dest("dist/icons"));
});

const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/styles/style.scss'
];


task('styles',()=>{
    return src(styles)
        .pipe(gulpif(env=== 'dev', sourcemaps.init()))
        .pipe(concat('style.min.scss'))
        .pipe(sassGlob())
        .pipe(sass().on('error',sass.logError))
        // .pipe(px2rem())
        .pipe(gulpif(env ==="dev",
                autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                })
        ))
        .pipe( gulpif(env === "prod", gcmq()))
        .pipe(gulpif(env === "prod", cleanCSS()))
        .pipe(gulpif(env==="dev",sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(reload({stream:true}))
});

task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        open:false
    });
});
task("watch",function(){
    watch("./src/scss/*.scss", series("styles"));
    watch("./src/*.html", series("copy:html"));
    watch("./src/js/*.js", series("scripts"));
})


task("default",series("clean",parallel("copy:image","copy:video","copy:fonts","copy:html","copy:svg","styles","scripts","icons"),parallel("watch","server")));

task(
    "build",
    series('clean',parallel("copy:image","copy:video","copy:fonts","copy:html","styles","scripts","icons","copy:svg"))
)