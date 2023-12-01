/**
 * We pass in {pizza} instead of pizza is because
 * we want to destructure pizzaObk from the other properties
 *
 * Otherwisse, we get this:
 * pizzaOb: {}
 * key: {}
 * properties: {}
 *
 * By Destructuring pizzaObj, we only get that part we need
 *
 */
function Pizza({ pizzaObj }) {
  console.log(pizzaObj)

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  )
}

export { Pizza }
