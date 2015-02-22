Router.route('/', function () {
  
  this.layout('newappLayout');

  
  this.render('table-static-m');

  
  this.render('master-header', {to: 'mheader'});
  this.render('masternav', {to: 'mnav'});
  this.render('master-aside2', {to: 'maside2'});
});

Router.route('/cf-my-cases.html', function () {
  
  this.layout('newappLayout');

  
  this.render('cf-mycases');

  
  this.render('master-header', {to: 'mheader'});
  this.render('masternav', {to: 'mnav'});
  this.render('master-aside2', {to: 'maside2'});
});

Router.route('/table-datatable.html', function () {
  
  this.layout('newappLayout');

  
  this.render('table-datatable-m');

  
  this.render('master-header', {to: 'mheader'});
  this.render('masternav', {to: 'mnav'});
  this.render('master-aside2', {to: 'maside2'});
});

Router.route('/table-static.html', function () {
  
  this.layout('newappLayout');

  
  this.render('table-static-m');

  
  this.render('master-header', {to: 'mheader'});
  this.render('masternav', {to: 'mnav'});
  this.render('master-aside2', {to: 'maside2'});
});


