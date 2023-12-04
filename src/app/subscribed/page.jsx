import { getUsers } from '@/lib/data'
import Link from 'next/link'

export default async function SubscribedPage() {
  const users = await getUsers()

  return (
    <div className="m-4">
      <p className="font-bold text-md my-2">
        Personas participantes al momento
      </p>
      <ul className="text-xs">
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>

      <div className="flex flex-row justify-center items-center gap-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center shadow-lg shadow-gray-600 my-4">
        <Link href="/subscribe">Dar de alta a otra persona</Link>
      </div>
    </div>
  )
}
