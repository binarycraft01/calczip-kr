/* =============================================
   CalcZip.kr — 공통 푸터
   footer.js
   ============================================= */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const existing = document.querySelector('footer');

    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/about/">서비스 소개</a>
          <a href="/privacy/">개인정보처리방침</a>
          <a href="/terms/">이용약관</a>
          <a href="/cookie-policy/">쿠키 정책</a>
          <a href="https://forms.gle/dzqZjzHY3sdjauj46" target="_blank" rel="noopener">문의하기</a>
        </div>
        <p class="footer-disclaimer">
          모든 계산 결과는 참고용이며, 실제 수치와 다를 수 있습니다. 중요한 결정 전 반드시 전문가와 확인하세요.<br>
          CalcZip.kr은 어떠한 개인정보도 저장하지 않습니다. 입력한 값은 내 브라우저 안에서만 처리됩니다.
        </p>
        <p class="footer-copy">© 2026 CalcZip.kr. All rights reserved.</p>
      </div>
    `;

    if (existing) {
      existing.replaceWith(footer);
    } else {
      document.body.appendChild(footer);
    }
  });
})();
