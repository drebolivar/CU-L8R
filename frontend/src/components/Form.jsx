const Form = (props) => {

return(

<div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <br></br>
        <label htmlFor="mood">Mood</label>
        <select id="mood" onChange={handleChange} value={formState.mood}>
          <option>What mood is this ideal for?</option>
          <option value="Spoopy Scaries">Spoopy Scaries</option>
          <option value="Date Night">Date Night</option>
          <option value="Group Watch">Group Watch</option>
          <option value="Background Noise">Background Noise</option>
          <option value="Film School Homework">Film School Homework</option>
          <option value="Stonesy Bonesy">Stonesy Bonesy</option>
        </select>
        <p></p>
        <label htmlFor="platform">Platform</label>
        <select id="platform" onChange={handleChange} value={formState.mood}>
          <option>How are you watching?</option>
          <option value="Theater">Theater</option>
          <option value="Physical Copy">Physical Copy</option>
          <option value="VOD">Video On Demand</option>
          <option value="Netflix">Netflix</option>
          <option value="Hulu">Hulu</option>
          <option value="Amazon Prime">Amazon Prime Video</option>
          <option value="Disney+">Disney+</option>
          <option value="Undetermined">Not sure right now</option>
        </select>
        <p></p>
        <label htmlFor="notes">Notes: </label>
        <textarea
          id="notes"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.notes}
        ></textarea>
        <p></p>
        <button type="submit">Send</button>
      </form>
      </div>
)
}

export default Form