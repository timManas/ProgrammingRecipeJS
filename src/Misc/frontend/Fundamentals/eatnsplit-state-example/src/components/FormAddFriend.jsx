import { useState } from 'react'
import { Button } from './Button'

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  function handleSubmit(event) {
    event.preventDefault() // prevent reloading

    if (!name || !image) return

    const id = crypto.randomUUID() // Creates random unique ID
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`, // Set image to the specific URL image
      balance: 0,
    }

    onAddFriend(newFriend)

    // Reset back to default
    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  )
}

export { FormAddFriend }
