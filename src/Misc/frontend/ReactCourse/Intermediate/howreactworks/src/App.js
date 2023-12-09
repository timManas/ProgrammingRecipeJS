import { Tabbed } from './components/Tabbed'
import { content } from './content'

export default function App() {
  return <Tabbed content={content} />
}

/***
 Notes
 - key props will allow react to identify unique elements
  > Will cause a render when that component modifies
 */
