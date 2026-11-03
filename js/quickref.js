"use strict";
const groups = [
    [data_ability_types, "ability-types"],
    [data_ability_sub_types, "ability-sub-types"],
    [data_roll_types, "roll-types"],
    [data_roll_mods, "roll-mods"],
    [data_movement, "basic-movement"],
    [data_action, "basic-actions"],
    [data_bonusaction, "basic-bonus-actions"],
    [data_reaction, "basic-reactions"],
    [data_condition, "basic-conditions"],
    [data_environment_obscurance, "environment-obscurance"],
    [data_environment_light, "environment-light"],
    [data_environment_vision, "environment-vision"],
    [data_environment_cover, "environment-cover"],
    [data_mastery, "mastery-cards"],
    [data_tool_basics, "tool-basics"],
    [data_artisan, "artisan-cards"],
    [data_kits, "kit-cards"],
    [data_recovery, "recovery-cards"],
    [data_environment_other, "environment-other"],
    [data_hazard_climate, "hazard-climate"],
    [data_hazard_danger, "hazard-danger"],
    [data_hazard_trap, "hazard-trap"],
    [data_hazard_damage, "hazard-damage"]
];
const records = new Map();
const terms = new Map();
const sections = [...document.querySelectorAll(".page > .section-container")];
const page = document.querySelector(".page");
const first = sections[0];
function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
}
function normalize(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
}
function slug(text) { return normalize(text).replace(/[^a-z0-9]+/g,"-").replace(/-$/,""); }
for (const [data, group] of groups) {
    for (const card of data) {
        const id = group + "-" + slug(card.title);
        const record = {id, group, card, search: normalize([card.title,card.subtitle,card.description,...card.bullets].join(" "))};
        records.set(id,record);
        const key=card.title.toLowerCase();
        if (!terms.has(key)) terms.set(key,[]);
        terms.get(key).push(record);
    }
}
const aliases = {
 "terreno difícil":["terrenos difíceis"], "caído":["caída","caídos","caídas"],
 "agarrado":["agarrada","agarrados"], "incapacitado":["incapacitada","incapacitados"],
 "inconsciente":["inconscientes"], "invisível":["invisíveis"], "envenenado":["envenenada"],
 "jogada de ataque":["jogadas de ataque","rolagem de ataque"],
 "teste de atributo":["testes de atributo"], "salvaguarda":["salvaguardas","teste de resistência","testes de resistência"],
 "ataque de oportunidade":["ataques de oportunidade"], "salvaguardas contra morte":["salvaguarda contra morte","salvaguardas contra a morte"],
 "vantagem e desvantagem":["vantagem","desvantagem"], "cura e pv temporários":["pv temporários","pontos de vida temporários"],
 "bônus de proficiência":["bônus de proficiência"], "três-quartos de cobertura":["cobertura de três quartos"],
 "atacar":["ação de ataque"], "empurrar":["empurrão"], "agarrar":["agarrão"], "esconder":["esconder-se"],
 "visão no escuro":["visão no escuro"], "estabilizar":["estabilização"], "fabricar equipamento":["fabricação de itens não mágicos"]
};
for(const [title,names] of Object.entries(aliases)) for(const name of names) terms.set(name, terms.get(title));
const escapeRE = s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
const pattern = new RegExp("(?<![\\p{L}\\p{N}])("+[...terms.keys()].sort((a,b)=>b.length-a.length).map(escapeRE).join("|")+")(?![\\p{L}\\p{N}])","giu");
function linked(text,owner) {
    const fragment=document.createDocumentFragment();
    let pos=0;
    for(const match of text.matchAll(pattern)) {
        const options=terms.get(match[0].toLowerCase()) || [];
        const target=options.find(x=>x.group===owner.group)||options[0];
        if (!target || target===owner) continue;
        fragment.append(text.slice(pos,match.index));
        const a=el("a","rule-link",match[0]);
        a.href="#"+target.id;
        a.addEventListener("click",event=>{if(!event.ctrlKey&&!event.metaKey){event.preventDefault();reveal(target.id);}});
        fragment.append(a);
        pos=match.index+match[0].length;
    }
    fragment.append(text.slice(pos));return fragment;
}
let saved=[];
try {saved=JSON.parse(localStorage.getItem("quickref-favoritos-v1")||"[]");}catch{}
const favorites=new Set(Array.isArray(saved)?saved.filter(id=>records.has(id)):[]);
const toolbar=el("div","search-bar");
const label=el("label","","Pesquisar no guia");label.htmlFor="rule-search";
const search=el("input");search.type="search";search.id=label.htmlFor;search.placeholder="Nome ou trecho de uma regra…";
const status=el("span","search-status");status.setAttribute("role","status");
toolbar.append(label,search,status);page.insertBefore(toolbar,first);
const favSection=el("div","section-container");favSection.id="section-favorites";
const favTitle=el("div","section-title","Favoritos"),favContent=el("div","section-content"),favList=el("div","section-row card-grid");
favContent.append(favList);favSection.append(favTitle,favContent);page.insertBefore(favSection,first);
sections.unshift(favSection);
function setSection(section,open){
    section.querySelector(".section-content").hidden=!open;
    section.querySelector(".section-toggle").setAttribute("aria-expanded",String(open));
}
for(const section of sections){
    const header=section.querySelector(".section-title"), content=section.querySelector(".section-content");
    const toggle=el("button","section-toggle",header.firstChild.textContent.trim());
    header.firstChild.remove();header.prepend(toggle);
    toggle.type="button";content.id=section.id+"-content";toggle.setAttribute("aria-controls",content.id);
    setSection(section,true);
    toggle.onclick=()=>setSection(section,content.hidden);
}
function starState(btn,r) {
    const active=favorites.has(r.id);
    btn.textContent=active?"★":"☆";btn.setAttribute("aria-pressed",String(active));
    btn.title=(active?"Remover dos favoritos: ":"Favoritar: ")+r.card.title;btn.setAttribute("aria-label",btn.title);
}
function makeCard(r,copy=false) {
    const c=r.card, item=el("article","rule-card"),head=el("div","card-head");
    item.id=(copy?"fav-":"")+r.id;item.dataset.key=r.id;
    const toggle=el("button","card-toggle");toggle.type="button";
    const icon=el("span","item-icon iconsize icon-"+c.icon);icon.setAttribute("aria-hidden","true");
    const labels=el("span","card-label");labels.append(el("strong","",c.title),el("em","",c.subtitle));
    toggle.append(icon,labels);
    const star=el("button","favorite-star");star.type="button";starState(star,r);
    const body=el("div","rule-body");body.id=item.id+"-body";body.hidden=true;
    toggle.setAttribute("aria-controls",body.id);toggle.setAttribute("aria-expanded","false");
    toggle.onclick=()=>{body.hidden=!body.hidden;toggle.setAttribute("aria-expanded",String(!body.hidden));};
    for(const [idx,line] of [c.description,...c.bullets].entries()){const p=el("p",idx===0?"lead":"");p.append(linked(line,r));body.append(p);}
    body.append(el("p","source",c.reference));
    star.onclick=()=>{
        const previousTop = item.getBoundingClientRect().top;
        if(favorites.has(r.id))favorites.delete(r.id);else favorites.add(r.id);
        try{localStorage.setItem("quickref-favoritos-v1",JSON.stringify([...favorites]));}catch{}
        const original=document.getElementById(r.id).querySelector(".favorite-star");starState(original,r);
        syncFavorites();
        if (search.value.trim()) applySearch();
        if (copy) {
            original.focus({preventScroll:true});
        } else if (window.scrollY > 0) {
            const shift = item.getBoundingClientRect().top - previousTop;
            if (Math.abs(shift) >= 0.5) window.scrollBy(0, shift);
        }
    };
    head.append(toggle,star);item.append(head,body);return item;
}
for(const r of records.values()){const list=document.getElementById(r.group);list.classList.add("card-grid");list.append(makeCard(r));}
function syncFavorites(){
    for(const item of [...favList.children])if(!favorites.has(item.dataset.key))item.remove();
    for(const id of favorites)if(!document.getElementById("fav-"+id))favList.append(makeCard(records.get(id),true));
    favSection.querySelector(".section-toggle").textContent="Favoritos ("+favorites.size+")";
    favSection.hidden=!favorites.size;
}
let beforeSearch=null;
function applySearch(){
    const words=normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    if(words.length&&!beforeSearch)beforeSearch=new Map(sections.map(s=>[s,!s.querySelector(".section-content").hidden]));
    let total=0;
    for(const section of sections){
        let any=false;
        for(const list of section.querySelectorAll(".card-grid")){
            let hits=0;
            for(const item of list.children){const found=words.every(w=>records.get(item.dataset.key).search.includes(w));
                item.hidden=!found;if(found)hits++;
            }
            list.hidden=!hits;
            const hint=list.previousElementSibling;if(hint?.classList.contains("section-subtitle"))hint.hidden=!hits;
            any ||= hits>0;
            if(section!==favSection)total+=hits;
        }
        section.hidden=!any;
        if(words.length&&any)setSection(section,true);
        else if(!words.length&&beforeSearch)setSection(section,beforeSearch.get(section));
    }
    if(!words.length)beforeSearch=null;
    status.textContent=words.length?(total?total+" resultado"+(total===1?"":"s"):"Nenhum cartão encontrado."):"";
}
function reveal(id){
    const item=document.getElementById(id);
    if(!item?.classList.contains("rule-card"))return;
    if(search.value){search.value="";applySearch();}
    setSection(item.closest(".section-container"),true);
    const btn=item.querySelector(".card-toggle");if(btn.getAttribute("aria-expanded")==="false")btn.click();
    btn.focus({preventScroll:true});item.scrollIntoView({block:"center"});
    item.classList.remove("link-highlight");
    // Reinicia o efeito mesmo quando o mesmo destino é clicado novamente.
    void item.offsetWidth;
    item.classList.add("link-highlight");
}
syncFavorites();search.addEventListener("input",applySearch);
window.addEventListener("hashchange",()=>reveal(location.hash.slice(1)));
if(location.hash)reveal(location.hash.slice(1));

document.addEventListener("animationend", function (event) {
    if (event.animationName === "link-arrival" || event.animationName === "link-arrival-still") {
        event.target.classList.remove("link-highlight");
    }
});