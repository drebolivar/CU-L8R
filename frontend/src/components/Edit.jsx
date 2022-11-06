import '../App.css'
import { useState } from 'react'
import axios from 'axios'

const url = 'https://cul8r.adaptable.app/'

const Edit = () => {
  const [notes, setNotes] = useState('')
  const handleUpdate = async (_id, media) => {
    const res = await axios
      .put(url + '/api/media/${_id}', { notes })
      .then((res) => console.log(res.status))
      .catch((error) => console.log(error))
    return (
      <div>
        <form onSubmit={''}>
          <label htmlFor="Edit Note">Edit Note</label>
          <input
            type="textarea"
            id="notes"
            onChange={(event) => setNotes(event.target.value)}
            value={notes}
          />
        </form>
      </div>
    )
  }
}

export default Edit
