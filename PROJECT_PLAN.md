# Smart Factory Digital Twin Dashboard
## 프로젝트 기획서

---

## 1. 프로젝트 개요

**프로젝트명:** Smart Factory Digital Twin Dashboard  
**GitHub 레포명:** `smart-factory-twin`  
**개발자:** 권한결 
**배포 목표:** Vercel (무료)

### 한줄 설명
> 웹캠으로 손 제스처를 인식해 3D 스마트 공장 디지털 트윈을 실시간으로 조작하는 대시보드

---

## 2. 프로젝트 배경 & 동기

이전 팀프로젝트에서 **Mediapipe + Unity + UDP** 조합으로 FPS 게임의 웹캠 거리 기반 줌 기능을 구현하고 논문을 작성함.  
→ 이 경험을 바탕으로 **Mediapipe + 디지털 트윈 + 스마트팩토리 UI** 방향으로 확장.

---

## 3. 핵심 기능

### 3-1. 3D 디지털 트윈 (Three.js)
- 공장 바닥, 기계 설비들을 3D로 표현
- 기계 상태에 따라 색상 변경 (정상: 초록, 경고: 노랑, 위험: 빨강)
- 마우스 or 제스처로 자유롭게 회전/줌

### 3-2. 제스처 컨트롤 (Mediapipe.js)
- 웹캠으로 손 인식 (이전 프로젝트 경험 활용)
- 손 오므리기/펼치기 → 줌인/줌아웃
- 손 좌우 이동 → 3D 모델 회전
- 손가락으로 기계 가리키기 → 상세정보 팝업

### 3-3. 실시간 대시보드 (React)
- 각 기계별 상태 카드 (온도, 가동률, 진동)
- 실시간 수치 변화 (시뮬레이션 데이터)
- 이상 감지 시 알림 배너

### 3-4. 센서 데이터 시뮬레이터
- 실제 센서 없이 랜덤 변동 데이터로 구현
- 주기적으로 이상값 발생 → 경고 트리거

---

## 4. 기술 스택

| 역할 | 기술 | 이유 |
|------|------|------|
| UI 프레임워크 | React + Vite | 컴포넌트 기반, 빠른 개발 |
| 3D 시각화 | Three.js | 웹 3D 표준, 레퍼런스 많음 |
| 제스처 인식 | Mediapipe.js | 이전 프로젝트 경험, 브라우저 작동 |
| 스타일링 | Tailwind CSS | 빠른 UI 구성 |
| 빌드 도구 | Vite | 빠른 HMR, 간단한 설정 |
| 배포 | Vercel | GitHub 연동 자동 배포, 무료 |

---

## 5. 시스템 아키텍처

```
[사용자]
   │
   ├── 웹캠 영상 입력
   │      ↓
   │   Mediapipe.js (Hand Landmark Detection)
   │      ↓
   │   GestureEngine (제스처 분류: 줌/회전/선택)
   │      ↓
   ├── Three.js Scene Controller
   │      ↓
   │   3D Factory Model (기계 A, B, C, D...)
   │      ↑
   │   SensorSimulator (랜덤 데이터 생성, 1초 간격)
   │      ↓
   └── React Dashboard
          ├── MachineCard (기계별 상태)
          ├── AlertBanner (경고 알림)
          └── StatusChart (수치 변화 그래프)
```

---

## 6. 프로젝트 폴더 구조

```
smart-factory-twin/
├── public/
│   └── models/          # 3D 모델 파일 (gltf)
├── src/
│   ├── components/
│   │   ├── Scene3D/
│   │   │   ├── FactoryScene.jsx    # Three.js 메인 씬
│   │   │   ├── Machine.jsx         # 기계 오브젝트
│   │   │   └── SceneController.js  # 카메라/조작 관리
│   │   ├── Dashboard/
│   │   │   ├── MachineCard.jsx     # 기계 상태 카드
│   │   │   ├── AlertBanner.jsx     # 경고 알림
│   │   │   └── StatusChart.jsx     # 수치 그래프
│   │   └── GestureControl/
│   │       ├── GestureCamera.jsx   # 웹캠 + Mediapipe
│   │       └── GestureEngine.js    # 제스처 분류 로직
│   ├── data/
│   │   └── sensorSimulator.js      # 가상 센서 데이터
│   ├── hooks/
│   │   ├── useGesture.js           # 제스처 커스텀 훅
│   │   └── useSensorData.js        # 센서 데이터 훅
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 7. 개발 단계 (Phase)

### Phase 1: 기초 세팅 (1-2일)
- [ ] GitHub 레포 생성
- [ ] Vite + React 프로젝트 생성
- [ ] Tailwind CSS 설정
- [ ] 기본 레이아웃 구성 (좌: 3D, 우: 대시보드)

### Phase 2: 3D 공장 모델 (3-5일)
- [ ] Three.js 설치 및 기본 씬 구성
- [ ] 공장 바닥 + 기계 박스 모델 생성
- [ ] 마우스로 회전/줌 컨트롤 (OrbitControls)
- [ ] 기계 상태별 색상 적용

### Phase 3: 센서 데이터 + 대시보드 (3-4일)
- [ ] 가상 센서 데이터 시뮬레이터 구현
- [ ] 기계 상태 카드 UI
- [ ] 실시간 수치 업데이트
- [ ] 이상값 감지 → 알림 기능

### Phase 4: Mediapipe 제스처 연동 (4-5일)
- [ ] Mediapipe.js 설치 및 웹캠 연결
- [ ] 손 랜드마크 감지
- [ ] 줌/회전 제스처 인식
- [ ] Three.js 씬과 연동

### Phase 5: 마무리 + 배포 (1-2일)
- [ ] 전체 UI 다듬기
- [ ] README 작성
- [ ] Vercel 배포
- [ ] 포트폴리오 페이지에 추가

---

## 8. 화면 레이아웃

```
┌─────────────────────────────────────────────────────┐
│  🏭 Smart Factory Digital Twin          [경고 알림]  │
├─────────────────────────┬───────────────────────────┤
│                         │  기계 A    🟢 정상         │
│                         │  온도: 72°C  가동률: 94%   │
│   [ 3D 공장 뷰 ]        ├───────────────────────────┤
│                         │  기계 B    🔴 위험         │
│   (Three.js)            │  온도: 98°C  가동률: 61%   │
│                         ├───────────────────────────┤
│   [웹캠 미리보기]        │  기계 C    🟡 경고         │
│   손 제스처 인식 중...   │  온도: 85°C  가동률: 78%   │
└─────────────────────────┴───────────────────────────┘
```

---

## 9. 참고 이전 프로젝트

**FPS NUI 연구 (팀프로젝트, 계명대)**
- Mediapipe + Python → UDP → Unity 구조
- 얼굴-웹캠 거리 기반 줌 기능
- 결과: 정확도 52% → 62% 향상 (p=0.011)
- 이 경험이 Mediapipe 제스처 파트의 기반이 됨

---

## 10. 시작 명령어 (세팅 후)

```bash
# 레포 클론
git clone https://github.com/[username]/smart-factory-twin.git
cd smart-factory-twin

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```
