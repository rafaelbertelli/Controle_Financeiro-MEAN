(function() {
	angular.module('primeiraApp').component('inputField', {
		bindings: {
			grid: '@',
			type: '@',
			id: '@',
			label: '@',
			placeholder: '@'
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
					<input type="{{ $ctrl.type }}" id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" />
				</div>
			</div>
		`
	})
})()

// <input-field grid="" type="" id="" label="" placeholder=""></input-field>