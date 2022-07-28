import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Form from '../components/Form'
import List from '../components/List'

const Home = () => {
  return (
  <div className='grid-main'>
    <div className='grid-form'><Form /></div>
    <div className='grid-list'><List /></div>
  </div>
  )
}

export default Home