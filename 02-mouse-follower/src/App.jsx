import { useEffect, useState } from "react"

function App() {
  // Estado para habilitar/deshabilitar el seguimiento del puntero
  const [enabled, setEnabled] = useState(false)
  // Estado para almacenar la posición del puntero
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Log para depuración, muestra si el seguimiento está habilitado o no
    console.log('effect', { enabled })

    // Función para manejar el movimiento del puntero
    const handleMove = (event) => {
      const { clientX, clientY } = event
      // Log para depuración, muestra la posición actual del puntero
      console.log({ clientX, clientY })
      // Actualiza el estado con la nueva posición del puntero
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      // Si el seguimiento está habilitado, añade el event listener
      window.addEventListener('pointermove', handleMove)
    }

    // Función de limpieza para eliminar el event listener cuando el componente se desmonte o el estado 'enabled' cambie
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]) // El efecto se ejecuta cada vez que 'enabled' cambia

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)` // Mueve el div según la posición del puntero
      }} />
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
