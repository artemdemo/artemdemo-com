(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{wjJm:function(t,e,a){"use strict";a.r(e);var s=a("q1tI"),n=a.n(s),o=a("mwIZ"),r=a.n(o),i=a("Wbzz"),p=a("uSmJ");class u extends n.a.PureComponent{constructor(t){super(t)}renderTags(){const t=r()(this.props,"pageContext.tagsMap",{});return Object.keys(t).map(e=>({slug:e,name:t[e].name,amount:t[e].amount})).sort((t,e)=>e.amount-t.amount).map(t=>n.a.createElement(i.a,{className:"tag-link",to:"/tags/"+t.slug,key:"tags-"+t.slug},t.name,n.a.createElement("sup",null," ",t.amount)))}render(){const t=r()(this.props,"data.site.siteMetadata.title"),e=r()(this.props,"data.site.siteMetadata.description");return n.a.createElement(p.a,{title:"Tags List | "+t,description:e,metaTitle:t,location:this.props.location},n.a.createElement("h1",null,"Tags List"),this.renderTags())}}e.default=u}}]);
//# sourceMappingURL=component---src-templates-tags-list-jsx-f19270c65b003dfeff68.js.map