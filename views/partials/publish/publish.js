window.devportal.partials.publish = function($scope,$rootScope, $http, $dev, $state, $rootScope, $stateParams, $auth, $objectstore,$helpers){
	$scope.appKey = $stateParams.appKey;

	$scope.publishBtnVisible = true;

	$dev.project().get($stateParams.appKey).success(function(data){
		$scope.appDesc = data;
		$dev.states().setIdle();
	}).error(function(data){
		$dev.dialog().alert ("Error Retrieving Project Details");
		$dev.states().setIdle();
	});

	$scope.app = {};

	$scope.publishMarket = false;
	$scope.publishAccounts = ["One", "Two" ,"Three"];
	$scope.selectedAccount = $scope.publishAccounts[0];

	$scope.publish = function(){
		$dev.project().publish($scope.appKey).success(function(){
			$dev.dialog().alert ("Application Publish Successful!!!.");
		}).error(function(){
			$dev.dialog().alert (edata);
		});
	}

	$scope.edit = function(){$dev.navigation().edit($scope.appKey);}
	$dev.navigation().title($scope.appKey, "Publish");
}
