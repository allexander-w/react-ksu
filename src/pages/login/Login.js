import React, { useState } from 'react'

import useFetch from '../../hooks/useFetch'

export const Login = props => {

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const [{isLoading, response, error}, doFetch] = useFetch('auth/login')

    const submitHandler = e => {
        e.preventDefault()
        
        const options = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            })
        }

        console.log( options )


        doFetch(options)

        console.log( response )
    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='login' value={email} onChange={ e => setEmail(e.target.value) } />
            <input type='password' placeholder='pass' value={password} onChange={ e => setPassword(e.target.value) } />

            <button type='submit'> Login </button>
        </form>
        </div>
    )
}