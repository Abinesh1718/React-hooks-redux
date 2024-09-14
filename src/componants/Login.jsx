import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../thunk/action'
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch()

  const { data } = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(fetchData())

  }, [])


  const navigate = useNavigate()




  return (
    <div>
      <h1>Login Page</h1>

      {data && data.map((data) => (
        <p>{data?.name}</p>
      ))
      }

      <button   onClick={()=>navigate('/cart')} >Next Page</button>


    </div>
  )
}

export default Login