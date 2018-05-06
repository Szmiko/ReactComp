var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'http://www.filmweb.pl/Harry.Potter.I.Kamien.Filozoficzny'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o lwie',
		src: 'http://www.filmweb.pl/Krol.Lew'
	},
	{
		id: 3,
		title: 'Gniew oceanu',
		desc: 'Film o rybakach',
		src: 'http://www.filmweb.pl/film/Gniew+oceanu-2000-954'
	},
	{
		id: 4,
		title: 'Siedem',
		desc: 'Film o seryjnym mordercy',
		src: 'http://www.filmweb.pl/Siedem'
	}
];

var Movie = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('li', {key: movies.id}),
				React.createElement('h2', {}, this.props.movies.title),
				React.createElement('p', {}, this.props.movies.desc),
				React.createElement('img', {src: this.props.movies.src})
			)
		)
	}
});

var element = React.createElement(Movie, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));