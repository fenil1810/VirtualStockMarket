/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ng2-bs3-modal': 'npm:ng2-bs3-modal',
            'angular2-google-chart': 'npm:angular2-google-chart',
            'ng2-charts': 'npm:ng2-charts',
            'chart.js': 'npm:chart.js',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './transpiled-js/main.js', //path to main.js
                defaultExtension: 'js'
            },/*
            '@angular/router-deprecated': {
                main: 'index.umd.js',
                defaultExtension: 'js'
            },*/
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-bs3-modal': {
                main: './ng2-bs3-modal.js',
                defaultExtension: 'js'
            },
            'angular2-google-chart': {
                main: './angular2-google-chart.directive.js',
                defaultExtension: 'js'
            },
            'ng2-charts': {
                main: './ng2-charts.js',
                defaultExtension: 'js'
            },
            'chart.js': {
                main: './dist/Chart.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);