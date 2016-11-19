function StaffController() {
  var vm = this;

  vm.name = 'Bill Gates';
  vm.email = 'william@microsoft.com';
  vm.phone = '5558675309';


}

angular
    .module('app')
    .controller('StaffController', StaffController);