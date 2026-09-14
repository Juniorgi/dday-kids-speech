import { useEffect, useState } from "react";
import {
  Award,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  Menu,
  MessageCircle,
  Mic2,
  Phone,
  Quote,
  Sparkles,
  Star,
  Target,
  UsersRound,
} from "lucide-react";

export default function App() {
  const kakaoChatUrl = "https://open.kakao.com/o/smjiKjui";
  const phoneUrl = "tel:01022297378";
  const navItems = ["홈", "회사소개", "프로그램", "수업소개", "강사진", "수강후기", "상담예약"];
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

  const strengths = [
    { title: "1:1 맞춤 코칭", icon: UsersRound, tone: "bg-sky-50 text-sky-600" },
    { title: "실전 발표 훈련", icon: Target, tone: "bg-teal-50 text-teal-600" },
    { title: "체계적인 커리큘럼", icon: BookOpenCheck, tone: "bg-blue-50 text-blue-700" },
    { title: "전달력 향상", icon: Sparkles, tone: "bg-amber-50 text-amber-600" },
  ];

  const circles = [
    { title: "프레젠테이션", text: "핵심을 설득력 있게 전달하는 발표" },
    { title: "회의·토론", text: "생각을 구조화해 명확하게 표현" },
    { title: "면접·자기소개", text: "첫인상을 만드는 자신 있는 답변" },
  ];

  const programCategories = [
    {
      title: "성인 스피치",
      desc: "말의 구조, 목소리, 태도를 함께 다듬어 전달력을 높이는 성인 스피치 프로그램",
      tags: ["발표 자신감", "보이스", "표현력 코칭"],
      icon: Mic2,
    },
    {
      title: "면접·자기소개",
      desc: "취업, 이직, 승진 면접에서 나를 명확하게 설명하는 실전 대비 수업",
      tags: ["답변 구조", "자기소개", "모의면접"],
      icon: Award,
    },
    {
      title: "기업·기관 특강",
      desc: "조직의 목적에 맞춰 발표, 커뮤니케이션, 사회 진행 역량을 코칭하는 맞춤형 특강",
      tags: ["기업교육", "프레젠테이션", "진행 코칭"],
      icon: CalendarCheck,
    },
  ];

  const programs = [
    {
      title: "발표 스피치",
      desc: "회의, 보고, 제안 발표를 위한 자신감 향상 프로그램",
      tags: ["발표자신감", "발음·발성", "시선·자세"],
      icon: Mic2,
    },
    {
      title: "면접 스피치",
      desc: "취업·이직·승진 면접을 위한 실전 대비 프로그램",
      tags: ["자기소개", "질문응답", "모의면접"],
      icon: Award,
    },
    {
      title: "비즈니스 커뮤니케이션",
      desc: "생각을 정리하고 논리적으로 말하는 힘을 키우는 프로그램",
      tags: ["생각정리", "논리표현", "회의"],
      icon: MessageCircle,
    },
    {
      title: "보이스·발성 클래스",
      desc: "목소리의 힘과 말의 인상을 바꾸는 발성·발음 수업",
      tags: ["발성", "발음", "호흡"],
      icon: BookOpenCheck,
    },
  ];

  const features = [
    "소수정예 수업",
    "실전 중심 훈련",
    "단계별 커리큘럼",
    "피드백 & 코칭",
    "따뜻한 교육 환경",
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

  const leeInstructorHighlights = [
    "공감 대화법",
    "성인 발표 자신감 코칭",
    "면접 스피치 컨설팅",
    "진로·커뮤니케이션 강의",
  ];

  const leeLectures = [
    "입트였DAY - 자신감 터지는 말하기의 시작",
    "Say It Smart: 면접 스피치 인사이트",
    "진로 토크: 말로 그리는 나의 미래",
  ];

  const moonInstructorHighlights = [
    "아나운서 스피치",
    "방송·행사 진행",
    "현장형 말하기",
    "인성교육 커뮤니케이션",
  ];

  const moonCareers = [
    "現 디데이스피치 아카데미 대표강사",
    "前 서울경제TV 아나운서",
    "前 NBN TV, 팍스경제TV 아나운서",
    "前 경기남부경찰청 직무 교육 강사",
    "前 경기남부경찰청 인성교육 강사",
    "방송·행사·강의 총 10년 방송 경력",
  ];

  const ohInstructorHighlights = [
    "경제 문해력",
    "투자·자금관리",
    "생활 경제 언어",
    "경제 발표 코칭",
  ];

  const ohCareers = [
    "이데일리 주식투자 전문가",
    "증권투자권유대행인",
    "투자·자금관리 교육 멘토",
    "경제 문해력 클래스 진행",
    "생활 경제 개념 스토리텔링 강의",
  ];

  const huhInstructorHighlights = [
    "경제 뉴스 스피치",
    "방송 아나운싱",
    "면접 진행·안내 멘트",
    "전시해설 커뮤니케이션",
  ];

  const huhCareers = [
    "팍스경제TV 경제캐스터",
    "현대모터스튜디오 전시해설 도슨트",
    "한국도로교통공단 공개 채용 필기전형 방송 아나운서",
    "한국남동발전 공개 채용 필기전형 방송 아나운서",
    "한국중부발전 공개 채용 필기전형 방송 아나운서",
    "아나운서 심화 과정 및 경제 전문 클래스 수료",
  ];

  const reviews = [
    {
      text: "회의 발표 때마다 긴장했는데, 이제는 핵심을 정리해서 차분하게 말할 수 있게 됐어요.",
      author: "강남구 직장인 수강생",
    },
    {
      text: "자기소개와 답변 흐름이 자연스러워져서 면접장에서 훨씬 안정적으로 말할 수 있었습니다.",
      author: "이직 면접 준비 수강생",
    },
    {
      text: "목소리가 작고 말끝이 흐렸는데, 발성 훈련 후 말의 인상이 또렷해졌다는 피드백을 받았어요.",
      author: "압구정동 성인 수강생",
    },
  ];

  const companyIntroSection = (
    <section id="회사소개" className="bg-[#f8fbff] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="text-sm font-extrabold text-sky-600">
            ABOUT DDAY
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#0e2442] sm:text-5xl">
            말의 구조를 세우고, 나답게 전달하는 힘
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            일과 관계의 많은 순간은 결국 말로 결정됩니다. 회의에서 의견을
            전하고, 면접에서 나를 설명하고, 발표에서 상대를 설득하려면
            단순히 말을 많이 하는 것이 아니라 핵심을 구조화해 정확하게
            전달하는 훈련이 필요합니다.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            디데이스피치는 방송 진행 경험과 스피치 교육 노하우를 바탕으로
            성인 수강생의 말 습관, 목소리, 답변 구조를 진단하고 실제 상황에서
            바로 써먹을 수 있는 표현력으로 연결합니다.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-slate-100 sm:p-9">
          <div className="rounded-3xl bg-gradient-to-br from-[#0e2442] via-[#17375f] to-[#7ed4cf] p-7 text-white">
            <p className="text-sm font-extrabold text-sky-100">
              DDAY Speech Coaching
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["1:1", "맞춤 진단"],
                ["실전", "발표·면접 훈련"],
                ["코칭", "목소리·태도 피드백"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/14 p-5 shadow-sm backdrop-blur"
                >
                  <p className="text-3xl font-extrabold">{value}</p>
                  <p className="mt-2 text-sm font-bold text-sky-50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold leading-7 text-sky-50">
              말의 내용, 목소리, 표정, 자세를 함께 다루어 직장 발표와 면접,
              사회 진행, 대인 커뮤니케이션 상황에서 신뢰감 있게 말하도록
              돕습니다.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["구조화", "흩어진 생각을 핵심 메시지로 정리합니다."],
              ["전달력", "목소리와 말의 속도, 시선 처리를 다듬습니다."],
              ["실전 답변", "면접과 질의응답 상황에 맞는 답변을 훈련합니다."],
              ["자신감", "긴장 상황에서도 안정적으로 말하는 힘을 기릅니다."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-[#fbfdff] p-5 shadow-lg shadow-slate-100"
              >
                <p className="font-extrabold text-[#0e2442]">{title}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                  {text}
                </p>
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
          <a
            href="#홈"
            className="flex items-center gap-3"
            onClick={(event) => handleNavigation(event, "홈")}
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0e2442] text-white shadow-lg shadow-slate-200">
              <MessageCircle size={22} />
            </span>
            <span className="text-lg font-extrabold tracking-normal sm:text-xl">
              디데이스피치
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
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
              체험수업 신청
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
                체험수업 신청
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
              <p>Premium kids speech class.</p>
            </div>
          </footer>
        </>
      ) : (
        <>
      <section id="home" className="relative px-5 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-sky-50 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <Star size={16} className="fill-sky-100" />
              발표 · 면접 · 보이스 · 커뮤니케이션의 시작
            </div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-normal text-[#0e2442] sm:text-6xl lg:text-7xl">
              나를 신뢰감 있게 말하는 사람
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              성인 스피치 전문 클래스, 말의 구조와 목소리, 전달력을
              함께 키워드립니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={kakaoChatUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e2442] px-7 py-4 text-base font-bold text-white shadow-xl shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-[#17375f]"
              >
                체험수업 신청
                <ChevronRight size={18} />
              </a>
              <a
                href={kakaoChatUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-[#0e2442] shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200"
              >
                상담 예약하기
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-8 hidden h-28 w-28 rounded-full bg-teal-100/60 blur-2xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dff4ff] via-[#f8fbff] to-[#dff7ef] p-6 shadow-2xl shadow-slate-200/80">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] border border-white/80 bg-sky-50">
                <img
                  src="/adult-speech-hero.png"
                  alt="성인 수강생이 발표 훈련을 하는 모습"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2442]/35 via-transparent to-white/5" />
                <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-sm font-bold text-[#0e2442] shadow-sm backdrop-blur">
                  발표 전달력을 키우는 스피치 클래스
                </div>
                <div className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-[#0e2442] text-white shadow-lg">
                  <Mic2 size={22} />
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                  {["Voice", "Mind", "Stage"].map((label) => (
                    <span
                      key={label}
                      className="rounded-2xl bg-white/88 px-3 py-3 text-center text-xs font-bold text-[#0e2442] shadow-sm backdrop-blur"
                    >
                      {label}
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
          {strengths.map(({ title, icon: Icon, tone }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100"
            >
              <div className={`mb-5 flex size-[3.25rem] items-center justify-center rounded-2xl ${tone}`}>
                <Icon size={25} />
              </div>
              <h2 className="text-xl font-extrabold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                현재 말하기 습관을 세심하게 진단하고 목표에 맞춰 코칭합니다.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="수업소개" className="bg-[#f8fbff] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-extrabold uppercase text-sky-600">
              Speaking Matters
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              왜 말하기 능력이 중요할까요?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              말하기는 발표 한 번을 잘하는 기술을 넘어, 일을 설득하고 관계를
              만드는 기본 역량입니다. 안정적인 발성, 시선, 태도, 논리 표현을
              익히면 회의와 면접, 발표 상황에서 더 단단한 신뢰감을 만들 수
              있습니다.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {circles.map((item, index) => (
              <article
                key={item.title}
                className="flex aspect-square flex-col items-center justify-center rounded-full border border-white bg-white p-7 text-center shadow-xl shadow-slate-100"
              >
                <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-[#0e2442] text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="프로그램" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-extrabold text-sky-600">PROGRAM</span>
              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">프로그램</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-500">
              발표, 면접, 보이스, 기업 특강까지 성인의 목표에 맞춰
              구성했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programCategories.map(({ title, desc, tags, icon: Icon }) => (
              <article
                key={title}
                className="group flex min-h-[22rem] flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-[#0e2442] group-hover:text-white">
                  <Icon size={30} />
                </div>
                <h3 className="text-3xl font-extrabold">{title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{desc}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f3f7fb] px-3 py-2 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-extrabold text-sky-600">
                SPEECH CLASS
              </span>
              <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                프로그램 소개
              </h3>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-500">
              발표, 면접, 커뮤니케이션, 보이스까지 목표에 맞춘 클래스로
              구성했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {programs.map(({ title, desc, tags, icon: Icon }) => (
              <article
                key={title}
                className="group flex min-h-[21.5rem] flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-[#0e2442] group-hover:text-white">
                  <Icon size={26} />
                </div>
                <h3 className="text-2xl font-extrabold">{title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  {desc}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f3f7fb] px-3 py-2 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-sm font-extrabold text-sky-600">CLASS POINTS</span>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">수업 특징</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-slate-100"
                >
                  <CheckCircle2 className="shrink-0 text-teal-500" size={22} />
                  <span className="font-bold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

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
                  교실 이미지
                </span>
                <div>
                  <p className="max-w-sm text-3xl font-extrabold leading-tight">
                    편안하게 말하고, 정확하게 전달하는 수업 공간
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["발성", "자세", "피드백"].map((item) => (
                      <span
                        key={item}
                        className="rounded-2xl bg-white/18 py-3 text-center text-sm font-bold shadow-sm backdrop-blur"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="강사진" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="text-sm font-extrabold text-sky-600">MENTOR</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              스피치 멘토 소개
            </h2>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-white p-5 shadow-2xl shadow-slate-100">
              <div className="relative flex min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fff7ed] via-white to-[#e5f8f4] p-7">
                <div className="absolute left-0 top-12 h-60 w-4 rounded-r-full bg-[#1f3c88]" />
                <div className="absolute bottom-24 left-8 right-8 h-52 rounded-[1.4rem] bg-[#f59e0b]" />
                <div className="relative z-10 flex w-full flex-col justify-between">
                  <div>
                    <p className="text-sm font-extrabold text-[#f59e0b]">
                      Speech Mentor
                    </p>
                    <h3 className="mt-4 text-3xl font-extrabold text-[#0e2442]">
                      장유리나 대표
                    </h3>
                  </div>
                  <div className="relative mx-auto h-72 w-56 overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl sm:h-80 sm:w-64">
                    <img
                      src="/instructor-jang.png"
                      alt="장유리나 대표"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="rounded-3xl bg-white/92 p-5 shadow-xl backdrop-blur">
                    <p className="text-lg font-extrabold text-[#0e2442]">
                      실전에서 통하는 스피치
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                      방송·행사·강의 경력을 바탕으로 말의 구조와 목소리를
                      또렷하고 자연스럽게 다듬습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-slate-100 sm:p-9 lg:p-10">
              <div className="inline-flex rounded-xl bg-[#f59e0b] px-4 py-2 text-sm font-black uppercase text-white shadow-lg shadow-amber-100">
                Slogan
              </div>
              <blockquote className="mt-5 text-2xl font-extrabold leading-relaxed text-[#0e2442] sm:text-3xl">
                “실전에서 통하는 스피치, 방송국 아나운서가 책임집니다”
              </blockquote>
              <p className="mt-5 text-lg font-bold leading-8 text-slate-600">
                방송·행사·강의 총 10년 경력의 실전형 스피치 전문가가
                말하기의 기본기부터 발표 태도, 면접 답변, 자기소개까지
                수강생의 목표와 상황에 맞춰 코칭합니다.
              </p>

              <div className="mt-10 inline-flex rounded-xl bg-[#f59e0b] px-4 py-2 text-sm font-black uppercase text-white shadow-lg shadow-amber-100">
                History
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {careers.map((career) => (
                  <div
                    key={career}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#fbfdff] p-4 shadow-sm"
                  >
                    <Award className="mt-0.5 shrink-0 text-[#f59e0b]" size={19} />
                    <span className="text-sm font-bold leading-6 text-slate-700">
                      {career}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-100 bg-[#fbfdff] p-7 shadow-xl shadow-slate-100 sm:p-9">
              <div className="mb-7 h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50 to-amber-50 shadow-lg shadow-slate-100 sm:h-96 lg:h-[26rem]">
                <img
                  src="/instructor-moon-confident.png"
                  alt="문정은 강사"
                  className="h-full w-full translate-y-10 object-contain object-bottom"
                />
              </div>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <span className="text-sm font-extrabold text-sky-600">
                    INSTRUCTOR
                  </span>
                  <h3 className="mt-3 text-3xl font-extrabold text-[#0e2442]">
                    문정은 강사
                  </h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                    “아나운서처럼 말하라, 현장에선 통한다”는 기준으로
                    방송 현장의 전달력과 실전 감각을 성인 발표와 면접
                    수업에 연결합니다.
                  </p>
                </div>
                <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-amber-50 text-[#f59e0b]">
                  <Mic2 size={38} />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  주요 강의 분야
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {moonInstructorHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f3f7fb] px-4 py-2 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-white p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  주요 경력
                </p>
                <div className="mt-5 grid gap-3">
                  {moonCareers.map((career) => (
                    <div key={career} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-teal-500"
                        size={19}
                      />
                      <span className="text-sm font-bold leading-6 text-slate-700">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100 sm:p-9">
              <div className="mb-7 h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50 to-amber-50 shadow-lg shadow-slate-100 sm:h-96 lg:h-[26rem]">
                <img
                  src="/instructor-oh.png"
                  alt="오진승 강사"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <span className="text-sm font-extrabold text-sky-600">
                    INSTRUCTOR
                  </span>
                  <h3 className="mt-3 text-3xl font-extrabold text-[#0e2442]">
                    오진승 강사
                  </h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                    투자와 자금관리 개념을 생활 속 경제 언어로 쉽게 풀어내는
                    머니쌤으로, 경제 개념을 말로 이해하고 표현하도록
                    돕습니다.
                  </p>
                </div>
                <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-700">
                  <BookOpenCheck size={38} />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-[#fbfdff] p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  주요 강의 분야
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ohInstructorHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-[#fbfdff] p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  주요 경력
                </p>
                <div className="mt-5 grid gap-3">
                  {ohCareers.map((career) => (
                    <div key={career} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-teal-500"
                        size={19}
                      />
                      <span className="text-sm font-bold leading-6 text-slate-700">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-[#fbfdff] p-7 shadow-xl shadow-slate-100 sm:p-9">
              <div className="mb-7 h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50 to-amber-50 shadow-lg shadow-slate-100 sm:h-96 lg:h-[26rem]">
                <img
                  src="/instructor-lee.png"
                  alt="이채범 강사"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <span className="text-sm font-extrabold text-sky-600">
                    INSTRUCTOR
                  </span>
                  <h3 className="mt-3 text-3xl font-extrabold text-[#0e2442]">
                    이채범 강사
                  </h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                    공감 대화법을 바탕으로 말하기 상황을 편안하게
                    받아들이고, 자기 생각을 자신 있게 표현할 수 있도록 돕는
                    커뮤니케이션 강사입니다.
                  </p>
                </div>
                <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-sky-50 text-sky-700">
                  <MessageCircle size={38} />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  주요 강의 분야
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {leeInstructorHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f3f7fb] px-4 py-2 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-white p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  대표 강의
                </p>
                <div className="mt-5 grid gap-3">
                  {leeLectures.map((lecture) => (
                    <div key={lecture} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-teal-500"
                        size={19}
                      />
                      <span className="text-sm font-bold leading-6 text-slate-700">
                        {lecture}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100 sm:p-9">
              <div className="mb-7 h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50 to-amber-50 shadow-lg shadow-slate-100 sm:h-96 lg:h-[26rem]">
                <img
                  src="/instructor-huh.png"
                  alt="허유진 강사"
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <span className="text-sm font-extrabold text-sky-600">
                    INSTRUCTOR
                  </span>
                  <h3 className="mt-3 text-3xl font-extrabold text-[#0e2442]">
                    허유진 강사
                  </h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                    경제캐스터와 방송 아나운서 경험을 바탕으로 정확한 전달력,
                    안정적인 발성, 상황에 맞는 말하기 태도를 코칭합니다.
                  </p>
                </div>
                <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-amber-50 text-[#f59e0b]">
                  <Mic2 size={38} />
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-[#fbfdff] p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  주요 강의 분야
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {huhInstructorHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-[#fbfdff] p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-extrabold text-[#f59e0b]">
                  주요 경력
                </p>
                <div className="mt-5 grid gap-3">
                  {huhCareers.map((career) => (
                    <div key={career} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-teal-500"
                        size={19}
                      />
                      <span className="text-sm font-bold leading-6 text-slate-700">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="수강후기" className="bg-[#f8fbff] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-extrabold text-sky-600">REVIEWS</span>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              수강생 & 학부모 후기
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.author}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100"
              >
                <Quote className="mb-6 text-sky-500" size={32} />
                <p className="text-lg font-bold leading-8 text-[#0e2442]">
                  “{review.text}”
                </p>
                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-400">
                  <Star size={16} className="fill-amber-300 text-amber-300" />
                  {review.author}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="상담예약" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-[#0e2442] p-8 text-white shadow-2xl shadow-slate-200 sm:p-10 lg:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
              <CalendarCheck size={17} />
              상담 예약
            </span>
            <h2 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl">
              무료 상담 & 체험수업 신청
            </h2>
            <p className="mt-5 text-lg leading-8 text-sky-100">
              말하기 실력, 지금 바로 시작하세요.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {["체험수업 신청", "상담 예약하기", "전화 상담"].map((label, index) => (
                <a
                  key={label}
                  href={index === 2 ? phoneUrl : kakaoChatUrl}
                  target={index === 2 ? undefined : "_blank"}
                  rel={index === 2 ? undefined : "noreferrer"}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-extrabold transition hover:-translate-y-0.5 ${
                    index === 0
                      ? "bg-white text-[#0e2442]"
                      : "border border-white/20 bg-white/10 text-white"
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
                  <p className="mt-1 text-slate-600">
                    선릉로 704 12층 1221호 디데이스피치
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-1 shrink-0 text-teal-600" size={22} />
                <div>
                  <p className="font-extrabold">운영시간</p>
                  <p className="mt-1 text-slate-600">
                    평일 13:00 - 20:00 / 토 10:00 - 16:00
                  </p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-sky-50 to-teal-50 opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2442]/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl bg-white/92 px-4 py-3 text-left shadow-lg backdrop-blur">
                <div>
                  <p className="text-sm font-extrabold text-[#0e2442]">
                    디데이스피치
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    네이버지도에서 길찾기
                  </p>
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
          <p>Premium kids speech class.</p>
        </div>
      </footer>
        </>
      )}
    </main>
  );
}
