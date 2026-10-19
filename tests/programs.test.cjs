const {test}=require('node:test');
const assert=require('node:assert/strict');
const {exercises,mesocycles,buildProgram}=require('../workout-data.js');
const expected={m1:[8,4,20,40,40,1880],m2:[8,6,25,15,120,2010],m3:[6,5,30,30,30,1770],m4:[10,3,45,10,60,1840],m5:[6,4,60,20,0,1900],m6:[12,4,30,10,60,2060],m7:[6,10,60,0,60,1920],m8:[6,5,40,20,60,1980]};
test('40 complete sessions, original exercise counts and resolvable variants',()=>{
 assert.equal(Object.keys(mesocycles).length,8);
 for(const [id,m] of Object.entries(mesocycles)){
  assert.equal(m.sessions.length,5);
  for(const s of m.sessions){assert.equal(s.exercises.length,expected[id][0],`${id}/${s.id}`);assert.equal(s.optional,Number(s.id.slice(1))>3);for(const e of s.exercises)assert.ok(exercises[e.id],e.label);}
 }
});
test('duration, phase counts and rest placement for every session',()=>{
 for(const [id,m] of Object.entries(mesocycles))for(const s of m.sessions){
  const seq=buildProgram(id,s.id,0);const [count,rounds,work,rest,blockRest,total]=expected[id];
  assert.equal(seq.reduce((n,p)=>n+p.dur,0),total,id);
  assert.ok(['work','emom'].includes(seq.at(-1).t));
  assert.ok(seq.every(p=>p.dur>0&&p.ex>=1&&p.ex<=count));
  assert.equal(seq.filter(p=>p.t==='work').length,id==='m7'?0:count*rounds);
  assert.equal(seq.filter(p=>p.t==='emom').length,id==='m7'?30:0);
  for(const p of seq.filter(p=>p.t==='rest'))assert.equal(p.dur,rest);
  for(const p of seq.filter(p=>p.t==='blockRest'))assert.equal(p.dur,blockRest);
  assert.equal(buildProgram(id,s.id,10).reduce((n,p)=>n+p.dur,0),total+10);
 }
});
test('standard completes each exercise before advancing',()=>{
 for(const id of ['m1','m3','m8']){
  const work=buildProgram(id,'s1',0).filter(p=>p.t==='work');const rounds=expected[id][1];
  assert.deepEqual(work.map(p=>p.ex),Array.from({length:expected[id][0]},(_,i)=>Array(rounds).fill(i+1)).flat());
 }
});
test('two circuits repeat their own four exercises six times before the long break',()=>{
 const seq=buildProgram('m2','s1',0), i=seq.findIndex(p=>p.t==='blockRest');
 assert.deepEqual(seq.slice(0,i).filter(p=>p.t==='work').map(p=>p.ex),Array(6).fill([1,2,3,4]).flat());
 assert.deepEqual(seq.slice(i+1).filter(p=>p.t==='work').map(p=>p.ex),Array(6).fill([5,6,7,8]).flat());
 assert.equal(seq.filter(p=>p.t==='blockRest').length,1);
});
test('jumpsets and jumptrisets stay inside their pair or triple',()=>{
 for(const [id,size,rounds,blocks] of [['m4',2,3,5],['m6',3,4,4]]){
  const seq=buildProgram(id,'s2',0);assert.equal(seq.filter(p=>p.t==='blockRest').length,blocks-1);
  const work=seq.filter(p=>p.t==='work');
  for(let b=0;b<blocks;b++)assert.deepEqual(work.slice(b*size*rounds,(b+1)*size*rounds).map(p=>p.ex),Array(rounds).fill(Array.from({length:size},(_,i)=>b*size+i+1)).flat());
 }
});
test('EMOM preserves pairs, 10 minute starts, and per-side repetition prescriptions',()=>{
 const seq=buildProgram('m7','s2',0), emom=seq.filter(p=>p.t==='emom');
 assert.deepEqual(emom.map(p=>p.pair),[...Array(10).fill([1,2]),...Array(10).fill([3,4]),...Array(10).fill([5,6])]);
 assert.ok(emom.every(p=>p.dur===60));assert.equal(seq.filter(p=>p.t==='blockRest').length,2);
 assert.equal(mesocycles.m7.sessions[1].exercises[2].reps,'8 per lato');
 assert.match(mesocycles.m6.sessions[1].exercises[6].label,/sx$/);
 assert.match(mesocycles.m6.sessions[1].exercises[7].label,/dx$/);
});
test('variants are not replaced by an unrelated available animation',()=>{
 const ids=Object.values(exercises);const byName=n=>ids.find(e=>e.sourceNames.includes(n));
 assert.notEqual(byName('Curl hammer').id,byName('Curl con 2manubri').id);
 assert.notEqual(byName('Hollow body position').id,byName('Plank').id);
 assert.notEqual(byName('Rematore 2manubri').id,'db_row_supported');
 assert.equal(byName('Curl hammer').mediaId,null);
 assert.equal(byName('Piegamenti sulle braccia').mediaId,'push_up');
});
