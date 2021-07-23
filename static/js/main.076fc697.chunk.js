(this.webpackJsonpessae_qualification=this.webpackJsonpessae_qualification||[]).push([[0],{119:function(t,e,n){},121:function(t,e,n){},122:function(t,e,n){},125:function(t,e,n){"use strict";n.r(e);var i,a=n(1),c=n.n(a),s=n(29),o=n.n(s),r=n(31),l=(n(36),n(8)),u=n(5),d=n.n(u),h=(n(119),n(0));function j(t){var e=t.name,n=t.file,i=t.audioRef,a=t.setAudioEnded;return Object(h.jsx)("audio",{className:"audio-single",controls:!0,ref:i,controlsList:"nodownload",onEnded:function(){"undefined"!==typeof a&&a(!0)},children:Object(h.jsx)("source",{src:"user-studies/".concat(e,"/audio/").concat(n),type:"audio/mpeg"})})}function b(t){var e=t.index,n=t.choice,i=t.setChoice,a=t.label;return Object(h.jsxs)("li",{className:"grid",children:[Object(h.jsx)("input",{type:"radio",id:e}),Object(h.jsx)("div",{className:"check col-1 ".concat(e===n?"selected":""),onClick:function(){return i(e)},children:Object(h.jsx)("div",{className:"inside"})}),Object(h.jsx)("label",{className:"col-3",onClick:function(){return i(e)},children:a})]})}function f(t){var e=t.choice,n=t.setChoice,a=t.labels;i=n;var c=a.map((function(t,i){return Object(h.jsx)(b,{index:i,choice:e,setChoice:n,label:t},i)}));return Object(h.jsx)("ul",{className:"MultipleChoice",children:c})}n(121);var O=function(t,e){void 0===e?e=t.length:e<=0?(e=t.length,console.warn("Requested samples is not greater than 0. Using full array.")):e>t.length&&(e=t.length,console.warn("Requested more samples than there are available. Using full array."));for(var n,i,a=e,c=t.length;0!==c;)i=Math.floor(Math.random()*c),n=t[c-=1],t[c]=t[i],t[i]=n;return t.slice(0,a)}(["IOS","ISO","OIS","OSI","SIO","SOI"]);function v(t,e,n,a,c,s){e(s?"early_finish":t+1),void 0!==n&&i(-1),void 0!==a&&a(),void 0!==c&&c(!1)}function y(t,e,n,i,a,c,s,o,r,l){if("early_finish"!==r)return r<O.length?function(t,e,n,i,a,c,s,o){var r=null;s&&(r=Object(h.jsx)(f,{index:t,choice:n,setChoice:i,labels:["FIRST sound was QUIETEST","SECOND sound was QUIETEST","THIRD sound was QUIETEST"]}));var l=null,u=!1;n!==O[t].indexOf("S")&&(u=!0),-1!==n&&(l=Object(h.jsx)("div",{className:"section col-2 align-right",children:Object(h.jsx)("a",{href:"#",className:"button",onClick:function(){return v(t,e,i,c,o,u)},children:"Next"})}));var b="antiphase_HC_"+O[t]+".wav";return Object(h.jsx)("div",{className:"container grid",children:Object(h.jsxs)("div",{className:"section col-all",children:[Object(h.jsx)(d.a,{source:"**Listening Test ".concat(t+1," of ").concat(O.length,".** When you hit play, you will hear three sounds \n\t\t\t\t\tseparated by silences.  \nSimply judge WHICH SOUND WAS QUIETEST \n\t\t\t\t\t \u2014 1, 2, or 3?")}),Object(h.jsx)(j,{name:"qualification",file:b,audioRef:a,setAudioEnded:o}),r,l]})})}(r,l,n,i,a,c,s,o):void e(t+1);e("early_finish")}function x(t,e,n,i){var c=Object(a.useState)(-1),s=Object(l.a)(c,2),o=s[0],r=s[1],u=Object(a.useState)(!1),b=Object(l.a)(u,2),O=b[0],x=b[1],m=Object(a.useState)(0),g=Object(l.a)(m,2),p=g[0],N=g[1];switch(t){case 0:return function(t,e){return Object(h.jsxs)("div",{className:"container grid",children:[Object(h.jsx)("div",{className:"section col-all",children:Object(h.jsx)(d.a,{source:"# **Welcome!**\nPlease read the \n\t\t\t\t\tfollowing information carefully before you decide to take \n\t\t\t\t\tpart. This will tell you why the research is being done \n\t\t\t\t\tand what you will be asked to do if you take part.\n\t\t\t\t\t\n\t\t\t\t\t \n\nWe are conducting a research \n\t\t\t\t\tstudy to evaluate the quality of an audio processing algorithm.\n\t\t\t\t\tIf you agree to participate, you \n\t\t\t\t\twill be asked to fill out a brief questionnaire about your \n\t\t\t\t\tage, your hearing ability, and the listening setup \n\t\t\t\t\tyou intend to use for our study. You will then be asked to \n\t\t\t\t\tevaluate a series of audio samples.\n\n\t\t\t\t\t \n\nThe entire interaction is completely \n\t\t\t\t\tanonymous. We will NOT collect any personally identifiable \n\t\t\t\t\tidentifiers. Your participation in this study does not \n\t\t\t\t\tinvolve any risk to you beyond that of your everyday \n\t\t\t\t\tlife.\n\n\t\t\t\t\t\n\nBy pressing **I Agree**, you confirm you are \n\t\t\t\t\twilling to participate in this research. However, you are \n\t\t\t\t\tfree to withdraw your participation at anytime. If you \n\t\t\t\t\thave any questions or \n\t\t\t\t\tfeedback, please contact the principal investigator, Bryan \n\t\t\t\t\tPardo, at pardo@northwestern.edu."})}),Object(h.jsx)("div",{className:"section col-2 align-right",children:Object(h.jsx)("a",{href:"#",className:"button",onClick:function(){return v(t,e)},children:"I Agree"})})]})}(t,e);case 1:return function(t,e,n,i){var a=null,c=!1;return-1!==n&&(1===n&&(c=!0),a=Object(h.jsx)("div",{className:"section col-2 align-right",children:Object(h.jsx)("a",{href:"#",className:"button",onClick:function(){return v(t,e,i,void 0,void 0,c)},children:"Next"})})),Object(h.jsxs)("div",{className:"container grid",children:[Object(h.jsxs)("div",{className:"section col-all",children:[Object(h.jsx)(d.a,{source:"**Question ".concat(t,".** Are you at least 18 years old?")}),Object(h.jsx)(f,{index:t,choice:n,setChoice:i,labels:["Yes","No"]})]}),a]})}(t,e,o,r);case 2:return function(t,e,n,i){var a=null,c=!1;return-1!==n&&(0===n&&(c=!0),a=Object(h.jsx)("div",{className:"section col-2 align-right",children:Object(h.jsx)("a",{href:"#",className:"button",onClick:function(){return v(t,e,i,void 0,void 0,c)},children:"Next"})})),Object(h.jsxs)("div",{className:"container grid",children:[Object(h.jsxs)("div",{className:"section col-all",children:[Object(h.jsx)(d.a,{source:"**Question ".concat(t,".** Have you ever been diagnosed \n\t\t\t\twith hearing loss or a hearing disorder?")}),Object(h.jsx)(f,{index:t,choice:n,setChoice:i,labels:["Yes","No"]})]}),a]})}(t,e,o,r);case 3:return function(t,e,n,i,a,c){var s=null;return a&&(s=Object(h.jsx)("div",{className:"section col-2 align-right",children:Object(h.jsx)("a",{href:"#",className:"button",onClick:function(){return v(t,e,void 0,i,c)},children:"Next"})})),Object(h.jsx)("div",{className:"container grid",children:Object(h.jsxs)("div",{className:"section col-all",children:[Object(h.jsx)(d.a,{source:"### **Calibration**\n**Please wear your \n\t\t\t\t\theadphones now for calibration.**  \nFirst, set your computer \n\t\t\t\t\tvolume to about 25% of maximum.  \nPress the button, then turn \n\t\t\t\t\tup the volume on your computer until the calibration noise \n\t\t\t\t\tis at a loud but comfortable level.  \nFeel free to play the \n\t\t\t\t\tcalibration sound as many times as you like."}),Object(h.jsx)(j,{name:"qualification",file:"noise_calib_stim.wav",audioRef:n,setAudioEnded:c}),Object(h.jsx)(d.a,{source:"Press **Next** when you are satisfied with the volume level."}),s]})})}(t,e,n,i,O,x);case 4:return y(t,e,o,r,n,i,O,x,p,N);case"early_finish":return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(d.a,{source:"Thank you for your participation. Please enter \n\t\t\t\tthe following code into the HIT."}),Object(h.jsx)("h1",{children:"3F1N1"})]});default:return Object(h.jsx)("div",{children:"Default"})}}function m(){var t=Object(a.useState)(0),e=Object(l.a)(t,2),n=e[0],i=e[1],c=Object(a.useRef)();return Object(h.jsx)("div",{children:x(n,i,c,(function(t){c.current&&(c.current.pause(),c.current.load())}))})}n(122);function g(){return Object(h.jsx)("div",{className:"user-study",children:Object(h.jsx)(m,{})})}o.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})})}),document.getElementById("root"))},36:function(t,e,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.076fc697.chunk.js.map