/* =============================================
   CalcZip — 다크모드 토글 로직
   theme.js
   ============================================= */

(function () {
  // 1. 페이지 로드 시 저장된 테마 즉시 적용 (깜빡임 방지)
  const saved = localStorage.getItem('calczip-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  // 2. DOM 로드 후 버튼 렌더링
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    updateBtn(btn, document.documentElement.getAttribute('data-theme'));

    btn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('calczip-theme', next);
      updateBtn(btn, next);
    });
  });

  function updateBtn(btn, theme) {
    const icon = btn.querySelector('.toggle-icon');
    const text = btn.querySelector('.toggle-text');
    if (theme === 'dark') {
      if (icon) icon.textContent = '☀️';
      if (text) text.textContent = '라이트';
    } else {
      if (icon) icon.textContent = '🌙';
      if (text) text.textContent = '다크';
    }
  }
})();
