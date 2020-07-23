import React, { useState, useEffect } from "react";
import _ from "lodash";
import PostSnippet from "./PostSnippet";
import db from "../../firebase";
function Posts() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot(async (snap) => {
      // snap.forEach((post) => {
      //   let data = {
      //     ...post.data(),
      //     id: post.id,
      //   };
      //   console.log(data);
      //   setPost((posts) => [...posts, data]);
      // });

      let documents = await snap.docs.map((post) => {
        let data = post.data();
        return {
          id: post.id,
          ...data,
        };
      });
      setPost(documents)
    });
  }, []);
  return (
    <div className="post_container">
      {_.map(posts, (article, i) => {
        return (
          <PostSnippet
            id={article.id}
            uid={article.uid}
            key={i}
            title={article.title}
            content={article.content}
          />
        );
      })}
    </div>
  );
}
export default Posts;
