import gulp from "gulp";
import yargs from "yargs";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import cleanCSS from "gulp-clean-css";
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import webpack from "webpack-stream";
import uglify from "gulp-uglify";
import browserSync from "browser-sync";
import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";

const server = browserSync.create();
const PRODUCTION = yargs.argv.prod;
const sass = gulpSass(dartSass);

const paths = {  
  styles: {
    src: [
        "scss/style.scss"
    ],
    dest: "css"
  },  
  scrips: {
    src: [
     "src/js/custom.js"
    ],
    dest: "assets/js"
  },
  other: {
    src: [
      "src/**/*",
      "!src/{images,js,scss,vendors}",
      "!src/{images,js,scss,vendors}/**/*"
    ],
    dest: "dist"
  },
  package: {
    src: [
      "**/*",
      "!.vscode",
      "!node_modules{,/**}",
      "!packaged{,/**}",
      "!src{,/**}",
      "!.babelrc",
      "!.gitignore",
      "!gulpfile.babel.js",
      "!package.json",
      "!package-lock.json"
    ],
    dest: "packaged"
  }
};

export const serve = done => {
  server.init({
    // proxy: "http://localhost:8888/"
    server: {
      baseDir: "./"
  }
  });
  done();
};

export const reload = done => {
  server.reload();
  done();
};

export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({ compatibility: "ie8" })))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
};

export const watch = () => {
  gulp.watch("scss/**/*.scss", gulp.series(styles));
  // gulp.watch("src/js/**/*.js", gulp.series(scripts, reload));
  gulp.watch("**/*.html", reload);
  gulp.watch("**/*.js", reload);
};

export const scripts = () => {
  return gulp
    .src(paths.scrips.src)
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"]
                }
              }
            }
          ]
        },
        output: {
          filename: "[name].js"
        },
        externals: {
          jquery: "jQuery"
        },
        devtool: !PRODUCTION ? "inline-source-map" : false,
        mode: PRODUCTION ? 'production' : 'development'
      })
    )
    .pipe(gulp.dest(paths.scrips.dest));
};

export const dev = gulp.series(
  styles,
  serve,
  watch
);

export default dev;