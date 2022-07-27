import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Form from './Form'

const List = () => {
  const [media, setMedia] = useState([])
  const initialState = {
    title: '',
    mood: '',
    platform: '',
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(true)

  let navigate = useNavigate()

  useEffect(() => {
    const getMedia = async () => {
      try {
        if (submitted) {
          let res = await axios.get('http://localhost:3001/api/media')
          setMedia(res.data)
          setSubmitted(false)
          formState('')
          setFormState('')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMedia()
  }, [submitted])

  // const handleChange = (event) => {
  //   setFormState({ ...formState, [event.target.id]: event.target.value })
  // }
 
  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   let res = await axios.post('http://localhost:3001/api/media', formState)
  //   console.log(res)
  //   console.log(formState)
  //   setFormState(initialState)
  //   setSubmitted(true)
  //   event.target.reset()
  // }

  return (
      <div className="watchrList">
        <h1>Watchr List:</h1>
        {media.map((media) => (
          <div key={media._id}>
            <h3>Title: {media.title}</h3>
            <p>Mood: {media.mood}</p>
            <p>Platform: {media.platform}</p>
            <p>Notes: {media.notes}</p>
          </div>
        ))}
      </div>
  )
}

export default List