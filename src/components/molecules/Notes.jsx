import React from 'react'
import Text from '../atoms/Text'
import Button from './Button'

const Note = ({noteTitle, noteContent, deleteAction, editAction}) => {
  return (
    <div className='note'>
      <Button
      className='btn-delete'
      btnText='x'
      action={deleteAction}
      />
      <Text
      renderAs={h3}
      className='note-title'
      content={noteTitle}
      />
      <Text
      renderAs={p}
      className='note-content'
      content={noteContent}
      />
       <Button
      className='btn-edit'
      btnText='Edit'
      action={editAction}
      />   
    </div>
  )
}

export default Note