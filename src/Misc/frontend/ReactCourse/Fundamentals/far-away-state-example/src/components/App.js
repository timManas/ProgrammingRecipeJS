import { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if (confirmed) 
      setItems([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}


/**
 * Questions
 * 1. Why store the added items in the App component ? 
 *  > So we can pass the items into the Packaging List
 * 
 * 2. What is e.preventDefault ?
 * >  This prevents the page from RELOAD when button has been clicked and form submitted 
 * 
 * 3. Why does Form.js need a state ? Why cant we just add an item ?
 *  > Because once we click on Add. We set the state of description and qty to be blank and 1
 * 
 * 4. What triggers handleSubmit() ? 
 *  > The form component has "onSubmit={handleSubmit}"
 * 
 * 5. Where does the 'event' argument come from in  handleSubmit(event) {...} ?
 *  > As soon as the event submit happens, react will call the handleSubmit function and pass the event object
 * > event object is an object will all the current event
 *  
 * */
