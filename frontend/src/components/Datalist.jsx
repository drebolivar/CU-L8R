const List = () => {

return(
    <div className="watchrDataList">
        <p>{media.map((media) => (
          <div key={media._id}>
            <h3>Title: {media.title}</h3>
            <p>Mood: {media.mood}</p>
            <p>Platform: {media.platform}</p>
            <p>Notes: {media.notes}</p>
          </div>
        )
        )}</p>
    )}
    
export default List