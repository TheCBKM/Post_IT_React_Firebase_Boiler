import React from "react";
import { Card } from "antd";
import { Link } from "@reach/router";
import { userStore } from "./Store";
import db from '../../firebase'
export default function PostSnippet(props) {
  const user = userStore.useState((s) => s.user);
  const deletePost = () => {
    console.log("Delete");
    db.collection("posts").doc(props.id).delete()
  };

  return (
    <div className="post_snippet_container">
      <div className="article">
        <Card
          title={props.title}
          extra={
            <div className="post_links">
              <Link
                to={`/post/${props.id}`}
                style={{ marginRight: 5, float: "left" }}
              >
                Read Full Article
              </Link>
              {user ? (
                user.uid == props.uid ? (
                  <div style={{ float: "right" }}>
                    {" "}
                    <a onClick={deletePost}>| Delete</a>{" "}
                    <Link to={`/edit/${props.id}`}>| Edit</Link>
                  </div>
                ) : (
                  ""
                )
              ) : (
                <Link to={`/signup`}>| SignUp</Link>
              )}
            </div>
          }
          style={{ marginTop: 20 }}
        >
          <p>{props.content}</p>
        </Card>
      </div>
    </div>
  );
}
