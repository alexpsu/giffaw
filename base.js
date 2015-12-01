$(document).ready(function(){
  console.log("here's your mock data to start with:")
  console.log(GLOBAL_MOCK_DATA_OBJECT)

  	var url = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
  	$("input").keydown(function handler() {
  		if (event.which === 13) {
  			$('.gif1').text(" ")
  			var customSearch = $("input").val().replace(" ","+");
  			url = 'http://api.giphy.com/v1/gifs/search?q=' + customSearch + '&api_key=dc6zaTOxFJmzC';
		  	$.ajax({
				method: 'GET',
				url: url,
				success: function (taco) {
					console.log(taco);
			    	var x = (taco.data);
					x.forEach(function(element) {
						var y = element.images.fixed_height.url;
						$('.gif1').append("<img src=" + y + ">");
					})
				}
			})
		}
	})
		$.ajax({
			method: 'GET',
			url: url,
			success: function (taco) {
				console.log(taco);
			    var x = (taco.data);
				x.forEach(function(element) {
					var y = element.images.fixed_height.url;
					$('.gif1').append("<img src=" + y + ">");
				})
			}
		})
})
