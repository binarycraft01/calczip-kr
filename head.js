/* =============================================
   CalcZip.kr — 공통 head 태그 주입
   head.js
   ============================================= */

(function () {
  const head = document.head;

  function addLink(rel, href, extra) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const el = document.createElement('link');
    el.rel = rel;
    el.href = href;
    if (extra) Object.assign(el, extra);
    head.appendChild(el);
  }

  // 구글 폰트
  addLink('preconnect', 'https://fonts.googleapis.com');
  addLink('preconnect', 'https://fonts.gstatic.com', { crossOrigin: '' });
  addLink('stylesheet', 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=DM+Mono:wght@400;500&display=swap');

  // theme.css
  addLink('stylesheet', '/theme.css');

  // 공통 meta
  function addMeta(name, content, prop) {
    const existing = prop
      ? document.querySelector(`meta[property="${name}"]`)
      : document.querySelector(`meta[name="${name}"]`);
    if (existing) return;
    const el = document.createElement('meta');
    if (prop) el.setAttribute('property', name);
    else el.setAttribute('name', name);
    el.content = content;
    head.appendChild(el);
  }

  addMeta('theme-color', '#2563eb');
  addMeta('robots', 'index, follow');

  // Google Analytics
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KDSWNCPRHB';
  head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-KDSWNCPRHB');
})();