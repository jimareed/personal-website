var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.title = "My Website";
  $scope.bioSummary = "Bio Summary.";
  $scope.projectDescription = "Here are some personal projects that help me keep up to date with technology.";
  $scope.project1Url = "http://localhost/project-1";
  $scope.project2Url = "http://localhost/project-2";
  $scope.project3Url = "http://localhost/project-3";
  $scope.githubUserId = "githubid";
  $scope.linkedinUserId = "linkedinid";
});
