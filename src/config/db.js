import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB)
  } catch (error) {
    throw new Error(`Error ${error.message}`, { cause: error })
  }
}
