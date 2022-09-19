import calendarApi from '../../api/calendarApi'
import { getEnvVariables } from '../../helpers/getEnvVariables'

describe('Testing calendarApi.js', () => {
  test('should have default settings', () => {
    const { VITE_API_URL } = getEnvVariables()

    expect(calendarApi.defaults.baseURL).toBe(VITE_API_URL)
  })

  test('should have x-token inside header of each queries', async () => {
    const token = 'ABC-123-XYZ'
    localStorage.setItem('token', token)

    const res = await calendarApi.get('/auth')

    console.log(res.config.headers)
    expect(res.config.headers['x-token']).toBe(token)
  })
})
