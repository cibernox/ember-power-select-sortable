'use strict';

module.exports = {
  name: 'ember-power-select-sortable',

  included: function() {
    this._super.included.apply(this, arguments);
  },

  contentFor(type, config) {
    let emberPowerSelect = this.addons.find(function(addon) {
      return addon.name === 'ember-power-select';
    });
    return emberPowerSelect.contentFor(type, config);
  }
};
