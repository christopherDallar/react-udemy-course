import { checkingCredentials } from '../../../store/auth'
import { checkingAuth } from '../../../store/auth/thunks'

jest.mock('../../../firebase/providers')

describe('Testing auth thunks', () => {
  const dispatch = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('should to invoke checkingCredentials', async () => {
    await checkingAuth()(dispatch)
    // const value = checkingCredentials()

    // console.log(value)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })
})
