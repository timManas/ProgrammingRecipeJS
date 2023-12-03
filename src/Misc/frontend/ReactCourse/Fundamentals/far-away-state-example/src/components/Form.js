import { useState } from 'react'

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(event) {
    // This prevents the page from RELOAD when button has been clicked and form submitted
    // Not part of react but part of JS
    event.preventDefault()    

    if (!description) 
      return

    const newItem = { description, quantity, packed: false, id: Date.now() }

    // This Adds an item to the App Parent Componenet via the properties
    onAddItems(newItem)

    // Reset state back to default once we submit on the re-render
    setDescription('')
    setQuantity(1)
  }

  return (
    <form className='add-form' onSubmit={(event) => handleSubmit(event)}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
