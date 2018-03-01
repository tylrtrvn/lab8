function initMap() {
	// add your code here

	// Create center marker at UCSD
	var ucsd_ltlng = {lat:32.878803, lng:-117.235912};

	// Create a map object and specify the DOM element for display
	var map = new google.maps.Map(document.getElementById('googleMaps'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "Student Services Center"
	});
}