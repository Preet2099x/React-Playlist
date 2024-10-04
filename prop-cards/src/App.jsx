import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div>
      <div className='flex'>
        <Card name='Fry' />
        <Card name='Hermes' post='Bueracrat'/>
      </div>
      <div className='flex'>
        <Card name='Zoidberg' post='Doctor'/>
        <Card  post='Machine Expert'/>
      </div>
    </div>
  )
}

export default App
