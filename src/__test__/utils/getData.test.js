import getData from '../../utils/getData'

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  test('Lllamar una API y retornar los datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    getData('https://api.github.com/users/octocat').then(response =>
      expect(response.data).toEqual({ data: '12345' }),
    )
  })
})
