const {src,dest} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

function js(){
	return src("./src/js/**/*.js")
		.pipe(concat("main.min.js"))
        .pipe(uglify())
		.pipe(dest('./src/js'));
}

exports.js = js;