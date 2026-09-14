import { useEffect, useState } from "react";
import {
  Award,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  GraduationCap,
  Handshake,
  MapPin,
  Menu,
  MessageCircle,
  Mic2,
  Phone,
  Presentation,
  Quote,
  Sparkles,
  Star,
  Target,
  UserCheck,
  UsersRound,
} from "lucide-react";

export default function App() {
  const kakaoChatUrl = "https://open.kakao.com/o/smjiKjui";
  const phoneUrl = "tel:01022297378";
  const navItems = [
    "홈",
    "회사소개",
    "프로그램",
    "입시면접",
    "그룹수업",
    "강사진",
    "수강후기",
    "상담예약",
  ];
  const [currentPage, setCurrentPage] = useState(() =>
    window.location.hash === "#회사소개" ? "company" : "home",
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const syncPage = () => {
      setCurrentPage(window.location.hash === "#회사소개" ? "company" : "home");
    };

    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  const handleNavigation = (event, item) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (item === "회사소개") {
      setCurrentPage("company");
      window.history.pushState(null, "", "#회사소개");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = item === "홈" ? "home" : item;

    setCurrentPage("home");
    window.history.pushState(null, "", `#${targetId}`);

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const heroStats = [
    ["입시", "전형별 면접 전략"],
    ["성인", "발표·보이스 실습"],
    ["1:1", "개인별 답변 코칭"],
  ];

  const partnerLabels = [
    ["UNIV", "대학교 면접"],
    ["PUBLIC", "공공기관 특강"],
    ["COMPANY", "기업 교육"],
    ["CAREER", "청년센터"],
    ["CAMPUS", "커리어센터"],
    ["ADMISSION", "입시 컨설팅"],
    ["ACADEMY", "아카데미 협업"],
    ["SCHOOL", "학교 출강"],
    ["PRESENT", "기관 발표 교육"],
    ["SPEECH", "프레젠테이션 코칭"],
  ];

  const strengths = [
    {
      title: "지원 목적별 설계",
      text: "입시, 면접, 발표, 직장 커뮤니케이션처럼 실제 필요한 상황에 맞춰 수업을 구성합니다.",
      icon: Target,
      tone: "bg-sky-50 text-sky-700",
    },
    {
      title: "말하기 진단",
      text: "목소리, 시선, 자세, 답변 구조를 먼저 확인하고 고쳐야 할 우선순위를 정합니다.",
      icon: ClipboardCheck,
      tone: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "촬영 피드백",
      text: "실제처럼 말해보고 녹화된 모습을 함께 보며 말의 습관을 구체적으로 교정합니다.",
      icon: Presentation,
      tone: "bg-indigo-50 text-indigo-700",
    },
    {
      title: "최종 발화 점검",
      text: "수업에서 이해한 내용을 실제 면접장과 발표장에서 말할 수 있을 때까지 다듬습니다.",
      icon: CheckCircle2,
      tone: "bg-amber-50 text-amber-600",
    },
  ];

  const programCategories = [
    {
      title: "입시면접",
      desc: "학교, 학과, 전형에 맞춰 생활기록부와 예상 질문을 분석하는 대입 면접 집중 과정",
      tags: ["생기부 분석", "제시문 면접", "지원동기"],
      icon: GraduationCap,
    },
    {
      title: "성인 그룹수업",
      desc: "소수정예 그룹 안에서 발표, 보이스, 논리 표현을 함께 훈련하는 성인 스피치 과정",
      tags: ["6명 내외", "발표 실습", "보이스"],
      icon: UsersRound,
    },
    {
      title: "1:1 프리미엄 입시면접 스피치",
      desc: "지원자 한 명의 서류와 목표 대학에 맞춰 답변을 끝까지 완성하는 개인 코칭",
      tags: ["개인 맞춤", "모의면접", "답변 첨삭"],
      icon: Award,
    },
    {
      title: "1:1 프리미엄 성인 스피치",
      desc: "발표, 면접, 보고, 대화 상황에 맞춰 말 습관과 전달력을 세밀하게 다듬는 개인 수업",
      tags: ["발표", "면접", "커뮤니케이션"],
      icon: UserCheck,
    },
  ];

  const programDetails = [
    {
      id: "입시면접",
      eyebrow: "Admissions Interview",
      title: "입시면접",
      summary:
        "지원 학교와 학과, 전형에 따라 면접 질문의 방향이 달라집니다. 디데이스피치는 서류에서 나올 수 있는 질문을 뽑고, 학생의 경험을 평가 기준에 맞는 답변으로 정리합니다.",
      who: [
        "생기부 기반 질문을 혼자 정리하기 어려운 학생",
        "지원동기와 학업계획을 말로 설득력 있게 표현하고 싶은 학생",
        "제시문, 서류 기반, 인성 면접을 실전처럼 연습하고 싶은 학생",
      ],
      curriculum: [
        "지원 대학·학과·전형별 평가 요소 분석",
        "생활기록부 기반 예상 질문 도출",
        "지원동기, 자기소개, 활동별 답변 구조화",
        "시선, 자세, 속도, 말끝 처리까지 실전 피드백",
      ],
      result: "답변을 외우는 방식이 아니라, 질문 의도를 이해하고 자신의 언어로 말하는 힘을 만듭니다.",
      icon: GraduationCap,
      accent: "from-[#0e2442] via-[#1f3c88] to-[#0f766e]",
    },
    {
      id: "그룹수업",
      eyebrow: "Adult Group Class",
      title: "성인 그룹수업",
      summary:
        "말하기는 혼자 연습할 때보다 사람 앞에서 말하고 피드백을 받을 때 빠르게 좋아집니다. 소수정예 그룹에서 발표, 보이스, 논리 표현을 균형 있게 훈련합니다.",
      who: [
        "발표나 회의에서 말문이 막히는 직장인",
        "목소리가 작거나 말끝이 흐려 전달력이 약한 분",
        "다른 사람 앞에서 말하는 경험을 자연스럽게 늘리고 싶은 분",
      ],
      curriculum: [
        "발성, 발음, 호흡, 억양 기본기",
        "핵심 메시지와 말의 순서 잡기",
        "짧은 발표와 즉흥 스피치 실습",
        "촬영 기반 피드백과 과제 코칭",
      ],
      result: "사람 앞에서 말하는 부담을 줄이고, 내 생각을 또렷하게 전달하는 기본기를 세웁니다.",
      icon: UsersRound,
      accent: "from-[#0f766e] via-[#118ab2] to-[#f59e0b]",
    },
    {
      id: "프리미엄입시",
      eyebrow: "Premium 1:1",
      title: "1:1 프리미엄 입시면접 스피치",
      summary:
        "입시 면접은 제한된 시간 안에 학생의 강점을 정확히 보여줘야 합니다. 개인별 서류와 목표 대학을 기준으로 질문, 답변, 태도까지 밀착 코칭합니다.",
      who: [
        "상위권 대학, 특수 전형, 제시문 면접을 준비하는 학생",
        "개인별 질문과 답변 첨삭이 필요한 학생",
        "면접 전 짧은 기간 안에 완성도를 끌어올리고 싶은 학생",
      ],
      curriculum: [
        "서류 정밀 분석과 질문 리스트 설계",
        "개별 답변 원고 구성 및 말하기 전환",
        "압박 질문, 꼬리 질문 대비",
        "실제 면접장 기준 최종 모의면접",
      ],
      result: "학생의 경험이 평가자에게 분명히 전달되도록 답변의 내용과 말투를 함께 완성합니다.",
      icon: Award,
      accent: "from-[#1f3c88] via-[#0e2442] to-[#db7c26]",
    },
    {
      id: "프리미엄성인",
      eyebrow: "Personal Speech Coaching",
      title: "1:1 프리미엄 성인 스피치",
      summary:
        "말투, 목소리, 설명 방식은 사람마다 다릅니다. 개인 수업은 현재 말하기 습관을 세밀하게 진단하고 실제 업무와 면접 상황에 맞게 바로 적용합니다.",
      who: [
        "중요한 발표, 보고, 면접을 앞둔 분",
        "신뢰감 있는 목소리와 말의 태도를 만들고 싶은 분",
        "단기간에 개인 약점을 집중적으로 교정하고 싶은 분",
      ],
      curriculum: [
        "현재 말하기 습관 진단",
        "목소리, 속도, 발음, 시선 코칭",
        "발표문·자기소개·면접 답변 구성",
        "실전 리허설과 영상 피드백",
      ],
      result: "내 말이 어떻게 들리는지 정확히 알고, 상황에 맞는 신뢰감 있는 말하기로 바꿉니다.",
      icon: UserCheck,
      accent: "from-[#0e2442] via-[#334155] to-[#0f766e]",
    },
  ];

  const processSteps = [
    ["01", "상담 및 진단", "목표 상황과 현재 말하기 습관을 먼저 확인합니다."],
    ["02", "개인별 설계", "필요한 수업 회차와 훈련 순서를 구체적으로 정합니다."],
    ["03", "실전 수업", "면접, 발표, 보이스를 실제처럼 말하며 연습합니다."],
    ["04", "피드백 완성", "녹화와 과제를 통해 수업 밖에서도 말하기가 바뀌게 합니다."],
  ];

  const fitCards = [
    "머릿속 생각은 많은데 말로 정리하면 길어지는 분",
    "발표나 면접에서 긴장 때문에 목소리가 작아지는 분",
    "자기소개와 지원동기를 더 설득력 있게 만들고 싶은 분",
    "말의 속도, 시선, 자세까지 전문적으로 점검받고 싶은 분",
  ];

  const features = [
    "소수정예 그룹 운영",
    "1:1 맞춤 코칭",
    "전형별 면접 대비",
    "촬영 기반 피드백",
    "과제와 복습 가이드",
    "방송인 출신 강사진",
  ];

  const careers = [
    "現 디데이스피치 아카데미 대표강사",
    "現 서울특별시 컬링 협회 대변인",
    "前 연합뉴스TV 시민리포터",
    "前 이데일리TV 아나운서",
    "前 토마토TV 아나운서",
    "前 기상청 기상전문기자",
    "前 경기도광주시청 취재기자",
    "前 공공기관 청년센터 스피치 강의 및 면접 특강 다수 진행",
  ];

  const instructors = [
    {
      name: "문정은 강사",
      image: "/instructor-moon-confident.png",
      icon: Mic2,
      desc: "방송 현장의 전달력과 실전 감각을 바탕으로 발표, 면접, 자기소개에서 통하는 말하기를 코칭합니다.",
      highlights: ["아나운서 스피치", "방송·행사 진행", "현장형 말하기", "인성교육 커뮤니케이션"],
      careers: [
        "現 디데이스피치 아카데미 대표강사",
        "前 서울경제TV 아나운서",
        "前 NBN TV, 팍스경제TV 아나운서",
        "前 경기남부경찰청 직무 교육 강사",
        "방송·행사·강의 총 10년 방송 경력",
      ],
      imageClass: "translate-y-10 object-contain object-bottom",
    },
    {
      name: "오진승 강사",
      image: "/instructor-oh.png",
      icon: BookOpenCheck,
      desc: "투자와 자금관리 개념을 생활 속 경제 언어로 쉽게 풀어내며, 내용이 분명한 설명력을 함께 지도합니다.",
      highlights: ["경제 문해력", "투자·자금관리", "생활 경제 언어", "경제 발표 코칭"],
      careers: [
        "이데일리 주식투자 전문가",
        "증권투자권유대행인",
        "투자·자금관리 교육 멘토",
        "생활 경제 개념 스토리텔링 강의",
      ],
      imageClass: "object-contain object-bottom",
    },
    {
      name: "이채범 강사",
      image: "/instructor-lee.png",
      icon: MessageCircle,
      desc: "공감 대화법을 바탕으로 말하기 상황을 편안하게 받아들이고 자기 생각을 자연스럽게 표현하도록 돕습니다.",
      highlights: ["공감 대화법", "발표 자신감 코칭", "면접 스피치", "진로 커뮤니케이션"],
      careers: [
        "입트였DAY - 자신감 터지는 말하기의 시작",
        "Say It Smart: 면접 스피치 인사이트",
        "진로 토크: 말로 그리는 나의 미래",
      ],
      imageClass: "object-contain object-bottom",
    },
    {
      name: "허유진 강사",
      image: "/instructor-huh.png",
      icon: Presentation,
      desc: "경제캐스터와 방송 아나운서 경험을 바탕으로 정확한 전달력, 안정적인 발성, 상황에 맞는 태도를 코칭합니다.",
      highlights: ["경제 뉴스 스피치", "방송 아나운싱", "면접 진행 멘트", "전시해설 커뮤니케이션"],
      careers: [
        "팍스경제TV 경제캐스터",
        "현대모터스튜디오 전시해설 도슨트",
        "한국도로교통공단 공개 채용 필기전형 방송 아나운서",
        "아나운서 심화 과정 및 경제 전문 클래스 수료",
      ],
      imageClass: "object-contain object-bottom",
    },
  ];

  const reviews = [
    {
      text: "생기부에서 어떤 질문이 나올지 막막했는데, 답변 방향을 잡고 나니 면접장에서 훨씬 침착하게 말할 수 있었어요.",
      author: "대입 면접 준비 수강생",
    },
    {
      text: "회의에서 말끝을 흐리는 습관이 있었는데, 촬영 피드백을 받고 나서 전달력이 좋아졌다는 말을 들었습니다.",
      author: "강남구 직장인 수강생",
    },
    {
      text: "자기소개가 외운 티가 많이 났는데, 제 경험을 자연스럽게 말하는 방식으로 바뀌어서 면접 부담이 줄었어요.",
      author: "이직 면접 준비 수강생",
    },
    {
      text: "제시문을 읽고 바로 말로 정리하는 게 어려웠는데, 핵심을 잡는 순서를 배우고 답변이 훨씬 선명해졌습니다.",
      author: "수시면접 준비 수강생",
    },
    {
      text: "그룹수업에서 다른 분들 앞에서 말해보는 경험이 도움이 컸어요. 발표할 때 시선 처리도 훨씬 자연스러워졌습니다.",
      author: "성인 그룹수업 수강생",
    },
    {
      text: "면접 답변이 너무 길다는 피드백을 자주 받았는데, 지금은 결론부터 말하고 근거를 붙이는 방식이 익숙해졌어요.",
      author: "공기업 면접 준비 수강생",
    },
    {
      text: "목소리가 작아서 자신 없어 보인다는 말을 들었는데, 발성 수업 후 첫마디부터 힘 있게 시작할 수 있게 됐습니다.",
      author: "보이스 코칭 수강생",
    },
    {
      text: "중요한 보고 발표를 앞두고 1:1 수업을 들었는데, 자료 설명보다 메시지를 전달하는 법을 배운 게 가장 좋았습니다.",
      author: "프리미엄 성인 스피치 수강생",
    },
    {
      text: "학교별 질문을 같이 정리해주셔서 준비 시간이 줄었고, 마지막 모의면접에서 실제 긴장감까지 연습할 수 있었어요.",
      author: "입시 프리미엄 코칭 수강생",
    },
  ];

  const companyIntroSection = (
    <section id="회사소개" className="bg-[#f8fbff] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="text-sm font-extrabold text-sky-600">ABOUT DDAY</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#0e2442] sm:text-5xl">
            중요한 순간, 내 말이 나를 증명하도록
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            입시와 면접, 발표와 커뮤니케이션은 모두 말로 나를 보여주는
            과정입니다. 좋은 생각을 갖고 있어도 질문 의도를 이해하지 못하거나
            말의 순서를 잡지 못하면 실력은 충분히 전달되지 않습니다.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            디데이스피치는 방송 진행 경험과 스피치 교육 노하우를 바탕으로
            말의 내용, 목소리, 태도, 표현 방식을 함께 다룹니다. 학생에게는
            평가 기준에 맞는 면접 답변을, 성인에게는 일과 관계에서 신뢰를
            만드는 말하기를 훈련합니다.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-slate-100 sm:p-9">
          <div className="rounded-3xl bg-gradient-to-br from-[#0e2442] via-[#1f3c88] to-[#0f766e] p-7 text-white">
            <p className="text-sm font-extrabold text-sky-100">DDAY Speech Academy</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["입시", "전형별 면접"],
                ["성인", "발표·보이스"],
                ["개인", "1:1 프리미엄"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/14 p-5 shadow-sm backdrop-blur">
                  <p className="text-3xl font-extrabold">{value}</p>
                  <p className="mt-2 text-sm font-bold text-sky-50">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold leading-7 text-sky-50">
              단순한 말하기 팁이 아니라, 실제 질문과 발표 상황에서 바로 쓸 수
              있는 답변 구조와 전달 습관을 만듭니다.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["진단", "현재 말하기 습관과 긴장 포인트를 확인합니다."],
              ["구조화", "흩어진 생각을 평가자와 청중에게 맞게 정리합니다."],
              ["실습", "수업 시간 안에서 실제처럼 말하고 수정합니다."],
              ["완성", "답변과 발표가 입 밖으로 자연스럽게 나오게 합니다."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-[#fbfdff] p-5 shadow-lg shadow-slate-100">
                <p className="font-extrabold text-[#0e2442]">{title}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0e2442]">
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#홈" className="flex items-center gap-3" onClick={(event) => handleNavigation(event, "홈")}>
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0e2442] text-white shadow-lg shadow-slate-200">
              <MessageCircle size={22} />
            </span>
            <span className="text-lg font-extrabold tracking-normal sm:text-xl">디데이스피치</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(event) => handleNavigation(event, item)}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#0e2442]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={kakaoChatUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#0e2442] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-[#17375f] sm:inline-flex"
            >
              상담 신청
            </a>
            <button
              className="flex size-11 items-center justify-center rounded-full border border-slate-200 text-[#0e2442] lg:hidden"
              type="button"
              aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-100 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(event) => handleNavigation(event, item)}
                  className="rounded-2xl px-4 py-4 text-lg font-extrabold text-[#0e2442] transition hover:bg-sky-50"
                >
                  {item}
                </a>
              ))}
              <a
                href={kakaoChatUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#0e2442] px-5 py-4 text-lg font-extrabold text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                상담 신청
              </a>
            </div>
          </div>
        )}
      </nav>

      {currentPage === "company" ? (
        <>
          {companyIntroSection}
          <footer className="border-t border-slate-100 px-5 py-8 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
              <p className="font-bold text-[#0e2442]">디데이스피치</p>
              <p>Admissions interview and adult speech academy.</p>
            </div>
          </footer>
        </>
      ) : (
        <>
          <section id="home" className="relative px-5 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-28">
            <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-sky-50 to-transparent" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="dday-float-y mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
                  <Star size={16} className="fill-sky-100" />
                  입시 면접부터 성인 스피치까지
                </div>
                <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-normal text-[#0e2442] sm:text-6xl lg:text-7xl">
                  중요한 날,
                  <br />
                  말로 증명하는 사람
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                  디데이스피치는 입시 면접, 성인 그룹수업, 프리미엄 1:1
                  코칭으로 답변의 구조와 목소리, 태도까지 함께 완성합니다.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={kakaoChatUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e2442] px-7 py-4 text-base font-bold text-white shadow-xl shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-[#17375f]"
                  >
                    상담 신청
                    <ChevronRight size={18} />
                  </a>
                  <a
                    href="#프로그램"
                    onClick={(event) => handleNavigation(event, "프로그램")}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-[#0e2442] shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200"
                  >
                    프로그램 보기
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-10 top-8 hidden h-28 w-28 rounded-full bg-teal-100/60 blur-2xl lg:block" />
                <div className="dday-float-soft relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dff4ff] via-[#f8fbff] to-[#dff7ef] p-6 shadow-2xl shadow-slate-200/80">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] border border-white/80 bg-sky-50">
                    <img
                      src="/adult-speech-hero.png"
                      alt="성인 수강생이 발표 훈련을 하는 모습"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2442]/45 via-transparent to-white/5" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-sm font-bold text-[#0e2442] shadow-sm backdrop-blur">
                      면접과 발표를 위한 실전 스피치
                    </div>
                    <div className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-[#0e2442] text-white shadow-lg">
                      <Mic2 size={22} />
                    </div>
                    <div className="dday-slide-soft absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                      {heroStats.map(([label, text]) => (
                        <span
                          key={label}
                          className="rounded-2xl bg-white/88 px-3 py-3 text-center text-xs font-bold text-[#0e2442] shadow-sm backdrop-blur"
                        >
                          <b className="block text-base">{label}</b>
                          {text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 py-16 lg:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {strengths.map(({ title, text, icon: Icon, tone }) => (
                <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100">
                  <div className={`mb-5 flex size-[3.25rem] items-center justify-center rounded-2xl ${tone}`}>
                    <Icon size={25} />
                  </div>
                  <h2 className="text-xl font-extrabold">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-white px-5 pb-20 pt-2 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-100 bg-[#fbfdff] py-7 shadow-xl shadow-slate-100">
              <div className="mb-5 flex items-center justify-between gap-4 px-6 sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0e2442] text-white">
                    <Handshake size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-sky-600">PARTNERSHIP</p>
                    <h2 className="text-xl font-extrabold text-[#0e2442]">연계 기관 · 기업</h2>
                  </div>
                </div>
                <p className="hidden max-w-md text-sm font-semibold leading-6 text-slate-500 md:block">
                  면접 · 발표 · 커뮤니케이션 교육으로 이어지는 다양한 협업
                </p>
              </div>
              <div className="dday-marquee">
                <div className="dday-marquee-track dday-logo-track flex w-max items-center gap-4">
                  {[...partnerLabels, ...partnerLabels].map(([mark, label], index) => (
                    <div
                      key={`${mark}-${index}`}
                      className="dday-logo-card flex h-20 min-w-48 items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 shadow-lg shadow-slate-100"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 text-sm font-black text-[#0e2442]">
                        {mark.slice(0, 2)}
                      </span>
                      <span>
                        <b className="block text-lg font-black tracking-normal text-[#0e2442]">
                          {mark}
                        </b>
                        <span className="text-sm font-bold text-slate-500">{label}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="프로그램" className="bg-[#f8fbff] px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <span className="text-sm font-extrabold text-sky-600">PROGRAM</span>
                  <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">프로그램</h2>
                </div>
                <p className="max-w-md text-base leading-7 text-slate-500">
                  목적이 다르면 수업도 달라야 합니다. 디데이스피치는 입시와
                  성인 말하기를 네 가지 핵심 과정으로 나누어 운영합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {programCategories.map(({ title, desc, tags, icon: Icon }) => (
                  <article
                    key={title}
                    className="group flex min-h-[23rem] flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-[#0e2442] group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-extrabold leading-tight">{title}</h3>
                    <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{desc}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#f3f7fb] px-3 py-2 text-xs font-bold text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="수업소개" className="px-5 py-24 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <span className="text-sm font-extrabold uppercase text-sky-600">Class Design</span>
                <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                  수업은 답변을 외우는 시간이 아닙니다
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  디데이스피치는 질문의 의도를 읽고, 생각을 정리하고,
                  자신에게 맞는 말의 속도와 목소리로 표현하는 과정을 함께
                  훈련합니다. 그래서 수업의 끝은 원고가 아니라 실제 발화입니다.
                </p>
                <div className="mt-9 grid gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl bg-[#fbfdff] p-4 shadow-lg shadow-slate-100">
                      <CheckCircle2 className="shrink-0 text-teal-500" size={22} />
                      <span className="font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {processSteps.map(([num, title, text]) => (
                  <article key={title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100">
                    <span className="flex size-12 items-center justify-center rounded-full bg-[#0e2442] text-sm font-black text-white">
                      {num}
                    </span>
                    <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f8fbff] px-5 py-24 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0e2442] via-[#17375f] to-[#7ed4cf] p-6 shadow-2xl shadow-slate-200">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/15 text-white">
                  <img
                    src="/adult-classroom-speech.png"
                    alt="발표 수업을 준비하는 밝은 스피치 강의실"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2442]/80 via-[#0e2442]/22 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-7">
                    <span className="w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur">
                      실전 중심 수업
                    </span>
                    <div>
                      <p className="max-w-sm text-3xl font-extrabold leading-tight">
                        말해보고, 다시 보고, 바로 고치는 스피치 수업
                      </p>
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {["답변", "목소리", "태도"].map((item) => (
                          <span key={item} className="rounded-2xl bg-white/18 py-3 text-center text-sm font-bold shadow-sm backdrop-blur">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-sm font-extrabold text-sky-600">WHO NEEDS THIS</span>
                <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                  이런 분들에게 필요합니다
                </h2>
                <div className="mt-8 grid gap-4">
                  {fitCards.map((item) => (
                    <div key={item} className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-slate-100">
                      <Sparkles className="mt-1 shrink-0 text-[#f59e0b]" size={22} />
                      <p className="text-base font-bold leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="입시면접" className="px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12">
                <span className="text-sm font-extrabold text-sky-600">DETAIL PROGRAM</span>
                <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">과정별 상세 안내</h2>
              </div>

              <div className="grid gap-8">
                {programDetails.map(({ id, eyebrow, title, summary, who, curriculum, result, icon: Icon, accent }) => (
                  <article
                    key={title}
                    id={id === "그룹수업" ? "그룹수업" : undefined}
                    className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-100"
                  >
                    <div className={`bg-gradient-to-r ${accent} p-7 text-white sm:p-9`}>
                      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                          <span className="text-sm font-extrabold uppercase text-sky-100">{eyebrow}</span>
                          <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h3>
                        </div>
                        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white/16">
                          <Icon size={32} />
                        </div>
                      </div>
                      <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-white/90">{summary}</p>
                    </div>

                    <div className="grid gap-6 p-7 sm:p-9 lg:grid-cols-3">
                      <div>
                        <p className="text-sm font-extrabold text-[#f59e0b]">이런 분께 추천</p>
                        <div className="mt-4 grid gap-3">
                          {who.map((item) => (
                            <p key={item} className="rounded-2xl bg-[#fbfdff] p-4 text-sm font-bold leading-6 text-slate-700">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-[#f59e0b]">수업 내용</p>
                        <div className="mt-4 grid gap-3">
                          {curriculum.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 shrink-0 text-teal-500" size={19} />
                              <span className="text-sm font-bold leading-6 text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-3xl bg-[#f8fbff] p-6">
                        <p className="text-sm font-extrabold text-[#f59e0b]">수업 후 변화</p>
                        <p className="mt-4 text-lg font-extrabold leading-8 text-[#0e2442]">{result}</p>
                        <a
                          href={kakaoChatUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#0e2442] px-5 py-3 text-sm font-extrabold text-white"
                        >
                          상담 문의
                          <ChevronRight size={17} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="강사진" className="bg-[#f8fbff] px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12">
                <span className="text-sm font-extrabold text-sky-600">MENTOR</span>
                <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">스피치 멘토 소개</h2>
              </div>

              <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-100">
                  <div className="relative flex min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fff7ed] via-white to-[#e5f8f4] p-7">
                    <div className="absolute left-0 top-12 h-60 w-4 rounded-r-full bg-[#1f3c88]" />
                    <div className="absolute bottom-24 left-8 right-8 h-52 rounded-[1.4rem] bg-[#f59e0b]" />
                    <div className="relative z-10 flex w-full flex-col justify-between">
                      <div>
                        <p className="text-sm font-extrabold text-[#f59e0b]">Head Mentor</p>
                        <h3 className="mt-4 text-3xl font-extrabold text-[#0e2442]">장유리나 대표</h3>
                      </div>
                      <div className="relative mx-auto h-72 w-56 overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl sm:h-80 sm:w-64">
                        <img src="/instructor-jang.png" alt="장유리나 대표" className="h-full w-full object-cover object-top" />
                      </div>
                      <div className="rounded-3xl bg-white/92 p-5 shadow-xl backdrop-blur">
                        <p className="text-lg font-extrabold text-[#0e2442]">실전에서 통하는 스피치</p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                          방송·행사·강의 경력을 바탕으로 말의 구조와 목소리를 또렷하고 자연스럽게 다듬습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-slate-100 sm:p-9 lg:p-10">
                  <div className="inline-flex rounded-xl bg-[#f59e0b] px-4 py-2 text-sm font-black uppercase text-white shadow-lg shadow-amber-100">
                    History
                  </div>
                  <blockquote className="mt-5 text-2xl font-extrabold leading-relaxed text-[#0e2442] sm:text-3xl">
                    “실전에서 통하는 스피치, 방송국 아나운서가 책임집니다”
                  </blockquote>
                  <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
                    방송·행사·강의 총 10년 경력의 실전형 스피치 전문가가
                    입시 면접부터 성인 발표와 자기소개까지 목표에 맞춰 코칭합니다.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {careers.map((career) => (
                      <div key={career} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#fbfdff] p-4 shadow-sm">
                        <Award className="mt-0.5 shrink-0 text-[#f59e0b]" size={19} />
                        <span className="text-sm font-bold leading-6 text-slate-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-7 lg:grid-cols-2">
                {instructors.map(({ name, image, icon: Icon, desc, highlights, careers: instructorCareers, imageClass }) => (
                  <div key={name} className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100 sm:p-9">
                    <div className="mb-7 h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50 to-amber-50 shadow-lg shadow-slate-100 sm:h-96 lg:h-[26rem]">
                      <img src={image} alt={name} className={`h-full w-full ${imageClass}`} />
                    </div>
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                      <div>
                        <span className="text-sm font-extrabold text-sky-600">INSTRUCTOR</span>
                        <h3 className="mt-3 text-3xl font-extrabold text-[#0e2442]">{name}</h3>
                        <p className="mt-4 text-base font-semibold leading-7 text-slate-600">{desc}</p>
                      </div>
                      <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-amber-50 text-[#f59e0b]">
                        <Icon size={38} />
                      </div>
                    </div>

                    <div className="mt-8 rounded-3xl bg-[#fbfdff] p-6 shadow-lg shadow-slate-100">
                      <p className="text-sm font-extrabold text-[#f59e0b]">주요 강의 분야</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {highlights.map((item) => (
                          <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 rounded-3xl bg-[#fbfdff] p-6 shadow-lg shadow-slate-100">
                      <p className="text-sm font-extrabold text-[#f59e0b]">주요 경력</p>
                      <div className="mt-5 grid gap-3">
                        {instructorCareers.map((career) => (
                          <div key={career} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-teal-500" size={19} />
                            <span className="text-sm font-bold leading-6 text-slate-700">{career}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="수강후기" className="px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <span className="text-sm font-extrabold text-sky-600">REVIEWS</span>
                <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">수강생 후기</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {reviews.map((review) => (
                  <article key={review.author} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100">
                    <Quote className="mb-6 text-sky-500" size={32} />
                    <p className="text-lg font-bold leading-8 text-[#0e2442]">“{review.text}”</p>
                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-400">
                      <Star size={16} className="fill-amber-300 text-amber-300" />
                      {review.author}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="상담예약" className="bg-[#f8fbff] px-5 py-24 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] bg-[#0e2442] p-8 text-white shadow-2xl shadow-slate-200 sm:p-10 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
                  <CalendarCheck size={17} />
                  상담 예약
                </span>
                <h2 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl">
                  필요한 수업부터 함께 정해볼까요?
                </h2>
                <p className="mt-5 text-lg leading-8 text-sky-100">
                  입시 면접, 성인 그룹수업, 프리미엄 1:1 수업 중 현재 목표에
                  맞는 과정을 상담으로 안내드립니다.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {["카카오 상담", "프로그램 문의", "전화 상담"].map((label, index) => (
                    <a
                      key={label}
                      href={index === 2 ? phoneUrl : kakaoChatUrl}
                      target={index === 2 ? undefined : "_blank"}
                      rel={index === 2 ? undefined : "noreferrer"}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-extrabold transition hover:-translate-y-0.5 ${
                        index === 0 ? "bg-white text-[#0e2442]" : "border border-white/20 bg-white/10 text-white"
                      }`}
                    >
                      {index === 2 && <Phone size={17} />}
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-100 sm:p-10">
                <h3 className="text-3xl font-extrabold">오시는 길</h3>
                <div className="mt-7 space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 shrink-0 text-sky-600" size={22} />
                    <div>
                      <p className="font-extrabold">주소</p>
                      <p className="mt-1 text-slate-600">선릉로 704 12층 1219호 디데이스피치</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-1 shrink-0 text-teal-600" size={22} />
                    <div>
                      <p className="font-extrabold">운영시간</p>
                      <p className="mt-1 text-slate-600">평일 13:00 - 20:00 / 토 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://naver.me/xk1KuIPu"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative mt-8 block aspect-[16/9] overflow-hidden rounded-3xl bg-[url('/naver-map.png')] bg-cover bg-center text-center transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-100"
                  aria-label="네이버지도에서 디데이스피치 위치 보기"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2442]/35 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl bg-white/92 px-4 py-3 text-left shadow-lg backdrop-blur">
                    <div>
                      <p className="text-sm font-extrabold text-[#0e2442]">디데이스피치</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">네이버지도에서 길찾기</p>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0e2442] text-white">
                      <MapPin size={20} />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <footer className="border-t border-slate-100 px-5 py-8 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
              <p className="font-bold text-[#0e2442]">디데이스피치</p>
              <p>Admissions interview and adult speech academy.</p>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}
