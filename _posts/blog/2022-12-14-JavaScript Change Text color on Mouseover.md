---
title: "Change Text color on Mouseover using JavaScript"
date: 2022-12-14 23:01:00 +0530
categories: [JavaScript, DOM, Web technology]
pin : false
tags: [JavaScript, DOM, Mouseover ]
img_path: /assets/img/

image:
  path: js.jpeg
  width: 300   # in pixels
  height: 450   # in pixels
---

# Change Text color on Mouseover using JavaScript

To change an element's text color on mouseover:

<ol>
    <li>Add a mouseover event to the element, changing its text color when the user hovers over it.</li>
    <li>Add a mouseout event to the element, changing its text color back to the default when the user moves their cursor out.</li>
</ol>

Here is the HTML for the examples in this article.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="box">Apple, Pear, Banana</div>

    <script src="index.js"></script>
  </body>
</html>
```
{: file='index.html'}


And here is the related JavaScript code.

```js
const box = document.getElementById('box');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});
```
{: file='index.js'}


![GIF](/change-text-color-on-mouseover.gif){: width="972" height="589" .w-75 .normal}


We selected the element using the document.getElementById() method.

We then added a mouseover event listener to the element.

The mouseover event is fired every time a user's cursor is moved onto the element or one of its child elements.

> If the user hovers over the element, the handleMouseOver function is invoked, where we use the style object to change the element's text color to red.
{: .prompt-tip }

We also added a [mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) event listener to the same element.

You could use this approach to change any element's text color on hover, it doesn't have to be the element on which the event was dispatched.

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="box" style="margin-bottom: 100px; margin-top: 100px">
      Hover over me
    </div>

    <div id="text">Example text content</div>

    <script src="index.js"></script>
  </body>
</html>
```
{: file='index.html'}

```js
const box = document.getElementById('box');

const textDiv = document.getElementById('text');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  textDiv.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  textDiv.style.color = 'black';
});
``` 
{: file='index.js'}

![GIF](/change-text-color-when-another-element-hovered.gif){: width="972" height="589" .w-75 .normal}

If the user hovers over the first div element, the text color of the second div gets changed to red.

If they move their cursor out, the color is changed back to black.
