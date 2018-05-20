'use strict';
/**
 * @name  translate
 *
 * @description Angular $translateProvider service
 */
function translate(translateProvider){

  // Seperated translation files for all supported language.
  translateProvider
    .translations('en', require('./translations/english_en.json'))
    .translations('zh', require('./translations/chinese_zh.json'));

  translateProvider.preferredLanguage('zh');
}

module.exports = {
  translate: translate,
};