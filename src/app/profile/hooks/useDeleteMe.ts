type useDeleteMeProps = {
  setLoading: (loading: boolean) => void
}

export default function useDeleteMe({ setLoading }: useDeleteMeProps) {
  const handleDelete = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/me', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      if (data.success) {
        window.location.href = '/'
      }
    } catch (error) {
      console.error('error', error)
    }
    setLoading(false)
  }

  return handleDelete
}
