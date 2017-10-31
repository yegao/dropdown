# dropdown
step 1:write code like this:
```html
<div class="dropdown" id="xxx">
    <p class="dropdown-now-box">
        <span class="dropdown-now"></span>
        <i></i>
    </p>
    <ul class="dropdown-menu"></ul>
</div>
```
step 2:You should load `dropdown.css`  `jquery.js` and `dropdown.js`
```html
<link rel="stylesheet" href="dropdown.css" />
<script type="text/javascript" src="jquery.1.8.3.min.js"></script>
<script type="text/javascript" src="dropdown.js"></script>
```
----
```javascript
$('#xxx').dropdown({
       list:,                     //array      necessary
       id:,                       //string     necessary ①
       text:,                     //string     necessary
       edit:{xml:,callback:}      //object     not necessary
       callback:                  //function   not necessary
       auto:                      //function   not necessary
})
```
I have writ a example,you can read it.I think it is strong and easy to use .
