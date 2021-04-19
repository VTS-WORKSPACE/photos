(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(t,n,e){
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
const s=e(450),i=s.prepareRequestOptions;s.prepareRequestOptions=function(t,n){n.cancelToken&&"object"==typeof n.cancelToken&&(t.cancelToken=n.cancelToken),i(t,n),n.method&&"string"==typeof n.method&&(t.method=n.method)},t.exports=s},405:function(t,n,e){"use strict";var s=e(449),i=e.n(s),a=e(79),r=e.n(a),o=e(440),d=e.n(o),c=e(13);i.a.getPatcher().patch("request",r.a);const p=Object(c.generateRemoteUrl)("dav"),l=i.a.createClient(p);d()(p).pathname;n.a=l},442:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));
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
const s="\n\t<oc:fileid />\n\t<d:getlastmodified />\n\t<d:getetag />\n\t<d:getcontenttype />\n\t<d:getcontentlength />\n\t<nc:has-preview />\n\t<oc:favorite />\n\t<d:resourcetype />";'<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(s,"\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")},466:function(t,n){},467:function(t,n){},476:function(t,n){},477:function(t,n){},497:function(t,n){},499:function(t,n){},500:function(t,n){},503:function(t,n){},504:function(t,n){},509:function(t,n){},510:function(t,n){},518:function(t,n){},524:function(t,n){},527:function(t,n){},812:function(t,n,e){var s={"./af":532,"./af.js":532,"./ar":533,"./ar-dz":534,"./ar-dz.js":534,"./ar-kw":535,"./ar-kw.js":535,"./ar-ly":536,"./ar-ly.js":536,"./ar-ma":537,"./ar-ma.js":537,"./ar-sa":538,"./ar-sa.js":538,"./ar-tn":539,"./ar-tn.js":539,"./ar.js":533,"./az":540,"./az.js":540,"./be":541,"./be.js":541,"./bg":542,"./bg.js":542,"./bm":543,"./bm.js":543,"./bn":544,"./bn-bd":545,"./bn-bd.js":545,"./bn.js":544,"./bo":546,"./bo.js":546,"./br":547,"./br.js":547,"./bs":548,"./bs.js":548,"./ca":549,"./ca.js":549,"./cs":550,"./cs.js":550,"./cv":551,"./cv.js":551,"./cy":552,"./cy.js":552,"./da":553,"./da.js":553,"./de":554,"./de-at":555,"./de-at.js":555,"./de-ch":556,"./de-ch.js":556,"./de.js":554,"./dv":557,"./dv.js":557,"./el":558,"./el.js":558,"./en-au":559,"./en-au.js":559,"./en-ca":560,"./en-ca.js":560,"./en-gb":561,"./en-gb.js":561,"./en-ie":562,"./en-ie.js":562,"./en-il":563,"./en-il.js":563,"./en-in":564,"./en-in.js":564,"./en-nz":565,"./en-nz.js":565,"./en-sg":566,"./en-sg.js":566,"./eo":567,"./eo.js":567,"./es":568,"./es-do":569,"./es-do.js":569,"./es-mx":570,"./es-mx.js":570,"./es-us":571,"./es-us.js":571,"./es.js":568,"./et":572,"./et.js":572,"./eu":573,"./eu.js":573,"./fa":574,"./fa.js":574,"./fi":575,"./fi.js":575,"./fil":576,"./fil.js":576,"./fo":577,"./fo.js":577,"./fr":578,"./fr-ca":579,"./fr-ca.js":579,"./fr-ch":580,"./fr-ch.js":580,"./fr.js":578,"./fy":581,"./fy.js":581,"./ga":582,"./ga.js":582,"./gd":583,"./gd.js":583,"./gl":584,"./gl.js":584,"./gom-deva":585,"./gom-deva.js":585,"./gom-latn":586,"./gom-latn.js":586,"./gu":587,"./gu.js":587,"./he":588,"./he.js":588,"./hi":589,"./hi.js":589,"./hr":590,"./hr.js":590,"./hu":591,"./hu.js":591,"./hy-am":592,"./hy-am.js":592,"./id":593,"./id.js":593,"./is":594,"./is.js":594,"./it":595,"./it-ch":596,"./it-ch.js":596,"./it.js":595,"./ja":597,"./ja.js":597,"./jv":598,"./jv.js":598,"./ka":599,"./ka.js":599,"./kk":600,"./kk.js":600,"./km":601,"./km.js":601,"./kn":602,"./kn.js":602,"./ko":603,"./ko.js":603,"./ku":604,"./ku.js":604,"./ky":605,"./ky.js":605,"./lb":606,"./lb.js":606,"./lo":607,"./lo.js":607,"./lt":608,"./lt.js":608,"./lv":609,"./lv.js":609,"./me":610,"./me.js":610,"./mi":611,"./mi.js":611,"./mk":612,"./mk.js":612,"./ml":613,"./ml.js":613,"./mn":614,"./mn.js":614,"./mr":615,"./mr.js":615,"./ms":616,"./ms-my":617,"./ms-my.js":617,"./ms.js":616,"./mt":618,"./mt.js":618,"./my":619,"./my.js":619,"./nb":620,"./nb.js":620,"./ne":621,"./ne.js":621,"./nl":622,"./nl-be":623,"./nl-be.js":623,"./nl.js":622,"./nn":624,"./nn.js":624,"./oc-lnc":625,"./oc-lnc.js":625,"./pa-in":626,"./pa-in.js":626,"./pl":627,"./pl.js":627,"./pt":628,"./pt-br":629,"./pt-br.js":629,"./pt.js":628,"./ro":630,"./ro.js":630,"./ru":631,"./ru.js":631,"./sd":632,"./sd.js":632,"./se":633,"./se.js":633,"./si":634,"./si.js":634,"./sk":635,"./sk.js":635,"./sl":636,"./sl.js":636,"./sq":637,"./sq.js":637,"./sr":638,"./sr-cyrl":639,"./sr-cyrl.js":639,"./sr.js":638,"./ss":640,"./ss.js":640,"./sv":641,"./sv.js":641,"./sw":642,"./sw.js":642,"./ta":643,"./ta.js":643,"./te":644,"./te.js":644,"./tet":645,"./tet.js":645,"./tg":646,"./tg.js":646,"./th":647,"./th.js":647,"./tk":648,"./tk.js":648,"./tl-ph":649,"./tl-ph.js":649,"./tlh":650,"./tlh.js":650,"./tr":651,"./tr.js":651,"./tzl":652,"./tzl.js":652,"./tzm":653,"./tzm-latn":654,"./tzm-latn.js":654,"./tzm.js":653,"./ug-cn":655,"./ug-cn.js":655,"./uk":656,"./uk.js":656,"./ur":657,"./ur.js":657,"./uz":658,"./uz-latn":659,"./uz-latn.js":659,"./uz.js":658,"./vi":660,"./vi.js":660,"./x-pseudo":661,"./x-pseudo.js":661,"./yo":662,"./yo.js":662,"./zh-cn":663,"./zh-cn.js":663,"./zh-hk":664,"./zh-hk.js":664,"./zh-mo":665,"./zh-mo.js":665,"./zh-tw":666,"./zh-tw.js":666};function i(t){var n=a(t);return e(n)}function a(t){if(!e.o(s,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id=812},813:function(t,n,e){"use strict";var s=e(118),i=e.n(s)()(!0);i.push([t.i,".grid-title[data-v-3f8ebca0]{grid-column:1/8;padding:48px 0 12px 0;margin:0}.grid-title span[data-v-3f8ebca0]{font-weight:normal}.grid-title.first-title[data-v-3f8ebca0]{padding:0 0 12px 0}\n","",{version:3,sources:["webpack://src/components/SeparatorVirtualGrid.vue"],names:[],mappings:"AA6CA,6BACC,eAAgB,CAChB,qBAAsB,CACtB,QAAS,CAHV,kCAKE,kBAAmB,CALrB,yCAQE,kBAAmB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid-title {\n\tgrid-column: 1/8;\n\tpadding: 48px 0 12px 0;\n\tmargin: 0;\n\tspan {\n\t\tfont-weight: normal;\n\t}\n\t&.first-title {\n\t\tpadding: 0 0 12px 0;\n\t}\n}\n"],sourceRoot:""}]),n.a=i},814:function(t,n,e){"use strict";var s=e(118),i=e.n(s)()(!0);i.push([t.i,".loader{display:grid;height:60px}\n","",{version:3,sources:["webpack://src/components/Loader.vue"],names:[],mappings:"AAqCA,QACC,YAAa,CACb,WAAY",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n\tdisplay: grid;\n\theight: 60px;\n}\n"],sourceRoot:""}]),n.a=i},815:function(t,n,e){"use strict";var s=e(118),i=e.n(s)()(!0);i.push([t.i,"@media (min-width: 0px) and (max-width: 400px){.grid-container[data-v-62f7f42a]{padding:0px 8px 256px 8px}}@media (min-width: 400px) and (max-width: 700px){.grid-container[data-v-62f7f42a]{padding:0px 8px 256px 8px}}@media (min-width: 700px) and (max-width: 1024px){.grid-container[data-v-62f7f42a]{padding:0px 44px 256px 44px}}@media (min-width: 1024px) and (max-width: 1280px){.grid-container[data-v-62f7f42a]{padding:0px 44px 256px 44px}}@media (min-width: 1280px) and (max-width: 1440px){.grid-container[data-v-62f7f42a]{padding:0px 66px 256px 66px}}@media (min-width: 1440px) and (max-width: 1600px){.grid-container[data-v-62f7f42a]{padding:0px 66px 256px 66px}}@media (min-width: 1600px) and (max-width: 2048px){.grid-container[data-v-62f7f42a]{padding:0px 66px 256px 66px}}@media (min-width: 2048px) and (max-width: 2560px){.grid-container[data-v-62f7f42a]{padding:0px 88px 256px 88px}}@media (min-width: 2560px) and (max-width: 3440px){.grid-container[data-v-62f7f42a]{padding:0px 88px 256px 88px}}@media (min-width: 3440px){.grid-container[data-v-62f7f42a]{padding:0px 88px 256px 88px}}\n","",{version:3,sources:["webpack://src/views/Timeline.vue"],names:[],mappings:"AAkTC,+CACC,iCACC,yBAAkD,CAClD,CAHF,iDACC,iCACC,yBAAkD,CAClD,CAHF,kDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,2BACC,iCACC,2BAAkD,CAClD",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$previous: 0;\n@each $size, $config in get('sizes') {\n\t$marginTop: map-get($config, 'marginTop');\n\t$marginW: map-get($config, 'marginW');\n\t// if this is the last entry, only use min-width\n\t$rule: '(min-width: #{$previous}px) and (max-width: #{$size}px)';\n\t@if $size == 'max' {\n\t\t$rule: '(min-width: #{$previous}px)';\n\t}\n\t@media #{$rule} {\n\t\t.grid-container {\n\t\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t\t}\n\t}\n\t$previous: $size;\n}\n"],sourceRoot:""}]),n.a=i},819:function(t,n,e){"use strict";e.r(n);var s=e(376),i=e(80),a=e(40),r=e(25),o=e(119),d=e(405),c=e(442),p=e(448),l=async function(t=!1,n={}){n=Object.assign({},{page:0,perPage:10*p.sizes.max.count,mimesType:o.a},n);const e="/files/".concat(Object(r.getCurrentUser)().uid),s=n.mimesType.reduce((t,n)=>"".concat(t,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(n,"</d:literal>\n\t\t</d:eq>\n\t"),""),i=t?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"";n=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(c.a,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(e,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(s,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t\t<oc:owner-id/>\n\t\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t\t<d:literal>").concat(Object(r.getCurrentUser)().uid,"</d:literal>\n\t\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(n.perPage,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(n.page*n.perPage,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},n);return(await d.a.getDirectoryContents("",n)).data.map(t=>Object(a.b)(t)).map(t=>Object.assign({},t,{filename:t.filename.replace(e,"")}))},m=e(443),h=e(444),u={name:"SeparatorVirtualGrid",inheritAttrs:!1,props:{item:{type:Object,required:!0}}},g=e(117),j=e.n(g),f=e(813),C={insert:"head",singleton:!1},x=(j()(f.a,C),f.a.locals,e(51)),A=Object(x.a)(u,(function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{staticClass:"grid-title",style:{height:this.item.height+"px"}},[this._v("\n\t"+this._s(this.item.injected.month)+"\n\t"),n("span",[this._v(this._s(this.item.injected.year))])])}),[],!1,null,"3f8ebca0",null).exports,v=e(414),y=e.n(v),b=e(445),w={name:"Loader"},k=e(814),D={insert:"head",singleton:!1},z=(j()(k.a,D),k.a.locals,Object(x.a)(w,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loader"},[this._t("icon",[n("span",{staticClass:"icon-loading"})])],2)}),[],!1,null,null,null).exports),$=e(399),q=e(447),B={name:"Timeline",components:{EmptyContent:m.a,VirtualGrid:y.a,Navigation:b.a},mixins:[q.a],props:{loading:{type:Boolean,required:!0},onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:()=>o.a},rootTitle:{type:String,required:!0},path:{type:String,default:""}},data:()=>({cancelRequest:null,done:!1,error:null,page:0,lastSection:"",loaderComponent:z}),computed:{...Object(i.c)(["files","timeline"]),fileList(){return this.timeline.map(t=>this.files[t])},contentList(){return this.fileList.flatMap((t,n)=>{const e=[],s=this.getFormatedDate(t.lastmod,"YYYY MMMM");return this.lastSection!==s&&(e.push({id:"title-".concat(n),injected:{year:this.getFormatedDate(t.lastmod,"YYYY"),month:this.getFormatedDate(t.lastmod,"MMMM")},height:90,columnSpan:0,newRow:!0,renderComponent:A}),this.lastSection=s),e.push({id:"img-".concat(t.fileid),injected:{...t,list:this.fileList,loadMore:this.getContent,canLoop:!1},width:256,height:256,columnSpan:1,renderComponent:h.a}),e})},isEmpty(){return 0===this.fileList.length}},watch:{async onlyFavorites(){this.resetState(),this.getContent()},async mimesType(){this.resetState(),this.getContent()}},beforeMount(){this.getContent()},beforeDestroy(){this.cancelRequest&&this.cancelRequest("Changed view"),this.resetState()},methods:{async getContent(t){if(this.done)return Promise.resolve(!0);this.cancelRequest&&this.cancelRequest("Changed view"),0===this.timeline.length&&this.$emit("update:loading",!0);const{request:n,cancel:e}=Object($.a)(l);this.cancelRequest=e;const s=5*this.gridConfig.count;try{const e=await n(this.onlyFavorites,{page:this.page,perPage:s,mimesType:this.mimesType});return e.length!==s&&(this.done=!0),this.$store.dispatch("updateTimeline",e),this.$store.dispatch("appendFiles",e),this.page+=1,t?Promise.resolve(e):Promise.resolve(!1)}catch(t){return t.response&&t.response.status&&(404===t.response.status?(this.error=404,setTimeout(()=>{this.$router.push({name:this.$route.name})},3e3)):this.error=t),console.error("Error fetching timeline",t),Promise.resolve(!0)}finally{this.$emit("update:loading",!1),this.cancelRequest=null}},resetState(){this.$store.dispatch("resetTimeline"),this.done=!1,this.error=null,this.page=0,this.lastSection="",this.$emit("update:loading",!0),this.$refs.virtualgrid.resetGrid()},getFormatedDate:(t,n)=>s(t).format(n)}},T=e(815),_={insert:"head",singleton:!1},F=(j()(T.a,_),T.a.locals,Object(x.a)(B,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return 404===t.error?e("EmptyContent",{attrs:{"illustration-name":"folder"}},[t._v("\n\t"+t._s(t.t("photos","This folder does not exist"))+"\n")]):t.error?e("EmptyContent",[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):t.loading?t._e():e("div",[t.isEmpty?e("Navigation",{key:"navigation",attrs:{basename:t.path,filename:"/","root-title":t.rootTitle}}):t._e(),t._v(" "),t.isEmpty?e("EmptyContent",{attrs:{"illustration-name":"empty"}},[t._v("\n\t\t"+t._s(t.t("photos","No photos in here"))+"\n\t")]):t._e(),t._v(" "),e("div",{staticClass:"grid-container"},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:t.contentList,"update-function":t.getContent,"get-column-count":function(){return t.gridConfig.count},"get-grid-gap":function(){return t.gridConfig.gap},"update-trigger-margin":700,loader:t.loaderComponent}})],1)],1)}),[],!1,null,"62f7f42a",null));n.default=F.exports}}]);
//# sourceMappingURL=photos-5.js.map?v=593ba2b0def3817f905a