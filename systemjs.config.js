System.config({
  paths: {
    // paths serve as alias
    'npm:': '/node_modules/'
  },
  /* . . . */
  map: {
    'app': 'app',
    /* . . . */
    '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
    /* . . . */
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    /* . . . */
    'rxjs': 'npm:rxjs/index.js',
    'rxjs/operators': 'npm:rxjs/operators/index.js',
    'tslib': 'npm:tslib/tslib.js',
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel',
  packages: {
    app: {
      defaultExtension: 'js',
      meta: {
        './*.js': {
          loader: 'systemjs-angular-loader.js'
        }
      }
    },
    rxjs: {
      defaultExtension: 'js'
    },
    "": {
      defaultExtension: "js" 
    }
    /* . . . */
  }
  /* . . . */
});