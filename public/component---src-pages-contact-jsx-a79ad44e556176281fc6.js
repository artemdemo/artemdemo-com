(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{579:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(37),i=n(8),s=n.n(i),d=n(582),l=n.n(d);n(577);const c=r.a.span.withConfig({displayName:"Icon__SpanSty",componentId:"dahynt-0"})(["",""],e=>e.inText?"padding-right: 5px;":"");class m extends o.a.PureComponent{renderIcon(){const{name:e,title:t,className:n}=this.props,a=l()("fa",{[`fa-${e}`]:!0},n);return o.a.createElement("span",{className:a,title:t})}render(){const{name:e,inText:t}=this.props;if(""===e||null==e)throw new Error("Icon prop `name` couldn't be empty");return t?o.a.createElement(c,{inText:t},this.renderIcon()):this.renderIcon()}}m.propTypes={name:s.a.string.isRequired,title:s.a.string,className:s.a.string,inText:s.a.bool},m.defaultProps={title:null,className:null,inText:!1};var p=m;const u="https://docs.google.com/forms/d/e/1FAIpQLSfbcq5MKljpEZg27bOOj5OqdBP4ARBdikUs4G2zuqIgBYE4KA/viewform?embedded=true",f=r.a.div.withConfig({displayName:"ContactForm__ContactFormLoading",componentId:"r3mpp6-0"})(["position:absolute;",""],e=>e.loaded?"display: none;":""),h=r.a.iframe.withConfig({displayName:"ContactForm__ContactFormIframe",componentId:"r3mpp6-1"})(["visibility:hidden;width:640px;height:822px;",""],e=>e.loaded?"visibility: visible;":""),y=r.a.span.withConfig({displayName:"ContactForm__IconWrap",componentId:"r3mpp6-2"})(["font-size:150%;opacity:0.4;"]);class g extends o.a.PureComponent{constructor(e){super(e),this.state={formLoaded:!1}}iframeLoaded(){this.setState({formLoaded:!0})}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{loaded:this.state.formLoaded},"Form is loading...",o.a.createElement(y,null,o.a.createElement(p,{name:"cog fa-spin fa-fw"}))),o.a.createElement(h,{src:u,onLoad:this.iframeLoaded.bind(this),frameBorder:"0",marginHeight:"0",marginWidth:"0",loaded:this.state.formLoaded}))}}var w=g,v=n(248),I=n(595);n.d(t,"pageQuery",(function(){return b}));class x extends v.default{constructor(e){super(e),this.contentMd=I.a?null:n(598)}renderAfterContent(){return o.a.createElement(w,null)}}t.default=x;const b="3998338720"},582:function(e,t,n){var a;n(36),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},595:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=(()=>{try{return!1}catch(e){return!1}})()},598:function(e,t){e.exports="# Contact me\n\nHi there!\n\nIf you want to drop me a line, you're more than welcome to do so.\nAs you can see, I'm using a form instead of a simple email address.\nThere are some reasons for that:\n\n* I don't want to get more spam than I'm already receiving.\n* By using a dedicated form I will have saved copy of the email, in case I remove one from my inbox by accident.\n* And finally I think it's simply faster for the user. You don't need to click on the email, wait until your client opens and then do exactly what you can do on this very page :)\n"}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-a79ad44e556176281fc6.js.map