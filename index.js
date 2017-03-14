/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-power-select-sortable',
  included: function(app) {
    this._super.included.apply(this, arguments);
  },

  contentFor(type, config) {
    var emberPowerSelect = this.addons.find(function(addon) {
      return addon.name === 'ember-power-select';
    })
    return emberPowerSelect.contentFor(type, config);
  }
};
