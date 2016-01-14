# Ember-power-select-sortable

This is a [Ember Power Select](http://www.ember-power-select.com) addon that leverages [ember-sortable](http://github.com/jgwhite/ember-sortable)
to provide a multiple select whose selections can be sorted using drag and drop.

## Usage

This addon contains one single component `{{#power-select-sortable}}` that takes the same configuration options
then the regular `{{#power-select-multiple}}`.

```hbs
{{#power-select-sortable options=options selected=selected onchange=(action (mut selected)) as |opt|}}
  {{opt}}
{{/power-select-sortable}}
```

For more information about usage, check ember-power-select's [docs](http://www.ember-power-select.com/docs)

## Next steps

* Add tests
* Add animated gif to the readme