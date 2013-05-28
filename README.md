# colorAlpha
#### A jQuery plugin to set the alpha channel of a CSS color or background-color.

Sometimes you need to set the alpha channel of a color without setting the color itself. And no, opacity is not the same thing.

### Usage

```js
$('#someElement').colorAlpha({
	property : 'background-color', // accepts any css property that accepts a color (I think)
	percent : 50 // where 50 = 50%
});
```