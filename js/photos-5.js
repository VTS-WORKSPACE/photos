(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{238:function(n,t,e){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var i=e(308),s=i.prepareRequestOptions;i.prepareRequestOptions=function(n,t){t.cancelToken&&"object"===r(t.cancelToken)&&(n.cancelToken=t.cancelToken),s(n,t),t.method&&"string"==typeof t.method&&(n.method=t.method)},n.exports=i},264:function(n,t,e){"use strict";var r=e(307),i=e.n(r),s=e(61),a=e.n(s),o=e(298),c=e.n(o),d=e(13);i.a.getPatcher().patch("request",a.a);var p=Object(d.generateRemoteUrl)("dav"),u=i.a.createClient(p);c()(p).pathname;t.a=u},300:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var r="\n\t<oc:fileid />\n\t<d:getlastmodified />\n\t<d:getetag />\n\t<d:getcontenttype />\n\t<d:getcontentlength />\n\t<nc:has-preview />\n\t<oc:favorite />\n\t<d:resourcetype />";'<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(r,"\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")},324:function(n,t){},325:function(n,t){},334:function(n,t){},335:function(n,t){},355:function(n,t){},357:function(n,t){},358:function(n,t){},361:function(n,t){},362:function(n,t){},367:function(n,t){},368:function(n,t){},375:function(n,t){},378:function(n,t){},384:function(n,t){},387:function(n,t){},674:function(n,t,e){var r={"./af":392,"./af.js":392,"./ar":393,"./ar-dz":394,"./ar-dz.js":394,"./ar-kw":395,"./ar-kw.js":395,"./ar-ly":396,"./ar-ly.js":396,"./ar-ma":397,"./ar-ma.js":397,"./ar-sa":398,"./ar-sa.js":398,"./ar-tn":399,"./ar-tn.js":399,"./ar.js":393,"./az":400,"./az.js":400,"./be":401,"./be.js":401,"./bg":402,"./bg.js":402,"./bm":403,"./bm.js":403,"./bn":404,"./bn-bd":405,"./bn-bd.js":405,"./bn.js":404,"./bo":406,"./bo.js":406,"./br":407,"./br.js":407,"./bs":408,"./bs.js":408,"./ca":409,"./ca.js":409,"./cs":410,"./cs.js":410,"./cv":411,"./cv.js":411,"./cy":412,"./cy.js":412,"./da":413,"./da.js":413,"./de":414,"./de-at":415,"./de-at.js":415,"./de-ch":416,"./de-ch.js":416,"./de.js":414,"./dv":417,"./dv.js":417,"./el":418,"./el.js":418,"./en-au":419,"./en-au.js":419,"./en-ca":420,"./en-ca.js":420,"./en-gb":421,"./en-gb.js":421,"./en-ie":422,"./en-ie.js":422,"./en-il":423,"./en-il.js":423,"./en-in":424,"./en-in.js":424,"./en-nz":425,"./en-nz.js":425,"./en-sg":426,"./en-sg.js":426,"./eo":427,"./eo.js":427,"./es":428,"./es-do":429,"./es-do.js":429,"./es-mx":430,"./es-mx.js":430,"./es-us":431,"./es-us.js":431,"./es.js":428,"./et":432,"./et.js":432,"./eu":433,"./eu.js":433,"./fa":434,"./fa.js":434,"./fi":435,"./fi.js":435,"./fil":436,"./fil.js":436,"./fo":437,"./fo.js":437,"./fr":438,"./fr-ca":439,"./fr-ca.js":439,"./fr-ch":440,"./fr-ch.js":440,"./fr.js":438,"./fy":441,"./fy.js":441,"./ga":442,"./ga.js":442,"./gd":443,"./gd.js":443,"./gl":444,"./gl.js":444,"./gom-deva":445,"./gom-deva.js":445,"./gom-latn":446,"./gom-latn.js":446,"./gu":447,"./gu.js":447,"./he":448,"./he.js":448,"./hi":449,"./hi.js":449,"./hr":450,"./hr.js":450,"./hu":451,"./hu.js":451,"./hy-am":452,"./hy-am.js":452,"./id":453,"./id.js":453,"./is":454,"./is.js":454,"./it":455,"./it-ch":456,"./it-ch.js":456,"./it.js":455,"./ja":457,"./ja.js":457,"./jv":458,"./jv.js":458,"./ka":459,"./ka.js":459,"./kk":460,"./kk.js":460,"./km":461,"./km.js":461,"./kn":462,"./kn.js":462,"./ko":463,"./ko.js":463,"./ku":464,"./ku.js":464,"./ky":465,"./ky.js":465,"./lb":466,"./lb.js":466,"./lo":467,"./lo.js":467,"./lt":468,"./lt.js":468,"./lv":469,"./lv.js":469,"./me":470,"./me.js":470,"./mi":471,"./mi.js":471,"./mk":472,"./mk.js":472,"./ml":473,"./ml.js":473,"./mn":474,"./mn.js":474,"./mr":475,"./mr.js":475,"./ms":476,"./ms-my":477,"./ms-my.js":477,"./ms.js":476,"./mt":478,"./mt.js":478,"./my":479,"./my.js":479,"./nb":480,"./nb.js":480,"./ne":481,"./ne.js":481,"./nl":482,"./nl-be":483,"./nl-be.js":483,"./nl.js":482,"./nn":484,"./nn.js":484,"./oc-lnc":485,"./oc-lnc.js":485,"./pa-in":486,"./pa-in.js":486,"./pl":487,"./pl.js":487,"./pt":488,"./pt-br":489,"./pt-br.js":489,"./pt.js":488,"./ro":490,"./ro.js":490,"./ru":491,"./ru.js":491,"./sd":492,"./sd.js":492,"./se":493,"./se.js":493,"./si":494,"./si.js":494,"./sk":495,"./sk.js":495,"./sl":496,"./sl.js":496,"./sq":497,"./sq.js":497,"./sr":498,"./sr-cyrl":499,"./sr-cyrl.js":499,"./sr.js":498,"./ss":500,"./ss.js":500,"./sv":501,"./sv.js":501,"./sw":502,"./sw.js":502,"./ta":503,"./ta.js":503,"./te":504,"./te.js":504,"./tet":505,"./tet.js":505,"./tg":506,"./tg.js":506,"./th":507,"./th.js":507,"./tk":508,"./tk.js":508,"./tl-ph":509,"./tl-ph.js":509,"./tlh":510,"./tlh.js":510,"./tr":511,"./tr.js":511,"./tzl":512,"./tzl.js":512,"./tzm":513,"./tzm-latn":514,"./tzm-latn.js":514,"./tzm.js":513,"./ug-cn":515,"./ug-cn.js":515,"./uk":516,"./uk.js":516,"./ur":517,"./ur.js":517,"./uz":518,"./uz-latn":519,"./uz-latn.js":519,"./uz.js":518,"./vi":520,"./vi.js":520,"./x-pseudo":521,"./x-pseudo.js":521,"./yo":522,"./yo.js":522,"./zh-cn":523,"./zh-cn.js":523,"./zh-hk":524,"./zh-hk.js":524,"./zh-mo":525,"./zh-mo.js":525,"./zh-tw":526,"./zh-tw.js":526};function i(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=s,n.exports=i,i.id=674},675:function(n,t,e){"use strict";var r=e(94),i=e.n(r)()(!0);i.push([n.i,".grid-title[data-v-3f8ebca0]{grid-column:1/8;padding:48px 0 12px 0;margin:0}.grid-title span[data-v-3f8ebca0]{font-weight:normal}.grid-title.first-title[data-v-3f8ebca0]{padding:0 0 12px 0}\n","",{version:3,sources:["webpack://src/components/SeparatorVirtualGrid.vue"],names:[],mappings:"AA6CA,6BACC,eAAgB,CAChB,qBAAsB,CACtB,QAAS,CAHV,kCAKE,kBAAmB,CALrB,yCAQE,kBAAmB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid-title {\n\tgrid-column: 1/8;\n\tpadding: 48px 0 12px 0;\n\tmargin: 0;\n\tspan {\n\t\tfont-weight: normal;\n\t}\n\t&.first-title {\n\t\tpadding: 0 0 12px 0;\n\t}\n}\n"],sourceRoot:""}]),t.a=i},676:function(n,t,e){"use strict";var r=e(94),i=e.n(r)()(!0);i.push([n.i,".loader{display:grid;height:60px}\n","",{version:3,sources:["webpack://src/components/Loader.vue"],names:[],mappings:"AAqCA,QACC,YAAa,CACb,WAAY",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n\tdisplay: grid;\n\theight: 60px;\n}\n"],sourceRoot:""}]),t.a=i},677:function(n,t,e){"use strict";var r=e(94),i=e.n(r)()(!0);i.push([n.i,"@media (min-width: 0px) and (max-width: 400px){.grid-container[data-v-56a58566]{padding:0px 8px 256px 8px}}@media (min-width: 400px) and (max-width: 700px){.grid-container[data-v-56a58566]{padding:0px 8px 256px 8px}}@media (min-width: 700px) and (max-width: 1024px){.grid-container[data-v-56a58566]{padding:0px 44px 256px 44px}}@media (min-width: 1024px) and (max-width: 1280px){.grid-container[data-v-56a58566]{padding:0px 44px 256px 44px}}@media (min-width: 1280px) and (max-width: 1440px){.grid-container[data-v-56a58566]{padding:0px 66px 256px 66px}}@media (min-width: 1440px) and (max-width: 1600px){.grid-container[data-v-56a58566]{padding:0px 66px 256px 66px}}@media (min-width: 1600px) and (max-width: 2048px){.grid-container[data-v-56a58566]{padding:0px 66px 256px 66px}}@media (min-width: 2048px) and (max-width: 2560px){.grid-container[data-v-56a58566]{padding:0px 88px 256px 88px}}@media (min-width: 2560px) and (max-width: 3440px){.grid-container[data-v-56a58566]{padding:0px 88px 256px 88px}}@media (min-width: 3440px){.grid-container[data-v-56a58566]{padding:0px 88px 256px 88px}}\n","",{version:3,sources:["webpack://src/views/Timeline.vue"],names:[],mappings:"AAkTC,+CACC,iCACC,yBAAkD,CAClD,CAHF,iDACC,iCACC,yBAAkD,CAClD,CAHF,kDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,2BACC,iCACC,2BAAkD,CAClD",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$previous: 0;\n@each $size, $config in get('sizes') {\n\t$marginTop: map-get($config, 'marginTop');\n\t$marginW: map-get($config, 'marginW');\n\t// if this is the last entry, only use min-width\n\t$rule: '(min-width: #{$previous}px) and (max-width: #{$size}px)';\n\t@if $size == 'max' {\n\t\t$rule: '(min-width: #{$previous}px)';\n\t}\n\t@media #{$rule} {\n\t\t.grid-container {\n\t\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t\t}\n\t}\n\t$previous: $size;\n}\n"],sourceRoot:""}]),t.a=i},681:function(n,t,e){"use strict";e.r(t);var r=e(234),i=e(62),s=e(35),a=e(23),o=e(95),c=e(264),d=e(300),p=e(306);function u(n,t,e,r,i,s,a){try{var o=n[s](a),c=o.value}catch(n){return void e(n)}o.done?t(c):Promise.resolve(c).then(r,i)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var s=n.apply(t,e);function a(n){u(s,r,i,a,o,"next",n)}function o(n){u(s,r,i,a,o,"throw",n)}a(void 0)}))}}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var m=function(){return h.apply(this,arguments)};function h(){return(h=l(regeneratorRuntime.mark((function n(){var t,e,r,i,u,l,m=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=m.length>0&&void 0!==m[0]&&m[0],e=m.length>1&&void 0!==m[1]?m[1]:{},e=Object.assign({},{page:0,perPage:10*p.sizes.max.count,mimesType:o.a},e),r="/files/".concat(Object(a.getCurrentUser)().uid),i=e.mimesType.reduce((function(n,t){return"".concat(n,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(t,"</d:literal>\n\t\t</d:eq>\n\t")}),""),u=t?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",e=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(d.a,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(r,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(u,"\n\t\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t\t<oc:owner-id/>\n\t\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t\t<d:literal>").concat(Object(a.getCurrentUser)().uid,"</d:literal>\n\t\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(e.perPage,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(e.page*e.perPage,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},e),n.next=9,c.a.getDirectoryContents("",e);case 9:return l=n.sent,n.abrupt("return",l.data.map((function(n){return Object(s.b)(n)})).map((function(n){return Object.assign({},n,{filename:n.filename.replace(r,"")})})));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var g=e(301),f=e(302),j={name:"SeparatorVirtualGrid",inheritAttrs:!1,props:{item:{type:Object,required:!0}}},C=e(93),v=e.n(C),x=e(675),A={insert:"head",singleton:!1},b=(v()(x.a,A),x.a.locals,e(43)),y=Object(b.a)(j,(function(){var n=this.$createElement,t=this._self._c||n;return t("h2",{staticClass:"grid-title",style:{height:this.item.height+"px"}},[this._v("\n\t"+this._s(this.item.injected.month)+"\n\t"),t("span",[this._v(this._s(this.item.injected.year))])])}),[],!1,null,"3f8ebca0",null).exports,w=e(273),k=e.n(w),D=e(303),O={name:"Loader"},z=e(676),$={insert:"head",singleton:!1},q=(v()(z.a,$),z.a.locals,Object(b.a)(O,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"loader"},[this._t("icon",[t("span",{staticClass:"icon-loading"})])],2)}),[],!1,null,null,null).exports),B=e(258),S=e(305);function T(n,t,e,r,i,s,a){try{var o=n[s](a),c=o.value}catch(n){return void e(n)}o.done?t(c):Promise.resolve(c).then(r,i)}function _(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var s=n.apply(t,e);function a(n){T(s,r,i,a,o,"next",n)}function o(n){T(s,r,i,a,o,"throw",n)}a(void 0)}))}}function R(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function P(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?R(Object(e),!0).forEach((function(t){F(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function F(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var E={name:"Timeline",components:{EmptyContent:g.a,VirtualGrid:k.a,Navigation:D.a},mixins:[S.a],props:{loading:{type:Boolean,required:!0},onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:function(){return o.a}},rootTitle:{type:String,required:!0},path:{type:String,default:""}},data:function(){return{cancelRequest:null,done:!1,error:null,page:0,lastSection:"",loaderComponent:q}},computed:P(P({},Object(i.c)(["files","timeline"])),{},{fileList:function(){var n=this;return this.timeline.map((function(t){return n.files[t]}))},contentList:function(){var n=this;return this.fileList.flatMap((function(t,e){var r=[],i=n.getFormatedDate(t.lastmod,"YYYY MMMM");return n.lastSection!==i&&(r.push({id:"title-".concat(e),injected:{year:n.getFormatedDate(t.lastmod,"YYYY"),month:n.getFormatedDate(t.lastmod,"MMMM")},height:90,columnSpan:0,newRow:!0,renderComponent:y}),n.lastSection=i),r.push({id:"img-".concat(t.fileid),injected:P(P({},t),{},{list:n.fileList,loadMore:n.getContent,canLoop:!1}),width:256,height:256,columnSpan:1,renderComponent:f.a}),r}))},isEmpty:function(){return 0===this.fileList.length}}),watch:{onlyFavorites:function(){var n=this;return _(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.resetState(),n.getContent();case 2:case"end":return t.stop()}}),t)})))()},mimesType:function(){var n=this;return _(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.resetState(),n.getContent();case 2:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){this.getContent()},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Changed view"),this.resetState()},methods:{getContent:function(n){var t=this;return _(regeneratorRuntime.mark((function e(){var r,i,s,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.done){e.next=2;break}return e.abrupt("return",Promise.resolve(!0));case 2:return t.cancelRequest&&t.cancelRequest("Changed view"),0===t.timeline.length&&t.$emit("update:loading",!0),r=Object(B.a)(m),i=r.request,s=r.cancel,t.cancelRequest=s,a=5*t.gridConfig.count,e.prev=7,e.next=10,i(t.onlyFavorites,{page:t.page,perPage:a,mimesType:t.mimesType});case 10:if((o=e.sent).length!==a&&(t.done=!0),t.$store.dispatch("updateTimeline",o),t.$store.dispatch("appendFiles",o),t.page+=1,!n){e.next=17;break}return e.abrupt("return",Promise.resolve(o));case 17:return e.abrupt("return",Promise.resolve(!1));case 20:return e.prev=20,e.t0=e.catch(7),e.t0.response&&e.t0.response.status&&(404===e.t0.response.status?(t.error=404,setTimeout((function(){t.$router.push({name:t.$route.name})}),3e3)):t.error=e.t0),console.error("Error fetching timeline",e.t0),e.abrupt("return",Promise.resolve(!0));case 25:return e.prev=25,t.$emit("update:loading",!1),t.cancelRequest=null,e.finish(25);case 29:case"end":return e.stop()}}),e,null,[[7,20,25,29]])})))()},resetState:function(){this.$store.dispatch("resetTimeline"),this.done=!1,this.error=null,this.page=0,this.lastSection="",this.$emit("update:loading",!0),this.$refs.virtualgrid.resetGrid()},getFormatedDate:function(n,t){return r(n).format(t)}}},M=e(677),H={insert:"head",singleton:!1},L=(v()(M.a,H),M.a.locals,Object(b.a)(E,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return 404===n.error?e("EmptyContent",{attrs:{"illustration-name":"folder"}},[n._v("\n\t"+n._s(n.t("photos","This folder does not exists"))+"\n")]):n.error?e("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():e("div",[n.isEmpty?e("Navigation",{key:"navigation",attrs:{basename:n.path,filename:"/","root-title":n.rootTitle}}):n._e(),n._v(" "),n.isEmpty?e("EmptyContent",{attrs:{"illustration-name":"empty"}},[n._v("\n\t\t"+n._s(n.t("photos","No photos in here"))+"\n\t")]):n._e(),n._v(" "),e("div",{staticClass:"grid-container"},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"update-function":n.getContent,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap},"update-trigger-margin":700,loader:n.loaderComponent}})],1)],1)}),[],!1,null,"56a58566",null));t.default=L.exports}}]);
//# sourceMappingURL=photos-5.js.map?v=887ecff35515d18d015b