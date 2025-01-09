import React , {useState} from 'react'

const App = () => {
  
  let [counter, setCounter] = useState(0)
  // let counter = 0;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log("Hello", counter)
  }

  const subtractValue = () => {
    counter = counter - 1;
    setCounter(counter)
  }

  const reset = () => {
    counter = 0;
    setCounter(counter)
  }

  return (
    <>
    <div className='w-full h-screen bg-slate-600 flex flex-col justify-center items-center'>
      <h1 className='text-green-400 font-bold underline'>COUNTER APP</h1>

      <h2 className='font-semibold mt-2 hover:font-bold'>Value: {counter}</h2>

      <button 
      className='border-2 w-24 mt-4 rounded-md hover:border-green-400 hover:text-white' 
      onClick={addValue}>Increment</button>

      <br />

      <button 
      className='border-2 w-24 rounded-md hover:border-green-400 hover:text-white '
      onClick={subtractValue}
      >Decrement</button>
      
      <br />

      <button 
      className='border-2 w-24 rounded-md hover:border-green-400 hover:text-white '
      onClick={reset}
      >Reset</button>
    </div>
    
    </>
  )
}

export default App
