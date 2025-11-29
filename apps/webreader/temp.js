var returnTitle = null
var divs = document.getElementsByClassName('kfml')
if (divs && divs[0]) {
var div = divs[0]
var divs = div.getElementsByClassName('infot')
if (divs && divs[0]) {
var div = divs[0]
var h1s = div.getElementsByTagName('h1')
if (h1s && h1s[0]) {returnTitle = h1s[0].innerText;}
}}
returnTitle