import { useState } from 'react'

const Header = (props) => {
  return(
  <div>
    <h1>{props.header}</h1>
  </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive}%`} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedbackGiven = good + neutral + bad > 0

  return (
    <div>
      <Header header={"give feedback"}/>
      <Button handleClick={() => setGood(good + 1)} text={"good"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}/>
      <Header header={"statistics"}/>
      {feedbackGiven ? (
        <Statistics good={good} neutral={neutral} bad={bad}/>
      ) : (
        <p>No feedback given</p>
      )
    }
    </div>
  )
}

export default App
