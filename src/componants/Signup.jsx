import React, { useReducer } from 'react'
function Signup() {
    
    const initialState = {
        name: "",
        email: "",
        password: ""

    }

    const rootreducer = (state, action) => {

        switch (action.type) {

            case 'name':
                return { ...state, name: action.payload };
            case 'email':
                return { ...state, email: action.payload };
            case 'password':
                return { ...state, password: action.payload };

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(rootreducer, initialState)

    
    const handleSubmit = () => {
        alert(`Submited \n\n Name:${state.name}`)
    }




    return (
        <div>
            <h1>Signup Page</h1>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' value={state.name} onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} />
                <label>Email</label>
                <input type='email' value={state.email} onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} />
                <label>Password</label>
                <input type='password' value={state.password} onChange={(e) => dispatch({ type: 'password', payload: e.target.value })} />
                <button type='submit'>Submit Form</button>
            </form>

        </div>
    )
}

export default Signup