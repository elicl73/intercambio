'use server'

import User from '@/models/User'

export async function insertedUsers(user) {
  const { name, phone, link1, link2, link3, idsort, sorted } = user
  const findUser = await User.findOne({ name: name.toUpperCase() })
  if (!findUser) {
    try {
      await User.create({
        name: name.toUpperCase(),
        phone,
        link1,
        link2,
        link3,
        idsort,
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

export async function getUsers() {
  try {
    const findUsers = await User.find()
    return findUsers
  } catch (error) {
    return JSON.stringify({ msg: error.message })
  }
}

export async function sortUsers() {
  const users = []

  try {
    const findUsers = await User.find()
    findUsers.map((user) => {
      users.push(user._id)
    })
    const sortedIds = users.sort(() => Math.random() - 0.5)
    users.map(async (user, index) => {
      const sortUsers = await User.updateOne(
        { _id: user },
        { $set: { idsort: sortedIds[index] } }
      )
    })
    return 'Ok'
  } catch (error) {
    return JSON.stringify({ msg: error.message })
  }
}
