const PasswordDirective = () => {
  return {
    template: require('./passwordTemplate.html'),
    controller: 'PasswordCtrl',
    controllerAs: 'password'
  }
}

export { PasswordDirective }
