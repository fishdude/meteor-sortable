
Package.describe({
  // Short two-sentence summary.
  summary: "Sortable, a lightwieght javascript library for reordering and sorting using the native HTML5 drag and drop API",
  // Version number.
  version: "0.0.5",
  // Optional.  Default is package directory name.
  name: "fish:sortable",
  // Optional github URL to your source repository.
  git: "https://github.com/fishdude/meteor-sortable.git",
});

/* This defines your actual package */
Package.onUse(function (api) {
  
  api.versionsFrom('0.9.0');
  
  api.use('application-configuration@1.0.0');

  api.addFiles('lib/Sortable.min.js', 'server');
});
