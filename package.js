Package.describe({
  name: 'verron:moment-twitter',
  version: '0.2.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('momentjs:moment@2.10.6', 'client');
  api.addFiles(['export.js', 'moment-twitter.js'], 'client');
});
