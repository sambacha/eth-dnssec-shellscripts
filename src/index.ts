import { Oracle } from '@ensdomains/dnssecoraclejs'
import { DNSProver } from '@ensdomains/dnsprovejs'

const textDomain = '_ens.yearn.finance'
const prover = DNSProver.create("https://cloudflare-dns.com/dns-query")
const result = await prover.queryWithProof('TXT', textDomain)