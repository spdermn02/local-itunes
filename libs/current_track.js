var path = require('path');
var async = require('neo-async');
var agent = require(path.join(__dirname, 'utils', 'agent'));

module.exports = {
	agent: agent,
	objectPath: 'currentTrack',
	methodNames: [
		'class',
		'container',
		'id',
		'index',
		'name',
		'persistentID',
		'properties',
		'album',
		'albumArtist',
		'albumLoved',
		'albumRating',
		'albumRatingKind',
		'artist',
		'bitRate',
		'bookmark',
		'bookmarkable',
		'bpm',
		'category',
		'comment',
		'compilation',
		'composer',
		'databaseID',
		'dateAdded',
		'description',
		'discCount',
		'discNumber',
		'duration',
		'enabled',
		'episodeID',
		'episodeNumber',
		'eq',
		'finish',
		'gapless',
		'genre',
		'grouping',
		'itunesu',
		'kind',
		'longDescription',
		'loved',
		'lyrics',
		'modificationDate',
		'playedCount',
		'playedDate',
		'podcast',
		'rating',
		'ratingKind',
		'releaseDate',
		'sampleRate',
		'seasonNumber',
		'shufflable',
		'skippedCount',
		'skippedDate',
		'show',
		'sortAlbum',
		'sortArtist',
		'sortAlbumArtist',
		'sortName',
		'sortComposer',
		'sortShow',
		'size',
		'start',
		'time',
		'trackCount',
		'trackNumber',
		'unplayed',
		'videoKind',
		'volumeAdjustment',
		'year'
	],
	main: function (callback) {
		this.agent.executeMeny(this.objectPath, this.methodNames, callback);
	}
};
