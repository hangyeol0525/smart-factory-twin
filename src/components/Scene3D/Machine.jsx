import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const STATUS_COLORS = {
  normal: '#22c55e',
  warning: '#eab308',
  danger: '#ef4444',
}

export default function Machine({ position, name, status, onClick }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (status === 'danger') {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group position={position} onClick={() => onClick({ name, status })}>
      {/* 기계 본체 */}
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[1.2, 1.5, 1.2]} />
        <meshStandardMaterial color={STATUS_COLORS[status]} />
      </mesh>

      {/* 기계 받침대 */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[1.4, 0.5, 1.4]} />
        <meshStandardMaterial color="#475569" />
      </mesh>

      {/* 기계 이름 라벨 */}
      <Html position={[0, 1.4, 0]} center distanceFactor={8}>
        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-gray-600">
          {name}
        </div>
      </Html>
    </group>
  )
}
