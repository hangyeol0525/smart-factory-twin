const BASE = {
  A: { temp: 72, uptime: 94, vibration: 0.3 },
  B: { temp: 65, uptime: 98, vibration: 0.2 },
  C: { temp: 80, uptime: 87, vibration: 0.5 },
  D: { temp: 55, uptime: 99, vibration: 0.1 },
  E: { temp: 75, uptime: 91, vibration: 0.4 },
}

function jitter(value, range) {
  return Math.round((value + (Math.random() - 0.5) * range) * 10) / 10
}

function getStatus(temp, uptime) {
  if (temp >= 95 || uptime < 70) return 'danger'
  if (temp >= 82 || uptime < 85) return 'warning'
  return 'normal'
}

export function generateSensorData() {
  return Object.entries(BASE).map(([id, base]) => {
    const temp = jitter(base.temp, 10)
    const uptime = jitter(base.uptime, 8)
    const vibration = jitter(base.vibration, 0.2)
    return {
      id,
      temp,
      uptime,
      vibration: Math.max(0, vibration),
      status: getStatus(temp, uptime),
    }
  })
}
