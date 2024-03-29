import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


import { postAdded } from "./postsSlice";
import './post.css'

const AddPostForm = () => {
    const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content ) {
        dispatch(
            postAdded({
                id : nanoid(),
                title,
                content
            })
        )
        setTitle('')
        setContent('')
    }
  }
  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle"> Post title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" className="button"
        onClick={onSavePostClicked}
        >Save</button>
      </form>
    </section>
  );
};

export default AddPostForm;
