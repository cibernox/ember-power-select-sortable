import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('power-select-sortable/trigger', 'Integration | Component | power select sortable/trigger', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{power-select-sortable/trigger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#power-select-sortable/trigger}}
      template block text
    {{/power-select-sortable/trigger}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
