angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateurl: 'dashboard/dashboard.html'
        })
        .state('billingCycle', {
            url: '/billingCycle',
            template: 'billingCycle/tabs.html'
        })
        
        $urlRouterProvider.otherwise('/dashboard')
    }
])