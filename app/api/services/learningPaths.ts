export async function fetchLearningPath(learningPathTitle: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/learningPaths/${learningPathTitle}`, {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error('Failed to fetch learning path')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Database Error', error)
    throw new Error('Failed to fetch learning path')
  }
}