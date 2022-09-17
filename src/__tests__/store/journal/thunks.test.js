import { startNewNote } from '../../../store/journal'

describe('Testing Journal Thunks', () => {
  const dispatch = jest.fn()
  const getState = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('should to create a new note', async () => {
    const uid = 'TEST-UID'
    getState.mockReturnValue({
      auth: { uid },
    })

    await startNewNote()(dispatch, getState)
    expect(dispatch).toHaveBeenCalledWith()
  })
})
