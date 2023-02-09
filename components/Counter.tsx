import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center p-10">
      <div className="text-4xl font-bold">{count}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
