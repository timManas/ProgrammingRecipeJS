function StepMessage(props) {
  return (
    <div className='message'>
      <h1>Step {props.step}</h1>
      {props.children}
    </div>
  )
}

export { StepMessage }
