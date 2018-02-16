let swapp=angular.module("swapp",[]);
swapp.controller("swcontroller",function($scope,$http){

	$scope.menuitems=["ITEM 1","ITEM 1","ITEM 1","ITEM 1"];
	
	$scope.data=[];
	
	loadData();
	
	function loadData(){
		$http.get("https://swapi.co/api/people/")
		.then(resp=>{$scope.data=resp.data.results;
			console.log($scope.data);})
		.catch(err=>{console.log("something went wrong")});
	}
	
});
