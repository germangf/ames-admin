'use strict';

angular.module('ames-admin')
.constant('LOCALES', {
  'locales': {
    'es_ES': 'Español',
    'en_US': 'English'
  },
  'preferredLocale': 'es_ES'
})
.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useMissingTranslationHandlerLog();
  $translateProvider.useStaticFilesLoader({
    prefix: 'resources/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('es_ES');
  $translateProvider.useLocalStorage();
  $translateProvider.useSanitizeValueStrategy('sanitize');
}])
.config(['tmhDynamicLocaleProvider', function (tmhDynamicLocaleProvider) {
  tmhDynamicLocaleProvider.localeLocationPattern('/angular-i18n/angular-locale_{{locale}}.js');
}]);
