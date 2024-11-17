function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'app/views/skills.html',
        controller: 'skillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            skills: '='
        }
    };
}