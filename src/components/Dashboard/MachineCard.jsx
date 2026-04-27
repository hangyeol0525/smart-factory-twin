const STATUS_STYLE = {
  normal:  { dot: 'bg-green-500',  text: 'text-green-400',  label: '정상' },
  warning: { dot: 'bg-yellow-500', text: 'text-yellow-400', label: '경고' },
  danger:  { dot: 'bg-red-500',    text: 'text-red-400',    label: '위험' },
}

export default function MachineCard({ id, temp, uptime, vibration, status, selected }) {
  const s = STATUS_STYLE[status]

  return (
    <div className={`rounded-lg border p-3 transition-all cursor-default
      ${selected ? 'border-blue-500 bg-blue-950/30' : 'border-gray-700 bg-gray-800/50'}
    `}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-semibold text-sm">기계 {id}</span>
        <span className={`flex items-center gap-1 text-xs font-medium ${s.text}`}>
          <span className={`w-2 h-2 rounded-full ${s.dot} animate-pulse`} />
          {s.label}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1 text-xs text-gray-400">
        <div className="bg-gray-900/60 rounded p-2 text-center">
          <div className="text-white font-mono font-bold">{temp}°</div>
          <div>온도</div>
        </div>
        <div className="bg-gray-900/60 rounded p-2 text-center">
          <div className="text-white font-mono font-bold">{uptime}%</div>
          <div>가동률</div>
        </div>
        <div className="bg-gray-900/60 rounded p-2 text-center">
          <div className="text-white font-mono font-bold">{vibration}</div>
          <div>진동</div>
        </div>
      </div>
    </div>
  )
}
