import EmberPowerSelectMultipleTrigger from 'ember-power-select/components/power-select-multiple/trigger';
import layout from '../../templates/components/power-select-sortable/trigger';

export default EmberPowerSelectMultipleTrigger.extend({
  layout,
  actions: {
    reorderItems(items) {
      this.get('select').actions.select(items);
    }
  }
});
