import React, { useState } from "react";
import Post from "./Post";
import { Router, Link, navigate } from "@reach/router";
import Posts from "./Posts";
import { PageHeader, Menu } from "antd";
import { MenuOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import { auth } from "../../firebase";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";
import SignUp from "./SignUp";
import { userStore } from "./Store";
import MyPosts from "./MyPosts";
function App() {
  const user = userStore.useState((s) => s.user);

  const signOut = () => {
    auth.signOut().then(() => navigate("/signup"));
  };
  return (
    <div className="app_container">
      <Menu mode="horizontal">
        <Menu.Item key="1" icon={<MenuOutlined />}>
          <Link to="/posts">Posts</Link>
        </Menu.Item>
        {user && (
          <Menu.Item key="2" icon={<EditOutlined />}>
            <Link to="/create_post"> Create Post</Link>
          </Menu.Item>
        )}
        {user && (
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/my_posts">My Posts</Link>
          </Menu.Item>
        )}
        {!user ? (
          <Menu.Item key="4" style={{ float: "right" }} onClick={signOut}>
            <p> Sign In</p>
          </Menu.Item>
        ) : (
          <Menu.Item key="4" style={{ float: "right" }} onClick={signOut}>
            <p>Sign Out</p>
          </Menu.Item>
        )}
      </Menu>
      <div className="page_handler_div">
        <PageHeader
          style={{ border: "1px solid rgb(235, 237, 240)" }}
          title="Post_IT"
        />
      </div>
      <Router>
        {user ? (
          <>
            <Posts default path="posts" />
            <CreatePost path="create_post" />
            <Post path="post/:id" />
            <UpdatePost path="edit/:id" />
            <MyPosts path="my_posts" />
          </>
        ) : (
          <>
            <Posts path="posts" />
            <Post path="post/:id" />
            <SignUp default path="signup" />
          </>
        )}
      </Router>
    </div>
  );
}
export default App;
