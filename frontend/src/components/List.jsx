import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Form from './Form'
import Edit from './Edit'

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
  const [notes, setNotes] = useState('')

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

  const handleDelete = async (_id) => {
    let res = await axios.delete(`http://localhost:3001/api/media/${_id}`)
    .catch((error) => console.log(error))
    console.log(res.data.cards)
    setFormState(initialState)
    setSubmitted(true)
    _id.target.reset()
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleUpdate = async (_id, media) => {
    const res = await axios
      .put(`http://localhost:3001/api/media/${_id}`, {notes} )
      .then((res) =>console.log(res.status))
      .catch((error) => console.log(error))
  }
 
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
        <Form />
        <form onSubmit={''}>
        <label htmlFor="Edit Note">Edit Note</label>
        <input
          type="text"
          placeholder="New Notes Here"
          id="notes"
          onChange={(event) => setNotes(event.target.value)}
          value={notes}
        /></form>
        {media.map((media) => (
          <div key={media._id}>
            <h3>Title: {media.title}</h3>
            <p>Mood: {media.mood}</p>
            <p>Platform: {media.platform}</p>
            <p>Notes: {media.notes}</p>
            <div className="Form">
      </div>
            <button onClick={() => {
              handleDelete(media._id)}}> Delete </button>
              <button onClick={() => {
              handleUpdate(media._id, notes)}}> Edit </button>
          </div>
        ))}
      </div>
  )
}

export default List