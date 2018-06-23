const GET_SPY_CALLS_SYMBOL = Symbol('get-spy-calls')

type Props = {
  index: number,
  args: any[]
}
type Calls = any[][]
type Spy = (...args: any[]) => any

export const createSpy = (getResult: (props: Props) => any) => {
  const calls: Calls = []

  const spy: Spy = (...args) => {
    if (args[0] === GET_SPY_CALLS_SYMBOL) {
      return calls
    }

    calls.push(args)

    const result = getResult({
      index: calls.length - 1,
      args
    })

    return result
  }

  return spy
}

export const getSpyCalls = (spy: Spy): Calls => spy(GET_SPY_CALLS_SYMBOL)
