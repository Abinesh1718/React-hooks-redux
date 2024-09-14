import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart } from '../store/slice'

function List({ getitems }) {

    // const cart = useSelector(state => state)
    const [list, setlist] = useState([])

    useEffect(() => {
        console.log("Call back !!!!!!!")
        setlist(getitems)
    }, [getitems])



    return (
        <div>

            <h1>This Cart Page</h1>

            {list && list?.map((dataa, i) => (
                <h2 key={i}>{dataa}</h2>
            ))}


        </div>
    )
}

export default List