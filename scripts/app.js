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
		{"id": 4, "title": "Travis", "url": "https://travis.com", "category": "Deployment"},
		{"id": 5, "title": "Backbone", "url": "https://backbonejs.com", "category": "Development"},
		{"id": 6, "title": "Knockout", "url": "https://knockout.com", "category": "Analysis"},
		{"id": 7, "title": "Preact", "url": "https://preact.com", "category": "Design"},
		{"id": 8, "title": "Heroku", "url": "https://heroku.com", "category": "Deployment"},
		{"id": 9, "title": "AWS", "url": "https://aws.com", "category": "Deployment"},
		{"id": 10, "title": "Jenkins", "url": "https://jenkins.com", "category": "Deployment"}
	];

	$scope.currentCategory = null;
	$scope.editingCategory = false;
	$scope.creatingCategory = false;

	function isEditing() {
		return $scope.editingCategory;
	}

	function editCategory() {
		$scope.editingCategory = true;
		$scope.creatingCategory = false;
	}

	function createCategory() {
		$scope.creatingCategory = true;
		$scope.editingCategory = false;
	}

	function isCreating() {
		return $scope.creatingCategory;
	}

	function setCurrentCategory(category) {
		$scope.currentCategory = category;
		$scope.editingCategory = false;
		$scope.creatingCategory = false;
	}

	function isCurrentCategorySelected(category) {
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	}

	$scope.setCurrentCategory = setCurrentCategory;
	$scope.isCurrentCategorySelected = isCurrentCategorySelected;
	$scope.isCreating = isCreating;
	$scope.isEditing = isEditing;
	$scope.createCategory = createCategory;
	$scope.editCategory = editCategory;

});