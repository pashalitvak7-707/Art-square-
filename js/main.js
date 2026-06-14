/* ===========================================================
   ARTSQR — interactions
   - injects shared header / footer / modals
   - parallax (text + images), reveals
   - choose-your-rhythm accordion + replaceable carousel
   - hover-expand amenities
   - contact (whatsapp / telegram / email), brochure, viewing, film modals
   =========================================================== */

/* ---- Site config: change contact details in ONE place ---- */
const ARTSQR = {
  phone:      "+357 9744 8862",
  phoneIntl:  "35797448862",
  email:      "residences@artsqr.com",
  whatsapp:   "35797448862",          // digits only
  telegram:   "artsqr",               // username
  instagram:  "artsqr.residences",
  salesOffice:"28 Agias Filaxeos, Limassol 3025, Cyprus",
  developer:  "Makespace Development"
};

/* ---------- shared markup ---------- */
const NAV_LINKS = [
  ["RESIDENCES","residences.html"],
  ["THE ART &amp; MURAL","art.html"],
  ["AMENITIES","amenities.html"],
  ["ABOUT","about.html"],
];

function headerHTML(){
  const links = NAV_LINKS.map(([t,h])=>`<a class="nav-link" href="${h}">${t}</a>`).join("");
  return `
  <header class="site-header" id="siteHeader">
    <nav class="nav-left" id="navLeft">${links}</nav>
    <a class="brand" href="index.html" aria-label="ArtSqr home">
      <span class="b1">art</span><span class="b2">sqr</span>
    </a>
    <div class="nav-right" id="navRight">
      <button class="nav-cta" data-modal="viewing">Book a viewing</button>
      <button class="nav-cta" data-modal="brochure">Private brochures</button>
      <a class="nav-phone" href="tel:${ARTSQR.phoneIntl}">${ARTSQR.phone}</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>
  </header>`;
}

function footerHTML(){
  return `
  <section class="cta-band bg-brick pad on-brick">
    <div class="container">
      <div class="logo-mark">art<br>sqr</div>
      <h2 class="display" data-reveal>Discover the larger<br>residences at ArtSqr</h2>
      <p class="lede center" style="margin:22px auto 0;color:#e9d4c9" data-reveal data-reveal-d="1">
        Private brochure on request. Viewings by appointment, weekdays and weekends.
        We will personally walk you through the courtyard, the mural and the two signature residences.
      </p>
      <div class="cta-actions" data-reveal data-reveal-d="2">
        <button class="btn btn--light" data-modal="brochure">Request brochure</button>
        <button class="btn btn--light" data-modal="contact">WhatsApp</button>
        <button class="btn btn--light" data-modal="viewing">Book a viewing</button>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="f-logo">art<br>sqr</div>
          <p>Residences · Limassol · 2026</p>
          <p>© 2025 ${ARTSQR.developer}</p>
        </div>
        <div>
          <h5>Residences</h5>
          <a href="residences.html">All residences</a>
          <a href="penthouse.html">The Penthouse</a>
          <a href="three-bedroom.html">3-Bedroom Family</a>
          <a href="amenities.html">Amenities</a>
        </div>
        <div>
          <h5>Discover</h5>
          <a href="art.html">The Art &amp; Mural</a>
          <a href="about.html">About &amp; District</a>
          <a href="film.html">The Film</a>
          <a href="#" data-modal="viewing">Book a viewing</a>
        </div>
        <div>
          <h5>Sales office</h5>
          <p>${ARTSQR.salesOffice}</p>
          <a href="tel:${ARTSQR.phoneIntl}">${ARTSQR.phone}</a>
          <a href="https://instagram.com/${ARTSQR.instagram}" target="_blank" rel="noopener">@${ARTSQR.instagram}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>ARTSQR — A PRIVATE RESIDENCE IN CENTRAL LIMASSOL</span>
        <span>Limassol 3025, Cyprus</span>
      </div>
    </div>
  </footer>`;
}

function modalsHTML(){
  return `
  <!-- CONTACT: whatsapp / telegram / email -->
  <div class="modal" id="m-contact" role="dialog" aria-modal="true">
    <div class="modal__veil" data-close></div>
    <div class="modal__card">
      <button class="modal__close" data-close aria-label="Close">&times;</button>
      <h3>Speak with us</h3>
      <p class="sub">Choose how you would like to connect with the ArtSqr sales team.</p>
      <div class="contact-choices">
        <a href="https://wa.me/${ARTSQR.whatsapp}" target="_blank" rel="noopener">
          <span class="ic">✆</span>
          <span class="meta"><strong>WhatsApp</strong><span>${ARTSQR.phone}</span></span>
        </a>
        <a href="https://t.me/${ARTSQR.telegram}" target="_blank" rel="noopener">
          <span class="ic">➤</span>
          <span class="meta"><strong>Telegram</strong><span>@${ARTSQR.telegram}</span></span>
        </a>
        <a href="mailto:${ARTSQR.email}?subject=ArtSqr%20enquiry">
          <span class="ic">✉</span>
          <span class="meta"><strong>E-mail</strong><span>${ARTSQR.email}</span></span>
        </a>
      </div>
    </div>
  </div>

  <!-- BROCHURE -->
  <div class="modal" id="m-brochure" role="dialog" aria-modal="true">
    <div class="modal__veil" data-close></div>
    <div class="modal__card">
      <button class="modal__close" data-close aria-label="Close">&times;</button>
      <form data-form>
        <h3>Request the brochure</h3>
        <p class="sub">Receive the private ArtSqr brochure with floor plans and finishes.</p>
        <div class="field"><label>Full name</label><input required name="name" placeholder="Your name"></div>
        <div class="field"><label>E-mail</label><input required type="email" name="email" placeholder="you@email.com"></div>
        <div class="field"><label>Phone</label><input name="phone" placeholder="+357 ..."></div>
        <div class="field"><label>Residence of interest</label>
          <select name="residence">
            <option>The Penthouse Residence</option>
            <option>3-Bedroom Family Residence</option>
            <option>2-Bedroom Residence</option>
            <option>1-Bedroom Residence</option>
            <option>Undecided</option>
          </select>
        </div>
        <button class="btn btn--brick" type="submit" style="width:100%;justify-content:center">Send request</button>
        <p class="form-note">By submitting you agree to be contacted about ArtSqr.</p>
      </form>
      <div class="form-ok"><div class="tick">✓</div><h3>Thank you</h3><p class="sub">The brochure is on its way to your inbox.</p></div>
    </div>
  </div>

  <!-- VIEWING -->
  <div class="modal" id="m-viewing" role="dialog" aria-modal="true">
    <div class="modal__veil" data-close></div>
    <div class="modal__card">
      <button class="modal__close" data-close aria-label="Close">&times;</button>
      <form data-form>
        <h3>Book a viewing</h3>
        <p class="sub">Private appointments, weekdays and weekends.</p>
        <div class="field"><label>Full name</label><input required name="name" placeholder="Your name"></div>
        <div class="field"><label>E-mail</label><input required type="email" name="email" placeholder="you@email.com"></div>
        <div class="field"><label>Preferred date</label><input type="date" name="date"></div>
        <div class="field"><label>Message</label><textarea name="msg" placeholder="Anything we should know?"></textarea></div>
        <button class="btn btn--brick" type="submit" style="width:100%;justify-content:center">Request appointment</button>
      </form>
      <div class="form-ok"><div class="tick">✓</div><h3>Received</h3><p class="sub">Our team will confirm your appointment shortly.</p></div>
    </div>
  </div>

  <!-- FILM -->
  <div class="modal" id="m-film" role="dialog" aria-modal="true">
    <div class="modal__veil" data-close></div>
    <div class="modal__card wide">
      <button class="modal__close" data-close aria-label="Close">&times;</button>
      <video id="filmVideo" controls playsinline poster="assets/rooftop-pool-hero.jpg">
        <source src="assets/film.mp4" type="video/mp4">
      </video>
    </div>
  </div>`;
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  // inject shells if placeholders present
  const h=document.querySelector("[data-include='header']"); if(h) h.outerHTML=headerHTML();
  const f=document.querySelector("[data-include='footer']"); if(f) f.outerHTML=footerHTML();
  const m=document.querySelector("[data-include='modals']"); if(m) m.outerHTML=modalsHTML();

  initHeroVideo();
  initHeader();
  initNavToggle();
  initModals();
  initReveal();
  initParallax();
  initAccordion();
  initCarousels();
  initForms();
});

/* ---------- hero: upgrade to a real fly-through video if one is supplied ---------- */
function initHeroVideo(){
  const box=document.getElementById("heroMedia");
  if(!box) return;
  const src=box.getAttribute("data-video");
  if(!src) return;
  // only swap in the video once we know the file actually exists
  fetch(src,{method:"HEAD"}).then(r=>{
    if(!r.ok) return;
    const v=document.createElement("video");
    v.className="kenburns";v.autoplay=v.muted=v.loop=v.playsInline=true;
    v.setAttribute("muted","");v.setAttribute("playsinline","");
    v.poster="assets/building-dusk.jpg";
    v.innerHTML=`<source src="${src}" type="video/mp4">`;
    box.insertBefore(v,box.firstChild);
    const img=box.querySelector("img"); if(img) img.style.display="none";
    v.play().catch(()=>{});
  }).catch(()=>{});
}

/* ---------- header behaviour ---------- */
function initHeader(){
  const hdr=document.getElementById("siteHeader");
  if(!hdr) return;
  const hero=document.querySelector(".hero, .page-hero");
  let lastY=0;
  const onScroll=()=>{
    const y=window.scrollY;
    // solid once past hero (or after 80px when no hero)
    const threshold=hero ? hero.offsetHeight-90 : 60;
    hdr.classList.toggle("solid", y>threshold);
    // tuck away when scrolling down, reveal on up
    if(y>lastY && y>threshold+120){hdr.classList.add("tuck");}
    else{hdr.classList.remove("tuck");}
    lastY=y;
  };
  window.addEventListener("scroll",onScroll,{passive:true});
  onScroll();
}

function initNavToggle(){
  const t=document.getElementById("navToggle");
  const l=document.getElementById("navLeft");
  const r=document.getElementById("navRight");
  if(!t) return;
  t.addEventListener("click",()=>{
    const open=l.classList.toggle("open"); r.classList.toggle("open");
    t.classList.toggle("on",open);
    document.body.style.overflow=open?"hidden":"";
  });
  [l,r].forEach(nav=>nav.querySelectorAll("a,button").forEach(el=>el.addEventListener("click",()=>{
    l.classList.remove("open");r.classList.remove("open");document.body.style.overflow="";
  })));
}

/* ---------- modals ---------- */
function initModals(){
  document.addEventListener("click",e=>{
    const trig=e.target.closest("[data-modal]");
    if(trig){e.preventDefault();openModal(trig.getAttribute("data-modal"));return;}
    if(e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
}
function openModal(name){
  const el=document.getElementById("m-"+name);
  if(!el)return;
  el.classList.add("open");document.body.style.overflow="hidden";
}
function closeModal(){
  document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"));
  const v=document.getElementById("filmVideo"); if(v) v.pause();
  document.body.style.overflow="";
}

/* ---------- scroll reveal ---------- */
function initReveal(){
  const els=document.querySelectorAll("[data-reveal]");
  if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("in"));return;}
  const io=new IntersectionObserver((ents)=>{
    ents.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}});
  },{threshold:.16});
  els.forEach(e=>io.observe(e));
}

/* ---------- parallax (text + images) ---------- */
function initParallax(){
  const items=[...document.querySelectorAll("[data-parallax]")];
  if(!items.length) return;
  let ticking=false;
  const update=()=>{
    const vh=window.innerHeight;
    items.forEach(el=>{
      const speed=parseFloat(el.getAttribute("data-parallax"))||.2;
      const r=el.getBoundingClientRect();
      const centre=r.top+r.height/2;
      const offset=(centre-vh/2)/vh;        // -ve above, +ve below
      el.style.transform=`translate3d(0,${(-offset*speed*100).toFixed(2)}px,0)`;
    });
    ticking=false;
  };
  const onScroll=()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}};
  window.addEventListener("scroll",onScroll,{passive:true});
  window.addEventListener("resize",update);
  update();
}

/* ---------- accordion ---------- */
function initAccordion(){
  document.querySelectorAll(".acc-item").forEach(item=>{
    const head=item.querySelector(".acc-head");
    const body=item.querySelector(".acc-body");
    head.addEventListener("click",()=>{
      const open=item.classList.contains("active");
      const group=item.closest("[data-accordion]");
      if(group) group.querySelectorAll(".acc-item.active").forEach(o=>{
        o.classList.remove("active");o.querySelector(".acc-body").style.maxHeight=null;
        const img=o.getAttribute("data-carousel-jump");
      });
      if(!open){
        item.classList.add("active");
        body.style.maxHeight=body.scrollHeight+"px";
        // jump linked carousel to the residence's slide
        const grp=item.closest(".rhythm");
        const idx=item.getAttribute("data-slide");
        if(grp&&idx!=null){const car=grp.querySelector(".carousel");if(car)car.__goto&&car.__goto(+idx);}
      }
    });
  });
  // open first by default
  document.querySelectorAll("[data-accordion]").forEach(g=>{
    const first=g.querySelector(".acc-item[data-default]")||g.querySelector(".acc-item");
    if(first){first.classList.add("active");const b=first.querySelector(".acc-body");b.style.maxHeight=b.scrollHeight+"px";}
  });
}

/* ---------- carousel (images easy to replace via data) ---------- */
function initCarousels(){
  document.querySelectorAll(".carousel").forEach(car=>{
    const slides=[...car.querySelectorAll(".carousel__slide")];
    if(!slides.length)return;
    const dots=car.querySelector(".carousel__dots");
    let i=0,timer;
    slides.forEach((s,n)=>{
      if(dots){const b=document.createElement("button");b.addEventListener("click",()=>goto(n));dots.appendChild(b);}
    });
    const dotEls=dots?[...dots.children]:[];
    function goto(n){
      i=(n+slides.length)%slides.length;
      slides.forEach((s,k)=>s.classList.toggle("active",k===i));
      dotEls.forEach((d,k)=>d.classList.toggle("active",k===i));
      restart();
    }
    car.__goto=goto;
    function next(){goto(i+1)} function prev(){goto(i-1)}
    car.querySelector(".next")?.addEventListener("click",next);
    car.querySelector(".prev")?.addEventListener("click",prev);
    function restart(){clearInterval(timer);timer=setInterval(next,5000);}
    goto(0);
    car.addEventListener("mouseenter",()=>clearInterval(timer));
    car.addEventListener("mouseleave",restart);
  });
}

/* ---------- forms (demo submit) ---------- */
function initForms(){
  document.querySelectorAll("form[data-form]").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const card=form.closest(".modal__card");
      form.style.display="none";
      card.querySelector(".form-ok")?.classList.add("show");
      setTimeout(()=>{closeModal();
        setTimeout(()=>{form.reset();form.style.display="";card.querySelector(".form-ok")?.classList.remove("show");},400);
      },2200);
    });
  });
}
