(function() {
	angular.module('controleFinanceiro').controller('DashboardCtrl', [
		'$http',
		DashboardController
	])

	function DashboardController($http) {
		const vm = this
		vm.getSumary = function() {
			const url = 'http://localhost:3003/api/billingSummary'
			$http.get(url).then(function(response) {
				const {credit = 0, debt = 0} = response.data
				vm.credit = credit.toString().replace(/,/g,' ').replace('.', ',').replace(/\s/g,'.')
				vm.debt = debt
				vm.total = credit - debt
			})
		}

		vm.getSumary()

	}
})()
