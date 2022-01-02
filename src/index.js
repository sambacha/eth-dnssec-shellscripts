"use strict";
exports.__esModule = true;
var dnsprovejs_1 = require("@ensdomains/dnsprovejs");
var textDomain = '_ens.yearn.finance';
var prover = dnsprovejs_1.DNSProver.create("https://cloudflare-dns.com/dns-query");
(async function(){
var result = await prover.queryWithProof('TXT', textDomain);
})()

