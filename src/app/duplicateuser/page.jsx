import Link from 'next/link'

export default function DuplicateUserPage() {
  return (
    <div className="m-4">
      <p>Está persona ya se encuentra dada de alta en el sistema</p>
      <div className="flex flex-row justify-center items-center gap-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 my-4 text-center">
        <Link href="/subscribe">Intentar de nuevo</Link>
      </div>
    </div>
  )
}
