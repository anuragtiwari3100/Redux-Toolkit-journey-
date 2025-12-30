
import './App.css'
import  Todos from './components/Todos.jsx'
import AddTodo from './components/AddTodo.jsx'
function App() {

      const awesomeStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '4rem',
    background: 'linear-gradient(90deg, #ff6ec4, #7873f5, #42f5ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 10px rgba(0,0,0,0.2)',
    textAlign: 'center',
    animation: 'glow 1.5s ease-in-out infinite alternate'
  };

  const keyframes = `
    @keyframes glow {
      0% { text-shadow: 2px 2px 10px rgba(255,110,196,0.7); }
      50% { text-shadow: 2px 2px 20px rgba(120,115,245,0.9); }
      100% { text-shadow: 2px 2px 15px rgba(66,245,239,0.8); }
    }
  `;


  return (
  <div >
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px 0', background: '#111', flexDirection: 'column' }}>
  <style>{keyframes}</style>
  <h1 style={awesomeStyle}>Radhe-Radhe  </h1>
</div>

     <AddTodo/>
     <Todos /> 
  </div>
  )
}

export default App
