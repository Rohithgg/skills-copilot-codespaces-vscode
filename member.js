function skillsMemeber(){
    return {
        restrict: 'E',
        templateUrl: 'app/views/skills.html',
        controller: 'skillsController',
        controllerAs: 'skillsCtrl',
        bindToController: true,
        scope: {
            skills: '='
        }
    };
}