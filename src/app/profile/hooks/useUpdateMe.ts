type useUpdateMeProps = {
  cancelEdit: () => void
  setLoading: (loading: boolean) => void
  fetchUserData: () => Promise<void>
}

export default function useUpdateMe({
  cancelEdit,
  setLoading,
  fetchUserData,
}: useUpdateMeProps) {
  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    const body = {
      first_name: data.get('first_name') as string,
      last_name: data.get('last_name') as string,
      email: data.get('email') as string,
      current_password: data.get('current_password') as string,
      password: data.get('new_password') as string,
      password_confirmation: data.get('password_confirmation') as string,
    }

    try {
      const response = await fetch('/api/me', {
        method: 'PUT',
        body: JSON.stringify(body),
      })
      const data = await response.json()
      if (data.success) {
        fetchUserData()
        cancelEdit()
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  return { handleUpdate }
}
