'use client'

import { UserType } from '@/app/types/user'
import useUpdateMe from './hooks/useUpdateMe'

type EditProfileFormProps = {
  user: UserType
  cancelEdit: () => void
  setLoading: (loading: boolean) => void
  fetchUserData: () => Promise<void>
}

export default function EditProfileForm({
  user,
  cancelEdit,
  setLoading,
  fetchUserData,
}: EditProfileFormProps) {
  const { handleUpdate } = useUpdateMe({
    cancelEdit,
    setLoading,
    fetchUserData,
  })

  return (
    <div className="flex flex-col items-center w-full justify-center">
      <form className="w-full max-w-md" onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="first_name">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="first_name"
            name="first_name"
            type="text"
            defaultValue={user.first_name}
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="last_name"
            name="last_name"
            type="text"
            defaultValue={user.last_name}
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            defaultValue={user.email}
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="current_password"
          >
            Current Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="current_password"
            name="current_password"
            type="password"
            placeholder="Current Password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="new_password"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="new_password"
            name="new_password"
            type="password"
            placeholder="New Password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="password_confirmation"
          >
            Confirm New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            placeholder="Confirm New Password"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Update Profile"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={cancelEdit}
            className="w-full mt-4 px-4 py-2 font-bold text-white bg-gray-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
