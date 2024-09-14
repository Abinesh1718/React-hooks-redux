export const fetchData = () => {

    return async (dispatch) => {

        dispatch({ type: "requst" })
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');

            const data = await result.json()
            dispatch({ type: "success", payload: data })

        } catch (error) {

            dispatch({ type: "error", error: "Network isssuee" })

        }

    }

}