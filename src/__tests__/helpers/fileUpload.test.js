import { fileUpload } from '../../helpers/fileUpload'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dlnsabgds',
  api_key: '582412742288218',
  api_secret: 'grfDeUNCi9RIz_rWWcdnlwgfw2M',
  secure: true,
})

describe('Testing fileUpload', () => {
  test('should to upload correctly to cloudinary', async () => {
    const imgUrl =
      'https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg'
    const resp = await fetch(imgUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'picture.jpg')

    const url = await fileUpload(file)

    expect(typeof url).toBe('string')

    const segments = url.split('/')
    const imgId = segments[segments.length - 1].replace('.jpg', '')

    const cloudResp = await cloudinary.api.delete_resources(
      ['jorunal-app/' + imgId],
      {
        resource_type: 'image',
      },
    )
  })

  test('should to return null', async () => {
    const file = new File([], 'picture.jpg')

    const url = await fileUpload(file)

    expect(url).toBe(null)
  })
})
