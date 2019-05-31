import { useCallback } from 'react'

function useFavoriteProjectsStorage() {
  const getProjects = useCallback(() => {
    const rawProjects = window.localStorage.getItem('favoriteProjects')
    if (rawProjects) return JSON.parse(rawProjects)
    return undefined
  }, [])

  const setProjects = useCallback(data => {
    window.localStorage.setItem('favoriteProjects', JSON.stringify(data))
  }, [])

  const toggleProject = useCallback(projectUrl => {
    const projects = getProjects() || []
    if (!projects) return

    if (projects.findIndex(project => project === projectUrl) === -1) {
      projects.push(projectUrl)
      setProjects(projects)
      return
    }
    setProjects(projects.filter(project => project !== projectUrl))
  }, [])

  return {
    getProjects,
    setProjects,
    toggleProject,
  }
}

export default useFavoriteProjectsStorage
