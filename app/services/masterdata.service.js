'use strict';

angular.module('ames-admin')
.service('masterdata', function($http) {

  var masterdata = {};

  masterdata['sections'] = [
    { code: '', description: '' },
    { code: 'BS', description: 'Basilea' },
    { code: 'BE', description: 'Berna' },
    { code: 'GE', description: 'Ginebra' },
    { code: 'LS', description: 'Lausana' },
    { code: 'ZH', description: 'Zurich' }];

  masterdata['memberStatus'] = [
    { code: 'ALL', description: '' },
    { code: 'ACT', description: 'En activo' },
    { code: 'REM', description: 'Dadas de baja' }];

  masterdata['quotePending'] = [
    { code: 'ALL', description: '' },
    { code: 'CRT', description: 'Al corriente de pago' },
    { code: 'PDT', description: 'Pendiente de pago' }];

  masterdata['cantons']  = [
    { code: 'ZH', description: 'Zürich' },
    { code: 'BE', description: 'Bern' },
    { code: 'LU', description: 'Luzern' },
    { code: 'UR', description: 'Uri' },
    { code: 'SZ', description: 'Schwyz' },
    { code: 'OW', description: 'Obwalden' },
    { code: 'NW', description: 'Nidwalden' },
    { code: 'GL', description: 'Glarus' },
    { code: 'ZG', description: 'Zug' },
    { code: 'FR', description: 'Freiburg' },
    { code: 'SO', description: 'Solothurn' },
    { code: 'BS', description: 'Basel-Stadt' },
    { code: 'BL', description: 'Basel-Landschaft' },
    { code: 'SH', description: 'Schaffhausen' },
    { code: 'AR', description: 'Appenzell Ausserrhoden' },
    { code: 'AI', description: 'Appenzell Innerrhoden' },
    { code: 'SG', description: 'St. Gallen' },
    { code: 'GR', description: 'Graubünden' },
    { code: 'AG', description: 'Aargau' },
    { code: 'TG', description: 'Thurgau' },
    { code: 'TI', description: 'Tessin' },
    { code: 'VD', description: 'Waadt' },
    { code: 'VS', description: 'Wallis' },
    { code: 'NE', description: 'Neuenburg' },
    { code: 'GE', description: 'Genf' },
    { code: 'JU', description: 'Jura' }];

  masterdata['memberHows']  = [
    { code: 'SO', description: 'Por una socia' },
    { code: 'AC', description: 'Por una actividad/taller' },
    { code: 'IN', description: 'Por Internet' },
    { code: 'OT', description: 'Otro' }];

  masterdata['maritalStatus']  = [
    { code: 'SO', description: 'Soltera' },
    { code: 'CA', description: 'Casada' },
    { code: 'SE', description: 'Separada' },
    { code: 'DI', description: 'Divorciada' },
    { code: 'VI', description: 'Viuda' },
    { code: 'PH', description: 'Pareja de hecho' }
  ];

  masterdata['nationalities']  = [
    { code: 'ES', description: 'Española' },
    { code: 'CH', description: 'Suiza' },
    { code: 'BO', description: 'Ambas' }
  ];

  masterdata['educationLevels']  = [
    { code: 'BS', description: 'Basicos' },
    { code: 'BC', description: 'Bachiller' },
    { code: 'FP', description: 'Formacion Profesional' },
    { code: 'UN', description: 'Universitarios' }
  ];

  masterdata['eventTypes'] = [
    { code: 'A', description: 'Actividad' },
    { code: 'T', description: 'Taller' }];

  this.getData = function(data) {
    return masterdata[data];
  };

  this.getDescription = function(value, data) {
    var object;
    var dataArray = masterdata[data];
    for (object of dataArray) {
      if (value === object['code']) {
        return object['description'];
      }
    }
    return '';
  };

});
