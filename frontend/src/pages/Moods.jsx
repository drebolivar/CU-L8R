import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Form from '../components/Form'

const url = 'https://cul8r.adaptable.app/'

const Moods = () => {
  const [media, setMedia] = useState([])
  const initialState = {
    title: '',
    mood: '',
    platform: '',
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(true)
  // const [notes, setNotes] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    const getMedia = async () => {
      try {
        if (submitted) {
          let res = await axios.get(url + '/api/media')
          setMedia(res.data.mood.Spoopy_Scaries)
          setSubmitted(false)
          // formState('')
          setFormState('')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMedia()
  }, [submitted])

  const handleDelete = async (_id) => {
    let res = await axios
      .delete(url + '/api/media/${_id}')
      .catch((error) => console.log(error))
    console.log(res.data.cards)
    setFormState(initialState)
    setSubmitted(true)
    _id.target.reset()
  }
  // const handleChange = (event) => {
  //   setFormState({ ...formState, [event.target.id]: event.target.value })
  // }
  //setAttacks(res.data.getAttacks.hardAttacks)
  // const handleUpdate = async (_id, media) => {
  //   const res = await axios
  //     .put(`http://localhost:3001/api/media/${_id}`, {notes} )
  //     .then((res) =>console.log(res.status))
  //     .catch((error) => console.log(error))

  const handleUpdate = (media) => {
    navigate('../Update', { state: { id: media } })
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
      {/* <Form /> */}
      {media.map((media) => (
        <div className="cards" key={media._id}>
          <div className="buttondiv">
            <button
              className="watchedbttn"
              onClick={() => {
                handleDelete(media._id)
              }}
            >
              {' '}
              Watched It!!{' '}
            </button>
            <button className="editbttn" onClick={() => handleUpdate(media)}>
              Edit{' '}
            </button>
          </div>
          <h3>{media.title}</h3>
          <p>Ideal for {media.mood} type vibes</p>
          <p>You can watch it on {media.platform}</p>
          <p>Notes: {media.notes}</p>
        </div>
      ))}
    </div>
  )
}
export default Moods
