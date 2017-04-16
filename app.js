let endpoint = `https://api.github.com/gists/public`;

$.getJSON(endpoint, function(response) {
	//response is an array
	
	//each id is gist
	let recentGist = response[0].id;
	//start with this url then append id
	let gistURL = `https://gist.github.com/`;
	
	//only newest gist
	let onlyRecentGist = `<a href="${gistURL}${recentGist}">Newest Gist</a>`;	
	//renders all gists
	let allGists = response.map(gist => `<a href="${gistURL}${gist.id}"><li>${gist.id}</li></a>`); 	
	
	$('.gists').html(onlyRecentGist);	
});																										 