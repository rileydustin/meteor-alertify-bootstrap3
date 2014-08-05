Package.describe({
  summary: "Provides alertfy js with bootstrap 3 for meteor."
});

Package.on_use(function (api) {
  api.use('jquery');

  api.add_files('css/alertify.core.css', 'client');
  api.add_files('css/alertify.bootstrap3.css', 'client');

  api.add_files('js/alertify.min.js', 'client');
});
