import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ProviderMock from '../../__mocks__/providerMock'
import Header from '../../components/Header'

describe('<Header />', () => {
  test('should render correctly', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    )
    expect(header.length).toEqual(1)
  })

  test('render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    )
    expect(header.find('.Header-title').text()).toEqual('Platzi Store')
  })
})

describe('Header snapshot', () => {
  test('Render del componente', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    )
    expect(header.toJSON()).toMatchSnapshot()
  })
})
