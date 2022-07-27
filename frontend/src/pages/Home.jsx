import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Form from '../components/Form'
import List from '../components/List'

const Home = () => {
  return (
  <div>
    <Form />
    <List />
  </div>
  )
}

export default Home