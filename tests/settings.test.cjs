const {test}=require('node:test'), assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const library=require('../workout-data.js');
function app(saved={}){
 const els=new Map(),store=new Map(Object.entries(saved));let now=1000;
 function el(id){if(!els.has(id)){const classes=new Set();els.set(id,{id,value:'',textContent:'',hidden:false,disabled:false,style:{setProperty(){}},dataset:{},classList:{toggle(k,on){if(on)classes.add(k);else classes.delete(k);},add(k){classes.add(k)},remove(k){classes.delete(k)},contains(k){return classes.has(k)}},setAttribute(){},querySelectorAll(){return[]},closest(){return el('parent:'+id)},blur(){},listeners:{},addEventListener(type,fn){this.listeners[type]=fn}});}return els.get(id);}
 const document={activeElement:null,referrer:'',getElementById:el,querySelectorAll(){return[]},addEventListener(){}};
 const ctx={WorkoutLibrary:library,document,navigator:{},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},performance:{now:()=>now},setTimeout:()=>1,clearTimeout(){},setInterval:()=>1,clearInterval(){},requestAnimationFrame:()=>1,cancelAnimationFrame(){},window:{},console};
 vm.createContext(ctx);
 let js=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
 js=js.replace(/\}\)\(\);\s*$/,`globalThis.testAPI={getState:()=>S,selectMeso,selectWeek,applyProgram,customize,normalizeSettings,buildSeq,totalSeconds,startWorkout,stopWorkout,finish,isFav,getExObj,step};})();`);
 vm.runInContext(js,ctx);return{...ctx.testAPI,el,store,advance(ms){now+=ms;ctx.testAPI.step();}};
}
test('fresh load selects M1 / session 1 and changing week does not change exercises',()=>{
 const a=app();assert.equal(a.getState().planId,'m1:s1');assert.equal(a.getState().ex,8);
 const list=JSON.stringify(a.getState().exList);a.selectWeek(4);assert.equal(JSON.stringify(a.getState().exList),list);
 assert.equal(a.totalSeconds(),1890);
});
test('old settings and history survive as a custom session',()=>{
 const history='[{"planId":"m1w1","ts":123}]';const a=app({'tabata.settings.v2':JSON.stringify({ex:6,series:5,work:30,rest:30,mode:'circuit',exList:['push_up','plank'],mesoId:'m3',weekId:'w1'}),'tabata.history':history});
 assert.equal(a.getState().planId,'custom');assert.equal(a.getState().work,30);assert.equal(a.getState().exList[0],'push_up');assert.equal(a.store.get('tabata.history'),history);
 a.selectMeso('m6');assert.equal(a.getState().ex,12);
});
test('selection, week and exact exercise substitutions survive reload and favorite restoration',()=>{
 const a=app();a.selectMeso('m8');a.applyProgram('m8','s5');a.selectWeek(3);
 a.el('btn-fav').listeners.click();assert.ok(a.isFav());
 const b=app(Object.fromEntries(a.store));assert.equal(b.getState().mesoId,'m8');assert.equal(b.getState().sessionId,'s5');assert.equal(b.getState().week,3);
 b.selectMeso('m2');b.el('preset').listeners.click();assert.equal(b.getState().sessionId,'s5');assert.equal(b.getState().mesoId,'m8');assert.ok(b.isFav());
});
test('EMOM starts with a full minute and finishing repetitions does not skip time',()=>{
 const a=app();a.selectMeso('m7');a.getState().prep=0;a.startWorkout();
 assert.equal(a.el('phase-label').textContent,'EMOM');assert.equal(a.el('time').textContent,'01:00');
 a.el('btn-emom-done').listeners.click();assert.equal(a.el('phase-label').textContent,'RECUPERO EMOM');assert.equal(a.el('time').textContent,'01:00');
 a.stopWorkout();assert.equal(a.el('screen-run').hidden,true);
});
test('completion stores the right mesocycle, week and session without auto rotating exercises',()=>{
 const a=app();a.selectMeso('m6');a.applyProgram('m6','s2');a.selectWeek(2);a.finish();
 const h=JSON.parse(a.store.get('tabata.history'))[0];assert.equal(h.mesoId,'m6');assert.equal(h.sessionId,'s2');assert.equal(h.week,2);assert.equal(h.durationSec,2070);assert.equal(h.exercises.length,12);assert.equal(a.getState().sessionId,'s2');
});

test('EMOM follows the clock through automatic minute boundaries and pause/resume',()=>{
 const a=app();a.selectMeso('m7');a.getState().prep=0;a.startWorkout();
 a.advance(30000);assert.equal(a.el('time').textContent,'00:30');
 a.el('btn-emom-done').listeners.click();a.advance(30000);
 assert.equal(a.el('cur-serie').textContent,'2');assert.equal(a.el('time').textContent,'01:00');assert.equal(a.el('btn-emom-done').disabled,false);
 a.el('btn-pause').listeners.click();a.advance(90000);assert.equal(a.el('time').textContent,'01:00');
 a.el('btn-pause').listeners.click();a.advance(60000);assert.equal(a.el('cur-serie').textContent,'3');
});
