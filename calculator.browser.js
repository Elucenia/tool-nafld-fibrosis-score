/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"nafld-fibrosis-score","title":"NAFLD Fibrosis Score (NFS)","fields":[["idade","Idade","num",{"min":18,"max":100,"unit":"anos","ph":"50"}],["imc","IMC","num",{"min":12,"max":80,"step":0.1,"unit":"kg/m²","ph":"30"}],["dm","Glicemia de jejum alterada ou diabetes","radio",{"opts":{"0":"Não","1":"Sim"}}],["ast","AST (TGO)","num",{"min":1,"max":5000,"unit":"U/L","ph":"40"}],["alt","ALT (TGP)","num",{"min":1,"max":5000,"unit":"U/L","ph":"50"}],["plq","Plaquetas","num",{"min":5,"max":1500,"unit":"× 10³/mm³","ph":"200"}],["alb","Albumina","num",{"min":1,"max":6,"step":0.1,"unit":"g/dL","ph":"4,0"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
function nfsExactScore(values){
 function dec(value){const match=String(value).match(/^([+-]?)(\d+)(?:\.(\d*))?(?:e([+-]?\d+))?$/i);if(!match)throw Error('Invalid NFS canonical decimal');const places=(match[3]||'').length-Number(match[4]||0),digits=BigInt((match[1]==='-'?'-':'')+match[2]+(match[3]||''));return places>=0?[digits,10n**BigInt(places)]:[digits*10n**BigInt(-places),1n];}
 function add(x,y){return[x[0]*y[1]+y[0]*x[1],x[1]*y[1]];}
 function mul(x,y){return[x[0]*y[0],x[1]*y[1]];}
 let score=dec('-1.675');for(const[coefficient,key]of[['0.037','idade'],['0.094','imc'],['-0.013','plq'],['-0.66','alb']])score=add(score,mul(dec(coefficient),dec(values[key])));
 score=add(score,dec(values.dm==='1'?'1.13':'0'));const ast=dec(values.ast),alt=dec(values.alt);score=add(score,mul(dec('0.99'),[ast[0]*alt[1],ast[1]*alt[0]]));return score;
}
function nfsRationalToNearestBinary64(pair){
 let numerator=pair[0],denominator=pair[1];if(denominator<=0n)throw Error('Positive rational denominator required');if(numerator===0n)return 0;
 const sign=numerator<0n?-1:1;if(numerator<0n)numerator=-numerator;
 const nearestQuotient=(n,d)=>{const q=n/d,r=n%d;return 2n*r>d||(2n*r===d&&(q&1n)===1n)?q+1n:q;};
 let exponent=numerator.toString(2).length-denominator.toString(2).length;
 if(exponent>=0?numerator<(denominator<<BigInt(exponent)):(numerator<<BigInt(-exponent))<denominator)exponent--;
 if(exponent<-1022){const significant=nearestQuotient(numerator<<1074n,denominator);return sign*Number(significant)*Number.MIN_VALUE;}
 const shift=52-exponent,significant=shift>=0?nearestQuotient(numerator<<BigInt(shift),denominator):nearestQuotient(numerator,denominator<<BigInt(-shift));
 if(significant===(1n<<53n))return sign*Math.pow(2,exponent+1);
 return sign*Number(significant)*Math.pow(2,exponent-52);
}
function nfsExactCompare(score,threshold){const digits=String(threshold).split('.'),denominator=10n**BigInt((digits[1]||'').length),numerator=BigInt(digits.join(''));const delta=score[0]*denominator-numerator*score[1];return delta<0n?-1:delta>0n?1:0;}

var e=a.h;
var o=e.br;
a.def("nafld-fibrosis-score",function(a){var exact=nfsExactScore(a),e=nfsRationalToNearestBinary64(exact),r=nfsExactCompare(exact,a.idade>=65?"0.12":"-1.455")<0?["low","Fibrose avançada (F3–F4) improvável"]:nfsExactCompare(exact,"0.676")>0?["high","Fibrose avançada (F3–F4) provável"]:["mid","Resultado indeterminado: complementar com elastografia"];return{main:[o(e,3),""],label:"NAFLD Fibrosis Score",level:r[0],verdict:r[1],note:a.idade>=65?"A partir de 65 anos, o corte inferior usado é 0,12 (McPherson 2017).":"",raw:{nfs:e}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
