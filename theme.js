/* 라이트·다크 테마 전환 — 정적 JS만, 외부 요청 없음.
   <head>의 인라인 스니펫이 초기 테마를 먼저 적용하고(FOUC 방지),
   이 파일은 nav에 전환 버튼을 주입해 사용자의 선택을 localStorage에 저장한다. */
(function () {
  var root = document.documentElement;

  var MOON =
    '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var SUN =
    '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41' +
    'M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

  function current() {
    var t = root.getAttribute("data-theme");
    if (t === "dark" || t === "light") return t;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var btn = document.createElement("button");
  btn.id = "theme-toggle";
  btn.className = "theme-btn";
  btn.type = "button";
  btn.innerHTML = MOON + SUN;

  function apply(mode) {
    root.setAttribute("data-theme", mode);
    try { localStorage.setItem("theme", mode); } catch (e) {}
    btn.setAttribute(
      "aria-label",
      mode === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
    );
  }

  btn.addEventListener("click", function () {
    apply(current() === "dark" ? "light" : "dark");
  });

  var host = document.querySelector(".nav .wrap");
  if (host) host.appendChild(btn);
  apply(current());
})();
