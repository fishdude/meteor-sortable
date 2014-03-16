meteor-sortable
===============

**Meteor package for Sortable.js -  a lightwieght javascript library for reordering and sorting using the native HTML5 drag and drop API.**

* Live demo: http://rubaxa.github.io/Sortable/
* Source: https://github.com/RubaXa/Sortable


<h4>example usage:</h4>

<h6>js</h6>
```
Template.foo.rendered = function(){
  new Sortable(items);
};
```
<h6>html</h6>
```
<template name="foo">
	<ul id="items">
	   <li>item 1</li>
	   <li>item 2</li>
	   <li>item 3</li>
	</ul>
</template>
```
