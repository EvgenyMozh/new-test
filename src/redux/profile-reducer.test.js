import React from "react";
import profileReducer, { addPostActionCreator } from "./profile-reducer";

it('length of posts shouuld be incremented', () => {
  let action = addPostActionCreator("testtest");
  let state = {
    posts: [
      { id: 1, message: "Привет я тут", likesCount: 11 },
      { id: 2, message: "Меня зовут милка", likesCount: 20 },
    ]
  };
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
  expect(newState.posts[2].message).toBe('testtest');
  
})

