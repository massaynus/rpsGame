import ImageButton from "./components/ImageButton/ImageButton"
import sissors from './assets/hands/sissors.png'
import rock from './assets/hands/rock.png'
import paper from './assets/hands/paper.png'
import styles from "./App.module.css"

import { Choice, generateComputerChoice, resovleMatch } from "./lib/gameLogic"
import { useState } from "react"

function App() {
  const [result, setResult] = useState('')
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  function playMatchHandler(choice: Choice) {
    const cc = generateComputerChoice()
    const result = resovleMatch(choice, cc)

    let text = ''
    if (result === 0) text = `it's a draw: ${choice} vs ${cc}`
    else if (result === 1) {
      text = `player wins: ${choice} vs ${cc}`
      setPlayerScore(s => s + 1)
    }
    else {
      text = `computer wins: ${choice} vs ${cc}`
      setComputerScore(s => s + 1)
    }

    setResult(text)
  }


  return (
    <div className={styles.container}>
      <div className={styles.gameText}>
        <h1>Score: {playerScore}-{computerScore}</h1>
        <h3>{result}</h3>
      </div>
      <div className={styles.handsRow}>
        <ImageButton src={sissors} alt="sissors" onClick={() => playMatchHandler('sissors')} />
        <ImageButton src={rock} alt="rock" onClick={() => playMatchHandler('rock')} />
        <ImageButton src={paper} alt="paper" onClick={() => playMatchHandler('paper')} />
      </div>
    </div>
  )
}

export default App
