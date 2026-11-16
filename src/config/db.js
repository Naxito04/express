import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
  } catch (error) {
    throw new Error(`Error ${error.message}`, { cause: error })
  }
}
