import React, { useCallback, useContext, useMemo, useState } from 'react'
import { Context } from '../App'
import Cart from './Cart'
import List from './List.jsx'

function Home() {

    const data = useContext(Context)
    const [count, setcount] = useState(0)
    const [dark, setdark] = useState()

    const handleOnclick = useMemo(() => {
        return slowfunction(count)
    }, [count])

    // const handleOnclick = slowfunction(count)


    const callbackData = useCallback(() => {
        return [count + 2, count * 2, count * 8]
    }, [count])


    // const callbackData = [count + 2, count * 2, count * 8]


    const themeChange = {
        backgroundColor: dark ? 'red' : "black",
        color: "white"
    }



    return (
        <div>
            <h1 style={themeChange} >{handleOnclick}</h1>

            <input type='number' onChange={(e) => setcount(e.target.value)} />

            <button onClick={() => setdark(prev => !prev)}>Submit the button</button>

            <List getitems={callbackData} />
        </div>
    )
}


export default Home

function slowfunction(n) {

    for (let i = 0; i < 1000000000; i++) { }

    return n * n

}