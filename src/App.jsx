import { useState, useEffect } from 'react'
import FactoryScene from './components/Scene3D/FactoryScene'
import MachineCard from './components/Dashboard/MachineCard'
import AlertBanner from './components/Dashboard/AlertBanner'
import StatusChart from './components/Dashboard/StatusChart'
import { generateSensorData } from './data/sensorSimulator'

export default function App() {
  const [machines, setMachines] = useState(generateSensorData())
  const [selectedMachine, setSelectedMachine] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setMachines(generateSensorData())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      {/* 헤더 */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-800 bg-gray-900/80 backdrop-blur shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <h1 className="text-lg font-bold tracking-wide">Smart Factory Digital Twin</h1>
        </div>
        <div className="text-xs text-gray-500">
          실시간 모니터링 · {new Date().toLocaleTimeString('ko-KR')}
        </div>
      </header>

      {/* 메인 영역 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 좌측: 3D 뷰 */}
        <div className="flex-1 relative">
          <FactoryScene
            machines={machines}
            onMachineClick={setSelectedMachine}
          />
          <div className="absolute bottom-4 left-4 text-xs text-gray-500 bg-gray-900/70 px-3 py-2 rounded-lg">
            마우스 드래그: 회전 · 스크롤: 줌
          </div>
        </div>

        {/* 우측: 대시보드 */}
        <aside className="w-72 flex flex-col gap-3 p-4 border-l border-gray-800 bg-gray-900/50 overflow-y-auto shrink-0">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">설비 현황</h2>

          <AlertBanner machines={machines} />

          <div className="space-y-2">
            {machines.map((m) => (
              <MachineCard
                key={m.id}
                {...m}
                selected={selectedMachine?.name === `기계 ${m.id}`}
              />
            ))}
          </div>

          <StatusChart machines={machines} />

          {selectedMachine && (
            <div className="mt-2 p-3 rounded-lg border border-blue-700 bg-blue-950/30">
              <div className="text-xs text-blue-400 font-semibold mb-1">선택됨</div>
              <div className="text-sm text-white">{selectedMachine.name}</div>
              <div className="text-xs text-gray-400 mt-1">3D 화면에서 기계를 클릭하면 선택됩니다</div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
