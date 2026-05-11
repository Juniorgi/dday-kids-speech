# 디데이 키즈스피치

대치동 키즈 스피치/면접 학원 랜딩페이지입니다.

## 로컬에서 보기

```bash
npm install
npm run dev
```

브라우저에서 Vite가 보여주는 주소를 열면 됩니다.

## 배포 전 확인

- 실제 주소, 전화번호, 상담 링크 반영
- 대표/교실/수업 이미지 교체
- 네이버 지도 또는 카카오맵 링크 연결
- 개인정보처리방침/사업자 정보 필요 여부 확인
- 모바일 화면 확인

## Vercel 배포

1. GitHub에 이 프로젝트를 업로드합니다.
2. Vercel에서 `New Project`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. Framework Preset은 `Vite`로 둡니다.
5. Build Command는 `npm run build`, Output Directory는 `dist`를 사용합니다.
6. 배포 후 Vercel에서 제공하는 주소로 확인합니다.

## 도메인 연결

도메인을 구매한 뒤 Vercel 프로젝트의 `Settings > Domains`에서 도메인을 추가하고,
도메인 업체 DNS 설정에 Vercel이 안내하는 값을 입력합니다.
