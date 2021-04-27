import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { stringify } from 'querystring'
const WALLPAPER_URL = 'https://cn.bing.com/HPImageArchive.aspx'
// 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1619491558821&pid=hp&scope=web&FORM=ANNTH1&uhdwidth=1920&uhdheight=1080&mkt=zh-CN'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46'

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const params = {
//       format: 'js',
//       idx: 0,
//       n: 1,
//       pid: 'hp',
//       FORM: 'BEHPTB',
//       uhd: 1,
//       uhdwidth: 1920,
//       uhdheight: 1080,
//       mkt: 'zh-CN',
//       ...req.query,
//     }
//     const url = WALLPAPER_URL +'?'+ stringify(params)
//     console.log(url);
//     const response = await fetch(url)
//     const data = response.json()
//     res.status(200).json(data)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json(error)
//   }
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      data: {
        images: [{ url, enddate, copyright }],
      },
    } = await axios({
      url: WALLPAPER_URL,
      method: 'GET',
      headers: {
        'User-Agent': UA,
      },
      params: {
        format: 'js',
        idx: 0,
        n: 1,
        pid: 'hp',
        FORM: 'BEHPTB',
        uhd: 1,
        uhdwidth: 1920,
        uhdheight: 1080,
        mkt: 'zh-CN',
        ...req.query,
      },
    })
    res.status(200).json({ url, enddate, copyright })
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}
