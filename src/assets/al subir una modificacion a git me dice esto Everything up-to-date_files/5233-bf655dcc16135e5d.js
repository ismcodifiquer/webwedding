!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4cbf7a63-4518-40c8-845f-95078088962d",e._sentryDebugIdIdentifier="sentry-dbid-4cbf7a63-4518-40c8-845f-95078088962d")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5233],{45233:function(e,t,r){r.d(t,{l:function(){return y}});var n=r(81993),a=r(22696),o=r(64038),i=r(67937),c=r(61061),s=r(96339),u=r(38213),l=r(41275),d=r(54994);let y=()=>{let e=(0,n.NL)(),t=(0,c.nO)(),{searchTerm:r}=(0,u.p)(),{threadMetadata:y}=(0,s.a0)(),{clearSidebarRecentItems:p,removeItemFromSidebar:m}=(0,o.f)(),h=[d.Tb,{search_term:null!=r?r:""}],{mutate:f}=(0,a.D)({mutationKey:["removeWidget"],mutationFn:e=>{let{entryUUID:t,data:r}=e;return(0,i.UF)(t,r.url,y.rwToken)},onMutate:async t=>{let{entryUUID:r,data:n}=t;await e.cancelQueries({queryKey:["results",{frontend_context_uuid:y.frontendContextUUID}]}),e.setQueryData(["results",{frontend_context_uuid:y.frontendContextUUID}],e=>e.map(e=>(e.backend_uuid===r&&(n.is_widget&&(e.widget_data=e.widget_data.filter(e=>e.url!==n.url)),n.is_knowledge_card&&(e.knowledge_cards=e.knowledge_cards.filter(e=>e.url!==n.url))),e)))}}),{mutate:_}=(0,a.D)({mutationFn:async()=>{if(!t)throw Error("No socket connection");await t.emitWithAck("delete_all_threads")},onMutate:async()=>{p(),await e.cancelQueries({queryKey:h}),await e.cancelQueries({queryKey:l.Xt});let t=e.getQueryData(h),r=e.getQueryData(l.Xt);return e.setQueryData(l.Xt,e=>{let t=e.pages.map(e=>e.map(e=>({...e,thread_count:0})));return{...e,pages:t}}),e.setQueryData(h,e=>({...e,pages:[]})),{previousThreads:t,previousCollections:r}},onSettled:(t,r,n,a)=>{r?(e.setQueryData(h,a.previousThreads),e.setQueryData(l.Xt,a.previousCollections)):(e.invalidateQueries({queryKey:h}),e.invalidateQueries({queryKey:l.Xt}))}}),{mutate:w}=(0,a.D)({mutationFn:async e=>{let{entryUUID:r,callback:n}=e;if(!t)throw Error("No socket connection");null==n||n(),await t.emitWithAck("delete_thread_by_entry_uuid",r,{read_write_token:null==y?void 0:y.rwToken}),m(r)},onMutate:async t=>{let{entryUUID:r,collectionSlug:n}=t;await e.cancelQueries({queryKey:h}),await e.cancelQueries({queryKey:l.Xt});let a=e.getQueryData(h),o=e.getQueryData(l.Xt);return e.setQueryData(h,e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.filter(e=>e.uuid!==r));return{...e,pages:t}}),n&&(e.setQueryData(l.Xt,e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.map(e=>e.slug===n?{...e,thread_count:e.thread_count-1}:e));return{...e,pages:t}}),e.setQueryData(["list_collection_threads",{collection_slug:n.slice(-22)}],e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.filter(e=>e.uuid!==r));return{...e,pages:t}})),{previousThreads:a,previousCollections:o}},onSettled:(t,r,n,a)=>{r?(e.setQueryData(h,a.previousThreads),e.setQueryData(l.Xt,a.previousCollections)):(e.invalidateQueries({queryKey:h}),e.invalidateQueries({queryKey:l.Xt}))}});return{removeWidgetFromEntry:f,deleteAllThreads:_,deleteThread:w}}},64038:function(e,t,r){r.d(t,{G:function(){return s},f:function(){return d}});var n=r(81993),a=r(74512),o=r(52983),i=r(80973),c=r(1845);let s=8,u="recentItems",l=()=>{let e=localStorage.getItem(u);return e?JSON.parse(e):[]},d=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,c.f)(),r=(0,n.NL)(),{isIncognito:d}=(0,i.Y)(),y=(0,a.a)({queryKey:[u],queryFn:l,enabled:e}),p=(0,o.useCallback)(e=>{d||r.setQueryData([u],function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=new URL(e.permalink,"http://example.com"),n={...e,permalink:r.pathname},a=[n,...t.filter(t=>t.id!==e.id&&t.permalink!==n.permalink)].slice(0,s);return localStorage.setItem(u,JSON.stringify(a)),a})},[r,d]),m=(0,o.useCallback)(e=>{r.setQueryData([u],function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t)return;let n=r.filter(t=>t.id!==e&&!t.permalink.endsWith(e));return localStorage.setItem(u,JSON.stringify(n)),n})},[t,r]),h=(0,o.useCallback)(()=>{r.setQueryData([u],[]),localStorage.removeItem(u)},[r]);return{...y,addItemToSidebar:p,removeItemFromSidebar:m,clearSidebarRecentItems:h}}},67937:function(e,t,r){r.d(t,{AM:function(){return l},G$:function(){return w},J1:function(){return c},M6:function(){return p},TF:function(){return o},Th:function(){return y},UF:function(){return f},eS:function(){return m},fz:function(){return u},jX:function(){return d},l8:function(){return s},mq:function(){return i},o_:function(){return a},tq:function(){return _},vE:function(){return h}});var n=r(67333);let a=async(e,t,r)=>{let a="sendUserFeedback";try{let o=await (0,n.$e)({urlPath:"rest/entry/feedback/".concat(e),timeoutMs:(0,n.vX)(),method:"POST",body:JSON.stringify({label:t,feedback:r}),headers:{"Content-Type":"application/json"}});return(0,n.HL)(a),o.json()}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},o=async(e,t,r)=>{let a="updateArticleSectionTitle";if(r)try{let o=await (0,n.FX)({urlPath:"p/api/v1/article/section/title/".concat(e),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:r,title:t}),headers:{"Content-Type":"application/json"},numRetries:1});return(0,n.HL)(a),o.json()}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},i=async(e,t,r)=>{let a="updateArticleSectionHeroOffset";if(r)try{let o=await (0,n.FX)({urlPath:"p/api/v1/article/section/hero_offset/".concat(e),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:r,hero_offset:t}),headers:{"Content-Type":"application/json"},numRetries:1});return(0,n.HL)(a),o.json()}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},c=async(e,t)=>{let r="deleteArticleSection";if(e&&t)try{let a=await (0,n.FX)({urlPath:"p/api/v1/article/section/".concat(e),timeoutMs:(0,n.vX)(),method:"DELETE",body:JSON.stringify({read_write_token:t}),headers:{"Content-Type":"application/json"},numRetries:1}),o=await a.json();return(0,n.HL)(r),o}catch(e){throw(0,n.i8)(r,e),console.error("".concat(r," error:"),e),e}},s=async(e,t)=>{let r="updateArticleSectionsLayout";if(t&&0!==e.length)try{let a=await (0,n.FX)({urlPath:"p/api/v1/article/sections/layout",timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:t,sections:e}),headers:{"Content-Type":"application/json"},numRetries:1}),o=await a.json();return(0,n.HL)(r),o}catch(e){throw(0,n.i8)(r,e),console.error("".concat(r," error:"),e),e}},u=async e=>{let{sectionUUID:t,mediaItem:r,targetIndex:a,rwToken:o,isNewMediaItem:i=!1}=e,c="updateArticleSectionImage";if(o)try{let e=await (0,n.FX)({urlPath:"p/api/v1/article/section/image/".concat(t),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:o,media_item:r,target_index:a,new_media_item:i}),headers:{"Content-Type":"application/json"},numRetries:1}),s=await e.json();return(0,n.HL)(c),s}catch(e){throw(0,n.i8)(c,e),console.error("".concat(c," error:"),e),e}},l=async function(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o="addMediaItemToSectionSelectedImagesMutation";if(r)try{let i=await (0,n.FX)({urlPath:"p/api/v1/article/section/media/add/".concat(e),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:r,media_item:t,new_media_item:a}),headers:{"Content-Type":"application/json"},numRetries:1}),c=await i.json();return(0,n.HL)(o),c}catch(e){throw(0,n.i8)(o,e),console.error("".concat(o," error:"),e),e}},d=async(e,t,r)=>{let a="uploadImageToSectionMediaItemsMutation";if(r)try{let o=await (0,n.FX)({urlPath:"p/api/v1/article/section/upload_image/".concat(e),timeoutMs:(0,n.vX)(),method:"POST",body:JSON.stringify({read_write_token:r,content_type:t.type}),headers:{"Content-Type":"application/json"},numRetries:1}),i=await o.json();return(0,n.HL)(a),i}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},y=async(e,t,r)=>{let a="addMediaItemToSectionSelectedImagesMutation";if(r)try{let o=await (0,n.FX)({urlPath:"p/api/v1/article/section/media/remove/".concat(e),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:r,media_item_image_url:t}),headers:{"Content-Type":"application/json"},numRetries:1}),i=await o.json();return(0,n.HL)(a),i}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},p=async(e,t,r,a)=>{let o="reorderArticleSectionMutation";if(a)try{let i=await (0,n.FX)({urlPath:"p/api/v1/article/reorder/".concat(e),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:a,section_uuid:t,relative_move:r}),headers:{"Content-Type":"application/json"},numRetries:1}),c=await i.json();return(0,n.HL)(o),c}catch(e){throw(0,n.i8)(o,e),console.error("".concat(o," error:"),e),e}},m=async e=>{let t="terminateArticleSectionStreaming";if(e)try{let r=await (0,n.FX)({urlPath:"p/api/v1/article/section/terminate/".concat(e),timeoutMs:(0,n.vX)(),method:"POST",numRetries:1});return(0,n.HL)(t),r.json()}catch(e){throw(0,n.i8)(t,e),console.error("".concat(t," error:"),e),e}},h=async(e,t,r)=>{let a="addArticleSectionMediaItemMutation";if(r)try{let o=await (0,n.FX)({urlPath:"p/api/v1/article/section/add/media_item/".concat(e),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:r,media_item:t}),headers:{"Content-Type":"application/json"},numRetries:1}),i=await o.json();return(0,n.HL)(a),i}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},f=async(e,t,r)=>{let a="removeWidgetFromEntryMutation";if(r)try{let o=await (0,n.$e)({urlPath:"rest/thread/entry/remove_widget",timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({entry_uuid:e,read_write_token:r,url:t}),headers:{"Content-Type":"application/json"},numRetries:1}),i=await o.json();return(0,n.HL)(a),i}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},_=async(e,t,r)=>{let a="toggleEmphasizeSources";try{let o=await (0,n.FX)({urlPath:"p/api/v1/article/emphasize_sources/".concat(e),timeoutMs:(0,n.vX)(),method:"PUT",body:JSON.stringify({read_write_token:t,value:r}),headers:{"Content-Type":"application/json"},numRetries:1}),i=await o.json();return(0,n.HL)(a),i}catch(e){throw(0,n.i8)(a,e),console.error("".concat(a," error:"),e),e}},w=async e=>{let t="disconnectConnector:".concat(e);try{let r=await (0,n.$e)({urlPath:"rest/connectors/".concat(e,"/disconnect"),method:"GET",headers:{"Content-Type":"application/json"},timeoutMs:(0,n.vX)({productionMs:500}),numRetries:1}),a=await r.json();return(0,n.HL)(t),a}catch(e){return console.log("Error in ".concat(t,":"),e),(0,n.i8)(t,e),null}}}}]);