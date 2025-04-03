import { useEffect, useState, useCallback } from 'react'
import { UserType } from '@/app/types/user'

export default function useFetchMe() {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentUser, setCurrentUser] = useState<UserType>({} as UserType)

  const fetchUserData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      if (data.success) {
        setCurrentUser(data.data)
      }
    } catch (error) {
      console.error('error', error)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return {
    loading,
    setLoading,
    fetchUserData,
    currentUser,
  }
}
