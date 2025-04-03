'use client'

import { useState } from 'react'
import EditProfileForm from './editProfileForm'
import useFetchMe from './hooks/useFetchMe'
import useDeleteMe from './hooks/useDeleteMe'

const ProfilePage: React.FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const { loading, setLoading, fetchUserData, currentUser } = useFetchMe()
  const handleDelete = useDeleteMe({ setLoading })

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>

      {loading && <p>Loading...</p>}
      {!loading && !editMode && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">
            {currentUser.first_name} {currentUser.last_name}
          </h2>
          <p className="text-lg mb-4">{currentUser.email}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleDelete}
          >
            Delete Account
          </button>
          <p className="text-sm text-gray-500 mt-4">
            This action will permanently delete your account and all your data.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            You can always create a new account with the same email address.
          </p>
        </div>
      )}
      {!loading &&
        editMode &&
        EditProfileForm({
          user: currentUser,
          cancelEdit: () => setEditMode(false),
          setLoading,
          fetchUserData,
        })}
    </div>
  )
}

export default ProfilePage
