# Webstrap

This repo is a basic project using Webpack 3 to compile Bootstrap 4 enabled layouts (CSS and JavaScript wise). It 
loads all the necessary dependencies and has a simple configuration to enable or disable Bootstrap 4 styles or
scripts in a per component basis.

## Technology used
- Webpack 3
- Babel 6
- Bootstrap 4
- Sass (via `*.scss`)
- ES6 (via Babel transpilation)

## Directory structure
```bash
<path to this project>
├── dist (not present until compilation)
│   ├── js
│   │   └── app.js
│   └── css
│       └── app.css
├── node_modules (not present until `npm install` or `yarn`)
├── src
│   ├── js (you can add more `*.js` files and/or folder here) 
│   │   └── app.js
│   └── scss (you can add more `*.scss` files and/or folder here)
│       ├── _variables.scss
│       └── app.scss 
├── .bootstraprc (configuration used by bootstrap-loader)
├── .gitignore 
├── package.json 
├── postcss.config.js (if you're willing to use postcss after bootstrap uses it)
├── readme.md
├── webpack.config.js 
└── yarn.lock (contains the exact versions of modules used on this project)
```

> _Note A) Vue.js is not set to compile here and though it could be done as well (make a PR if you really need this), we
 advise using the vue-cli to create a Vue.js Webpack full template as it has all those things (apart from integration
  with Bootstrap_)
  
> _Note B) You can use ES6 in your JavaScript files as we set up Webpack to use Babel to compile you ES6 code into 
ES5 compatible JavaScript. You can also add more presets through the file `.babelrc`_)

## Commands
For a starting point, we only add three simple commands, as stated below:

- `npm run build` or `yarn run build` - this one compiles your source code for development purposes (no minification, 
space or comments removal, etc)
- `npm run watch` or `yarn run watch` - this one allows automatic recompilation of your source code to have a faster 
development workflow
- `npm run prod` or `yarn run prod` - this one compiles your source code for production (space removal, minification, 
etc)

> _Note: You can add more commands by adding extra entries into the `scripts` attribute of your `package.json` file_)