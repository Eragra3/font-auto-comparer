import{S as ge,i as Ee,s as we,k as s,q as D,a as C,l as i,m as f,r as N,h as l,c as I,n as r,b as le,G as e,I as K,J as re,B as ve,K as Me,L as ye,o as Ce,M as pe,p as A,u as te}from"../../chunks/index-0f935e05.js";const Ie=["Arial","Arial Black","Bahnschrift","Calibri","Cambria","Cambria Math","Candara","Comic Sans MS","Consolas","Constantia","Corbel","Courier New","Ebrima","Franklin Gothic Medium","Gabriola","Gadugi","Georgia","HoloLens MDL2 Assets","Impact","Ink Free","Javanese Text","Leelawadee UI","Lucida Console","Lucida Sans Unicode","Malgun Gothic","Marlett","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft YaHei","Microsoft Yi Baiti","MingLiU-ExtB","Mongolian Baiti","MS Gothic","MV Boli","Myanmar Text","Nirmala UI","Palatino Linotype","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Historic","Segoe UI Emoji","Segoe UI Symbol","SimSun","Sitka","Sylfaen","Symbol","Tahoma","Times New Roman","Trebuchet MS","Verdana","Webdings","Wingdings","Yu Gothic"],Ae=["American Typewriter","Andale Mono","Arial","Arial Black","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Avenir","Avenir Next","Avenir Next Condensed","Baskerville","Big Caslon","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bradley Hand","Brush Script MT","Chalkboard","Chalkboard SE","Chalkduster","Charter","Cochin","Comic Sans MS","Copperplate","Courier","Courier New","Didot","DIN Alternate","DIN Condensed","Futura","Geneva","Georgia","Gill Sans","Helvetica","Helvetica Neue","Herculanum","Hoefler Text","Impact","Lucida Grande","Luminari","Marker Felt","Menlo","Microsoft Sans Serif","Monaco","Noteworthy","Optima","Palatino","Papyrus","Phosphate","Rockwell","Savoye LET","SignPainter","Skia","Snell Roundhand","Tahoma","Times","Times New Roman","Trattatello","Trebuchet MS","Verdana","Zapfino"];function be(a,o,c){const p=a.slice();return p[8]=o[c],p}function _e(a){let o,c,p=a[8].name+"",E,S,m,h,b,B,V,d,k,L,z,v,M,G,Y;return{c(){o=s("div"),c=s("div"),E=D(p),S=C(),m=s("div"),h=s("div"),b=s("div"),B=D(a[1]),V=C(),d=s("div"),k=s("b"),L=D(a[1]),z=C(),v=s("div"),M=s("i"),G=D(a[1]),Y=C(),this.h()},l(n){o=i(n,"DIV",{class:!0});var u=f(o);c=i(u,"DIV",{class:!0});var y=f(c);E=N(y,p),y.forEach(l),S=I(u),m=i(u,"DIV",{class:!0});var x=f(m);h=i(x,"DIV",{class:!0});var F=f(h);b=i(F,"DIV",{style:!0});var O=f(b);B=N(O,a[1]),O.forEach(l),V=I(F),d=i(F,"DIV",{style:!0});var H=f(d);k=i(H,"B",{});var W=f(k);L=N(W,a[1]),W.forEach(l),H.forEach(l),z=I(F),v=i(F,"DIV",{style:!0});var J=f(v);M=i(J,"I",{});var T=f(M);G=N(T,a[1]),T.forEach(l),J.forEach(l),F.forEach(l),x.forEach(l),Y=I(u),u.forEach(l),this.h()},h(){r(c,"class","card-header"),pe(c,"bg-danger",!a[8].available),A(b,"font-family","'"+a[8].name+"'"),A(b,"font-size",a[2]+"px"),A(d,"font-family","'"+a[8].name+"'"),A(d,"font-size",a[2]+"px"),A(v,"font-family","'"+a[8].name+"'"),A(v,"font-size",a[2]+"px"),r(h,"class","carg-text"),r(m,"class","card-body"),r(o,"class","card")},m(n,u){le(n,o,u),e(o,c),e(c,E),e(o,S),e(o,m),e(m,h),e(h,b),e(b,B),e(h,V),e(h,d),e(d,k),e(k,L),e(h,z),e(h,v),e(v,M),e(M,G),e(o,Y)},p(n,u){u&8&&p!==(p=n[8].name+"")&&te(E,p),u&8&&pe(c,"bg-danger",!n[8].available),u&2&&te(B,n[1]),u&8&&A(b,"font-family","'"+n[8].name+"'"),u&4&&A(b,"font-size",n[2]+"px"),u&2&&te(L,n[1]),u&8&&A(d,"font-family","'"+n[8].name+"'"),u&4&&A(d,"font-size",n[2]+"px"),u&2&&te(G,n[1]),u&8&&A(v,"font-family","'"+n[8].name+"'"),u&4&&A(v,"font-size",n[2]+"px")},d(n){n&&l(o)}}}function Te(a){let o,c,p,E,S,m,h,b,B,V,d,k,L,z,v,M,G,Y,n,u,y,x,F,O,H,W,J,T,j,oe,ne,P,Q,R,se,ce,q=a[3],g=[];for(let t=0;t<q.length;t+=1)g[t]=_e(be(a,q,t));return{c(){o=s("div"),c=s("h1"),p=D("Font Awesome Comparer"),E=C(),S=s("form"),m=s("div"),h=s("div"),b=s("label"),B=D("Font size in pixels"),V=C(),d=s("input"),k=C(),L=s("div"),z=C(),v=s("div"),M=s("label"),G=D("Font list:"),Y=C(),n=s("textarea"),u=C(),y=s("div"),x=D(`You can paste all fonts separated with newlines here.
                    `),F=s("br"),O=D(`
                    You can run following PowerShellCore code to copy all fonts to clipboard:
                    `),H=s("pre"),W=D(`    [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing");
    $fonts=(New-Object System.Drawing.Text.InstalledFontCollection).Families.Name
    Set-Clipboard -Value $fonts
                    `),J=C(),T=s("div"),j=s("label"),oe=D("Type in text you want to see"),ne=C(),P=s("input"),Q=C(),R=s("div");for(let t=0;t<g.length;t+=1)g[t].c();this.h()},l(t){o=i(t,"DIV",{class:!0});var w=f(o);c=i(w,"H1",{});var _=f(c);p=N(_,"Font Awesome Comparer"),_.forEach(l),E=I(w),S=i(w,"FORM",{class:!0});var X=f(S);m=i(X,"DIV",{class:!0});var U=f(m);h=i(U,"DIV",{class:!0});var ee=f(h);b=i(ee,"LABEL",{class:!0,for:!0});var fe=f(b);B=N(fe,"Font size in pixels"),fe.forEach(l),V=I(ee),d=i(ee,"INPUT",{class:!0,name:!0}),ee.forEach(l),k=I(U),L=i(U,"DIV",{class:!0});var Se=f(L);Se.forEach(l),z=I(U),v=i(U,"DIV",{class:!0});var $=f(v);M=i($,"LABEL",{class:!0,for:!0});var de=f(M);G=N(de,"Font list:"),de.forEach(l),Y=I($),n=i($,"TEXTAREA",{class:!0,name:!0}),f(n).forEach(l),u=I($),y=i($,"DIV",{id:!0,class:!0});var Z=f(y);x=N(Z,`You can paste all fonts separated with newlines here.
                    `),F=i(Z,"BR",{}),O=N(Z,`
                    You can run following PowerShellCore code to copy all fonts to clipboard:
                    `),H=i(Z,"PRE",{});var ue=f(H);W=N(ue,`    [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing");
    $fonts=(New-Object System.Drawing.Text.InstalledFontCollection).Families.Name
    Set-Clipboard -Value $fonts
                    `),ue.forEach(l),Z.forEach(l),$.forEach(l),J=I(U),T=i(U,"DIV",{class:!0});var ae=f(T);j=i(ae,"LABEL",{class:!0,for:!0});var me=f(j);oe=N(me,"Type in text you want to see"),me.forEach(l),ne=I(ae),P=i(ae,"INPUT",{class:!0,name:!0}),ae.forEach(l),U.forEach(l),X.forEach(l),w.forEach(l),Q=I(t),R=i(t,"DIV",{class:!0});var he=f(R);for(let ie=0;ie<g.length;ie+=1)g[ie].l(he);he.forEach(l),this.h()},h(){r(b,"class","form-label"),r(b,"for","text"),r(d,"class","form-control"),r(d,"name","number"),r(h,"class","col-6"),r(L,"class","col-6"),r(M,"class","form-label"),r(M,"for","text"),r(n,"class","form-control"),r(n,"name","text"),r(y,"id","emailHelp"),r(y,"class","form-text"),r(v,"class","col-12"),r(j,"class","form-label"),r(j,"for","text"),r(P,"class","form-control"),r(P,"name","text"),r(T,"class","col-12"),r(m,"class","row"),r(S,"class","mb-3"),r(o,"class","container"),r(R,"class","d-flex flex-wrap justify-content-center gap-1")},m(t,w){le(t,o,w),e(o,c),e(c,p),e(o,E),e(o,S),e(S,m),e(m,h),e(h,b),e(b,B),e(h,V),e(h,d),K(d,a[2]),e(m,k),e(m,L),e(m,z),e(m,v),e(v,M),e(M,G),e(v,Y),e(v,n),K(n,a[0]),e(v,u),e(v,y),e(y,x),e(y,F),e(y,O),e(y,H),e(H,W),e(m,J),e(m,T),e(T,j),e(j,oe),e(T,ne),e(T,P),K(P,a[1]),le(t,Q,w),le(t,R,w);for(let _=0;_<g.length;_+=1)g[_].m(R,null);se||(ce=[re(d,"input",a[4]),re(n,"input",a[5]),re(P,"input",a[6])],se=!0)},p(t,[w]){if(w&4&&d.value!==t[2]&&K(d,t[2]),w&1&&K(n,t[0]),w&2&&P.value!==t[1]&&K(P,t[1]),w&14){q=t[3];let _;for(_=0;_<q.length;_+=1){const X=be(t,q,_);g[_]?g[_].p(X,w):(g[_]=_e(X),g[_].c(),g[_].m(R,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=q.length}},i:ve,o:ve,d(t){t&&l(o),t&&l(Q),t&&l(R),Me(g,t),se=!1,ye(ce)}}}async function De(a){const o=a.split(`
`);await document.fonts.ready;const c=[];for(const p of o){const E=document.fonts.check(`12px "${p}"`);c.push({name:p,available:E})}return c}function Ne(a,o,c){let p="Pchnąć w tę łódź jeża lub ośm skrzyń fig",E="22",S="",m=[];Ce(()=>{h()});function h(){const d=new Set([...Ie,...Ae]);c(0,S=Array.from(d).join(`
`))}function b(){E=this.value,c(2,E)}function B(){S=this.value,c(0,S)}function V(){p=this.value,c(1,p)}return a.$$.update=()=>{a.$$.dirty&1&&De(S).then(d=>c(3,m=d))},[S,p,E,m,b,B,V]}class Le extends ge{constructor(o){super(),Ee(this,o,Ne,Te,we,{})}}export{Le as default};
