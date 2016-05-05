Router.route('/', {
  name: 'home'
});

Router.route('/charts', {
  name: 'charts',
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
