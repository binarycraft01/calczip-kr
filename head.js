/* =============================================
   CalcZip — 공통 head 태그 주입
   head.js
   (OG 태그는 크롤러가 JS를 실행하지 않으므로
    각 파일에 직접 유지, 나머지 공통 태그만 처리)
   ============================================= */

(function () {
  const head = document.head;

  // 1. 구글 폰트 preconnect
  function addLink(rel, href, extra) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const el = document.createElement('link');
    el.rel = rel;
    el.href = href;
    if (extra) Object.assign(el, extra);
    head.appendChild(el);
  }

  addLink('preconnect', 'https://fonts.googleapis.com');
  addLink('preconnect', 'https://fonts.gstatic.com', { crossOrigin: '' });
  addLink('stylesheet', 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=DM+Mono:wght@400;500&display=swap');

  // 2. theme.css
  addLink('stylesheet', '/theme.css');

  // 3. favicon (추후 추가 시 여기서 관리)
  // addLink('icon', '/favicon.ico');

  // 4. 공통 meta
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
})();
