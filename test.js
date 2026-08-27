/* 공부 습관 자가진단 — 정적 JS만, 외부 요청 없음 */

var GROUPS = {
  NT: { name: "NT · 분석가형", page: "nt.html",
        desc: "원리와 구조를 먼저 이해해야 지식이 쌓이는 전략가형. 응용 문제에 강하지만 반복 복습이 약점입니다." },
  NF: { name: "NF · 이상가형", page: "nf.html",
        desc: "의미와 몰입으로 공부하는 유형. 맥락 이해와 서술형에 강하지만 무미건조한 암기와 루틴 유지가 약점입니다." },
  SJ: { name: "SJ · 관리자형", page: "sj.html",
        desc: "계획과 반복으로 점수를 쌓는 성실형. 암기량 많은 시험에 강하지만 낯선 응용 문제에 약합니다." },
  SP: { name: "SP · 탐험가형", page: "sp.html",
        desc: "실전과 즉각 피드백으로 익히는 실전형. 시험장 순발력이 강점이지만 장기 계획 유지가 약점입니다." }
};

var QUESTIONS = [
  { q: "새 과목을 처음 공부할 때 나는",
    opts: [
      { t: "전체 구조와 원리부터 파악한다", g: "NT" },
      { t: "이걸 왜 배우는지 의미부터 찾는다", g: "NF" },
      { t: "진도표를 짜고 순서대로 나간다", g: "SJ" },
      { t: "일단 문제부터 풀어보며 감을 잡는다", g: "SP" } ] },

  { q: "공부 계획은 보통",
    opts: [
      { t: "큰 목표에서 역산해 논리적으로 설계한다", g: "NT" },
      { t: "느슨하게 잡고 그날 기분에 맞춰 조정한다", g: "NF" },
      { t: "요일·시간까지 구체적으로 정해 지킨다", g: "SJ" },
      { t: "계획보다 그때그때 필요한 걸 한다", g: "SP" } ] },

  { q: "가장 잘 외워지는 방식은",
    opts: [
      { t: "개념 사이의 인과관계로 연결해서", g: "NT" },
      { t: "이야기·비유·감정에 엮어서", g: "NF" },
      { t: "여러 번 반복해서 손과 입에 익혀서", g: "SJ" },
      { t: "문제를 풀며 틀린 부분을 몸으로 기억해서", g: "SP" } ] },

  { q: "집중이 가장 잘 되는 환경은",
    opts: [
      { t: "방해 없이 깊게 파고들 수 있는 조용한 곳", g: "NT" },
      { t: "분위기 좋고 마음이 편안한 곳", g: "NF" },
      { t: "늘 같은 자리, 정돈된 책상", g: "SJ" },
      { t: "적당한 소음과 변화가 있는 곳", g: "SP" } ] },

  { q: "문제가 안 풀리고 막힐 때 나는",
    opts: [
      { t: "원리로 돌아가 왜 안 되는지 따진다", g: "NT" },
      { t: "잠깐 쉬며 마음을 가라앉힌 뒤 다시 본다", g: "NF" },
      { t: "해설을 정독하고 유사 문제를 반복한다", g: "SJ" },
      { t: "일단 넘기고 다른 문제부터 푼다", g: "SP" } ] },

  { q: "노트 필기 스타일은",
    opts: [
      { t: "개념 지도·트리로 구조화한다", g: "NT" },
      { t: "내 언어로 풀어 쓴 요약과 감상", g: "NF" },
      { t: "빠짐없이 정리한 깔끔한 정서 노트", g: "SJ" },
      { t: "필요한 것만 짧게, 오답 위주로", g: "SP" } ] },

  { q: "공부하게 만드는 가장 큰 동기는",
    opts: [
      { t: "모르던 걸 이해했을 때의 쾌감", g: "NT" },
      { t: "이 공부가 내 미래·가치와 이어진다는 느낌", g: "NF" },
      { t: "계획을 지켜냈다는 성취감", g: "SJ" },
      { t: "눈앞의 시험·경쟁 같은 확실한 자극", g: "SP" } ] },

  { q: "복습 습관에 대해 솔직히 말하면",
    opts: [
      { t: "이해했다 싶으면 복습을 잘 건너뛴다", g: "NT" },
      { t: "기분 좋은 날은 하고 아닌 날은 거른다", g: "NF" },
      { t: "정해진 주기대로 꾸준히 복습한다", g: "SJ" },
      { t: "시험이 닥쳐야 몰아서 한다", g: "SP" } ] },

  { q: "시험 직전 하루를 보내는 방식은",
    opts: [
      { t: "약한 개념의 원리를 다시 정리한다", g: "NT" },
      { t: "익숙한 요약 노트를 읽으며 마음을 다잡는다", g: "NF" },
      { t: "전 범위 체크리스트로 빠진 곳을 점검한다", g: "SJ" },
      { t: "실전처럼 모의 문제를 시간 재고 푼다", g: "SP" } ] },

  { q: "스터디 그룹에서 내 역할은 주로",
    opts: [
      { t: "개념을 논리적으로 설명·토론하는 사람", g: "NT" },
      { t: "분위기를 챙기고 서로 이해를 돕는 사람", g: "NF" },
      { t: "진도와 일정을 관리하는 사람", g: "SJ" },
      { t: "문제를 내고 퀴즈로 활기를 주는 사람", g: "SP" } ] }
];

(function () {
  var form = document.getElementById("quiz");
  var order = ["NT", "NF", "SJ", "SP"];

  QUESTIONS.forEach(function (item, qi) {
    var box = document.createElement("div");
    box.className = "q";
    box.setAttribute("role", "radiogroup");
    box.setAttribute("aria-labelledby", "qhead-" + qi);

    var head = document.createElement("div");
    head.className = "qhead";
    head.id = "qhead-" + qi;
    head.textContent = (qi + 1) + ". " + item.q;
    box.appendChild(head);

    item.opts.forEach(function (opt, oi) {
      var label = document.createElement("label");
      label.className = "opt";
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + qi;
      input.value = opt.g;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + opt.t));
      box.appendChild(label);
    });

    form.appendChild(box);
  });

  document.getElementById("submit").addEventListener("click", function () {
    var scores = { NT: 0, NF: 0, SJ: 0, SP: 0 };
    var answered = 0;

    for (var i = 0; i < QUESTIONS.length; i++) {
      var picked = form.querySelector('input[name="q' + i + '"]:checked');
      if (picked) { scores[picked.value] += 1; answered++; }
    }

    if (answered < QUESTIONS.length) {
      alert("아직 답하지 않은 문항이 있어요. (" + answered + "/" + QUESTIONS.length + ")");
      return;
    }

    var best = order[0];
    order.forEach(function (g) { if (scores[g] > scores[best]) best = g; });
    var tie = order.filter(function (g) { return scores[g] === scores[best]; });

    renderResult(best, scores, tie, order);

    // GA4: 자가진단 완료 이벤트 — 결과 그룹 전송
    if (typeof window.gtag === "function") {
      window.gtag("event", "test_complete", {
        result_group: best,               // "NT" | "NF" | "SJ" | "SP"
        is_tie: tie.length > 1,
        tie_groups: tie.join("+")         // 예: "NT+SP" (동점 아니면 best와 동일)
      });
    }
  });

  function renderResult(best, scores, tie, order) {
    var g = GROUPS[best];
    document.getElementById("r-badge").textContent = g.name;
    document.getElementById("r-desc").textContent = g.desc;

    var row = document.getElementById("r-scores");
    row.innerHTML = "";
    order.forEach(function (k) {
      var chip = document.createElement("span");
      chip.className = "score-chip";
      chip.textContent = k + " " + scores[k] + "점";
      row.appendChild(chip);
    });

    var note = document.getElementById("r-note");
    if (tie.length > 1) {
      note.textContent = "동점 그룹: " + tie.join(", ") +
        " — 해당 그룹 페이지를 모두 참고하면 좋아요. (여기서는 " + best + " 기준으로 안내합니다.)";
    } else {
      note.textContent = "";
    }

    var goBtn = document.getElementById("r-go");
    goBtn.setAttribute("href", g.page);
    goBtn.textContent = g.name.split(" ")[0] + " 공부법 보러 가기";

    document.getElementById("r-share").onclick = function () {
      shareResult(g.name);
    };

    var result = document.getElementById("result");
    result.classList.add("show");
    result.scrollIntoView({ behavior: "smooth" });
  }

  function shareResult(groupName) {
    var url = location.href.split("#")[0];
    var text = "내 공부 유형은 " + groupName + "! MBTI 공부법 연구소에서 확인해봤어요.";
    if (navigator.share) {
      navigator.share({ title: "MBTI 공부법 연구소", text: text, url: url })
        .catch(function () {});
      return;
    }
    var payload = text + "\n" + url;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(payload).then(function () {
        alert("결과 문구와 링크를 복사했어요. 친구에게 붙여넣기 하세요!");
      }, function () {
        prompt("아래 내용을 복사해 공유하세요:", payload);
      });
    } else {
      prompt("아래 내용을 복사해 공유하세요:", payload);
    }
  }
})();
