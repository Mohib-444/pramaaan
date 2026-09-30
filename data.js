/* Pramaan prototype — demo data.
   Replace the illustrative Golden-Lab results below with your real run.
   See README.md for which values must stay consistent with each other. */
"use strict";
/* ============================ DATA — illustrative Golden-Lab run ============================ */
var TARGET={name:"worldmonitor_local",sha:"3f9a1c2",version:"v1.4.0-lab",until:"2026-10-02 14:00 IST",untilShort:"02 Oct 14:00",rate:"5 rps",box:"30 min"};

var DOMAINS=[
  {id:"D1",key:"auth_session",name:"Authentication & session"},
  {id:"D2",key:"authz",name:"Authorization & access"},
  {id:"D3",key:"input_validation",name:"Input validation & data"},
  {id:"D4",key:"api_security",name:"API security"},
  {id:"D5",key:"client_side",name:"Client-side controls"},
  {id:"D6",key:"transport",name:"Secure communication"},
  {id:"D7",key:"data_privacy",name:"Data storage & privacy"}
];

var SURFACES=[
  {name:"Serverless edge API",ic:"cloud",ep:"60+ functions",dom:["D1","D4"],note:"Domain APIs over an RPC layer; caching behaviour and key handling reviewed."},
  {name:"RPC framework",ic:"swap",ep:"17 APIs",dom:["D2","D4"],note:"Method handling and per-key authorization checked against the published contract."},
  {name:"Feed proxy",ic:"link",ep:"3 routes",dom:["D3"],note:"Outbound fetch path; egress and destination controls reviewed."},
  {name:"WebSocket relay",ic:"bolt",ep:"2 channels",dom:["D4","D6"],note:"Separate host with a cache; origin policy and cache isolation reviewed."},
  {name:"Desktop app (Tauri)",ic:"window",ep:"IPC + sidecar",dom:["D5","D6"],note:"Renderer, IPC and sidecar trust boundary; loopback binding reviewed."},
  {name:"Secrets & storage",ic:"lock",ep:"repo + bundles",dom:["D7"],note:"Keys, keychain use, bundle contents and dependency advisories reviewed."}
];

/* Compact finding records. The 8 PS fields are assembled from templates (PRD §9). */
/* tiers: poc | confirmed | evidence | probable | na | clean */
var FINDINGS=[
 {id:"F-001",title:"Outbound fetch lacks a destination allowlist",domain:"D3",tier:"poc",sev:"critical",cvss:9.1,
  vector:"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:L/A:N",component:"services/proxy/fetch.ts",
  cwe:["CWE-918"],owasp:["A10:2021"],cia:"C",now:5,full:true,strategy:"canary",script:"pramaan-poc-F001.py",
  fix:"Allowlist schemes and destination hosts, block private address ranges, and re-check on each redirect.",
  closed:true,reg:"regress/F001_egress_test.py"},
 {id:"F-002",title:"API key accepted outside the Authorization header",domain:"D1",tier:"confirmed",sev:"high",cvss:7.5,
  vector:"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",component:"edge API · cached GET routes",
  cwe:["CWE-598"],owasp:["A07:2021"],cia:"C",now:2,full:true,strategy:"config_proof",script:"",
  fix:"Accept keys only in the Authorization header, rotate keys seen in logs, and scrub logs.",
  closed:false,reg:"regress/F002_key_header_test.py"},
 {id:"F-003",title:"Authenticated responses marked shared-cacheable",domain:"D4",tier:"evidence",sev:"high",cvss:7.4,
  vector:"CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N",component:"CDN cache rules · edge headers",
  cwe:["CWE-525"],owasp:["API8:2023"],cia:"CI",now:2,full:true,strategy:"header_proof",script:"",
  fix:"Send Cache-Control: private, no-store on authenticated responses and vary the cache key by caller.",
  closed:false,reg:"regress/F003_cache_headers_test.py"},
 {id:"F-004",title:"Content-Security-Policy missing framing directives",domain:"D5",tier:"evidence",sev:"medium",cvss:5.4,
  vector:"CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",component:"web app response headers",
  cwe:["CWE-1021"],owasp:["A05:2021"],cia:"I",now:2,full:true,strategy:"header_proof",script:"",
  fix:"Add frame-ancestors 'none', object-src 'none' and base-uri 'self' to the policy.",
  closed:false,reg:"regress/F004_csp_test.py"},
 {id:"F-005",title:"WebSocket upgrade without an origin allowlist",domain:"D6",tier:"evidence",sev:"medium",cvss:5.9,
  vector:"CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:H/I:N/A:N",component:"relay service · upgrade handler",
  cwe:["CWE-346"],owasp:["A05:2021"],cia:"C",now:2,full:false,strategy:"config_proof",script:"",
  fix:"Check Origin against an allowlist on upgrade and require a signed session to subscribe.",
  closed:false,reg:"regress/F005_ws_origin_test.py"},
 {id:"F-006",title:"Credential-like string shipped in the client bundle",domain:"D7",tier:"confirmed",sev:"high",cvss:7.1,
  vector:"CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",component:"web client bundle (value redacted)",
  cwe:["CWE-540"],owasp:["A05:2021"],cia:"C",now:5,full:true,strategy:"config_proof",script:"pramaan-poc-F006.py",
  fix:"Move the secret behind a server-side proxy, rotate it, strip source maps, and add secret scanning to CI.",
  closed:true,reg:"regress/F006_secret_scan_test.py"},
 {id:"F-007",title:"Object-level authorization not yet verified",domain:"D2",tier:"probable",sev:null,cvss:null,
  vector:null,component:"profile read route",cwe:["CWE-639"],owasp:["A01:2021"],now:1,
  note:"One weak signal. Confirmation needs the differential strategy with two synthetic identities (P1). Held for manual review; not counted.",
  fix:"If confirmed, enforce object-level authorization keyed to the session identity."},
 {id:"F-008",title:"Role escalation",domain:"D2",tier:"na",sev:null,cvss:null,vector:null,component:"authorization model",
  cwe:[],owasp:["A01:2021"],now:1,
  note:"The profiler reports has_roles = false and an anonymous signed session. With no roles to escalate, the check returns Not-applicable with the profile attached as evidence.",
  fix:"No action. Re-run if a role system is added."},
 {id:"F-009",title:"TLS configuration",domain:"D6",tier:"clean",sev:null,cvss:null,vector:null,component:"lab reverse proxy",
  cwe:[],owasp:["A02:2021"],now:2,
  note:"Only TLS 1.2 and 1.3 offered, no weak ciphers, HSTS present. Executed and reported as a result, not left out.",
  fix:"No action. Keep the cipher policy pinned and re-test on proxy changes."},
 {id:"F-010",title:"Dependency advisory awaiting reachability check",domain:"D7",tier:"probable",sev:null,cvss:null,vector:null,
  component:"transitive npm package (version redacted)",cwe:["CWE-1104"],owasp:["A06:2021"],now:1,known:true,
  note:"An OSV advisory matches a transitive package. It stays Probable until a reachability check or a version proof confirms it, and it matches an entry in the known-issue register.",
  fix:"Upgrade to the fixed range, or record not-reachable with evidence."}
];

/* Business-impact templates (PRD §9): stated in C/I/A terms from asset context, no invented incidents */
var IMPACT={
  C:"Confidentiality: data or credentials held by this component could be exposed beyond their intended audience.",
  I:"Integrity: the intelligence shown to operators could be altered or presented in an untrusted context.",
  CI:"Confidentiality and integrity: responses meant for one caller could reach another, or be served stale."
};
var STRAT_ORACLE={
  canary:"Lab canary listener registered one request from the target within 5 s.",
  config_proof:"Served configuration compared against the policy baseline; mismatch recorded.",
  header_proof:"One GET; response headers compared against the policy; required directive absent."
};
function descFor(f){
  return "A control expected by the "+domName(f.domain)+" checks is missing in "+f.component+
    ". Confirmed on the pinned lab at commit "+TARGET.sha+" by "+(f.tier==="poc"?"a deterministic oracle and a replayable proof":"two independent signals")+
    ". Mapped to "+f.cwe.concat(f.owasp).join(", ")+".";
}
function stepsFor(f){
  return ["Start the pinned lab at "+TARGET.sha+" on the isolated network.",
    "Run check "+f.id+" through the Scope Guard ("+f.strategy+" strategy).",
    f.script?"Run the replay script; it prints PASS or FAIL against the lab.":"Compare the recorded evidence against the policy baseline."];
}

var AUDIT=[
  {seq:1,type:"authorization_loaded",actor:"analyst:vikram",ts:"09:58:02",p:"signed artifact 7f21… · valid to 02 Oct",h:"a91c"},
  {seq:2,type:"scope_denied",actor:"scope_guard",ts:"10:03:41",p:"production host on hard-deny list · blocked",h:"7f22"},
  {seq:3,type:"request_batch",actor:"orchestrator",ts:"10:04:12",p:"D3 · 14 requests · 5 rps cap",h:"3be0"},
  {seq:4,type:"poc_run",actor:"poc_runner",ts:"10:06:33",p:"F-001 canary · PASS",h:"c14d"},
  {seq:5,type:"status_change",actor:"validator",ts:"10:06:34",p:"F-001 VALIDATING → CONFIRMED",h:"90aa"},
  {seq:6,type:"poc_run",actor:"poc_runner",ts:"10:11:07",p:"F-006 config_proof · PASS",h:"5e71"},
  {seq:7,type:"status_change",actor:"retest_engine",ts:"10:21:55",p:"F-001 → CLOSED (PoC FAIL, regression PASS)",h:"2d8f"},
  {seq:8,type:"report_generated",actor:"report_gen",ts:"10:23:10",p:"executive + technical · sha 4c9e…",h:"4c9e"}
];

var RUN=[
  ["10:03:38","ok","<b>Authorization verified.</b> Signed artifact valid to "+TARGET.untilShort+"; scope is loopback + compose network."],
  ["10:03:41","deny","<b>Scope Guard blocked 1 request</b> to a production host on the hard-deny list. Nothing left the sandbox."],
  ["10:04:02","info","<b>Target profiled</b> at <span class='mono'>"+TARGET.sha+"</span>: no login, no roles, six surfaces, anonymous signed session."],
  ["10:05:10","ok","D1 authentication: checked 9 routes for key handling. 1 confirmed (F-002)."],
  ["10:06:33","warn","D3 input validation: checked 14 routes. Canary oracle fired on the feed proxy (F-001)."],
  ["10:08:20","ok","D4 API security: 3 cached routes return caller-specific data (F-003)."],
  ["10:10:02","ok","D5 client-side: policy is missing framing directives (F-004)."],
  ["10:11:40","ok","D6 transport: relay origin check missing (F-005). TLS <b>verified-clean</b> (F-009)."],
  ["10:13:12","warn","D7 data & privacy: credential-like string in bundle (F-006). 1 advisory held as Probable (F-010)."],
  ["10:15:00","info","D2 authorization: 1 signal held as <b>Probable</b> (F-007). Role escalation <b>Not-applicable</b> (F-008)."],
  ["10:21:55","ok","Re-test: F-001 fix applied. PoC now fails, regression passes. <b>Closed.</b>"],
  ["10:23:10","ok","Reports generated: executive + technical, 6 confirmed findings."]
];

var POSTURE={total:70,parts:[
  {k:"Coverage",w:25,s:25.0,sub:"7 of 7 domains executed",
   x:"<code>(domains executed ÷ 7) × 25</code>. All seven scope domains ran and each ended as Found, Verified-clean, Probable or Not-applicable: 7 ÷ 7 × 25 = <b>25.0</b>."},
  {k:"Exposure",w:35,s:24.5,sub:"open confirmed risk, severity-weighted",
   x:"<code>(1 − open weight ÷ cap) × 35</code>, weights Critical 10 · High 6 · Medium 3 · Low 1, cap 60. Open after re-test: 2 High + 2 Medium = 18. (1 − 18 ÷ 60) × 35 = <b>24.5</b>. Closed findings stop counting."},
  {k:"Remediation",w:25,s:8.3,sub:"2 of 6 closed after re-test",
   x:"<code>(closed after re-test ÷ confirmed) × 25</code>. F-001 and F-006 passed re-test and regression: 2 ÷ 6 × 25 = <b>8.3</b>. This rises as fixes are verified."},
  {k:"Evidence quality",w:15,s:12.5,sub:"5 of 6 fully evidenced",
   x:"<code>(confirmed with all 8 fields and passing proof ÷ confirmed) × 15</code>. F-005 still lacks a stored handshake capture: 5 ÷ 6 × 15 = <b>12.5</b>."}
]};
