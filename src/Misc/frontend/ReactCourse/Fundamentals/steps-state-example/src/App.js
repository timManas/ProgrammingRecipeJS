import { Steps } from './Steps'
import { StepMessage } from './StepMessage'

export default function App() {
  return (
    <div>
      <Steps />

      <StepMessage step={1}>
        <p>This is child #1</p>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>

      <StepMessage step={2}>
        <p>This is child #2</p>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
    </div>
  )
}
