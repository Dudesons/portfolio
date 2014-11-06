(function()
{
    var portfolio = angular.module('portfolio', ["ngAnimate", 'ui.bootstrap', 'ngRoute']);
    /*Dev Mode : No cache*/
    portfolio.run(function($rootScope, $templateCache)
                    {
                       $rootScope.$on('$viewContentLoaded', function()
                                                               {
                                                                  $templateCache.removeAll();
                                                               });
                    });

    portfolio.config(function($routeProvider, $locationProvider)
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
            .when('/Pro', {
                        templateUrl: 'templates/projects/proproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/Stud', {
                        templateUrl: 'templates/projects/studproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/Perso', {
                        templateUrl: 'templates/projects/persoproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/WemanityProject', {
                        templateUrl: 'templates/projects/wemanityproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .when('/CAMS', {
                templateUrl: 'templates/skills/business/cams.html',
                controller: 'PortfolioCtrl'
            })
            .when('/DevOps', {
                templateUrl: 'templates/skills/business/devops.html',
                controller: 'PortfolioCtrl'
            })
            .when('/TimeToMarket', {
                templateUrl: 'templates/skills/business/timetomarket.html',
                controller: 'PortfolioCtrl'
            })
            .when('/CD', {
                templateUrl: 'templates/skills/business/cd.html',
                controller: 'PortfolioCtrl'
            })
            .when('/CI', {
                templateUrl: 'templates/skills/business/ci.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Improvement', {
                templateUrl: 'templates/skills/business/improvement.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Scrum', {
                templateUrl: 'templates/skills/business/scrum.html',
                controller: 'PortfolioCtrl'
            })
            .when('/XP', {
                templateUrl: 'templates/skills/business/xp.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Kanban', {
                templateUrl: 'templates/skills/business/kanban.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Lean', {
                templateUrl: 'templates/skills/business/lean.html',
                controller: 'PortfolioCtrl'
            })
            .when('/LeanStartUp', {
                templateUrl: 'templates/skills/business/leanstartup.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Waterfall', {
                templateUrl: 'templates/skills/business/waterfall.html',
                controller: 'PortfolioCtrl'
            })
            .when('/StrongTeamSpirit', {
                templateUrl: 'templates/skills/business/strongteamspirit.html',
                controller: 'PortfolioCtrl'
            })
            .when('/OrganisedAndApplied', {
                templateUrl: 'templates/skills/business/organisedandapplied.html',
                controller: 'PortfolioCtrl'
            })
            .when('/AutonomousAndForceProposal', {
                templateUrl: 'templates/skills/business/autonomousandforceproposal.html',
                controller: 'PortfolioCtrl'
            })
            .when('/AbilityToAdapt', {
                templateUrl: 'templates/skills/business/abilitytoadapt.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Linux', {
                templateUrl: 'templates/skills/technical/os-network/linux.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Windows', {
                templateUrl: 'templates/skills/technical/os-network/windows.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Juniper', {
                templateUrl: 'templates/skills/technical/os-network/juniper.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Cisco', {
                templateUrl: 'templates/skills/technical/os-network/cisco.html',
                controller: 'PortfolioCtrl'
            })
            .when('/OSI', {
                templateUrl: 'templates/skills/technical/os-network/osi.html',
                controller: 'PortfolioCtrl'
            })
            .when('/TCPIP', {
                templateUrl: 'templates/skills/technical/os-network/tcpip.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Netfilter', {
                templateUrl: 'templates/skills/technical/os-network/netfilter.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Vsphere', {
                templateUrl: 'templates/skills/technical/os-network/vsphere.html',
                controller: 'PortfolioCtrl'
            })
            .when('/ITSecurity', {
                templateUrl: 'templates/skills/technical/os-network/itsecurity.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Python', {
                templateUrl: 'templates/skills/technical/languages/python.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Puppet', {
                templateUrl: 'templates/skills/technical/languages/puppet.html',
                controller: 'PortfolioCtrl'
            })
            .when('/C', {
                templateUrl: 'templates/skills/technical/languages/c.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Perl', {
                templateUrl: 'templates/skills/technical/languages/perl.html',
                controller: 'PortfolioCtrl'
            })
            .when('/JavaScript', {
                templateUrl: 'templates/skills/technical/languages/js.html',
                controller: 'PortfolioCtrl'
            })
            .when('/PHP', {
                templateUrl: 'templates/skills/technical/languages/php.html',
                controller: 'PortfolioCtrl'
            })
            .when('/SQL', {
                templateUrl: 'templates/skills/technical/languages/sql.html',
                controller: 'PortfolioCtrl'
            })
            .when('/HTMLCSS', {
                templateUrl: 'templates/skills/technical/languages/htmlcss.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Fabric', {
                templateUrl: 'templates/skills/technical/framework/fabric.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Scapy', {
                templateUrl: 'templates/skills/technical/framework/scapy.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Django', {
                templateUrl: 'templates/skills/technical/framework/django.html',
                controller: 'PortfolioCtrl'
            })
            .when('/AngularJS', {
                templateUrl: 'templates/skills/technical/framework/angularjs.html',
                controller: 'PortfolioCtrl'
            })
            .when('/JQuery', {
                templateUrl: 'templates/skills/technical/framework/jquery.html',
                controller: 'PortfolioCtrl'
            })
            .when('/D3', {
                templateUrl: 'templates/skills/technical/framework/d3.html',
                controller: 'PortfolioCtrl'
            })
            .when('/RaphaelJS', {
                templateUrl: 'templates/skills/technical/framework/raphaeljs.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Git', {
                templateUrl: 'templates/skills/tools/scm/git.html',
                controller: 'PortfolioCtrl'
            })
             .when('/GitIHM', {
                templateUrl: 'templates/skills/tools/scm/gitihm.html',
                controller: 'PortfolioCtrl'
            })
            .when('/SVN', {
                templateUrl: 'templates/skills/tools/scm/svn.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Docker', {
                templateUrl: 'templates/skills/tools/devops/docker.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Jenkins', {
                templateUrl: 'templates/skills/tools/devops/jenkins.html',
                controller: 'PortfolioCtrl'
            })
            .when('/DeployIT', {
                templateUrl: 'templates/skills/tools/devops/deployit.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Ant', {
                templateUrl: 'templates/skills/tools/build/ant.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Maven', {
                templateUrl: 'templates/skills/tools/build/maven.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Make', {
                templateUrl: 'templates/skills/tools/build/make.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Nmap', {
                templateUrl: 'templates/skills/tools/it-security/nmap.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Nessus', {
                templateUrl: 'templates/skills/tools/it-security/nessus.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Wireshark', {
                templateUrl: 'templates/skills/tools/it-security/wireshark.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Tshark', {
                templateUrl: 'templates/skills/tools/it-security/tshark.html',
                controller: 'PortfolioCtrl'
            })
            .when('/IPTraf', {
                templateUrl: 'templates/skills/tools/it-security/iptraf.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Netcat', {
                templateUrl: 'templates/skills/tools/it-security/netcat.html',
                controller: 'PortfolioCtrl'
            })
            .when('/ZenOSS', {
                templateUrl: 'templates/skills/tools/supervision/zenoss.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Redmine', {
                templateUrl: 'templates/skills/tools/project-management/redmine.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Trello', {
                templateUrl: 'templates/skills/tools/project-management/trello.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Gantter', {
                templateUrl: 'templates/skills/tools/project-management/gantter.html',
                controller: 'PortfolioCtrl'
            })
            .when('/Jira', {
                templateUrl: 'templates/skills/tools/project-management/jira.html',
                controller: 'PortfolioCtrl'
            })
            .when('/MSProject', {
                templateUrl: 'templates/skills/tools/project-management/msproject.html',
                controller: 'PortfolioCtrl'
            })
            .when('/ItiProject', {
                templateUrl: 'templates/projects/itiproject.html',
                controller: 'PortfolioCtrl'
            })
            .when('/EpitechProject', {
                templateUrl: 'templates/projects/epitechproject.html',
                controller: 'PortfolioCtrl'
            })
            .otherwise({redirectTo: '/'
                        });
  });

    portfolio.factory("Share", function()
                                {
                                    return {
                                        "header":1,
                                        "lang":"en"

                                    };
                                });

    /*portfolio.directive("scroll", function ($window)
                                    {
                                        return function(scope, element, attrs)
                                                {
                                                    angular.element($window).bind("scroll", function()
                                                                                            {
                                                                                                scope.boolChangeClass = this.pageYOffset >= 250 ? true : false;
                                                                                                scope.$apply();
                                                                                            });
                                                };

                                    });*/

    portfolio.controller("MenuCtrl", function($scope, Share, $http, $rootScope)
                                    {
                                        $scope.menuFixed = "";
                                        $scope.langH = Share.lang;
                                        $scope.$on('UpdateMenu', function()
                                                                        {
                                                                            console.log("toto");
                                                                            $scope.menuFixed = Share.header == 1 ? "" : "menu-fixed";
                                                                        }, true);

                                        $scope.lang = function(t)
                                                        {
                                                            Share.lang = (t == 0 ? "en" : "fr");
                                                            $scope.langH = Share.lang;
                                                            $rootScope.$broadcast("UpdateLang");
                                                        };
                                    });

    portfolio.controller("PortfolioCtrl", function($scope, Share)
                                        {
                                            $scope.lang = Share.lang;
                                            $scope.$on('UpdateLang', function()
                                                                        {
                                                                            $scope.lang = Share.lang;
                                                                        }, true);
                                        });
})();