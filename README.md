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

## Can I get a taste of it?

Go to [https://ember-power-select-sortable.pagefrontapp.com](https://ember-power-select-sortable.pagefrontapp.com) to see it in action.
This addon was created as an example of how to build composable component in a live coding talk, but I've never used it myself.
If you find any bug or edge case not covered, issues or PRs are welcome :)

## Next steps

* Add tests
* Add animated gif to the readme
