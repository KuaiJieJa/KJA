app.controller('homeSwiperCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
	$scope.name = '1111';
//	var self =this;
	//轮播图
	$http.get('../json/lunbo.json').success(function (data) {
		//self.data = data.data.slide;
		$scope.data = data.data.slide;
	});
	$timeout(function() {
		var swiper = new Swiper('.swiper-container', {
			autoplay: 1000,
			loop: true,
			pagination: '.swiper-pagination',
		});
	}, 1000);
	
	
	$http.get('../json/shuju1.json').success(function (data1) {
		$scope.data1 = data1.listGoods;
	});
	$http.get('../json/shuju2.json').success(function (data2) {
		$scope.data2 = data2.listGoods;
	});
	$http.get('../json/shuju3.json').success(function (data3) {
		$scope.data3 = data3.listGoods;
	});
	$http.get('../json/shuju4.json').success(function (data4) {
		$scope.data4 = data4.listGoods;
	});
	
	
}]);