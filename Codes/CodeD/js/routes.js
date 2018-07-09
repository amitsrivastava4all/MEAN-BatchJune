app.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{templateUrl:'views/home.html',controller:'myctrl'})
    .when('/aboutus/:name/:job',{templateUrl:'views/aboutus.html',controller:'myctrl2'})
    .when('/news',{templateUrl:'views/news.html'})
    .otherwise({template:'<h1>U Type Something Wrong...</h1>'})

});