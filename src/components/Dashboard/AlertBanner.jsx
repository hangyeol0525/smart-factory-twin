export default function AlertBanner({ machines }) {
  const alerts = machines.filter((m) => m.status !== 'normal')

  if (alerts.length === 0) return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-950/40 border border-green-800 text-green-400 text-sm">
      <span className="w-2 h-2 rounded-full bg-green-500" />
      전체 설비 정상 운영 중
    </div>
  )

  return (
    <div className="space-y-1">
      {alerts.map((m) => (
        <div
          key={m.id}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm
            ${m.status === 'danger'
              ? 'bg-red-950/40 border border-red-700 text-red-400'
              : 'bg-yellow-950/40 border border-yellow-700 text-yellow-400'}
          `}
        >
          <span className={`w-2 h-2 rounded-full animate-pulse
            ${m.status === 'danger' ? 'bg-red-500' : 'bg-yellow-500'}
          `} />
          기계 {m.id} — {m.status === 'danger' ? '위험' : '경고'} (온도 {m.temp}°C, 가동률 {m.uptime}%)
        </div>
      ))}
    </div>
  )
}
