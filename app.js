angular.module('app', []).controller('MainCtrl', function($scope) {
  var isCreateState = false;
  var isEditState = false;
  $scope.currentCategory = undefined;
  $scope.categories = [
    {"id": 0, "name": "Development"},
    {"id": 1, "name": "Design"},
    {"id": 2, "name": "Exercise"},
    {"id": 3, "name": "Humor"}
  ];

  $scope.bookmarks = [
    {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
    {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
    {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"},
    {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design"},
    {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise"},
    {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise"},
    {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor"},
    {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor"},
    {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor"}
  ];

  $scope.setCurrentCategory = function(category) {
    $scope.currentCategory = category;
  };

  $scope.isCategorySelected = function(category) {
    return $scope.currentCategory && category.name === $scope.currentCategory.name;
  };

  $scope.isCreateState = function() {
    return isCreateState;
  };

  $scope.isEditState = function() {
    return isEditState;
  };

  $scope.goToCreateState = function() {
    isCreateState = true;
  };

  $scope.goToDefaultState = function() {
    isCreateState = false;
  };

  $scope.saveBookmark = function(title, url) {
    $scope.bookmarks.push({title: title, url: url, id: $scope.bookmarks.length});
    isCreateState = false;
  };

  $scope.goToEditState = function() {
    isEditState = true;
    isCreateState = false;
  };
})