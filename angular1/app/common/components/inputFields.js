(function() {
	angular.module('controleFinanceiro').component('inputField', {
		bindings: {
			grid: '@',
			type: '@',
			id: '@',
			label: '@',
			placeholder: '@',
			model: '=',
		},
		controller: [
			'gridSystem',
			function(gridSystem) {
				this.$onInit = function() {
					this.gridClass = gridSystem.toCssClass(this.grid)
				}
			}
		],
		template: `
			<div class="{{ $ctrl.gridClass }}">
				<div class="form-group">
				<label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
					<input type="{{ $ctrl.type }}" id="{{ $ctrl.id }}" class="form-control" 
						placeholder="{{ $ctrl.placeholder }}" ng-model="$ctrl.model"/>
				</div>
			</div>
		`
	})
})()

// <input-field grid="" type="" id="" label="" placeholder="" model="bcCtrl.billingCycle.name"></input-field>