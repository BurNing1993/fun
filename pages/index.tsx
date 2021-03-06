import axios from 'axios'
import { useEffect } from 'react'
interface Props {
  url: string
}

interface Params {
  idx?: number
}

async function getWallpaper(params?: Params) {
  return
}

export default function Home() {
  useEffect(() => {
    axios({
      url: '/api/wallpaper',
      method: 'GET',
    }).then((res) => {
      console.log(res)
    }).catch(err=>{
      console.error(err)
    })
  }, [])
  return (
    <div className="border border-gray-100">
      <div className="shadow-md h-10 leading-10	 px-5">1</div>
      <div className="p-5"></div>
    </div>
  )
}
