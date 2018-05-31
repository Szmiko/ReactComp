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

var MovieImg = React.createClass({
	propTypes: {
		src: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('img', {}, this.props.src)
		)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		)
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieImg, {src: this.props.movie.src})
			),
		)
	}
});

var MoviesList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},

	render: function() {
		var moviesElements = this.props.movies.map(function(movie) {
			return React.createElement(Movie, {key: movie.id, movie: movie})
		})
		return (
			React.createElement('div', {},
				React.createElement('ul', {}, moviesElements)
			)
		)
	}
});

var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
