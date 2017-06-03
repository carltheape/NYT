var search = "star";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var articleCounter = 0;

var apiKey = "8c827b429dc2450280570c08e85e192f";
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + search;


//grab information from search fields

//insert search term into api url

//ajax call to api

function runQuery (queryUrl){

	$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response){
		console.log(response);
	});

	$(".search").on("click"), function(){
		alert("I'm Searching")
	}


}

