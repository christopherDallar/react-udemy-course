import { useState, useEffect } from 'react'
import ServiceGif from './../../core/services/gif/Gif.service'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    ServiceGif.getGifs(category).then((imgs) =>
      setState({
        data: imgs,
        loading: false,
      }),
    )
  }, [category])

  return state // { data: [], loading: true }
}
