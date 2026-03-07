/* =============================================
   CalcZip — 공통 푸터
   footer.js
   ============================================= */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const existing = document.querySelector('footer');

    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-inner">
        <p class="footer-disclaimer">
          모든 계산 결과는 참고용이며, 실제 수치와 다를 수 있습니다. 중요한 결정 전 반드시 전문가와 확인하세요.<br>
          CalcZip.kr은 어떠한 개인정보도 저장하지 않습니다. 입력한 값은 내 브라우저 안에서만 처리됩니다.
        </p>
        <p class="footer-copy">© 2026 CalcZip.kr All rights reserved.</p>
      </div>
    `;

    if (existing) {
      existing.replaceWith(footer);
    } else {
      document.body.appendChild(footer);
    }
  });
})();
