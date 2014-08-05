Package.describe({
  summary: "Provides alertfy js with bootstrap 3 for meteor."
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('alertify');
  api.add_files(path.join(asset_path, 'css', 'alertify.core.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'alertify.bootstrap3.css'), 'client');

  api.add_files(path.join(asset_path, 'js', 'alertify.min.js'), 'client');
});
