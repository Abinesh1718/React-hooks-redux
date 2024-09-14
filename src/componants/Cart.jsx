import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart } from '../store/slice'
import { useNavigate } from 'react-router-dom'

function Cart({ getitems }) {
    const [input, setinput] = useState("")
    const navigate = useNavigate()


    // const cart = useSelector(state => state)
    const [list, setlist] = useState([])

    useEffect(() => {
        setlist(getitems)
    }, [getitems])


    const dispatch = useDispatch()
    const handleupdate = () => {
        dispatch(addcart(input))
    }
    return (
        <div>

            <h1>This Cart Page</h1>
            <input value={input} type='text' onChange={(e) => setinput(e.target.value)} />

            <button onClick={handleupdate}>Submit</button>
            {/* 
            {cart && cart?.map((dataa, i) => (
                <h2 key={i}>{dataa}</h2>
            ))} */}


            {list && list?.map((dataa, i) => (
                <h2 key={i}>{dataa}</h2>
            ))}

            <button onClick={() => navigate('/')} >Next Page</button>

        </div>
    )
}

export default Cart