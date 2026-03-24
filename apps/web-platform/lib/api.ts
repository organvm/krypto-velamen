const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function fetchFragments() {
  // In a real app, this would hit the Archive Engine microservice
  // For MVP, we'll return mock data that matches our current corpus
  return [
    { id: '1', slug: 'the-chipped-mug', mode: 'concealment', triforce_polarity: 'conscious', media_type: 'text', date: '2026-02-17', version: 0.1 },
    { id: '2', slug: 'the-stage-exhaustion', mode: 'visibility', triforce_polarity: 'temporal', media_type: 'text', date: '2026-02-17', version: 0.1 },
    { id: '3', slug: 'migration-test', mode: 'concealment', triforce_polarity: 'subconscious', media_type: 'text', date: '2026-02-17', version: 0.4 },
    { id: '4', slug: 'arenas-test', mode: 'visibility', triforce_polarity: 'conscious', media_type: 'text', date: '2026-02-17', version: 0.1 },
    { id: '5', slug: 'faceshopping-synthesis', mode: 'visibility', triforce_polarity: 'conscious', media_type: 'audio', date: '2026-02-17', version: 0.1 },
    { id: '6', slug: 'red-room-substrate', mode: 'concealment', triforce_polarity: 'subconscious', media_type: 'film', date: '2026-02-17', version: 0.1 },
  ]
}

export async function fetchMechanismConnections(mechanism: string) {
  const query = `
    query {
      connections(nodeId: "${mechanism}") {
        id
        type
      }
    }
  `
  const res = await fetch(`${API_BASE}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  return res.json()
}
