var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	//配置默认锚点
	$urlRouterProvider.when('', '/home');
	
	//配置路由
	$stateProvider.
	state('home', {
		url: '/home',
		templateUrl: './home/home.html',
		controller : 'homeSwiperCtrl as hsCtrl',
	}).state('kuaijiegou', {
		url: '/kuaijiegou',
		templateUrl: './kuaijiegou/kuai-shop.html',
	}).state('cart', {
		url: '/cart',
		templateUrl: './cart/cart2.html',
	}).state('dl', {
		url: '/dl',
		templateUrl: './dl/dl.html',
	}).state('mine', {
		url: '/mine',
		templateUrl: './mine/mine.html',
	})
	
	.state('home.particulars', {
		url: '/spxq',
		templateUrl: './home/spxq.html',
	})
	
}])