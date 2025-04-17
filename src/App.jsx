import { useState } from 'react'
import Section1 from './Component/section1'
import SwiperSection from './Component/SwiperSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section1 />
      <SwiperSection />
    </>
  )
}

export default App
