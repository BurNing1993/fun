import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
const DOG_URL = 'https://dog.ceo/api/breeds/image/random'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      data: { message },
    } = await axios({
      url: DOG_URL,
      method: 'GET',
      headers: {
        'User-Agent': UA,
      },
    })
    res.status(200).json({ url: message })
  } catch (error) {
    res.status(500).json(error)
  }
}
