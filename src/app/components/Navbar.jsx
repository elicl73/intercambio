import Image from 'next/image'

import { countUsers } from '@/lib/data'

export const Navbar = async () => {
  //const [length, setLength] = useState(0)
  let lengthString = ''
  const length = await countUsers()
  //setLength(await countUsers())

  if (length < 10) {
    lengthString = `0${length}`
  } else {
    lengthString = `${length}`
  }

  return (
    <header>
      <nav className="flex flex-wrap justify-between items-center bg-red-700 bg-opacity-90 py-4 px-2 h-24 rounded-t-lg">
        <div>
          <Image src="/santa.png" width={50} height={50} alt="Logo principal" />
        </div>
        <div className="flex font-bold text-white flex-col items-center">
          <span>Intercambio Navideño</span>
          <span>Familia Landero</span>
        </div>
        <div>
          <span className=" relative font-bold text-xs -left-3 -top-4 p-1 text-green-500 bg-white rounded-full">
            {lengthString}
          </span>
        </div>
      </nav>
    </header>
  )
}
