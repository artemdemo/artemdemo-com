(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(72).concat([function(t,e,r){"use strict";var n=r(345);t.exports=function(t,e){var r=t.split(":"),i=r[0],o=r[1],a=n(e);o||(o=i,i=null);return s.displayName=t,s;function s(t){var e=function(t,e){var r,n;r="boolean"==typeof e?[e]:null==e?[1]:"object"!=typeof e||"number"!=typeof e[0]&&"boolean"!=typeof e[0]&&"string"!=typeof e[0]?[1,e]:e.concat();"boolean"==typeof(n=r[0])?n=n?1:0:"string"==typeof n&&("off"===n?n=0:"on"===n||"warn"===n?n=1:"error"===n?n=2:r=[n=1,r]);if(n<0||n>2)throw new Error("Invalid severity `"+n+"` for `"+t+"`, expected 0, 1, or 2");return r[0]=n,r}(o,t),r=e[0],n=e[1],s=2===r;return r?function(t,e,r){var c=e.messages.length;a(t,e,n,function(t){var n,a=e.messages;if(t&&-1===a.indexOf(t))try{e.fail(t)}catch(t){}for(;c<a.length;)(n=a[c]).ruleId=o,n.source=i,n.fatal=s,c++;r()})}:void 0}}},function(t,e,r){"use strict";t.exports=s;var n=r(263),i=n.CONTINUE,o=n.SKIP,a=n.EXIT;function s(t,e,r,i){"function"==typeof e&&"function"!=typeof r&&(i=r,r=e,e=null),n(t,e,function(t,e){var n=e[e.length-1],i=n?n.children.indexOf(t):null;return r(t,i,n)},i)}s.CONTINUE=i,s.SKIP=o,s.EXIT=a},function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t?t:{}}t.exports=function(t){var e=n(n(t).position),r=n(e.start),i=n(e.end);return!(r.line&&r.column&&i.line&&i.column)}},function(t,e,r){"use strict";var n=e;function i(t){return e.displayName=t,e;function e(e){var r=e&&e.position&&e.position[t]||{};return{line:r.line||null,column:r.column||null,offset:isNaN(r.offset)?null:r.offset}}}n.start=i("start"),n.end=i("end")},,,,,,function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var i in n)r.call(n,i)&&(t[i]=n[i])}return t};var r=Object.prototype.hasOwnProperty},function(t,e,r){"use strict";t.exports=function(t,e){var r,o,a=e.children||[],s=a.length,c=[],l=-1;for(;++l<s;)(r=i(t,a[l],e))&&(l&&"break"===a[l-1].type&&(r.value&&(r.value=n.left(r.value)),(o=r.children&&r.children[0])&&o.value&&(o.value=n.left(o.value))),c=c.concat(r));return c};var n=r(91),i=r(167)},function(t,e,r){"use strict";t.exports=function(t){return i.test("number"==typeof t?n(t):t.charAt(0))};var n=String.fromCharCode,i=/\s/},function(t,e,r){"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var n,i="";t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");if(1===e)return t;if(2===e)return t+t;var r=t.length*e;if(n!==t||void 0===n)n=t,i="";else if(i.length>=r)return i.substr(0,r);for(;r>i.length&&e>1;)1&e&&(i+=t),e>>=1,t+=t;return i=(i+=t).substr(0,r)}},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e,r){var i;null!=r||"object"==typeof e&&!Array.isArray(e)||(r=e,e={});i=n({type:String(t)},e),Array.isArray(r)?i.children=r:null!=r&&(i.value=String(r));return i}},,,,,,function(t,e){(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}},,,,,function(t,e,r){"use strict";t.exports=function t(e){return function(t){return(t&&t.value?t.value:t.alt?t.alt:t.title)||""}(e)||e.children&&e.children.map(t).join("")||""}},,,function(t,e,r){"use strict";t.exports=function(t,e){var r=[],i=-1,o=t.length;e&&r.push(n("text","\n"));for(;++i<o;)i&&r.push(n("text","\n")),r.push(t[i]);e&&0!==t.length&&r.push(n("text","\n"));return r};var n=r(85)},,function(t,e,r){"use strict";var n=r(239),i=r(251),o=r(298);t.exports=n().use(i).use(o).freeze()},function(t,e,r){"use strict";t.exports=function(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=48&&e<=57}},function(t,e,r){"use strict";t.exports.plugins=[r(340),[r(344),"md"],r(348),r(349),r(350),r(351),r(352),r(353),[r(357),80],r(358),r(359),[r(360),"atx"],r(362),r(363),r(364),r(365),[r(366),":."],[r(367),2],r(368),[r(369),"-"],[r(370),"."],[r(371),"one"],[r(372),"mixed"],r(373),r(374),[r(375),"fenced"],[r(376),{allowEmpty:!1}],[r(377),"`"],[r(378),"---"],r(379),r(380),r(381),[r(382),"padded"],r(383),r(384),r(385),r(386),r(387),r(388),[r(389),'"'],[r(390),"*"],[r(391),"*"],r(392),r(393),r(394)]},function(t,e,r){"use strict";var n=r(81),i=r(395),o=r(421),a=r(436);t.exports=function(t){var e=t||{},r=e.sanitize,s=r&&"object"==typeof r?r:null,c=e.handlers||{};this.Compiler=function(t,l){var u,f=t&&t.type&&"root"===t.type,p=i(t,{allowDangerousHTML:!r,handlers:c});l.extname&&(l.extname=".html");r&&(p=a(p,s));u=o(p,n(e,{allowDangerousHTML:!r})),f&&"\n"!==u.charAt(u.length-1)&&(u+="\n");return u}}},,,,,,,,function(t,e,r){"use strict";t.exports=function(t){var e=function(t){var e=[],r=t.indexOf("\n");for(;-1!==r;)e.push(r+1),r=t.indexOf("\n",r+1);return e.push(t.length+1),e}(String(t));return{toPosition:function(t){return function(e){var r=-1,n=t.length;if(e<0)return{};for(;++r<n;)if(t[r]>e)return{line:r+1,column:e-(t[r-1]||0)+1,offset:e};return{}}}(e),toOffset:function(t){return function(e){var r=e&&e.line,n=e&&e.column;if(!isNaN(r)&&!isNaN(n)&&r-1 in t)return(t[r-2]||0)+n-1||0;return-1}}(e)}}},function(t,e,r){"use strict";var n=r(256),i=r(149),o=r(257),a=r(102),s=r(150),c=r(151);t.exports=function(t,e){var r,a,s={};e||(e={});for(a in p)r=e[a],s[a]=null==r?p[a]:r;(s.position.indent||s.position.start)&&(s.indent=s.position.indent||[],s.position=s.position.start);return function(t,e){var r,a,s,p,S,L,C,T,D,N,I,j,R,U,P,z,B,V,M=e.additional,H=e.nonTerminated,G=e.text,F=e.reference,_=e.warning,$=e.textContext,Z=e.referenceContext,Y=e.warningContext,K=e.position,Q=e.indent||[],J=t.length,X=0,W=-1,tt=K.column||1,et=K.line||1,rt="",nt=[];P=ot(),C=_?function(t,e){var r=ot();r.column+=e,r.offset+=e,_.call(Y,E[t],r,t)}:f,X--,J++;for(;++X<J;)if("\n"===p&&(tt=Q[W]||1),"&"!==(p=at(X)))"\n"===p&&(et++,W++,tt=0),p?(rt+=p,tt++):st();else{if("\t"===(L=at(X+1))||"\n"===L||"\f"===L||" "===L||"<"===L||"&"===L||""===L||M&&L===M){rt+=p,tt++;continue}for(I=j=X+1,V=j,"#"!==L?R=h:(V=++I,"x"===(L=at(V))||"X"===L?(R=d,V=++I):R=g),r="",N="",s="",U=v[R],V--;++V<J&&(L=at(V),U(L));)s+=L,R===h&&l.call(i,s)&&(r=s,N=i[s]);(a=";"===at(V))&&(V++,R===h&&l.call(n,s)&&(r=s,N=n[s])),B=1+V-j,(a||H)&&(s?R===h?(a&&!N?C(k,1):(r!==s&&(V=I+r.length,B=1+V-I,a=!1),a||(T=r?b:y,e.attribute?"="===(L=at(V))?(C(T,B),N=null):c(L)?N=null:C(T,B):C(T,B))),S=N):(a||C(x,B),S=parseInt(s,m[R]),(it=S)>=55296&&it<=57343||it>1114111?(C(q,B),S="�"):S in o?(C(A,B),S=o[S]):(D="",O(S)&&C(A,B),S>65535&&(D+=u((S-=65536)>>>10|55296),S=56320|1023&S),S=D+u(S))):R!==h&&C(w,B)),S?(st(),P=ot(),X=V-1,tt+=V-j+1,nt.push(S),(z=ot()).offset++,F&&F.call(Z,S,{start:P,end:z},t.slice(j-1,V)),P=z):(s=t.slice(j-1,V),rt+=s,tt+=s.length,X=V-1)}var it;return nt.join("");function ot(){return{line:et,column:tt,offset:X+(K.offset||0)}}function at(e){return t.charAt(e)}function st(){rt&&(nt.push(rt),G&&G.call($,rt,{start:P,end:ot()}),rt="")}}(t,s)};var l={}.hasOwnProperty,u=String.fromCharCode,f=Function.prototype,p={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},h="named",d="hexadecimal",g="decimal",m={};m[d]=16,m[g]=10;var v={};v[h]=c,v[g]=a,v[d]=s;var b=1,x=2,y=3,w=4,k=5,A=6,q=7,E={};function O(t){return t>=1&&t<=8||11===t||t>=13&&t<=31||t>=127&&t<=159||t>=64976&&t<=65007||65535==(65535&t)||65534==(65535&t)}E[b]="Named character references must be terminated by a semicolon",E[x]="Numeric character references must be terminated by a semicolon",E[y]="Named character references cannot be empty",E[w]="Numeric character references cannot be empty",E[k]="Named character references must be known",E[A]="Numeric character references cannot be disallowed",E[q]="Numeric character references cannot be outside the permissible Unicode range"},function(t,e,r){"use strict";function n(t){if("string"==typeof t)return function(t){return function(e){return Boolean(e&&e.type===t)}}(t);if(null==t)return i;if("object"==typeof t)return("length"in t?function(t){var e=function(t){var e=[],r=t.length,i=-1;for(;++i<r;)e[i]=n(t[i]);return e}(t),r=e.length;return function(){var t=-1;for(;++t<r;)if(e[t].apply(this,arguments))return!0;return!1}}:function(t){return function(e){var r;for(r in t)if(e[r]!==t[r])return!1;return!0}})(t);if("function"==typeof t)return t;throw new Error("Expected function, string, or object as test")}function i(){return!0}t.exports=function t(e,r,i,o,a){var s=null!=o;var c=null!=i;var l=n(e);if(c&&("number"!=typeof i||i<0||i===1/0))throw new Error("Expected positive finite index or child node");if(s&&(!t(null,o)||!o.children))throw new Error("Expected parent node");if(!r||!r.type||"string"!=typeof r.type)return!1;if(s!==c)throw new Error("Expected both parent and index");return Boolean(l.call(a,r,i,o))}},function(t,e,r){"use strict";const n=r(354);t.exports=((t,e,r)=>{if("number"==typeof e&&(r=e),n.has(t.toLowerCase())){e=n.get(t.toLowerCase());const r=t.charAt(0);r===r.toUpperCase()&&(e=r.toUpperCase()+e.slice(1)),t===t.toUpperCase()&&(e=e.toUpperCase())}else"string"!=typeof e&&(e=(t.replace(/(?:s|x|z|ch|sh)$/i,"$&e").replace(/([^aeiou])y$/i,"$1ie")+"s").replace(/i?e?s$/i,e=>{return t.slice(-1)===t.slice(-1).toLowerCase()?e.toLowerCase():e.toUpperCase()}));return 1===Math.abs(r)?t:e})},function(t,e,r){"use strict";var n={};function i(t,e,r){var o,a,s,c,l,u="";for("string"!=typeof e&&(r=e,e=i.defaultChars),void 0===r&&(r=!0),l=function(t){var e,r,i=n[t];if(i)return i;for(i=n[t]=[],e=0;e<128;e++)r=String.fromCharCode(e),/^[0-9a-z]$/i.test(r)?i.push(r):i.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)i[t.charCodeAt(e)]=t[e];return i}(e),o=0,a=t.length;o<a;o++)if(s=t.charCodeAt(o),r&&37===s&&o+2<a&&/^[0-9a-f]{2}$/i.test(t.slice(o+1,o+3)))u+=t.slice(o,o+3),o+=2;else if(s<128)u+=l[s];else if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&o+1<a&&(c=t.charCodeAt(o+1))>=56320&&c<=57343){u+=encodeURIComponent(t[o]+t[o+1]),o++;continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(t[o]);return u}i.defaultChars=";/?:@&=+$,-_.!~*'()#",i.componentChars="-_.!~*'()",t.exports=i},,,,,,,,,,,,,,,,,function(t,e,r){"use strict";var n={}.hasOwnProperty;function i(t){return t&&"object"==typeof t||(t={}),a(t.line)+":"+a(t.column)}function o(t){return t&&"object"==typeof t||(t={}),i(t.start)+"-"+i(t.end)}function a(t){return t&&"number"==typeof t?t:1}t.exports=function(t){if(!t||"object"!=typeof t)return null;if(n.call(t,"position")||n.call(t,"type"))return o(t.position);if(n.call(t,"start")||n.call(t,"end"))return o(t);if(n.call(t,"line")||n.call(t,"column"))return i(t);return null}},function(t,e,r){"use strict";t.exports=function(t){var e=String(t),r=e.length;for(;e.charAt(--r)===n;);return e.slice(0,r+1)};var n="\n"},function(t,e,r){"use strict";t.exports=function(t,e,r,n){var i,o,a,s,c,l,u=["pedantic","commonmark"],f=u.length,p=t.length,h=-1;for(;++h<p;){for(i=t[h],o=i[1]||{},a=i[0],s=-1,l=!1;++s<f;)if(void 0!==o[c=u[s]]&&o[c]!==r.options[c]){l=!0;break}if(!l&&e[a].apply(r,n))return!0}return!1}},function(t,e,r){"use strict";var n=r(157);t.exports=function(t){return n(t).toLowerCase()}},function(t,e,r){"use strict";var n=r(302),i=r(149),o=r(150),a=r(151),s=r(303);t.exports=h,h.escape=function(t){return h(t,{escapeOnly:!0,useNamedReferences:!0})};var c={}.hasOwnProperty,l=function(){var t,e={};for(t in n)e[n[t]]=t;return e}(),u=m(['"',"'","<",">","&","`"]),f=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,p=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;function h(t,e){var r=e||{},n=r.subset,i=n?m(n):u,o=r.escapeOnly,a=r.omitOptionalSemicolons;return t=t.replace(i,function(t,e,n){return d(t,n.charAt(e+1),r)}),n||o?t:t.replace(f,function(t,e,r){return g(1024*(t.charCodeAt(0)-55296)+t.charCodeAt(1)-56320+65536,r.charAt(e+2),a)}).replace(p,function(t,e,n){return d(t,n.charAt(e+1),r)})}function d(t,e,r){var n,o,u=r.useShortestReferences,f=r.omitOptionalSemicolons;return(u||r.useNamedReferences)&&c.call(l,t)&&(n=function(t,e,r,n){var o="&"+t;if(r&&c.call(i,t)&&-1===s.indexOf(t)&&(!n||e&&"="!==e&&!a(e)))return o;return o+";"}(l[t],e,f,r.attribute)),!u&&n||(o=g(t.charCodeAt(0),e,f)),n&&(!u||n.length<o.length)?n:o}function g(t,e,r){var n="&#x"+t.toString(16).toUpperCase();return r&&e&&!o(e)?n:n+";"}function m(t){return new RegExp("["+t.join("")+"]","g")}},function(t,e,r){"use strict";var n=r(165);t.exports=function(t,e){if(e||0===t.length||i.test(t)||n(t,"(")!==n(t,")"))return"<"+t+">";return t};var i=/\s/},function(t,e,r){"use strict";t.exports=function(t){var e=-1===t.indexOf('"')?'"':"'";return e+t+e}},function(t,e,r){"use strict";var n=r(173);function i(t){return function(e,r,i){var o,a=e&&e.children;if(r+=t,o=a&&a[r],!i)for(;o&&n(o);)o=a[r+=t];return o}}e.before=i(-1),e.after=i(1)},,,,,,function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return n.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,n="/"===a.charAt(0))}return(n?"/":"")+(e=r(o(e.split("/"),function(t){return!!t}),!n).join("/"))||"."},e.normalize=function(t){var n=e.isAbsolute(t),i="/"===a(t,-1);return(t=r(o(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&i&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var l=[];for(c=s;c<i.length;c++)l.push("..");return(l=l.concat(o.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=i(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(121))},function(t,e,r){"use strict";var n=r(81),i=r(252);t.exports=function(t){var e,r,o;for(r in i(s,t),i(a,s),e=s.prototype)(o=e[r])&&"object"==typeof o&&(e[r]="concat"in o?o.concat():n(o));return s;function a(e){return t.apply(this,e)}function s(){return this instanceof s?t.apply(this,arguments):new a(arguments)}}},function(t,e,r){"use strict";t.exports=function(t,e,r){return function(){var n=r||this,i=n[t];return n[t]=!e,function(){n[t]=i}}}},function(t){t.exports={AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"}},function(t,e,r){"use strict";t.exports=function(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=97&&e<=102||e>=65&&e<=70||e>=48&&e<=57}},function(t,e,r){"use strict";var n=r(152),i=r(102);t.exports=function(t){return n(t)||i(t)}},function(t,e,r){"use strict";t.exports=function(t){var e="string"==typeof t?t.charCodeAt(0):t;return e>=97&&e<=122||e>=65&&e<=90}},function(t,e,r){"use strict";t.exports=a;var n=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],i=n.concat(["~","|"]),o=i.concat(["\n",'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);function a(t){var e=t||{};return e.commonmark?o:e.gfm?i:n}a.default=n,a.gfm=i,a.commonmark=o},function(t,e,r){"use strict";t.exports={position:!0,gfm:!0,commonmark:!1,footnotes:!1,pedantic:!1,blocks:r(260)}},function(t,e,r){"use strict";t.exports=function(t){var e,r=0,i=0,o=t.charAt(r),a={};for(;o in n;)e=n[o],i+=e,e>1&&(i=Math.floor(i/e)*e),a[i]=r,o=t.charAt(++r);return{indent:i,stops:a}};var n={" ":1,"\t":4}},function(t,e,r){"use strict";var n="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",i="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";e.openCloseTag=new RegExp("^(?:"+n+"|"+i+")"),e.tag=new RegExp("^(?:"+n+"|"+i+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")},function(t,e,r){"use strict";t.exports=function(t){return String(t).replace(/\s+/g," ")}},function(t,e,r){"use strict";t.exports=function(t,e){return t.indexOf("<",e)}},function(t,e,r){"use strict";t.exports=function(t,e){var r=t.indexOf("[",e),n=t.indexOf("![",e);if(-1===n)return r;return r<n?r:n}},function(t,e,r){"use strict";t.exports=function(t){return t}},function(t,e,r){"use strict";t.exports={gfm:!0,commonmark:!1,pedantic:!1,entities:"false",setext:!1,closeAtx:!1,looseTable:!1,spacedTable:!0,paddedTable:!0,stringLength:function(t){return t.length},incrementListMarker:!0,fences:!1,fence:"`",bullet:"-",listItemIndent:"tab",rule:"*",ruleSpaces:!0,ruleRepetition:3,strong:"*",emphasis:"_"}},function(t,e,r){"use strict";var n=r(113);t.exports=function(t){var e;if("&"!==t.charAt(0))return 0;return(e=t.split("&",2).join("&")).length-n(e).length}},function(t,e,r){"use strict";var n=r(84);t.exports=function(t,e){var r,o;t=t.split("\n"),r=t.length,o=n(" ",e*i);for(;r--;)0!==t[r].length&&(t[r]=o+t[r]);return t.join("\n")};var i=4},function(t,e,r){"use strict";t.exports=function(t,e){var r,n,i=0,o=0;if("string"!=typeof e||1!==e.length)throw new Error("Expected character");t=String(t),n=t.indexOf(e),r=n;for(;-1!==n;)i++,n===r?i>o&&(o=i):i=1,r=n+1,n=t.indexOf(e,r);return o}},function(t,e,r){"use strict";t.exports=function(t,e){var r,n=0;if(t=String(t),"string"!=typeof e||1!==e.length)throw new Error("Expected character");r=t.indexOf(e);for(;-1!==r;)n++,r=t.indexOf(e,r+1);return n}},function(t,e,r){"use strict";t.exports=function(t){var e=t.referenceType,r="full"===e?t.identifier:"";return"shortcut"===e?r:"["+r+"]"}},function(t,e,r){"use strict";t.exports=function(t,e,r){var a=e&&e.type,s=o.call(t.handlers,a)?t.handlers[a]:null;if(!a)throw new Error("Expected node, got `"+e+"`");return("function"==typeof s?s:function(t,e){if(function(t){var e=t.data||{};if(o.call(e,"hName")||o.call(e,"hProperties")||o.call(e,"hChildren"))return!1;return"value"in t}(e))return t.augment(e,n("text",e.value));return t(e,"div",i(t,e))})(t,e,r)};var n=r(85),i=r(82),o={}.hasOwnProperty},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"hr")}},function(t,e,r){"use strict";t.exports=function(t,e){var r={},o=e.ordered?"ol":"ul";"number"==typeof e.start&&1!==e.start&&(r.start=e.start);return t(e,o,r,n(i(t,e),!0))};var n=r(99),i=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){var r=e.identifier;return t(e.position,"sup",{id:"fnref-"+r},[t(e,"a",{href:"#fn-"+r,className:["footnote-ref"]},[n("text",r)])])};var n=r(85)},function(t,e,r){"use strict";t.exports=function(t,e){var r,o,a,s=e.referenceType,c="]";"collapsed"===s?c+="[]":"full"===s&&(c+="["+e.identifier+"]");if("imageReference"===e.type)return n("text","!["+e.alt+c);r=i(t,e),(o=r[0])&&"text"===o.type?o.value="["+o.value:r.unshift(n("text","["));(a=r[r.length-1])&&"text"===a.type?a.value+=c:r.push(n("text",c));return r};var n=r(85),i=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){var r;if(null!=e&&"string"!=typeof e&&("object"!=typeof e||0===e.length))throw new Error("Expected `string` or `Array.<string>` for `tagNames`, not `"+e+"`");if(!t||"object"!=typeof t||"element"!==t.type||"string"!=typeof t.tagName)return!1;if(null==e)return!0;if(r=t.tagName,"string"==typeof e)return r===e;return-1!==e.indexOf(r)}},function(t,e,r){"use strict";t.exports=function(t){var e;if(t&&"object"==typeof t&&"text"===t.type)e=t.value||"";else{if("string"!=typeof t)return!1;e=t}return""===e.replace(n,"")};var n=/[ \t\n\f\r]/g},function(t,e,r){"use strict";var n=r(114),i=r(173);t.exports=function(t){return n("text",t)&&i(t.value.charAt(0))}},function(t,e,r){"use strict";var n=r(114),i=r(172),o=r(174),a=r(140).after,s=r(176);function c(t,e,r){var i=a(r,e,!0);return!i||!n("comment",i)&&!o(i)}function l(t,e,r){var n=a(r,e);return!n||i(n,["rp","rt"])}function u(t,e,r){var n=a(r,e);return!n||i(n,["td","th"])}t.exports=s({html:function(t,e,r){var i=a(r,e);return!i||!n("comment",i)},head:c,body:function(t,e,r){var i=a(r,e);return!i||!n("comment",i)},p:function(t,e,r){var n=a(r,e);if(n)return i(n,["address","article","aside","blockquote","details","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","menu","nav","ol","p","pre","section","table","ul"]);return!r||!i(r,["a","audio","del","ins","map","noscript","video"])},li:function(t,e,r){var n=a(r,e);return!n||i(n,"li")},dt:function(t,e,r){var n=a(r,e);return n&&i(n,["dt","dd"])},dd:function(t,e,r){var n=a(r,e);return!n||i(n,["dt","dd"])},rt:l,rp:l,optgroup:function(t,e,r){var n=a(r,e);return!n||i(n,"optgroup")},option:function(t,e,r){var n=a(r,e);return!n||i(n,["option","optgroup"])},menuitem:function(t,e,r){var n=a(r,e);return!n||i(n,["menuitem","hr","menu"])},colgroup:c,caption:c,thead:function(t,e,r){var n=a(r,e);return n&&i(n,["tbody","tfoot"])},tbody:function(t,e,r){var n=a(r,e);return!n||i(n,["tbody","tfoot"])},tfoot:function(t,e,r){return!a(r,e)},tr:function(t,e,r){var n=a(r,e);return!n||i(n,"tr")},td:u,th:u})},function(t,e,r){"use strict";t.exports=function(t){return function(e,r,i){var o=e.tagName,a=!!n.call(t,o)&&t[o];return!!a&&a(e,r,i)}};var n={}.hasOwnProperty},function(t,e,r){"use strict";t.exports=function(t,e,r,o){var a=e&&e.type;if(!a)throw new Error("Expected node, not `"+e+"`");if(!n.call(i,a))throw new Error("Cannot compile unknown node `"+a+"`");return i[a](t,e,r,o)};var n={}.hasOwnProperty,i={};i.root=r(178),i.text=r(179),i.element=r(428),i.doctype=r(433),i.comment=r(434),i.raw=r(435)},function(t,e,r){"use strict";var n=r(177);t.exports=function(t,e){var r=e&&e.children,i=r&&r.length,o=-1,a=[];for(;++o<i;)a[o]=n(t,r[o],o,e);return a.join("")}},function(t,e,r){"use strict";var n=r(81),i=r(137);t.exports=function(t,e,r,o){var a=e.value;return function(t){return t&&("script"===t.tagName||"style"===t.tagName)}(o)?a:i(a,n(t.entities,{subset:["<","&"]}))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";var n=r(240),i=r(241),o=r(242),a=r(247),s=r(249),c=r(250);t.exports=function t(){var e=[];var r=a();var b={};var x=!1;var y=-1;w.data=function(t,e){if(s(t))return 2===arguments.length?(g("data",x),b[t]=e,w):u.call(b,t)&&b[t]||null;if(t)return g("data",x),b=t,w;return b};w.freeze=k;w.attachers=e;w.use=function(t){var r;if(g("use",x),null==t);else if("function"==typeof t)s.apply(null,arguments);else{if("object"!=typeof t)throw new Error("Expected usable value, not `"+t+"`");"length"in t?a(t):i(t)}r&&(b.settings=n(b.settings||{},r));return w;function i(t){a(t.plugins),t.settings&&(r=n(r||{},t.settings))}function o(t){if("function"==typeof t)s(t);else{if("object"!=typeof t)throw new Error("Expected usable value, not `"+t+"`");"length"in t?s.apply(null,t):i(t)}}function a(t){var e,r;if(null==t);else{if(!("object"==typeof t&&"length"in t))throw new Error("Expected a list of plugins, not `"+t+"`");for(e=t.length,r=-1;++r<e;)o(t[r])}}function s(t,r){var i=function(t){var r,n=e.length,i=-1;for(;++i<n;)if((r=e[i])[0]===t)return r}(t);i?(c(i[1])&&c(r)&&(r=n(i[1],r)),i[1]=r):e.push(l.call(arguments))}};w.parse=function(t){var e,r=o(t);if(k(),h("parse",e=w.Parser),p(e))return new e(String(r),r).parse();return e(String(r),r)};w.stringify=function(t,e){var r,n=o(e);if(k(),d("stringify",r=w.Compiler),m(t),p(r))return new r(t,n).compile();return r(t,n)};w.run=A;w.runSync=function(t,e){var r,n=!1;return A(t,e,function(t,e){n=!0,i(t),r=e}),v("runSync","run",n),r};w.process=q;w.processSync=function(t){var e,r=!1;return k(),h("processSync",w.Parser),d("processSync",w.Compiler),q(e=o(t),function(t){r=!0,i(t)}),v("processSync","process",r),e};return w;function w(){for(var r=t(),i=e.length,o=-1;++o<i;)r.use.apply(null,e[o]);return r.data(n(!0,{},b)),r}function k(){var t,n,i,o;if(x)return w;for(;++y<e.length;)t=e[y],n=t[0],i=t[1],o=null,!1!==i&&(!0===i&&(t[1]=void 0),"function"==typeof(o=n.apply(w,t.slice(1)))&&r.use(o));return x=!0,y=1/0,w}function A(t,e,n){if(m(t),k(),n||"function"!=typeof e||(n=e,e=null),!n)return new Promise(i);function i(i,a){r.run(t,o(e),function(e,r,o){r=r||t,e?a(e):i?i(r):n(null,r,o)})}i(null,n)}function q(t,e){if(k(),h("process",w.Parser),d("process",w.Compiler),!e)return new Promise(r);function r(r,n){var i=o(t);f.run(w,{file:i},function(t){t?n(t):r?r(i):e(null,i)})}r(null,e)}}().freeze();var l=[].slice,u={}.hasOwnProperty,f=a().use(function(t,e){e.tree=t.parse(e.file)}).use(function(t,e,r){t.run(e.tree,e.file,function(t,n,i){t?r(t):(e.tree=n,e.file=i,r())})}).use(function(t,e){e.file.contents=t.stringify(e.tree,e.file)});function p(t){return"function"==typeof t&&function(t){var e;for(e in t)return!0;return!1}(t.prototype)}function h(t,e){if("function"!=typeof e)throw new Error("Cannot `"+t+"` without `Parser`")}function d(t,e){if("function"!=typeof e)throw new Error("Cannot `"+t+"` without `Compiler`")}function g(t,e){if(e)throw new Error(["Cannot invoke `"+t+"` on a frozen processor.\nCreate a new ","processor first, by invoking it: use `processor()` instead of ","`processor`."].join(""))}function m(t){if(!t||!s(t.type))throw new Error("Expected node, got `"+t+"`")}function v(t,e,r){if(!r)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}},function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===i.call(t)},c=function(t){if(!t||"[object Object]"!==i.call(t))return!1;var e,r=n.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!o)return!1;for(e in t);return void 0===e||n.call(t,e)},l=function(t,e){o&&"__proto__"===e.name?o(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},u=function(t,e){if("__proto__"===e){if(!n.call(t,e))return;if(a)return a(t,e).value}return t[e]};t.exports=function t(){var e,r,n,i,o,a,f=arguments[0],p=1,h=arguments.length,d=!1;for("boolean"==typeof f&&(d=f,f=arguments[1]||{},p=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});p<h;++p)if(null!=(e=arguments[p]))for(r in e)n=u(f,r),f!==(i=u(e,r))&&(d&&i&&(c(i)||(o=s(i)))?(o?(o=!1,a=n&&s(n)?n:[]):a=n&&c(n)?n:{},l(f,{name:r,newValue:t(d,a,i)})):void 0!==i&&l(f,{name:r,newValue:i}));return f}},function(t,e,r){"use strict";t.exports=function(t){if(t)throw t}},function(t,e,r){"use strict";var n=r(243),i=r(244);t.exports=i;var o=i.prototype;function a(t,e,r){var i=this.path,o=new n(t,e,r);return i&&(o.name=i+":"+o.name,o.file=i),o.fatal=!1,this.messages.push(o),o}o.message=a,o.info=function(){var t=this.message.apply(this,arguments);return t.fatal=null,t},o.fail=function(){var t=this.message.apply(this,arguments);throw t.fatal=!0,t},o.warn=a},function(t,e,r){"use strict";var n=r(133);function i(){}t.exports=a,i.prototype=Error.prototype,a.prototype=new i;var o=a.prototype;function a(t,e,r){var i,o,a;"string"==typeof e&&(r=e,e=null),i=function(t){var e,r=[null,null];"string"==typeof t&&(-1===(e=t.indexOf(":"))?r[1]=t:(r[0]=t.slice(0,e),r[1]=t.slice(e+1)));return r}(r),o=n(e)||"1:1",a={start:{line:null,column:null},end:{line:null,column:null}},e&&e.position&&(e=e.position),e&&(e.start?(a=e,e=e.start):a.start=e),t.stack&&(this.stack=t.stack,t=t.message),this.message=t,this.name=o,this.reason=t,this.line=e?e.line:null,this.column=e?e.column:null,this.location=a,this.source=i[0],this.ruleId=i[1]}o.file="",o.name="",o.reason="",o.message="",o.stack="",o.fatal=null,o.column=null,o.line=null},function(t,e,r){"use strict";(function(e){var n=r(146),i=r(245),o=r(246);t.exports=l;var a={}.hasOwnProperty,s=l.prototype;s.toString=function(t){var e=this.contents||"";return o(e)?e.toString(t):String(e)};var c=["history","path","basename","stem","extname","dirname"];function l(t){var r,n,i;if(t){if("string"==typeof t||o(t))t={contents:t};else if("message"in t&&"messages"in t)return t}else t={};if(!(this instanceof l))return new l(t);for(this.data={},this.messages=[],this.history=[],this.cwd=e.cwd(),n=-1,i=c.length;++n<i;)r=c[n],a.call(t,r)&&(this[r]=t[r]);for(r in t)-1===c.indexOf(r)&&(this[r]=t[r])}function u(t,e){if(-1!==t.indexOf(n.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+n.sep+"`")}function f(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function p(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}Object.defineProperty(s,"path",{get:function(){return this.history[this.history.length-1]},set:function(t){f(t,"path"),t!==this.path&&this.history.push(t)}}),Object.defineProperty(s,"dirname",{get:function(){return"string"==typeof this.path?n.dirname(this.path):void 0},set:function(t){p(this.path,"dirname"),this.path=n.join(t||"",this.basename)}}),Object.defineProperty(s,"basename",{get:function(){return"string"==typeof this.path?n.basename(this.path):void 0},set:function(t){f(t,"basename"),u(t,"basename"),this.path=n.join(this.dirname||"",t)}}),Object.defineProperty(s,"extname",{get:function(){return"string"==typeof this.path?n.extname(this.path):void 0},set:function(t){var e=t||"";if(u(e,"extname"),p(this.path,"extname"),e){if("."!==e.charAt(0))throw new Error("`extname` must start with `.`");if(-1!==e.indexOf(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=i(this.path,e)}}),Object.defineProperty(s,"stem",{get:function(){return"string"==typeof this.path?n.basename(this.path,this.extname):void 0},set:function(t){f(t,"stem"),u(t,"stem"),this.path=n.join(this.dirname||"",t+(this.extname||""))}})}).call(this,r(121))},function(t,e,r){"use strict";var n=r(146);t.exports=function(t,e){if("string"!=typeof t)return t;if(0===t.length)return t;var r=n.basename(t,n.extname(t))+e;return n.join(n.dirname(t),r)}},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,r){"use strict";var n=r(248);t.exports=o,o.wrap=n;var i=[].slice;function o(){var t=[],e={run:function(){var e=-1,r=i.call(arguments,0,-1),o=arguments[arguments.length-1];if("function"!=typeof o)throw new Error("Expected function as last argument, not "+o);(function a(s){var c=t[++e];var l=i.call(arguments,0);var u=l.slice(1);var f=r.length;var p=-1;if(s)return void o(s);for(;++p<f;)null!==u[p]&&void 0!==u[p]||(u[p]=r[p]);r=u;c?n(c,a).apply(null,r):o.apply(null,[null].concat(r))}).apply(null,[null].concat(r))},use:function(r){if("function"!=typeof r)throw new Error("Expected `fn` to be a function, not "+r);return t.push(r),e}};return e}},function(t,e,r){"use strict";var n=[].slice;t.exports=function(t,e){var r;return function(){var e,a=n.call(arguments,0),s=t.length>a.length;s&&a.push(i);try{e=t.apply(null,a)}catch(t){if(s&&r)throw t;return i(t)}s||(e&&"function"==typeof e.then?e.then(o,i):e instanceof Error?i(e):o(e))};function i(){r||(r=!0,e.apply(null,arguments))}function o(t){i(null,t)}}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return"[object String]"===r.call(t)}},function(t,e,r){"use strict";var n=Object.prototype.toString;t.exports=function(t){var e;return"[object Object]"===n.call(t)&&(null===(e=Object.getPrototypeOf(t))||e===Object.getPrototypeOf({}))}},function(t,e,r){"use strict";var n=r(147),i=r(81),o=r(253);function a(t){var e=n(o);e.prototype.options=i(e.prototype.options,this.data("settings"),t),this.Parser=e}t.exports=a,a.Parser=o},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){"use strict";var n=r(81),i=r(148),o=r(112),a=r(254),s=r(255),c=r(258);function l(t,e){this.file=e,this.offset={},this.options=n(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=o(e).toOffset,this.unescape=a(this,"escape"),this.decode=s(this)}t.exports=l;var u=l.prototype;function f(t){var e,r=[];for(e in t)r.push(e);return r}u.setOptions=r(259),u.parse=r(261),u.options=r(154),u.exitStart=i("atStart",!0),u.enterList=i("inList",!1),u.enterLink=i("inLink",!1),u.enterBlock=i("inBlock",!1),u.interruptParagraph=[["thematicBreak"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],u.interruptList=[["atxHeading",{pedantic:!1}],["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],u.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}],["footnote",{commonmark:!1}]],u.blockTokenizers={newline:r(264),indentedCode:r(265),fencedCode:r(266),blockquote:r(267),atxHeading:r(268),thematicBreak:r(269),list:r(270),setextHeading:r(272),html:r(273),footnote:r(274),definition:r(275),table:r(276),paragraph:r(277)},u.inlineTokenizers={escape:r(278),autoLink:r(280),url:r(281),html:r(283),link:r(284),reference:r(285),strong:r(286),emphasis:r(288),deletion:r(291),code:r(293),break:r(295),text:r(297)},u.blockMethods=f(u.blockTokenizers),u.inlineMethods=f(u.inlineTokenizers),u.tokenizeBlock=c("block"),u.tokenizeInline=c("inline"),u.tokenizeFactory=c},function(t,e,r){"use strict";t.exports=function(t,e){return function(r){var n,i=0,o=r.indexOf("\\"),a=t[e],s=[];for(;-1!==o;)s.push(r.slice(i,o)),i=o+1,(n=r.charAt(i))&&-1!==a.indexOf(n)||s.push("\\"),o=r.indexOf("\\",i);return s.push(r.slice(i)),s.join("")}}},function(t,e,r){"use strict";var n=r(81),i=r(113);t.exports=function(t){return o.raw=function(t,o,a){return i(t,n(a,{position:e(o),warning:r}))},o;function e(e){for(var r=t.offset,n=e.line,i=[];++n&&n in r;)i.push((r[n]||0)+1);return{start:e,indent:i}}function r(e,r,n){3!==n&&t.file.message(e,r)}function o(n,o,a){i(n,{position:e(o),warning:r,text:a,reference:a,textContext:t,referenceContext:t})}}},function(t){t.exports={AEli:"Æ",AElig:"Æ",AM:"&",AMP:"&",Aacut:"Á",Aacute:"Á",Abreve:"Ă",Acir:"Â",Acirc:"Â",Acy:"А",Afr:"𝔄",Agrav:"À",Agrave:"À",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"𝔸",ApplyFunction:"⁡",Arin:"Å",Aring:"Å",Ascr:"𝒜",Assign:"≔",Atild:"Ã",Atilde:"Ã",Aum:"Ä",Auml:"Ä",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"𝔅",Bopf:"𝔹",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COP:"©",COPY:"©",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedi:"Ç",Ccedil:"Ç",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"¸",CenterDot:"·",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"𝒞",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"𝔇",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"𝔻",Dot:"¨",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"𝒟",Dstrok:"Đ",ENG:"Ŋ",ET:"Ð",ETH:"Ð",Eacut:"É",Eacute:"É",Ecaron:"Ě",Ecir:"Ê",Ecirc:"Ê",Ecy:"Э",Edot:"Ė",Efr:"𝔈",Egrav:"È",Egrave:"È",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"𝔼",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Eum:"Ë",Euml:"Ë",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"𝔉",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"𝔽",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",G:">",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"𝔊",Gg:"⋙",Gopf:"𝔾",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacut:"Í",Iacute:"Í",Icir:"Î",Icirc:"Î",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrav:"Ì",Igrave:"Ì",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"𝕀",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Ium:"Ï",Iuml:"Ï",Jcirc:"Ĵ",Jcy:"Й",Jfr:"𝔍",Jopf:"𝕁",Jscr:"𝒥",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"𝔎",Kopf:"𝕂",Kscr:"𝒦",LJcy:"Љ",L:"<",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"𝔏",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"𝕃",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",MinusPlus:"∓",Mopf:"𝕄",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",Nfr:"𝔑",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"𝒩",Ntild:"Ñ",Ntilde:"Ñ",Nu:"Ν",OElig:"Œ",Oacut:"Ó",Oacute:"Ó",Ocir:"Ô",Ocirc:"Ô",Ocy:"О",Odblac:"Ő",Ofr:"𝔒",Ograv:"Ò",Ograve:"Ò",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"𝕆",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"𝒪",Oslas:"Ø",Oslash:"Ø",Otild:"Õ",Otilde:"Õ",Otimes:"⨷",Oum:"Ö",Ouml:"Ö",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"𝔓",Phi:"Φ",Pi:"Π",PlusMinus:"±",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"𝒫",Psi:"Ψ",QUO:'"',QUOT:'"',Qfr:"𝔔",Qopf:"ℚ",Qscr:"𝒬",RBarr:"⤐",RE:"®",REG:"®",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"𝔖",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"𝕊",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"𝒮",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THOR:"Þ",THORN:"Þ",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"\t",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"𝔗",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"𝕋",TripleDot:"⃛",Tscr:"𝒯",Tstrok:"Ŧ",Uacut:"Ú",Uacute:"Ú",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucir:"Û",Ucirc:"Û",Ucy:"У",Udblac:"Ű",Ufr:"𝔘",Ugrav:"Ù",Ugrave:"Ù",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"𝕌",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"𝒰",Utilde:"Ũ",Uum:"Ü",Uuml:"Ü",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",Vopf:"𝕍",Vscr:"𝒱",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"𝔚",Wopf:"𝕎",Wscr:"𝒲",Xfr:"𝔛",Xi:"Ξ",Xopf:"𝕏",Xscr:"𝒳",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacut:"Ý",Yacute:"Ý",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"𝔜",Yopf:"𝕐",Yscr:"𝒴",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"𝒵",aacut:"á",aacute:"á",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acir:"â",acirc:"â",acut:"´",acute:"´",acy:"а",aeli:"æ",aelig:"æ",af:"⁡",afr:"𝔞",agrav:"à",agrave:"à",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",am:"&",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",aopf:"𝕒",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",arin:"å",aring:"å",ascr:"𝒶",ast:"*",asymp:"≈",asympeq:"≍",atild:"ã",atilde:"ã",aum:"ä",auml:"ä",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvba:"¦",brvbar:"¦",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedi:"ç",ccedil:"ç",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedi:"¸",cedil:"¸",cemptyv:"⦲",cen:"¢",cent:"¢",centerdot:"·",cfr:"𝔠",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"𝕔",coprod:"∐",cop:"©",copy:"©",copysr:"℗",crarr:"↵",cross:"✗",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curre:"¤",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",de:"°",deg:"°",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",digamma:"ϝ",disin:"⋲",div:"÷",divid:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacut:"é",eacute:"é",easter:"⩮",ecaron:"ě",ecir:"ê",ecirc:"ê",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",eg:"⪚",egrav:"è",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",et:"ð",eth:"ð",eum:"ë",euml:"ë",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac1:"¼",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac3:"¾",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",g:">",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",horbar:"―",hscr:"𝒽",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacut:"í",iacute:"í",ic:"⁣",icir:"î",icirc:"î",icy:"и",iecy:"е",iexc:"¡",iexcl:"¡",iff:"⇔",ifr:"𝔦",igrav:"ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"𝕚",iota:"ι",iprod:"⨼",iques:"¿",iquest:"¿",iscr:"𝒾",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",ium:"ï",iuml:"ï",jcirc:"ĵ",jcy:"й",jfr:"𝔧",jmath:"ȷ",jopf:"𝕛",jscr:"𝒿",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"𝔨",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"𝕜",kscr:"𝓀",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laqu:"«",laquo:"«",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",l:"<",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",mac:"¯",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"𝔪",mho:"℧",micr:"µ",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middo:"·",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",mp:"∓",mscr:"𝓂",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbs:" ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"𝕟",no:"¬",not:"¬",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntild:"ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacut:"ó",oacute:"ó",oast:"⊛",ocir:"ô",ocirc:"ô",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"𝔬",ogon:"˛",ograv:"ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"º",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslas:"ø",oslash:"ø",osol:"⊘",otild:"õ",otilde:"õ",otimes:"⊗",otimesas:"⨶",oum:"ö",ouml:"ö",ovbar:"⌽",par:"¶",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusm:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",pointint:"⨕",popf:"𝕡",poun:"£",pound:"£",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",psi:"ψ",puncsp:" ",qfr:"𝔮",qint:"⨌",qopf:"𝕢",qprime:"⁗",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quo:'"',quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raqu:"»",raquo:"»",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",re:"®",reg:"®",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"𝓇",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sec:"§",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",sh:"­",shy:"­",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szli:"ß",szlig:"ß",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thor:"þ",thorn:"þ",tilde:"˜",time:"×",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacut:"ú",uacute:"ú",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucir:"û",ucirc:"û",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",ugrav:"ù",ugrave:"ù",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",um:"¨",uml:"¨",uogon:"ų",uopf:"𝕦",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"𝓊",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uum:"ü",uuml:"ü",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",vprop:"∝",vrtri:"⊳",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"𝔴",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacut:"ý",yacute:"ý",yacy:"я",ycirc:"ŷ",ycy:"ы",ye:"¥",yen:"¥",yfr:"𝔶",yicy:"ї",yopf:"𝕪",yscr:"𝓎",yucy:"ю",yum:"ÿ",yuml:"ÿ",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"𝔷",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},function(t){t.exports={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"}},function(t,e,r){"use strict";t.exports=function(t){return function(e,r){var o,a,s,c,l,u,f=this,p=f.offset,h=[],d=f[t+"Methods"],g=f[t+"Tokenizers"],m=r.line,v=r.column;if(!e)return h;w.now=x,w.file=f.file,b("");for(;e;){for(o=-1,a=d.length,l=!1;++o<a&&(c=d[o],!(s=g[c])||s.onlyAtStart&&!f.atStart||s.notInList&&f.inList||s.notInBlock&&f.inBlock||s.notInLink&&f.inLink||(u=e.length,s.apply(f,[w,e]),!(l=u!==e.length))););l||f.file.fail(new Error("Infinite loop"),w.now())}return f.eof=x(),h;function b(t){for(var e=-1,r=t.indexOf("\n");-1!==r;)m++,e=r,r=t.indexOf("\n",r+1);-1===e?v+=t.length:v=t.length-e,m in p&&(-1!==e?v+=p[m]:v<=p[m]&&(v=p[m]+1))}function x(){var t={line:m,column:v};return t.offset=f.toOffset(t),t}function y(t){this.start=t,this.end=x()}function w(t){var r=function(){var t=[],e=m+1;return function(){for(var r=m+1;e<r;)t.push((p[e]||0)+1),e++;return t}}(),o=function(){var t=x();return function(e,r){var n=e.position,i=n?n.start:t,o=[],a=n&&n.end.line,s=t.line;if(e.position=new y(i),n&&r&&n.indent){if(o=n.indent,a<s){for(;++a<s;)o.push((p[a]||0)+1);o.push(t.column)}r=o.concat(r)}return e.position.indent=r||[],e}}(),a=x();return function(t){e.substring(0,t.length)!==t&&f.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"),x())}(t),s.reset=c,c.test=l,s.test=l,e=e.substring(t.length),b(t),r=r(),s;function s(t,e){return o(function(t,e){var r=e?e.children:h,o=r[r.length-1];o&&t.type===o.type&&t.type in n&&i(o)&&i(t)&&(t=n[t.type].call(f,o,t));t!==o&&r.push(t);f.atStart&&0!==h.length&&f.exitStart();return t}(o(t),e),r)}function c(){var r=s.apply(null,arguments);return m=a.line,v=a.column,e=t+e,r}function l(){var r=o({});return m=a.line,v=a.column,e=t+e,r.position}}}};var n={text:function(t,e){return t.value+=e.value,t},blockquote:function(t,e){if(this.options.commonmark)return e;return t.children=t.children.concat(e.children),t}};function i(t){var e,r;return"text"!==t.type||!t.position||(e=t.position.start,r=t.position.end,e.line!==r.line||r.column-e.column===t.value.length)}},function(t,e,r){"use strict";var n=r(81),i=r(153),o=r(154);t.exports=function(t){var e,r,a=this.options;if(null==t)t={};else{if("object"!=typeof t)throw new Error("Invalid value `"+t+"` for setting `options`");t=n(t)}for(e in o){if(null==(r=t[e])&&(r=a[e]),"blocks"!==e&&"boolean"!=typeof r||"blocks"===e&&"object"!=typeof r)throw new Error("Invalid value `"+r+"` for setting `options."+e+"`");t[e]=r}return this.options=t,this.escape=i(t),this}},function(t){t.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},function(t,e,r){"use strict";var n=r(81),i=r(262);t.exports=function(){var t,e=String(this.file),r={line:1,column:1,offset:0},s=n(r);65279===(e=e.replace(a,o)).charCodeAt(0)&&(e=e.slice(1),s.column++,s.offset++);t={type:"root",children:this.tokenizeBlock(e,s),position:{start:r,end:this.eof||n(r)}},this.options.position||i(t,!0);return t};var o="\n",a=/\r\n|\r/g},function(t,e,r){"use strict";var n=r(73);function i(t){delete t.position}function o(t){t.position=void 0}t.exports=function(t,e){return n(t,e?i:o),t}},function(t,e,r){"use strict";t.exports=a;var n=r(114),i="skip",o=!1;function a(t,e,r,a){function s(t,c,l){var u;return(e&&!n(e,t,c,l[l.length-1]||null)||(u=r(t,l))!==o)&&t.children&&u!==i&&function(t,e){var r,n,i=a?-1:1,c=(a?t.length:-1)+i;for(;c>-1&&c<t.length;){if(r=t[c],(n=r&&s(r,c,e))===o)return n;c="number"==typeof n?n:c+i}}(t.children,l.concat(t))===o?o:u}"function"==typeof e&&"function"!=typeof r&&(a=r,r=e,e=null),s(t,null,[])}a.CONTINUE=!0,a.SKIP=i,a.EXIT=o},function(t,e,r){"use strict";var n=r(83);t.exports=function(t,e,r){var i,o,a,s,c=e.charAt(0);if("\n"!==c)return;if(r)return!0;s=1,i=e.length,o=c,a="";for(;s<i&&(c=e.charAt(s),n(c));)a+=c,"\n"===c&&(o+=a,a=""),s++;t(o)}},function(t,e,r){"use strict";var n=r(84),i=r(134);t.exports=function(t,e,r){var n,l,u,f=-1,p=e.length,h="",d="",g="",m="";for(;++f<p;)if(n=e.charAt(f),u)if(u=!1,h+=g,d+=m,g="",m="",n===o)g=n,m=n;else for(h+=n,d+=n;++f<p;){if(!(n=e.charAt(f))||n===o){m=n,g=n;break}h+=n,d+=n}else if(n===s&&e.charAt(f+1)===n&&e.charAt(f+2)===n&&e.charAt(f+3)===n)g+=c,f+=3,u=!0;else if(n===a)g+=n,u=!0;else{for(l="";n===a||n===s;)l+=n,n=e.charAt(++f);if(n!==o)break;g+=l+n,m+=n}if(d)return!!r||t(h)({type:"code",lang:null,value:i(d)})};var o="\n",a="\t",s=" ",c=n(s,4)},function(t,e,r){"use strict";var n=r(134);t.exports=function(t,e,r){var f,p,h,d,g,m,v,b,x,y,w,k=this.options,A=e.length+1,q=0,E="";if(!k.gfm)return;for(;q<A&&((h=e.charAt(q))===a||h===o);)E+=h,q++;if(y=q,(h=e.charAt(q))!==s&&h!==c)return;q++,p=h,f=1,E+=h;for(;q<A&&(h=e.charAt(q))===p;)E+=h,f++,q++;if(f<l)return;for(;q<A&&((h=e.charAt(q))===a||h===o);)E+=h,q++;d="",g="";for(;q<A&&(h=e.charAt(q))!==i&&h!==s&&h!==c;)h===a||h===o?g+=h:(d+=g+h,g=""),q++;if((h=e.charAt(q))&&h!==i)return;if(r)return!0;(w=t.now()).column+=E.length,w.offset+=E.length,E+=d,d=this.decode.raw(this.unescape(d),w),g&&(E+=g);g="",b="",x="",m="",v="";for(;q<A;)if(h=e.charAt(q),m+=b,v+=x,b="",x="",h===i){for(m?(b+=h,x+=h):E+=h,g="",q++;q<A&&(h=e.charAt(q))===a;)g+=h,q++;if(b+=g,x+=g.slice(y),!(g.length>=u)){for(g="";q<A&&(h=e.charAt(q))===p;)g+=h,q++;if(b+=g,x+=g,!(g.length<f)){for(g="";q<A&&((h=e.charAt(q))===a||h===o);)b+=h,x+=h,q++;if(!h||h===i)break}}}else m+=h,x+=h,q++;return t(E+=m+b)({type:"code",lang:d||null,value:n(v)})};var i="\n",o="\t",a=" ",s="~",c="`",l=3,u=4},function(t,e,r){"use strict";var n=r(91),i=r(135);t.exports=function(t,e,r){var l,u,f,p,h,d,g,m,v,b=this.offset,x=this.blockTokenizers,y=this.interruptBlockquote,w=t.now(),k=w.line,A=e.length,q=[],E=[],O=[],S=0;for(;S<A&&((u=e.charAt(S))===s||u===a);)S++;if(e.charAt(S)!==c)return;if(r)return!0;S=0;for(;S<A;){for(p=e.indexOf(o,S),g=S,m=!1,-1===p&&(p=A);S<A&&((u=e.charAt(S))===s||u===a);)S++;if(e.charAt(S)===c?(S++,m=!0,e.charAt(S)===s&&S++):S=g,h=e.slice(S,p),!m&&!n(h)){S=g;break}if(!m&&(f=e.slice(S),i(y,x,this,[t,f,!0])))break;d=g===S?h:e.slice(g,p),O.push(S-g),q.push(d),E.push(h),S=p+1}S=-1,A=O.length,l=t(q.join(o));for(;++S<A;)b[k]=(b[k]||0)+O[S],k++;return v=this.enterBlock(),E=this.tokenizeBlock(E.join(o),w),v(),l({type:"blockquote",children:E})};var o="\n",a="\t",s=" ",c=">"},function(t,e,r){"use strict";t.exports=function(t,e,r){var c,l,u,f=this.options,p=e.length+1,h=-1,d=t.now(),g="",m="";for(;++h<p;){if((c=e.charAt(h))!==o&&c!==i){h--;break}g+=c}u=0;for(;++h<=p;){if((c=e.charAt(h))!==a){h--;break}g+=c,u++}if(u>s)return;if(!u||!f.pedantic&&e.charAt(h+1)===a)return;p=e.length+1,l="";for(;++h<p;){if((c=e.charAt(h))!==o&&c!==i){h--;break}l+=c}if(!f.pedantic&&0===l.length&&c&&c!==n)return;if(r)return!0;g+=l,l="",m="";for(;++h<p&&(c=e.charAt(h))&&c!==n;)if(c===o||c===i||c===a){for(;c===o||c===i;)l+=c,c=e.charAt(++h);for(;c===a;)l+=c,c=e.charAt(++h);for(;c===o||c===i;)l+=c,c=e.charAt(++h);h--}else m+=l+c,l="";return d.column+=g.length,d.offset+=g.length,t(g+=m+l)({type:"heading",depth:u,children:this.tokenizeInline(m,d)})};var n="\n",i="\t",o=" ",a="#",s=6},function(t,e,r){"use strict";t.exports=function(t,e,r){var u,f,p,h,d=-1,g=e.length+1,m="";for(;++d<g&&((u=e.charAt(d))===i||u===o);)m+=u;if(u!==a&&u!==c&&u!==s)return;f=u,m+=u,p=1,h="";for(;++d<g;)if((u=e.charAt(d))===f)p++,m+=h+f,h="";else{if(u!==o)return p>=l&&(!u||u===n)?(m+=h,!!r||t(m)({type:"thematicBreak"})):void 0;h+=u}};var n="\n",i="\t",o=" ",a="*",s="_",c="-",l=3},function(t,e,r){"use strict";var n=r(91),i=r(84),o=r(102),a=r(155),s=r(271),c=r(135);t.exports=function(t,e,r){var i,a,s,g,v,b,x,y,w,O,S,L,C,T,D,N,I,j,R,U,P,z,B,V,M=this.options.commonmark,H=this.options.pedantic,G=this.blockTokenizers,F=this.interruptList,_=0,$=e.length,Z=null,Y=0;for(;_<$;){if((g=e.charAt(_))===d)Y+=m-Y%m;else{if(g!==p)break;Y++}_++}if(Y>=m)return;if(g=e.charAt(_),i=M?q:A,!0===k[g])v=g,s=!1;else{for(s=!0,a="";_<$&&(g=e.charAt(_),o(g));)a+=g,_++;if(g=e.charAt(_),!a||!0!==i[g])return;Z=parseInt(a,10),v=g}if((g=e.charAt(++_))!==p&&g!==d)return;if(r)return!0;_=0,T=[],D=[],N=[];for(;_<$;){for(b=e.indexOf(h,_),x=_,y=!1,V=!1,-1===b&&(b=$),B=_+m,Y=0;_<$;){if((g=e.charAt(_))===d)Y+=m-Y%m;else{if(g!==p)break;Y++}_++}if(Y>=m&&(V=!0),I&&Y>=I.indent&&(V=!0),g=e.charAt(_),w=null,!V){if(!0===k[g])w=g,_++,Y++;else{for(a="";_<$&&(g=e.charAt(_),o(g));)a+=g,_++;g=e.charAt(_),_++,a&&!0===i[g]&&(w=g,Y+=a.length+1)}if(w)if((g=e.charAt(_))===d)Y+=m-Y%m,_++;else if(g===p){for(B=_+m;_<B&&e.charAt(_)===p;)_++,Y++;_===B&&e.charAt(_)===p&&(_-=m-1,Y-=m-1)}else g!==h&&""!==g&&(w=null)}if(w){if(!H&&v!==w)break;y=!0}else M||V||e.charAt(x)!==p?M&&I&&(V=Y>=I.indent||Y>m):V=!0,y=!1,_=x;if(S=e.slice(x,b),O=x===_?S:e.slice(_,b),(w===l||w===u||w===f)&&G.thematicBreak.call(this,t,S,!0))break;if(L=C,C=!n(O).length,V&&I)I.value=I.value.concat(N,S),D=D.concat(N,S),N=[];else if(y)0!==N.length&&(I.value.push(""),I.trail=N.concat()),I={value:[S],indent:Y,trail:[]},T.push(I),D=D.concat(N,S),N=[];else if(C){if(L)break;N.push(S)}else{if(L)break;if(c(F,G,this,[t,S,!0]))break;I.value=I.value.concat(N,S),D=D.concat(N,S),N=[]}_=b+1}P=t(D.join(h)).reset({type:"list",ordered:s,start:Z,loose:null,children:[]}),j=this.enterList(),R=this.enterBlock(),U=!1,_=-1,$=T.length;for(;++_<$;)I=T[_].value.join(h),z=t.now(),(I=t(I)(E(this,I,z),P)).loose&&(U=!0),I=T[_].trail.join(h),_!==$-1&&(I+=h),t(I);return j(),R(),P.loose=U,P};var l="*",u="_",f="-",p=" ",h="\n",d="\t",g="x",m=4,v=/\n\n(?!\s*$)/,b=/^\[([ \t]|x|X)][ \t]/,x=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,y=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,w=/^( {1,4}|\t)?/gm,k={};k[l]=!0,k["+"]=!0,k[f]=!0;var A={".":!0},q={};function E(t,e,r){var n,i,o=t.offset,a=null;return e=(t.options.pedantic?O:S).apply(null,arguments),t.options.gfm&&(n=e.match(b))&&(i=n[0].length,a=n[1].toLowerCase()===g,o[r.line]+=i,e=e.slice(i)),{type:"listItem",loose:v.test(e)||e.charAt(e.length-1)===h,checked:a,children:t.tokenizeBlock(e,r)}}function O(t,e,r){var n=t.offset,i=r.line;return e=e.replace(y,o),i=r.line,e.replace(w,o);function o(t){return n[i]=(n[i]||0)+t.length,i++,""}}function S(t,e,r){var n,o,c,l,u,f,d,g=t.offset,m=r.line;for(l=(e=e.replace(x,function(t,e,r,a,s){o=e+r+a,c=s,Number(r)<10&&o.length%2==1&&(r=p+r);return(n=e+i(p,r.length)+a)+c})).split(h),(u=s(e,a(n).indent).split(h))[0]=c,g[m]=(g[m]||0)+o.length,m++,f=0,d=l.length;++f<d;)g[m]=(g[m]||0)+l[f].length-u[f].length,m++;return u.join(h)}q["."]=!0,q[")"]=!0},function(t,e,r){"use strict";var n=r(91),i=r(84),o=r(155);t.exports=function(t,e){var r,l,u,f,p=t.split(s),h=p.length+1,d=1/0,g=[];p.unshift(i(a,e)+"!");for(;h--;)if(l=o(p[h]),g[h]=l.stops,0!==n(p[h]).length){if(!l.indent){d=1/0;break}l.indent>0&&l.indent<d&&(d=l.indent)}if(d!==1/0)for(h=p.length;h--;){for(u=g[h],r=d;r&&!(r in u);)r--;f=0!==n(p[h]).length&&d&&r!==d?c:"",p[h]=f+p[h].slice(r in u?u[r]+1:0)}return p.shift(),p.join(s)};var a=" ",s="\n",c="\t"},function(t,e,r){"use strict";t.exports=function(t,e,r){var c,l,u,f,p,h=t.now(),d=e.length,g=-1,m="";for(;++g<d;){if((u=e.charAt(g))!==o||g>=a){g--;break}m+=u}c="",l="";for(;++g<d;){if((u=e.charAt(g))===n){g--;break}u===o||u===i?l+=u:(c+=l+u,l="")}if(h.column+=m.length,h.offset+=m.length,m+=c+l,u=e.charAt(++g),f=e.charAt(++g),u!==n||!s[f])return;m+=u,l=f,p=s[f];for(;++g<d;){if((u=e.charAt(g))!==f){if(u!==n)return;g--;break}l+=u}if(r)return!0;return t(m+l)({type:"heading",depth:p,children:this.tokenizeInline(c,h)})};var n="\n",i="\t",o=" ",a=3,s={};s["="]=1,s["-"]=2},function(t,e,r){"use strict";var n=r(156).openCloseTag;t.exports=function(t,e,r){var c,l,u,f,p,h,d,g=this.options.blocks,m=e.length,v=0,b=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+g.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(n.source+"\\s*$"),/^$/,!1]];for(;v<m&&((f=e.charAt(v))===i||f===o);)v++;if(e.charAt(v)!==s)return;c=-1===(c=e.indexOf(a,v+1))?m:c,l=e.slice(v,c),u=-1,p=b.length;for(;++u<p;)if(b[u][0].test(l)){h=b[u];break}if(!h)return;if(r)return h[2];if(v=c,!h[1].test(l))for(;v<m;){if(c=-1===(c=e.indexOf(a,v+1))?m:c,l=e.slice(v+1,c),h[1].test(l)){l&&(v=c);break}v=c}return d=e.slice(0,v),t(d)({type:"html",value:d})};var i="\t",o=" ",a="\n",s="<"},function(t,e,r){"use strict";var n=r(83),i=r(136);t.exports=d,d.notInList=!0,d.notInBlock=!0;var o="\\",a="\n",s="\t",c=" ",l="[",u="]",f="^",p=":",h=/^( {4}|\t)?/gm;function d(t,e,r){var d,g,m,v,b,x,y,w,k,A,q,E,O=this.offset;if(this.options.footnotes){for(d=0,g=e.length,m="",v=t.now(),b=v.line;d<g&&(k=e.charAt(d),n(k));)m+=k,d++;if(e.charAt(d)===l&&e.charAt(d+1)===f){for(d=(m+=l+f).length,y="";d<g&&(k=e.charAt(d))!==u;)k===o&&(y+=k,d++,k=e.charAt(d)),y+=k,d++;if(y&&e.charAt(d)===u&&e.charAt(d+1)===p){if(r)return!0;for(A=i(y),d=(m+=y+u+p).length;d<g&&((k=e.charAt(d))===s||k===c);)m+=k,d++;for(v.column+=m.length,v.offset+=m.length,y="",x="",w="";d<g;){if((k=e.charAt(d))===a){for(w=k,d++;d<g&&(k=e.charAt(d))===a;)w+=k,d++;for(y+=w,w="";d<g&&(k=e.charAt(d))===c;)w+=k,d++;if(0===w.length)break;y+=w}y&&(x+=y,y=""),x+=k,d++}return m+=x,x=x.replace(h,function(t){return O[b]=(O[b]||0)+t.length,b++,""}),q=t(m),E=this.enterBlock(),x=this.tokenizeBlock(x,v),E(),q({type:"footnoteDefinition",identifier:A,children:x})}}}}},function(t,e,r){"use strict";var n=r(83),i=r(136);t.exports=b,b.notInList=!0,b.notInBlock=!0;var o='"',a="'",s="\\",c="\n",l="\t",u=" ",f="[",p="]",h="(",d=")",g=":",m="<",v=">";function b(t,e,r){for(var n,v,b,w,k,A,q,E,O=this.options.commonmark,S=0,L=e.length,C="";S<L&&((w=e.charAt(S))===u||w===l);)C+=w,S++;if((w=e.charAt(S))===f){for(S++,C+=w,b="";S<L&&(w=e.charAt(S))!==p;)w===s&&(b+=w,S++,w=e.charAt(S)),b+=w,S++;if(b&&e.charAt(S)===p&&e.charAt(S+1)===g){for(A=b,S=(C+=b+p+g).length,b="";S<L&&((w=e.charAt(S))===l||w===u||w===c);)C+=w,S++;if(b="",n=C,(w=e.charAt(S))===m){for(S++;S<L&&x(w=e.charAt(S));)b+=w,S++;if((w=e.charAt(S))===x.delimiter)C+=m+b+w,S++;else{if(O)return;S-=b.length+1,b=""}}if(!b){for(;S<L&&y(w=e.charAt(S));)b+=w,S++;C+=b}if(b){for(q=b,b="";S<L&&((w=e.charAt(S))===l||w===u||w===c);)b+=w,S++;if(k=null,(w=e.charAt(S))===o?k=o:w===a?k=a:w===h&&(k=d),k){if(!b)return;for(S=(C+=b+w).length,b="";S<L&&(w=e.charAt(S))!==k;){if(w===c){if(S++,(w=e.charAt(S))===c||w===k)return;b+=c}b+=w,S++}if((w=e.charAt(S))!==k)return;v=C,C+=b+w,S++,E=b,b=""}else b="",S=C.length;for(;S<L&&((w=e.charAt(S))===l||w===u);)C+=w,S++;return(w=e.charAt(S))&&w!==c?void 0:!!r||(n=t(n).test().end,q=this.decode.raw(this.unescape(q),n,{nonTerminated:!1}),E&&(v=t(v).test().end,E=this.decode.raw(this.unescape(E),v)),t(C)({type:"definition",identifier:i(A),title:E||null,url:q}))}}}}function x(t){return t!==v&&t!==f&&t!==p}function y(t){return t!==f&&t!==p&&!n(t)}x.delimiter=v},function(t,e,r){"use strict";var n=r(83);t.exports=function(t,e,r){var b,x,y,w,k,A,q,E,O,S,L,C,T,D,N,I,j,R,U,P,z,B,V,M;if(!this.options.gfm)return;b=0,R=0,A=e.length+1,q=[];for(;b<A;){if(B=e.indexOf(u,b),V=e.indexOf(s,b+1),-1===B&&(B=e.length),-1===V||V>B){if(R<h)return;break}q.push(e.slice(b,B)),R++,b=B+1}w=q.join(u),x=q.splice(1,1)[0]||[],b=0,A=x.length,R--,y=!1,L=[];for(;b<A;){if((O=x.charAt(b))===s){if(S=null,!1===y){if(!1===M)return}else L.push(y),y=!1;M=!1}else if(O===a)S=!0,y=y||v;else if(O===c)y=y===d?g:S&&y===v?m:d;else if(!n(O))return;b++}!1!==y&&L.push(y);if(L.length<p)return;if(r)return!0;j=-1,P=[],z=t(w).reset({type:"table",align:L,children:P});for(;++j<R;){for(U=q[j],k={type:"tableRow",children:[]},j&&t(u),t(U).reset(k,z),A=U.length+1,b=0,E="",C="",T=!0,D=null,N=null;b<A;)if((O=U.charAt(b))!==f&&O!==l){if(""===O||O===s)if(T)t(O);else{if(O&&N){E+=O,b++;continue}!C&&!O||T||(w=C,E.length>1&&(O?(w+=E.slice(0,E.length-1),E=E.charAt(E.length-1)):(w+=E,E="")),I=t.now(),t(w)({type:"tableCell",children:this.tokenizeInline(C,I)},k)),t(E+O),E="",C=""}else if(E&&(C+=E,E=""),C+=O,O===i&&b!==A-2&&(C+=U.charAt(b+1),b++),O===o){for(D=1;U.charAt(b+1)===O;)C+=O,b++,D++;N?D>=N&&(N=0):N=D}T=!1,b++}else C?E+=O:t(O),b++;j||t(u+x)}return z};var i="\\",o="`",a="-",s="|",c=":",l=" ",u="\n",f="\t",p=1,h=2,d="left",g="center",m="right",v=null},function(t,e,r){"use strict";var n=r(91),i=r(102),o=r(134),a=r(135);t.exports=function(t,e,r){var f,p,h,d,g,m=this.options,v=m.commonmark,b=m.gfm,x=this.blockTokenizers,y=this.interruptParagraph,w=e.indexOf(s),k=e.length;for(;w<k;){if(-1===w){w=k;break}if(e.charAt(w+1)===s)break;if(v){for(d=0,f=w+1;f<k;){if((h=e.charAt(f))===c){d=u;break}if(h!==l)break;d++,f++}if(d>=u){w=e.indexOf(s,w+1);continue}}if(p=e.slice(w+1),a(y,x,this,[t,p,!0]))break;if(x.list.call(this,t,p,!0)&&(this.inList||v||b&&!i(n.left(p).charAt(0))))break;if(f=w,-1!==(w=e.indexOf(s,w+1))&&""===n(e.slice(f,w))){w=f;break}}if(p=e.slice(0,w),""===n(p))return t(p),null;if(r)return!0;return g=t.now(),p=o(p),t(p)({type:"paragraph",children:this.tokenizeInline(p,g)})};var s="\n",c="\t",l=" ",u=4},function(t,e,r){"use strict";var n=r(279);function i(t,e,r){var n,i;if("\\"===e.charAt(0)&&(n=e.charAt(1),-1!==this.escape.indexOf(n)))return!!r||(i="\n"===n?{type:"break"}:{type:"text",value:n},t("\\"+n)(i))}t.exports=i,i.locator=n},function(t,e,r){"use strict";t.exports=function(t,e){return t.indexOf("\\",e)}},function(t,e,r){"use strict";var n=r(83),i=r(113),o=r(158);t.exports=p,p.locator=o,p.notInLink=!0;var a="<",s=">",c="@",l="/",u="mailto:",f=u.length;function p(t,e,r){var o,p,h,d,g,m,v,b,x,y,w;if(e.charAt(0)===a){for(this,o="",p=e.length,h=0,d="",m=!1,v="",h++,o=a;h<p&&(g=e.charAt(h),!(n(g)||g===s||g===c||":"===g&&e.charAt(h+1)===l));)d+=g,h++;if(d){if(v+=d,d="",v+=g=e.charAt(h),h++,g===c)m=!0;else{if(":"!==g||e.charAt(h+1)!==l)return;v+=l,h++}for(;h<p&&(g=e.charAt(h),!n(g)&&g!==s);)d+=g,h++;if(g=e.charAt(h),d&&g===s)return!!r||(x=v+=d,o+=v+g,(b=t.now()).column++,b.offset++,m&&(v.slice(0,f).toLowerCase()===u?(x=x.substr(f),b.column+=f,b.offset+=f):v=u+v),y=this.inlineTokenizers,this.inlineTokenizers={text:y.text},w=this.enterLink(),x=this.tokenizeInline(x,b),this.inlineTokenizers=y,w(),t(o)({type:"link",title:null,url:i(v,{nonTerminated:!1}),children:x}))}}}},function(t,e,r){"use strict";var n=r(113),i=r(83),o=r(282);t.exports=g,g.locator=o,g.notInLink=!0;var a="[",s="]",c="(",l=")",u="<",f="@",p="mailto:",h=["http://","https://",p],d=h.length;function g(t,e,r){var o,g,m,v,b,x,y,w,k,A,q,E;if(this.options.gfm){for(o="",v=-1,w=d;++v<w;)if(x=h[v],(y=e.slice(0,x.length)).toLowerCase()===x){o=y;break}if(o){for(v=o.length,w=e.length,k="",A=0;v<w&&(m=e.charAt(v),!i(m)&&m!==u)&&("."!==m&&","!==m&&":"!==m&&";"!==m&&'"'!==m&&"'"!==m&&")"!==m&&"]"!==m||(q=e.charAt(v+1))&&!i(q))&&(m!==c&&m!==a||A++,m!==l&&m!==s||!(--A<0));)k+=m,v++;if(k){if(g=o+=k,x===p){if(-1===(b=k.indexOf(f))||b===w-1)return;g=g.substr(p.length)}return!!r||(E=this.enterLink(),g=this.tokenizeInline(g,t.now()),E(),t(o)({type:"link",title:null,url:n(o,{nonTerminated:!1}),children:g}))}}}}},function(t,e,r){"use strict";t.exports=function(t,e){var r,i=n.length,o=-1,a=-1;if(!this.options.gfm)return-1;for(;++o<i;)-1!==(r=t.indexOf(n[o],e))&&(r<a||-1===a)&&(a=r);return a};var n=["https://","http://","mailto:"]},function(t,e,r){"use strict";var n=r(152),i=r(158),o=r(156).tag;t.exports=c,c.locator=i;var a=/^<a /i,s=/^<\/a>/i;function c(t,e,r){var i,c,l=e.length;if(!("<"!==e.charAt(0)||l<3)&&(i=e.charAt(1),(n(i)||"?"===i||"!"===i||"/"===i)&&(c=e.match(o))))return!!r||(c=c[0],!this.inLink&&a.test(c)?this.inLink=!0:this.inLink&&s.test(c)&&(this.inLink=!1),t(c)({type:"html",value:c}))}},function(t,e,r){"use strict";var n=r(83),i=r(159);t.exports=m,m.locator=i;var o={}.hasOwnProperty,a="\\",s="[",c="]",l="(",u=")",f="<",p=">",h="`",d={'"':'"',"'":"'"},g={};function m(t,e,r){var i,m,v,b,x,y,w,k,A,q,E,O,S,L,C,T,D,N,I,j="",R=0,U=e.charAt(0),P=this.options.pedantic,z=this.options.commonmark,B=this.options.gfm;if("!"===U&&(A=!0,j=U,U=e.charAt(++R)),U===s&&(A||!this.inLink)){for(j+=U,C="",R++,O=e.length,L=0,(D=t.now()).column+=R,D.offset+=R;R<O;){if(y=U=e.charAt(R),U===h){for(m=1;e.charAt(R+1)===h;)y+=U,R++,m++;v?m>=v&&(v=0):v=m}else if(U===a)R++,y+=e.charAt(R);else if(v&&!B||U!==s){if((!v||B)&&U===c){if(!L){if(!P)for(;R<O&&(U=e.charAt(R+1),n(U));)y+=U,R++;if(e.charAt(R+1)!==l)return;y+=l,i=!0,R++;break}L--}}else L++;C+=y,y="",R++}if(i){for(q=C,j+=C+y,R++;R<O&&(U=e.charAt(R),n(U));)j+=U,R++;if(U=e.charAt(R),k=z?g:d,C="",b=j,U===f){for(R++,b+=f;R<O&&(U=e.charAt(R))!==p;){if(z&&"\n"===U)return;C+=U,R++}if(e.charAt(R)!==p)return;j+=f+C+p,T=C,R++}else{for(U=null,y="";R<O&&(U=e.charAt(R),!y||!o.call(k,U));){if(n(U)){if(!P)break;y+=U}else{if(U===l)L++;else if(U===u){if(0===L)break;L--}C+=y,y="",U===a&&(C+=a,U=e.charAt(++R)),C+=U}R++}T=C,R=(j+=C).length}for(C="";R<O&&(U=e.charAt(R),n(U));)C+=U,R++;if(U=e.charAt(R),j+=C,C&&o.call(k,U))if(R++,j+=U,C="",E=k[U],x=j,z){for(;R<O&&(U=e.charAt(R))!==E;)U===a&&(C+=a,U=e.charAt(++R)),R++,C+=U;if((U=e.charAt(R))!==E)return;for(S=C,j+=C+U,R++;R<O&&(U=e.charAt(R),n(U));)j+=U,R++}else for(y="";R<O;){if((U=e.charAt(R))===E)w&&(C+=E+y,y=""),w=!0;else if(w){if(U===u){j+=C+E+y,S=C;break}n(U)?y+=U:(C+=E+y+U,y="",w=!1)}else C+=U;R++}if(e.charAt(R)===u)return!!r||(j+=u,T=this.decode.raw(this.unescape(T),t(b).test().end,{nonTerminated:!1}),S&&(x=t(x).test().end,S=this.decode.raw(this.unescape(S),x)),I={type:A?"image":"link",title:S||null,url:T},A?I.alt=this.decode.raw(this.unescape(q),D)||null:(N=this.enterLink(),I.children=this.tokenizeInline(q,D),N()),t(j)(I))}}}g['"']='"',g["'"]="'",g[l]=u},function(t,e,r){"use strict";var n=r(83),i=r(159),o=r(136);t.exports=m,m.locator=i;var a="link",s="image",c="footnote",l="shortcut",u="collapsed",f="full",p="^",h="\\",d="[",g="]";function m(t,e,r){var i,m,v,b,x,y,w,k,A=e.charAt(0),q=0,E=e.length,O="",S="",L=a,C=l;if("!"===A&&(L=s,S=A,A=e.charAt(++q)),A===d){if(q++,S+=A,y="",this.options.footnotes&&e.charAt(q)===p){if(L===s)return;S+=p,q++,L=c}for(k=0;q<E;){if((A=e.charAt(q))===d)w=!0,k++;else if(A===g){if(!k)break;k--}A===h&&(y+=h,A=e.charAt(++q)),y+=A,q++}if(O=y,i=y,(A=e.charAt(q))===g){for(q++,O+=A,y="";q<E&&(A=e.charAt(q),n(A));)y+=A,q++;if(A=e.charAt(q),L!==c&&A===d){for(m="",y+=A,q++;q<E&&(A=e.charAt(q))!==d&&A!==g;)A===h&&(m+=h,A=e.charAt(++q)),m+=A,q++;(A=e.charAt(q))===g?(C=m?f:u,y+=m+A,q++):m="",O+=y,y=""}else{if(!i)return;m=i}if(C===f||!w)return O=S+O,L===a&&this.inLink?null:!!r||(L===c&&-1!==i.indexOf(" ")?t(O)({type:"footnote",children:this.tokenizeInline(i,t.now())}):((v=t.now()).column+=S.length,v.offset+=S.length,b={type:L+"Reference",identifier:o(m=C===f?m:i)},L!==a&&L!==s||(b.referenceType=C),L===a?(x=this.enterLink(),b.children=this.tokenizeInline(i,v),x()):L===s&&(b.alt=this.decode.raw(this.unescape(i),v)||null),t(O)(b)))}}}},function(t,e,r){"use strict";var n=r(91),i=r(83),o=r(287);t.exports=c,c.locator=o;var a="*",s="_";function c(t,e,r){var o,c,l,u,f,p,h,d=0,g=e.charAt(d);if(!(g!==a&&g!==s||e.charAt(++d)!==g||(c=this.options.pedantic,f=(l=g)+l,p=e.length,d++,u="",g="",c&&i(e.charAt(d)))))for(;d<p;){if(h=g,!((g=e.charAt(d))!==l||e.charAt(d+1)!==l||c&&i(h))&&(g=e.charAt(d+2))!==l){if(!n(u))return;return!!r||((o=t.now()).column+=2,o.offset+=2,t(f+u+f)({type:"strong",children:this.tokenizeInline(u,o)}))}c||"\\"!==g||(u+=g,g=e.charAt(++d)),u+=g,d++}}},function(t,e,r){"use strict";t.exports=function(t,e){var r=t.indexOf("**",e),n=t.indexOf("__",e);if(-1===n)return r;if(-1===r)return n;return n<r?n:r}},function(t,e,r){"use strict";var n=r(91),i=r(289),o=r(83),a=r(290);t.exports=l,l.locator=a;var s="*",c="_";function l(t,e,r){var a,l,u,f,p,h,d,g=0,m=e.charAt(g);if(!(m!==s&&m!==c||(l=this.options.pedantic,p=m,u=m,h=e.length,g++,f="",m="",l&&o(e.charAt(g)))))for(;g<h;){if(d=m,!((m=e.charAt(g))!==u||l&&o(d))){if((m=e.charAt(++g))!==u){if(!n(f)||d===u)return;if(!l&&u===c&&i(m)){f+=u;continue}return!!r||((a=t.now()).column++,a.offset++,t(p+f+u)({type:"emphasis",children:this.tokenizeInline(f,a)}))}f+=u}l||"\\"!==m||(f+=m,m=e.charAt(++g)),f+=m,g++}}},function(t,e,r){"use strict";t.exports=function(t){return i.test("number"==typeof t?n(t):t.charAt(0))};var n=String.fromCharCode,i=/\w/},function(t,e,r){"use strict";t.exports=function(t,e){var r=t.indexOf("*",e),n=t.indexOf("_",e);if(-1===n)return r;if(-1===r)return n;return n<r?n:r}},function(t,e,r){"use strict";var n=r(83),i=r(292);t.exports=s,s.locator=i;var o="~",a="~~";function s(t,e,r){var i,s,c,l="",u="",f="",p="";if(this.options.gfm&&e.charAt(0)===o&&e.charAt(1)===o&&!n(e.charAt(2)))for(i=1,s=e.length,(c=t.now()).column+=2,c.offset+=2;++i<s;){if(!((l=e.charAt(i))!==o||u!==o||f&&n(f)))return!!r||t(a+p+a)({type:"delete",children:this.tokenizeInline(p,c)});p+=u,f=u,u=l}}},function(t,e,r){"use strict";t.exports=function(t,e){return t.indexOf("~~",e)}},function(t,e,r){"use strict";var n=r(83),i=r(294);t.exports=a,a.locator=i;var o="`";function a(t,e,r){for(var i,a,s,c,l,u,f,p,h=e.length,d=0,g="",m="";d<h&&e.charAt(d)===o;)g+=o,d++;if(g){for(l=g,c=d,g="",p=e.charAt(d),s=0;d<h;){if(u=p,p=e.charAt(d+1),u===o?(s++,m+=u):(s=0,g+=u),s&&p!==o){if(s===c){l+=g+m,f=!0;break}g+=m,m=""}d++}if(!f){if(c%2!=0)return;g=""}if(r)return!0;for(i="",a="",h=g.length,d=-1;++d<h;)u=g.charAt(d),n(u)?a+=u:(a&&(i&&(i+=a),a=""),i+=u);return t(l)({type:"inlineCode",value:i})}}},function(t,e,r){"use strict";t.exports=function(t,e){return t.indexOf("`",e)}},function(t,e,r){"use strict";var n=r(296);t.exports=o,o.locator=n;var i=2;function o(t,e,r){for(var n,o=e.length,a=-1,s="";++a<o;){if("\n"===(n=e.charAt(a))){if(a<i)return;return!!r||t(s+=n)({type:"break"})}if(" "!==n)return;s+=n}}},function(t,e,r){"use strict";t.exports=function(t,e){var r=t.indexOf("\n",e);for(;r>e&&" "===t.charAt(r-1);)r--;return r}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n,i,o,a,s,c,l,u,f,p;if(r)return!0;n=this.inlineMethods,a=n.length,i=this.inlineTokenizers,o=-1,f=e.length;for(;++o<a;)"text"!==(u=n[o])&&i[u]&&((l=i[u].locator)||t.file.fail("Missing locator: `"+u+"`"),-1!==(c=l.call(this,e,1))&&c<f&&(f=c));s=e.slice(0,f),p=t.now(),this.decode(s,p,function(e,r,n){t(n||e)({type:"text",value:e})})}},function(t,e,r){"use strict";var n=r(147),i=r(81),o=r(299);function a(t){var e=n(o);e.prototype.options=i(e.prototype.options,this.data("settings"),t),this.Compiler=e}t.exports=a,a.Compiler=o},function(t,e,r){"use strict";var n=r(81),i=r(148);function o(t,e){this.inLink=!1,this.inTable=!1,this.tree=t,this.file=e,this.options=n(this.options),this.setOptions({})}t.exports=o;var a=o.prototype;a.enterLink=i("inLink",!1),a.enterTable=i("inTable",!1),a.enterLinkReference=r(300),a.options=r(161),a.setOptions=r(301),a.compile=r(306),a.visit=r(308),a.all=r(309),a.block=r(310),a.visitOrderedItems=r(311),a.visitUnorderedItems=r(312),a.visitors={root:r(313),text:r(314),heading:r(315),paragraph:r(316),blockquote:r(317),list:r(318),listItem:r(319),inlineCode:r(320),code:r(321),html:r(322),thematicBreak:r(323),strong:r(324),emphasis:r(325),break:r(326),delete:r(327),link:r(328),linkReference:r(329),imageReference:r(331),definition:r(332),image:r(333),footnote:r(334),footnoteReference:r(335),footnoteDefinition:r(336),table:r(337),tableCell:r(339)}},function(t,e,r){"use strict";var n=r(160);t.exports=function(t,e){var r=t.encode,i=t.escape,o=t.enterLink();if("shortcut"!==e.referenceType&&"collapsed"!==e.referenceType)return o;return t.escape=n,t.encode=n,function(){t.encode=r,t.escape=i,o()}}},function(t,e,r){"use strict";var n=r(81),i=r(137),o=r(161),a=r(304),s=r(160);t.exports=function(t){var e,r,f=this.options;if(null==t)t={};else{if("object"!=typeof t)throw new Error("Invalid value `"+t+"` for setting `options`");t=n(t)}for(r in o)l[typeof o[r]](t,r,f[r],c[r]);(e=t.ruleRepetition)&&e<3&&u(e,"options.ruleRepetition");return this.encode=function(t){var e={};return"false"===t?s:("true"===t&&(e.useNamedReferences=!0),"escape"===t&&(e.escapeOnly=!0,e.useNamedReferences=!0),function(t){return i(t,e)})}(String(t.entities)),this.escape=a(t),this.options=t,this};var c={entities:{true:!0,false:!0,numbers:!0,escape:!0},bullet:{"*":!0,"-":!0,"+":!0},rule:{"-":!0,_:!0,"*":!0},listItemIndent:{tab:!0,mixed:!0,1:!0},emphasis:{_:!0,"*":!0},strong:{_:!0,"*":!0},fence:{"`":!0,"~":!0}},l={boolean:function(t,e,r){var n=t[e];null==n&&(n=r);"boolean"!=typeof n&&u(n,"options."+e);t[e]=n},string:function(t,e,r,n){var i=t[e];null==i&&(i=r);(i=String(i))in n||u(i,"options."+e);t[e]=i},number:function(t,e,r){var n=t[e];null==n&&(n=r);isNaN(n)&&u(n,"options."+e);t[e]=n},function:function(t,e,r){var n=t[e];null==n&&(n=r);"function"!=typeof n&&u(n,"options."+e);t[e]=n}};function u(t,e){throw new Error("Invalid value `"+t+"` for setting `"+e+"`")}},function(t){t.exports={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"}},function(t){t.exports=["cent","copy","divide","gt","lt","not","para","times"]},function(t,e,r){"use strict";var n=r(102),i=r(305),o=r(83),a=r(153),s=r(162);t.exports=function(t){return function(e,r,u){var g,m,v,b,x,y,w=t.gfm,k=t.commonmark,A=t.pedantic,q=k?[".",")"]:["."],E=u&&u.children,O=E&&E.indexOf(r),S=E&&E[O-1],L=E&&E[O+1],C=e.length,T=a(t),D=-1,N=[],I=N;g=S?h(S)&&/\n\s*$/.test(S.value):!u||"root"===u.type||"paragraph"===u.type;function j(t){return-1===T.indexOf(t)?f[t]:c+t}for(;++D<C;){if(m=e.charAt(D),y=!1,"\n"===m)g=!0;else if(m===c||"`"===m||"*"===m||"["===m||"<"===m||"&"===m&&s(e.slice(D))>0||"]"===m&&this.inLink||w&&"~"===m&&"~"===e.charAt(D+1)||w&&"|"===m&&(this.inTable||p(e,D))||"_"===m&&D>0&&D<C-1&&(A||!i(e.charAt(D-1))||!i(e.charAt(D+1)))||w&&!this.inLink&&":"===m&&d(N.join("")))y=!0;else if(g)if(">"===m||"#"===m||-1!==l.indexOf(m))y=!0;else if(n(m)){for(x=D+1;x<C&&n(e.charAt(x));)x++;-1!==q.indexOf(e.charAt(x))&&((L=e.charAt(x+1))&&" "!==L&&"\t"!==L&&"\n"!==L||(N.push(e.slice(D,x)),D=x,m=e.charAt(D),y=!0))}g&&!o(m)&&(g=!1),N.push(y?j(m):m)}if(E&&h(r)){if(S&&"shortcut"===S.referenceType){for(D=-1,C=I.length;++D<C;)if(" "!==(m=I[D])&&"\t"!==m){"("!==m&&":"!==m||(I[D]=j(m));break}h(L)&&D===C&&"("===L.value.charAt(0)&&I.push(c)}w&&!this.inLink&&h(S)&&":"===e.charAt(0)&&d(S.value.slice(-6))&&(I[0]=j(":")),h(L)&&"&"===e.charAt(C-1)&&0!==s("&"+L.value)&&(I[I.length-1]=j("&")),w&&h(L)&&"~"===e.charAt(C-1)&&"~"===L.value.charAt(0)&&I.splice(I.length-1,0,c),v=h(S)&&i(S.value.slice(-1)),b=h(L)&&i(L.value.charAt(0)),1===C?"_"!==e||!A&&v&&b||I.unshift(c):("_"!==e.charAt(0)||!A&&v&&i(e.charAt(1))||I.unshift(c),"_"!==e.charAt(C-1)||!A&&b&&i(e.charAt(C-2))||I.splice(I.length-1,0,c))}return I.join("")}};var c="\\",l=["*","-","+"],u=[":","-"," ","|"],f={"<":"&lt;",":":"&#x3A;","&":"&amp;","|":"&#x7C;","~":"&#x7E;"};function p(t,e){var r=t.lastIndexOf("\n",e),n=t.indexOf("\n",e);for(r=-1===r?-1:r,n=-1===n?t.length:n;++r<n;)if(-1===u.indexOf(t.charAt(r)))return!1;return!0}function h(t){return t&&"text"===t.type}function d(t){var e=t.slice(-6).toLowerCase();return"mailto"===e||"https"===e.slice(-5)||"http"===e.slice(-4)}},function(t,e,r){"use strict";t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return!/[^0-9a-z\xDF-\xFF]/.test(t.toLowerCase())}},function(t,e,r){"use strict";var n=r(307);t.exports=function(){return this.visit(n(this.tree,this.options.commonmark))}},function(t,e,r){"use strict";var n=r(73);function i(t,e){var r,n;return"text"===t.type?!t.position||(r=t.position.start,n=t.position.end,r.line!==n.line||n.column-r.column===t.value.length):e&&"blockquote"===t.type}t.exports=function(t,e){return n(t,function(t,r,n){var o=n?n.children:[],a=r&&o[r-1];if(a&&t.type===a.type&&i(a,e)&&i(t,e))return t.value&&(a.value+=t.value),t.children&&(a.children=a.children.concat(t.children)),o.splice(r,1),a.position&&t.position&&(a.position.end=t.position.end),r}),t}},function(t,e,r){"use strict";t.exports=function(t,e){var r=this.visitors;"function"!=typeof r[t.type]&&this.file.fail(new Error("Missing compiler for node of type `"+t.type+"`: `"+t+"`"),t);return r[t.type].call(this,t,e)}},function(t,e,r){"use strict";t.exports=function(t){var e=t.children,r=e.length,n=[],i=-1;for(;++i<r;)n[i]=this.visit(e[i],t);return n}},function(t,e,r){"use strict";t.exports=function(t){var e,r,n=[],i=t.children,o=i.length,a=-1;for(;++a<o;)e=i[a],r&&(e.type===r.type&&"list"===r.type?n.push(r.ordered===e.ordered?"\n\n\n":"\n\n"):"list"!==r.type||"code"!==e.type||e.lang?n.push("\n\n"):n.push("\n\n\n")),n.push(this.visit(e,t)),r=e;return n.join("")}},function(t,e,r){"use strict";t.exports=function(t){var e,r=this.visitors.listItem,n=this.options.incrementListMarker,i=[],o=t.start,a=t.children,s=a.length,c=-1;for(;++c<s;)e=(n?o+c:o)+".",i[c]=r.call(this,a[c],t,c,e);return i.join("\n")}},function(t,e,r){"use strict";t.exports=function(t){var e=this.options.bullet,r=this.visitors.listItem,n=t.children,i=n.length,o=-1,a=[];for(;++o<i;)a[o]=r.call(this,n[o],t,o,e);return a.join("\n")}},function(t,e,r){"use strict";t.exports=function(t){return this.block(t)+"\n"}},function(t,e,r){"use strict";t.exports=function(t,e){return this.encode(this.escape(t.value,t,e),t)}},function(t,e,r){"use strict";var n=r(84);t.exports=function(t){var e,r=t.depth,i=this.options.setext,o=this.options.closeAtx,a=this.all(t).join("");if(i&&r<3)return a+"\n"+n(1===r?"=":"-",a.length);return(e=n("#",t.depth))+" "+a+(o?" "+e:"")}},function(t,e,r){"use strict";t.exports=function(t){return this.all(t).join("")}},function(t,e,r){"use strict";t.exports=function(t){var e,r=this.block(t).split("\n"),n=[],i=r.length,o=-1;for(;++o<i;)e=r[o],n[o]=(e?" ":"")+e;return">"+n.join("\n>")}},function(t,e,r){"use strict";t.exports=function(t){return this[n[t.ordered]](t)};var n={true:"visitOrderedItems",false:"visitUnorderedItems"}},function(t,e,r){"use strict";var n=r(84),i=r(163);t.exports=function(t,e,r,a){var s,c,l,u=this.options.listItemIndent,f=t.loose,p=t.children,h=p.length,d=[],g=-1;for(;++g<h;)d[g]=this.visit(p[g],t);s=o[t.checked]+d.join(f?"\n\n":"\n"),"1"===u||"mixed"===u&&-1===s.indexOf("\n")?(c=a.length+1,l=" "):(c=4*Math.ceil((a.length+1)/4),l=n(" ",c-a.length));s=a+l+i(s,c/4).slice(c),f&&e.children.length-1!==r&&(s+="\n");return s};var o={undefined:"",null:"",true:"[x] ",false:"[ ] "}},function(t,e,r){"use strict";var n=r(164),i=r(84);t.exports=function(t){var e=t.value,r=i("`",n(e,"`")+1),o=r,a=r;"`"===e.charAt(0)&&(o+=" ");"`"===e.charAt(e.length-1)&&(a=" "+a);return o+e+a}},function(t,e,r){"use strict";var n=r(164),i=r(84),o=r(163);t.exports=function(t,e){var r,a=t.value,s=this.options,c=s.fence,l=this.encode(t.lang||"",t);if(!l&&!s.fences&&a)return e&&"listItem"===e.type&&"tab"!==s.listItemIndent&&s.pedantic&&this.file.fail("Cannot indent code properly. See http://git.io/vgFvT",t.position),o(a,1);return(r=i(c,Math.max(n(a,c)+1,3)))+l+"\n"+a+"\n"+r}},function(t,e,r){"use strict";t.exports=function(t){return t.value}},function(t,e,r){"use strict";var n=r(84);t.exports=function(){var t=this.options,e=n(t.rule,t.ruleRepetition);return t.ruleSpaces?e.split("").join(" "):e}},function(t,e,r){"use strict";var n=r(84);t.exports=function(t){var e=n(this.options.strong,2);return e+this.all(t).join("")+e}},function(t,e,r){"use strict";t.exports=function(t){var e=this.options.emphasis;return e+this.all(t).join("")+e}},function(t,e,r){"use strict";t.exports=function(){return n[this.options.commonmark]};var n={true:"\\\n",false:"  \n"}},function(t,e,r){"use strict";t.exports=function(t){return"~~"+this.all(t).join("")+"~~"}},function(t,e,r){"use strict";var n=r(138),i=r(139);t.exports=function(t){var e=this.encode(t.url||"",t),r=this.enterLink(),a=this.encode(this.escape(t.url||"",t)),s=this.all(t).join("");if(r(),null==t.title&&o.test(e)&&(a===s||a==="mailto:"+s))return n(this.encode(t.url),!0);e=n(e),t.title&&(e+=" "+i(this.encode(this.escape(t.title,t),t)));return"["+s+"]("+e+")"};var o=/^[a-z][a-z+.-]+:\/?/i},function(t,e,r){"use strict";var n=r(330),i=r(166);t.exports=function(t){var e=t.referenceType,r=this.enterLinkReference(this,t),o=this.all(t).join("");r(),("shortcut"===e||"collapsed"===e)&&(o=n(o,t.identifier));return"["+o+"]"+i(t)}},function(t,e,r){"use strict";var n=r(162);t.exports=function(t,e){var r,o=t.length,a=e.length,s=[],c=0,l=0;for(;l<o;){for(r=l;l<o&&!i.test(t.charAt(l));)l+=1;for(s.push(t.slice(r,l));c<a&&!i.test(e.charAt(c));)c+=1;for(r=c;c<a&&i.test(e.charAt(c));)"&"===e.charAt(c)&&(c+=n(e.slice(c))),c+=1;for(s.push(e.slice(r,c));l<o&&i.test(t.charAt(l));)l+=1}return s.join("")};var i=/[-!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~_]/},function(t,e,r){"use strict";var n=r(166);t.exports=function(t){return"!["+(this.encode(t.alt,t)||"")+"]"+n(t)}},function(t,e,r){"use strict";var n=r(138),i=r(139);t.exports=function(t){var e=n(t.url);t.title&&(e+=" "+i(t.title));return"["+t.identifier+"]: "+e}},function(t,e,r){"use strict";var n=r(138),i=r(139);t.exports=function(t){var e=n(this.encode(t.url||"",t)),r=this.enterLink(),o=this.encode(this.escape(t.alt||"",t));r(),t.title&&(e+=" "+i(this.encode(t.title,t)));return"!["+o+"]("+e+")"}},function(t,e,r){"use strict";t.exports=function(t){return"[^"+this.all(t).join("")+"]"}},function(t,e,r){"use strict";t.exports=function(t){return"[^"+t.identifier+"]"}},function(t,e,r){"use strict";var n=r(84);t.exports=function(t){var e=t.identifier.toLowerCase(),r=this.all(t).join("\n\n"+n(" ",4));return"[^"+e+"]: "+r}},function(t,e,r){"use strict";var n=r(338);t.exports=function(t){var e,r,i=this.options,o=i.looseTable,a=i.spacedTable,s=i.paddedTable,c=i.stringLength,l=t.children,u=l.length,f=this.enterTable(),p=[];for(;u--;)p[u]=this.all(l[u]);f(),o?(e="",r=""):a?(e="| ",r=" |"):(e="|",r="|");return n(p,{align:t.align,pad:s,start:e,end:r,stringLength:c,delimiter:a?" | ":"|"})}},function(t,e,r){"use strict";t.exports=function(t,e){var r,i,w,k,A,q,E,O,S,L,C,T,D=e||{},N=D.delimiter,I=D.start,j=D.end,R=D.align,U=D.stringLength||b,P=0,z=-1,B=t.length,V=[];R=R?R.concat():[],null==N&&(N=g+d+g);null==I&&(I=d+g);null==j&&(j=g+d);for(;++z<B;)for(k=t[z],q=-1,k.length>P&&(P=k.length);++q<P;)E=k[q]?y(k[q]):null,V[q]||(V[q]=f),E>V[q]&&(V[q]=E);"string"==typeof R&&(R=x(P,R).split(""));q=-1;for(;++q<P;)"string"==typeof(r=R[q])&&(r=r.charAt(0).toLowerCase()),-1===u.indexOf(r)&&(r=l),R[q]=r;z=-1,w=[];for(;++z<B;){for(k=t[z],q=-1,A=[];++q<P;)S=v(S=k[q]),R[q]===c?(E=y(S),O=V[q]+(n.test(S)?0:1)-(U(S)-E),A[q]=S+x(O-1)):A[q]=S;w[z]=A}V=[],z=-1;for(;++z<B;)for(A=w[z],q=-1;++q<P;)S=A[q],V[q]||(V[q]=f),(O=U(S))>V[q]&&(V[q]=O);z=-1;for(;++z<B;){if(A=w[z],q=-1,!1!==D.pad)for(;++q<P;)S=A[q],E=V[q]-(U(S)||0),L=x(E),R[q]===a||R[q]===c?S=L+S:R[q]===s?((E/=2)%1==0?(C=E,T=E):(C=E+.5,T=E-.5),S=x(C)+S+x(T)):S+=L,A[q]=S;w[z]=A.join(N)}if(!1!==D.rule){for(q=-1,i=[];++q<P;)!1===D.pad?(S=t[0][q],L=(L=U(v(S)))>f?L:f):L=V[q],r=R[q],S=r===a||r===l?h:p,S+=x(L-2,h),S+=r!==o&&r!==l?p:h,i[q]=S;w.splice(1,0,i.join(N))}return I+w.join(j+m+I)+j};var n=/\./,i=/\.[^.]*$/,o="l",a="r",s="c",c=".",l="",u=[o,a,s,c,l],f=3,p=":",h="-",d="|",g=" ",m="\n";function v(t){return null==t?"":String(t)}function b(t){return String(t).length}function x(t,e){return new Array(t+1).join(e||g)}function y(t){var e=i.exec(t);return e?e.index+1:t.length}},function(t,e,r){"use strict";t.exports=function(t){return this.all(t).join("")}},function(t,e,r){"use strict";var n=r(341);function i(){return n({name:"lint",source:"remark-lint"})}t.exports=function(){this.use(i)}},function(t,e,r){"use strict";var n=r(342),i=r(343),o=r(81);t.exports=function(t){var e=t||{};return n(o(t,{marker:e.marker||i,test:e.test||"html"}))}},function(t,e,r){"use strict";var n=r(91),i=r(112),o=r(73),a={enable:!0,disable:!0,ignore:!0};t.exports=function(t){var e,r,s,c,l,u=t&&t.name,f=t&&t.marker,p=t&&t.test;if(!u)throw new Error("Expected `name` in `options`, got `"+u+"`");if(!f)throw new Error("Expected `name` in `options`, got `"+u+"`");if(!p)throw new Error("Expected `test` in `options`, got `"+p+"`");r=t.known,s=t.reset,c=t.enable||[],l=t.disable||[],(e=t.source)?"string"==typeof e&&(e=[e]):e=[u];return function(u,h){var d=i(h).toOffset,g=!s,m=function(t,e){var r=t.children[t.children.length-1],i=0,a=!1,s=[];o(t,function(t){var e=t.position;c(e&&e.start&&e.start.offset),t.children||c(e&&e.end&&e.end.offset)}),r&&r.position&&r.position.end&&i===r.position.end.offset&&""!==n(e.toString().slice(i))&&(c(),c(t&&t.position&&t.position.end&&t.position.end.offset-1));return s;function c(t){null!=t?i>=t||(a&&(s.push({start:i,end:t}),a=!1),i=t):a=!0}}(u,h),v={},b=[];function x(t,e,n){var i=!r||-1!==r.indexOf(t);return i||h.warn("Unknown rule: cannot "+e+" `'"+t+"'`",n),i}function y(t,e,r){var n,i,o=r?v[r]:b;if(o||(o=[],v[r]=o),i=function(t){var e=t?v[t]:b;if(e&&0!==e.length)return e[e.length-1].state;if(!t)return!s;if(s)return-1!==c.indexOf(t);return-1===l.indexOf(t)}(r),(n=e)!==i&&o.push({state:n,position:t}),!r)for(r in v)y(t,e,r)}function w(t,e,r){for(var n,i=e&&e.length;--i>-1;)if((n=e[i]).position&&n.position.line&&n.position.column&&(n.position.line<t.line||n.position.line===t.line&&n.position.column<t.column))return!0===n.state;return r?s?-1!==c.indexOf(r):-1===l.indexOf(r):g||s}o(u,p,function(e,r,n){var i,o,c,l,u,p,d,g,m=f(e);if(!m||m.name!==t.name)return;i=m.attributes.split(/\s/g),c=i.shift(),p=n.children[r+1],d=m.node.position&&m.node.position.start,g=p&&p.position&&p.position.end,c&&1!=!a[c]||h.fail("Unknown keyword `"+c+"`: expected `'enable'`, `'disable'`, or `'ignore'`",m.node);u=i.length,l=-1;for(;++l<u;)x(o=i[l],c,m.node)&&(y(d,"enable"===c,o),"ignore"===c&&y(g,!0,o));u||("ignore"===c?(y(d,!1),y(g,!0)):(y(d,"enable"===c),s="enable"!==c))}),h.messages=h.messages.filter(function(t){var r,n=m.length,i=t.ruleId,o=v[i];if(!t.source||-1===e.indexOf(t.source))return!0;t.line||(t.line=1);t.column||(t.column=1);r=d(t);for(;n--;)if(m[n].start<=r&&m[n].end>r)return!1;return w(t,o,i)&&w(t,b)})}}},function(t,e,r){"use strict";t.exports=function(t){var e,r,s;if(!t||t.type!==n)return null;if(e=t.value,!(r=e.match(a))||r[1].length!==e.length)return null;if(!(s=function(t){var e={};return t.replace(o,function(t,r,n,i,o){var a=n||i||o||"";return"true"===a||""===a?a=!0:"false"===a?a=!1:isNaN(a)||(a=Number(a)),e[r]=a,""}).replace(i,"")?null:e}(r[3]||"")))return null;return{name:r[2],attributes:r[4]||"",parameters:s,node:t}};var n="html",i=/\s+/g,o=new RegExp("\\s+([-a-z0-9_]+)(?:=(?:\"((?:\\\\[\\s\\S]|[^\"])+)\"|'((?:\\\\[\\s\\S]|[^'])+)'|((?:\\\\[\\s\\S]|[^\"'\\s])+)))?","gi"),a=new RegExp("(\\s*\x3c!--\\s*([a-zA-Z0-9-]+)(\\s+([\\s\\S]*?))?\\s*--\x3e\\s*)")},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module file-extension
 * @fileoverview
 *   Warn when the file extension differ from the preferred extension.
 *
 *   Does not warn when given documents have no file extensions (such as
 *   `AUTHORS` or `LICENSE`).
 *
 *   Options: `string`, default: `'md'` — Expected file extension.
 *
 * @example {"name": "readme.md"}
 *
 * @example {"name": "readme"}
 *
 * @example {"name": "readme.mkd", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Invalid extension: use `md`
 *
 * @example {"name": "readme.mkd", "setting": "mkd"}
 */var n=r(72);t.exports=n("remark-lint:file-extension",function(t,e,r){var n=e.extname;r="string"==typeof r?r:"md",n&&n.slice(1)!==r&&e.message("Invalid extension: use `"+r+"`")})},function(t,e,r){var n=r(346),i=function(){},o=r(347);t.exports=function(t){return function(){var e=n(arguments),r=e[e.length-1],a="function"==typeof r?e.pop():i;if(!t)return a.apply(this,[null].concat(e));if(s=t,s&&s.constructor&&"GeneratorFunction"==s.constructor.name)return o(t).apply(this,e.concat(a));var s;if(t.length>e.length)try{return t.apply(this,e.concat(a))}catch(t){return a(t)}return function(t,e){return function(){var r,n;try{r=t.apply(this,arguments)}catch(t){return e(t)}(n=r)&&"function"==typeof n.then?r.then(function(t){e(null,t)},e):r instanceof Error?e(r):e(null,r)}}(t,a).apply(this,e)}}},function(t,e){t.exports=function(t,e,r){var n=[],i=t.length;if(0===i)return n;var o=e<0?Math.max(0,e+i):e||0;for(void 0!==r&&(i=r<0?r+i:r);i-- >o;)n[i-o]=t[i];return n}},function(t,e){var r=Array.prototype.slice;function n(t){var e=this,n=r.call(arguments,1);return new Promise(function(r,a){if("function"==typeof t&&(t=t.apply(e,n)),!t||"function"!=typeof t.next)return r(t);function s(e){var r;try{r=t.next(e)}catch(t){return a(t)}l(r)}function c(e){var r;try{r=t.throw(e)}catch(t){return a(t)}l(r)}function l(t){if(t.done)return r(t.value);var n=i.call(e,t.value);return n&&o(n)?n.then(s,c):c(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "'+String(t.value)+'"'))}s()})}function i(t){return t?o(t)?t:function(t){var e=t.constructor;return!!e&&("GeneratorFunction"===e.name||"GeneratorFunction"===e.displayName||a(e.prototype))}(t)||a(t)?n.call(this,t):"function"==typeof t?function(t){var e=this;return new Promise(function(n,i){t.call(e,function(t,e){if(t)return i(t);arguments.length>2&&(e=r.call(arguments,1)),n(e)})})}.call(this,t):Array.isArray(t)?function(t){return Promise.all(t.map(i,this))}.call(this,t):Object==t.constructor?function(t){for(var e=new t.constructor,r=Object.keys(t),n=[],a=0;a<r.length;a++){var s=r[a],c=i.call(this,t[s]);c&&o(c)?l(c,s):e[s]=t[s]}return Promise.all(n).then(function(){return e});function l(t,r){e[r]=void 0,n.push(t.then(function(t){e[r]=t}))}}.call(this,t):t:t}function o(t){return"function"==typeof t.then}function a(t){return"function"==typeof t.next&&"function"==typeof t.throw}t.exports=n.default=n.co=n,n.wrap=function(t){return e.__generatorFunction__=t,e;function e(){return n.call(this,t.apply(this,arguments))}}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-file-name-mixed-case
 * @fileoverview
 *   Warn when a file name uses mixed case: both upper- and lower case
 *   characters.
 *
 * @example {"name": "README.md"}
 *
 * @example {"name": "readme.md"}
 *
 * @example {"name": "Readme.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not mix casing in file names
 */var n=r(72);t.exports=n("remark-lint:no-file-name-mixed-case",function(t,e){var r=e.stem;r&&r!==r.toLowerCase()&&r!==r.toUpperCase()&&e.message(i)});var i="Do not mix casing in file names"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-file-name-articles
 * @fileoverview
 *   Warn when file name start with an article.
 *
 * @example {"name": "title.md"}
 *
 * @example {"name": "a-title.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not start file names with `a`
 *
 * @example {"name": "the-title.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not start file names with `the`
 *
 * @example {"name": "teh-title.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not start file names with `teh`
 *
 * @example {"name": "an-article.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not start file names with `an`
 */var n=r(72);t.exports=n("remark-lint:no-file-name-articles",function(t,e){var r=e.stem&&e.stem.match(/^(the|teh|an?)\b/i);r&&e.message("Do not start file names with `"+r[0]+"`")})},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-file-name-irregular-characters
 * @fileoverview
 *   Warn when file names contain irregular characters: characters other than
 *   alpha-numericals, dashes, and dots (full-stops).
 *
 *   Options: `RegExp` or `string`, default: `'\\.a-zA-Z0-9-'`.
 *
 *   If a string is given, it will be wrapped in
 *   `new RegExp('[^' + preferred + ']')`.
 *
 *   Any match by the wrapped or given expressions creates a message.
 *
 * @example {"name": "plug-ins.md"}
 *
 * @example {"name": "plugins.md"}
 *
 * @example {"name": "plug_ins.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not use `_` in a file name
 *
 * @example {"name": "README.md", "label": "output", "setting": "\\.a-z0-9", "config": {"positionless": true}}
 *
 *   1:1: Do not use `R` in a file name
 *
 * @example {"name": "plug ins.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not use ` ` in a file name
 */var n=r(72);t.exports=n("remark-lint:no-file-name-irregular-characters",function(t,e,r){var n,o=r||i;"string"==typeof o&&(o=new RegExp("[^"+o+"]"));(n=e.stem&&e.stem.match(o))&&e.message("Do not use `"+n[0]+"` in a file name")});var i=/[^\\.a-zA-Z0-9-]/},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-file-name-consecutive-dashes
 * @fileoverview
 *   Warn when file names contain consecutive dashes.
 *
 * @example {"name": "plug-ins.md"}
 *
 * @example {"name": "plug--ins.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not use consecutive dashes in a file name
 */var n=r(72);t.exports=n("remark-lint:no-file-name-consecutive-dashes",function(t,e){e.stem&&/-{2,}/.test(e.stem)&&e.message(i)});var i="Do not use consecutive dashes in a file name"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-file-name-outer-dashes
 * @fileoverview
 *   Warn when file names contain initial or final dashes.
 *
 * @example {"name": "readme.md"}
 *
 * @example {"name": "-readme.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not use initial or final dashes in a file name
 *
 * @example {"name": "readme-.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Do not use initial or final dashes in a file name
 */var n=r(72);t.exports=n("remark-lint:no-file-name-outer-dashes",function(t,e){e.stem&&/^-|-$/.test(e.stem)&&e.message(i)});var i="Do not use initial or final dashes in a file name"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-consecutive-blank-lines
 * @fileoverview
 *   Warn for too many consecutive blank lines.  Knows about the extra line
 *   needed between a list and indented code, and two lists.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   always uses one blank line between blocks if possible, or two lines when
 *   needed.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   Foo...
 *   ␊
 *   ...Bar.
 *
 * @example {"name": "valid-for-code.md"}
 *
 *   Paragraph.
 *
 *   *   List
 *   ␊
 *   ␊
 *       bravo();
 *
 * @example {"name": "empty-document.md"}
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Foo...
 *   ␊
 *   ␊
 *   ...Bar
 *   ␊
 *   ␊
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   4:1: Remove 1 line before node
 *   4:7: Remove 2 lines after node
 */var n=r(72),i=r(115),o=r(73),a=r(75),s=r(74);t.exports=n("remark-lint:no-consecutive-blank-lines",function(t,e){function r(t,r,n){var o,a=r.line-t.line,s=Math.abs(a)-n;s>0&&(o="Remove "+s+" "+i("line",s)+" "+(a>0?"before":"after")+" node",e.message(o,r))}function n(t,e,n){var i=n[e-1],o=2;!i||s(i)||s(t)||(("list"===i.type&&"list"===t.type||"code"===t.type&&"list"===i.type&&!t.lang)&&o++,r(a.end(i),a.start(t),o))}o(t,function(t){var e,i,o=t.children;!s(t)&&o&&(e=o[0])&&!s(e)&&(r(a.start(t),a.start(e),0),o.forEach(n),(i=o[o.length-1])===e||s(i)||r(a.end(t),a.end(i),1))})})},function(t,e,r){"use strict";(function(t){const e=r(356),n=new Map;for(const t of Object.keys(e))n.set(t,e[t]);Object.defineProperty(t,"exports",{get:()=>n})}).call(this,r(355)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t){t.exports={addendum:"addenda",aircraft:"aircraft",alga:"algae",alumna:"alumnae",alumnus:"alumni",amoeba:"amoebae",analysis:"analyses",antenna:"antennae",antithesis:"antitheses",apex:"apices",appendix:"appendices",automaton:"automata",axis:"axes",bacillus:"bacilli",bacterium:"bacteria",barracks:"barracks",basis:"bases",beau:"beaux",bison:"bison",buffalo:"buffalo",bureau:"bureaus",cactus:"cacti",calf:"calves",carp:"carp",census:"censuses",chassis:"chassis",cherub:"cherubim",child:"children","château":"châteaus",cod:"cod",codex:"codices",concerto:"concerti",corpus:"corpora",crisis:"crises",criterion:"criteria",curriculum:"curricula",datum:"data",deer:"deer",diagnosis:"diagnoses",die:"dice",dwarf:"dwarfs",echo:"echoes",elf:"elves",elk:"elk",ellipsis:"ellipses",embargo:"embargoes",emphasis:"emphases",erratum:"errata","faux pas":"faux pas",fez:"fezes",firmware:"firmware",fish:"fish",focus:"foci",foot:"feet",formula:"formulae",fungus:"fungi",gallows:"gallows",genus:"genera",goose:"geese",graffito:"graffiti",grouse:"grouse",half:"halves",hero:"heroes",hoof:"hooves",hovercraft:"hovercraft",hypothesis:"hypotheses",index:"indices",kakapo:"kakapo",knife:"knives",larva:"larvae",leaf:"leaves",libretto:"libretti",life:"lives",loaf:"loaves",locus:"loci",louse:"lice",man:"men",matrix:"matrices",means:"means",medium:"media",memorandum:"memoranda",millennium:"millennia",minutia:"minutiae",moose:"moose",mouse:"mice",nebula:"nebulae",nemesis:"nemeses",neurosis:"neuroses",news:"news",nucleus:"nuclei",oasis:"oases",offspring:"offspring",opus:"opera",ovum:"ova",ox:"oxen",paralysis:"paralyses",parenthesis:"parentheses",person:"people",phenomenon:"phenomena",phylum:"phyla",pike:"pike",polyhedron:"polyhedra",potato:"potatoes",prognosis:"prognoses",quiz:"quizzes",radius:"radii",referendum:"referenda",salmon:"salmon",scarf:"scarves",self:"selves",series:"series",sheep:"sheep",shelf:"shelves",shrimp:"shrimp",spacecraft:"spacecraft",species:"species",spectrum:"spectra",squid:"squid",stimulus:"stimuli",stratum:"strata",swine:"swine",syllabus:"syllabi",symposium:"symposia",synopsis:"synopses",synthesis:"syntheses",tableau:"tableaus",that:"those",thesis:"theses",thief:"thieves",this:"these",tomato:"tomatoes",tooth:"teeth",trout:"trout",tuna:"tuna",vertebra:"vertebrae",vertex:"vertices",veto:"vetoes",vita:"vitae",vortex:"vortices",watercraft:"watercraft",wharf:"wharves",wife:"wives",wolf:"wolves",woman:"women"}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module maximum-line-length
 * @fileoverview
 *   Warn when lines are too long.
 *
 *   Options: `number`, default: `80`.
 *
 *   Ignores nodes that cannot be wrapped, such as headings, tables,
 *   code, and definitions.
 *
 *   Ignores images, links, and inline code if they start before the wrap, end
 *   after the wrap, and there’s no white-space after them.
 *
 * @example {"name": "valid.md", "config": {"positionless": true}}
 *
 *   This line is simply not toooooooooooooooooooooooooooooooooooooooooooo
 *   long.
 *
 *   This is also fine: <http://this-long-url-with-a-long-domain.co.uk/a-long-path?query=variables>
 *
 *   <http://this-link-is-fine.com>
 *
 *   `alphaBravoCharlieDeltaEchoFoxtrotGolfHotelIndiaJuliettKiloLimaMikeNovemberOscarPapaQuebec.romeo()`
 *
 *   [foo](http://this-long-url-with-a-long-domain-is-valid.co.uk/a-long-path?query=variables)
 *
 *   <http://this-long-url-with-a-long-domain-is-valid.co.uk/a-long-path?query=variables>
 *
 *   ![foo](http://this-long-url-with-a-long-domain-is-valid.co.uk/a-long-path?query=variables)
 *
 *   | An | exception | is | line | length | in | long | tables | because | those | can’t | just |
 *   | -- | --------- | -- | ---- | ------ | -- | ---- | ------ | ------- | ----- | ----- | ---- |
 *   | be | helped    |    |      |        |    |      |        |         |       |       | .    |
 *
 *   The following is also fine, because there is no white-space.
 *
 *   <http://this-long-url-with-a-long-domain-is-invalid.co.uk/a-long-path?query=variables>.
 *
 *   In addition, definitions are also fine:
 *
 *   [foo]: <http://this-long-url-with-a-long-domain-is-invalid.co.uk/a-long-path?query=variables>
 *
 * @example {"name": "invalid.md", "setting": 80, "label": "input", "config": {"positionless": true}}
 *
 *   This line is simply not tooooooooooooooooooooooooooooooooooooooooooooooooooooooo
 *   long.
 *
 *   Just like thiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis one.
 *
 *   And this one is also very wrong: because the link starts aaaaaaafter the column: <http://line.com>
 *
 *   <http://this-long-url-with-a-long-domain-is-invalid.co.uk/a-long-path?query=variables> and such.
 *
 *   And this one is also very wrong: because the code starts aaaaaaafter the column: `alpha.bravo()`
 *
 *   `alphaBravoCharlieDeltaEchoFoxtrotGolfHotelIndiaJuliettKiloLimaMikeNovemberOscar.papa()` and such.
 *
 * @example {"name": "invalid.md", "setting": 80, "label": "output", "config": {"positionless": true}}
 *
 *   4:86: Line must be at most 80 characters
 *   6:99: Line must be at most 80 characters
 *   8:97: Line must be at most 80 characters
 *   10:97: Line must be at most 80 characters
 *   12:99: Line must be at most 80 characters
 *
 * @example {"name": "valid-mixed-line-endings.md", "setting": 10, "config": {"positionless": true}}
 *
 *   0123456789␍␊
 *   0123456789␊
 *   01234␍␊
 *   01234␊
 *
 * @example {"name": "invalid-mixed-line-endings.md", "setting": 10, "label": "input", "config": {"positionless": true}}
 *
 *   012345678901␍␊
 *   012345678901␊
 *   01234567890␍␊
 *   01234567890␊
 *
 * @example {"name": "invalid-mixed-line-endings.md", "setting": 10, "label": "output", "config": {"positionless": true}}
 *
 *   1:13: Line must be at most 10 characters
 *   2:13: Line must be at most 10 characters
 *   3:12: Line must be at most 10 characters
 *   4:12: Line must be at most 10 characters
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:maximum-line-length",function(t,e,r){var n,o="number"!=typeof r||isNaN(r)?80:r,l=String(e).split(/\r?\n/),u=l.length,f=-1;i(t,["heading","table","code","definition"],function(t){a(t)||p(s(t).line-1,c(t).line)}),i(t,["link","image","inlineCode"],function(t,e,r){var n,i,l=r.children[e+1];if(a(t))return;if(n=s(t),i=c(t),n.column>o||i.column<o)return;if(l&&s(l).line===n.line&&(!l.value||/^(.+?[ \t].+?)/.test(l.value)))return;p(n.line-1,i.line)});for(;++f<u;)(n=l[f].length)>o&&e.message("Line must be at most "+o+" characters",{line:f+1,column:n+1});function p(t,e){for(;t<e;)l[t++]=""}});var s=o.start,c=o.end},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-shell-dollars
 * @fileoverview
 *   Warn when shell code is prefixed by dollar-characters.
 *
 *   Ignores indented code blocks and fenced code blocks without language flag.
 *
 * @example {"name": "valid.md"}
 *
 *   ```sh
 *   echo a
 *   echo a > file
 *   ```
 *
 *   ```zsh
 *   $ echo a
 *   a
 *   $ echo a > file
 *   ```
 *
 *   Some empty code:
 *
 *   ```command
 *   ```
 *
 *   It’s fine to use dollars in non-shell code.
 *
 *   ```js
 *   $('div').remove();
 *   ```
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   ```bash
 *   $ echo a
 *   $ echo a > file
 *   ```
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-4:4: Do not use dollar signs before shell-commands
 */var n=r(72),i=r(73),o=r(74);t.exports=n("remark-lint:no-shell-dollars",function(t,e){i(t,"code",function(t){var r,n,i,c;if(!o(t)&&t.lang&&-1!==s.indexOf(t.lang)){if(r=t.value.split("\n"),i=r.length,c=-1,i<=1)return;for(;++c<i;)if((n=r[c]).trim()&&!n.match(/^\s*\$\s*/))return;e.message(a,t)}})});var a="Do not use dollar signs before shell-commands",s=["sh","bash","bats","cgi","command","fcgi","ksh","tmux","tool","zsh"]},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module hard-break-spaces
 * @fileoverview
 *   Warn when too many spaces are used to create a hard break.
 *
 * @example {"name": "valid.md"}
 *
 *   Lorem ipsum··
 *   dolor sit amet
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Lorem ipsum···
 *   dolor sit amet.
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:12-2:1: Use two spaces for hard line breaks
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:hard-break-spaces",function(t,e){var r=String(e);i(t,"break",function(t){a(t)||r.slice(o.start(t).offset,o.end(t).offset).split("\n",1)[0].replace(/\r$/,"").length>2&&e.message(s,t)})});var s="Use two spaces for hard line breaks"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module heading-style
 * @fileoverview
 *   Warn when a heading does not conform to a given style.
 *
 *   Options: `'consistent'`, `'atx'`, `'atx-closed'`, or `'setext'`,
 *   default: `'consistent'`.
 *
 *   `'consistent'` detects the first used heading style and warns when
 *   subsequent headings use different styles.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   formats headings as ATX by default. This can be configured with the
 *   [`setext`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionssetext)
 *   and [`closeAtx`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionscloseatx)
 *   options.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md", "setting": "atx"}
 *
 *   # Alpha
 *
 *   ## Bravo
 *
 *   ### Charlie
 *
 * @example {"name": "valid.md", "setting": "atx-closed"}
 *
 *   # Delta ##
 *
 *   ## Echo ##
 *
 *   ### Foxtrot ###
 *
 * @example {"name": "valid.md", "setting": "setext"}
 *
 *   Golf
 *   ====
 *
 *   Hotel
 *   -----
 *
 *   ### India
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Juliett
 *   =======
 *
 *   ## Kilo
 *
 *   ### Lima ###
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   4:1-4:8: Headings should use setext
 *   6:1-6:13: Headings should use setext
 */var n=r(72),i=r(73),o=r(361),a=r(74);t.exports=n("remark-lint:heading-style",function(t,e,r){r=-1===s.indexOf(r)?null:r,i(t,"heading",function(t){a(t)||(r?o(t,r)!==r&&e.message("Headings should use "+r,t):r=o(t,r))})});var s=["atx","atx-closed","setext"]},function(t,e,r){"use strict";function n(t,e){return t<3?"atx":"atx"===e||"setext"===e?e:null}t.exports=function(t,e){var r=t.children[t.children.length-1],i=t.depth,o=t&&t.position&&t.position.end,a=r&&r.position&&r.position.end;if(!o)return null;if(!r)return o.column-1<=2*i?n(i,e):"atx-closed";if(a.line+1===o.line)return"setext";if(a.column+i<o.column)return"atx-closed";return n(i,e)}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module heading-increment
 * @fileoverview
 *   Warn when headings increment with more than 1 level at a time.
 *
 * @example {"name": "valid.md"}
 *
 *   # Alpha
 *
 *   ## Bravo
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   # Charlie
 *
 *   ### Delta
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:1-3:10: Heading levels should increment by one level at a time
 */var n=r(72),i=r(73),o=r(74);t.exports=n("remark-lint:heading-increment",function(t,e){var r=null;i(t,"heading",function(t){var n;o(t)||(n=t.depth,r&&n>r+1&&e.message(a,t),r=n)})});var a="Heading levels should increment by one level at a time"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-duplicate-headings
 * @fileoverview
 *   Warn when duplicate headings are found.
 *
 * @example {"name": "valid.md"}
 *
 *   # Foo
 *
 *   ## Bar
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   # Foo
 *
 *   ## Foo
 *
 *   ## [Foo](http://foo.com/bar)
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:1-3:7: Do not use headings with similar content (1:1)
 *   5:1-5:29: Do not use headings with similar content (3:1)
 */var n=r(72),i=r(75),o=r(74),a=r(73),s=r(133),c=r(96);t.exports=n("remark-lint:no-duplicate-headings",function(t,e){var r={};a(t,"heading",function(t){var n,a;o(t)||(n=c(t).toUpperCase(),(a=r[n])&&"heading"===a.type&&e.message(l+" ("+s(i.start(a))+")",t),r[n]=t)})});var l="Do not use headings with similar content"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-multiple-toplevel-headings
 * @fileoverview
 *   Warn when multiple top-level headings are used.
 *
 *   Options: `number`, default: `1`.
 *
 * @example {"name": "valid.md", "setting": 1}
 *
 *   # Foo
 *
 *   ## Bar
 *
 * @example {"name": "invalid.md", "setting": 1, "label": "input"}
 *
 *   # Foo
 *
 *   # Bar
 *
 * @example {"name": "invalid.md", "setting": 1, "label": "output"}
 *
 *   3:1-3:6: Don’t use multiple top level headings (1:1)
 */var n=r(72),i=r(73),o=r(75).start,a=r(74),s=r(133);t.exports=n("remark-lint:no-multiple-toplevel-headings",function(t,e,r){var n,c=r||1;i(t,"heading",function(t){a(t)||t.depth!==c||(n?e.message("Don’t use multiple top level headings ("+n+")",t):n=s(o(t)))})})},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module maximum-heading-length
 * @fileoverview
 *   Warn when headings are too long.
 *
 *   Options: `number`, default: `60`.
 *
 *   Ignores markdown syntax, only checks the plain text content.
 *
 * @example {"name": "valid.md"}
 *
 *   # Alpha bravo charlie delta echo foxtrot golf hotel
 *
 *   # ![Alpha bravo charlie delta echo foxtrot golf hotel](http://example.com/nato.png)
 *
 * @example {"name": "invalid.md", "setting": 40, "label": "input"}
 *
 *   # Alpha bravo charlie delta echo foxtrot golf hotel
 *
 * @example {"name": "invalid.md", "setting": 40, "label": "output"}
 *
 *   1:1-1:52: Use headings shorter than `40`
 */var n=r(72),i=r(73),o=r(74),a=r(96);t.exports=n("remark-lint:maximum-heading-length",function(t,e,r){r="number"!=typeof r||isNaN(r)?60:r,i(t,"heading",function(t){!o(t)&&a(t).length>r&&e.message("Use headings shorter than `"+r+"`",t)})})},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-heading-punctuation
 * @fileoverview
 *   Warn when a heading ends with a a group of characters.
 *
 *   Options: `string`, default: `'.,;:!?'`.
 *
 *   Note: these are added to a regex, in a group (`'[' + char + ']'`), be careful
 *   for escapes and dashes.
 *
 * @example {"name": "valid.md"}
 *
 *   # Hello
 *
 * @example {"name": "valid.md", "setting": ",;:!?"}
 *
 *   # Hello...
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   # Hello:
 *
 *   # Hello?
 *
 *   # Hello!
 *
 *   # Hello,
 *
 *   # Hello;
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:9: Don’t add a trailing `:` to headings
 *   3:1-3:9: Don’t add a trailing `?` to headings
 *   5:1-5:9: Don’t add a trailing `!` to headings
 *   7:1-7:9: Don’t add a trailing `,` to headings
 *   9:1-9:9: Don’t add a trailing `;` to headings
 */var n=r(72),i=r(73),o=r(74),a=r(96);t.exports=n("remark-lint:no-heading-punctuation",function(t,e,r){var n=new RegExp("["+("string"==typeof r?r:s)+"]");i(t,"heading",function(t){var r;o(t)||(r=(r=a(t)).charAt(r.length-1),n.test(r)&&e.message("Don’t add a trailing `"+r+"` to headings",t))})});var s="\\.,;:!?"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module blockquote-indentation
 * @fileoverview
 *   Warn when blockquotes are indented too much or too little.
 *
 *   Options: `number` or `'consistent'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used indentation and will warn when
 *   other blockquotes use a different indentation.
 *
 * @example {"name": "valid.md", "setting": 4}
 *
 *   >   Hello
 *
 *   Paragraph.
 *
 *   >   World
 *
 * @example {"name": "valid.md", "setting": 2}
 *
 *   > Hello
 *
 *   Paragraph.
 *
 *   > World
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   >  Hello
 *
 *   Paragraph.
 *
 *   >   World
 *
 *   Paragraph.
 *
 *   > World
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   5:3: Remove 1 space between blockquote and content
 *   9:3: Add 1 space between blockquote and content
 */var n=r(72),i=r(115),o=r(73),a=r(75),s=r(74),c=r(96);function l(t){var e=t.children[0],r=a.start(e).column-a.start(t).column,n=c(e).match(/^ +/);return n&&(r+=n[0].length),r}t.exports=n("remark-lint:blockquote-indentation",function(t,e,r){r="number"!=typeof r||isNaN(r)?null:r,o(t,"blockquote",function(t){var n,o;if(s(t)||0===t.children.length)return;r?0!==(n=r-l(t))&&(o=(n>0?"Add":"Remove")+" "+Math.abs(n)+" "+i("space",n)+" between blockquote and content",e.message(o,a.start(t.children[0]))):r=l(t)})})},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-blockquote-without-marker
 * @fileoverview
 *   Warn when blank lines without markers (`>`) are found in a blockquote.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   adds markers to every line in a blockquote.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   > Foo...
 *   >
 *   > ...Bar.
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   > Foo...
 *
 *   > ...Bar.
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:1: Missing marker in blockquote
 */var n=r(72),i=r(112),o=r(73),a=r(75),s=r(74);t.exports=n("remark-lint:no-blockquote-without-marker",function(t,e){var r=String(e),n=i(e),l=r.length;o(t,"blockquote",function(t){var i,o,u,f,p,h,d=t.position&&t.position.indent;if(s(t)||!d||0===d.length)return;i=a.start(t).line,o=d.length,u=-1;for(;++u<o;)for(h={line:i+u+1,column:d[u]},f=n.toOffset(h)-1;++f<l&&">"!==(p=r.charAt(f));)if(" "!==p&&"\t"!==p){e.message(c,h);break}})});var c="Missing marker in blockquote"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unordered-list-marker-style
 * @fileoverview
 *   Warn when the list-item marker style of unordered lists violate a given
 *   style.
 *
 *   Options: `'consistent'`, `'-'`, `'*'`, or `'*'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used list style and warns when subsequent
 *   lists use different styles.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   formats unordered lists using a hyphen-minus (`-`) by default. Pass
 *   [`bullet: '*'` or `bullet: '+'`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsbullet)
 *   to use asterisks or plusses instead.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   By default (`'consistent'`), if the file uses only one marker,
 *   that’s OK.
 *
 *   * Foo
 *   * Bar
 *   * Baz
 *
 *   Ordered lists are not affected.
 *
 *   1. Foo
 *   2. Bar
 *   3. Baz
 *
 * @example {"name": "valid.md", "setting": "*"}
 *
 *   * Foo
 *
 * @example {"name": "valid.md", "setting": "-"}
 *
 *   - Foo
 *
 * @example {"name": "valid.md", "setting": "+"}
 *
 *   + Foo
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   * Foo
 *   - Bar
 *   + Baz
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:1-2:6: Marker style should be `*`
 *   3:1-3:6: Marker style should be `*`
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "!", "config": {"positionless": true}}
 *
 *   1:1: Invalid unordered list-item marker style `!`: use either `'-'`, `'*'`, or `'+'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:unordered-list-marker-style",function(t,e,r){var n=String(e);!0!==c[r="string"==typeof r&&"consistent"!==r?r:null]&&e.fail("Invalid unordered list-item marker style `"+r+"`: use either `'-'`, `'*'`, or `'+'`");i(t,"list",function(t){var i,o,c=t.children,l=t.ordered?0:c.length,u=-1;for(;++u<l;)i=c[u],a(i)||(o=n.slice(s(i).offset,s(i.children[0]).offset).replace(/\[[x ]?]\s*$/i,"").replace(/\s/g,""),r?o!==r&&e.message("Marker style should be `"+r+"`",i):r=o)})});var s=o.start,c={"-":!0,"*":!0,"+":!0,null:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module ordered-list-marker-style
 * @fileoverview
 *   Warn when the list-item marker style of ordered lists violate a given
 *   style.
 *
 *   Options: `'consistent'`, `'.'`, or `')'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used list style and warns when subsequent
 *   lists use different styles.
 *
 *   Note: `)` is only supported in CommonMark.
 *
 * @example {"name": "valid.md"}
 *
 *   1.  Foo
 *
 *
 *   1.  Bar
 *
 *   Unordered lists are not affected by this rule.
 *
 *   * Foo
 *
 * @example {"name": "valid.md", "setting": "."}
 *
 *   1.  Foo
 *
 *   2.  Bar
 *
 * @example {"name": "valid.md", "setting": ")", "config": {"commonmark": true}}
 *
 *   <!-- This requires commonmark. -->
 *
 *   1)  Foo
 *
 *   2)  Bar
 *
 * @example {"name": "invalid.md", "label": "input", "config": {"commonmark": true}}
 *
 *   1.  Foo
 *
 *   2)  Bar
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:1-3:8: Marker style should be `.`
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "!", "config": {"positionless": true}}
 *
 *   1:1: Invalid ordered list-item marker style `!`: use either `'.'` or `')'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:ordered-list-marker-style",function(t,e,r){var n=String(e);!0!==c[r="string"!=typeof r||"consistent"===r?null:r]&&e.fail("Invalid ordered list-item marker style `"+r+"`: use either `'.'` or `')'`");i(t,"list",function(t){var i,o,c=t.children,l=t.ordered?c.length:0,u=-1;for(;++u<l;)o=c[u],a(o)||(i=n.slice(s(o).offset,s(o.children[0]).offset).replace(/\s|\d/g,"").replace(/\[[x ]?]\s*$/i,""),r?i!==r&&e.message("Marker style should be `"+r+"`",o):r=i)})});var s=o.start,c={")":!0,".":!0,null:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module ordered-list-marker-value
 * @fileoverview
 *   Warn when the list-item marker values of ordered lists violate a
 *   given style.
 *
 *   Options: `'single'`, `'one'`, or `'ordered'`, default: `'ordered'`.
 *
 *   When set to `'ordered'`, list-item bullets should increment by one,
 *   relative to the starting point.  When set to `'single'`, bullets should
 *   be the same as the relative starting point.  When set to `'one'`, bullets
 *   should always be `1`.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   retains the number of the first list-item bullet, and by default
 *   increments the other items. Pass
 *   [`incrementListMarker: false`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsincrementlistmarker)
 *   to not increment further list-items.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   The default value is `ordered`, so unless changed, the below
 *   is OK.
 *
 *   1.  Foo
 *   2.  Bar
 *   3.  Baz
 *
 *   Paragraph.
 *
 *   3.  Alpha
 *   4.  Bravo
 *   5.  Charlie
 *
 *   Unordered lists are not affected by this rule.
 *
 *   *   Anton
 *
 * @example {"name": "valid.md", "setting": "one"}
 *
 *   1.  Foo
 *   1.  Bar
 *   1.  Baz
 *
 *   Paragraph.
 *
 *   1.  Alpha
 *   1.  Bravo
 *   1.  Charlie
 *
 * @example {"name": "valid.md", "setting": "single"}
 *
 *   1.  Foo
 *   1.  Bar
 *   1.  Baz
 *
 *   Paragraph.
 *
 *   3.  Alpha
 *   3.  Bravo
 *   3.  Charlie
 *
 * @example {"name": "valid.md", "setting": "ordered"}
 *
 *   1.  Foo
 *   2.  Bar
 *   3.  Baz
 *
 *   Paragraph.
 *
 *   3.  Alpha
 *   4.  Bravo
 *   5.  Charlie
 *
 * @example {"name": "invalid.md", "setting": "one", "label": "input"}
 *
 *   1.  Foo
 *   2.  Bar
 *
 * @example {"name": "invalid.md", "setting": "one", "label": "output"}
 *
 *   2:1-2:8: Marker should be `1`, was `2`
 *
 * @example {"name": "also-invalid.md", "setting": "one", "label": "input"}
 *
 *   2.  Foo
 *   1.  Bar
 *
 * @example {"name": "also-invalid.md", "setting": "one", "label": "output"}
 *
 *   1:1-1:8: Marker should be `1`, was `2`
 *
 * @example {"name": "invalid.md", "setting": "ordered", "label": "input"}
 *
 *   1.  Foo
 *   1.  Bar
 *
 * @example {"name": "invalid.md", "setting": "ordered", "label": "output"}
 *
 *   2:1-2:8: Marker should be `2`, was `1`
 *
 * @example {"name": "invalid.md", "setting": "invalid", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Invalid ordered list-item marker value `invalid`: use either `'ordered'` or `'one'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:ordered-list-marker-value",function(t,e,r){var n=String(e);!0!==c[r="string"==typeof r?r:"ordered"]&&e.fail("Invalid ordered list-item marker value `"+r+"`: use either `'ordered'` or `'one'`");i(t,"list",function(t){var i,o,c=t.children,l=("one"===r?1:t.start)||1,u=t.ordered?c.length:0,f=-1;for(;++f<u;)i=c[f],a(i)||0===f&&"one"!==r||("ordered"===r&&l++,(o=Number(n.slice(s(i).offset,s(i.children[0]).offset).replace(/[\s.)]/g,"").replace(/\[[x ]?]\s*$/i,"")))!==l&&e.message("Marker should be `"+l+"`, was `"+o+"`",i))})});var s=o.start,c={ordered:!0,single:!0,one:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module list-item-indent
 * @fileoverview
 *   Warn when the spacing between a list item’s bullet and its content
 *   violates a given style.
 *
 *   Options: `'tab-size'`, `'mixed'`, or `'space'`, default: `'tab-size'`.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   uses `'tab-size'` (named `'tab'` there) by default to ensure markdown is
 *   seen the same way across vendors. This can be configured with the
 *   [`listItemIndent`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionslistitemindent)
 *   option. This rule’s `'space'` option is named `'1'` there.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   *···List
 *   ····item.
 *
 *   Paragraph.
 *
 *   11.·List
 *   ····item.
 *
 *   Paragraph.
 *
 *   *···List
 *   ····item.
 *
 *   *···List
 *   ····item.
 *
 * @example {"name": "valid.md", "setting": "mixed"}
 *
 *   *·List item.
 *
 *   Paragraph.
 *
 *   11.·List item
 *
 *   Paragraph.
 *
 *   *···List
 *   ····item.
 *
 *   *···List
 *   ····item.
 *
 * @example {"name": "valid.md", "setting": "space"}
 *
 *   *·List item.
 *
 *   Paragraph.
 *
 *   11.·List item
 *
 *   Paragraph.
 *
 *   *·List
 *   ··item.
 *
 *   *·List
 *   ··item.
 *
 * @example {"name": "invalid.md", "setting": "space", "label": "input"}
 *
 *   *···List
 *   ····item.
 *
 * @example {"name": "invalid.md", "setting": "space", "label": "output"}
 *
 *    1:5: Incorrect list-item indent: remove 2 spaces
 *
 * @example {"name": "invalid.md", "setting": "tab-size", "label": "input"}
 *
 *   *·List
 *   ··item.
 *
 * @example {"name": "invalid.md", "setting": "tab-size", "label": "output"}
 *
 *    1:3: Incorrect list-item indent: add 2 spaces
 *
 * @example {"name": "invalid.md", "setting": "mixed", "label": "input"}
 *
 *   *···List item.
 *
 * @example {"name": "invalid.md", "setting": "mixed", "label": "output"}
 *
 *    1:5: Incorrect list-item indent: remove 2 spaces
 *
 * @example {"name": "invalid.md", "setting": "invalid", "label": "output", "config": {"positionless": true}}
 *
 *    1:1: Invalid list-item indent style `invalid`: use either `'tab-size'`, `'space'`, or `'mixed'`
 */var n=r(72),i=r(115),o=r(73),a=r(75),s=r(74);t.exports=n("remark-lint:list-item-indent",function(t,e,r){var n=String(e);!0!==l[r="string"==typeof r?r:"tab-size"]&&e.fail("Invalid list-item indent style `"+r+"`: use either `'tab-size'`, `'space'`, or `'mixed'`");o(t,"list",function(t){var o=t.loose;s(t)||t.children.forEach(function(t){var a,s,l,u,f,p=t.children[0],h=c(p);a=n.slice(c(t).offset,h.offset).replace(/\[[x ]?]\s*$/i,""),s=a.trimRight().length,l="tab-size"===r||"mixed"===r&&o?4*Math.ceil(s/4):s+1,a.length!==l&&(u=l-a.length,f="Incorrect list-item indent: "+(u>0?"add":"remove")+" "+Math.abs(u)+" "+i("space",u),e.message(f,h))})})});var c=a.start,l={"tab-size":!0,mixed:!0,space:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module list-item-content-indent
 * @fileoverview
 *   Warn when the content of a list item has mixed indentation.
 *
 * @example {"name": "valid.md"}
 *
 *   1.·[x] Alpha
 *   ···1. Bravo
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   1.·[x] Charlie
 *   ····1. Delta
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:5: Don’t use mixed indentation for children, remove 1 space
 */var n=r(72),i=r(115),o=r(73),a=r(75),s=r(74);t.exports=n("remark-lint:list-item-content-indent",function(t,e){var r=String(e);o(t,"listItem",function(t){var n;t.children.forEach(function(o,a){var l,u,f,p,h;if(s(o))return;if(l=c(o),u=l.column,0===a){if("boolean"==typeof t.checked){for(f=l.offset-1;"["!==r.charAt(f);)f--;u-=l.offset-f}return void(n=u)}u!==n&&(h="Don’t use mixed indentation for children, "+((p=n-u)>0?"add":"remove")+" "+Math.abs(p)+" "+i("space",p),e.message(h,{line:c(o).line,column:u}))})})});var c=a.start},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module list-item-spacing
 * @fileoverview
 *   Warn when list looseness is incorrect, such as being tight
 *   when it should be loose, and vice versa.
 *
 *   According to the [`markdown-style-guide`](http://www.cirosantilli.com/markdown-style-guide/),
 *   if one or more list-items in a list spans more than one line,
 *   the list is required to have blank lines between each item.
 *   And otherwise, there should not be blank lines between items.
 *
 *   By default, all items must be “loose” (a blank line must be between
 *   them) if one or more items are multiline (span more than one line).
 *   Otherwise, the list must be tight (no blank line must be between
 *   items).
 *
 *   If you pass `{checkBlanks: true}`, all items must be “loose” if one or
 *   more items contain blank lines.  Otherwise, the list must be tight.
 *
 * @example {"name": "valid.md"}
 *
 *   A tight list:
 *
 *   -   item 1
 *   -   item 2
 *   -   item 3
 *
 *   A loose list:
 *
 *   -   Wrapped
 *       item
 *
 *   -   item 2
 *
 *   -   item 3
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   A tight list:
 *
 *   -   Wrapped
 *       item
 *   -   item 2
 *   -   item 3
 *
 *   A loose list:
 *
 *   -   item 1
 *
 *   -   item 2
 *
 *   -   item 3
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   4:9-5:1: Missing new line after list item
 *   5:11-6:1: Missing new line after list item
 *   11:1-12:1: Extraneous new line after list item
 *   13:1-14:1: Extraneous new line after list item
 *
 * @example {"name": "valid.md", "setting": {"checkBlanks": true}}
 *
 *   A tight list:
 *
 *   -   item 1
 *       - item 1.A
 *   -   item 2
 *       > Blockquote
 *
 *   A loose list:
 *
 *   -   item 1
 *
 *       - item 1.A
 *
 *   -   item 2
 *
 *       > Blockquote
 *
 * @example {"name": "invalid.md", "setting": {"checkBlanks": true}, "label": "input"}
 *
 *   A tight list:
 *
 *   -   item 1
 *
 *       - item 1.A
 *   -   item 2
 *
 *       > Blockquote
 *   -   item 3
 *
 *   A loose list:
 *
 *   -   item 1
 *       - item 1.A
 *
 *   -   item 2
 *       > Blockquote
 *
 * @example {"name": "invalid.md", "setting": {"checkBlanks": true}, "label": "output"}
 *
 *   5:15-6:1: Missing new line after list item
 *   8:17-9:1: Missing new line after list item
 *   15:1-16:1: Extraneous new line after list item
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:list-item-spacing",function(t,e,r){var n=r&&"object"==typeof r&&Boolean(r.checkBlanks)?f:p;i(t,"list",function(t){var r,i,o,f,p,h,d=!0;if(!a(t)){for(i=t.children,o=i.length,f=-1;++f<o;)if(n(i[f])){d=!1;break}for(r=s(t).column,p=i[0],f=0;++f<o;)h=i[f],c(p).column>r!==d&&e.message(d?u:l,{start:c(p),end:s(h)}),p=h}})});var s=o.start,c=o.end,l="Missing new line after list item",u="Extraneous new line after list item";function f(t){for(var e,r=t.children,n=r[0],i=r.length,o=0;++o<i;){if(e=r[o],s(e).line-c(n).line>1)return!0;n=e}return!1}function p(t){var e=t.children;return c(e[e.length-1]).line-s(e[0]).line>0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module code-block-style
 * @fileoverview
 *   Warn when code-blocks do not adhere to a given style.
 *
 *   Options: `'consistent'`, `'fenced'`, or `'indented'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used code-block style and warns when
 *   subsequent code-blocks uses different styles.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   formats code blocks using a fence if they have a language flag and
 *   indentation if not. Pass
 *   [`fences: true`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsfences)
 *   to always use fences for code blocks.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"setting": "indented", "name": "valid.md"}
 *
 *       alpha();
 *
 *   Paragraph.
 *
 *       bravo();
 *
 * @example {"setting": "indented", "name": "invalid.md", "label": "input"}
 *
 *   ```
 *   alpha();
 *   ```
 *
 *   Paragraph.
 *
 *   ```
 *   bravo();
 *   ```
 *
 * @example {"setting": "indented", "name": "invalid.md", "label": "output"}
 *
 *   1:1-3:4: Code blocks should be indented
 *   7:1-9:4: Code blocks should be indented
 *
 * @example {"setting": "fenced", "name": "valid.md"}
 *
 *   ```
 *   alpha();
 *   ```
 *
 *   Paragraph.
 *
 *   ```
 *   bravo();
 *   ```
 *
 * @example {"setting": "fenced", "name": "invalid.md", "label": "input"}
 *
 *       alpha();
 *
 *   Paragraph.
 *
 *       bravo();
 *
 * @example {"setting": "fenced", "name": "invalid.md", "label": "output"}
 *
 *   1:1-1:13: Code blocks should be fenced
 *   5:1-5:13: Code blocks should be fenced
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *       alpha();
 *
 *   Paragraph.
 *
 *   ```
 *   bravo();
 *   ```
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   5:1-7:4: Code blocks should be indented
 *
 * @example {"setting": "invalid", "name": "invalid.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Invalid code block style `invalid`: use either `'consistent'`, `'fenced'`, or `'indented'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:code-block-style",function(t,e,r){var n=String(e);!0!==l[r="string"==typeof r&&"consistent"!==r?r:null]&&e.fail("Invalid code block style `"+r+"`: use either `'consistent'`, `'fenced'`, or `'indented'`");i(t,"code",function(t){var i=function(t){var e=s(t).offset,r=c(t).offset;if(a(t))return null;return t.lang||/^\s*([~`])\1{2,}/.test(n.slice(e,r))?"fenced":"indented"}(t);i&&(r?r!==i&&e.message("Code blocks should be "+r,t):r=i)})});var s=o.start,c=o.end,l={null:!0,fenced:!0,indented:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module fenced-code-flag
 * @fileoverview
 *   Check fenced code-block flags.
 *
 *   Options: `Array.<string>` or `Object`, optional.
 *
 *   Providing an array is as passing `{flags: Array}`.
 *
 *   The object can have an array of `'flags'` which are deemed valid.
 *   In addition it can have the property `allowEmpty` (`boolean`, default:
 *   `false`) which signifies whether or not to warn for fenced code-blocks
 *   without language flags.
 *
 * @example {"name": "valid.md"}
 *
 *   ```alpha
 *   bravo();
 *   ```
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   ```
 *   alpha();
 *   ```
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-3:4: Missing code-language flag
 *
 * @example {"name": "valid.md", "setting": {"allowEmpty": true}}
 *
 *   ```
 *   alpha();
 *   ```
 *
 * @example {"name": "invalid.md", "setting": {"allowEmpty": false}, "label": "input"}
 *
 *   ```
 *   alpha();
 *   ```
 *
 * @example {"name": "invalid.md", "setting": {"allowEmpty": false}, "label": "output"}
 *
 *   1:1-3:4: Missing code-language flag
 *
 * @example {"name": "valid.md", "setting": ["alpha"]}
 *
 *   ```alpha
 *   bravo();
 *   ```
 *
 * @example {"name": "invalid.md", "setting": ["charlie"], "label": "input"}
 *
 *   ```alpha
 *   bravo();
 *   ```
 *
 * @example {"name": "invalid.md", "setting": ["charlie"], "label": "output"}
 *
 *   1:1-3:4: Invalid code-language flag
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:fenced-code-flag",function(t,e,r){var n=String(e),o=!1,p=[];"object"!=typeof r||"length"in r||(o=Boolean(r.allowEmpty),r=r.flags);"object"==typeof r&&"length"in r&&(p=String(r).split(","));i(t,"code",function(t){var r;a(t)||(t.lang?0!==p.length&&-1===p.indexOf(t.lang)&&e.message(u,t):(r=n.slice(s(t).offset,c(t).offset),!o&&l.test(r)&&e.message(f,t)))})});var s=o.start,c=o.end,l=/^ {0,3}([~`])\1{2,}/,u="Invalid code-language flag",f="Missing code-language flag"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module fenced-code-marker
 * @fileoverview
 *   Warn for violating fenced code markers.
 *
 *   Options: `` '`' ``, `'~'`, or `'consistent'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used fenced code marker style and warns
 *   when subsequent fenced code-blocks use different styles.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   formats fences using a backtick (`` '`' ``) by default. Pass
 *   [`fence: '~'`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsfence)
 *   to use tildes instead.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   Indented code blocks are not affected by this rule:
 *
 *       bravo();
 *
 * @example {"name": "valid.md", "setting": "`"}
 *
 *   ```alpha
 *   bravo();
 *   ```
 *
 *   ```
 *   charlie();
 *   ```
 *
 * @example {"name": "valid.md", "setting": "~"}
 *
 *   ~~~alpha
 *   bravo();
 *   ~~~
 *
 *   ~~~
 *   charlie();
 *   ~~~
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   ```alpha
 *   bravo();
 *   ```
 *
 *   ~~~
 *   charlie();
 *   ~~~
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   5:1-7:4: Fenced code should use ` as a marker
 *
 * @example {"name": "invalid.md", "setting": "!", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Invalid fenced code marker `!`: use either `'consistent'`, `` '`' ``, or `'~'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:fenced-code-marker",function(t,e,r){var n=String(e);!0!==s[r="string"==typeof r&&"consistent"!==r?r:null]&&e.fail("Invalid fenced code marker `"+r+"`: use either `'consistent'`, `` '`' ``, or `'~'`");i(t,"code",function(t){var i;a(t)||(i=n.substr(o.start(t).offset,4).trimLeft().charAt(0),!0===s[i]&&(r?i!==r&&e.message("Fenced code should use "+r+" as a marker",t):r=i))})});var s={"`":!0,"~":!0,null:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module rule-style
 * @fileoverview
 *   Warn when the horizontal rules violate a given or detected style.
 *
 *   Options: `string`, either a valid markdown rule, or `'consistent'`,
 *   default: `'consistent'`.
 *
 *   `'consistent'` detects the first used rule style and warns when subsequent
 *   rules use different styles.
 *
 *   Note: horizontal rules are also called “thematic break”.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   has three settings that define how rules are created:
 *
 *   *   [`rule`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsrule)
 *       (default: `*`) — Marker to use
 *   *   [`ruleRepetition`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsrulerepetition)
 *       (default: `3`) — Number of markers to use
 *   *   [`ruleSpaces`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsrulespaces)
 *       (default: `true`) — Whether to pad markers with spaces
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md", "setting": "* * *"}
 *
 *   * * *
 *
 *   * * *
 *
 * @example {"name": "valid.md", "setting": "_______"}
 *
 *   _______
 *
 *   _______
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   ***
 *
 *   * * *
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:1-3:6: Rules should use `***`
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "!!!", "config": {"positionless": true}}
 *
 *   1:1: Invalid preferred rule-style: provide a valid markdown rule, or `'consistent'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:rule-style",function(t,e,r){var n=String(e);null!==(r="string"==typeof r&&"consistent"!==r?r:null)&&/[^-_* ]/.test(r)&&e.fail("Invalid preferred rule-style: provide a valid markdown rule, or `'consistent'`");i(t,"thematicBreak",function(t){var i,o=s(t).offset,l=c(t).offset;a(t)||(i=n.slice(o,l),r?i!==r&&e.message("Rules should use `"+r+"`",t):r=i)})});var s=o.start,c=o.end},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-table-indentation
 * @fileoverview
 *   Warn when tables are indented.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   removes all unneeded indentation before tables.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   Paragraph.
 *
 *   | A     | B     |
 *   | ----- | ----- |
 *   | Alpha | Bravo |
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Paragraph.
 *
 *   ···| A     | B     |
 *   ···| ----- | ----- |
 *   ···| Alpha | Bravo |
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:1-3:21: Do not indent table rows
 *   5:1-5:21: Do not indent table rows
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:no-table-indentation",function(t,e){var r=String(e);function n(t){var n=r.slice(o.start(t).offset,o.start(t.children[0]).offset);n.indexOf("|")>1&&e.message(s,t)}i(t,"table",function(t){a(t)||t.children.forEach(n);return i.SKIP})});var s="Do not indent table rows"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module table-pipes
 * @fileoverview
 *   Warn when table rows are not fenced with pipes.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   creates fenced rows with initial and final pipes by default. Pass
 *   [`looseTable: true`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsloosetable)
 *   to not use row fences.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   | A     | B     |
 *   | ----- | ----- |
 *   | Alpha | Bravo |
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   A     | B
 *   ----- | -----
 *   Alpha | Bravo
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1: Missing initial pipe in table fence
 *   1:10: Missing final pipe in table fence
 *   3:1: Missing initial pipe in table fence
 *   3:14: Missing final pipe in table fence
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:table-pipes",function(t,e){var r=String(e);i(t,"table",function(t){var n,i,o,f,p,h,d=t.children,g=d.length,m=-1;for(;++m<g;)n=d[m],a(n)||(i=n.children,o=i[0],f=i[i.length-1],p=r.slice(s(n).offset,s(o).offset),h=r.slice(c(f).offset,c(n).offset),-1===p.indexOf("|")&&e.message(l,s(n)),-1===h.indexOf("|")&&e.message(u,c(n)))})});var s=o.start,c=o.end,l="Missing initial pipe in table fence",u="Missing final pipe in table fence"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module table-pipe-alignment
 * @fileoverview
 *   Warn when table pipes are not aligned.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   tries to align tables by default. Pass
 *   [`paddedTable: false`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionspaddedtable)
 *   to not align cells.
 *
 *   Aligning cells perfectly is impossible as some characters (such as emoji or
 *   Chinese characters) are rendered differently in different browsers, terminals,
 *   and editors. You can pass your own
 *   [`stringLength`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsstringlength)
 *   function to customize how cells are aligned. In which case this rule must
 *   be turned off.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   | A     | B     |
 *   | ----- | ----- |
 *   | Alpha | Bravo |
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   | A | B |
 *   | -- | -- |
 *   | Alpha | Bravo |
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:9-3:10: Misaligned table fence
 *   3:17-3:18: Misaligned table fence
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:table-pipe-alignment",function(t,e){var r=String(e);i(t,"table",function(t){var n,i,o,u,f,p,h,d,g,m,v,b,x=t.children,y=a(t)?0:x.length,w=-1,k=[];for(;++w<y;)for(n=x[w],o=s(n),i=n.children,f=i.length,u=-2,g=null;++u<f;)p=g,g=i[m=u+1],h=p?c(p).offset:s(n).offset,d=g?s(g).offset:c(n).offset,v=r.slice(h,d),b=h+v.indexOf("|")-o.offset+1,void 0===k[m]||null===k[m]?k[m]=b:b!==k[m]&&e.message(l,{start:{line:o.line,column:b},end:{line:o.line,column:b+1}})})});var s=o.start,c=o.end,l="Misaligned table fence"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module table-cell-padding
 * @fileoverview
 *   Warn when table cells are incorrectly padded.
 *
 *   Options: `'consistent'`, `'padded'`, or `'compact'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used cell padding style and warns when
 *   subsequent cells use different styles.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   formats tables with padding by default. Pass
 *   [`spacedTable: false`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsspacedtable)
 *   to not use padding.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md", "setting": "padded"}
 *
 *   | A     | B     |
 *   | ----- | ----- |
 *   | Alpha | Bravo |
 *
 * @example {"name": "invalid.md", "label": "input", "setting": "padded"}
 *
 *   | A    |    B |
 *   | :----|----: |
 *   | Alpha|Bravo |
 *
 *   | C      |    D |
 *   | :----- | ---: |
 *   |Charlie | Delta|
 *
 *   Too much padding isn’t good either:
 *
 *   | E     | F        |   G    |      H |
 *   | :---- | -------- | :----: | -----: |
 *   | Echo  | Foxtrot  |  Golf  |  Hotel |
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "padded"}
 *
 *   3:8: Cell should be padded
 *   3:9: Cell should be padded
 *   7:2: Cell should be padded
 *   7:17: Cell should be padded
 *   13:23: Cell should be padded with 1 space, not 2
 *   13:32: Cell should be padded with 1 space, not 2
 *
 * @example {"name": "valid.md", "setting": "compact"}
 *
 *   |A    |B    |
 *   |-----|-----|
 *   |Alpha|Bravo|
 *
 * @example {"name": "invalid.md", "label": "input", "setting": "compact"}
 *
 *   |   A    | B    |
 *   |   -----| -----|
 *   |   Alpha| Bravo|
 *
 *   |C      |     D|
 *   |:------|-----:|
 *   |Charlie|Delta |
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "compact"}
 *
 *   3:5: Cell should be compact
 *   3:12: Cell should be compact
 *   7:15: Cell should be compact
 *
 * @example {"name": "valid-padded.md", "setting": "consistent"}
 *
 *   | A     | B     |
 *   | ----- | ----- |
 *   | Alpha | Bravo |
 *
 *   | C       | D     |
 *   | ------- | ----- |
 *   | Charlie | Delta |
 *
 * @example {"name": "invalid-padded.md", "label": "input", "setting": "consistent"}
 *
 *   | A     | B     |
 *   | ----- | ----- |
 *   | Alpha | Bravo |
 *
 *   | C      |     D |
 *   | :----- | ----: |
 *   |Charlie | Delta |
 *
 * @example {"name": "invalid-padded.md", "label": "output", "setting": "consistent"}
 *
 *   7:2: Cell should be padded
 *
 * @example {"name": "valid-compact.md", "setting": "consistent"}
 *
 *   |A    |B    |
 *   |-----|-----|
 *   |Alpha|Bravo|
 *
 *   |C      |D    |
 *   |-------|-----|
 *   |Charlie|Delta|
 *
 * @example {"name": "invalid-compact.md", "label": "input", "setting": "consistent"}
 *
 *   |A    |B    |
 *   |-----|-----|
 *   |Alpha|Bravo|
 *
 *   |C      |     D|
 *   |:------|-----:|
 *   |Charlie|Delta |
 *
 * @example {"name": "invalid-compact.md", "label": "output", "setting": "consistent"}
 *
 *   7:15: Cell should be compact
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "invalid", "config": {"positionless": true}}
 *
 *   1:1: Invalid table-cell-padding style `invalid`
 *
 * @example {"name": "empty.md", "label": "input", "setting": "padded"}
 *
 *   <!-- Empty cells are OK, but those surrounding them may not be. -->
 *
 *   |        | Alpha | Bravo|
 *   | ------ | ----- | ---: |
 *   | Charlie|       |  Echo|
 *
 * @example {"name": "empty.md", "label": "output", "setting": "padded"}
 *
 *   3:25: Cell should be padded
 *   5:10: Cell should be padded
 *   5:25: Cell should be padded
 *
 * @example {"name": "missing-body.md", "setting": "padded"}
 *
 *   <!-- Missing cells are fine as well. -->
 *
 *   | Alpha | Bravo    | Charlie |
 *   | ----- | -------- | ------- |
 *   | Delta |
 *   | Echo  | Foxtrott |
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:table-cell-padding",function(t,e,r){var n=String(e);!0!==l[r="string"==typeof r&&"consistent"!==r?r:null]&&e.fail("Invalid table-cell-padding style `"+r+"`");function o(t,r,n,i){var o,a=r.node,s=r[t],c=r.index;if(void 0!==s&&s!==n){if(o="Cell should be ",0===n){if(o+="compact",u(a)<i[c])return}else if(o+="padded",s>n&&(o+=" with 1 space, not "+s,u(a)<i[c]))return;e.message(o,a.position[t])}}i(t,"table",function(t){var e,l,f,p,h,d,g,m,v,b,x,y=t.children,w=new Array(t.align.length),k=a(t)?-1:y.length,A=-1,q=[];for(;++A<k;)for(l=y[A],f=l.children,h=f.length,p=-2,g=null,x=void 0;++p<h;)d=g,g=f[p+1],m=n.slice(d?c(d).offset:s(l).offset,g?s(g).offset:c(l).offset),v=m.indexOf("|"),d&&0!==d.children.length&&void 0!==x?(q.push({node:d,start:x,end:v,index:p}),w[p]=Math.max(w[p]||0,u(d))):x=void 0,x=g&&0!==g.children.length?m.length-v-1:void 0;e=r?"padded"===r?1:0:!q[0]||q[0].start&&q[0].end?1:0;A=-1,k=q.length;for(;++A<k;)o("start",b=q[A],e,w),o("end",b,e,w);return i.SKIP})});var s=o.start,c=o.end,l={null:!0,padded:!0,compact:!0};function u(t){return c(t).offset-s(t).offset}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-inline-padding
 * @fileoverview
 *   Warn when inline nodes are padded with spaces between their markers and
 *   content.
 *
 *   Warns for emphasis, strong, delete, images, and links.
 *
 * @example {"name": "valid.md"}
 *
 *   Alpha, *bravo*, _charlie_, [delta](http://echo.fox/trot)
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Alpha, * bravo *, _ charlie _, [ delta ](http://echo.fox/trot)
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:8-1:17: Don’t pad `emphasis` with inner spaces
 *   1:19-1:30: Don’t pad `emphasis` with inner spaces
 *   1:32-1:63: Don’t pad `link` with inner spaces
 */var n=r(72),i=r(73),o=r(74),a=r(96);t.exports=n("remark-lint:no-inline-padding",function(t,e){i(t,["emphasis","strong","delete","image","link"],function(t){var r;o(t)||" "!==(r=a(t)).charAt(0)&&" "!==r.charAt(r.length-1)||e.message("Don’t pad `"+t.type+"` with inner spaces",t)})})},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-shortcut-reference-image
 * @fileoverview
 *   Warn when shortcut reference images are used.
 *
 *   Shortcut references render as images when a definition is found, and as
 *   plain text without definition.  Sometimes, you don’t intend to create an
 *   image from the reference, but this rule still warns anyway.  In that case,
 *   you can escape the reference like so: `!\[foo]`.
 *
 * @example {"name": "valid.md"}
 *
 *   ![foo][]
 *
 *   [foo]: http://foo.bar/baz.png
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   ![foo]
 *
 *   [foo]: http://foo.bar/baz.png
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:7: Use the trailing [] on reference images
 */var n=r(72),i=r(73),o=r(74);t.exports=n("remark-lint:no-shortcut-reference-image",function(t,e){i(t,"imageReference",function(t){o(t)||"shortcut"!==t.referenceType||e.message(a,t)})});var a="Use the trailing [] on reference images"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-shortcut-reference-link
 * @fileoverview
 *   Warn when shortcut reference links are used.
 *
 *   Shortcut references render as links when a definition is found, and as
 *   plain text without definition.  Sometimes, you don’t intend to create a
 *   link from the reference, but this rule still warns anyway.  In that case,
 *   you can escape the reference like so: `\[foo]`.
 *
 * @example {"name": "valid.md"}
 *
 *   [foo][]
 *
 *   [foo]: http://foo.bar/baz
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [foo]
 *
 *   [foo]: http://foo.bar/baz
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:6: Use the trailing [] on reference links
 */var n=r(72),i=r(73),o=r(74);t.exports=n("remark-lint:no-shortcut-reference-link",function(t,e){i(t,"linkReference",function(t){o(t)||"shortcut"!==t.referenceType||e.message(a,t)})});var a="Use the trailing [] on reference links"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module final-definition
 * @fileoverview
 *   Warn when definitions are not placed at the end of the file.
 *
 * @example {"name": "valid.md"}
 *
 *   Paragraph.
 *
 *   [example]: http://example.com "Example Domain"
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   Paragraph.
 *
 *   [example]: http://example.com "Example Domain"
 *
 *   Another paragraph.
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   3:1-3:47: Move definitions to the end of the file (after the node at line `5`)
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:final-definition",function(t,e){var r=null;i(t,function(t){var n=s(t).line;if("root"===t.type||a(t))return;"definition"===t.type?null!==r&&r>n&&e.message("Move definitions to the end of the file (after the node at line `"+r+"`)",t):null===r&&(r=n)},!0)});var s=o.start},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module definition-case
 * @fileoverview
 *   Warn when definition labels are not lower-case.
 *
 * @example {"name": "valid.md"}
 *
 *   [example]: http://example.com "Example Domain"
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [Example]: http://example.com "Example Domain"
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:47: Do not use upper-case characters in definition labels
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:definition-case",function(t,e){var r=String(e);i(t,["definition","footnoteDefinition"],function(t){var n,i=o.start(t).offset,l=o.end(t).offset;a(t)||(n=r.slice(i,l).match(s)[1])!==n.toLowerCase()&&e.message(c,t)})});var s=/^\s*\[((?:\\[\s\S]|[^[\]])+)]/,c="Do not use upper-case characters in definition labels"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module definition-spacing
 * @fileoverview
 *   Warn when consecutive white space is used in a definition.
 *
 * @example {"name": "valid.md"}
 *
 *   [example domain]: http://example.com "Example Domain"
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [example····domain]: http://example.com "Example Domain"
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:57: Do not use consecutive white-space in definition labels
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:definition-spacing",function(t,e){var r=String(e);i(t,["definition","footnoteDefinition"],function(t){var n=o.start(t).offset,i=o.end(t).offset;!a(t)&&/[ \t\n]{2,}/.test(r.slice(n,i).match(s)[1])&&e.message(c,t)})});var s=/^\s*\[((?:\\[\s\S]|[^[\]])+)]/,c="Do not use consecutive white-space in definition labels"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module link-title-style
 * @fileoverview
 *   Warn when link and definition titles occur with incorrect quotes.
 *
 *   Options: `'consistent'`, `'"'`, `'\''`, or `'()'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used quote style and warns when subsequent
 *   titles use different styles.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   uses single quotes for titles if they contain a double quote, and double
 *   quotes otherwise.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md", "setting": "\""}
 *
 *   [Example](http://example.com#without-title)
 *   [Example](http://example.com "Example Domain")
 *   ![Example](http://example.com "Example Domain")
 *
 *   [Example]: http://example.com "Example Domain"
 *
 *   You can use parens in URLs if they’re not a title (see GH-166):
 *
 *   [Example](#Heading-(optional))
 *
 * @example {"name": "invalid.md", "label": "input", "setting": "\""}
 *
 *   [Example]: http://example.com 'Example Domain'
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "\""}
 *
 *   1:31-1:47: Titles should use `"` as a quote
 *
 * @example {"name": "valid.md", "setting": "'"}
 *
 *   [Example](http://example.com#without-title)
 *   [Example](http://example.com 'Example Domain')
 *   ![Example](http://example.com 'Example Domain')
 *
 *   [Example]: http://example.com 'Example Domain'
 *
 * @example {"name": "invalid.md", "label": "input", "setting": "'"}
 *
 *   [Example]: http://example.com "Example Domain"
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "'"}
 *
 *   1:31-1:47: Titles should use `'` as a quote
 *
 * @example {"name": "valid.md", "setting": "()"}
 *
 *   [Example](http://example.com#without-title)
 *   [Example](http://example.com (Example Domain))
 *   ![Example](http://example.com (Example Domain))
 *
 *   [Example]: http://example.com (Example Domain)
 *
 * @example {"name": "invalid.md", "label": "input", "setting": "()"}
 *
 *   [Example](http://example.com 'Example Domain')
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "()"}
 *
 *   1:30-1:46: Titles should use `()` as a quote
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   [Example](http://example.com "Example Domain")
 *   [Example](http://example.com 'Example Domain')
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:30-2:46: Titles should use `"` as a quote
 *
 * @example {"name": "invalid.md", "setting": ".", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Invalid link title style marker `.`: use either `'consistent'`, `'"'`, `'\''`, or `'()'`
 */var n=r(72),i=r(112),o=r(73),a=r(75),s=r(74);t.exports=n("remark-lint:link-title-style",function(t,e,r){var n=String(e),a=i(e);(r="()"===(r="string"==typeof r&&"consistent"!==r?r:null)||"("===r?")":r)&&!c.call(f,r)&&e.fail("Invalid link title style marker `"+r+"`: use either `'consistent'`, `'\"'`, `'\\''`, or `'()'`");o(t,["link","image","definition"],function(t){var i,o,c,p,h,d,g;if(s(t))return;c=u(t).offset-1,i=t.children?t.children[t.children.length-1]:null,o=i?u(i):l(t),"definition"!==t.type&&c--;for(;c&&(h=n.charAt(c),/\s/.test(h));)c--;if(!(h in f))return;if(d=f[h],(p=n.lastIndexOf(d,c-1))<=o||!/\s/.test(n.charAt(p-1)))return;r?r!==h&&(g="Titles should use `"+(")"===r?"()":r)+"` as a quote",e.message(g,{start:a.toPosition(p),end:a.toPosition(c+1)})):r=h})});var c={}.hasOwnProperty,l=a.start,u=a.end,f={'"':'"',"'":"'",")":"("}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module strong-marker
 * @fileoverview
 *   Warn for violating strong markers.
 *
 *   Options: `'consistent'`, `'*'`, or `'_'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used strong style and warns when subsequent
 *   strongs use different styles.
 *
 *   Note: strong is also called “importance”.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   formats importance using an asterisk (`*`) by default. Pass
 *   [`strong: '_'`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsstrong)
 *   to use underscores instead.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   **foo** and **bar**.
 *
 * @example {"name": "also-valid.md"}
 *
 *   __foo__ and __bar__.
 *
 * @example {"name": "valid.md", "setting": "*"}
 *
 *   **foo**.
 *
 * @example {"name": "valid.md", "setting": "_"}
 *
 *   __foo__.
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   **foo** and __bar__.
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:13-1:20: Strong should use `*` as a marker
 *
 * @example {"name": "invalid.md", "label": "output", "setting": "!", "config": {"positionless": true}}
 *
 *   1:1: Invalid strong marker `!`: use either `'consistent'`, `'*'`, or `'_'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:strong-marker",function(t,e,r){var n=String(e);!0!==s[r="string"==typeof r&&"consistent"!==r?r:null]&&e.fail("Invalid strong marker `"+r+"`: use either `'consistent'`, `'*'`, or `'_'`");i(t,"strong",function(t){var i=n.charAt(o.start(t).offset);a(t)||(r?i!==r&&e.message("Strong should use `"+r+"` as a marker",t):r=i)})});var s={"*":!0,_:!0,null:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module emphasis-marker
 * @fileoverview
 *   Warn for violating emphasis markers.
 *
 *   Options: `'consistent'`, `'*'`, or `'_'`, default: `'consistent'`.
 *
 *   `'consistent'` detects the first used emphasis style and warns when
 *   subsequent emphasis use different styles.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   formats emphasis using an underscore (`_`) by default. Pass
 *   [`emphasis: '*'`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#optionsemphasis)
 *   to use asterisks instead.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"setting": "*", "name": "valid.md"}
 *
 *   *foo*
 *
 * @example {"setting": "*", "name": "invalid.md", "label": "input"}
 *
 *   _foo_
 *
 * @example {"setting": "*", "name": "invalid.md", "label": "output"}
 *
 *   1:1-1:6: Emphasis should use `*` as a marker
 *
 * @example {"setting": "_", "name": "valid.md"}
 *
 *   _foo_
 *
 * @example {"setting": "_", "name": "invalid.md", "label": "input"}
 *
 *   *foo*
 *
 * @example {"setting": "_", "name": "invalid.md", "label": "output"}
 *
 *   1:1-1:6: Emphasis should use `_` as a marker
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   *foo*
 *   _bar_
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   2:1-2:6: Emphasis should use `*` as a marker
 *
 * @example {"setting": "invalid", "name": "invalid.md", "label": "output", "config": {"positionless": true}}
 *
 *   1:1: Invalid emphasis marker `invalid`: use either `'consistent'`, `'*'`, or `'_'`
 */var n=r(72),i=r(73),o=r(75),a=r(74);t.exports=n("remark-lint:emphasis-marker",function(t,e,r){var n=String(e);!0!==s[r="string"==typeof r&&"consistent"!==r?r:null]&&e.fail("Invalid emphasis marker `"+r+"`: use either `'consistent'`, `'*'`, or `'_'`");i(t,"emphasis",function(t){var i;a(t)||(i=n.charAt(o.start(t).offset),r?i!==r&&e.message("Emphasis should use `"+r+"` as a marker",t):r=i)})});var s={null:!0,"*":!0,_:!0}},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-emphasis-as-heading
 * @fileoverview
 *   Warn when emphasis (including strong), instead of a heading, introduces
 *   a paragraph.
 *
 * @example {"name": "valid.md"}
 *
 *   # Foo
 *
 *   Bar.
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   *Foo*
 *
 *   Bar.
 *
 *   __Qux__
 *
 *   Quux.
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:6: Don’t use emphasis to introduce a section, use a heading
 *   5:1-5:8: Don’t use emphasis to introduce a section, use a heading
 */var n=r(72),i=r(73),o=r(74);t.exports=n("remark-lint:no-emphasis-as-heading",function(t,e){i(t,"paragraph",function(t,r,n){var i=t.children[0],s=n.children[r-1],c=n.children[r+1];o(t)||s&&"heading"===s.type||!c||"paragraph"!==c.type||1!==t.children.length||"emphasis"!==i.type&&"strong"!==i.type||e.message(a,t)})});var a="Don’t use emphasis to introduce a section, use a heading"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-literal-urls
 * @fileoverview
 *   Warn when URLs without angle-brackets are used.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   never creates literal URLs and always uses angle-brackets.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   <http://foo.bar/baz>
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   http://foo.bar/baz
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:19: Don’t use literal URLs without angle brackets
 */var n=r(72),i=r(73),o=r(75),a=r(74),s=r(96);t.exports=n("remark-lint:no-literal-urls",function(t,e){i(t,"link",function(t){var r=t.children,n=s(t);a(t)||c(t).column!==c(r[0]).column||l(t).column!==l(r[r.length-1]).column||t.url!==u+n&&t.url!==n||e.message(f,t)})});var c=o.start,l=o.end,u="mailto:",f="Don’t use literal URLs without angle brackets"},function(t,e,r){"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module no-auto-link-without-protocol
 * @fileoverview
 *   Warn for angle-bracketed links without protocol.
 *
 *   ## Fix
 *
 *   [`remark-stringify`](https://github.com/remarkjs/remark/tree/master/packages/remark-stringify)
 *   adds a protocol where needed.
 *
 *   See [Using remark to fix your markdown](https://github.com/remarkjs/remark-lint#using-remark-to-fix-your-markdown)
 *   on how to automatically fix warnings for this rule.
 *
 * @example {"name": "valid.md"}
 *
 *   <http://www.example.com>
 *   <mailto:foo@bar.com>
 *
 *   Most markdown vendors don’t recognize the following as a link:
 *   <www.example.com>
 *
 * @example {"name": "invalid.md", "label": "input"}
 *
 *   <foo@bar.com>
 *
 * @example {"name": "invalid.md", "label": "output"}
 *
 *   1:1-1:14: All automatic links must start with a protocol
 */var n=r(72),i=r(73),o=r(75),a=r(74),s=r(96);t.exports=n("remark-lint:no-auto-link-without-protocol",function(t,e){i(t,"link",function(t){var r;a(t)||(r=t.children,c(t).column!==c(r[0]).column-1||l(t).column!==l(r[r.length-1]).column+1||u.test(s(t))||e.message(f,t))})});var c=o.start,l=o.end,u=/^[a-z][a-z+.-]+:\/?/i,f="All automatic links must start with a protocol"},function(t,e,r){"use strict";t.exports=r(396)},function(t,e,r){"use strict";t.exports=function(t,e){var r=function(t,e){var r=e||{},i=r.allowDangerousHTML;return u.dangerous=i,u.definition=c(t,r),u.footnotes=[],u.augment=l,u.handlers=n(f,r.handlers||{}),o(t,"footnoteDefinition",function(t){u.footnotes.push(t)}),u;function l(t,e){var r,i;return t&&"data"in t&&(r=t.data,"element"===e.type&&r.hName&&(e.tagName=r.hName),"element"===e.type&&r.hProperties&&(e.properties=n(e.properties,r.hProperties)),e.children&&r.hChildren&&(e.children=r.hChildren)),i=t&&t.position?t:{position:t},s(i)||(e.position={start:a.start(i),end:a.end(i)}),e}function u(t,e,r,n){return null==n&&"object"==typeof r&&"length"in r&&(n=r,r={}),l(t,{type:"element",tagName:e,properties:r||{},children:n||[]})}}(t,e),p=l(r,t),h=u(r);p&&p.children&&h&&(p.children=p.children.concat(i("text","\n"),h));return p};var n=r(81),i=r(85),o=r(73),a=r(75),s=r(74),c=r(397),l=r(167),u=r(398),f=r(399)},function(t,e,r){"use strict";var n=r(73);t.exports=function(t,e){return function(t){return function(e){var r=e&&o(e);return r&&i.call(t,r)?t[r]:null}}(function(t,e){var r={};if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return n(t,"definition",e&&e.commonmark?function(t){var e=o(t.identifier);i.call(r,e)||(r[e]=t)}:function(t){r[o(t.identifier)]=t}),r}(t,e))};var i={}.hasOwnProperty;function o(t){return t.toUpperCase()}},function(t,e,r){"use strict";t.exports=function(t){var e,r=t.footnotes,a=r.length,s=-1,c=[];if(!a)return null;for(;++s<a;)e=r[s],c[s]={type:"listItem",data:{hProperties:{id:"fn-"+e.identifier}},children:e.children.concat({type:"link",url:"#fnref-"+e.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]}),position:e.position};return t(null,"div",{className:["footnotes"]},o([n(t),i(t,{type:"list",ordered:!0,children:c})],!0))};var n=r(168),i=r(169),o=r(99)},function(t,e,r){"use strict";function n(){return null}t.exports={blockquote:r(400),break:r(401),code:r(402),delete:r(404),emphasis:r(405),footnoteReference:r(170),footnote:r(406),heading:r(407),html:r(408),imageReference:r(409),image:r(410),inlineCode:r(411),linkReference:r(412),link:r(413),listItem:r(414),list:r(169),paragraph:r(415),root:r(416),strong:r(417),table:r(418),text:r(419),thematicBreak:r(168),toml:n,yaml:n,definition:n,footnoteDefinition:n}},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"blockquote",n(i(t,e),!0))};var n=r(99),i=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){return[t(e,"br"),n("text","\n")]};var n=r(85)},function(t,e,r){"use strict";t.exports=function(t,e){var r=e.value?n(e.value+"\n"):"",o=e.lang&&e.lang.match(/^[^ \t]+(?=[ \t]|$)/),a={};o&&(a.className=["language-"+o]);return t(e.position,"pre",[t(e,"code",a,[i("text",r)])])};var n=r(403),i=r(85)},function(t,e,r){"use strict";t.exports=function(t,e){var r,s,c="string"==typeof t,l=c&&t.length,u=0,f=-1,p=-1,h=e||4,d=[];if(!c)throw new Error("detab expected string");for(;++f<l;)(r=t.charCodeAt(f))===i?(p+=s=h-(p+1)%h,d.push(t.slice(u,f)+n(" ",s)),u=f+1):r===o||r===a?p=-1:p++;return d.push(t.slice(u)),d.join("")};var n=r(84),i=9,o=10,a=13},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"del",n(t,e))};var n=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"em",n(t,e))};var n=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){var r=[],i=1,o=t.footnotes,a=o.length,s=-1;for(;++s<a;)r[s]=o[s].identifier;for(;-1!==r.indexOf(String(i));)i++;return i=String(i),o.push({type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:e.children}],position:e.position}),n(t,{type:"footnoteReference",identifier:i,position:e.position})};var n=r(170)},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"h"+e.depth,n(t,e))};var n=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){return t.dangerous?t.augment(e,n("raw",e.value)):null};var n=r(85)},function(t,e,r){"use strict";t.exports=function(t,e){var r,o=t.definition(e.identifier);if(!o)return i(t,e);r={src:n(o.url||""),alt:e.alt},null!==o.title&&void 0!==o.title&&(r.title=o.title);return t(e,"img",r)};var n=r(116),i=r(171)},function(t,e,r){"use strict";var n=r(116);t.exports=function(t,e){var r={src:n(e.url),alt:e.alt};null!==e.title&&void 0!==e.title&&(r.title=e.title);return t(e,"img",r)}},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"code",[i("text",n(e.value))])};var n=r(157),i=r(85)},function(t,e,r){"use strict";t.exports=function(t,e){var r,a=t.definition(e.identifier);if(!a)return i(t,e);r={href:n(a.url||"")},null!==a.title&&void 0!==a.title&&(r.title=a.title);return t(e,"a",r,o(t,e))};var n=r(116),i=r(171),o=r(82)},function(t,e,r){"use strict";var n=r(116),i=r(82);t.exports=function(t,e){var r={href:n(e.url)};null!==e.title&&void 0!==e.title&&(r.title=e.title);return t(e,"a",r,i(t,e))}},function(t,e,r){"use strict";t.exports=function(t,e,r){var a,s,c=e.children,l=c[0],u={},f=!1;r&&r.loose||1!==c.length||"paragraph"!==l.type||(f=!0);a=o(t,f?l:e),"boolean"==typeof e.checked&&(f||l&&"paragraph"===l.type||a.unshift(t(null,"p",[])),0!==(s=f?a:a[0].children).length&&s.unshift(n("text"," ")),s.unshift(t(null,"input",{type:"checkbox",checked:e.checked,disabled:!0})),u.className=["task-list-item"]);f||0===a.length||(a=i(a,!0));return t(e,"li",u,a)};var n=r(85),i=r(99),o=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"p",n(t,e))};var n=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){return t.augment(e,n("root",i(o(t,e))))};var n=r(85),i=r(99),o=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){return t(e,"strong",n(t,e))};var n=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){var r,a,s,c,l,u=e.children,f=u.length,p=e.align,h=p.length,d=[];for(;f--;){for(a=u[f].children,c=0===f?"th":"td",r=h,s=[];r--;)l=a[r],s[r]=t(l,c,{align:p[r]},l?o(t,l):[]);d[f]=t(u[f],"tr",i(s,!0))}return t(e,"table",i([t(d[0].position,"thead",i([d[0]],!0)),t({start:n.start(d[1]),end:n.end(d[d.length-1])},"tbody",i(d.slice(1),!0))],!0))};var n=r(75),i=r(99),o=r(82)},function(t,e,r){"use strict";t.exports=function(t,e){return t.augment(e,n("text",i(e.value)))};var n=r(85),i=r(420)},function(t,e,r){"use strict";t.exports=function(t){return String(t).replace(n,i)};var n=/[ \t]*\n+[ \t]*/g,i="\n"},function(t,e,r){"use strict";t.exports=r(422)},function(t,e,r){"use strict";var n=r(423),i=r(424),o=r(177);t.exports=function(t,e){var r=e||{},v=r.quote||a,b=r.quoteSmart,x=r.allowParseErrors,y=r.allowDangerousCharacters,w=v===a?s:a,k=x?c:l,A=x?f:p,q=x?h:d,E=x?g:m;if(v!==a&&v!==s)throw new Error("Invalid quote `"+v+"`, expected `"+s+"` or `"+a+"`");return o({NAME:k.concat(y?[]:u),UNQUOTED:A.concat(y?[]:u),DOUBLE_QUOTED:E.concat(y?[]:u),SINGLE_QUOTED:q.concat(y?[]:u),omit:r.omitOptionalTags&&i,quote:v,alternative:b?w:null,unquoted:Boolean(r.preferUnquoted),tight:r.tightAttributes,tightLists:r.tightCommaSeparatedLists,tightClose:r.tightSelfClosing,collapseEmpty:r.collapseEmptyAttributes,dangerous:r.allowDangerousHTML,voids:r.voids||n.concat(),entities:r.entities||{},close:r.closeSelfClosing},t)};var a='"',s="'",c=["&"," ","\t","\n","\r","\f","/",">","="],l=c.concat("\0",a,s,"<"),u=[a,s,"`"],f=["&"," ","\t","\n","\r","\f",">"],p=f.concat("\0",a,s,"<","=","`"),h=["&",s],d=h.concat("\0"),g=["&",a],m=g.concat("\0")},function(t){t.exports=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]},function(t,e,r){"use strict";e.opening=r(425),e.closing=r(175)},function(t,e,r){"use strict";var n=r(114),i=r(172),o=r(140).before,a=r(426),s=r(427),c=r(174),l=r(175),u=r(176),f={}.hasOwnProperty;t.exports=u({html:function(t){var e=a(t);return!e||!n("comment",e)},head:function(t){var e,r,n=t.children,i=n.length,o={},a=-1;for(;++a<i;)if(e=n[a],r=e.tagName,"element"===e.type&&("title"===r||"base"===r)){if(f.call(o,r))return!1;o[r]=!0}return Boolean(i)},body:function(t){var e=a(t,!0);return!e||!n("comment",e)&&!c(e)&&!i(e,["meta","link","script","style","template"])},colgroup:function(t,e,r){var n=o(r,e),c=a(t,!0);if(i(n,"colgroup")&&l(n,s(r,n),r))return!1;return c&&i(c,"col")},tbody:function(t,e,r){var n=o(r,e),c=a(t);if(i(n,["thead","tbody"])&&l(n,s(r,n),r))return!1;return c&&i(c,"tr")}})},function(t,e,r){"use strict";var n=r(140).after;t.exports=function(t,e){return n(t,-1,e)}},function(t,e,r){"use strict";t.exports=function(t,e){return t&&t.children&&t.children.indexOf(e)}},function(t,e,r){"use strict";var n=r(81),i=r(429).stringify,o=r(430).stringify,a=r(431),s=r(137),c=r(432),l=r(165),u=r(178);t.exports=function(t,e,r,n){var i=e.tagName,o=u(t,"template"===i?e.content:e),a=-1!==t.voids.indexOf(i.toLowerCase()),s=function(t,e){var r,n,i,o,a,s,c=[];for(r in e)null!=(n=e[r])&&(i=y(t,r,n))&&c.push(i);o=c.length,a=-1;for(;++a<o;)i=c[a],s=t.tight&&i.charAt(i.length-1),a!==o-1&&s!==d&&s!==g&&(c[a]=i+h);return c.join(p)}(t,e.properties),c=t.omit,l="";a=!o&&a,!s&&c&&c.opening(e,r,n)||(l=v+i+(s?h+s:p),a&&t.close&&(t.tightClose&&s.charAt(s.length-1)!==x||(l+=h),l+=x),l+=b);l+=o,a||c&&c.closing(e,r,n)||(l+=v+x+i+b);return l};var f="data",p="",h=" ",d='"',g="'",m="=",v="<",b=">",x="/";function y(t,e,r){var u,h=a(e)||{};return null==r||"number"==typeof r&&isNaN(r)||!r&&h.boolean||!1===r&&h.overloadedBoolean?p:(u=function(t,e){var r=(a(e)||{}).name||c(e);r.slice(0,f.length)===f&&/[0-9]/.test(r.charAt(f.length))&&(r=f+"-"+r.slice(4));return s(r,n(t.entities,{subset:t.NAME}))}(t,e),r&&h.boolean||!0===r&&h.overloadedBoolean?u:u+function(t,e,r){var c,u=a(e)||{},f=t.entities,p=t.quote,h=t.alternative;"object"==typeof r&&"length"in r&&(r=(u.commaSeparated?o:i)(r,{padLeft:!t.tightLists}));!(r=String(r))&&t.collapseEmpty||(c=r,t.unquoted&&(c=s(r,n(f,{subset:t.UNQUOTED,attribute:!0}))),t.unquoted&&c===r||(h&&l(r,p)>l(r,h)&&(p=h),r=s(r,n(f,{subset:p===g?t.SINGLE_QUOTED:t.DOUBLE_QUOTED,attribute:!0})),r=p+r+p),r=r?m+r:r);return r}(t,e,r))}},function(t,e,r){"use strict";var n=r(91);e.parse=function(t){var e=n(String(t||i));return e===i?[]:e.split(a)},e.stringify=function(t){return n(t.join(o))};var i="",o=" ",a=/[ \t\n\r\f]+/g},function(t,e,r){"use strict";e.parse=function(t){var e,r=[],o=String(t||a),s=o.indexOf(i),c=0,l=!1;for(;!l;)-1===s&&(s=o.length,l=!0),!(e=n(o.slice(c,s)))&&l||r.push(e),c=s+1,s=o.indexOf(i,c);return r},e.stringify=function(t,e){var r=e||{},s=!1===r.padLeft?a:o,c=r.padRight?o:a;t[t.length-1]===a&&(t=t.concat(a));return n(t.join(c+i+s))};var n=r(91),i=",",o=" ",a=""},function(t,e,r){"use strict";t.exports=l;var n,i,o,a={abbr:null,accept:256,acceptCharset:128,accessKey:128,action:null,allowFullScreen:9,allowTransparency:1,alt:null,as:null,async:8,autoComplete:128,autoFocus:8,autoPlay:8,capture:9,cellPadding:null,cellSpacing:null,challenge:1,charSet:1,checked:10,cite:null,className:129,cols:49,colSpan:null,command:null,content:null,contentEditable:null,contextMenu:1,controls:10,controlsList:128,coords:272,crossOrigin:null,data:null,dateTime:1,default:8,defer:8,dir:null,dirName:null,disabled:9,download:64,draggable:null,dropzone:128,encType:null,form:1,formAction:1,formEncType:1,formMethod:1,formNoValidate:8,formTarget:1,frameBorder:1,headers:128,height:49,hidden:9,high:16,href:null,hrefLang:null,htmlFor:128,httpEquiv:128,id:2,inputMode:1,is:1,isMap:8,keyParams:1,keyType:1,kind:null,label:null,lang:null,list:1,loop:10,low:16,manifest:1,marginHeight:16,marginWidth:16,max:null,maxLength:49,media:1,mediaGroup:null,menu:null,method:null,min:null,minLength:49,multiple:10,muted:10,name:null,nonce:null,noValidate:8,open:8,optimum:16,pattern:null,ping:128,placeholder:null,playsInline:8,poster:null,preload:null,profile:null,radioGroup:null,readOnly:10,referrerPolicy:null,rel:129,required:8,reversed:8,role:1,rows:49,rowSpan:48,sandbox:128,scope:null,scoped:8,scrolling:null,seamless:9,selected:10,shape:null,size:49,sizes:129,slot:null,sortable:8,sorted:128,span:48,spellCheck:null,src:null,srcDoc:2,srcLang:null,srcSet:257,start:16,step:null,style:null,summary:null,tabIndex:16,target:null,title:null,translate:null,type:null,typeMustMatch:8,useMap:null,value:2,volume:48,width:17,wmode:1,wrap:null,autoCapitalize:null,autoCorrect:null,autoSave:null,itemProp:129,itemScope:9,itemType:129,itemID:1,itemRef:129,property:null,results:null,security:1,unselectable:1,xmlLang:1,xmlBase:1},s={xmlbase:"xml:base",xmllang:"xml:lang",classname:"class",htmlfor:"for",httpequiv:"http-equiv",acceptcharset:"accept-charset"},c={};for(n in l.all=c,a)i=f(n),i=s[i]||i,o=a[n],c[i]={name:i,propertyName:n,mustUseAttribute:u(o,1),mustUseProperty:u(o,2),boolean:u(o,8),overloadedBoolean:u(o,64),numeric:u(o,16),positiveNumeric:u(o,48),commaSeparated:u(o,256),spaceSeparated:u(o,128)};function l(t){var e=f(t);return c[s[e]||e]}function u(t,e){return(t&e)===e}function f(t){return t.toLowerCase()}},function(t,e,r){"use strict";var n=/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,i=/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;t.exports=e=function(t){return t.replace(n,function(t){return"-"+t.toLowerCase()})},e.reverse=function(t){return t.replace(i,function(t){return t.slice(1).toUpperCase()})}},function(t,e,r){"use strict";function n(t){var e=-1===t.indexOf('"')?'"':"'";return e+t+e}t.exports=function(t,e){var r=e.public,i=e.system,o="<!DOCTYPE";if(!e.name)return o+">";o+=" "+e.name,null!=r?o+=" PUBLIC "+n(r):null!=i&&(o+=" SYSTEM");null!=i&&(o+=" "+n(i));return o+">"}},function(t,e,r){"use strict";t.exports=function(t,e){return"\x3c!--"+e.value+"--\x3e"}},function(t,e,r){"use strict";var n=r(179);t.exports=function(t,e){return t.dangerous?e.value:n(t,e)}},function(t,e,r){"use strict";t.exports=r(437)},function(t,e,r){"use strict";var n=r(81),i=r(438);t.exports=function(t,e){var r,o={type:"root",children:[]};if(!t||"object"!=typeof t||!t.type)return o;if(!(r=s(n(i,e||{}),t,[])))return o;if("length"in r)return 1===r.length?r[0]:(o.children=r,o);return r};var o={}.hasOwnProperty,a={root:{children:c},doctype:function(t){return t.allowDoctypes?{name:f}:null},comment:function(t){return t.allowComments?{value:h}:null},element:{tagName:p,properties:function(t,e,r,n){var i,a,s,c=p(t,r.tagName,r,n),f=t.attributes,h=e||{},d={};for(a in i=o.call(f,c)?f[c]:[],i=[].concat(i,f["*"]),h)s=h[a],(-1!==i.indexOf(a)||g(a)&&-1!==i.indexOf("data*"))&&null!=(s=s&&"object"==typeof s&&"length"in s?l(t,s,a):u(t,s,a))&&(d[a]=s);return d},children:c},text:{value:h},"*":{data:d,position:d}};function s(t,e,r){var i,s,c,l,u=e&&e.type,f={type:e.type},p=!0;if(o.call(a,u))if("function"==typeof(i=a[u])&&(i=i(t,e)),i)for(l in s=n(i,a["*"]))!1===(c=s[l](t,e[l],e,r))?(p=!1,f[l]=e[l]):null!=c&&(f[l]=c);else p=!1;else p=!1;return p?f:f.children&&0!==f.children.length&&-1===t.strip.indexOf(f.tagName)?f.children:null}function c(t,e,r,n){var i,o=e||[],a=o.length||0,c=[],l=-1;for(n=n.concat(r.tagName);++l<a;)(i=s(t,o[l],n))&&("length"in i?c=c.concat(i):c.push(i));return c}function l(t,e,r){for(var n,i=e.length,o=[],a=-1;++a<i;)null!=(n=u(t,e[a],r))&&o.push(n);return o}function u(t,e,r){return"boolean"!=typeof e&&"number"!=typeof e&&"string"!=typeof e?null:function(t,e,r){var n,i,a,s,c,l=t.protocols;if(0===(l=o.call(l,r)?l[r].concat():[]).length)return!0;if(e=String(e),"#"===(i=e.charAt(0))||"/"===i)return!0;if(-1===(a=e.indexOf(":")))return!0;s=l.length,c=-1;for(;++c<s;)if(n=l[c],a===n.length&&e.slice(0,n.length)===n)return!0;if(-1!==(c=e.indexOf("?"))&&a>c)return!0;if(-1!==(c=e.indexOf("#"))&&a>c)return!0;return!1}(t,e,r)?(-1!==t.clobber.indexOf(r)&&(e=t.clobberPrefix+e),e):null}function f(){return"html"}function p(t,e,r,n){var i,a,s="string"==typeof e?e:null,c=t.ancestors;if(!s||"*"===s||-1===t.tagNames.indexOf(s))return!1;if(0!==(c=o.call(c,s)?c[s]:[]).length)for(i=c.length+1,a=-1;++a<i;){if(!c[a])return!1;if(-1!==n.indexOf(c[a]))break}return s}function h(t,e){return"string"==typeof e?e:""}function d(t,e){return e}function g(t){return t.length>4&&"data"===t.slice(0,4).toLowerCase()}},function(t){t.exports={strip:["script"],clobberPrefix:"user-content-",clobber:["name","id"],ancestors:{li:["ol","ul"],tbody:["table"],tfoot:["table"],thead:["table"],td:["table"],th:["table"],tr:["table"]},protocols:{href:["http","https","mailto"],cite:["http","https"],src:["http","https"],longDesc:["http","https"]},tagNames:["h1","h2","h3","h4","h5","h6","h7","h8","br","b","i","strong","em","a","pre","code","img","tt","div","ins","del","sup","sub","p","ol","ul","table","thead","tbody","tfoot","blockquote","dl","dt","dd","kbd","q","samp","var","hr","ruby","rt","rp","li","tr","td","th","s","strike","summary","details"],attributes:{a:["href"],img:["src","longDesc"],div:["itemScope","itemType"],blockquote:["cite"],del:["cite"],ins:["cite"],q:["cite"],"*":["abbr","accept","acceptCharset","accessKey","action","align","alt","axis","border","cellPadding","cellSpacing","char","charoff","charSet","checked","clear","cols","colSpan","color","compact","coords","dateTime","dir","disabled","encType","htmlFor","frame","headers","height","hrefLang","hspace","isMap","id","label","lang","maxLength","media","method","multiple","name","nohref","noshade","nowrap","open","prompt","readOnly","rel","rev","rows","rowSpan","rules","scope","selected","shape","size","span","start","summary","tabIndex","target","title","type","useMap","valign","value","vspace","width","itemProp"]}}}])]);
//# sourceMappingURL=1-c6af95b25eee149ac7bb.js.map