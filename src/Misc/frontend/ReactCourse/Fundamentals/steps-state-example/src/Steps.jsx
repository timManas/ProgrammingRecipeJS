import { useState } from 'react'
import { StepMessage } from './StepMessage'
import { Button } from './Button'
import { messages } from './messages'

function Steps() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function buttonClicked() {
    setIsOpen(!isOpen)
  }

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  function onClickInnerButton(messages) {
    alert(`${messages[step - 1]}`)
  }

  return (
    <div>
      <button className='close' onClick={buttonClicked}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            message: {messages[step - 1]}
            <div className='buttons'>
              <Button onClick={() => onClickInnerButton(messages)}>
                Learn how by Clicking here
              </Button>
            </div>
          </StepMessage>

          <div className='buttons'>
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export { Steps }
