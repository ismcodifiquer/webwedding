!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5e9a82af-9657-48fc-8c71-06a33ff459f5",e._sentryDebugIdIdentifier="sentry-dbid-5e9a82af-9657-48fc-8c71-06a33ff459f5")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4507],{49544:function(e,t){t.DF={prefix:"far",iconName:"eye",icon:[576,512,[128065],"f06e","M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]},t.Md=t.DF},7552:function(e,t,l){l.d(t,{D:function(){return u}});var n=l(97458),r=l(52983),a=l(77267),s=l(25929),i=l(77954),o=l(77837),c=l.n(o);let u=e=>{let{children:t,fetchNextPage:l,hasNextPage:o,showLoadingState:u,itemsToRender:d,loadingPlaceholder:m}=e,h=(0,r.useRef)(l);h.current=l;let f=(0,r.useRef)(c()(()=>h.current(),300)),x=(0,r.useRef)(null);(0,a.S)(x,f.current,{rootMargin:"50px",threshold:0});let p=m||(0==d.length?(0,n.jsx)(s.ZP,{className:"py-sm",children:(0,n.jsx)(i.Z,{animateLines:!1,blockCount:12,divider:!0})}):(0,n.jsx)(s.ZP,{className:"py-md",children:(0,n.jsx)(i.Z,{animateLines:!1,blockCount:1})}));return(0,n.jsxs)(n.Fragment,{children:[t,u&&p,d.length>0&&o&&(0,n.jsx)("div",{ref:x,className:"border border-transparent"})]})}},36496:function(e,t,l){l.d(t,{j:function(){return c}});var n=l(97458),r=l(52983),a=l(59021),s=l(51253),i=l(49544),o=l(96299);let c=r.memo(e=>{var t,l;let{threadAccess:r,socialInfo:c,textVariant:u,textColor:d,className:m}=e;if(!r||!c||r<o.uv.PUBLIC_READ)return null;let h=null!==(t=c.view_count)&&void 0!==t?t:0,f=null!==(l=c.fork_count)&&void 0!==l?l:0;return(0,n.jsxs)(n.Fragment,{children:[h>0&&(0,n.jsx)(a.W,{icon:i.Md,count:h,textColor:d,textVariant:u,className:m}),f>0&&(0,n.jsx)(a.W,{icon:s.MD,count:f,textColor:d,textVariant:u,className:m})]})})},86634:function(e,t,l){var n=l(97458),r=l(52983),a=l(31737),s=l(28492),i=l(10785),o=l(80937),c=l(21139),u=l(33326),d=l(61904),m=l(46563),h=l(382),f=l(78398),x=l(81773);t.Z=e=>{let{show:t,isBookmarked:l,onDelete:p,onAddToCollection:v,onSwapCollection:g,onRemoveFromCollection:y,currentCollection:j,rwToken:C,type:w}=e,{isMobileStyle:k}=(0,m.d)(),b=!l&&(w===s.W.LIBRARY||w===s.W.SEARCH)&&null!=v,[I,D]=(0,r.useState)(!1),N=(0,a.useTranslations)("threadItem"),_=(0,a.useTranslations)("shared");if(!t)return null;let Z=[{icon:o.faPlus,text:_("addToCollection"),show:b,onClick:v,testId:"thread-add-to-collection"},{icon:c.a_,text:_("swapCollections"),show:l&&null!=j&&null!=g,onClick:g,testId:"thread-swap-collection"},{icon:d.faXmark,text:_("removeFromCollection"),show:l&&null!=y&&null!=j,onClick:y,testId:"thread-remove-from-collection"},{icon:u.$,text:N("deleteThread"),show:null!==C&&null!=p,onClick:()=>D(!0),testId:"thread-delete"}];return(null==Z?void 0:Z.every(e=>!e.show))?null:(0,n.jsxs)("div",{children:[(0,n.jsx)(h.G,{items:Z,isMobileStyle:k,children:(0,n.jsx)(f.Z,{testId:"thread-dropdown-menu",size:"small",icon:i.faEllipsis})}),(0,n.jsx)(x.Z,{isOpen:I,onClose:()=>D(!1),message:N("deleteThreadConfirmation"),actionList:[{text:_("nevermind"),onClick:()=>D(!1)},{text:_("confirm"),variant:"rejected",onClick:p}]})]})}},28492:function(e,t,l){l.d(t,{W:function(){return r},B:function(){return F}});var n,r,a=l(97458),s=l(52983),i=l(31737),o=l(24819),c=l.n(o),u=l(53541),d=l(41275),m=l(5299);let h=e=>{let{collections:t}=(0,m.l)();if(!e||!t)return null;let l=t.find(t=>t.uuid===e);return null!=l?l:null};var f=l(45233),x=l(55814),p=l(1809),v=l(38213),g=l(94589),y=l(37464),j=l(86634),C=l(31534),w=l.n(C),k=l(51865),b=l.n(k);let I=s.memo(e=>{let{type:t,featuredImage:l,title:n,className:s,href:i}=e;if(!l||t!==r.DISCOVER)return null;let o=(0,a.jsx)("div",{className:b()("relative h-24 w-24 flex-none overflow-hidden rounded-md",s),children:l.includes("images.unsplash.com")?(0,a.jsx)("img",{src:l,alt:n,className:"h-full w-full object-cover object-center"}):(0,a.jsx)(w(),{src:l,alt:n,sizes:"33vw",fill:!0,priority:!0,className:"object-cover object-center"})});return i?(0,a.jsx)(c(),{href:i,children:o}):o});var D=l(86231),N=l.n(D),_=l(19381),Z=l(82122),T=l(8245),Q=l(59021),U=l(36496),S=l(95714);let R=N()(()=>Promise.all([l.e(9402),l.e(9974),l.e(7094),l.e(6391),l.e(1987),l.e(1788),l.e(4780),l.e(2483),l.e(1912),l.e(6474),l.e(5559),l.e(5748)]).then(l.bind(l,55559)).then(e=>e.TimeAgoTooltip),{loadableGenerated:{webpack:()=>[55559]},ssr:!1}),E=s.memo(e=>{let{threadCount:t,threadAccess:l,lastUpdated:n,socialInfo:r,focus:s}=e,i=(0,T.k)(),{locale:o}=(0,Z.z)();return(0,a.jsxs)("div",{className:"flex items-center gap-x-md",children:[!!t&&t>1&&(0,a.jsx)(Q.W,{icon:S.i,count:t}),(0,a.jsx)(U.j,{socialInfo:r,threadAccess:l}),n&&(0,a.jsx)(R,{timestamp:n,translations:i,locale:o}),(0,a.jsx)(_.Z,{textColor:"light",textVariant:"tiny",focus:s})]})});var P=l(80937),A=l(25929),L=l(11556),M=l(78398);let O=e=>{let{idx:t,title:l,preview:n,threadCount:o,lastUpdated:C,href:w="/",rwToken:k,focus:b,socialInfo:D,showActionMenu:N=!0,authorImage:_,threadAccess:Z,type:T,featuredImage:Q,entryUUID:U,contextUUID:S,collection:R}=e,O=h(null==R?void 0:R.uuid),{openModal:X}=(0,p.X)(),{collections:z}=(0,m.l)(),{searchTerm:F}=(0,v.p)(),{deleteThread:K}=(0,f.l)(),{removeThreadFromCollection:W}=(0,d.Fb)(),q=(0,u.useRouter)(),{trackEvent:B}=(0,x.WS)(),V=(0,i.useTranslations)("shared"),G=(0,s.useCallback)(e=>{let{entryUUID:t}=e;0===z.length?X("collectionCreateOrEdit",{existingCollection:O,frontendContextUUID:void 0,searchTerm:F}):X("collectionSelectModal",{entryUUID:t,userCollections:z,currentCollection:O,searchTerm:F})},[O,z,X,F]),H=(0,s.useCallback)(async e=>{K({entryUUID:e,collectionSlug:null==O?void 0:O.slug}),B("delete thread from history click",{entryUUID:e})},[null==O?void 0:O.slug,K,B]),Y=(0,s.useCallback)(()=>{T===r.DISCOVER&&B("discover item click",{position:t,contextUUID:S})},[T,B,t,S]);return(0,a.jsxs)(A.ZP,{className:"flex items-center gap-x-md py-md md:px-0",onClick:Y,children:[(0,a.jsx)(I,{featuredImage:Q,type:T,title:l,href:w}),(0,a.jsxs)("div",{className:"w-full grow",children:[(0,a.jsx)(c(),{href:w,className:"group block",children:(0,a.jsxs)(A.ZP,{className:"",children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-md",children:[(0,a.jsx)(L.Z,{className:"grow",variant:"baseSemi",children:(0,a.jsx)("div",{"data-testid":"thread-title",className:"line-clamp-1 break-all transition duration-300 md:group-hover:text-super md:dark:group-hover:text-superDark",children:l})}),null!=_&&(0,a.jsx)(y.Z,{size:"small",user:_})]}),(0,a.jsx)(L.Z,{color:"light",className:"break-word mt-two line-clamp-2 text-balance",children:n})]})}),(0,a.jsx)("div",{className:N?"mt-xs":"mt-sm",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(E,{threadCount:o,threadAccess:Z,lastUpdated:C,socialInfo:D,focus:b}),(0,a.jsxs)("div",{className:"flex items-center gap-x-xs",children:[(null==R?void 0:R.title)&&T===r.LIBRARY&&(0,a.jsx)(c(),{href:"/collections/".concat(null==R?void 0:R.slug),className:"block",children:(0,a.jsx)(A.ZP,{className:"rounded-full border px-xs",children:(0,a.jsxs)(L.Z,{variant:"tiny",className:"flex cursor-pointer select-none items-center gap-x-xs px-sm py-xs transition duration-300 hover:opacity-70",testId:"thread-collection-pill",children:[(0,a.jsx)(g.B,{unified:R.emoji,size:"tiny"}),(0,a.jsx)("div",{className:"line-clamp-1",children:R.title})]})})}),N&&!(null==R?void 0:R.title)&&(0,a.jsx)(M.Z,{testId:"add-to-collection",toolTip:V("addToCollection"),onClick:()=>G({entryUUID:U}),icon:P.faPlus,size:"small"}),(0,a.jsx)(j.Z,{show:N,isBookmarked:null!=O,onDelete:()=>H(U),onAddToCollection:()=>G({entryUUID:U}),onSwapCollection:()=>G({entryUUID:U}),onRemoveFromCollection:()=>W({entryUUID:U,oldCollectionUUID:null==O?void 0:O.uuid,callback:()=>{T===r.COLLECTION&&q.push("/library")}}),currentCollection:O,rwToken:k,type:T})]})]})})]})]})};var X=l(29443),z=l(7552);(n=r||(r={})).LIBRARY="library",n.COLLECTION="collection",n.DISCOVER="discover",n.SEARCH="search",n.INCOGNITO_SEARCH="incognitoSearch";let F=e=>{let{threads:t,fetchNextPage:l,hasNextPage:n=!1,showLoadingState:r=!1,showEmptyState:s=!1,type:o}=e,c=(null!=t?t:[]).map(X.gN),u=(0,i.useTranslations)("threads.main");return s&&0===c.length?(0,a.jsx)(A.ZP,{variant:"offset",className:"mt-md flex items-center justify-center rounded p-xl",children:"collection"===o?(0,a.jsx)(L.Z,{color:"light",children:u("threadsPlaceholder")}):(0,a.jsx)(L.Z,{color:"light",children:u("noThreads")})}):(0,a.jsx)(z.D,{fetchNextPage:l,hasNextPage:n,showLoadingState:r,itemsToRender:c,children:(0,a.jsx)(A.ZP,{className:"divide-y",children:c.map((e,t)=>{var l;return(0,a.jsx)(O,{idx:t,href:e.href,rwToken:e.rwToken,title:e.title,preview:e.preview,threadCount:e.threadCount,lastUpdated:e.lastUpdated,copilot:e.copilot,focus:e.focus,socialInfo:e.socialInfo,threadAccess:e.threadAccess,authorImage:e.authorImage,featuredImage:null!==(l=e.featuredImage)&&void 0!==l?l:null,showActionMenu:"discover"!==o,type:o,entryUUID:e.entryUUID,contextUUID:e.contextUUID,collection:e.collection},e.entryUUID)})})})}},19381:function(e,t,l){var n=l(97458),r=l(820);l(52983);var a=l(67093),s=l(30505),i=l(25929),o=l(11556);t.Z=e=>{let{textVariant:t="baseSemi",textColor:l="default",focus:c}=e,{FocusConfigs:u}=(0,a.m)();return c&&c!==s.w.internet&&null!=u[c]?(0,n.jsx)(i.ZP,{children:(0,n.jsxs)(o.Z,{variant:t,color:l,className:"flex items-center gap-x-xs",children:[(0,n.jsx)(r.G,{size:"1x",icon:u[c].icon}),(0,n.jsx)("div",{children:u[c].text})]})}):null}},45233:function(e,t,l){l.d(t,{l:function(){return m}});var n=l(81993),r=l(22696),a=l(64038),s=l(67937),i=l(61061),o=l(96339),c=l(38213),u=l(41275),d=l(54994);let m=()=>{let e=(0,n.NL)(),t=(0,i.nO)(),{searchTerm:l}=(0,c.p)(),{threadMetadata:m}=(0,o.a0)(),{clearSidebarRecentItems:h,removeItemFromSidebar:f}=(0,a.f)(),x=[d.Tb,{search_term:null!=l?l:""}],{mutate:p}=(0,r.D)({mutationKey:["removeWidget"],mutationFn:e=>{let{entryUUID:t,data:l}=e;return(0,s.UF)(t,l.url,m.rwToken)},onMutate:async t=>{let{entryUUID:l,data:n}=t;await e.cancelQueries({queryKey:["results",{frontend_context_uuid:m.frontendContextUUID}]}),e.setQueryData(["results",{frontend_context_uuid:m.frontendContextUUID}],e=>e.map(e=>(e.backend_uuid===l&&(n.is_widget&&(e.widget_data=e.widget_data.filter(e=>e.url!==n.url)),n.is_knowledge_card&&(e.knowledge_cards=e.knowledge_cards.filter(e=>e.url!==n.url))),e)))}}),{mutate:v}=(0,r.D)({mutationFn:async()=>{if(!t)throw Error("No socket connection");await t.emitWithAck("delete_all_threads")},onMutate:async()=>{h(),await e.cancelQueries({queryKey:x}),await e.cancelQueries({queryKey:u.Xt});let t=e.getQueryData(x),l=e.getQueryData(u.Xt);return e.setQueryData(u.Xt,e=>{let t=e.pages.map(e=>e.map(e=>({...e,thread_count:0})));return{...e,pages:t}}),e.setQueryData(x,e=>({...e,pages:[]})),{previousThreads:t,previousCollections:l}},onSettled:(t,l,n,r)=>{l?(e.setQueryData(x,r.previousThreads),e.setQueryData(u.Xt,r.previousCollections)):(e.invalidateQueries({queryKey:x}),e.invalidateQueries({queryKey:u.Xt}))}}),{mutate:g}=(0,r.D)({mutationFn:async e=>{let{entryUUID:l,callback:n}=e;if(!t)throw Error("No socket connection");null==n||n(),await t.emitWithAck("delete_thread_by_entry_uuid",l,{read_write_token:null==m?void 0:m.rwToken}),f(l)},onMutate:async t=>{let{entryUUID:l,collectionSlug:n}=t;await e.cancelQueries({queryKey:x}),await e.cancelQueries({queryKey:u.Xt});let r=e.getQueryData(x),a=e.getQueryData(u.Xt);return e.setQueryData(x,e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.filter(e=>e.uuid!==l));return{...e,pages:t}}),n&&(e.setQueryData(u.Xt,e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.map(e=>e.slug===n?{...e,thread_count:e.thread_count-1}:e));return{...e,pages:t}}),e.setQueryData(["list_collection_threads",{collection_slug:n.slice(-22)}],e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.filter(e=>e.uuid!==l));return{...e,pages:t}})),{previousThreads:r,previousCollections:a}},onSettled:(t,l,n,r)=>{l?(e.setQueryData(x,r.previousThreads),e.setQueryData(u.Xt,r.previousCollections)):(e.invalidateQueries({queryKey:x}),e.invalidateQueries({queryKey:u.Xt}))}});return{removeWidgetFromEntry:p,deleteAllThreads:v,deleteThread:g}}},77267:function(e,t,l){l.d(t,{S:function(){return r}});var n=l(52983);let r=(e,t,l)=>{(0,n.useEffect)(()=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t()})},l),r=e.current;return r&&n.observe(r),()=>{r&&n.unobserve(r)}},[e,t,l])}},81773:function(e,t,l){var n=l(97458);l(52983);var r=l(11556),a=l(18661);t.Z=e=>{let{message:t,...l}=e;return(0,n.jsx)(a.Z,{title:void 0,subtitle:void 0,...l,children:(0,n.jsx)(r.Z,{variant:"section-title",className:"pb-md text-center",children:t})})}}}]);