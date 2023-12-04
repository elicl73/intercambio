import { sortUsers } from '@/lib/data'

export default async function SortPage() {
  await sortUsers()
  return <div>page</div>
}
