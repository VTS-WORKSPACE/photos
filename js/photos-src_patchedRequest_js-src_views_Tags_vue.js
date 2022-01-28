/*! For license information please see photos-src_patchedRequest_js-src_views_Tags_vue.js.LICENSE.txt */
(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_patchedRequest_js-src_views_Tags_vue"],{82223:(n,t,e)=>{function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var a=e(14601),i=a.prepareRequestOptions;a.prepareRequestOptions=function(n,t){t.cancelToken&&"object"===r(t.cancelToken)&&(n.cancelToken=t.cancelToken),i(n,t),t.method&&"string"==typeof t.method&&(n.method=t.method)},n.exports=a},81067:(n,t,e)=>{"use strict";e.d(t,{Z:()=>u});var r=e(48796),a=e.n(r),i=e(4820),o=e(84564),c=e.n(o),s=e(79753);a().getPatcher().patch("request",i.default);var d=(0,s.generateRemoteUrl)("dav"),l=a().createClient(d);c()(d).pathname;const u=l},2161:(n,t,e)=>{"use strict";e.d(t,{N:()=>r});var r="\n\t<oc:fileid />\n\t<d:getlastmodified />\n\t<d:getetag />\n\t<d:getcontenttype />\n\t<d:getcontentlength />\n\t<nc:has-preview />\n\t<oc:favorite />\n\t<d:resourcetype />";'<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(r,"\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")},14908:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var r=e(87537),a=e.n(r),i=e(23645),o=e.n(i)()(a());o.push([n.id,".file[data-v-22a9a965],.folder[data-v-22a9a965]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-22a9a965],.folder .cover[data-v-22a9a965]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-22a9a965],.file:active .cover[data-v-22a9a965],.file:hover .cover[data-v-22a9a965],.file:focus .cover[data-v-22a9a965],.folder.active .cover[data-v-22a9a965],.folder:active .cover[data-v-22a9a965],.folder:hover .cover[data-v-22a9a965],.folder:focus .cover[data-v-22a9a965]{opacity:.3}.file--clear.active .cover[data-v-22a9a965],.file--clear:active .cover[data-v-22a9a965],.file--clear:hover .cover[data-v-22a9a965],.file--clear:focus .cover[data-v-22a9a965],.folder--clear.active .cover[data-v-22a9a965],.folder--clear:active .cover[data-v-22a9a965],.folder--clear:hover .cover[data-v-22a9a965],.folder--clear:focus .cover[data-v-22a9a965]{opacity:.1}.fade-enter-active[data-v-22a9a965],.fade-leave-active[data-v-22a9a965]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-22a9a965],.fade-leave-to[data-v-22a9a965]{opacity:0}.folder-content[data-v-22a9a965]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-22a9a965]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-22a9a965]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-22a9a965]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-22a9a965]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-22a9a965]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-22a9a965]{width:100%;height:100%;object-fit:cover}.folder-name[data-v-22a9a965]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-22a9a965]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-22a9a965]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-22a9a965]{opacity:.3}.folder--clear .folder-name__name[data-v-22a9a965]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-22a9a965]{opacity:.3}.folder:not(.folder--clear):active .folder-name[data-v-22a9a965],.folder:not(.folder--clear):active .cover[data-v-22a9a965],.folder:not(.folder--clear):hover .folder-name[data-v-22a9a965],.folder:not(.folder--clear):hover .cover[data-v-22a9a965],.folder:not(.folder--clear):focus .folder-name[data-v-22a9a965],.folder:not(.folder--clear):focus .cover[data-v-22a9a965]{opacity:0}","",{version:3,sources:["webpack://./src/mixins/FileFolder.scss","webpack://./src/components/FolderTagPreview.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAAA,gBAAA,CACA,kCAAA,CACA,eAAA,CAEA,8DACC,SAAA,CAMA,UAAA,CACA,mBAAA,CACA,qDAAA,CACA,SAAA,CACA,uCAAA,CAOA,4SACC,UAAA,CAQD,oWACC,UAAA,CAKH,wEACC,qDAAA,CAGD,6DACC,SAAA,CCkFD,iCACC,iBAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CAEA,yCACC,yBAAA,CACA,sBAAA,CAED,yCACC,yBAAA,CACA,0BAAA,CAED,yCACC,6BAAA,CACA,0BAAA,CACA,yDACC,kBAAA,CAGF,yCACC,6BAAA,CACA,0BAAA,CAED,qCACC,UAAA,CACA,WAAA,CAEA,gBAAA,CAMF,8BACC,iBAAA,CACA,SAAA,CACA,YAAA,CACA,eAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,qDAAA,CACA,SAAA,CACA,oCACC,UAAA,CACA,+BAAA,CACA,mBAAA,CAED,oCACC,eAAA,CACA,WAnBY,CAoBZ,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,kCAAA,CACA,0CAAA,CACA,cA1BY,CA2BZ,gBA3BY,CAmCZ,mDACC,UAAA,CAED,mDACC,4BAAA,CACA,gDAAA,CAQD,oDACC,UAAA,CAQA,gXAEC,SAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \'../mixins/FileFolder\';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let\'s display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n'],sourceRoot:""}]);const c=o},86370:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var r=e(87537),a=e.n(r),i=e(23645),o=e.n(i)()(a());o.push([n.id,"@media(min-width: 0px)and (max-width: 400px){.grid-container[data-v-580f514c]{padding:0px 8px 256px 8px}}@media(min-width: 400px)and (max-width: 700px){.grid-container[data-v-580f514c]{padding:0px 8px 256px 8px}}@media(min-width: 700px)and (max-width: 1024px){.grid-container[data-v-580f514c]{padding:0px 44px 256px 44px}}@media(min-width: 1024px)and (max-width: 1280px){.grid-container[data-v-580f514c]{padding:0px 44px 256px 44px}}@media(min-width: 1280px)and (max-width: 1440px){.grid-container[data-v-580f514c]{padding:0px 66px 256px 66px}}@media(min-width: 1440px)and (max-width: 1600px){.grid-container[data-v-580f514c]{padding:0px 66px 256px 66px}}@media(min-width: 1600px)and (max-width: 2048px){.grid-container[data-v-580f514c]{padding:0px 66px 256px 66px}}@media(min-width: 2048px)and (max-width: 2560px){.grid-container[data-v-580f514c]{padding:0px 88px 256px 88px}}@media(min-width: 2560px)and (max-width: 3440px){.grid-container[data-v-580f514c]{padding:0px 88px 256px 88px}}@media(min-width: 3440px){.grid-container[data-v-580f514c]{padding:0px 88px 256px 88px}}","",{version:3,sources:["webpack://./src/mixins/GridSizes.scss","webpack://./src/views/Tags.vue"],names:[],mappings:"AAoCG,6CCsPH,iCAEE,yBAAA,CAAA,CDxPC,+CCsPH,iCAEE,yBAAA,CAAA,CDxPC,gDCsPH,iCAEE,2BAAA,CAAA,CDxPC,iDCsPH,iCAEE,2BAAA,CAAA,CDxPC,iDCsPH,iCAEE,2BAAA,CAAA,CDxPC,iDCsPH,iCAEE,2BAAA,CAAA,CDxPC,iDCsPH,iCAEE,2BAAA,CAAA,CDxPC,iDCsPH,iCAEE,2BAAA,CAAA,CDxPC,iDCsPH,iCAEE,2BAAA,CAAA,CD5PC,0BC0PH,iCAEE,2BAAA,CAAA",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n@use 'sass:map';\n\n@mixin grid-sizes() {\n\t$previous: 0;\n\n\t@each $size, $config in $sizes {\n\t\t$count: map.get($config, 'count');\n\t\t$marginTop: map.get($config, 'marginTop');\n\t\t$marginW: map.get($config, 'marginW');\n\n\t\t@if $size == 'max' {\n\t\t\t@media (min-width: #{$previous}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t} @else {\n\t\t\t@media (min-width: #{$previous}px) and (max-width: #{$size}px) {\n\t\t\t\t@content($marginTop, $marginW);\n\t\t\t}\n\t\t}\n\t\t$previous: $size;\n\t}\n}\n",'$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \'../mixins/GridSizes\';\n\n.grid-container {\n\t@include grid-sizes using ($marginTop, $marginW) {\n\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t}\n}\n'],sourceRoot:""}]);const c=o},68789:(n,e,r)=>{"use strict";r.d(e,{Z:()=>x});var a=r(79753);const i={name:"FolderTagPreview",props:{icon:{type:String,default:"icon-folder"},id:{type:Number,required:!0},name:{type:String,required:!0},path:{type:String,required:!0},fileList:{type:Array,default:function(){return[]}}},data:function(){return{loaded:!1,failed:[]}},computed:{isEmpty:function(){return 0===this.previewList.length},ariaUuid:function(){return"folder-".concat(this.id)},ariaLabel:function(){return t("photos",'Open the "{name}" sub-directory',{name:this.name})},previewList:function(){var n=this;return this.fileList.filter((function(t){return-1===n.failed.indexOf(t.fileid)}))},to:function(){var n=/^\/?(.+)/i.exec(this.path)[1];return Object.assign({},this.$route,{params:{path:n.split("/")}})}},methods:{generateImgSrc:function(n){var t=n.fileid,e=n.etag;return(0,a.generateUrl)("/core/preview?fileId=".concat(t,"&x=",256,"&y=",256,"&a=true&v=").concat(e))},onPreviewFail:function(n){var t=n.fileid;this.failed.push(t)}}};var o=r(93379),c=r.n(o),s=r(7795),d=r.n(s),l=r(90569),u=r.n(l),p=r(3565),f=r.n(p),A=r(19216),m=r.n(A),g=r(44589),h=r.n(g),v=r(14908),C={};C.styleTagTransform=h(),C.setAttributes=f(),C.insert=u().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=m();c()(v.Z,C);v.Z&&v.Z.locals&&v.Z.locals;const x=(0,r(51900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("router-link",{staticClass:"folder",class:{"folder--clear":n.isEmpty},attrs:{to:n.to,"aria-label":n.ariaLabel}},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.loaded,expression:"loaded"}],staticClass:"folder-content",class:"folder-content--grid-"+n.previewList.length,attrs:{role:"none"}},n._l(n.previewList,(function(t){return e("img",{key:t.fileid,attrs:{src:n.generateImgSrc(t),alt:""},on:{load:function(t){n.loaded=!0},error:function(e){return n.onPreviewFail(t)}}})})),0)]),n._v(" "),e("div",{staticClass:"folder-name"},[e("span",{staticClass:"folder-name__icon",class:[n.isEmpty?"icon-dark":"icon-white",n.icon],attrs:{role:"img"}}),n._v(" "),e("p",{staticClass:"folder-name__name",attrs:{id:n.ariaUuid}},[n._v("\n\t\t\t"+n._s(n.name)+"\n\t\t")])]),n._v(" "),e("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"22a9a965",null).exports},612:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>nn});var r=e(20629),a=e(30329),i=e.n(a),o=e(81067),c=e(99588);function s(n,t,e,r,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,a)}function d(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){s(i,r,a,o,c,"next",n)}function c(n){s(i,r,a,o,c,"throw",n)}o(void 0)}))}}function l(n){return u.apply(this,arguments)}function u(){return(u=d(regeneratorRuntime.mark((function n(t){var e,r,a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,o.Z.getDirectoryContents("/systemtags/",Object.assign({},{data:'<?xml version="1.0"?>\n\t\t\t<d:propfind  xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:id />\n\t\t\t\t\t<oc:display-name />\n\t\t\t\t\t<oc:user-visible />\n\t\t\t\t\t<oc:user-assignable />\n\t\t\t\t\t<oc:can-assign />\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>',details:!0},e));case 3:return r=n.sent,n.abrupt("return",r.data.map((function(n){return(0,c.AX)(n)})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var p=e(22200),f=e(2161),A=e(3301);function m(n,t,e,r,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,a)}function g(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){m(i,r,a,o,c,"next",n)}function c(n){m(i,r,a,o,c,"throw",n)}o(void 0)}))}}function h(n){return v.apply(this,arguments)}function v(){return(v=g(regeneratorRuntime.mark((function n(t){var e,r,a,i=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:{},e=Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-files\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(f.N,"\n\t\t\t\t</d:prop>\n\t\t\t\t<oc:filter-rules>\n\t\t\t\t\t<oc:systemtag>").concat(t,"</oc:systemtag>\n\t\t\t\t</oc:filter-rules>\n\t\t\t</oc:filter-files>"),details:!0},e),r="/files/".concat((0,p.getCurrentUser)().uid),n.next=5,o.Z.getDirectoryContents(r,e);case 5:return a=n.sent,n.abrupt("return",a.data.map((function(n){return(0,c.AX)(n)})).filter((function(n){return n.mime&&-1!==A.ZP.indexOf(n.mime)})).map((function(n){return Object.assign({},n,{filename:n.filename.replace(r,"")})})));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var C=e(66533),x=e(4615),y=e(68789),w=e(25108);function b(n,t,e,r,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,a)}function P(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function T(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?P(Object(e),!0).forEach((function(t){k(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function k(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const R={name:"Tag",components:{FolderTagPreview:y.Z},inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:function(){return{cancelRequest:null}},computed:T(T({},(0,r.Se)(["files","tags"])),{},{folderContent:function(){return this.tags[this.item.injected.id].files},fileList:function(){var n=this;return this.folderContent?this.folderContent.map((function(t){return n.files[t]})).filter((function(n){return!!n})).slice(0,4):[]}}),beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Navigated away")},created:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var e,r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,x.Z)(h),r=e.request,a=e.cancel,t.cancelRequest=a,n.prev=2,n.next=5,r(t.item.injected.id);case 5:i=n.sent,t.$store.dispatch("updateTag",{id:t.item.injected.id,files:i}),t.$store.dispatch("appendFiles",i),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),n.t0.response&&n.t0.response.status&&w.error("Failed to get folder content",t.item.injected.id,n.t0.response);case 13:return n.prev=13,t.cancelRequest=null,n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})),function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){b(i,r,a,o,c,"next",n)}function c(n){b(i,r,a,o,c,"throw",n)}o(void 0)}))})()}};var O=e(51900);const E=(0,O.Z)(R,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("FolderTagPreview",{attrs:{id:n.item.injected.id,icon:"icon-tag",name:n.item.injected.displayName,path:n.item.injected.displayName,"file-list":n.fileList}})}),[],!1,null,null,null).exports;var D=e(27273),j=e(82390),B=e(85324),_=e(25108);function $(n,t,e,r,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,a)}function q(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){$(i,r,a,o,c,"next",n)}function c(n){$(i,r,a,o,c,"throw",n)}o(void 0)}))}}function S(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function W(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?S(Object(e),!0).forEach((function(t){L(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function L(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const Z={name:"Tags",components:{VirtualGrid:i(),EmptyContent:C.Z,Navigation:j.Z},mixins:[B.Z],props:{rootTitle:{type:String,required:!0},path:{type:String,default:""},loading:{type:Boolean,required:!0},isRoot:{type:Boolean,default:!0}},data:function(){return{error:null,cancelRequest:null}},computed:W(W({},(0,r.Se)(["files","tags","tagsNames"])),{},{tagId:function(){return this.$store.getters.tagId(this.path)},tag:function(){return this.tags[this.tagId]},tagsList:function(){var n=this;return Object.values(this.tagsNames).map((function(t){return n.tags[t]}))},fileList:function(){var n=this;return this.tag&&this.tag.files.map((function(t){return n.files[t]})).filter((function(n){return!!n}))},contentList:function(){var n=this;return this.isRoot?this.tagsList.flatMap((function(n){return""===n.id?[]:[{id:"tag-".concat(n.id),injected:W({},n),width:256,height:256,columnSpan:1,renderComponent:E}]})):this.fileList.map((function(t){return{id:"file-".concat(t.fileid),injected:W(W({},t),{},{list:n.fileList}),width:256,height:256,columnSpan:1,renderComponent:D.Z}}))},isEmpty:function(){return this.isRoot?0===Object.keys(this.tagsNames).length:0===this.fileList.length}}),watch:{path:function(){var n=this;return q(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.tagId){t.next=3;break}return t.next=3,n.fetchRootContent();case 3:n.isRoot||n.fetchContent();case 4:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Navigated away")},beforeMount:function(){var n=this;return q(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.tagId){t.next=3;break}return t.next=3,n.fetchRootContent();case 3:n.isRoot||n.fetchContent();case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchRootContent:function(){var n=this;return q(regeneratorRuntime.mark((function t(){var e,r,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.cancelRequest&&n.cancelRequest("Changed folder"),OCA.Viewer.close(),n.tags[n.tagId]||n.$emit("update:loading",!0),n.error=null,e=(0,x.Z)(l),r=e.request,a=e.cancel,n.cancelRequest=a,t.prev=6,t.next=9,r();case 9:i=t.sent,n.$store.dispatch("updateTags",i),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),_.error(t.t0),n.error=!0;case 17:return t.prev=17,n.$emit("update:loading",!1),n.cancelRequest=null,t.finish(17);case 21:case"end":return t.stop()}}),t,null,[[6,13,17,21]])})))()},fetchContent:function(){var n=this;return q(regeneratorRuntime.mark((function t(){var e,r,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.cancelRequest&&n.cancelRequest(),OCA.Viewer.close(),n.tags[n.tagId]||n.$emit("update:loading",!0),n.error=null,e=(0,x.Z)(h),r=e.request,a=e.cancel,n.cancelRequest=a,t.prev=6,t.next=9,r(n.tagId);case 9:i=t.sent,n.$store.dispatch("updateTag",{id:n.tagId,files:i}),n.$store.dispatch("appendFiles",i),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),_.error(t.t0),n.error=!0;case 18:return t.prev=18,n.$emit("update:loading",!1),n.cancelRequest=null,t.finish(18);case 22:case"end":return t.stop()}}),t,null,[[6,14,18,22]])})))()}}};var N=e(93379),I=e.n(N),U=e(7795),F=e.n(U),G=e(90569),z=e.n(G),H=e(3565),Y=e.n(H),M=e(19216),V=e.n(M),J=e(44589),Q=e.n(J),X=e(86370),K={};K.styleTagTransform=Q(),K.setAttributes=Y(),K.insert=z().bind(null,"head"),K.domAPI=F(),K.insertStyleElement=V();I()(X.Z,K);X.Z&&X.Z.locals&&X.Z.locals;const nn=(0,O.Z)(Z,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.error?e("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():e("div",[e("Navigation",{key:"navigation",attrs:{basename:n.path,filename:"/"+n.path,"root-title":n.rootTitle}}),n._v(" "),n.isEmpty?e("EmptyContent",{key:"emptycontent",attrs:{"illustration-name":"empty"},scopedSlots:n._u([{key:"desc",fn:function(){return[n._v("\n\t\t\t"+n._s(n.t("photos","Photos with tags will show up here"))+"\n\t\t")]},proxy:!0}],null,!1,4132175345)},[n._v("\n\t\t"+n._s(n.t("photos","No tags yet"))+"\n\t\t")]):e("div",{staticClass:"grid-container"},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap}}})],1)],1)}),[],!1,null,"580f514c",null).exports},80950:()=>{},46601:()=>{},89214:()=>{},96419:()=>{},56353:()=>{},8623:()=>{},7748:()=>{},85568:()=>{},69386:()=>{},31616:()=>{},56619:()=>{},77108:()=>{},69862:()=>{},40964:()=>{}}]);
//# sourceMappingURL=photos-src_patchedRequest_js-src_views_Tags_vue.js.map?v=cdc4f9f12cd44a094cde