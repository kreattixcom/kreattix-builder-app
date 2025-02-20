import { increament } from '../../app/features/counterSlice'
import { useAppDispatch, useCounterSelector } from '../../app/hooks'

const CounterPage = () => {
  const dispatch = useAppDispatch()
  const { count } = useCounterSelector()

  return <button onClick={() => dispatch(increament())}>Count is {count}</button>
}

export default CounterPage
