(this["webpackJsonpmeu-convite"]=this["webpackJsonpmeu-convite"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/imagem1.ba74eeb4.jpeg"},function(e,a,t){e.exports=t.p+"static/media/imagem2.2f6a9f96.jpeg"},function(e,a,t){e.exports=t.p+"static/media/imagem3.907047b1.jpeg"},function(e,a,t){e.exports=t.p+"static/media/imagem4.4bac15de.jpeg"},function(e,a,t){e.exports=t.p+"static/media/imagem-julios.63f78e25.jpeg"},function(e,a,t){e.exports=t.p+"static/media/macarrao.6aed0e89.jpeg"},function(e,a,t){e.exports=t.p+"static/media/inssImage.8d168e77.png"},function(e,a,t){e.exports=t.p+"static/media/buqueImage.743328ec.png"},function(e,a,t){e.exports=t.p+"static/media/divino.6f6fc6be.jpeg"},function(e,a,t){e.exports=t.p+"static/media/nazare.4b03e545.png"},function(e,a,t){e.exports=t.p+"static/media/qrcode1.79b84eb1.jpeg"},function(e,a,t){e.exports=t.p+"static/media/qrcode2.f9593b16.jpeg"},function(e,a,t){e.exports=t.p+"static/media/qrcode3.309de6e7.jpeg"},function(e,a,t){e.exports=t.p+"static/media/qrcode4.95dcbc19.jpeg"},function(e,a,t){e.exports=t.p+"static/media/qrcode5.435fd7ff.jpeg"},function(e,a,t){e.exports=t.p+"static/media/qrcode6.53412a33.jpeg"},function(e,a,t){e.exports=t.p+"static/media/beautifulThings.b264568b.mp3"},function(e,a,t){e.exports=t(46)},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),l=t.n(o);t(30),t(31);var c=function(e){let{onClose:a}=e;const[t,o]=Object(n.useState)("vou"),[l,c]=Object(n.useState)(""),[s,i]=Object(n.useState)([]),m=e=>{o(e),"n\xe3o vou"===e&&(i([]),c(""))};return r.a.createElement("div",{className:"modal-overlay"},r.a.createElement("div",{className:"modal"},r.a.createElement("h2",null,"Confirma\xe7\xe3o de Presen\xe7a"),r.a.createElement("div",{className:"attendance-options"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"vou",checked:"vou"===t,onChange:()=>m("vou")}),"Vou"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"n\xe3o vou",checked:"n\xe3o vou"===t,onChange:()=>m("n\xe3o vou")}),"N\xe3o vou")),"vou"===t&&r.a.createElement("div",{className:"names-list"},r.a.createElement("h3",null,"Adicionar Nomes"),r.a.createElement("div",{className:"add-name"},r.a.createElement("input",{type:"text",placeholder:"Digite um nome",value:l,onChange:e=>c(e.target.value)}),r.a.createElement("button",{onClick:()=>{""!==l.trim()&&(i([...s,l.trim()]),c(""))}},"Adicionar")),s.length>0&&r.a.createElement("ul",null,s.map((e,a)=>r.a.createElement("li",{key:a},e," ",r.a.createElement("button",{onClick:()=>(e=>{const a=s.filter((a,t)=>t!==e);i(a)})(a)},"Remover"))))),r.a.createElement("div",{className:"modal-actions"},r.a.createElement("button",{onClick:a,className:"close-button"},"Fechar"),r.a.createElement("button",{onClick:()=>{const e=`Ol\xe1, gostaria de informar que ${"vou"===t?"vou":"n\xe3o vou"} para o casamento\ud83c\udf89\ud83c\udf89\n\nLista de nomes:\n${s.join(", ")}`,n="https://wa.me/92995167293?text="+encodeURIComponent(e);window.open(n,"_blank"),a(),window.location.href="/conviteCasamento#home"},className:"send-button",disabled:"vou"===t&&0===s.length},"Confirmar Presen\xe7a"))))};t(32);var s=function(){const[e,a]=Object(n.useState)(!1),[t,o]=Object(n.useState)(!1),l=()=>{a(!e)};return Object(n.useEffect)(()=>{e?document.body.classList.add("mobile-menu-open"):document.body.classList.remove("mobile-menu-open")},[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-logo"},"F&E"),r.a.createElement("div",{className:"nav-date"},"17.05.25"),r.a.createElement("div",{className:"mobile-menu-icon",onClick:l},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"bar"})),r.a.createElement("ul",{className:"nav-links "+(e?"mobile-menu-open":"")},r.a.createElement("li",null,r.a.createElement("a",{href:"#home",onClick:l},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#programacao",onClick:l},"Programa\xe7\xe3o")),r.a.createElement("li",null,r.a.createElement("a",{href:"#info",onClick:l},"Traje")),r.a.createElement("li",null,r.a.createElement("button",{className:"confirm-button",onClick:()=>{l(),o(!0)}},"Confirma\xe7\xe3o de Presen\xe7a")))),t&&r.a.createElement(c,{onClose:()=>o(!1)}))},i=(t(33),t(4)),m=t.n(i),u=t(5),d=t.n(u),p=t(6),E=t.n(p),f=t(7),v=t.n(f);const g=[m.a,d.a,E.a,v.a];var b=function(){const[e,a]=Object(n.useState)(0);return Object(n.useEffect)(()=>{const e=setInterval(()=>{a(e=>(e+1)%g.length)},5e3);return()=>clearInterval(e)},[]),r.a.createElement("div",{className:"carousel"},g.map((a,t)=>r.a.createElement("div",{key:t,className:"carousel-item "+(t===e?"active":"")},r.a.createElement("img",{src:a,alt:"Slide "+(t+1)}))),r.a.createElement("button",{className:"carousel-button prev",onClick:()=>a((e-1+g.length)%g.length)},"\u276e"),r.a.createElement("button",{className:"carousel-button next",onClick:()=>a((e+1)%g.length)},"\u276f"))};t(34);var h=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{id:"home",className:"hero"},r.a.createElement("h1",null,"Felipe & Esther"),r.a.createElement("p",null,"Manaus. 17 Maio 2025")),r.a.createElement(b,null))};t(35);var C=function(e){let{targetDate:a}=e;const t=Object(n.useCallback)(()=>{const e=+new Date(a)-+new Date;let t={};return e>0&&(t={dias:Math.floor(e/864e5),horas:Math.floor(e/36e5%24),minutos:Math.floor(e/1e3/60%60)}),t},[a]),[o,l]=Object(n.useState)(t());return Object(n.useEffect)(()=>{const e=setTimeout(()=>{l(t())},1e3);return()=>clearTimeout(e)},[t]),r.a.createElement("div",{className:"countdown"},r.a.createElement("p",{className:"countdown-title"},"Faltam:"),r.a.createElement("div",{className:"countdown-items"},["dias","horas","minutos"].map(e=>r.a.createElement("div",{className:"countdown-item",key:e},r.a.createElement("span",{className:"number"},void 0!==o[e]?o[e]:0),r.a.createElement("span",{className:"label"},e)))))};t(36);var N=function(){return r.a.createElement("section",{className:"countdown-section"},r.a.createElement("h2",null,"\xc9 oficial! vamos nos casar!"),r.a.createElement("p",null,"O grande dia est\xe1 chegando e estamos transbordando de alegria para viver esse momento ao lado de pessoas t\xe3o especiais. Mais do que uma data, esse dia tem um enorme significado para n\xf3s... e nada faria mais sentido do que compartilharmos tudo com voc\xeas!"),r.a.createElement("p",null,"Esperamos por voc\xea nesse sonho que tem sido mais inenarr\xe1vel!"),r.a.createElement(C,{targetDate:"2025-05-17"}))};t(37);var k=function(){return r.a.createElement("section",{id:"programacao",className:"events"},r.a.createElement("h2",null,"Programa\xe7\xe3o"),r.a.createElement("div",{className:"events-container"},r.a.createElement("div",{className:"event normal"},r.a.createElement("div",{className:"event-info"},r.a.createElement("h3",null,"A cerim\xf4nia"),r.a.createElement("p",{className:"event-date"},"17 de Maio de 2025 - 10h00"),r.a.createElement("p",{className:"event-address"},"8\xba Registro Civil, ",r.a.createElement("br",null),"Av. Constantino Nery, 3872 - Chapada")),r.a.createElement("div",{className:"event-map"},r.a.createElement("iframe",{title:"Mapa Registro Civil",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63745.26647812312!2d-60.0225542873388!3d-3.0735304213418577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0fff8f8631e5%3A0x43503625fe88e933!2s8%C2%BA%20Registro%20Civil%20das%20Pessoas%20Naturais!5e0!3m2!1spt-BR!2sbr!4v1743962563166!5m2!1spt-BR!2sbr",width:"300",height:"200",style:{border:0,borderRadius:"4px"},allowFullScreen:"true",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),r.a.createElement("p",{className:"event-links"},r.a.createElement("a",{href:"https://maps.google.com?q=8%C2%BA+Registro+Civil+das+Pessoas+Naturais",target:"_blank",rel:"noopener noreferrer"},"Ver Dire\xe7\xf5es")," | ",r.a.createElement("a",{href:"https://calendar.google.com/calendar/r/eventedit?text=A%20Cerim%C3%B3nia&dates=20250517T100000/20250517T110000&details=Venha%20celebrar%20conosco%20este%20momento%20especial!&location=8%C2%BA%20Registro%20Civil%2C%20Av.%20Constantino%20Nery%2C%203872%20-%20Chapada",target:"_blank",rel:"noopener noreferrer"},"Adicionar \xe0 agenda")))),r.a.createElement("div",{className:"event reverse"},r.a.createElement("div",{className:"event-info"},r.a.createElement("h3",null,"Festa P\xf3s Cerim\xf4nia"),r.a.createElement("p",{className:"event-date"},"17 de Maio de 2025 - 11h00"),r.a.createElement("p",{className:"event-address"},"La Parrilla Grill, Franceses ",r.a.createElement("br",null),"Av. Des. Jo\xe3o Machado, 63 - Alvorada")),r.a.createElement("div",{className:"event-map"},r.a.createElement("iframe",{title:"Mapa La Parrilla Grill",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0769525067976!2d-60.0358941151612!3d-3.07412023218794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c107967d367ed%3A0x1802363dd758e3fb!2sLa%20Parrilla%20Grill!5e0!3m2!1spt-BR!2sbr!4v1743962544463!5m2!1spt-BR!2sbr",width:"300",height:"200",style:{border:0,borderRadius:"4px"},allowFullScreen:"true",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),r.a.createElement("p",{className:"event-links"},r.a.createElement("a",{href:"https://maps.google.com?q=La+Parrilla+Grill",target:"_blank",rel:"noopener noreferrer"},"Ver Dire\xe7\xf5es")," | ",r.a.createElement("a",{href:"https://calendar.google.com/calendar/r/eventedit?text=Festa%20P%C3%B3s%20Cerim%C3%B4nia&dates=20250517T110000/20250517T150000&details=Venha%20curtir%20a%20festa%20no%20La%20Parrilla%20Grill!&location=La%20Parrilla%20Grill%2C%20Franceses%2C%20Av.%20Des.%20Jo%C3%A3o%20Machado%2C%2063%20-%20Alvorada",target:"_blank",rel:"noopener noreferrer"},"Adicionar \xe0 agenda"))))),r.a.createElement("div",{className:"event-extra-info"},r.a.createElement("p",null,"O consumo ser\xe1 individual, mas a alegria de t\xea-los conosco n\xe3o tem pre\xe7o!")))};t(38);var O=function(){return r.a.createElement("section",{className:"information"},r.a.createElement("div",{className:"information-content"}),r.a.createElement("div",{id:"info",className:"information-traje"},r.a.createElement("h3",null,"Traje"),r.a.createElement("p",null,"Pensando na harmonia do nosso grande dia, reservamos algumas cores para os padrinhos e o noivo. Contamos com seu carinho em escolher cores alternativas aos ",r.a.createElement("strong",null,"tons de azul e cinza"),", e pedimos que venha vestido em traje ",r.a.createElement("strong",null,"ESPORTE FINO"),".")))};t(39);var P=function(){const[e,a]=Object(n.useState)(!1);return r.a.createElement("section",{className:"confirmacao"},r.a.createElement("div",{className:"confirmacao-container"},r.a.createElement("h2",null,"Confirma\xe7\xe3o de Presen\xe7a"),r.a.createElement("div",{className:"confirmacao-buttons"},r.a.createElement("button",{className:"confirm-button",onClick:()=>{a(!0)}},"Confirmar Presen\xe7a"))),e&&r.a.createElement(c,{defaultChoice:"vou",onClose:()=>a(!1)}))};t(40);var j=function(e){let{gift:a,onClose:t}=e;const[o,l]=Object(n.useState)(!1),c=a.giftLink||"https://www.seulink.com/pix",s=a.qrImage||"https://via.placeholder.com/200?text=QR+Code";return r.a.createElement("div",{className:"dialog-overlay"},r.a.createElement("div",{className:"dialog"},r.a.createElement("h2",null,"Presentear: ",a.title),r.a.createElement("div",{className:"qr-code"},r.a.createElement("img",{src:s,alt:"QR Code Pix"})),r.a.createElement("div",{className:"link-area"},r.a.createElement("input",{type:"text",value:c,readOnly:!0}),r.a.createElement("button",{onClick:()=>{navigator.clipboard.writeText(c).then(()=>{l(!0),setTimeout(()=>l(!1),2e3)})}},o?"Copiado!":"Copiar Link")),r.a.createElement("button",{className:"dialog-close-button",onClick:t},"Fechar")))},B=(t(41),t(8)),R=t.n(B),S=t(9),x=t.n(S),A=t(10),w=t.n(A),y=t(11),q=t.n(y),L=t(12),I=t.n(L),F=t(13),T=t.n(F),M=t(14),D=t.n(M),G=t(15),V=t.n(G),z=t(16),X=t.n(z),$=t(17),U=t.n($),_=t(18),J=t.n(_),Q=t(19),W=t.n(Q);const H=[{id:1,title:"S\xf3 para dizer que n\xe3o dei nada",image:R.a,giftLink:"00020126360014BR.GOV.BCB.PIX0114+5592995167293520400005303986540565.905802BR5925Esther dos Santos Simplic6009SAO PAULO62140510dGAyD9B1Wn6304A91D",qrImage:D.a,price:"R$ 65,90"},{id:2,title:"Curso de culin\xe1ria para o noivo",image:x.a,giftLink:"00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406100.005802BR5925Esther dos Santos Simplic6009SAO PAULO62140510umtREvAiiW6304477B",qrImage:V.a,price:"R$ 100,00"},{id:3,title:"Ajuda para a aposentadoria dos noivos",image:w.a,giftLink:"00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406200.005802BR5925Esther dos Santos Simplic6009SAO PAULO62140510m7BmNFRxqR6304F3CC",qrImage:X.a,price:"R$ 200,00"},{id:4,title:"Taxa para a noiva n\xe3o jogar o buqu\xea para sua namorada",image:q.a,giftLink:"00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406300.005802BR5925Esther dos Santos Simplic6009SAO PAULO62140510iibSXDVfh06304C134",qrImage:U.a,price:"R$ 300,00"},{id:5,title:"Se por uma interven\xe7\xe3o divina, voc\xea se sentir tocado",image:I.a,giftLink:"00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406400.005802BR5925Esther dos Santos Simplic6009SAO PAULO621405108a29FVgRXr6304072B",qrImage:J.a,price:"R$ 400,00"},{id:6,title:"Ajuda nos boletos p\xf3s casamento",image:T.a,giftLink:"00020126360014BR.GOV.BCB.PIX0114+55929951672935204000053039865406500.005802BR5925Esther dos Santos Simplic6009SAO PAULO621405104dBbOk2sI46304A6C0",qrImage:W.a,price:"R$ 500,00"}];var K=function(){const[e,a]=Object(n.useState)(null);return r.a.createElement("section",{id:"giftlist",className:"giftlist"},r.a.createElement("h2",null,"Lista de Presentes"),r.a.createElement("p",null,"Sua presen\xe7a no nosso casamento j\xe1 \xe9 um present\xe3o\u2026 mas se quiser caprichar ainda mais, aceitamos mimos! Preparamos uma listinha com algumas ideias \u2014 s\xf3 pra facilitar, viu? Obrigado por fazer parte dessa festa (e por ajudar a manter os noivos felizes e equipados)!"),r.a.createElement("div",{className:"gift-cards"},H.map(e=>r.a.createElement("div",{key:e.id,className:"gift-card"},r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"gift-price"},e.price),r.a.createElement("button",{className:"present-button",onClick:()=>a(e)},"Presentear")))),e&&r.a.createElement(j,{gift:e,onClose:()=>a(null)}))};t(42);var Y=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("p",{className:"footer-text"},"\xa9 2025 F&E. Todos os direitos reservados.")))},Z=t(20),ee=t.n(Z);t(43);var ae=function(e){let{playing:a,onToggle:t}=e;const o=Object(n.useRef)(null);return Object(n.useEffect)(()=>{a?o.current.play().catch(e=>{console.error("Erro ao tentar reproduzir o \xe1udio:",e)}):o.current.pause()},[a]),r.a.createElement("div",{className:"music-control"},r.a.createElement("button",{onClick:t,className:"music-control-button"},a?"Pause M\xfasica":"Play M\xfasica"),r.a.createElement("audio",{ref:o,loop:!0,style:{display:"none"}},r.a.createElement("source",{src:ee.a,type:"audio/mpeg"}),"Seu navegador n\xe3o suporta o elemento de \xe1udio."))};t(44);var te=function(e){let{onConsent:a}=e;return r.a.createElement("div",{className:"modal-overlay"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("button",{className:"close-button",onClick:()=>a(!1)},"\xd7"),r.a.createElement("h2",null,"Experi\xeancia Completa"),r.a.createElement("p",null,"Para uma experi\xeancia completa, voc\xea permite tocar a m\xfasica de fundo?"),r.a.createElement("button",{className:"consent-button",onClick:()=>a(!0)},"Permitir")))};t(45);var ne=function(){const[e,a]=Object(n.useState)(!1),[t,o]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{window.history.scrollRestoration="manual",window.scrollTo(0,0)},[]),r.a.createElement("div",{className:"App"},t&&r.a.createElement(te,{onConsent:e=>{e&&a(!0),o(!1)}}),r.a.createElement(s,null),r.a.createElement(ae,{playing:e,onToggle:()=>a(e=>!e)}),r.a.createElement(h,null),r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement(O,null),r.a.createElement(P,null),r.a.createElement(K,null),r.a.createElement(Y,null))};var re=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then(a=>{let{getCLS:t,getFID:n,getFCP:r,getLCP:o,getTTFB:l}=a;t(e),n(e),r(e),o(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null))),re()}],[[21,1,2]]]);
//# sourceMappingURL=main.894cd308.chunk.js.map