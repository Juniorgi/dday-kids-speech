import {
  Award,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  GraduationCap,
  HeartHandshake,
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
  const navItems = ["홈", "프로그램", "수업소개", "강사진", "수강후기", "상담예약"];

  const strengths = [
    { title: "소수정예 수업", icon: UsersRound, tone: "bg-sky-50 text-sky-600" },
    { title: "실전 중심 교육", icon: Target, tone: "bg-teal-50 text-teal-600" },
    { title: "체계적인 커리큘럼", icon: BookOpenCheck, tone: "bg-blue-50 text-blue-700" },
    { title: "자신감 향상", icon: Sparkles, tone: "bg-amber-50 text-amber-600" },
  ];

  const circles = [
    { title: "발표 수업", text: "또렷한 목소리와 안정적인 자세" },
    { title: "수행평가·토론", text: "생각을 정리해 논리적으로 표현" },
    { title: "면접·자기소개", text: "첫인상을 만드는 자신 있는 답변" },
  ];

  const programs = [
    {
      title: "키즈 발표 스피치",
      desc: "발표를 어려워하는 아이들을 위한 자신감 향상 프로그램",
      tags: ["발표자신감", "발음·발성", "시선·자세"],
      icon: Mic2,
    },
    {
      title: "키즈 면접 클래스",
      desc: "사립초·국제학교·영재원 면접을 위한 실전 대비 프로그램",
      tags: ["자기소개", "질문응답", "모의면접"],
      icon: Award,
    },
    {
      title: "표현력·토론 클래스",
      desc: "생각을 정리하고 논리적으로 말하는 힘을 키우는 프로그램",
      tags: ["생각정리", "논리표현", "토론"],
      icon: MessageCircle,
    },
    {
      title: "스토리텔링 클래스",
      desc: "상상력과 창의력을 말로 표현하는 수업",
      tags: ["스토리구성", "창의표현", "독서연계"],
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
    "경제방송 진행 경력",
    "스피치·커뮤니케이션 전문 강사",
    "한국어교육대학원 석사",
    "다수 기업·기관 스피치 출강",
  ];

  const reviews = [
    "발표를 너무 무서워했는데, 이제는 친구들 앞에서도 자신 있게 말해요.",
    "자기소개가 자연스러워지고 목소리도 커져서 면접에서 좋은 결과가 있었어요.",
    "수업이 재미있어서 스스로 발표 연습을 하게 되었어요.",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0e2442]">
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0e2442] text-white shadow-lg shadow-slate-200">
              <MessageCircle size={22} />
            </span>
            <span className="text-lg font-extrabold tracking-normal sm:text-xl">
              디데이 키즈스피치
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#0e2442]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#상담예약"
              className="hidden rounded-full bg-[#0e2442] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-[#17375f] sm:inline-flex"
            >
              체험수업 신청
            </a>
            <button
              className="flex size-11 items-center justify-center rounded-full border border-slate-200 text-[#0e2442] lg:hidden"
              aria-label="메뉴 열기"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative px-5 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-sky-50 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <Star size={16} className="fill-sky-100" />
              발표 · 면접 · 자기소개 · 표현력의 첫 시작
            </div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-normal text-[#0e2442] sm:text-6xl lg:text-7xl">
              생각을 자신 있게 말하는 아이
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              대치동 키즈 스피치 전문 클래스, 아이의 말하기 실력과 자신감을
              키워줍니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#상담예약"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e2442] px-7 py-4 text-base font-bold text-white shadow-xl shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-[#17375f]"
              >
                체험수업 신청
                <ChevronRight size={18} />
              </a>
              <a
                href="#상담예약"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-[#0e2442] shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200"
              >
                상담 예약하기
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-8 hidden h-28 w-28 rounded-full bg-teal-100/60 blur-2xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dff4ff] via-[#f8fbff] to-[#dff7ef] p-6 shadow-2xl shadow-slate-200/80">
              <div className="aspect-[4/3] rounded-[1.45rem] border border-white/80 bg-gradient-to-br from-white/75 via-sky-100/70 to-teal-100/80 p-7">
                <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/70 bg-white/45 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0e2442] shadow-sm">
                      발표하는 초등학생 이미지
                    </span>
                    <span className="flex size-12 items-center justify-center rounded-full bg-[#0e2442] text-white shadow-lg">
                      <Mic2 size={22} />
                    </span>
                  </div>
                  <div className="mx-auto flex size-44 items-center justify-center rounded-full bg-white/80 shadow-xl shadow-sky-100 sm:size-56">
                    <div className="flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 to-teal-100 text-[#0e2442] sm:size-36">
                      <GraduationCap size={58} />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Voice", "Mind", "Stage"].map((label) => (
                      <span
                        key={label}
                        className="rounded-2xl bg-white/80 px-3 py-3 text-center text-xs font-bold text-slate-600 shadow-sm"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
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
                아이의 현재 표현 수준을 세심하게 살피고 성장 속도에 맞춰 지도합니다.
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
              말하기는 발표 한 번을 잘하는 기술을 넘어, 아이가 생각을 정리하고
              관계 속에서 자신을 표현하는 기본 역량입니다. 어릴 때부터 안정적인
              발성, 시선, 태도, 논리 표현을 익히면 학교생활과 면접 상황에서 더
              단단한 자신감을 갖게 됩니다.
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
              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">프로그램 소개</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-500">
              발표, 면접, 토론, 스토리텔링까지 아이의 목표에 맞춘 클래스로 구성했습니다.
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
            <div className="aspect-[4/3] rounded-[1.5rem] border border-white/15 bg-white/10 p-7 text-white">
              <div className="flex h-full flex-col justify-between">
                <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
                  교실 이미지
                </span>
                <div>
                  <p className="max-w-sm text-3xl font-extrabold leading-tight">
                    편안하게 말하고, 정확하게 성장하는 수업 공간
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["발성", "자세", "피드백"].map((item) => (
                      <span
                        key={item}
                        className="rounded-2xl bg-white/15 py-3 text-center text-sm font-bold"
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#e5f6ff] via-white to-[#e5f8f4] p-6 shadow-2xl shadow-slate-100">
            <div className="aspect-[4/5] rounded-[1.5rem] border border-white bg-white/55 p-7">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex size-36 items-center justify-center rounded-full bg-[#0e2442] text-white shadow-xl">
                  <HeartHandshake size={62} />
                </div>
                <p className="mt-8 text-lg font-extrabold">대표 프로필 이미지</p>
                <p className="mt-2 text-sm text-slate-500">Speech Director</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-extrabold text-sky-600">DIRECTOR</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              아이의 잠재력을 이끌어내는 교육
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              방송 진행 경험과 스피치 교육 노하우를 바탕으로 아이 한 명 한 명의
              성향을 이해하고, 자신만의 방식으로 표현할 수 있도록 지도합니다.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {careers.map((career) => (
                <div
                  key={career}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg shadow-slate-100"
                >
                  <Award className="mt-0.5 shrink-0 text-sky-600" size={20} />
                  <span className="font-bold leading-6">{career}</span>
                </div>
              ))}
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
            {reviews.map((review, index) => (
              <article
                key={review}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100"
              >
                <Quote className="mb-6 text-sky-500" size={32} />
                <p className="text-lg font-bold leading-8 text-[#0e2442]">“{review}”</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-400">
                  <Star size={16} className="fill-amber-300 text-amber-300" />
                  D-Day Kids Speech {index + 1}
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
              아이의 말하기 실력, 지금 바로 시작하세요.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {["체험수업 신청", "상담 예약하기", "전화 상담"].map((label, index) => (
                <a
                  key={label}
                  href={index === 2 ? "tel:0212345678" : "#상담예약"}
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
              className="mt-8 flex aspect-[16/9] items-center justify-center rounded-3xl bg-gradient-to-br from-slate-100 via-sky-50 to-teal-50 p-6 text-center transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-100"
              aria-label="네이버지도에서 디데이스피치 위치 보기"
            >
              <div>
                <MapPin className="mx-auto mb-4 text-[#0e2442]" size={38} />
                <p className="text-xl font-extrabold text-[#0e2442]">
                  네이버지도에서 보기
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  길찾기와 주변 교통 정보를 확인하세요
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p className="font-bold text-[#0e2442]">디데이 키즈스피치</p>
          <p>Premium kids speech class in Daechi-dong.</p>
        </div>
      </footer>
    </main>
  );
}
