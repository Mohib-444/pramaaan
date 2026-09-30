"use strict";
/* ============================ ICONS (sized by CSS) ============================ */
function S(p,fill){return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="'+(fill||'none')+'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
var IC={
  critical:S('<path d="M8.6 2.5h6.8l6.1 6.1v6.8l-6.1 6.1H8.6l-6.1-6.1V8.6z"/><path d="M12 7.5v5.5M12 16.5h.01" stroke-width="2.2"/>'),
  high:S('<path d="M12 3.5 21.5 20h-19z"/><path d="M12 10v4.5M12 17.2h.01" stroke-width="2.2"/>'),
  medium:S('<path d="M12 3 21 12l-9 9-9-9z"/><path d="M12 8.5v4.5M12 16h.01" stroke-width="2.2"/>'),
  low:S('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01" stroke-width="2.2"/>'),
  info:S('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01" stroke-width="2.2"/>'),
  flask:S('<path d="M9 3h6M10 3v5l-5.2 9.2A2 2 0 0 0 6.5 20h11a2 2 0 0 0 1.7-2.8L14 8V3"/>'),
  check:S('<path d="M20 6 9 17l-5-5" stroke-width="2.2"/>'),
  shield:S('<path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6z"/>'),
  shieldok:S('<path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6z"/><path d="m9 12 2 2 4-4"/>'),
  na:S('<circle cx="12" cy="12" r="9"/><path d="m5.8 5.8 12.4 12.4"/>'),
  ask:S('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2-2.5 3.6M12 17h.01"/>'),
  bolt:S('<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>'),
  link:S('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7L11 7"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 1 0 5.7 5.7L13 17"/>'),
  cloud:S('<path d="M7 18a4 4 0 0 1-.4-8A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9z"/>'),
  swap:S('<path d="M4 8h14l-3-3M20 16H6l3 3"/>'),
  window:S('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>'),
  lock:S('<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'),
  power:S('<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>'),
  home:S('<path d="m4 11 8-7 8 7"/><path d="M6 10v10h12V10"/>'),
  key:S('<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M15 8l2 2"/>'),
  target:S('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>'),
  map:S('<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),
  play:S('<path d="M7 4v16l13-8z"/>'),
  list:S('<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" stroke-width="2"/>'),
  grid:S('<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'),
  gauge:S('<path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 14 4-4"/>'),
  wrench:S('<path d="M14.5 6.5a4 4 0 0 1-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.3 2.3-2.2-.5-.5-2.2z"/>'),
  doc:S('<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
  chain:S('<rect x="3" y="8" width="8" height="8" rx="2"/><rect x="13" y="8" width="8" height="8" rx="2"/><path d="M11 12h2"/>'),
  radar:S('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="m12 12 6-5"/>'),
  copy:S('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>'),
  sun:S('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/>'),
  moon:S('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'),
  arrow:S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  back:S('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  x:S('<path d="M6 6l12 12M18 6 6 18" stroke-width="2"/>'),
  bell:S('<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6.5 2 6.5H4S6 14 6 9z"/><path d="M10 19a2 2 0 0 0 4 0"/>')
};

/* ============================ HELPERS ============================ */
var SEVLAB={critical:"Critical",high:"High",medium:"Medium",low:"Low",info:"Info"};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function domName(id){for(var i=0;i<DOMAINS.length;i++){if(DOMAINS[i].id===id)return DOMAINS[i].name;}return id;}
function sevBadge(s){return s?'<span class="sev sev--'+s+'">'+IC[s]+SEVLAB[s]+'</span>':'';}
var TIERS={
  poc:["tier--poc","flask","Confirmed + PoC"],confirmed:["tier--confirmed","check","Confirmed"],
  evidence:["tier--evidence","check","Confirmed by evidence"],probable:["tier--probable","ask","Probable"],
  na:["tier--na","na","Not-applicable"],clean:["tier--clean","shieldok","Verified-clean"]
};
function tierBadge(t){var m=TIERS[t];return '<span class="tier '+m[0]+'">'+IC[m[1]]+m[2]+'</span>';}
function isConfirmed(f){return f.tier==="poc"||f.tier==="confirmed"||f.tier==="evidence";}
function edge(f){return f.tier==="na"?"b-na":f.tier==="clean"?"b-clean":f.tier==="probable"?"b-probable":"b-"+f.sev;}
function byId(id){for(var i=0;i<FINDINGS.length;i++){if(FINDINGS[i].id===id)return FINDINGS[i];}return null;}
function tile(k,v,sub){return '<div class="stat"><div class="k">'+k+'</div><div class="v">'+v+'</div><div class="sub">'+sub+'</div></div>';}
function kv(k,v){return '<div class="kv"><span class="k">'+k+'</span><span class="v">'+v+'</span></div>';}
function head(eb,t,sub){return '<div class="page-head"><div class="eyebrow">'+eb+'</div><h1>'+t+'</h1><p>'+sub+'</p></div>';}
function note(t){return '<p class="note">'+IC.info+'<span>'+t+'</span></p>';}
function li(ok,t){return '<li class="li">'+'<span class="'+(ok?'ok-ic':'no-ic')+'">'+(ok?IC.check:IC.na)+'</span><span>'+t+'</span></li>';}
var STATE={ai:true,killed:false};

/* ============================ NAV ============================ */
var NAV=[
  ["overview","","home","Overview"],
  ["authorization","01","key","Authorize"],
  ["scope","02","target","Target & scope"],
  ["map","03","map","Attack surface"],
  ["run","04","play","Detect · live run"],
  ["findings","05","list","Findings"],
  ["coverage","06","grid","Coverage"],
  ["posture","07","gauge","Posture score"],
  ["remediation","08","wrench","Fix & re-test"],
  ["reports","09","doc","Reports"],
  ["-","","","Assurance"],
  ["audit","","chain","Audit verify"],
  ["monitoring","","radar","Monitoring"]
];

/* ============================ SHELL ============================ */
function renderShell(){
  document.getElementById("app").innerHTML=
  '<header class="hdr" id="hdr">'+
    '<div class="topbar">'+
      '<div class="brand"><span class="logo">'+IC.shield+'</span><span>Pramaan<small>Evidence-first assessment</small></span></div>'+
      '<div class="spacer"></div>'+
      '<span class="ps-chip">'+IC.gauge+'Posture <b>'+POSTURE.total+'</b>/100</span>'+
      '<button class="ticon" id="themeBtn" type="button" aria-label="Switch colour theme">'+IC.moon+'</button>'+
      '<button class="kill" id="killBtn" type="button" aria-pressed="false">'+IC.power+'<span id="killLbl">Kill switch</span></button>'+
    '</div>'+
    '<div class="scope" aria-label="Current assessment scope">'+
      '<span class="s"><span class="dot" id="scopeDot"></span><b class="mono">'+TARGET.name+'</b><span class="mono">@'+TARGET.sha+'</span></span>'+
      '<span class="s opt"><b>Scope</b>loopback + compose network</span>'+
      '<span class="s"><b>Authorized</b>to '+TARGET.untilShort+'</span>'+
      '<span class="s opt"><b>Rate</b>'+TARGET.rate+'</span>'+
      '<span class="s ai"><span>AI layer</span><button class="switch" id="aiBtn" type="button" aria-pressed="true" aria-label="AI layer"><i></i></button><span class="mono xs" id="aiLbl">on</span></span>'+
    '</div>'+
  '</header>'+
  '<div class="shell">'+
    '<nav class="rail" aria-label="Assessment stages"><div class="rail-scroll" id="rail"></div></nav>'+
    '<main class="main"><div class="wrap"><div id="view"></div>'+
      '<footer class="footer">'+
        '<span>'+IC.shield+' <b style="color:var(--fg)">Pramaan</b> prototype · SIH26163 · NTRO</span>'+
        '<span>Local-lab results at commit <span class="mono">'+TARGET.sha+'</span>. Not claims about any production deployment.</span>'+
      '</footer></div></main>'+
  '</div>';

  document.getElementById("rail").innerHTML=NAV.map(function(n){
    if(n[0]==="-")return '<div class="divider"></div><div class="grouplabel">'+n[3]+'</div>';
    return '<button type="button" class="navitem" data-go="'+n[0]+'"><span class="num">'+n[1]+'</span><span class="ico">'+IC[n[2]]+'</span><span>'+n[3].replace("&","&amp;")+'</span></button>';
  }).join("");

  document.getElementById("themeBtn").addEventListener("click",toggleTheme);
  document.getElementById("killBtn").addEventListener("click",toggleKill);
  document.getElementById("aiBtn").addEventListener("click",toggleAI);
  syncTheme();
}

function syncHdr(){var el=document.getElementById("hdr");if(el)document.documentElement.style.setProperty("--hdr",el.offsetHeight+"px");}
function isDark(){var t=document.documentElement.getAttribute("data-theme");return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;}
function syncTheme(){var b=document.getElementById("themeBtn");if(b)b.innerHTML=isDark()?IC.sun:IC.moon;}
function toggleTheme(){
  var next=isDark()?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  try{localStorage.setItem("pramaan-theme",next);}catch(e){}
  syncTheme();
}
function toggleKill(){
  STATE.killed=!STATE.killed;
  var b=document.getElementById("killBtn");
  b.setAttribute("aria-pressed",String(STATE.killed));
  document.getElementById("killLbl").textContent=STATE.killed?"Stopped":"Kill switch";
  document.getElementById("scopeDot").classList.toggle("off",STATE.killed);
  toast(STATE.killed?"Kill switch engaged":"Workers resumed",
    STATE.killed?"All outbound workers stopped. The Scope Guard now denies every request.":"Authorization re-checked before resuming.");
  syncHdr();
}
function toggleAI(){
  STATE.ai=!STATE.ai;
  document.getElementById("aiBtn").setAttribute("aria-pressed",String(STATE.ai));
  document.getElementById("aiLbl").textContent=STATE.ai?"on":"off";
  toast("AI layer "+(STATE.ai?"on":"off"),STATE.ai?"Summaries and Hindi translation use the AI gateway.":"Static templates only. Every screen still works.");
  render(current);
}
function setActive(r){
  document.querySelectorAll(".navitem").forEach(function(b){
    var on=b.getAttribute("data-go")===r;
    b.classList.toggle("active",on);
    if(on)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");
  });
}

/* ============================ OVERLAY ============================ */
var toastTimer;
function toast(h,m){
  var o=document.getElementById("overlay");
  if(o.querySelector(".modal"))return;
  o.innerHTML='<div class="toast" role="status">'+IC.check+'<span><span class="h">'+esc(h)+'</span>'+esc(m)+'</span></div>';
  clearTimeout(toastTimer);toastTimer=setTimeout(function(){if(!o.querySelector(".modal"))o.innerHTML="";},3400);
}
function modal(title,body){
  var o=document.getElementById("overlay");
  o.innerHTML='<div class="modal" id="mroot"><div class="box" role="dialog" aria-modal="true" aria-label="'+esc(title)+'">'+
    '<div class="mhead"><b>'+esc(title)+'</b><button type="button" class="x" data-act="close" aria-label="Close">'+IC.x+'</button></div>'+
    '<div class="mbody">'+body+'</div></div></div>';
  var x=o.querySelector(".x");if(x)x.focus();
}
function closeModal(){document.getElementById("overlay").innerHTML="";}

/* ============================ VIEWS ============================ */
function put(html){document.getElementById("view").innerHTML=html;}
var ARC=["Authorize","Scope","Map","Detect","Validate","Prove","Score","Fix","Re-test","Report"];

function vOverview(){
  var conf=FINDINGS.filter(isConfirmed);
  var c=function(s){return conf.filter(function(f){return f.sev===s;}).length;};
  var closed=conf.filter(function(f){return f.closed;}).length;
  put(
  '<section class="hero">'+
    '<div class="pipeline">'+IC.shieldok+'</div>'+
    '<span class="ps-tag">'+IC.shield+'SIH26163 · NTRO · Software / Smart Automation</span>'+
    '<h1>Scanners find candidates. Pramaan proves them.</h1>'+
    '<p class="lead">An authorized assessment of a self-hosted World Monitor instance. Pramaan maps the attack surface across the seven problem-statement domains, validates each candidate with a safe, replayable proof, scores it with CVSS, writes the fix and a regression test, and re-tests to close it. Everything runs inside a scope that cannot reach production.</p>'+
    '<div class="cta">'+
      '<button type="button" class="btn primary" data-go="findings">'+IC.list+'Review findings</button>'+
      '<button type="button" class="btn onnavy" data-go="run">'+IC.play+'Replay the run</button>'+
    '</div>'+
    '<p class="hook">Analysts lose days proving what scanners flag. We automated the proof, the fix and the re-test.</p>'+
  '</section>'+
  '<div class="grid g4 mt">'+
    tile("Confirmed findings",conf.length,c("critical")+" critical · "+c("high")+" high · "+c("medium")+" medium")+
    tile("Posture score",POSTURE.total+'<small> / 100</small>',"every point traceable")+
    tile("Closed after re-test",closed+'<small> / '+conf.length+'</small>',"PoC fails, regression passes")+
    tile("Scope violations","0","1 attempt blocked before the network")+
  '</div>'+
  '<div class="sec-h"><span class="n">arc</span><h2>How an assessment runs</h2></div>'+
  '<div class="card pad"><div class="arc">'+ARC.map(function(s,i){
    return '<span class="step"><i>'+String(i+1).padStart(2,"0")+'</i>'+s+'</span>'+(i<ARC.length-1?'<span class="sep">'+IC.arrow+'</span>':'');
  }).join("")+'</div></div>'+
  '<div class="grid g2 mt">'+
    '<div class="card pad"><div class="eyebrow">The engine</div>'+
      '<h3 style="font-size:17px;margin:8px 0">Deterministic first, generative second</h3>'+
      '<p class="small muted">Detection, validation, CVSS scoring and remediation are rule-based. A candidate becomes a finding only through the validation state machine: a deterministic oracle or two independent signals, with all eight mandatory fields filled.</p>'+
      '<div class="callout mt">'+IC.info+'<p><b>The AI layer only summarises and translates.</b> It never adds a finding, removes one or sets a score. Switch it off in the bar above and every screen keeps working.</p></div>'+
    '</div>'+
    '<div class="card pad"><div class="eyebrow">Positioning</div>'+
      '<h3 style="font-size:17px;margin:8px 0 6px">Where Pramaan differs</h3>'+
      pos("Detected is treated as vulnerable","Nothing counts until it reaches Confirmed")+
      pos("Report is a PDF at the end","Fix, regression test and re-test live in the pipeline")+
      pos("Silent when nothing is found","Verified-clean is reported with evidence")+
      pos("Demoed on a fake clone","Real target at a pinned commit; a Golden Lab proves precision")+
      pos("Can be pointed anywhere","Production hosts are refused at the network layer")+
    '</div>'+
  '</div>');
}
function pos(a,b){return '<div style="padding:9px 0;border-bottom:1px solid var(--border)"><div class="xs" style="color:var(--fg-faint)">Typical: '+a+'</div><div class="small" style="font-weight:600;margin-top:2px"><span class="ok-ic">'+IC.check+'</span> '+b+'</div></div>';}

function vAuthorization(){
  put(head("01 · Authorize","Authorization gate","No scan starts without a signed authorization record. The Scope Guard checks it on every outbound request, and the orchestrator re-checks it before every stage.")+
  '<div class="grid g2">'+
    '<div class="card pad"><div class="row" style="justify-content:space-between"><div class="eyebrow">Authorization record</div><span class="tier tier--clean">'+IC.check+'In force</span></div>'+
      '<div style="margin-top:12px">'+
      kv("Owner","Assessment owner, NTRO")+kv("Statement","Authorized assessment of "+TARGET.name)+
      kv("Artifact hash",'<span class="mono">7f21c8…a904</span>')+kv("Valid from","30 Sep 2026, 09:00 IST")+
      kv("Valid until",TARGET.until)+kv("Limits",TARGET.rate+" · "+TARGET.box+" time box")+kv("Revoked","No")+
      '</div></div>'+
    '<div class="card pad"><div class="eyebrow">Scope</div>'+
      '<h3 style="font-size:16px;margin:8px 0 12px">In scope and out of scope</h3>'+
      '<ul class="list-reset" style="display:grid;gap:10px">'+
        li(true,"Loopback and the isolated compose network")+
        li(true,"Target pinned at commit <span class='mono'>"+TARGET.sha+"</span>")+
        li(true,"Canary-based proof only, capped at 20 requests each")+
        li(false,"The public World Monitor site and its subdomains")+
        li(false,"Every upstream data provider")+
        li(false,"Load or availability testing")+
      '</ul>'+
      note("Each authorization, scope decision and status change is written to the hash-chained audit log.")+
    '</div>'+
  '</div>'+
  '<div class="card pad mt"><div class="eyebrow">Scope Guard</div>'+
    '<h3 style="font-size:16px;margin:8px 0 6px">The only outbound path</h3>'+
    '<p class="small muted" style="max-width:70ch;margin-bottom:12px">Requests leave only through the Scope Guard. The sandbox network also has no internet route, so the guard is a second wall rather than the only one.</p>'+
    '<div class="code"><span class="kw">def</span> scope_guard(request, assessment):\n'+
    '  require(authorization.valid_now() <span class="kw">and not</span> authorization.revoked)\n'+
    '  require(<span class="kw">not</span> assessment.killed)\n'+
    '  ip = resolve_once(request.host)            <span class="cm"># check the IP, not the name</span>\n'+
    '  <span class="kw">if</span> on_hard_deny(request.host, ip): <span class="rem">deny_and_audit()</span>\n'+
    '  <span class="kw">if not</span> in_allowed_scope(ip):     <span class="rem">deny_and_audit()</span>\n'+
    '  rate_limit(assessment.max_rps)\n'+
    '  <span class="kw">return</span> <span class="add">ALLOW</span></div>'+
  '</div>');
}

function vScope(){
  put(head("02 · Scope","Target & profile","Step 0 of every run is the Target Profiler. It records which controls the deployment actually has, so checks run against the target that exists rather than the one the brief assumes.")+
  '<div class="grid g2">'+
    '<div class="card pad"><div class="eyebrow">Target</div>'+
      '<h3 class="mono" style="font-size:15px;margin:8px 0 12px">'+TARGET.name+'</h3>'+
      kv("Deployment","Self-hosted, Docker Compose")+kv("Commit",'<span class="mono">'+TARGET.sha+'</span>')+
      kv("Version",'<span class="mono">'+TARGET.version+'</span>')+kv("Network","Isolated, no internet route")+
      kv("Upstream feeds","Replaced with local stubs")+kv("Licence","AGPL-3.0, analysed locally")+
    '</div>'+
    '<div class="card pad"><div class="eyebrow">Target profile</div>'+
      '<h3 style="font-size:16px;margin:8px 0 12px">What this deployment has</h3>'+
      '<div class="code">profile = {\n'+
      '  has_login:     <span class="rem">false</span>,\n'+
      '  has_roles:     <span class="rem">false</span>,\n'+
      '  has_api_keys:  <span class="add">true</span>,\n'+
      '  session_model: "anonymous_signed",\n'+
      '  surfaces: ["edge_api", "rpc", "proxy",\n'+
      '             "ws_relay", "desktop_ipc", "mcp"],\n'+
      '  deployment: "docker_selfhost",\n'+
      '  commit_sha: "'+TARGET.sha+'"\n}</div>'+
      '<div class="callout mt">'+IC.info+'<p><b>Profile honesty.</b> This mode has no login and no roles, so checks that need them return <b>Not-applicable</b> with this profile as evidence. See F-008.</p></div>'+
    '</div>'+
  '</div>');
}

function vMap(){
  var STD=[
    ["D1","auth_session","DAST · SAST","ASVS V2/V3 · A07"],
    ["D2","authz","DAST · SAST","ASVS V4 · A01 · API1"],
    ["D3","input_validation","DAST · SAST","ASVS V5 · A03"],
    ["D4","api_security","DAST · SAST · SCA","API Top 10 · ASVS V13"],
    ["D5","client_side","DAST · SAST","ASVS V14 · A05"],
    ["D6","transport","DAST · config","ASVS V9 · A02"],
    ["D7","data_privacy","SAST · SCA · config","ASVS V6/V8 · A02/A06"]
  ];
  put(head("03 · Map","Attack-surface map","Six surfaces found by the profiler. Each problem-statement domain is one module, and every check in it is mapped to a CWE and an OWASP category.")+
  '<div class="surfaces">'+SURFACES.map(function(s){
    return '<div class="surf"><div class="st"><span class="ic">'+IC[s.ic]+'</span>'+s.name+'</div>'+
      '<p class="small muted">'+s.note+'</p>'+
      '<div class="row meta"><span class="chip mono">'+s.ep+'</span>'+s.dom.map(function(d){return '<span class="chip">'+d+'</span>';}).join("")+'</div></div>';
  }).join("")+'</div>'+
  '<div class="sec-h"><span class="n">D1–D7</span><h2>Assessment domains</h2></div>'+
  '<div class="tablewrap"><table><thead><tr><th>#</th><th>Domain</th><th>Module</th><th>Engines</th><th>Standards</th></tr></thead><tbody>'+
  STD.map(function(r){return '<tr><td class="mono">'+r[0]+'</td><td><b>'+domName(r[0])+'</b></td><td class="mono xs">'+r[1]+'</td><td class="small">'+r[2]+'</td><td class="small muted">'+r[3]+'</td></tr>';}).join("")+
  '</tbody></table></div>');
}

function vRun(){
  put(head("04 · Detect","Live run","Every outbound request is counted and every blocked request is shown. Lines are written in plain language; the raw log is one click away. The kill switch stays in the top bar on every screen.")+
  '<div class="grid g4" style="margin-bottom:16px">'+
    tile("Requests sent","47","capped at "+TARGET.rate)+
    tile("Blocked by scope","1","production host, denied")+
    tile("Domains run","7 <small>/ 7</small>","none skipped")+
    tile("Elapsed","12m 04s","target is under 15 min")+
  '</div>'+
  '<div class="console">'+
    '<div class="head"><b>'+TARGET.name+'@'+TARGET.sha+'</b><div class="acts">'+
      '<button type="button" class="btn sm ghost" id="rawBtn" aria-expanded="false">Show raw</button>'+
      '<button type="button" class="btn sm" data-act="rerun">'+IC.play+'Re-run</button></div></div>'+
    '<div>'+RUN.map(function(l){return '<div class="line"><span class="ts">'+l[0]+'</span><span class="tag '+l[1]+'">'+l[1].toUpperCase()+'</span><span class="msg">'+l[2]+'</span></div>';}).join("")+'</div>'+
    '<div class="raw" id="rawBox" hidden>'+RUN.map(function(l){return l[0]+"  "+("["+l[1].toUpperCase()+"]     ").slice(0,7)+"  "+l[2].replace(/<[^>]+>/g,"");}).join("\n")+'</div>'+
  '</div>'+
  note(STATE.killed?"The kill switch is engaged. A re-run would be refused until it is released.":"A completed lab run, shown for review. In the built tool each module streams live."));
  document.getElementById("rawBtn").addEventListener("click",function(){
    var r=document.getElementById("rawBox");r.hidden=!r.hidden;
    this.textContent=r.hidden?"Show raw":"Hide raw";this.setAttribute("aria-expanded",String(!r.hidden));
  });
}

var SEVRANK={critical:0,high:1,medium:2,low:3};
function frow(f){
  return '<a class="frow '+edge(f)+'" href="#'+f.id+'" data-go="finding/'+f.id+'">'+
    '<div><div class="ftitle">'+f.title+'</div>'+
      '<div class="row"><span class="fid">'+f.id+'</span><span class="chip">'+f.domain+' · '+domName(f.domain)+'</span>'+
      sevBadge(f.sev)+(f.cvss?'<span class="chip mono">CVSS '+f.cvss.toFixed(1)+'</span>':'')+'</div></div>'+
    '<div class="fright">'+tierBadge(f.tier)+'<span class="go">Open '+IC.arrow+'</span></div></a>';
}
function vFindings(){
  var conf=FINDINGS.filter(isConfirmed).sort(function(a,b){return SEVRANK[a.sev]-SEVRANK[b.sev];});
  var held=FINDINGS.filter(function(f){return f.tier==="probable";});
  var rest=FINDINGS.filter(function(f){return f.tier==="clean"||f.tier==="na";});
  put(head("05 · Validate & prove","Findings","A candidate becomes a finding only through the validation state machine. Confirmed findings carry all eight mandatory fields. Probable items sit in their own group and never add to the totals.")+
  '<div class="grid g4" style="margin-bottom:16px">'+
    tile("Confirmed",conf.length,"counted in the headline")+tile("Probable",held.length,"manual review, not counted")+
    tile("Not-applicable",FINDINGS.filter(function(f){return f.tier==="na";}).length,"profile attached")+tile("Verified-clean",FINDINGS.filter(function(f){return f.tier==="clean";}).length,"executed, passed")+
  '</div>'+
  '<div class="card flist">'+
    '<div class="fgroup"><span>Confirmed</span><span>'+conf.length+' · in headline</span></div>'+conf.map(frow).join("")+
    '<div class="fgroup"><span>Held for review</span><span>'+held.length+' · appendix only</span></div>'+held.map(frow).join("")+
    '<div class="fgroup"><span>Clean and not-applicable</span><span>'+rest.length+' · evidence kept</span></div>'+rest.map(frow).join("")+
  '</div>'+
  note("Results are from the local lab at commit "+TARGET.sha+". Evidence is redacted before storage."));
}

var SM_CONF=["DETECTED","VALIDATING","CONFIRMED","POC_VERIFIED","FIX_PROPOSED","CLOSED"];
var SM_OTHER={probable:["DETECTED","VALIDATING","PROBABLE"],na:["DETECTED","NOT_APPLICABLE"],clean:["DETECTED","VALIDATING","VERIFIED_CLEAN"]};
function stateMachine(f){
  var seq=isConfirmed(f)?SM_CONF:SM_OTHER[f.tier];
  var now=isConfirmed(f)?f.now:seq.length-1;
  return '<div class="sm">'+seq.map(function(s,i){
    var c=i<now?"done":i===now?"now":"";
    return '<span class="s '+c+'">'+s+'</span>'+(i<seq.length-1?'<span class="a">›</span>':'');
  }).join("")+'</div>';
}
function field(n,label,body,wide){
  return '<div class="field'+(wide?" wide":"")+'"><div class="fh"><span class="n">'+String(n).padStart(2,"0")+'</span>'+label+'</div>'+body+'</div>';
}
function vFinding(id){
  var f=byId(id);
  if(!f){put(head("Findings","Not found","That finding does not exist in this assessment."));return;}
  var conf=isConfirmed(f);
  var chips=f.cwe.concat(f.owasp).map(function(c){return '<span class="chip mono">'+c+'</span>';}).join("");
  var top='<button type="button" class="btn sm ghost" data-go="findings" style="margin-bottom:16px">'+IC.back+'All findings</button>'+
    '<div class="page-head"><div class="eyebrow">'+f.id+' · '+f.domain+' '+domName(f.domain)+'</div>'+
    '<h1 style="font-size:26px">'+f.title+'</h1><div class="row" style="margin-top:12px">'+tierBadge(f.tier)+sevBadge(f.sev)+chips+'</div></div>'+
    '<div class="card pad"><div class="klabel" style="margin-bottom:10px">Validation state</div>'+stateMachine(f)+'</div>';
  if(!conf){ put(top+nonConfirmed(f)); return; }
  put(top+confirmedBody(f));
}

/* mechanical fixes get a suggested patch; design-level fixes get guidance only (PRD §12) */
var DIFF={
  "F-003":[["cm","# edge response headers"],["add","+ Cache-Control: private, no-store"],["add","+ Vary: Authorization"]],
  "F-004":[["cm","# Content-Security-Policy"],["rem","- script-src 'self'"],["add","+ script-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'"]]
};
var HASH={"F-001":"b91f…3ac2","F-002":"7c04…9d1e","F-003":"2af8…c530","F-004":"e17b…40aa","F-005":"99c1…7be4","F-006":"4d5a…1f88"};
var FIELD_LABELS=["Title","Description","Affected component","Severity","Verification steps","Safe proof","Business impact","Remediation"];

function confirmedBody(f){
  var L=FIELD_LABELS;
  var sevBody=sevBadge(f.sev)+'<p class="mono xs muted" style="margin-top:9px;overflow-wrap:anywhere">'+f.vector+'</p><p class="small" style="margin-top:4px">Base score <b>'+f.cvss.toFixed(1)+'</b>, computed from the vector.</p>';
  var steps='<ol class="steps">'+stepsFor(f).map(function(s){return '<li>'+s+'</li>';}).join("")+'</ol>';
  var proof=kv("Strategy",'<span class="mono">'+f.strategy+'</span>')+
    kv("Oracle",'<span style="font-weight:500">'+STRAT_ORACLE[f.strategy]+'</span>')+
    kv("Replay",f.script?'<span class="mono">'+f.script+'</span>':'Evidence only (tier 1.5)')+
    (f.script?'<button type="button" class="btn sm" style="margin-top:12px" data-act="replay" data-id="'+f.id+'">'+IC.play+'Replay on the lab</button>':'');
  var fields=[
    [L[0],'<p><b>'+f.title+'</b></p>',false],
    [L[2],'<p class="mono small" style="overflow-wrap:anywhere">'+f.component+'</p>',false],
    [L[1],'<p>'+descFor(f)+'</p>',true],
    [L[3],sevBody,false],
    [L[4],steps,false],
    [L[5],proof,true],
    [L[6],'<p>'+IMPACT[f.cia]+'</p>',true],
    [L[7],'<p>'+f.fix+'</p>'+(STATE.ai?'':note("AI layer off. Showing the template text as written.")),true]
  ];
  var n=0;
  return '<div class="sec-h"><span class="n">8 fields</span><h2>Mandatory deliverables</h2></div>'+
    '<div class="fields">'+fields.map(function(x){n++;return field(n,x[0],x[1],x[2]);}).join("")+'</div>'+
    evidenceBlock(f)+retestBlock(f)+
    '<div class="row" style="margin-top:18px"><button type="button" class="btn sm" data-act="copy" data-id="'+f.id+'">'+IC.copy+'Copy steps</button>'+
    '<button type="button" class="btn sm ghost" data-go="remediation">'+IC.wrench+'Remediation queue</button></div>';
}

function evidenceBlock(f){
  var R='<span class="redact" aria-label="redacted"></span>';
  return '<div class="sec-h"><span class="n">evidence</span><h2>Evidence</h2></div>'+
    '<div class="code"><span class="cm"># stored encrypted; secrets redacted before storage</span>\n'+
    'kind     '+(f.strategy==="canary"?"canary_log":f.strategy==="header_proof"?"http_exchange":"file_excerpt")+'\n'+
    'target   '+TARGET.name+'@'+TARGET.sha+'\n'+
    'excerpt  '+R+' '+R+'\n'+
    'sha256   '+(HASH[f.id]||"—")+'</div>';
}

function retestBlock(f){
  var d=DIFF[f.id];
  var status=f.closed
    ?'<span class="tier tier--clean">'+IC.check+'Closed after re-test</span>'
    :'<span class="state">Awaiting fix</span>';
  var rows=f.closed
    ?kv("Proof before fix","PASS · weakness present")+kv("Proof after fix","FAIL · no longer reproduces")+kv("Regression test",'<span class="mono xs">'+f.reg+'</span> · passing')
    :kv("Regression test",'<span class="mono xs">'+f.reg+'</span> · fails on '+TARGET.sha+', passes once fixed')+kv("Next step","Apply the fix, then re-test");
  return '<div class="sec-h"><span class="n">re-test</span><h2>Fix and re-test</h2></div>'+
    '<div class="card pad"><div class="row" style="justify-content:space-between;margin-bottom:8px"><span class="klabel">Status</span>'+status+'</div>'+rows+
    (d?'<div class="klabel" style="margin:14px 0 8px">Suggested patch</div><div class="code">'+d.map(function(x){return '<span class="'+x[0]+'">'+esc(x[1])+'</span>';}).join("\n")+'</div>':'')+
    '</div>';
}

function nonConfirmed(f){
  var label={probable:"Why it is held",na:"Why it does not apply",clean:"What was checked"}[f.tier];
  return '<div class="sec-h"><span class="n">record</span><h2>Check record</h2></div>'+
    '<div class="fields">'+
      field(1,label,'<p>'+f.note+'</p>',true)+
      field(2,"Component",'<p class="mono small">'+f.component+'</p>',false)+
      field(3,"Counted in totals",'<p>'+(f.tier==="probable"?"No. Appendix only, with a manual-review checklist.":"No. Reported as a result with evidence.")+'</p>',false)+
      field(4,"Next action",'<p>'+f.fix+'</p>',true)+
    '</div>'+
    (f.known?'<div class="callout mt">'+IC.info+'<p><b>Known-issue register match.</b> Reported as previously disclosed and verified at this commit, not as a new discovery.</p></div>':'');
}

function vCoverage(){
  var COLS=[["found","Found","high"],["clean","Verified-clean","shieldok"],["probable","Probable","ask"],["na","Not-applicable","na"]];
  function count(d,kind){
    return FINDINGS.filter(function(f){
      if(f.domain!==d)return false;
      if(kind==="found")return isConfirmed(f);
      return f.tier===kind;
    }).length;
  }
  var cls={found:"found",clean:"clean",probable:"prob",na:"na"};
  var grid='<div class="mh" style="text-align:left">Domain</div>'+COLS.map(function(c){return '<div class="mh">'+c[1]+'</div>';}).join("")+
    DOMAINS.map(function(d){
      return '<div class="rl">'+d.id+' '+d.name+'<small>'+d.key+'</small></div>'+COLS.map(function(c){
        var n=count(d.id,c[0]);
        return n?'<div class="cell '+cls[c[0]]+'" title="'+d.id+' · '+c[1]+': '+n+'">'+IC[c[2]]+n+'</div>':'<div class="cell" aria-label="none">·</div>';
      }).join("");
    }).join("");
  put(head("06 · Coverage","Coverage & verified-clean","All seven domains ran. Each one ends as Found, Verified-clean, Probable or Not-applicable, so a quiet domain is a documented result rather than a gap.")+
  '<div class="card pad matrix"><div class="mgrid">'+grid+'</div></div>'+
  '<div class="callout mt">'+IC.shieldok+'<p><b>7 of 7 domains executed.</b> D2 holds one Probable signal and one Not-applicable check. D6 pairs a finding with a clean TLS result. D7 pairs a finding with a held dependency advisory.</p></div>');
}

function vPosture(){
  put(head("07 · Score","Security posture score","A number from 0 to 100 built from four rule-based parts. Select any part to see its formula and inputs. No AI is involved in the score.")+
  '<div class="card pad">'+
    '<div class="gauge">'+
      '<div class="ring" style="--v:'+POSTURE.total+'" role="img" aria-label="Posture score '+POSTURE.total+' out of 100"><div class="val"><b>'+POSTURE.total+'</b><span>of 100</span></div></div>'+
      '<div style="flex:1;min-width:220px"><h3 style="font-size:18px;margin-bottom:6px">Full coverage, remediation under way</h3>'+
      '<p class="small muted" style="max-width:56ch">Coverage and evidence quality are strong. Four confirmed findings are still open, which holds down Exposure and Remediation. Closing F-002 and F-003 would add about 15 points.</p></div>'+
    '</div>'+
    '<div class="brk" id="brk">'+POSTURE.parts.map(function(p,i){
      return '<div><button type="button" aria-expanded="false" aria-controls="ex'+i+'" data-i="'+i+'">'+
        '<span class="lab">'+p.k+'<small>'+p.sub+'</small></span>'+
        '<span class="bar"><i style="width:'+(p.s/p.w*100).toFixed(1)+'%"></i></span>'+
        '<span class="sc">'+p.s.toFixed(1)+' / '+p.w+'</span></button>'+
        '<div class="explain" id="ex'+i+'" hidden>'+p.x+'</div></div>';
    }).join("")+'</div>'+
    '<div class="callout mt">'+IC.info+'<p><b>No free 100.</b> A run with zero confirmed findings still scores Coverage and Evidence quality, and the report says "Verified-clean on N checks", never "no vulnerabilities".</p></div>'+
  '</div>');
  document.querySelectorAll("#brk button").forEach(function(b){
    b.addEventListener("click",function(){
      var ex=document.getElementById("ex"+b.getAttribute("data-i"));
      ex.hidden=!ex.hidden;b.setAttribute("aria-expanded",String(!ex.hidden));
    });
  });
}

function vRemediation(){
  var conf=FINDINGS.filter(isConfirmed);
  var closed=conf.filter(function(f){return f.closed;}).length;
  var LOOP=["Confirmed","Root cause","Fix guidance","Patch or plan","Regression test","Fix applied","Proof re-run","Closed"];
  put(head("08 · Fix & re-test","Remediation & re-test","Every confirmed finding gets a root cause, fix guidance, a suggested patch where the fix is mechanical, and a regression test that fails before the fix and passes after it.")+
  '<div class="grid g4" style="margin-bottom:16px">'+
    tile("Fix guidance",conf.length,"one per confirmed finding")+tile("Regression tests",conf.length,"generated")+
    tile("Closed",closed,"re-test verified")+tile("Open",conf.length-closed,"awaiting fix")+
  '</div>'+
  '<div class="card pad"><div class="klabel" style="margin-bottom:10px">Re-test loop</div><div class="arc">'+
    LOOP.map(function(s,i){return '<span class="step">'+s+'</span>'+(i<LOOP.length-1?'<span class="sep">'+IC.arrow+'</span>':'');}).join("")+
  '</div>'+note("A finding closes only when its proof now fails and its regression test passes. Guidance never suggests switching a control off, and flags fixes that change behaviour.")+'</div>'+
  '<div class="sec-h"><span class="n">queue</span><h2>Remediation queue</h2></div>'+
  '<div class="tablewrap"><table><thead><tr><th>ID</th><th>Finding</th><th>Severity</th><th>Regression test</th><th>Status</th></tr></thead><tbody>'+
  conf.sort(function(a,b){return (a.closed?1:0)-(b.closed?1:0)||SEVRANK[a.sev]-SEVRANK[b.sev];}).map(function(f){
    return '<tr><td class="mono"><a href="#'+f.id+'" data-go="finding/'+f.id+'">'+f.id+'</a></td><td><b>'+f.title+'</b></td><td>'+sevBadge(f.sev)+'</td><td class="mono xs">'+f.reg+'</td><td>'+
      (f.closed?'<span class="tier tier--clean">'+IC.check+'Closed</span>':'<span class="state">Awaiting fix</span>')+'</td></tr>';
  }).join("")+'</tbody></table></div>');
}

function vReports(){
  var R=[
    ["executive","Executive summary","Director or judge","Posture score and breakdown, top risks in business terms, verified-clean list, rules of engagement. 1 to 2 pages."],
    ["technical","Technical report","Analyst","All eight fields per finding, CVSS vectors, redacted evidence, replay commands, re-test status, and appendices."],
    ["tickets","Developer tickets","Maintainer","One Markdown ticket per finding with file, fix guidance and the regression test."],
    ["sarif","SARIF, JSON, CSV","Tooling","Machine-readable findings for code-scanning tools and spreadsheets."]
  ];
  var SECTIONS=["Authorization and rules of engagement","Target, pinned commit and profile","Coverage matrix, 7 domains × outcomes","Confirmed findings with all 8 fields","Known-issue comparison","Limitations: what was not tested and why","Appendix: Probable items with review checklists"];
  put(head("09 · Report","Reports & export","One assessment, four audiences. Every report records the tool version, rule-set version and target commit. The executive summary is also produced in Hindi.")+
  '<div class="grid g2">'+R.map(function(r){
    return '<div class="card pad"><div class="row" style="gap:12px;margin-bottom:10px"><span class="surf" style="padding:0;border:none;background:none"><span class="st" style="margin:0"><span class="ic">'+IC.doc+'</span></span></span>'+
      '<div><b style="font-size:15px">'+r[1]+'</b><div class="xs muted">For: '+r[2]+'</div></div></div>'+
      '<p class="small muted" style="margin-bottom:14px">'+r[3]+'</p>'+
      '<button type="button" class="btn sm" data-act="report" data-id="'+r[0]+'">'+IC.doc+'Preview</button></div>';
  }).join("")+'</div>'+
  '<div class="sec-h"><span class="n">sections</span><h2>Required in every report</h2></div>'+
  '<div class="card pad"><ul class="list-reset grid g2" style="gap:10px">'+SECTIONS.map(function(s){return li(true,s);}).join("")+'</ul></div>');
}

function previewReport(kind){
  if(kind!=="executive"){
    var name={technical:"Technical report",tickets:"Developer tickets",sarif:"SARIF, JSON, CSV"}[kind];
    modal(name,'<p class="small muted">'+name+' for '+TARGET.name+'@'+TARGET.sha+'.</p>'+
      '<div class="code" style="margin-top:12px">file     '+kind+'-'+TARGET.sha+(kind==="sarif"?'.sarif':kind==="tickets"?'.zip':'.pdf')+'\nsha256   4c9e…71d0\nfindings 6 confirmed · 2 probable · 1 clean · 1 n/a</div>'+
      note("In the built tool this downloads the file. The prototype shows its record only."));
    return;
  }
  var hi=STATE.ai
    ?'<div class="callout mt deva" lang="hi">'+IC.info+'<p><b>सारांश (हिन्दी):</b> वर्ल्ड मॉनिटर के स्थानीय संस्करण का अधिकृत सुरक्षा मूल्यांकन। सातों डोमेन जाँचे गए। छह पुष्ट निष्कर्ष मिले, जिनमें से दो ठीक करके दोबारा जाँचे जा चुके हैं। कोई उत्पादन प्रणाली प्रभावित नहीं हुई।</p></div>'
    :note("AI layer off. The Hindi summary uses the pre-translated static bundle.");
  modal("Executive summary",
    '<div class="row" style="margin-bottom:14px"><span class="chip mono">pramaan 1.0</span><span class="chip mono">rules r1</span><span class="chip mono">'+TARGET.sha+'</span></div>'+
    '<h3 style="font-size:18px;margin-bottom:8px">Posture '+POSTURE.total+' / 100</h3>'+
    '<p class="small" style="line-height:1.65">Authorized assessment of '+TARGET.name+' at commit '+TARGET.sha+'. All seven domains ran. Six findings were confirmed: one critical, three high, two medium. Two are closed after re-test, including the critical one. One request toward a production host was blocked by the Scope Guard, and no production system was touched.</p>'+
    '<div class="klabel" style="margin:16px 0 8px">Top open risks</div>'+
    FINDINGS.filter(function(f){return isConfirmed(f)&&!f.closed;}).slice(0,3).map(function(f){return '<div class="kv"><span class="k">'+f.title+'</span><span class="v">'+sevBadge(f.sev)+'</span></div>';}).join("")+
    hi);
}

function vAudit(){
  put(head("Assurance","Audit verify","Authorizations, scope decisions, request batches, proof runs and status changes are written to an append-only log. Each entry hashes the one before it, so any edit breaks the chain.")+
  '<div class="row" style="margin-bottom:16px"><button type="button" class="btn primary" data-act="verify">'+IC.chain+'Verify chain</button>'+
    '<span class="chip">'+AUDIT.length+' entries</span><span class="chip mono">SHA-256 · append-only</span></div>'+
  '<div id="verifyOut"></div>'+
  '<div class="tablewrap"><table><thead><tr><th>#</th><th>Event</th><th>Actor</th><th>Time</th><th>Detail</th><th>Hash</th></tr></thead><tbody>'+
  AUDIT.map(function(a){
    var t=a.type==="scope_denied"?"deny":a.type==="report_generated"||a.type==="status_change"?"ok":"info";
    return '<tr><td class="mono">'+a.seq+'</td><td><span class="tag '+t+'">'+a.type+'</span></td><td class="mono xs">'+a.actor+'</td><td class="mono xs">'+a.ts+'</td><td class="small">'+a.p+'</td><td class="mono xs">'+a.h+'…</td></tr>';
  }).join("")+'</tbody></table></div>'+
  note("Entry 2 records the Scope Guard blocking a production host. It is part of the chain, so it cannot be removed quietly."));
}
function verifyChain(){
  var out=document.getElementById("verifyOut");
  out.innerHTML='<div class="callout ok" style="margin-bottom:16px">'+IC.shieldok+'<p><b>Chain intact.</b> '+AUDIT.length+' entries recomputed from the first to the last. First break: none.</p></div>';
  toast("Chain verified",AUDIT.length+" entries, no break");
}

function vMonitoring(){
  put(head("Roadmap","Continuous monitoring","A wireframe of a P2 capability, shown to explain the roadmap. It is designed, not built.")+
  '<div class="card pad" style="border-style:dashed;border-color:var(--border-strong)">'+
    '<span class="tier tier--probable" style="margin-bottom:16px">'+IC.ask+'Designed, not built · P2</span>'+
    '<div class="grid g3" style="opacity:.7;margin-top:14px">'+
      tile("Drift alerts","—","re-run on each new commit")+tile("New confirmed","—","fails a PR above a set severity")+tile("Trend","—","posture over time")+
    '</div>'+
    '<div class="surfaces mt" style="opacity:.7">'+
      '<div class="surf"><div class="st"><span class="ic">'+IC.radar+'</span>Scheduled runs</div><p class="small muted">Nightly run against the pinned lab, compared with the last confirmed set.</p></div>'+
      '<div class="surf"><div class="st"><span class="ic">'+IC.bell+'</span>Regression watch</div><p class="small muted">A closed finding that returns is marked regressed.</p></div>'+
      '<div class="surf"><div class="st"><span class="ic">'+IC.doc+'</span>CI gate</div><p class="small muted">A GitHub Action blocks merges on new confirmed findings.</p></div>'+
    '</div>'+
  '</div>');
}

/* ============================ ROUTER ============================ */
/* Only bare #tokens survive in an artifact link, so routes are plain words or finding ids. */
var VIEWS={overview:vOverview,authorization:vAuthorization,scope:vScope,map:vMap,run:vRun,findings:vFindings,
  coverage:vCoverage,posture:vPosture,remediation:vRemediation,reports:vReports,audit:vAudit,monitoring:vMonitoring};
var current="overview";
function render(r){
  if(/^F-\d{3}$/.test(r)){current=r;setActive("findings");vFinding(r);return;}
  if(!VIEWS[r])r="overview";
  current=r;setActive(r);VIEWS[r]();
}
function go(r){
  if(r.indexOf("finding/")===0)r=r.slice(8);
  render(r);
  try{if(location.hash!=="#"+r)history.pushState(null,"","#"+r);}catch(e){}
  window.scrollTo(0,0);
}
function route(){render((location.hash||"#overview").slice(1)||"overview");}

/* one delegated handler, no inline event attributes */
document.addEventListener("click",function(e){
  var t=e.target.closest("[data-go],[data-act]");
  if(!t)return;
  var g=t.getAttribute("data-go"),a=t.getAttribute("data-act"),id=t.getAttribute("data-id");
  if(g){e.preventDefault();closeModal();go(g);return;}
  if(a==="close"){closeModal();}
  else if(a==="replay"){replay(id);}
  else if(a==="copy"){copySteps(id);}
  else if(a==="report"){previewReport(id);}
  else if(a==="verify"){verifyChain();}
  else if(a==="rerun"){toast(STATE.killed?"Re-run refused":"Re-run queued",STATE.killed?"Release the kill switch first.":"Same commit and config give the same findings.");}
});
document.addEventListener("click",function(e){if(e.target.id==="mroot")closeModal();});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});

function replay(id){
  var f=byId(id);
  if(STATE.killed){toast("Replay refused","The kill switch is engaged.");return;}
  modal("Replay "+f.id,
    '<p class="small muted" style="margin-bottom:12px">The replay script loads the Scope Guard first and refuses any host outside the assessment scope. It sends at most 20 requests and leaves the lab as it found it.</p>'+
    '<div class="code">$ python '+f.script+' --target '+TARGET.name+'@'+TARGET.sha+'\n'+
    '<span class="cm">scope   in allowed network  ✓</span>\n'+
    '<span class="cm">oracle  '+STRAT_ORACLE[f.strategy]+'</span>\n'+
    'result  <span class="add">'+(f.closed?'FAIL  (fixed at this commit)':'PASS')+'</span></div>'+
    note(f.closed?"This finding is closed, so the proof no longer reproduces. That is the re-test result.":"Replays are deterministic: the same commit gives the same result."));
}
function copySteps(id){
  var f=byId(id);
  var text=f.id+" "+f.title+"\n"+stepsFor(f).map(function(s,i){return (i+1)+". "+s;}).join("\n");
  function fallback(){modal("Copy steps",'<p class="small muted" style="margin-bottom:10px">Select and copy:</p><div class="code" style="white-space:pre-wrap">'+esc(text)+'</div>');}
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){toast("Copied",f.id+" steps are on the clipboard.");},fallback);
    }else fallback();
  }catch(err){fallback();}
}

/* ============================ BOOT ============================ */
(function(){
  try{var t=localStorage.getItem("pramaan-theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t);}catch(e){}
  renderShell();
  syncHdr();
  window.addEventListener("resize",syncHdr);
  window.addEventListener("popstate",route);
  window.addEventListener("hashchange",route);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(syncHdr);
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change",syncTheme);
  route();
})();
