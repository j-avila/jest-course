import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer'

describe('Footer', () => {
  const footer = mount(<Footer />)
  test('should render correctly', () => {
    expect(footer.length).toBe(1)
  })
  test('mostrar el texto del footer', () => {
    expect(footer.find('.Footer-title').text()).toBe('Platzi Store')
  })
})

describe('Footer snapshot', () => {
  test('comprobar la UI del componente', () => {
    const footer = create(<Footer />)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})
