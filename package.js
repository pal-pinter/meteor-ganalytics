Package.describe({
    name: 'palpinter:ganalytics',
    version: '1.0.1',
    // Brief, one-line summary of the package.
    summary: 'Log page views and events to Google Analytics.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/pal-pinter/meteor-ganalytics',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3');
    api.use('ecmascript');
    api.addFiles('ganalytics.js', 'client');
    api.export('GAnalytics', 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('indesign:ganalytics');
    api.addFiles('ganalytics.js');
    api.export('GAnalytics');
});
