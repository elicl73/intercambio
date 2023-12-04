'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { insertedUsers } from '@/lib/data'
import { stringify } from 'postcss'

export default function UserForm() {
  const router = useRouter()

  const [user, setUser] = useState({
    name: '',
    phone: '',
    link1: '',
    link2: '',
    link3: '',
    idsort: '',
    sorted: false,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await insertedUsers(user)

    if (result.msg === 'User Created') {
      router.push('/subscribed')
      router.refresh()
    }

    if (result.msg === 'Duplicate User') {
      router.push('/duplicateuser')
      router.refresh()
    }
  }

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
          onChange={handleChange}
          defaultValue={user.name}
          pattern="[A-Za-z ]+"
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nombre (Solo letras)
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="phone"
          id="phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
          onChange={handleChange}
          defaultValue={user.phone}
          pattern="[0-9]{10}"
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Celular (10 Digitos)
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="link1"
          id="link1"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
          onChange={handleChange}
          defaultValue={user.link1}
          minLength={10}
        />
        <label
          htmlFor="link1"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Link 1
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="link2"
          id="link2"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
          onChange={handleChange}
          defaultValue={user.link2}
          minLength={10}
        />
        <label
          htmlFor="link2"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Link 2
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="link3"
          id="link3"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder=" "
          required
          onChange={handleChange}
          defaultValue={user.link3}
          minLength={10}
        />
        <label
          htmlFor="link3"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Link 3
        </label>
      </div>

      <button
        type="submit"
        className="flex flex-row justify-center items-center gap-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center shadow-lg shadow-gray-600"
      >
        <span>ENVIAR</span>
        <Image src="/gift.png" width={30} height={30} alt="Icon regalo" />
      </button>
    </form>
  )
}
