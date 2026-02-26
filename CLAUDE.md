# Goyo Studio Homepage

고요스튜디오 소개 랜딩 페이지. 매월 1개씩 출시하는 제품들을 보여주는 단일 페이지 웹사이트.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React Compiler enabled
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Icons**: Lucide React
- **Fonts**: Geist (body, headings), Geist Mono (dates, code) — via `next/font/google`
- **Path alias**: `@/*` → `./src/*`

## Commands

- `npm run dev` — 개발 서버 (localhost:3000)
- `npm run build` — 프로덕션 빌드
- `npm run lint` — ESLint 실행

## Project Structure

```
src/
├── app/
│   ├── globals.css      # CSS variables + @theme inline (디자인 토큰)
│   ├── layout.tsx       # 루트 레이아웃 (폰트, 메타데이터, Organization JSON-LD)
│   ├── page.tsx         # 랜딩 페이지 (섹션 조합)
│   ├── robots.ts        # robots.txt 생성
│   └── sitemap.ts       # 동적 sitemap (홈 + 전체 제품)
├── components/
│   ├── Header.tsx       # 네비게이션 (모바일 햄버거 메뉴)
│   ├── HeroSection.tsx  # 히어로 영역
│   ├── ServicesSection.tsx   # 서비스 카드 3개
│   ├── MonthlySection.tsx    # 월간 프로젝트 쇼케이스
│   ├── HowWeWorkSection.tsx  # 프로세스 3단계
│   ├── AboutSection.tsx      # 스튜디오 소개
│   ├── CTASection.tsx        # 연락처 CTA
│   └── Footer.tsx            # 푸터
├── lib/
│   ├── products.ts      # Product 인터페이스 + detail.md 파싱
│   └── jsonld.ts        # JSON-LD 헬퍼 (Organization, Breadcrumb, SoftwareApplication, HowTo, VideoObject)
└── products/            # 제품 스펙 문서 (detail.md, logo.png, capture.png)
```

## Pencil Design File

디자인 원본: `/Users/jeong-yeong-yun/Documents/goyohome.pen`

### Design Frames

| Node ID | Name | Description |
|---------|------|-------------|
| `QKLqU` | Desktop Landing Page | 랜딩 페이지 데스크톱 (1440px) |
| `JfVNn` | Desktop Product Detail | 제품 상세 페이지 데스크톱 (1440px) |
| `UIBRI` | Mobile Landing Page | 랜딩 페이지 모바일 (375px) |
| `7rT9i` | Mobile Product Detail | 제품 상세 페이지 모바일 (375px) |
| `VW9kv` | Design System | 컬러, 타이포그래피, 컴포넌트 토큰 |
| `k01Kt` | Interaction States | 카드, 버튼, LNB, 푸터 링크 상태 정의 |
| `XUst7` | Style Reference | 각 요소별 CSS 스펙 상세 |

## Design System (v2 — Light Theme)

디자인 파일 기준 새로운 라이트/웜 톤 테마. 브랜드 원칙: **"Nothing more"**

### Color Palette

**Backgrounds**
| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#F7F5F0` | 메인 배경 (웜 베이지) |
| `bg-section` | `#F7F7F7` | 섹션 배경 |
| `bg-surface` | `#FFFFFF` | 카드/표면 |
| `bg-muted` | `#EDEAE4` | 뮤트 배경 |

**Text**
| Token | Value | Usage |
|-------|-------|-------|
| `text-dark` | `#1A1A1A` | 가장 진한 텍스트 |
| `text-primary` | `#3D4F5F` | 본문 텍스트 |
| `text-secondary` | `#888888` | 보조 텍스트 |
| `text-label` | `#AAAAAA` | 라벨/캡션 |
| `text-on-accent` | `#FFFFFF` | 강조색 위 텍스트 |
| `footer-text` | `#C8D1D8` | 푸터 텍스트 |

**Accent & Status**
| Token | Value | Usage |
|-------|-------|-------|
| `accent-primary` | `#3D4F5F` | CTA/강조색 (다크 블루그레이) |
| `accent-hover` | `#2D3C4A` | CTA 호버 |
| `accent-positive` | `#4A7C59` | 긍정/출시 상태 |
| `border-subtle` | `#EDEAE4` | 기본 테두리 |
| `border-default` | `#D4CFC7` | 테두리 |
| `footer-bg` | `#3D4F5F` | 푸터 배경 |

### Typography Scale

| Level | Font | Size | Weight | Letter Spacing |
|-------|------|------|--------|----------------|
| H1 Hero | Geist | 36px (mobile) / 64px (desktop) | 300 (Light) | -1px |
| H2 Section | Geist | 24px | 400 | -0.5px |
| H3 Card | Geist | 22px | 600 | -0.3px |
| Body | Geist | 18px | 400 | — |
| Caption | Geist | 13px | 500 | 3px (uppercase) |
| Date | Geist Mono | 13px | 500 | — |

### Logo

- "Goyo" — Geist 500 + "Studio" — Geist 300, 장식 없음
- Light variant: `#3D4F5F` on white
- Dark variant (footer): white on `#1A2332`

### Components

**Project Card**: bg `#FFFFFF`, radius 0, shadow blur 8+24 (default) / blur 16+40 (hover)
**CTA Button**: cornerRadius 8, padding 16/28, fill `#3D4F5F` → hover `#2D3C4A`
**Status Badge**: pill shape, cornerRadius 20, fill `#4A7C5915`, border `#4A7C5930`

### Interaction States

**Project Card**
- Default: `shadow(blur 8, #00000012)` + `shadow(blur 24, #0000000F)`
- Hover: `shadow(blur 16, #00000018)` + `shadow(blur 40, #00000018)` + `translateY(-2px)`
- Transition: `all 200ms ease`, cursor pointer

**CTA Button**
- Default: fill `#3D4F5F`
- Hover: fill `#2D3C4A`
- Transition: `background-color 150ms ease`

**LNB Item (Product Detail)**
- Default: `#8896A1` 텍스트, 배경 없음
- Hover: `#3D4F5F` 텍스트, `#F7F5F010` 배경
- Active: `#3D4F5F` bold, `#F7F5F0` 배경, left 3px `#3D4F5F` border
- Transition: `all 150ms ease`

**Footer Link**
- Default: `#C8D1D8`
- Hover: `#FFFFFF`
- Transition: `color 150ms ease`

### Global Animation Rules

- 모든 transition ≤ 200ms
- ease 또는 ease-out 사용 (spring 효과 금지)
- scale 최대 1.02 (과장 금지)
- 불필요한 애니메이션 금지

## Styling Patterns

- **고정 픽셀값 사용**: `text-[16px]`, `px-[20px]`, `gap-[24px]` 등 arbitrary value 사용
- **모바일 퍼스트 + `lg:` 브레이크포인트**: 모바일 기본 → `lg:` 접두사로 데스크톱 스타일 적용
- **모바일 패딩**: `px-[20px]`, **데스크톱 패딩**: `lg:px-[120px]`
- **섹션 패턴**: 수직 flex, 섹션 헤더(모노 라벨 + 제목) + 콘텐츠

## Component Patterns

- 모든 컴포넌트에 `"use client"` 지시어 사용
- 섹션 컴포넌트는 `id` 속성으로 앵커 네비게이션 지원 (`#services`, `#projects`, `#process`, `#about`, `#contact`)
- 데스크톱/모바일 레이아웃이 크게 다른 경우 별도 컴포넌트로 분리 (예: `DesktopStep` / `MobileStep`)
- `hidden lg:flex` / `flex lg:hidden` 패턴으로 반응형 전환

## Products

| # | Name | Status |
|---|------|--------|
| 01 | Goyo Studio Home | Released (Dec 2025) |
| 02 | Simple YouTube Downloader | Released (Jan 2026) |
| 03 | Daily Learning English | Building (Feb 2026) |
| 04 | Daily Art Ritual | Designing (Feb 2026) |

제품 스펙은 `src/products/{번호}_{이름}/detail.md` 형식으로 관리.

### detail.md 필드

| 섹션 | 필수 | 용도 |
|------|------|------|
| `## Name` | ✅ | 제품명 |
| `## Subtitle` | ✅ | 한 줄 설명 (meta description 폴백) |
| `## Status` | ✅ | Released / Building / Designing |
| `## Date` | ✅ | 출시월 (예: "January 2026") |
| `## Problem` | ✅ | 해결하려는 문제 |
| `## Description` | ✅ | 제품 설명 (meta description, JSON-LD description으로 사용) |
| `## Happy Case Scenario` | ✅ | 사용 단계 (HowTo JSON-LD) |
| `## Video` | ✅ | YouTube URL (VideoObject JSON-LD) |
| `## Access` | ✅ | 다운로드/구매 URL |
| `## Price` | | 가격 숫자 (예: "5"). 없으면 JSON-LD에서 "0" (무료) |
| `## Price Currency` | | 통화 코드 (예: "USD"). 없으면 "USD" 기본값 |

## SEO

### 자동 처리 (새 제품 추가 시 별도 작업 불필요)

- **메타데이터**: `generateMetadata()`가 제품별 title, description, canonical, OG, Twitter 자동 생성
- **sitemap.xml**: `getAllProducts()`로 전체 제품 URL 자동 포함
- **JSON-LD**: Breadcrumb, SoftwareApplication, HowTo, VideoObject 자동 생성
- **시맨틱 HTML**: `<article>`, `<h2>` 구조 적용됨

### JSON-LD 스키마 (`src/lib/jsonld.ts`)

| 스키마 | 적용 위치 | 데이터 소스 |
|--------|----------|------------|
| `Organization` | 루트 레이아웃 | 하드코딩 (goyostudio.io) |
| `BreadcrumbList` | 제품 페이지 | product.name, product.slug |
| `SoftwareApplication` | 제품 페이지 | description, price, priceCurrency, capturePath |
| `HowTo` | 제품 페이지 | happyCaseSteps |
| `VideoObject` | 제품 페이지 | videoUrl, date (ISO 8601 자동 변환) |

### 설계 결정

- `operatingSystem`은 `jsonld.ts`에 `"macOS"` 하드코딩 (현재 모든 제품 macOS)
- `description` 필드가 meta description + JSON-LD description 겸용 (별도 summary 필드 불필요)
- `product.date` ("January 2026") → ISO 8601 ("2026-01-01") 자동 변환
- 배포 후 [Rich Results Test](https://search.google.com/test/rich-results)로 구조화 데이터 유효성 검증
