import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card className='rounded-3 '>
        <h1 className='mb-3'>Counter</h1>
            <button className='plus'  onClick={()=>setCount(count + 1)}>Increment +</button>
          <div className="count mt-3 ">
          {count}
          </div>
            <button className='minus mx-2 mt-2'  onClick={()=>setCount(count - 1)}>Decrement -</button>
      </Card>
    </>
  )
}

export default App
