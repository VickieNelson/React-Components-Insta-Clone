/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";

import "./components/PostsContainer/PostHeader";
import "./components/PostsContainer/LikeSection";
import "./components/PostsContainer/Post";
import "./components/PostsContainer/PostsPage";
import "./components/PostsContainer/Posts.css";

import "./components/CommentSection/Comment";
import "./components/CommentSection/CommentInput";
import "./components/CommentSection/CommentSectionContainer";
import "./components/CommentSection/Comment.css";

import "./components/SearchBar/SearchBarContainer";
import "./components/SearchBar/SearchBar.css";

// import the PostsPage and SearchBar and add them to the App

const App = () => {
  return (
    <div className="App">
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
