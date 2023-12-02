function StepMessage(props) {
  console.log(`props: ${JSON.stringify(props)}`)

  return (
    <div className='message'>
      <h3>Step {props.step}</h3>
      {props.children}
    </div>
  )
}

function getCircularReplacer() {
  const ancestors = []
  return function (key, value) {
    if (typeof value !== 'object' || value === null) {
      return value
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop()
    }
    if (ancestors.includes(value)) {
      return '[Circular]'
    }
    ancestors.push(value)
    return value
  }
}

export { StepMessage }
