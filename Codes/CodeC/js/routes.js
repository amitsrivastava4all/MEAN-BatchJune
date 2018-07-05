app.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{templateUrl:'views/home.html',controller:'myctrl'})
    .when('/aboutus',{templateUrl:'views/aboutus.html'})
    .when('/news',{templateUrl:'views/news.html'})
    .otherwise({template:'<h1>U Type Something Wrong...</h1>'})

});