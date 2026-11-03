# Smart Factory Digital Twin

**React와 Three.js를 활용한 3D 스마트팩토리 설비 모니터링 시뮬레이션**

가상의 스마트 공장을 3D 환경으로 시각화하고, 설비별 센서 데이터를 실시간으로 모니터링할 수 있는 웹 기반 디지털 트윈 대시보드입니다.

실제 IoT 센서나 서버 없이 시뮬레이션 데이터를 활용하여 설비 상태 변화와 이상 감지 기능을 구현했습니다.

## Project Overview

3D 공장 화면과 데이터 대시보드를 결합하여 설비의 운영 상태를 직관적으로 확인할 수 있도록 구성했습니다.

### 주요 기능

- **3D Factory Visualization** — 5개 설비를 3D 공간에 시각화하고 상태별 색상 표시
- **Sensor Data Simulation** — 온도, 가동률, 진동 데이터 1초 간격 갱신
- **Equipment Status Detection** — 센서 수치에 따른 정상·경고·위험 상태 판별
- **Interactive Dashboard** — 설비 선택 및 상태 정보 확인
- **Temperature Trend Chart** — 설비별 온도 변화 추이 시각화
- **Alert System** — 이상 상태 발생 시 경고 메시지 표시

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | React 19, JavaScript |
| Build Tool | Vite |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Styling | Tailwind CSS 4 |
| Data Visualization | Recharts |
| State Management | React Hooks |

## Key Features

### 1. 3D Factory Visualization

- 5개 설비(A~E)를 3D 공간에 배치
- 설비 상태를 정상(Green), 경고(Yellow), 위험(Red) 색상으로 표현
- OrbitControls를 활용한 카메라 회전 및 확대·축소
- 설비 클릭 시 선택 상태 연동
- 위험 상태 설비에 회전 애니메이션 적용

### 2. Real-time Sensor Monitoring

- 설비별 온도, 가동률, 진동 데이터 시뮬레이션
- 1초 간격 데이터 갱신
- 온도 및 가동률 기준으로 설비 상태 자동 판별
- 이상 상태 발생 시 경고 알림 표시

### 3. Monitoring Dashboard

- 설비별 상태 카드 및 센서 수치 표시
- 선택한 설비 정보 확인
- Recharts 기반 온도 변화 그래프
- 최근 20개 데이터 포인트 시각화

## System Architecture

```text
          Sensor Simulator
                 |
          Data Generation
           (Every 1 sec)
                 |
                 v
             React App
                 |
       +---------+---------+
       |                   |
       v                   v
   3D Factory          Dashboard
   (Three.js)           (React)
       |                   |
   3D Machines      Status / Alerts
       |                   |
   User Selection    Temperature Chart
```

## Project Structure

```text
smart-factory-twin/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── AlertBanner.jsx
│   │   │   ├── MachineCard.jsx
│   │   │   └── StatusChart.jsx
│   │   └── Scene3D/
│   │       ├── FactoryScene.jsx
│   │       └── Machine.jsx
│   ├── data/
│   │   └── sensorSimulator.js
│   ├── App.jsx
│   └── main.jsx
├── PROJECT_PLAN.md
├── package.json
└── README.md
```

## Getting Started

<details>
<summary>실행 방법 보기</summary>

### 1. Clone Repository

```bash
git clone https://github.com/hangyeol0525/smart-factory-twin.git
cd smart-factory-twin
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Production Build

```bash
npm run build
```

</details>

## Development Process

AI를 활용하여 프로젝트의 요구사항과 기술 스택을 검토하고, 시스템 아키텍처 및 구현 단계를 계획한 후 개발을 진행했습니다.

- **Requirements** — 스마트팩토리 모니터링에 필요한 핵심 기능 정의
- **Architecture Design** — 3D 시각화, 센서 시뮬레이션, 대시보드 간 데이터 흐름 설계
- **Implementation Planning** — 컴포넌트 구조 및 기능별 개발 단계 정리
- **Development** — 수립한 계획을 기반으로 React와 Three.js를 활용한 프로토타입 구현

초기 기획 내용과 아키텍처 설계, 확장 계획은 [PROJECT_PLAN.md](./PROJECT_PLAN.md)에서 확인할 수 있습니다.

## Implementation Highlights

**React와 Three.js의 통합**

React Three Fiber를 활용하여 3D 설비를 컴포넌트 단위로 구성하고, React 상태 변경에 따라 설비의 시각적 상태가 갱신되도록 구현했습니다.

**데이터와 시각화 연동**

동일한 센서 데이터를 3D 공장과 대시보드에 전달하여 설비 상태 및 모니터링 정보를 동기화했습니다.

**컴포넌트 분리**

3D 렌더링, 설비 상태 카드, 경고 알림, 온도 차트, 센서 데이터 생성 로직을 기능별로 분리했습니다.

## Future Improvements

- MediaPipe 기반 웹캠 손 제스처 제어
- 실제 IoT 센서 데이터 연동
- WebSocket 기반 실시간 데이터 수신
- 설비별 상세 정보 패널
- 설비 데이터 이력 저장 및 조회
- 3D 공장 모델 고도화
