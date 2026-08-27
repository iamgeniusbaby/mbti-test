# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트

MBTI 공부법 연구소 — 여러 개의 HTML 페이지로 구성된 정적 콘텐츠 사이트.

- 페이지: `index.html`(소개 + 기질 그룹 카드) · `nt/nf/sj/sp.html`(그룹별 공부법) · `test.html`(10문항 자가진단)
- 공통 스타일은 `style.css`, 자가진단 로직은 `test.js`, 테마 전환은 `theme.js`로 분리
- 폰트는 `fonts/PretendardVariable.woff2` 자체 호스팅 (외부 요청 없음)

## 디자인 시스템

- 크림색 배경 + 보라색 포인트 컬러 + Pretendard(가변 폰트), 모바일 우선 반응형
- **레이아웃 언어(Intel 코리아 홈 참고)**: 브랜드 색(크림·보라)은 유지하되 구조는
  플랫하게 간다 — 그림자 최소(`--shadow`는 1px 힌트 수준) · 모서리 반경 작게
  (`--radius` 6px, 알약형 금지, 버튼·칩·뱃지 4~6px) · 큰 볼드 헤드라인
  (h1 2.6rem/800, h2 1.85rem/800) · `section`은 48px 세로 여백 + `section + section`
  1px 헤어라인으로 구분 · 히어로 하단 1px 경계 · 카드는 `flex` 컬럼으로 높이 균일화
  (`.types`는 `margin-top:auto`로 하단 고정) · `.tip`은 좌측 3px 액센트 바.
- 색은 모두 `style.css`의 CSS 커스텀 프로퍼티로 관리한다. 하드코딩 색상 대신 토큰
  (`--cream`, `--card`, `--purple`, `--purple-deep`, `--purple-soft`, `--ink`,
  `--ink-soft`, `--line`, `--shadow`, `--nav-bg`, `--btn-fg` 등)을 사용한다.
- **라이트·다크 모드**: `:root`에 라이트 팔레트, `:root[data-theme="dark"]`와
  `@media (prefers-color-scheme: dark)`(단, `:root:not([data-theme="light"])` 가드)에
  다크 팔레트를 둔다. 새 색 토큰을 추가하면 두 팔레트 모두에 정의할 것.
- 초기 테마는 각 HTML `<head>`의 인라인 스니펫이 `localStorage.theme`를 읽어
  먼저 적용한다(FOUC 방지). 이 스니펫은 6개 페이지에서 동일하게 유지한다.
- 상단 nav의 테마 전환 버튼은 `theme.js`가 `.nav .wrap`에 주입한다. nav 마크업은
  건드리지 않는다.

## 규칙

- 서버, API, 키(비밀값)를 사용하지 않는다. 순수 정적 파일(HTML/CSS/JS)만으로
  구성한다. CDN 링크·외부 폰트는 쓰지 않는다.
- **외부 요청 예외 — GA4**: Google Analytics 4(gtag.js, 측정 ID
  `G-HWPFEBZ1ZM`)는 전 페이지 `<head>`에 로드한다. 이 스니펫에서만 외부 도메인
  (`www.googletagmanager.com`)으로 요청이 나간다. GA4 스니펫은 6개 페이지에서
  동일하게 유지한다. 그 외 서드파티 스크립트·트래커·analytics 도구는 계속 금지.
- 배포는 **Vercel** 정적 호스팅. 빌드 단계 없음(프레임워크 "Other", 루트를 그대로 서빙).
  GitHub 저장소: `iamgeniusbaby/mbti-test` (public).
- 새 페이지는 nav/footer 링크로 다른 모든 페이지와 상호 연결하고, `style.css`·
  `theme.js`·`<head>` 테마 스니펫·GA4 스니펫을 포함시킨다.
- 한 파일이 300줄을 넘기면, 코드를 추가하기 전에 파일 분리를 먼저 제안한다.
  단, **디자인 시스템의 일관성·응집성이 우선**이며, 분리가 오히려 복잡도를
  높인다면(예: 단일 `style.css` 유지) 300줄을 넘겨도 된다.
