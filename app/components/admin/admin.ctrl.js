angular.module('ames-admin')
.controller('AdminCtrl', ['$scope', 'members', 'president', 'secretary', 'treasurer', 'deputies', 'chairs', 'communication', 'support', 'availableMembers', 'membersOfBasilea', 'membersOfBerna', 'membersOfGinebra', 'membersOfLausana', 'membersOfZurich',
	function($scope, members, president, secretary, treasurer, deputies, chairs, communication, support, availableMembers, membersOfBasilea, membersOfBerna, membersOfGinebra, membersOfLausana, membersOfZurich) {

	var previousPresident = president.data[0] || {};
	$scope.president = previousPresident;

	var previousSecretary = secretary.data[0] || {};
	$scope.secretary = previousSecretary;

	var previousTreasurer = treasurer.data[0] || {};
	$scope.treasurer = previousTreasurer;

	var previousBasileaDeputy = {};
	var previousBernaDeputy = {};
	var previousGinebraDeputy = {};
	var previousLausanaDeputy = {};
	var previousZurichDeputy = {};
  angular.forEach(deputies.data, function(value, key) {
    if ('BS' === value.ames.section) {
    	previousBasileaDeputy = value;
    	$scope.basileaDeputy = previousBasileaDeputy;
    } else if ('BE' === value.ames.section) {
    	previousBernaDeputy = value;
    	$scope.bernaDeputy = previousBernaDeputy;
    } else if ('GE' === value.ames.section) {
    	previousGinebraDeputy = value;
    	$scope.ginebraDeputy = previousGinebraDeputy;
    } else if ('LS' === value.ames.section) {
    	previousLausanaDeputy = value;
    	$scope.lausanaDeputy = previousLausanaDeputy;
    } else if ('ZH' === value.ames.section) {
    	previousZurichDeputy = value;
    	$scope.zurichDeputy = previousZurichDeputy;
    }
  });

	var previousChair1 = {};
	var previousChair2 = {};
  angular.forEach(chairs.data, function(value, key) {
  	if (0 === key) {
    	previousChair1 = value;
    	$scope.chair1 = previousChair1;
  	} else if (1 === key) {
    	previousChair2 = value;
    	$scope.chair2 = previousChair2;
  	}
  });

	var previousCommunication = communication.data[0] || {};
	$scope.communication = previousCommunication;

	var previousSupport = support.data[0] || {};
	$scope.support = previousSupport;

	$scope.availableMembers = availableMembers.data;
  $scope.membersOfBasilea = membersOfBasilea.data;
  $scope.membersOfBerna = membersOfBerna.data;
  $scope.membersOfGinebra = membersOfGinebra.data;
  $scope.membersOfLausana = membersOfLausana.data;
  $scope.membersOfZurich = membersOfZurich.data;

  $scope.save = function() {
  	updatePresident();
  	updateSecretary();
  	updateTreasurer();
  	updateDeputies();
  	updateCommunication();
  	updateSupport();
  	updateChairs();
  };

  function updatePresident() {
  	update(previousPresident, $scope.president, 'PRESIDENT');
  }


  function updateSecretary() {
  	update(previousSecretary, $scope.secretary, 'SECRETARY');
  }

  function updateTreasurer() {
  	update(previousTreasurer, $scope.treasurer, 'TREASURER');
  }

  function updateCommunication() {
  	update(previousCommunication, $scope.communication, 'COMMUNICATION');
  }

  function updateSupport() {
  	update(previousSupport, $scope.support, 'SUPPORT');
  }

  function updateChairs() {
  	update(previousChair1, $scope.chair1, 'CHAIR');
  	update(previousChair2, $scope.chair2, 'CHAIR');
  }

  function updateDeputies() {
 		update(previousBasileaDeputy, $scope.basileaDeputy, 'DEPUTY');
 		update(previousBernaDeputy, $scope.bernaDeputy, 'DEPUTY');
 		update(previousGinebraDeputy, $scope.ginebraDeputy, 'DEPUTY');
 		update(previousLausanaDeputy, $scope.lausanaDeputy, 'DEPUTY');
 		update(previousZurichDeputy, $scope.zurichDeputy, 'DEPUTY');
  }

  function update(previous, current, position) {
  	var previousId = previous._id;
  	//var current = $scope.secretary;
  	if (previousId && current) {
  		if (previousId !== current._id) {
				previous.position = '';
		  	members.update(previous);

				current.position = position;
				members.update(current);
  		}
  	} else if (current) {
			current.position = position;
			members.update(current);
  	} else if (previousId) {
			previous.position = '';
	  	members.update(previous);
  	}
  }

}]);
