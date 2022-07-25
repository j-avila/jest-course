import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/providerMock'
import Product from '../../components/Product'
import productMock from '../../__mocks__/productMock'

describe('<Product />', () => {
  test('Render del componente product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    )

    expect(product.length).toEqual(1)
  })

  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn()
    const wrapper = mount(
      <ProviderMock>
        <Product product={productMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    )

    wrapper.find('button').simulate('click')
    expect(handleAddToCart).toHaveBeenCalledTimes(1)
  })
})
