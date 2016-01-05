(function()
{
    var portfolio = angular.module('portfolio', ["ngAnimate", 'ui.bootstrap', 'ui.router', 'ncy-angular-breadcrumb']);
    /*Dev Mode : No cache*/
    portfolio.run(function($rootScope, $templateCache)
                    {
                       $rootScope.$on('$viewContentLoaded', function()
                                                               {
                                                                  $templateCache.removeAll();
                                                               });
                    });

     portfolio.factory("Share", function()
                                {
                                    return {
                                        "header":1,
                                        "lang":"en",
                                        "anchor":{

                                        },
                                        "breadcrumb":{
                                            "welcome":"welcome",
                                            "skills":"skills",
                                            "edu":"Education",
                                            "xp":"Experience",
                                            "pro":"Professionnal project",
                                            "stud":"Student project",
                                            "perso":"Personnal project",
                                            "strongteam":"Strong team spirit",
                                            "organised":"Organised and applied",
                                            "autonomous":"Autonomous and force proposal",
                                            "ability":"Ability to adapt",
                                            "security":"IT security"
                                        },
                                        "timeline": []
                                    };
                                });

    portfolio.config(function($breadcrumbProvider) {
$breadcrumbProvider.setOptions({
template: 'bootstrap2'
});
})

    portfolio.config(function($stateProvider, $urlRouterProvider)
    {
        Share = {"breadcrumb":{
                                            "welcome":"welcome",
                                            "skills":"skills",
                                            "edu":"Education",
                                            "xp":"Experience",
                                            "pro":"Professionnal project",
                                            "stud":"Student project",
                                            "perso":"Personnal project",
                                            "strongteam":"Strong team spirit",
                                            "organised":"Organised and applied",
                                            "autonomous":"Autonomous and force proposal",
                                            "ability":"Ability to adapt",
                                            "security":"IT security"
                                        }};
        $urlRouterProvider.otherwise('/');
        $stateProvider
            /*.state('Init', {
                        url: "/",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.welcome
                        },
                        templateUrl: 'templates/welcome.html',
                        controller: 'PortfolioCtrl'
                    })*/
            .state('Welcome', {
                        url: "/",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.welcome
                        },
                        templateUrl: 'templates/welcome.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('Edu', {
                        url: "/Edu",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.edu
                        },
                        templateUrl: 'templates/edu.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('Xp', {
                        url: "/Xp",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.xp
                        },
                        templateUrl: 'templates/xp.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('Skills', {
                        url: "/Skills",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.xp
                        },
                        templateUrl: 'templates/skills.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('Contact', {
                        url: "/Contact",
                        ncyBreadcrumbLabel: {
                            label: "Contact"
                        },
                        templateUrl: 'templates/contact.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('Pro', {
                        url: "/Pro",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.pro,
                            parent: Share.breadcrumb.xp
                        },
                        templateUrl: 'templates/projects/proproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('Stud', {
                        url: "/Stud",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.stud,
                            parent: Share.breadcrumb.xp
                        },
                        templateUrl: 'templates/projects/studproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('Perso', {
                        url: "/Perso",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.perso,
                            parent: Share.breadcrumb.xp
                        },
                        templateUrl: 'templates/projects/persoproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('TraxAirProject', {
                        url: "/TraxAirProject",
                        ncyBreadcrumbLabel: {
                            label: "TraxAir",
                            parent: Share.breadcrumb.pro
                        },
                        templateUrl: 'templates/projects/traxairproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('WemanityProject', {
                        url: "/WemanityProject",
                        ncyBreadcrumbLabel: {
                            label: "Wemanity",
                            parent: Share.breadcrumb.pro
                        },
                        templateUrl: 'templates/projects/wemanityproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('WemanityStudio', {
                        url: "/WemanityProject",
                        ncyBreadcrumbLabel: {
                            label: "Wemanity",
                            parent: Share.breadcrumb.pro
                        },
                        templateUrl: 'templates/projects/wemanityproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('WemanityBDF', {
                        url: "/WemanityProject",
                        ncyBreadcrumbLabel: {
                            label: "Wemanity",
                            parent: Share.breadcrumb.pro
                        },
                        templateUrl: 'templates/projects/wemanityproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('One2TeamProject', {
                        url: "/One2TeamProject",
                        ncyBreadcrumbLabel: {
                            label: "Wemanity",
                            parent: Share.breadcrumb.pro
                        },
                        templateUrl: 'templates/projects/one2teamproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('ZamirenProject', {
                        url: "/ZamirenProject",
                        ncyBreadcrumbLabel: {
                            label: "Wemanity",
                            parent: Share.breadcrumb.pro
                        },
                        templateUrl: 'templates/projects/zamirenproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('CaComProject', {
                        url: "/CaComProject",
                        ncyBreadcrumbLabel: {
                            label: "Wemanity",
                            parent: Share.breadcrumb.pro
                        },
                        templateUrl: 'templates/projects/zamirenproject.html',
                        controller: 'PortfolioCtrl'
                    })
            .state('CAMS', {
                        url: "/CAMS",
                        ncyBreadcrumbLabel: {
                            label: "Culture Automate Measure Share",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/cams.html',
                controller: 'PortfolioCtrl'
            })
            .state('DevOps', {
                        url: "/DevOps",
                        ncyBreadcrumbLabel: {
                            label: "DevOps",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/devops.html',
                controller: 'PortfolioCtrl'
            })
            .state('TimeToMarket', {
                        url: "/TimeToMarket",
                        ncyBreadcrumbLabel: {
                            label: "Time to market",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/timetomarket.html',
                controller: 'PortfolioCtrl'
            })
            .state('CD', {
                        url: "/CD",
                        ncyBreadcrumbLabel: {
                            label: "Continuous Delivery",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/cd.html',
                controller: 'PortfolioCtrl'
            })
            .state('CD2', {
                        url: "/CD2",
                        ncyBreadcrumbLabel: {
                            label: "Continuous Deployment",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/cd2.html',
                controller: 'PortfolioCtrl'
            })
            .state('SCM', {
                        url: "/SCM",
                        ncyBreadcrumbLabel: {
                            label: "SCM",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/scm.html',
                controller: 'PortfolioCtrl'
            })
            .state('Packaging', {
                        url: "/Packaging",
                        ncyBreadcrumbLabel: {
                            label: "Packaging",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/packaging.html',
                controller: 'PortfolioCtrl'
            })
            .state('Improvement', {
                        url: "/Improvement",
                        ncyBreadcrumbLabel: {
                            label: "/Improvement",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/improvement.html',
                controller: 'PortfolioCtrl'
            })
            .state('Scrum', {
                        url: "/Scrum",
                        ncyBreadcrumbLabel: {
                            label: "Scrum",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/scrum.html',
                controller: 'PortfolioCtrl'
            })
            .state('XProg', {
                        url: "/XProg",
                        ncyBreadcrumbLabel: {
                            label: "Extrem programming",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/xp.html',
                controller: 'PortfolioCtrl'
            })
            .state('Kanban', {
                        url: "/Kanban",
                        ncyBreadcrumbLabel: {
                            label: "Kanban",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/kanban.html',
                controller: 'PortfolioCtrl'
            })
            .state('Lean', {
                        url: "/Lean",
                        ncyBreadcrumbLabel: {
                            label: "Lean",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/lean.html',
                controller: 'PortfolioCtrl'
            })
            .state('LeanStartUp', {
                        url: "/LeanStartUp",
                        ncyBreadcrumbLabel: {
                            label: "LeanStartUp",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/leanstartup.html',
                controller: 'PortfolioCtrl'
            })
            .state('Waterfall', {
                        url: "/Waterfall",
                        ncyBreadcrumbLabel: {
                            label: "Waterfall",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/waterfall.html',
                controller: 'PortfolioCtrl'
            })
            .state('StrongTeamSpirit', {
                        url: "/StrongTeamSpirit",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.strongteam,
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/strongteamspirit.html',
                controller: 'PortfolioCtrl'
            })
            .state('OrganisedAndApplied', {
                        url: "/OrganisedAndApplied",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.organised,
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/organisedandapplied.html',
                controller: 'PortfolioCtrl'
            })
            .state('AutonomousAndForceProposal', {
                        url: "/AutonomousAndForceProposal",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.autonomous,
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/autonomousandforceproposal.html',
                controller: 'PortfolioCtrl'
            })
            .state('AbilityToAdapt', {
                        url: "/AbilityToAdapt",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.ability,
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/business/abilitytoadapt.html',
                controller: 'PortfolioCtrl'
            })
            .state('Linux', {
                        url: "/Linux",
                        ncyBreadcrumbLabel: {
                            label: "Linux",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/os-network/linux.html',
                controller: 'PortfolioCtrl'
            })
            .state('Windows', {
                        url: "/Windows",
                        ncyBreadcrumbLabel: {
                            label: "Windows",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/os-network/windows.html',
                controller: 'PortfolioCtrl'
            })
            .state('OSI', {
                        url: "/OSI",
                        ncyBreadcrumbLabel: {
                            label: "OSI",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/os-network/osi.html',
                controller: 'PortfolioCtrl'
            })
            .state('TCPIP', {
                        url: "/TCPIP",
                        ncyBreadcrumbLabel: {
                            label: "TCP IP",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/os-network/tcpip.html',
                controller: 'PortfolioCtrl'
            })
            .state('Netfilter', {
                        url: "/Netfilter",
                        ncyBreadcrumbLabel: {
                            label: "Netfilter",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/os-network/netfilter.html',
                controller: 'PortfolioCtrl'
            })
            .state('Vsphere', {
                        url: "/Vsphere",
                        ncyBreadcrumbLabel: {
                            label: "VSphere",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/os-network/vsphere.html',
                controller: 'PortfolioCtrl'
            })
            .state('ITSecurity', {
                        url: "/ITSecurity",
                        ncyBreadcrumbLabel: {
                            label: Share.breadcrumb.security,
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/os-network/itsecurity.html',
                controller: 'PortfolioCtrl'
            })
            .state('Python', {
                        url: "/Python",
                        ncyBreadcrumbLabel: {
                            label: "Python",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/python.html',
                controller: 'PortfolioCtrl'
            })
            .state('Puppet', {
                        url: "/Puppet",
                        ncyBreadcrumbLabel: {
                            label: "Puppet",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/puppet.html',
                controller: 'PortfolioCtrl'
            })
            .state('SaltStack', {
                        url: "/SaltStack",
                        ncyBreadcrumbLabel: {
                            label: "SaltStack",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/saltstack.html',
                controller: 'PortfolioCtrl'
            })
            .state('C', {
                        url: "/C",
                        ncyBreadcrumbLabel: {
                            label: "C",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/c.html',
                controller: 'PortfolioCtrl'
            })
            .state('Perl', {
                        url: "/Perl",
                        ncyBreadcrumbLabel: {
                            label: "Perl",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/perl.html',
                controller: 'PortfolioCtrl'
            })
            .state('JavaScript', {
                        url: "/JavaScript",
                        ncyBreadcrumbLabel: {
                            label: "JavaScript",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/js.html',
                controller: 'PortfolioCtrl'
            })
            .state('PHP', {
                        url: "/PHP",
                        ncyBreadcrumbLabel: {
                            label: "PHP",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/php.html',
                controller: 'PortfolioCtrl'
            })
            .state('SQL', {
                        url: "/SQL",
                        ncyBreadcrumbLabel: {
                            label: "SQL",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/sql.html',
                controller: 'PortfolioCtrl'
            })
            .state('HTMLCSS', {
                        url: "/HTMLCSS",
                        ncyBreadcrumbLabel: {
                            label: "HTML CSS",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/languages/htmlcss.html',
                controller: 'PortfolioCtrl'
            })
            .state('Fabric', {
                        url: "/Fabric",
                        ncyBreadcrumbLabel: {
                            label: "Fabric",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/framework/fabric.html',
                controller: 'PortfolioCtrl'
            })
            .state('Scapy', {
                        url: "/Scapy",
                        ncyBreadcrumbLabel: {
                            label: "Scapy",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/framework/scapy.html',
                controller: 'PortfolioCtrl'
            })
            .state('Django', {
                        url: "/Django",
                        ncyBreadcrumbLabel: {
                            label: "Django",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/framework/django.html',
                controller: 'PortfolioCtrl'
            })
            .state('AngularJS', {
                        url: "/Angularjs",
                        ncyBreadcrumbLabel: {
                            label: "Angularjs",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/framework/angularjs.html',
                controller: 'PortfolioCtrl'
            })
            .state('JQuery', {
                        url: "/JQuery",
                        ncyBreadcrumbLabel: {
                            label: "JQuery",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/framework/jquery.html',
                controller: 'PortfolioCtrl'
            })
            .state('D3', {
                        url: "/D3",
                        ncyBreadcrumbLabel: {
                            label: "D3",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/framework/d3.html',
                controller: 'PortfolioCtrl'
            })
            .state('RaphaelJS', {
                        url: "/RaphaelJS",
                        ncyBreadcrumbLabel: {
                            label: "RaphaelJS",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/framework/raphaeljs.html',
                controller: 'PortfolioCtrl'
            })
            .state('Git', {
                        url: "/Git",
                        ncyBreadcrumbLabel: {
                            label: "Git",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/scm/git.html',
                controller: 'PortfolioCtrl'
            })
             .state('GitIHM', {
                        url: "/GitIHM",
                        ncyBreadcrumbLabel: {
                            label: "GitIHM",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/scm/gitihm.html',
                controller: 'PortfolioCtrl'
            })
            .state('SVN', {
                        url: "/SVN",
                        ncyBreadcrumbLabel: {
                            label: "SVN",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/scm/svn.html',
                controller: 'PortfolioCtrl'
            })
            .state('LinuxContainerDocker', {
                        url: "/LinuxContainerDocker",
                        ncyBreadcrumbLabel: {
                            label: "Docker",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/devops/linux_container_docker.html',
                controller: 'PortfolioCtrl'
            })
            .state('Jenkins', {
                        url: "/Jenkins",
                        ncyBreadcrumbLabel: {
                            label: "Jenkins",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/jenkins.html',
                controller: 'PortfolioCtrl'
            })
            .state('Codeship', {
                        url: "/Codeship",
                        ncyBreadcrumbLabel: {
                            label: "Codeship",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/technical/devops/codeship.html',
                controller: 'PortfolioCtrl'
            })
            .state('DeployIT', {
                        url: "/DeployIT",
                        ncyBreadcrumbLabel: {
                            label: "Deploy It",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/devops/deployit.html',
                controller: 'PortfolioCtrl'
            })
            .state('Ant', {
                        url: "/Ant",
                        ncyBreadcrumbLabel: {
                            label: "Ant",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/build/ant.html',
                controller: 'PortfolioCtrl'
            })
            .state('Maven', {
                        url: "/Maven",
                        ncyBreadcrumbLabel: {
                            label: "Maven",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/build/maven.html',
                controller: 'PortfolioCtrl'
            })
            .state('Make', {
                        url: "/Make",
                        ncyBreadcrumbLabel: {
                            label: "Make",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/build/make.html',
                controller: 'PortfolioCtrl'
            })
            .state('Nmap', {
                        url: "/Nmap",
                        ncyBreadcrumbLabel: {
                            label: "Nmap",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/it-security/nmap.html',
                controller: 'PortfolioCtrl'
            })
            .state('Nessus', {
                        url: "/Nessus",
                        ncyBreadcrumbLabel: {
                            label: "Nessus",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/it-security/nessus.html',
                controller: 'PortfolioCtrl'
            })
            .state('Wireshark', {
                        url: "/Wireshark",
                        ncyBreadcrumbLabel: {
                            label: "Wireshark",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/it-security/wireshark.html',
                controller: 'PortfolioCtrl'
            })
            .state('Tshark', {
                        url: "/Tshark",
                        ncyBreadcrumbLabel: {
                            label: "Tshark",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/it-security/tshark.html',
                controller: 'PortfolioCtrl'
            })
            .state('IPTraf', {
                        url: "/IPTraf",
                        ncyBreadcrumbLabel: {
                            label: "IPTraf",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/it-security/iptraf.html',
                controller: 'PortfolioCtrl'
            })
            .state('Netcat', {
                        url: "/Netcat",
                        ncyBreadcrumbLabel: {
                            label: "Netcat",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/it-security/netcat.html',
                controller: 'PortfolioCtrl'
            })
            .state('ZenOSS', {
                        url: "/ZenOSS",
                        ncyBreadcrumbLabel: {
                            label: "ZenOSS",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/supervision/zenoss.html',
                controller: 'PortfolioCtrl'
            })
            .state('Redmine', {
                        url: "/Redmine",
                        ncyBreadcrumbLabel: {
                            label: "Redmine",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/project-management/redmine.html',
                controller: 'PortfolioCtrl'
            })
            .state('Trello', {
                        url: "/Trello",
                        ncyBreadcrumbLabel: {
                            label: "Trello",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/project-management/trello.html',
                controller: 'PortfolioCtrl'
            })
            .state('Gantter', {
                        url: "/Gantter",
                        ncyBreadcrumbLabel: {
                            label: "Gantter",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/project-management/gantter.html',
                controller: 'PortfolioCtrl'
            })
            .state('Jira', {
                        url: "/Jira",
                        ncyBreadcrumbLabel: {
                            label: "Jira",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/project-management/jira.html',
                controller: 'PortfolioCtrl'
            })
            .state('MSProject', {
                        url: "/",
                        ncyBreadcrumbLabel: {
                            label: "MSProject",
                            parent: Share.breadcrumb.skills
                        },
                templateUrl: 'templates/skills/tools/project-management/msproject.html',
                controller: 'PortfolioCtrl'
            })
            .state('ItiProject', {
                        url: "/ItiProject",
                        ncyBreadcrumbLabel: {
                            label: "IN'Tech INFO",
                            parent: Share.breadcrumb.stud
                        },
                templateUrl: 'templates/projects/itiproject.html',
                controller: 'PortfolioCtrl'
            })
            .state('Netpolling', {
                        url: "/Netpolling",
                        ncyBreadcrumbLabel: {
                            label: "IN'Tech INFO",
                            parent: Share.breadcrumb.stud
                        },
                templateUrl: 'templates/projects/itiproject.html',
                controller: 'PortfolioCtrl'
            })
            .state('EpitechProject', {
                        url: "/EpitechProject",
                        ncyBreadcrumbLabel: {
                            label: "Epitech",
                            parent: Share.breadcrumb.stud
                        },
                templateUrl: 'templates/projects/epitechproject.html',
                controller: 'PortfolioCtrl'
            })
            .state('IAC', {
                        url: "/InfrastructureAsCode",
                        ncyBreadcrumbLabel: {
                            label: "Infrastructure as Code",
                            parent: Share.breadcrumb.stud
                        },
                templateUrl: 'templates/skills/technical/devops/iac.html',
                controller: 'PortfolioCtrl'
            })
            .state('Container', {
                        url: "/container",
                        ncyBreadcrumbLabel: {
                            label: "Infrastructure as Code",
                            parent: Share.breadcrumb.stud
                        },
                templateUrl: 'templates/skills/skills/technical/devops/container.html',
                controller: 'PortfolioCtrl'
            })
            .state('CI', {
                        url: "/CI",
                        ncyBreadcrumbLabel: {
                            label: "Continuous integration",
                            parent: Share.breadcrumb.stud
                        },
                templateUrl: 'templates/skills/technical/devops/ci.html',
                controller: 'PortfolioCtrl'
            });
  });

    portfolio.directive("scroll", function ($window, Share)
                                    {
                                        return function(scope, element, attrs)
                                                {
                                                    angular.element($window).bind("scroll", function()
                                                                                            {
                                                                                                if (Share.timeline.length > 0)
                                                                                                 {
                                                                                                     if (Share.timeline[0].getBoundingClientRect().top <= (this.pageYOffset + (screen.height * 0.8)))
                                                                                                     {
                                                                                                         Share.timeline[0].className = Share.timeline[0].className.search("timeline-inverted") >= 0 ? "timeline-inverted timeline-elem timeline-anim1" : "timeline-elem timeline-anim0";
                                                                                                         Share.timeline.shift();
                                                                                                     }
                                                                                                 }
                                                                                            });
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

    portfolio.controller("PortfolioCtrl", function($scope, Share, $location, $anchorScroll)
                                        {
                                            $scope.lang = Share.lang;
                                            $scope.$on('UpdateLang', function()
                                                                        {
                                                                            $scope.lang = Share.lang;
                                                                        }, true);
                                            Share.timeline = function()
                                                            {
                                                                var r = document.getElementsByClassName("timeline-elem");
                                                                var l = Array();
                                                                for(var i = 0; i < r.length; i++)
                                                                {
                                                                    l.push(r[i])
                                                                }
                                                                return l
                                                            }();

                                            console.log(($location.path()).substring(1));
                                            var uri_path = String(($location.path()).substring(1));
                                            if(uri_path in Share.anchor)
                                            {

                                            }

                                            //if (uri_path != '' || uri_path != 'Edu' || uri_path != 'Skills' || uri_path != 'Contact' || uri_path != 'Xp')
                                            if (uri_path != '')
                                            {
                                                $location.hash('top-menu');
                                                console.log(typeof uri_path);
                                            }
                                            else
                                            {
                                                $location.hash("HeaderWelcome")
                                            }
                                            $anchorScroll();
                                        });
})();