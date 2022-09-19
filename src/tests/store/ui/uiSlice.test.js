import {
  onCloseDateModal,
  onOpenDateModal,
  uiSlice,
} from '../../../store/ui/uiSlice'

describe('Testing uiSlice.js', () => {
  test('should to return initial State', () => {
    console.log(uiSlice.getInitialState())
    expect(uiSlice.getInitialState()).toEqual({
      isDateModalOpen: false,
    })

    // expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy()
  })

  test('should to change isDateModalOpen well', () => {
    let state = uiSlice.getInitialState()

    state = uiSlice.reducer(state, onOpenDateModal())

    expect(state.isDateModalOpen).toBeTruthy()

    state = uiSlice.reducer(state, onCloseDateModal())

    expect(state.isDateModalOpen).toBeFalsy()
  })
})
