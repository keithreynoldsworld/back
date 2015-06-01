$(document).ready(function() {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'lo', 
			'loading':          'lo',   // #help
			'menu':         'me',   // #about
			'game':      'ga',   // #projects
			'leaderboard': 'le',  
			'settings': 'se', // #profile/Aaron
			'*notfound':     'se'
		},

		lo: function() {
			console.log('loading');
			$('.page').hide();
			$('#lo').show();
			setTimeout(function() {
			console.log('menu');
			$('.page').hide();
			$('#me').show();
		}, 4000);
		},

		me: function() {
			console.log('menu');
			$('.page').hide();
			$('#me').show();
		},

		ga: function() {
			console.log('game');
			$('.page').hide();
			$('#ga').show();
		},

		le: function(name) {
			console.log('leaderboard', name);
			$('.page').hide();
			$('#le').show();
		},

		se: function() {
			console.log('settings');
			$('.page').hide();
			$('#se').show();
		}
	});

	var myRouter = new Router();
	Backbone.history.start();

	console.log('hello');

	$('.a-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('menu', {trigger: true});
	});
	$('.b-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('game', {trigger: true});
	});
	$('.c-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('leaderboard', {trigger: true});
	});
	$('.d-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('settings', {trigger: true});
	});
	


});