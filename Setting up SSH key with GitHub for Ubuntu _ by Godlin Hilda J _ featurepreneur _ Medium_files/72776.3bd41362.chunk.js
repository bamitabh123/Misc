(self.webpackChunklite=self.webpackChunklite||[]).push([[72776],{66249:(e,t,n)=>{"use strict";n.d(t,{o0:()=>y,GD:()=>C});var o=n(28655),r=n.n(o),i=n(67154),l=n.n(i),a=n(71439),s=n(67294),c=n(76532),u=n(62181),d=n(73810),m=n(33914),p=n(6688),f=n(353),v=n(81645),g=n(46101);function E(){var e=r()(["\n  fragment AddToCatalogBookmarkButton_post on Post {\n    ...AddToCatalogBase_post\n  }\n  ","\n"]);return E=function(){return e},e}function b(){var e=r()(["\n  fragment AddToCatalogBookmarkButton_bookEdition on BookEdition {\n    ...AddToCatalogBase_bookEdition\n  }\n  ","\n"]);return b=function(){return e},e}var h="Add to list bookmark button";function y(e){var t=(0,p.I)(),n=(0,c.H)(),o=n.value;if(!n.loading&&!o)return s.createElement(u.R9,{operation:"register",susiEntry:"list"},s.createElement(f.Z,{className:t(g.K),"aria-label":h}));var r=s.createElement(v.aR,l()({},e,{viewer:o}),(function(e){var t=e.onClick,n=e.bookmarkIcon,o=e.isPanelVisible;return s.createElement(d.P,{ariaControls:"addToCatalogBookmarkButton",ariaLabel:h,ariaExpanded:o?"true":"false",onClick:t},n)}));return s.createElement(m._,{placement:"top",targetDistance:10,tooltipText:"Save"},r)}(0,a.Ps)(b(),v.Gm);var C=(0,a.Ps)(E(),v._C)},93653:(e,t,n)=>{"use strict";n.d(t,{j:()=>c});var o=n(28655),r=n.n(o),i=n(71439),l=n(46829);function a(){var e=r()(["\n  mutation DeletePostMutation($targetPostId: ID!) {\n    deletePost(targetPostId: $targetPostId)\n  }\n"]);return a=function(){return e},e}var s=(0,i.Ps)(a()),c=function(e){var t=e?{variables:{targetPostId:e}}:{};return(0,l.useMutation)(s,t)}},79151:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var o=n(28655),r=n.n(o),i=n(71439),l=n(46829);function a(){var e=r()(["\n  mutation DismissPostMutation($postId: ID!) {\n    dismissPost(postId: $postId)\n  }\n"]);return a=function(){return e},e}var s=(0,i.Ps)(a()),c=function(e){return(0,l.useMutation)(s,{variables:{postId:e}})}},33241:(e,t,n)=>{"use strict";n.d(t,{g:()=>d,H:()=>m});var o=n(28655),r=n.n(o),i=n(71439),l=n(80439),a=n(67294),s=n(12291),c=n(85277);function u(){var e=r()(["\n  mutation UserReportStoryMutation(\n    $targetPostId: ID!\n    $targetAuthorId: ID!\n    $alsoBlockAuthor: Boolean!\n    $reason: String!\n  ) {\n    reportStoryAndMaybeBlockAuthor(\n      targetPostId: $targetPostId\n      targetAuthorId: $targetAuthorId\n      alsoBlockAuthor: $alsoBlockAuthor\n      reason: $reason\n    ) {\n      __typename\n      id\n      viewerEdge {\n        __typename\n        id\n        isBlocking\n      }\n    }\n  }\n"]);return u=function(){return e},e}var d=(0,i.Ps)(u()),m=(0,s.$j)()((function(e){var t=e.targetAuthorId,n=e.targetPostId,o=e.dispatch,r=e.children,i=e.onOptimisticComplete,s=e.isBlocking,u=e.viewerId;return a.createElement(l.mm,{mutation:d,onCompleted:function(){o((0,c.Dx)({message:"Successfully reported post."}))}},(function(e){return r({mutate:function(o,r){var l=e({variables:{targetAuthorId:t,targetPostId:n,alsoBlockAuthor:o,reason:r},optimisticResponse:{__typename:"Mutation",reportStoryAndMaybeBlockAuthor:{__typename:"User",id:t,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(t,"-viewerId:").concat(u),isBlocking:s||o}}}});return i&&i(),l}})}))}))},61907:(e,t,n)=>{"use strict";n.d(t,{w4:()=>T,SX:()=>R});var o=n(59713),r=n.n(o),i=n(63038),l=n.n(i),a=n(28655),s=n.n(a),c=n(46829),u=n(71439),d=n(67294),m=n(89423),p=n(32262),f=n(82318),v=n(42933),g=n(92528),E=n(98024),b=n(6688),h=n(85277);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var C=d.createElement("path",{d:"M0 .35v15.3h20V.35H0zm6.95 9.38l3.05 2.5 3.05-2.5 4.88 4.73H2.07l4.88-4.73zM1.2 13.64V5.02l4.82 3.94-4.82 4.68zm12.78-4.68l4.82-3.94v8.62l-4.82-4.68zm4.82-7.42v1.94l-8.8 7.2-8.8-7.2V1.54h17.6z"});const P=function(e){return d.createElement("svg",y({width:20,height:16,viewBox:"0 0 20 16"},e),C)};var S=n(51064);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(){var e=s()(["\n  mutation sendPostAsEmails($postId: ID!) {\n    sendPostAsEmails(postId: $postId)\n  }\n"]);return w=function(){return e},e}function k(){var e=s()(["\n  fragment NewsletterV3EmailToSubscribersMenuItem_post on Post {\n    id\n    creator {\n      id\n      newsletterV3 {\n        id\n        subscribersCount\n      }\n    }\n    isNewsletter\n    isAuthorNewsletter\n  }\n"]);return k=function(){return e},e}function A(e){return{fill:e.baseColor.fill.lighter}}var _={height:"16px",width:"16px",marginLeft:"4px"},R=(0,u.Ps)(k()),B=(0,u.Ps)(w());function T(e){var t=e.post,n=e.onClick,o=e.menuStyle,r=(0,b.I)(),i=(0,S.O)(!1),a=l()(i,3),s=a[0],u=a[1],y=a[2],C=(0,h.w)(),I=function(){y(),n()},w=(0,c.useMutation)(B,{variables:{postId:(null==t?void 0:t.id)||""},onCompleted:function(e){var t=e.sendPostAsEmails;C(t?{message:"Your story has been emailed to subscribers.",toastStyle:"MESSAGE",duration:2e3}:{message:"We couldn't process your request. Try again, or contact our support team.",toastStyle:"ERROR",duration:2e3})},update:function(e,n){var o,r={id:"Post:".concat(null==t?void 0:t.id),fragment:R,fragmentName:"NewsletterV3EmailToSubscribersMenuItem_post"},i=e.readFragment(r);e.writeFragment(x(x({},r),{},{data:x(x({},i),{},{isAuthorNewsletter:null===(o=n.data)||void 0===o?void 0:o.sendPostAsEmails})}))}}),k=l()(w,1)[0];return d.createElement(m.I,null,(function(e){var i,l,a;return e&&e.id===(null==t||null===(i=t.creator)||void 0===i?void 0:i.id)&&(null==t||!t.isNewsletter)&&((null==t||null===(l=t.creator)||void 0===l||null===(a=l.newsletterV3)||void 0===a?void 0:a.subscribersCount)||0)>0?d.createElement(d.Fragment,null,d.createElement(p.Sl,{paddingTopBottom:"8px"},d.createElement(f.r,{onClick:function(){null!=t&&t.isAuthorNewsletter?(C({message:"You’ve already sent this story to subscribers.",toastStyle:"ERROR",duration:2e3}),n()):u()}},"TEXT"===o?d.createElement(v.x,{display:"inline-block"},d.createElement(E.F,{scale:"M"},"Email to subscribers")):d.createElement(v.x,{display:"inline-block"},d.createElement(P,{className:r([A,_])}),d.createElement(v.x,{display:"inline-block",marginLeft:"20px"},d.createElement(E.F,{scale:"S"},"Email to subscribers"))))),d.createElement(g.Q,{onConfirm:function(){k(),I()},isVisible:s,hide:I,titleText:"Email to subscribers",confirmText:"Send",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!0,withCloseButton:!0,isDestructiveAction:!1},"A link to this story will be emailed to all your subscribers.")):d.createElement(d.Fragment,null)}))}},53962:(e,t,n)=>{"use strict";n.d(t,{$:()=>m});var o=n(28655),r=n.n(o),i=n(71439),l=n(67294),a=n(32262),s=n(76579),c=n(96879),u=n(27952);function d(){var e=r()(["\n  fragment CopyFriendLinkMenuItem_post on Post {\n    id\n  }\n"]);return d=function(){return e},e}var m=function(e){var t=e.post,n=e.shareKey;return t&&n?l.createElement(a.Sl,null,l.createElement(s.b,{url:(0,c.Rk)((0,u.jVf)(t),{sk:n}),linkStyle:"SUBTLE"},(function(e){return e?"Copied!":"Copy Friend Link"}))):null};(0,i.Ps)(d())},63564:(e,t,n)=>{"use strict";n.d(t,{r:()=>y});var o=n(63038),r=n.n(o),i=n(67294),l=n(28655),a=n.n(l),s=n(71439),c=n(80439),u=n(12291),d=n(85277);function m(){var e=a()(["\n  mutation PostAllowResponsesMutation($targetPostId: ID!, $allowResponses: Boolean!) {\n    setPostAllowResponses(targetPostId: $targetPostId, allowResponses: $allowResponses) {\n      id\n      allowResponses\n    }\n  }\n"]);return m=function(){return e},e}var p=(0,s.Ps)(m()),f=(0,u.$j)()((function(e){var t=e.children,n=e.dispatch,o=e.onCompleted,r=e.targetPostId;return i.createElement(c.mm,{mutation:p,onCompleted:function(){n((0,d.Dx)({message:"Responses are now hidden for this post."})),o&&o()},variables:{targetPostId:r,allowResponses:!1},optimisticResponse:{__typename:"Mutation",setPostAllowResponses:{__typename:"Post",id:r,allowResponses:!1}}},(function(e){return t({mutate:e})}))})),v=(0,u.$j)()((function(e){var t=e.children,n=e.dispatch,o=e.onCompleted,r=e.targetPostId;return i.createElement(c.mm,{mutation:p,onCompleted:function(){n((0,d.Dx)({message:"Responses are now shown for this post."})),o&&o()},variables:{targetPostId:r,allowResponses:!0},optimisticResponse:{__typename:"Mutation",setPostAllowResponses:{__typename:"Post",id:r,allowResponses:!0}}},(function(e){return t({mutate:e})}))})),g=n(72345),E=n(32262),b=n(82318),h=n(51064),y=function(e){var t=e.hidePopover,n=e.postId,o=e.allowResponses,l=(0,h.O)(!1),a=r()(l,3),s=a[0],c=a[1],u=a[2],d=function(){u(),t()};return i.createElement(i.Fragment,null,i.createElement(f,{targetPostId:n},(function(e){var t=e.mutate;return i.createElement(g.w,{onConfirm:t,isVisible:s,hide:d,entityTypename:"Post"})})),i.createElement(v,{targetPostId:n},(function(e){var t=e.mutate;return i.createElement(E.Sl,null,i.createElement(b.r,{onClick:function(){o?c():t()}},o?"Hide responses":"Show responses"))})))}},86948:(e,t,n)=>{"use strict";n.d(t,{z:()=>b,e:()=>h});var o=n(28655),r=n.n(o),i=n(71439),l=n(67294),a=n(66249),s=n(46101),c=n(76532),u=n(62181),d=n(33914),m=n(6688),p=n(14391),f=n(67297),v=n(353),g=n(27952);function E(){var e=r()(["\n  fragment BookmarkButton_post on Post {\n    visibility\n    ...SusiClickable_post\n    ...AddToCatalogBookmarkButton_post\n  }\n  ","\n  ","\n"]);return E=function(){return e},e}var b=(0,i.Ps)(E(),u.qU,a.GD);function h(e){var t=e.post,n=e.withReadingListTooltip,o=void 0===n||n,r=e.susiEntry,i=t.id,E=t.visibility,b=(0,m.I)(),h=(0,f.v9)((function(e){return e.config.authDomain})),y=(0,c.H)(),C=y.value;return y.loading||E===p.Wn.UNLISTED?null:C?l.createElement(a.o0,{kind:p.ej.POST,target:t}):l.createElement(d._,{isVisible:o,placement:"top",targetDistance:10,tooltipText:"Bookmark story"},l.createElement(u.R9,{post:t,operation:"register",actionUrl:(0,g.XET)(h,i),susiEntry:r},l.createElement(v.Z,{className:b(s.K)})))}},60519:(e,t,n)=>{"use strict";n.d(t,{Z:()=>se,G:()=>ce});var o=n(28655),r=n.n(o),i=n(63038),l=n.n(i),a=n(71439),s=n(67294),c=n(12291),u=n(93653),d=n(79151),m=n(35848),p=n(10414),f=n(42963),v=n(61907),g=n(53962),E=n(63564),b=n(1506),h=n(73882),y=n(71245),C=n(80362),P=n(42933),S=n(55099),I=n(98024),x=n(85277),w=function(e){var t=e.children,n=e.isVisible,o=e.post,r=e.hide,i=e.showLoadingIndicator,l=(0,y.h3)(o),a=(0,y.yb)(o),u=(0,c.I0)(),d=o.pendingCollection;return d?s.createElement(C.J,{ariaId:"manageSubmissionPopover",isVisible:n,hide:r,popoverRenderFn:function(){return s.createElement(P.x,{padding:"16px",maxWidth:"280px"},s.createElement(P.x,{display:"flex",flexDirection:"row",alignItems:"center"},s.createElement(P.x,{paddingRight:"8px"},s.createElement(h.v,{collection:d,size:40})),s.createElement(I.F,{scale:"S"},"This draft is submitted to ",d.name,".")),s.createElement(P.x,{flexDirection:"row",display:"flex",paddingTop:"16px"},s.createElement(P.x,{paddingRight:"8px"},s.createElement(S.z,{buttonStyle:"OBVIOUS",onClick:function(){r(),i(),l(o.pendingCollection).then((function(){window.location.reload()}))}},"Accept")),s.createElement(S.z,{buttonStyle:"SUBTLE",onClick:function(){a(o.pendingCollection).then((function(){u((0,x.Dx)({message:"Story removed from ".concat(d.name||"publication")}))})),r()}},"Don't accept")))}},t):t},k=n(74871),A=n(73891),_=n(32262),R=n(82318),B="removeFromPublicationPopover",T=function(e){var t=e.viewer,n=e.show,o=e.post,r=(0,A.gY)(o.pendingCollection||o.collection).viewerEdge,i=null==r?void 0:r.isEditor;return t&&("APPROVED"===o.statusForCollection&&(i||(0,k.py)(o,t)||(0,k.Hj)(o,t))||"PENDING"===o.statusForCollection&&(0,k.Hj)(o,t))?s.createElement(_.Sl,null,s.createElement(R.r,{"aria-controls":B,"aria-expanded":"false",onClick:n},"Remove story from publication")):null},D=function(e){var t=e.children,n=e.isVisible,o=e.hide,r=e.post,i=e.viewer,l=(0,c.I0)(),a=(0,y.yb)(r),u=r.collection||r.pendingCollection;return u?s.createElement(C.J,{ariaId:B,isVisible:n,hide:o,popoverRenderFn:function(){return s.createElement(P.x,{padding:"16px",maxWidth:"280px"},s.createElement(P.x,{display:"flex",flexDirection:"row",alignItems:"center"},s.createElement(P.x,{paddingRight:"8px"},s.createElement(h.v,{collection:u,size:40})),"APPROVED"===r.statusForCollection?s.createElement(I.F,{scale:"S"},(0,k.Hj)(r,i)?"Your":"This"," story is published in"," ",u.name,"."):"PENDING"===r.statusForCollection?s.createElement(I.F,{scale:"S"},"Your story is being reviewed by ",u.name," editors."):s.createElement(I.F,{scale:"S"},"This draft is submitted to ",u.name)),s.createElement(P.x,{flexDirection:"row",display:"flex",paddingTop:"16px"},s.createElement(P.x,{paddingRight:"8px"},s.createElement(S.z,{buttonStyle:"SUBTLE",onClick:function(){a(u).then((function(){l((0,x.Dx)({message:"Story removed from ".concat(u.name||"publication")}))}),(function(){l((0,x.Dx)({message:"There was a problem removing the story from ".concat(u.name||"publication"),toastStyle:"ERROR"}))})),o()}},"PENDING"===r.statusForCollection?"Cancel submission":"Remove from ".concat(u.name||"")))))}},t):t},O=n(965),M=n(49925),F=n(78820),V=n(73232),$=n(53976),j=n(66893),L=n(76532),N=n(24374),U=n(324),H=n(62181),z=n(57469),G=n(7157),K=n(29169),Q=n(79296),X=n(92528),Z=n(6688),W=n(14391),Y=n(65347),q=n(67297),J=n(93394),ee=n(39171),te=n(51064),ne=n(95614),oe=n(55573),re=n(27952);function ie(){var e=r()(["\n  fragment CreatorActionOverflowPopover_post on Post {\n    allowResponses\n    id\n    statusForCollection\n    isLocked\n    isPublished\n    clapCount\n    mediumUrl\n    pinnedAt\n    pinnedByCreatorAt\n    curationEligibleAt\n    mediumUrl\n    responseDistribution\n    visibility\n    ...useIsPinnedInContext_post\n    pendingCollection {\n      id\n      name\n      creator {\n        id\n      }\n      avatar {\n        id\n      }\n      domain\n      slug\n    }\n    creator {\n      id\n      ...MutePopoverOptions_creator\n      ...auroraHooks_publisher\n    }\n    collection {\n      id\n      name\n      creator {\n        id\n      }\n      avatar {\n        id\n      }\n      domain\n      slug\n      ...MutePopoverOptions_collection\n      ...auroraHooks_publisher\n    }\n    ...ClapMutation_post\n    ...NewsletterV3EmailToSubscribersMenuItem_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return ie=function(){return e},e}var le=function(e){return{fill:e.baseColor.fill.normal,":hover":{fill:e.baseColor.fill.darker},":focus":{fill:e.baseColor.fill.darker}}};function ae(){return s.createElement(Q.h,null,(function(e){return s.createElement(J.Z,{className:e(le)})}))}var se=function(e){var t,n,o=e.creator,r=e.post,i=e.collection,a=e.showLoadingIndicator,p=e.setIsAuthorOrPubMuted,h=e.setMutedAuthorId,y=e.setMutedPubId,S=e.onPostDismissed,I=e.isMutingFromHomeFeed,k=e.isDismissDisabled,B=e.hideUndoApplause,Q=void 0!==B&&B,J=s.useState(!1),ie=l()(J,2),le=ie[0],se=ie[1],ce=s.useState(!1),ue=l()(ce,2),de=ue[0],me=ue[1],pe=s.useState(!1),fe=l()(pe,2),ve=fe[0],ge=fe[1],Ee=(0,Z.I)(),be=(0,U.Uo)(),he=r.allowResponses,ye=r.id,Ce=r.pendingCollection,Pe=r.mediumUrl,Se=r.visibility,Ie=(0,A.gY)(i).viewerEdge,xe=(0,A.gY)(Ce).viewerEdge,we=(0,N.T)(r).viewerEdge,ke=(0,q.b$)((function(e){return e.multiVote.clapsPerPost})),Ae=(0,c.I0)(),_e=s.useCallback((function(e){return Ae((0,Y.at)(e))}),[Ae]),Re=(0,oe.l)(ke,r,we),Be=Re.clapCount,Te=Re.viewerClapCount,De=(0,x.w)(),Oe=(0,L.H)().value,Me=null==Oe?void 0:Oe.id,Fe=(0,O.CP)(),Ve=(0,d.a)(r.id),$e=l()(Ve,1)[0],je=(0,F.KQ)(r),Le=l()(je,2),Ne=Le[0],Ue=Le[1],He=(0,M.UL)(r.collection),ze=(0,M.UL)(r.creator),Ge=s.useCallback((function(e){var t;De({extraParams:{collectionName:(null===(t=r.collection)||void 0===t?void 0:t.name)||"",becamePinned:!!e.data.setPinnedAt.pinnedAt},toastStyle:"POST_PINNED_TO_COLLECTION_HOMEPAGE"})}),[null===(t=r.collection)||void 0===t?void 0:t.name]),Ke=s.useCallback((function(e){De({message:e.data.postSetPinnedByCreatorAt.pinnedByCreatorAt?"This story has been pinned to your profile's homepage":"This story has been unpinned from your profile's homepage"})}),[]),Qe=s.useCallback((function(){Ue().then(Ge)}),[Ue,Ge,null==r||null===(n=r.collection)||void 0===n?void 0:n.name]),Xe=(0,F.In)(r),Ze=l()(Xe,2),We=Ze[0],Ye=Ze[1],qe=s.useCallback((function(){Ye().then(Ke)}),[Ye,Ke]),Je=(0,q.v9)((function(e){return e.config.authDomain})),et=!(0,ne.T)(),tt=!!(0,$.VB)({name:"unhide_mobile_ctas",placeholder:!1}),nt=s.useState(!1),ot=l()(nt,2),rt=ot[0],it=ot[1],lt=r.responseDistribution===W.Et.DISTRIBUTED,at=(0,te.O)(!1),st=l()(at,3),ct=st[0],ut=st[1],dt=st[2],mt=(0,te.O)(!1),pt=l()(mt,4),ft=pt[0],vt=pt[2],gt=pt[3],Et=(0,u.j)(r.id),bt=l()(Et,1)[0],ht=(0,te.O)(!1),yt=l()(ht,3),Ct=yt[0],Pt=yt[1],St=yt[2],It=s.useCallback((function(){bt().then((function(){return window.location.reload()}))}),[bt]),xt="Delete story".concat(lt?" and response":""),wt=lt?V.Q:"Are you sure you want to delete this story?",kt=(0,j.P5)("can_edit_members_only_posts");if(!o||!Oe)return null;var At=Me===o.id,_t=(null==Ie?void 0:Ie.isEditor)||(null==xe?void 0:xe.isEditor),Rt=At||_t,Bt=kt&&r&&r.isLocked,Tt=Rt||Bt,Dt="creatorActionOverflowMenu",Ot="LOCKED"===Se,Mt=_t&&!At||!Rt;return rt?s.createElement(f.l,{to:(0,re.d0A)(Je,r.id)}):s.createElement(s.Fragment,null,s.createElement(X.Q,{buttonStyle:"STRONG",cancelText:"Cancel",isVisible:ct,onConfirm:function(){it(!0)},hide:dt,titleText:"Edit story and response",confirmText:"Continue",isDestructiveAction:!1},V.t),s.createElement(X.Q,{buttonStyle:"ERROR",cancelText:"Cancel",isVisible:Ct,onConfirm:It,hide:St,titleText:xt,confirmText:"Delete",isDestructiveAction:!0},wt),s.createElement(C.J,{ariaId:Dt,isVisible:ft,hide:vt,popoverRenderFn:function(){return s.createElement(_.mX,null,s.createElement(s.Fragment,null,(et||tt)&&Tt?s.createElement(_.Sl,null,lt?s.createElement(R.r,{linkStyle:"SUBTLE",onClick:(0,ee.B)(vt,ut)},"Edit story"):s.createElement(R.r,{linkStyle:"SUBTLE",href:(0,re.d0A)(Je,r.id)},"Edit story")):null,i&&_t&&He&&s.createElement(_.Sl,null,s.createElement(R.r,{onClick:Qe},Ne?"Unpin this story from ":"Pin this story to ",i.name)),At&&ze&&s.createElement(_.Sl,null,s.createElement(R.r,{onClick:qe},We?"Unpin this story from your profile":"Pin this story to your profile")),s.createElement(v.w4,{post:r,onClick:vt,menuStyle:"TEXT"}),Me&&!k?s.createElement(_.Sl,null,s.createElement(R.r,{onClick:function(){$e({variables:{postId:r.id}}),S&&S(r.id),vt()}},"Dismiss this story")):null,Rt?s.createElement(s.Fragment,null,s.createElement(_.oK,null),s.createElement(_.Sl,null,s.createElement(R.r,{href:(0,re.KIb)(Je,r.id)},"Story settings"))):null,Rt&&s.createElement(_.Sl,null,s.createElement(R.r,{href:(0,re.T0G)(Je,r.id)},"Story stats")),Rt&&Ot&&Pe&&(null==we?void 0:we.shareKey)&&s.createElement(g.$,{post:r,shareKey:null==we?void 0:we.shareKey}),Rt&&s.createElement(_.oK,null),Rt?s.createElement(s.Fragment,null,s.createElement(E.r,{hidePopover:vt,postId:r.id,allowResponses:he}),s.createElement(b.yi,{post:r,show:function(){me(!0),vt()}}),s.createElement(T,{viewer:Oe,post:r,show:function(){ge(!0),vt()}}),At&&s.createElement(_.Sl,null,s.createElement("div",{className:Ee({color:be.baseTheme.errorColor})},s.createElement(R.r,{onClick:(0,ee.B)(vt,Pt)},"Delete story")))):null,Mt?s.createElement(s.Fragment,null,_t&&s.createElement(_.oK,null),!Q&&s.createElement(s.Fragment,null,Oe.id&&Be&&Te&&Te>0?s.createElement(_.Sl,null,s.createElement(R.r,{onClick:function(){Fe(r,(null==Oe?void 0:Oe.id)||"",-Te,we),_e({postId:ye,clapCount:Be-Te,viewerClapCount:0,viewerHasClappedSinceFetch:!0}),vt()}},"Undo applause for this post")):null),s.createElement(s.Fragment,null,Me?s.createElement(K.z,{targetUserId:o.id,postId:r.id,hidePopover:vt,viewerId:Me}):s.createElement(_.Sl,null,s.createElement(H.R9,{operation:"register",post:r,susiEntry:"report_footer"},"Report this story"))),s.createElement(m.q,{hidePopover:vt,creator:o,collection:i,postId:r.id,setIsAuthorOrPubMuted:p,setMutedAuthorId:h,setMutedPubId:y,isMutingFromHomeFeed:I}),s.createElement(z.F,{hidePopover:vt,creator:o,viewer:Oe}),s.createElement(G.j,{hidePopover:vt,creator:o,viewer:Oe})):null))}},s.createElement(b.jB,{post:r,isVisible:de,hide:function(){me(!1)},showLoadingIndicator:a},s.createElement(D,{viewer:Oe,post:r,isVisible:ve,hide:function(){ge(!1)}},s.createElement(w,{post:r,isVisible:le,hide:function(){se(!1)},showLoadingIndicator:a},s.createElement(P.x,{flexGrow:"0",marginRight:"-4px"},s.createElement(R.r,{"aria-controls":Dt,"aria-expanded":ft?"true":"false","aria-label":"More options",onClick:gt},s.createElement(ae,null))))))))},ce=(0,a.Ps)(ie(),p.m,p.G,O.JP,F.xt,M.C5,v.SX)},1506:(e,t,n)=>{"use strict";n.d(t,{x7:()=>$,yi:()=>U,jB:()=>G});var o=n(63038),r=n.n(o),i=n(28655),l=n.n(i),a=n(71439),s=n(80439),c=n(67294),u=n(73882),d=n(27271),m=n(71245),p=n(74871),f=n(89423),v=n(32262),g=n(42933),E=n(82318),b=n(77284),h=n(55099),y=n(19464),C=n(80362),P=n(13397),S=n(98024),I=n(37278),x=n(87561),w=n(27108);function k(){var e=l()(["\n  fragment CollectionSubmission_post on Post {\n    id\n    ...CollectionSubmissionPopover_post\n    ...CollectionSubmissionPopoverMenuItem_post\n  }\n  ","\n  ","\n"]);return k=function(){return e},e}function A(){var e=l()(["\n  fragment CollectionSubmissionPopover_post on Post {\n    id\n    isPublished\n    creator {\n      id\n    }\n  }\n"]);return A=function(){return e},e}function _(){var e=l()(["\n  fragment CollectionSubmissionPopoverMenuItem_post on Post {\n    id\n    statusForCollection\n    isPublished\n    creator {\n      id\n    }\n  }\n"]);return _=function(){return e},e}function R(){var e=l()(["\n  query CollectionSubmissionPopoverQuery {\n    viewer {\n      id\n      writerCollections {\n        ...CollectionSubmissionPopoverQuery_collection\n      }\n      adminCollections {\n        ...CollectionSubmissionPopoverQuery_collection\n      }\n    }\n  }\n  ","\n"]);return R=function(){return e},e}function B(){var e=l()(["\n  fragment CollectionSubmissionPopoverQuery_collection on Collection {\n    ...CollectionSubmissionOption_collection\n    ...ManageSubmission_collection\n  }\n  ","\n  ","\n"]);return B=function(){return e},e}function T(){var e=l()(["\n  fragment CollectionSubmissionOption_collection on Collection {\n    id\n    name\n    slug\n    ...CollectionAvatar_collection\n  }\n  ","\n"]);return T=function(){return e},e}var D=(0,a.Ps)(T(),d.d),O=(0,a.Ps)(B(),D,p.a6),M=(0,a.Ps)(R(),O),F=(0,a.Ps)(_()),V=(0,a.Ps)(A()),$=(0,a.Ps)(k(),V,F),j="collectionSubmissionPopover",L=[{name:"",value:"No publication",content:c.createElement(g.x,{height:"32px",display:"flex",alignItems:"center",marginLeft:"5px"},c.createElement(S.F,{scale:"M",color:"DARKER"},"No publication"))}];function N(e){var t=e.collection;return t.name?c.createElement(g.x,{display:"flex",justifyContent:"space-between",width:"200px",alignItems:"center",marginLeft:"5px"},c.createElement(S.F,{scale:"M",color:"DARKER"},t.name),c.createElement(u.v,{collection:t,size:32})):null}function U(e){var t=e.show,n=e.post,o=n.statusForCollection,i=n.isPublished,l=c.useState(!1),a=r()(l,2),s=a[0],u=a[1];return s||w.V6.on("load",(function(){return u(!0)})),!o&&i&&s?c.createElement(z,{post:n,noQueryReturn:null},(function(e){var o=e.loading,r=e.error,i=e.data;if(o||r)return null;var l=(void 0===i?{viewer:void 0}:i).viewer,a=n.creator;if(!l||!a||l.id!==a.id)return null;var s=l.adminCollections,u=l.writerCollections;return 0===s.length&&0===u.length?null:c.createElement(v.Sl,null,c.createElement(E.r,{"aria-controls":j,"aria-expanded":"false",onClick:t},"Add to publication"))})):null}function H(e){var t=e.isVisible,n=e.hide;return c.createElement(b.V,{isVisible:t,hide:n,withCloseButton:!0},c.createElement(g.x,{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"480px"},c.createElement(I.X6,{scale:"M",tag:"h3"},"Story submitted"),c.createElement(g.x,{paddingTop:"8px",paddingBottom:"24px"},c.createElement(x.QE,{scale:"M"},"We’ll email you when the publication editor has reviewed your submission.")),c.createElement(h.z,{buttonStyle:"OBVIOUS",onClick:n},"OK")))}var z=function(e){var t=e.children,n=e.post,o=e.noQueryReturn,r=n.creator;return r?c.createElement(f.I,null,(function(e){return e?e.id!==r.id?o:c.createElement(s.AE,{query:M,ssr:!1},(function(e){var n=e.loading,o=e.error,r=e.data;return t({loading:n,error:o,data:r})})):o})):o},G=function(e){var t=e.post,n=e.hide,o=e.showLoadingIndicator,i=e.isVisible,l=e.children,a=c.useState(!1),s=r()(a,2),u=s[0],d=s[1],p=c.useState(""),f=r()(p,2),v=f[0],b=f[1],I=(0,m.h3)(t),x=(0,m.Lf)(t);return u||w.V6.on("load",(function(){return d(!0)})),t.isPublished&&u?c.createElement(y.B,null,(function(e){var r=e.isVisible,a=e.hide,s=e.show;return c.createElement(c.Fragment,null,c.createElement(H,{hide:a,isVisible:r}),c.createElement(z,{post:t,noQueryReturn:l},(function(e){var r=e.loading,a=e.error,u=e.data;if(r||a)return l;var d=(void 0===u?{viewer:void 0}:u).viewer,m=t.creator;if(!d||!m||d.id!==m.id)return l;var p=d.adminCollections,f=d.writerCollections;if(0===p.length&&0===f.length)return l;var y=p.concat(f).filter((function(e){return!!e&&!!e.slug&&!!e.name})).map((function(e){return{name:e.slug||"",value:e.name||"",content:c.createElement(N,{collection:e})}})),w=L.concat(y),k=p.reduce((function(e,t){return e[t.slug||""]=t,e}),{}),A=f.reduce((function(e,t){return e[t.slug||""]=t,e}),{}),_="";if(v){var R=w.find((function(e){return e.name===v}));R&&(_=R.value)}var B="addStoryToPublicationTitle";return c.createElement(C.J,{ariaId:j,hide:n,isVisible:i,popoverRenderFn:function(){return c.createElement(g.x,{padding:"20px",width:"280px",display:"flex",flexDirection:"column"},c.createElement(S.F,{scale:"M",color:"DARKER",ariaLabelledById:B},"Add your story to a publication:"),c.createElement(g.x,{marginTop:"10px",position:"relative"},c.createElement(g.x,{position:"absolute",height:"16px",width:"100%",bottom:"0",zIndex:"100",backgroundImage:"linear-gradient(transparent, #ffffff)"}),c.createElement(g.x,{maxHeight:"160px",overflow:"auto"},c.createElement(P.E,{value:_,onChange:b,options:w,radioButtonsName:"addStory",ariaLabelledBy:B}))),c.createElement(g.x,{display:"flex",marginTop:"20px"},v in k?c.createElement(h.z,{onClick:function(){var e=k[v];n(),o(),I(e).then((function(){window.location.reload()}))},buttonStyle:"OBVIOUS"},"Add story"):c.createElement(h.z,{onClick:function(){var e=A[v];x(e),n(),s()},disabled:!v},"Submit"),c.createElement(g.x,{marginLeft:"10px"},c.createElement(S.F,{scale:"M",color:"LIGHTER"},c.createElement(E.r,{onClick:n},c.createElement(g.x,{padding:"10px"},"Cancel"))))),c.createElement(g.x,{marginTop:"10px"},c.createElement(S.F,{scale:"M"},"This story will be automatically submitted to the publication. When you submit your story, the publication's editors will be notified and will be able to edit your story.")))}},l)})))})):l}},71245:(e,t,n)=>{"use strict";n.d(t,{Lf:()=>v,h3:()=>g,yb:()=>E});var o=n(63038),r=n.n(o),i=n(28655),l=n.n(i),a=n(71439),s=n(46829),c=n(67294),u=n(14391);function d(){var e=l()(["\n  mutation RejectPostFromPubMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      collection {\n        id\n      }\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return d=function(){return e},e}function m(){var e=l()(["\n  mutation ManageCollectionPostStatusMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return m=function(){return e},e}var p=(0,a.Ps)(m()),f=(0,a.Ps)(d()),v=function(e){var t=(0,s.useMutation)(p),n=r()(t,1)[0];return(0,c.useCallback)((function(t){return n({variables:{collectionSlug:(null==t?void 0:t.slug)||"",postId:e.id,status:u.Zj.PENDING},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:e.id,statusForCollection:u.Zj.PENDING,pendingCollection:t}}})}),[e])},g=function(e){var t=(0,s.useMutation)(p),n=r()(t,1)[0];return(0,c.useCallback)((function(t){return n({variables:{collectionSlug:(null==t?void 0:t.slug)||"",postId:e.id,status:u.Zj.APPROVED}})}),[e])},E=function(e){var t=(0,s.useMutation)(f),n=r()(t,1)[0];return(0,c.useCallback)((function(t){return n({variables:{collectionSlug:(null==t?void 0:t.slug)||"",postId:e.id,status:u.Zj.REMOVED},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:e.id,statusForCollection:null,collection:null,pendingCollection:null}}}).then((function(e){if(e.errors&&e.errors[0])throw e.errors[0];return e}))}),[e])}},74871:(e,t,n)=>{"use strict";n.d(t,{Hj:()=>c,py:()=>u,a6:()=>d,En:()=>m});var o=n(28655),r=n.n(o),i=n(71439),l=n(27271);function a(){var e=r()(["\n  fragment ManageSubmission_post on Post {\n    id\n    statusForCollection\n    collection {\n      ...ManageSubmission_collection\n    }\n    pendingCollection {\n      ...ManageSubmission_collection\n    }\n    creator {\n      id\n    }\n  }\n  ","\n"]);return a=function(){return e},e}function s(){var e=r()(["\n  fragment ManageSubmission_collection on Collection {\n    name\n    creator {\n      id\n    }\n    ...CollectionAvatar_collection\n  }\n  ","\n"]);return s=function(){return e},e}var c=function(e,t){return t&&e.creator&&t.id===e.creator.id},u=function(e,t){var n=e.pendingCollection||e.collection;return n&&n.creator&&t.id===n.creator.id},d=(0,i.Ps)(s(),l.d),m=(0,i.Ps)(a(),d)},78820:(e,t,n)=>{"use strict";n.d(t,{Zu:()=>P,n_:()=>y,xt:()=>E,KQ:()=>b,In:()=>h,PB:()=>C});var o=n(63038),r=n.n(o),i=n(28655),l=n.n(i),a=n(46829),s=n(71439),c=n(67294);function u(){var e=l()(["\n  mutation postSetPinnedByCreatorAt($postId: ID!, $isPinned: Boolean!) {\n    postSetPinnedByCreatorAt(targetPostId: $postId, isPinned: $isPinned) {\n      __typename\n      ... on Post {\n        id\n        pinnedByCreatorAt\n      }\n    }\n  }\n"]);return u=function(){return e},e}function d(){var e=l()(["\n  mutation setPinnedAt($postId: ID!, $collectionId: ID!, $pinnedAt: Boolean!) {\n    __typename\n    setPinnedAt(targetPostId: $postId, targetCollectionId: $collectionId, pinnedAt: $pinnedAt) {\n      __typename\n      ... on Post {\n        id\n        collection {\n          id\n        }\n        pendingCollection {\n          id\n        }\n        pinnedAt\n      }\n    }\n  }\n"]);return d=function(){return e},e}var m=(0,s.Ps)(d()),p=(0,s.Ps)(u()),f=n(61250),v=n(27952);function g(){var e=l()(["\n  fragment useIsPinnedInContext_post on Post {\n    id\n    collection {\n      id\n    }\n    pendingCollection {\n      id\n    }\n    pinnedAt\n    pinnedByCreatorAt\n  }\n"]);return g=function(){return e},e}var E=(0,s.Ps)(g()),b=function(e){var t=e.id,n=e.collection,o=e.pendingCollection,i=e.pinnedAt,l=(n||o||{id:""}).id,s=(0,a.useMutation)(m,{optimisticResponse:{__typename:"Mutation",setPinnedAt:{__typename:"Post",id:t,collection:n,pendingCollection:o,pinnedAt:i?0:Date.now()}}}),u=r()(s,1)[0],d=c.useCallback((function(){return u({variables:{postId:t,collectionId:l,pinnedAt:!i}})}),[t,l,i,u]);return[i,d]},h=function(e){var t=e.id,n=e.pinnedByCreatorAt,o=(0,a.useMutation)(p,{optimisticResponse:{postSetPinnedByCreatorAt:{__typename:"Post",id:t,pinnedByCreatorAt:n?0:Date.now()}}}),i=r()(o,1)[0],l=c.useCallback((function(){return i({variables:{postId:t,isPinned:!n}})}),[t,i,n]);return[n,l]},y=function(e,t){var n=b(e),o=r()(n,2),i=o[0],l=o[1],a=h(e),s=r()(a,2),u=s[0],d=s[1],m=c.useCallback((function(){return"Collection"===t?l():d()}),[t,l,d]);return["Collection"===t?i:u,m]},C=function(e,t){var n="Collection"===e.__typename?e.slug:null,o=(0,f.di)("ShowCollectionHome",n?{collectionSlug:n}:{collectionSlug:""});return"Collection"===e.__typename?o:"User"===e.__typename&&e.username?(0,v.AWr)(e,t):""},P=function(e){switch(e.__typename){case"Collection":return"Publication";case"User":return"Author";default:return"Publisher"}}},72345:(e,t,n)=>{"use strict";n.d(t,{w:()=>l});var o=n(67294),r=n(92214),i=n(92528),l=function(e){var t=e.onConfirm,n=e.isVisible,l=e.hide,a=e.entityTypename,s=(0,r.Pm)(a);return o.createElement(i.Q,{onConfirm:t,isVisible:n,hide:l,titleText:"Hide responses",confirmText:"Confirm",isDestructiveAction:!1},"People will still be able to respond, but the link to see responses will not be displayed at the bottom of your ",s,".")}},73232:(e,t,n)=>{"use strict";n.d(t,{Q:()=>o,t:()=>r});var o="This story is also a response to another story. Are you sure you want to delete this story?",r="This story is also a response to another story. Any edits are applied to both."},90639:(e,t,n)=>{"use strict";n.d(t,{$:()=>v});var o=n(63038),r=n.n(o),i=n(67294),l=n(77284),a=n(42933),s=n(13397),c=n(71229),u=n(55099),d=n(82318),m=n(3149),p=n(37278),f=n(98024),v=function(e){var t=e.isVisible,n=e.hide,o=e.onSubmit,v=e.isResponse,g=i.useState(!1),E=r()(g,2),b=E[0],h=E[1],y=i.useState("Spam"),C=r()(y,2),P=C[0],S=C[1],I=i.useCallback((function(e,t){return S(t)}),[]),x="reportStoryTitle";return i.createElement(l.V,{isVisible:t,hide:n,noPortal:v,withCloseButton:!1,customBackgroundColor:v?"rgba(255, 255, 255, 0.97)":"rgba(255, 255, 255, 0.94)"},i.createElement(a.x,{height:"550px",width:v?"100%":"900px",background:v?"none":"white",borderRadius:"4px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:v?"none":"rgba(0, 0, 0, 0.15) 0px 2px 10px",padding:"18px",position:"relative",sm:{boxShadow:"none",background:"none"},xs:{boxShadow:"none",background:"none"}},i.createElement(a.x,{display:"flex",margin:"auto",flexDirection:"column",alignItems:v?"flex-start":"center"},i.createElement(p.X6,{scale:"M",ariaLabelledById:x},"Report ",v?"Response":"Story"),i.createElement(a.x,{display:"flex",flexDirection:"column",width:"100%",paddingRight:"5px",marginBottom:"30px"},i.createElement(a.x,{marginTop:"25px",marginBottom:"30px",padding:"5px 0"},i.createElement(s.E,{onChange:I,value:P,radioStyle:"SUBTLE",options:[{name:"Spam",value:"Spam"},{name:"Harassment",value:"Harassment"},{name:"Rules Violation",value:"Other"}],radioButtonsName:"reportStory",ariaLabelledBy:x})),i.createElement(c.X,{checked:b,onChange:function(){h(!b)}},i.createElement(a.x,{paddingTop:v?"16px":"0"},"Also block the author of this ",v?"response":"story"))),i.createElement(a.x,{display:"flex",justifyContent:"center",marginBottom:"10px"},i.createElement(a.x,{marginRight:"8px"},i.createElement(u.z,{onClick:n},"Cancel")),i.createElement(u.z,{buttonStyle:"ERROR",onClick:function(){o(b,P),n()}},"Report")),i.createElement(a.x,{marginTop:"50px",textAlign:v?"left":"center"},i.createElement(f.F,{scale:"M",tag:"div"},"Report"," ",i.createElement(d.r,{href:"https://medium.com/policy/mediums-copyright-and-dmca-policy-d126f73695",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"copyright infringement")," ","or"," ",i.createElement(d.r,{href:"https://medium.com/policy/mediums-trademark-policy-e3bb53df59a7",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"trademark infringement"),". ",!v&&i.createElement("br",null),"Read"," ",i.createElement(d.r,{href:"https://medium.com/policy/medium-rules-30e5502c4eb4",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"our rules"),"."))),!v&&i.createElement(m.P,{onClick:n,size:"LARGE",absoluteOffset:"18px"})))}},29169:(e,t,n)=>{"use strict";n.d(t,{z:()=>m});var o=n(63038),r=n.n(o),i=n(67294),l=n(33241),a=n(32589),s=n(32262),c=n(90639),u=n(82318),d=n(51064),m=function(e){var t=e.hidePopover,n=e.targetUserId,o=e.postId,m=e.viewerId,p=e.shouldShowShortenedCopy,f=void 0!==p&&p,v=(0,a.Pd)({id:n}).viewerEdge,g=!(null==v||!v.isBlocking),E=(0,d.O)(!1),b=r()(E,3),h=b[0],y=b[1],C=b[2];return i.createElement(i.Fragment,null,i.createElement(l.H,{targetAuthorId:n,targetPostId:o,isBlocking:g,onOptimisticComplete:function(){C(),t()},viewerId:m},(function(e){var t=e.mutate;return i.createElement(c.$,{onSubmit:t,isVisible:h,hide:C})})),i.createElement(s.Sl,null,i.createElement(u.r,{onClick:function(){y()}},f?"Report":"Report this story")))}},39171:(e,t,n)=>{"use strict";function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,l=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw l}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,{B:()=>i});var i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){var e,n=o(t);try{for(n.s();!(e=n.n()).done;)(0,e.value)()}catch(e){n.e(e)}finally{n.f()}}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/72776.3bd41362.chunk.js.map