import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid, Environment } from '@react-three/drei'
import Machine from './Machine'

const MACHINES = [
  { id: 'A', name: '기계 A', position: [-4, 0.75, -2] },
  { id: 'B', name: '기계 B', position: [-1.5, 0.75, -2] },
  { id: 'C', name: '기계 C', position: [1.5, 0.75, -2] },
  { id: 'D', name: '기계 D', position: [4, 0.75, -2] },
  { id: 'E', name: '기계 E', position: [0, 0.75, 1.5] },
]

export default function FactoryScene({ machines, onMachineClick }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 6, 10], fov: 50 }}
      className="w-full h-full"
    >
      {/* 조명 */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#60a5fa" />

      {/* 공장 바닥 그리드 */}
      <Grid
        position={[0, 0, 0]}
        args={[20, 20]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#334155"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#475569"
        fadeDistance={25}
        infiniteGrid
      />

      {/* 기계들 */}
      {MACHINES.map((m) => {
        const data = machines.find((d) => d.id === m.id) || {}
        return (
          <Machine
            key={m.id}
            position={m.position}
            name={m.name}
            status={data.status || 'normal'}
            onClick={onMachineClick}
          />
        )
      })}

      {/* 마우스로 회전/줌 컨트롤 */}
      <OrbitControls
        enablePan={false}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={5}
        maxDistance={20}
      />

      <Environment preset="warehouse" />
    </Canvas>
  )
}
