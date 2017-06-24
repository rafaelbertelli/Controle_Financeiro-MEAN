angular.module('primeiraApp').component('contentHeader', {
	bindings: {
		name: '@',
		small: '@',
	},
	template: `
		<section class="content-header">
			<h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>
		</section>
	`
})




	// protocolo  240620174232152
	// os  8a34b45edb151
	// 10315