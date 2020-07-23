import React, { useState, useEffect } from "react";
import _ from "lodash";
import PostSnippet from "./PostSnippet";
import db from "../../firebase";
import { userStore } from "./Store";
function MyPosts() {
  const [posts, setPost] = useState([]);
  const user = userStore.useState((s) => s.user);

  useEffect(() => {
    db.collection("posts")
      .where("uid", "==", user.uid)
      .onSnapshot(async (snap) => {
        let documents = await snap.docs.map((post) => {
          let data = post.data();
          return {
            id: post.id,
            ...data,
          };
        });
        setPost(documents);
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
export default MyPosts;
