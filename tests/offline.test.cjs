const {test}=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
test('offline shell includes programs; updates retain this cache and unrelated apps',async()=>{
 const events={},deleted=[],added=[],saved={page:true};const cache={addAll:async x=>added.push(...x),match:async r=>String(r).endsWith('index.html')?saved:undefined};
 const ctx={URL,fetch:async()=>{throw Error('offline')},caches:{open:async()=>cache,keys:async()=>['tabata-v13','tabata-v14','viva-v1'],delete:async k=>deleted.push(k)},self:{location:{origin:'https://example.com'},registration:{scope:'https://example.com/tabata/'},clients:{claim:async()=>{}},skipWaiting:async()=>{},addEventListener:(n,f)=>events[n]=f}};
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../sw.js'),'utf8'),ctx);
 let promise;const waitUntil=p=>promise=p;events.install({waitUntil});await promise;assert.ok(added.includes('./workout-data.js'));
 events.activate({waitUntil});await promise;assert.deepEqual(deleted,['tabata-v13']);
 let answer;events.fetch({request:{url:'https://example.com/tabata/',method:'GET',mode:'navigate'},waitUntil,respondWith:p=>answer=p});assert.equal(await answer,saved);
 let intercepted=false;events.fetch({request:{url:'https://other.example.com/asset',method:'GET'},respondWith(){intercepted=true}});assert.equal(intercepted,false);
});
