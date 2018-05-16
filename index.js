var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'http://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o lwie',
		src: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
	},
	{
		id: 3,
		title: 'Gniew oceanu',
		desc: 'Film o rybakach',
		src: 'http://1.fwcdn.pl/po/09/54/954/7518080.6.jpg'
	},
	{
		id: 4,
		title: 'Siedem',
		desc: 'Film o seryjnym mordercy',
		src: 'http://1.fwcdn.pl/po/07/02/702/6967799.3.jpg'
	}
];

var Movie = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},

	render: function() {
		var moviesElements = movies.map(function(movie) {
			return (
				React.createElement('div', {},
					React.createElement('li', {key: movies.id}),
					React.createElement('h2', {}, this.props.movies.title),
					React.createElement('p', {}, this.props.movies.desc),
					React.createElement('img', {src: this.props.movies.src, alt: movies.desc})
				)
			)
		})
	}
});

var element = React.createElement(Movie, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
