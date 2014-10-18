(function()
{
    var portfolio = angular.module('portfolio', ["ngAnimate", 'ui.bootstrap']);
    /*portfolio.config(function($routeProvider, $locationProvider)
    {
        $routeProvider
            .when('/', {
                        templateUrl: 'templates/welcome.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/Welcome', {
                        templateUrl: 'templates/welcome.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/AboutMe', {
                        templateUrl: 'templates/aboutme.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/Edu', {
                        templateUrl: 'templates/edu.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/Xp', {
                        templateUrl: 'templates/xp.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/Skills', {
                        templateUrl: 'templates/skills.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/Contact', {
                        templateUrl: 'templates/contact.html',
                        controller: 'PortfolioCtrl'
                    })
            .otherwise({redirectTo: '/'});
  });*/

    portfolio.factory("Share", function()
                                {
                                    return {
                                        "header":1,
                                        "anim":0,
                                        "view":""
                                    };
                                });

    portfolio.directive("scroll", function ($window)
                                    {
                                        return function(scope, element, attrs)
                                                {
                                                    angular.element($window).bind("scroll", function()
                                                                                            {
                                                                                                scope.boolChangeClass = this.pageYOffset >= 250 ? true : false;
                                                                                                scope.$apply();
                                                                                            });
                                                };

                                    });

    portfolio.controller("MenuCtrl", function($scope, Share, $http, $rootScope)
                                    {
                                        $scope.menuFixed = "";
                                        $scope.$on('UpdateMenu', function()
                                                                        {
                                                                            console.log("toto");
                                                                            $scope.menuFixed = Share.header == 1 ? "" : "menu-fixed";
                                                                        }, true);

                                        $scope.getPage = function(id)
                                                            {
                                                                $http({
                                                                    url:"templates/"+(id == 0 ? "welcome" : id == 1 ? "aboutme" : id == 2 ? "edu" : id == 3 ? "xp" : id == 4 ? "skills" : id == 5 ? "contact" : "welcome")+".html",
                                                                    method:"POST",
                                                                    headers:{"Content-Type":"application/X-WWW-form-urlencoded"},
                                                                    data:{"id":id}
                                                                }).success(function(data)
                                                                            {
                                                                                console.log(data);
                                                                                Share.view = data
                                                                                $rootScope.$broadcast("UpdateViews");
                                                                            }).error(function()
                                                                                    {
                                                                                        alert("fail")
                                                                                    });
                                                            }

                                    });

    portfolio.controller("PortfolioCtrl", function($scope, Share, $anchorScroll, $location, $sce)
                                        {
                                            $scope.anim = '';
                                            //$scope.view = Share.view;
                                            $scope.$on('UpdateViews', function()
                                                                        {
                                                                            console.log("toto");
                                                                            $scope.view = $sce.trustAsHtml(Share.view);
                                                                        });
                                            $scope.goToAnchor = function(x)
                                                                {
                                                                    var newHash = 'anchor' + x;
                                                                    if ($location.hash() !== newHash)
                                                                    {
                                                                        console.log($location.hash());
                                                                        $location.hash('anchor' + x);
                                                                        console.log(window.scrollX);
                                                                    }
                                                                    else
                                                                    {
                                                                        $anchorScroll();
                                                                    }
                                                                };
                                        });
})();