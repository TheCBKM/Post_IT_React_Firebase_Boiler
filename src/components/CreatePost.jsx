import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import db from "../../firebase";
import { navigate } from "@reach/router";
import { userStore } from "./Store";
export default function () {
  const user = userStore.useState((s) => s.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(event.target.value);
  const onContentChange = (e) => setContent(event.target.value);
  const onSubmit = () => {
    console.log("Click", title, content);
    db.collection("posts")
      .add({
        title,
        content,
        uid: user.uid,
      })
      .then(console.log)
      .catch(console.log);
    setTitle("");
    setContent("");
    navigate("/posts");
  };
  return (
    <div>
      <div className="post_inputs_container" style={{marginTop:20}}>
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Title</h2>
          </div>
          <div className="post_input_value">
            <Input
              placeholder="POST TITLE"
              value={title}
              onChange={onTitleChange}
            />
          </div>
        </div>
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Content</h2>
          </div>
          <div className="post_input_value" style={{ marginBottom: 20 }}>
            <TextArea
              rows={10}
              placeholder="POST TITLE"
              value={content}
              onChange={onContentChange}
            />
          </div>
        </div>
        <div className="post_input_button" style={{ float: "right" }}>
          <Button size="large" type="primary" onClick={onSubmit}>
            Create Post
          </Button>
        </div>
      </div>
    </div>
  );
}
