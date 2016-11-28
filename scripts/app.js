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

	$scope.currentCategory = null;

	function setCurrentCategory(category) {
		$scope.currentCategory = category;
	}

	function isCurrentCategorySelected(category) {
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	}

	$scope.setCurrentCategory = setCurrentCategory;

	$scope.isCurrentCategorySelected = isCurrentCategorySelected;

});