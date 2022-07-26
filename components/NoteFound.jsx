import React from 'react'
import {WrapperSingle,Inner,LeftSide,RightSide} from './SinglePin'
function NoteFound() {
   console.log("NoteFound")
  return (
    <WrapperSingle>
    <Inner>
      <LeftSide><img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></LeftSide>
      <RightSide>
          <h1>Page Not Found</h1>
          
      </RightSide>
    </Inner>
    </WrapperSingle>
  )
}

export default NoteFound

