import { fileUpload } from '../../helpers/fileUpload'

describe('Testing fileUpload', () => {
  test('should to upload correctly to cloudinary', async () => {
    const imgUrl =
      'https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg'
    const resp = await fetch(imgUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'picture.jpg')

    const url = await fileUpload(file)

    expect(typeof url).toBe('string')
  })
})
