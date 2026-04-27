import { useState, useEffect, useRef } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts'

const MACHINE_COLORS = {
  A: '#60a5fa',
  B: '#34d399',
  C: '#f472b6',
  D: '#a78bfa',
  E: '#fbbf24',
}

const MAX_HISTORY = 20

export default function StatusChart({ machines }) {
  const [history, setHistory] = useState([])
  // useRef: 렌더링을 유발하지 않고 최신 history를 참조하기 위해 사용
  const historyRef = useRef([])

  useEffect(() => {
    if (machines.length === 0) return

    const now = new Date().toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    // 현재 시점의 기계별 온도를 한 줄(point)로 만듦
    const point = { time: now }
    machines.forEach((m) => {
      point[m.id] = m.temp
    })

    // 최근 MAX_HISTORY개만 유지
    const next = [...historyRef.current, point].slice(-MAX_HISTORY)
    historyRef.current = next
    setHistory(next)
  }, [machines])

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-3">
      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
        온도 추이 (°C)
      </div>

      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={history} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <XAxis
            dataKey="time"
            tick={{ fontSize: 9, fill: '#6b7280' }}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={['auto', 'auto']}
            tick={{ fontSize: 9, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              fontSize: '11px',
            }}
            labelStyle={{ color: '#9ca3af' }}
          />
          <Legend
            wrapperStyle={{ fontSize: '10px', paddingTop: '8px' }}
          />
          {Object.entries(MACHINE_COLORS).map(([id, color]) => (
            <Line
              key={id}
              type="monotone"
              dataKey={id}
              name={`기계 ${id}`}
              stroke={color}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
