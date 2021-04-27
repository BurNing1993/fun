import axios from 'axios'
import { useEffect, useState } from 'react'
interface Props {
  url: string
}

interface Params {
  idx?: number
}

export default function Dog() {
  const [url,setUrl]=  useState('/loading.png')
  useEffect(() => {
    axios({
      url: '/api/dog',
      method: 'GET',
    }).then((res) => {
      setUrl(res.data.url)
    }).catch(err=>{
      console.error(err)
    })
  }, [])
  return (
    <div className="border border-gray-100">
      <div className="shadow-md h-10 leading-10	 px-5">1</div>
      <div className="p-5">
        <img src={url} alt="dog-img" />
      </div>
    </div>
  )
}
