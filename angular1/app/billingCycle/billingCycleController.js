(function() {
	angular.module('primeiraApp').controller('BillingCycleController', [
		'$http',
		'msgs',
		'tabs',
		BillingCycleController
	])

	function BillingCycleController($http, msgs, tabs) {
		const vm = this;
		const url = 'http://localhost:3003/api/billingCycles';

		vm.refresh = function() {
			$http.get(url).then(function(response) {
				vm.billingCycle = { credits: [{}], debts: [{}] };
				vm.billingCycles = response.data;
				console.log('metodo refresh: ', response.data);
				tabs.show(vm, { tabList: true, tabCreate: true });
			})
		}

		vm.create = function() {

			$http.post(url, vm.billingCycle).then(function(response) {
				vm.refresh();
				msgs.addSuccess('Operação realizada com sucesso!');

			}).catch(function(response) {
				msgs.addError(response.data.errors);

			})

		}

		vm.showTabUpdate = function(billingCycle) {

			vm.billingCycle = billingCycle;
			tabs.show(vm, { tabUpdate: true });
			
		};

		vm.showTabDelete = function(billingCycle) {
			
			vm.billingCycle = billingCycle;
			tabs.show(vm, { tabDelete: true });
			//aqui, colocar para ficar com os campos disabled
			
		};

		vm.delete = function() {
			const deleteUrl = `${url}/${vm.billingCycle._id}`;
			$http.delete(deleteUrl, vm.billingCycle)
				.then( response => {
					vm.refresh();
					msgs.addSuccess("Operação realizada com sucesso!");
				})
				.catch( response => {
					msgs.addError(response.data.errors);
				});

			
		};

		vm.refresh();
	}

})()