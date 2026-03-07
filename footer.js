/* =============================================
   CalcZip — 공통 푸터
   footer.js
   ============================================= */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // 기존 footer 요소가 있으면 교체, 없으면 body 끝에 추가
    const existing = document.querySelector('footer');

    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-inner">
        <p class="footer-disclaimer">
          본 사이트의 계산 결과는 참고용이며 실제 금액과 차이가 있을 수 있습니다.<br>
          CalcZip은 개인정보를 수집하지 않으며, 모든 계산은 브라우저에서 로컬로 처리됩니다.
        </p>
        <p class="footer-copy">© 2025 CalcZip. All rights reserved.</p>
      </div>
    `;

    if (existing) {
      existing.replaceWith(footer);
    } else {
      document.body.appendChild(footer);
    }
  });
})();
