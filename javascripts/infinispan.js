!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.ghembedder=e()}}(function(){return function e(n,t,a){function r(o,l){if(!t[o]){if(!n[o]){var d="function"==typeof require&&require;if(!l&&d)return d(o,!0);if(i)return i(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var p=t[o]={exports:{}};n[o][0].call(p.exports,function(e){var t=n[o][1][e];return r(t?t:e)},p,p.exports,e,n,t,a)}return t[o].exports}for(var i="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(e,n,t){var a=n.exports={_apiBase:"https://api.github.com",_library:{},_rLeadSlash:/^\/+|\/+$/g,_rWhiteSpace:/\s/g};a._decodeContent=function(e){var n=window.atob(e.replace(a._rWhiteSpace,""));return n},a._keygen=function(){return"ghembedder_key_"+~~(1e5*Math.random())},a._jsonpCallback=function(e){return window[e]=function(n){var r,i,o=a._library[e],l=!1,d=o.lineBegin>-1&&o.lineEnd>-1,u=new Array(o.tabSize+1).join(" ");n.data&&n.data.content&&(o.data=n.data,r=a._decodeContent(n.data.content),r=r.replace(/[&<>"'`]/g,function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return function(n){return e[n]}}()),i=r.split("\n"),d&&(i=i.splice(o.lineBegin-1,o.lineEnd-o.lineBegin+1)),o.linenos&&(l=d?o.lineBegin:o.linenos),i=i.map(function(e,n){return'<a class="nocode" id="'+o.fileName+"-L"+(n+o.lineBegin)+'">'+(e?"":" ")+"</a>"+e.replace(/\t/gi,u)}),r=i.join("\n"),t.prettyPrintOne&&(r=t.prettyPrintOne(r,o.lang,l)),o.el.className+=" ghe",o.el.innerHTML='<pre class="prettyprint"><code>'+r+"</code></pre>"+(o.annotate?a._annotation(e):""),delete window[e],o.onload&&o.onload(null,o))}},a._annotation=function(e){var n=a._library[e],t=n.lineBegin>-1&&n.lineEnd>-1;return'<div class="ghe-annotation">'+n.fileName+(t?", lines "+n.lineBegin+"-"+n.lineEnd:"")+(n.data?'. <a href="'+n.data._links.html+'" target="_blank">Source</a>':"")+"</div>"},a._jsonp=function(e,n){var t=document.createElement("script");t.type="text/javascript",t.src=e+(e.indexOf("?")>-1?"&":"?")+"callback="+n,document.getElementsByTagName("head")[0].appendChild(t)},a._parseNode=function(e){var n,t,a=e.getAttribute("data-ghlines"),r=e.getAttribute("data-ghpath");return a&&a.indexOf("-")>-1?(a=a.split("-"),n=parseInt(a[0],10),t=parseInt(a[1],10)):n=t=a?parseInt(a,10):-1,{path:r,userrepo:e.getAttribute("data-ghuserrepo"),ref:e.getAttribute("data-ghref")||"master",lineBegin:n,lineEnd:t,el:e,fileName:r.split("/").pop(),lang:e.getAttribute("data-ghlang"),linenos:e.getAttribute("data-ghlinenos"),annotate:e.getAttribute("data-ghannotate"),tabSize:parseInt(e.getAttribute("data-ghtabsize"),10)||4}},a.load=function(e,n){var t=a._keygen();e.nodeName&&(e=a._parseNode(e)),n&&(e.onload=n),a._jsonpCallback(t),a._library[t]=e,a._jsonp(a._apiBase+"/repos/"+e.userrepo.replace(a._rLeadSlash,"")+"/contents/"+e.path.replace(a._rLeadSlash,"")+"?ref="+e.ref,t)},a.autoload=function(){var e;e=window.jQuery?window.jQuery("[data-ghpath]"):document.querySelectorAll("[data-ghpath]");for(var n=0;n<e.length;n++)a.load(e[n])}},{}]},{},[1])(1)});