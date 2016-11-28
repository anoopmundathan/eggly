angular.module('eggApp', [])
.controller('MainCtrl', function($scope) {

	$scope.categories = [
		{"id": 0, "name": "Analysis"},
		{"id": 1, "name": "Design"},
		{"id": 2, "name": "Development"},
		{"id": 3, "name": "Test"},
		{"id": 4, "name": "Deployment"}
	];

	$scope.bookmarks = [
		{"id": 0, "title": "AngularJS", "url": "https://angularjs.com", "category": "Development"},
		{"id": 1, "title": "Photoshop", "url": "https://photoshop.com", "category": "Design"},
		{"id": 2, "title": "EmberJS", "url": "https://emberrjs.com", "category": "Analysis"},
		{"id": 3, "title": "Mocha", "url": "https://mochajs.com", "category": "Test"},
		{"id": 4, "title": "Travis", "url": "https://travis.com", "category": "Deployment"}
	];

	function filterCategory(category) {
		$scope.selectedCategory = category;
	}

	function unfilterCategory() {
		$scope.selectedCategory = null;
	}

	$scope.filterCategory = filterCategory;
	$scope.unfilterCategory = unfilterCategory;

});