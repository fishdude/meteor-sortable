
Package.describe({
  summary: "Sortable, a lightwieght javascript library for reordering and sorting using the native HTML5 drag and drop API"
});

Package.on_use(function (api, where) {
  

  api.add_files('lib/Sortable.min.js', 'client');

});

Package.on_test(function (api) {
  api.use('meteor-sortable');

  api.add_files('meteor-sortable_tests.js', ['client', 'server']);
});
