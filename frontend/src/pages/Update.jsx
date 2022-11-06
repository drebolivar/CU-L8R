import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const url = 'https://cul8r.adaptable.app/'

const UpdateListing = () => {
  // I used this as a reference to get the id over: https://stackoverflow.com/questions/72017435/how-can-i-pass-parameters-to-route-with-navigate-function-in-react

  let location = useLocation()
  let navigate = useNavigate()

  const initialState = {
    title: `${location.state.id.title}`,
    mood: `${location.state.id.mood}`,
    platform: `${location.state.id.platform}`,
    notes: `${location.state.id.notes}`
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      url + `/api/media/${location.state.id._id}`,
      formState
    )
    console.log(res)
    setFormState(initialState)
    navigate(-1)
  }

  return (
    <div className="updateContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input
          type="text"
          placeholder="Title?"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <br></br>
        <br></br>
        <label htmlFor="mood"></label>
        <input
          type="text"
          placeholder="What kind of vibe?"
          id="mood"
          onChange={handleChange}
          value={formState.mood}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="platform?"
          id="platform"
          onChange={handleChange}
          value={formState.platform}
        />
        <br></br>
        <br></br>
        <label htmlFor="notes"></label>
        <textarea
          id="notes"
          placeholder="Any thoughts?"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.notes}
        ></textarea>
        <br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default UpdateListing
