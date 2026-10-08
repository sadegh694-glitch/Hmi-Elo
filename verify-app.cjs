#!/usr/bin/env node
// docs/verify-app.cjs — static checks only
const fs=require("node:fs");
const html=fs.readFileSync(__dirname+"/../electrolyzer-console.html","utf8");
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const dupes=ids.filter((id,i)=>ids.indexOf(id)!==i);
if(dupes.length){console.error("Duplicate IDs:",[...new Set(dupes)]);process.exit(1)}
console.log(`OK ${ids.length} unique ids`);
