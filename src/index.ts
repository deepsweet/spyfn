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

    const result = getResult({
      index: calls.length,
      args
    })

    calls.push(args)

    return result
  }

  return spy
}

export const getSpyCalls = (spy: Spy): Calls => spy(GET_SPY_CALLS_SYMBOL)
