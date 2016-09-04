'use strict';

angular.module('ames-admin')
.directive('membersTable', function() {
  return {
    restrict: 'E',
    scope: {
      status: '=',
      members: '=',
      activate: '&activate',
      deactivate: '&deactivate'
    },
    template: ''
      + '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped hover" datatable="ng" dt-options="dtOptions">'
      + '<thead>'
      +   '<tr>'
      +     '<th>Nombre</th>'
      +     '<th>Email</th>'
      +     '<th>Teléfono</th>'
      +     '<th>Sección</th>'
      +     '<th>Cuota Pago</th>'
      +     '<th></th>'
      +   '</tr>'
      + '</thead>'
      + '<tbody>'
      +   '<tr ng-repeat="member in members" ng-class="{ \'danger\': \'EX_MEMBER\' == member.status }">'
      +     '<td>{{member.name}}</td>'
      +     '<td>{{member.email}}</td>'
      +     '<td>{{member.phone}}</td>'
      +     '<td>{{member.ames.sectionDescription}}</td>'
      +     '<td>{{member.quoteYear}}</td>'
      +     '<td>'
      +       '<a ui-sref="members.detail({ id: member._id })">'
      +         '<i class="glyphicon glyphicon-eye-open"></i> Detalle'
      +       '</a>'
      +       '&nbsp;&nbsp;'
      +        '<a ng-show="{{\'active\' == status}}" href ng-click="deactivate({ index: $index, member: member })">'
      +          '<i class="glyphicon glyphicon-thumbs-down"></i> Dar de baja'
      +        '</a>'
      +       '<a ng-show="{{\'inactive\' == status}}" href ng-click="activate({ index: $index, member: member })">'
      +         '<i class="glyphicon glyphicon-thumbs-up"></i> Hacer Socia'
      +       '</a>'
      +     '</td>'
      +    '</tr>'
      + '</tbody>'
      + '</table>'

  };
});