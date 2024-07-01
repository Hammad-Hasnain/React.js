import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementHandler, incrementHandler } from './store/slices/counterSlice'

const App = () => {
  // const [count, setCount] = useState(0)

  const selector = useSelector(state => state.counterReducer.countValue)
  console.log('state =====> ', selector)

  const dispatch = useDispatch()

  return (
    <div style={{ width: '500px', margin: '30px auto', padding: '10px', boxShadow: '0 0 10px', borderRadius: '10px', textAlign: 'center' }}>
      <h1>Redux Toolkit</h1>
      <h1>Counter {selector}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => dispatch(incrementHandler())}>increase</button>
        <button onClick={() => dispatch(decrementHandler())}>decrease</button>
      </div>
    </div>
  )
}

export default App