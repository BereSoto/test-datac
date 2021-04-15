/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import TheHeader from '~/components/TheHeader.vue'

describe('TheHeader.vue', () => {
  test('Header is a <header>', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.element.tagName === 'HEADER').toBeTruthy()
  })
})
