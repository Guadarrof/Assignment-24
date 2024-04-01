import React from 'react'
import InputGroup from '../components/molecules/InputGroup'
import Notes from '../components/molecules/Notes'
import Button from '../components/molecules/Button'

const Home = () => {
  return (
    <>
    <div className='inputs-container'>
    <InputGroup
    labelClass='label'
    inputClass='input'
    inputId='note-title'
    action={titleChange}
    />
    <InputGroup
    labelClass='label'
    inputClass='input'
    inputId='note-content'
    action={contentChange}
    />
    <Button
    className='btn-save'
    btnText='save'
    action={saveBtn}
    />
    </div>
    <div className='notes-container'>
    <Notes/>
    </div>
    </>
  )
}

export default Home