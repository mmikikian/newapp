Router.route('/', function () {
  
  this.layout('newappLayout');

  
  this.render('components-m');

  
  this.render('master-header', {to: 'mheader'});
  this.render('master-nav', {to: 'mnav'});
  this.render('master-aside2', {to: 'maside2'});
});

Router.route('/buttons.html', function () {
  
  this.layout('newappLayout');

  
  this.render('buttons-m');

  
  this.render('master-header', {to: 'mheader'});
  this.render('master-nav', {to: 'mnav'});
  this.render('master-aside2', {to: 'maside2'});
});

Router.route('/icons.html', function () {
  
  this.layout('newappLayout');

  
  this.render('icons-m');

  
  this.render('master-header', {to: 'mheader'});
  this.render('master-nav', {to: 'mnav'});
  this.render('master-aside2', {to: 'maside2'});
});