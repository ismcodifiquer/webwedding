!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="73dfeed9-d252-41f2-893e-caec3a1bb1f0",e._sentryDebugIdIdentifier="sentry-dbid-73dfeed9-d252-41f2-893e-caec3a1bb1f0")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3455,6354],{59021:function(e,t,n){n.d(t,{W:function(){return o}});var s=n(97458),a=n(820),l=n(52983),r=n(11556),i=n(89782);let o=l.memo(e=>{let{icon:t,count:n,textVariant:l="tiny",textColor:o="light",className:c}=e;return(0,s.jsxs)("div",{className:"flex items-center gap-x-xs",children:[(0,s.jsx)(r.Z,{variant:l,color:o,className:c,children:(0,s.jsx)(a.G,{size:"sm",icon:t})}),(0,s.jsx)(r.Z,{variant:l,color:o,className:c,children:(0,i.uf)(n)})]})},(e,t)=>e.count===t.count&&e.icon===t.icon&&e.className===t.className)},35638:function(e,t,n){n.d(t,{A:function(){return i},T:function(){return o}});var s=n(97458),a=n(52983),l=n(6139);let r=(0,a.createContext)({result:null,steps:null,plan:null,isPending:!1,mediaItems:[],response:null,isFailed:!1,isReadonly:!1,inFlight:!1,idx:null,isCopilot:!1,filteredMediaItems:[],isLastResult:!1,isFirstResult:!1,hasAnswer:!1,hasSteps:!1,isFinalStep:!1,isSnapshotRender:!1}),i=e=>{let{children:t,result:n,response:i,isReadonly:o,idx:c,inFlight:u,isPending:d,hasSteps:m,isFinalStep:h,isCopilot:v,mediaItems:p,filteredMediaItems:x,isFailed:f,isSnapshotRender:g,isLastResult:y}=e,b=(0,a.useMemo)(()=>{var e;return n?(0,l.c)(null!==(e=n.text)&&void 0!==e?e:""):[]},[n]),k=(0,a.useMemo)(()=>{var e;return null!==(e=null==n?void 0:n.plan)&&void 0!==e?e:null},[n]),j=!!(null==i?void 0:i.answer);return(0,s.jsx)(r.Provider,{value:{isPending:d,hasSteps:m,isFinalStep:h,isCopilot:v,mediaItems:p,filteredMediaItems:x,isFailed:f,steps:b,plan:k,result:n,response:i,isReadonly:o,inFlight:u,idx:c,hasAnswer:j,isSnapshotRender:g,isFirstResult:0===c,isLastResult:y},children:t})},o=()=>{let e=(0,a.useContext)(r);if(!e)throw Error("useThreadEntry must be used within ThreadEntryProvider");return e}},79755:function(e,t,n){n.d(t,{a:function(){return l}});var s=n(97458),a=n(25929);let l=()=>(0,s.jsxs)("div",{className:"animate-pulse",children:[(0,s.jsxs)("div",{className:"flex gap-sm",children:[(0,s.jsx)(a.ZP,{variant:"offset",className:"h-[22px] w-[22px] rounded-full"}),(0,s.jsx)(a.ZP,{variant:"offset",className:"h-[22px] w-[80px] rounded-full"})]}),(0,s.jsx)(a.ZP,{variant:"offset",className:"mt-md h-[80px] rounded-md"})]})},25807:function(e,t,n){var s=n(97458),a=n(52983),l=n(62309),r=n(29658),i=n(89782),o=n(38474);t.Z=e=>{let{shareHref:t,hasMounted:n,isSharable:c,...u}=e,{trackEvent:d}=(0,l.h)(),m=(0,a.useCallback)(()=>{navigator.clipboard.writeText(n?(0,i.RP)(decodeURIComponent(t)):""),d("click copy link button",{})},[t,n,d]);return c?(0,s.jsx)(o.Z,{clickFeedback:!0,size:"small",onClick:m,toolTip:"Copy Link",tooltipLayout:"bottom",icon:r.nN,variant:"primary",...u}):null}},46402:function(e,t,n){var s=n(97458),a=n(52983),l=n(31737),r=n(25807),i=n(46563),o=n(4514),c=n(5658),u=n(38474);t.Z=e=>{let{isSharable:t,hasMounted:n,shareHref:d,EditorDropDownContent:m,icon:h,onClick:v}=e,{isMobileStyle:p}=(0,i.d)(),{isMacOS:x}=(0,o.Fy)(),[f,g]=(0,a.useState)(!1),y=(0,l.useTranslations)("shared"),b=(0,a.useCallback)(()=>{null==v||v(),g(e=>!e)},[v,g]),k=(0,a.useCallback)(e=>{(x?e.metaKey&&e.shiftKey&&"c"===e.key:e.ctrlKey&&e.shiftKey&&"c"===e.key)&&(e.preventDefault(),b())},[x,b]);return((0,a.useEffect)(()=>(document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}),[k]),n)?(0,s.jsxs)("div",{className:"flex items-center gap-x-sm",children:[!p&&(0,s.jsx)(r.Z,{shareHref:d,hasMounted:n,isSharable:t}),(0,s.jsx)(c.p,{content:m,placement:"bottom-end",isMobileStyle:p,onClose:()=>g(!1),isOpen:f,children:(0,s.jsx)(u.Z,{onClick:b,variant:p?"common":"primary",size:"small",text:p?void 0:y("share"),icon:h})})]}):null}},4030:function(e,t,n){var s=n(97458),a=n(820),l=n(52983),r=n(31737),i=n(62309),o=n(57632),c=n(91007),u=n(75421),d=n(44835),m=n(29658),h=n(89782),v=n(11556),p=n(38474);t.Z=e=>{let{descriptionText:t,shareHref:n,isSharable:x,hasMounted:f,icon:g}=e,y=encodeURIComponent(t),{trackEvent:b}=(0,i.h)(),k=(0,r.useTranslations)("socialShare"),j=(0,r.useTranslations)("shared"),w=(0,l.useMemo)(()=>"https://twitter.com/intent/tweet?text=".concat(y,"&url=").concat(n),[y,n]),N=(0,l.useMemo)(()=>"https://api.whatsapp.com/send?text=".concat(y,"%20").concat(n),[y,n]),C=(0,l.useMemo)(()=>"https://www.facebook.com/sharer/sharer.php?u=".concat(n,"&quote=").concat(y),[y,n]),A=(0,l.useCallback)(()=>{document.hasFocus&&(navigator.clipboard.writeText(f?(0,h.RP)(decodeURIComponent(n)):""),b("click copy link button",{}))},[n,f,b]),Z=(0,l.useCallback)(()=>{var e;if(!(null===(e=navigator)||void 0===e?void 0:e.share)){window.open(w,"_blank");return}navigator.share({text:"".concat(t," ").concat(f?(0,h.RP)(decodeURIComponent(n)):""),title:"Perplexity AI"}),b("click mobile native share button",{})},[n,w,t,f,b]),S=[{text:"Twitter",icon:u.NC,target:"_blank",href:w,onClick:()=>b("click tweet button",{})},{text:k("copyLink"),clickFeedback:!0,icon:m.nN,onClick:A},{text:"WhatsApp",icon:c.VH,target:"_blank",href:N,onClick:()=>b("click whatsapp button",{})},{text:"Facebook",icon:o.ne,target:"_blank",href:C,onClick:()=>b("click facebook button",{})}];return((0,l.useEffect)(()=>{f&&x&&A()},[f,x,A]),f&&x)?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mt-sm",children:(0,s.jsxs)(v.Z,{variant:"tiny",color:"super",children:[(0,s.jsx)(a.G,{icon:d.E9,className:"mr-xs"}),(0,s.jsx)("span",{children:k("linkCopied")})]})}),(0,s.jsxs)("div",{className:"hidden md:block",children:[(0,s.jsx)(v.Z,{variant:"baseSemi",className:"mb-sm mt-md",children:j("share")}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-xs",children:S.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)(p.Z,{layout:"left",size:"small",fullWidth:!0,...e})},e.text))})]}),(0,s.jsx)("div",{className:"block md:hidden",children:(0,s.jsx)("div",{className:"mt-md",children:(0,s.jsx)(p.Z,{variant:"primary",fullWidth:!0,text:j("share"),target:"_blank",icon:g,onClick:Z})})})]}):null}},22381:function(e,t,n){var s=n(97458),a=n(22696),l=n(47532),r=n(52983),i=n(31737),o=n(37464),c=n(50882),u=n(46563),d=n(95901),m=n(38474),h=n(11556),v=n(25929),p=n(78398);t.Z=e=>{var t,n,x;let{showAvatar:f,showCreatorLabel:g,showEdit:y,isCurrentUser:b=!0,textColor:k,textVariant:j="smallBold",username:w,image:N,anon:C,avatarSize:A="small"}=e,{data:Z,update:S}=(0,l.useSession)(),[_,P]=r.useState(!1),[E,T]=r.useState(null!=w?w:b?null==Z?void 0:null===(t=Z.user)||void 0===t?void 0:t.username:"Anonymous"),[F,R]=r.useState(),{isMobileUserAgent:I}=(0,u.d)(),M=(0,i.useTranslations)("settings.account"),z=async()=>fetch("/api/user",{method:"PUT",body:JSON.stringify({username:E})}),{mutate:D,isPending:O}=(0,a.D)({mutationFn:z,onSuccess:e=>{e.json().then(t=>{if(200!==e.status){R(t.message);return}P(!1),R(void 0),S()})}});return(0,r.useEffect)(()=>{var e;T(null!=w?w:b?null==Z?void 0:null===(e=Z.user)||void 0===e?void 0:e.username:"Anonymous")},[w,b,null==Z?void 0:null===(n=Z.user)||void 0===n?void 0:n.username]),(0,s.jsxs)("div",{className:"relative flex items-center gap-x-xs",children:[f&&(0,s.jsx)(o.Z,{size:A,anon:C,user:null!=N?N:b&&null!==(x=null==Z?void 0:Z.user.image)&&void 0!==x?x:void 0}),_?(0,s.jsx)("div",{children:(0,s.jsx)(d.ZP,{isMobileUserAgent:I,value:E,disabled:O,errorText:null!=F?F:""===E?"Username cannot be empty":"",onChange:e=>{T(e.target.value)},className:"md:min-w-[300px]",inlineEditBlock:Z&&(0,s.jsxs)("div",{className:"ml-sm flex items-center gap-x-xs",children:[(0,s.jsx)(m.Z,{text:M("save"),variant:E===Z.user.username||""===E||O?"common":"primary",size:"small",disabled:E===Z.user.username||""===E||O,onClick:()=>D()}),(0,s.jsx)(m.Z,{text:M("cancel"),size:"small",disabled:O,onClick:()=>{T(Z.user.username),P(!1)}})]})})}):(0,s.jsx)(h.Z,{variant:j,color:k,className:"line-clamp-1 break-all",children:C?"Anonymous":E}),g&&(0,s.jsx)(v.ZP,{variant:"offset",className:"rounded-full px-sm py-xs",children:(0,s.jsx)(h.Z,{variant:"tiny",color:"light",children:"Author"})}),y&&!_&&(0,s.jsx)(p.Z,{pill:!0,size:"small",icon:c.faPenToSquare,onClick:()=>P(!0)})]})}},4403:function(e,t,n){var s=n(97458),a=n(52983);class l extends a.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.log({error:e,errorInfo:t})}render(){if(this.state.hasError){var e;return(null===(e=this.props)||void 0===e?void 0:e.fallback)?this.props.fallback:(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Oops, there is an error!"}),(0,s.jsx)("button",{type:"button",onClick:()=>this.setState({hasError:!1}),children:"Try again?"})]})}return this.props.children}constructor(e){super(e),this.state={hasError:!1}}}t.Z=l},5299:function(e,t,n){n.d(t,{l:function(){return r}});var s=n(30574),a=n(61061),l=n(41275);let r=()=>{var e;let t=(0,a.nO)(),n=async e=>{let{pageParam:n}=e;(!n||n<1)&&(n=1);let s=(n-1)*50;return await (null==t?void 0:t.emitWithAck("list_user_collections",{limit:50,offset:s}))},{data:r}=(0,s.N)({enabled:!!t,queryKey:l.Xt,refetchOnReconnect:"always",initialPageParam:1,queryFn:e=>{let{pageParam:t}=e;return n({pageParam:t})},getNextPageParam:(e,t)=>{var n;return e&&(null===(n=e[0])||void 0===n?void 0:n.has_next_page)?t.length+1:void 0}});return{collections:null!==(e=null==r?void 0:r.pages[r.pages.length-1])&&void 0!==e?e:[]}}},39294:function(e,t,n){n.d(t,{O:function(){return l}});var s=n(52983),a=n(61061);function l(){let e=(0,a.nO)(),[t,n]=(0,s.useState)(!1);return(0,s.useCallback)((s,a,l,r)=>{e&&!t&&(n(!0),e.emit("update_thread_access",s,a,{read_write_token:l},e=>{n(!1),(null==e?void 0:e.access)!=null&&(null==r||r(null==e?void 0:e.access))}))},[t,e])}},6941:function(e,t,n){n.d(t,{X:function(){return a}});var s=n(53541);function a(){let e=(0,s.useSearchParams)(),t=null==e?void 0:e.get("pplx-show-survey");return"edu"===t||"plus"===t||"default"===t||"copilot"===t?t:null}},8245:function(e,t,n){n.d(t,{k:function(){return a}});var s=n(31737);let a=()=>{let e=(0,s.useTranslations)("shared");return{yearAgo:e("yearAgo"),yearsAgo:e("yearsAgo"),monthAgo:e("monthAgo"),monthsAgo:e("monthsAgo"),dayAgo:e("dayAgo"),daysAgo:e("daysAgo"),hourAgo:e("hourAgo"),hoursAgo:e("hoursAgo"),minutesAgo:e("minutesAgo"),minuteAgo:e("minuteAgo"),justNow:e("justNow"),justNowShort:e("justNowShort")}}}}]);