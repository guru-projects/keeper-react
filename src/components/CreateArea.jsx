import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
const [expand, setExpand] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
function handleExpand() {
setExpand(true);
}
  return (
    <div>
      <form className="create-note">
        {expand && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
        />
        <Zoom in={expand} >
         <IconButton onClick={submitNote} color="primary" aria-label="AddIcon" >
         <AddIcon />
       </IconButton>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
