'use server'

import User from '@/models/User'

export async function insertedUsers(user) {
  const { name, phone, link1, link2, link3, sorted } = user
  const findUsers = await User.findOne({ name: name.toUpperCase() })
  if (!findUsers) {
    try {
      await User.create({
        name: name.toUpperCase(),
        phone,
        link1,
        link2,
        link3,
        sorted,
      })
      return { msg: 'User Created' }
    } catch (error) {
      return JSON.stringify({ msg: error.message })
    }
  }
  return { msg: 'Duplicate User' }
}

export async function countUsers() {
  try {
    const totalUsers = await User.find().count()
    return totalUsers
  } catch (error) {
    return JSON.stringify({ msg: error.message })
  }
}
