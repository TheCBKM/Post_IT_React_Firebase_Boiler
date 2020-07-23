import React, { useState, useEffect } from "react";
import { PageHeader, Card } from "antd";
import api from "../mockapi";
import db from "../../firebase";
export default function Post(props) {
  const [title, setTitle] = useState("Loading...");
  const [content, setContent] = useState("Loading...");
  useEffect(() => {
    console.log(props.id);
    db.collection("posts")
      .doc(props.id)
      .get()
      .then((snap) => {
        console.log(snap.data());
        let { content, title } = snap.data();
        console.log(content, title);
        setTitle(title);
        setContent(content);
      });
  }, []);
  console.log(props);
  return (
    <div>
      <div className="post_content_container">
        <Card style={{ marginTop: 20 }} title={(title)}>
          {content.split("\n").map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </Card>
      </div>
    </div>
  );
}
