import { mount } from '@vue/test-utils'
import CoursesCreateForm from '@/components/CoursesCreateForm';

describe('Testing CoursesCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(CoursesCreateForm)

    // then
    expect(wrapper.find('#courses-create-offcanvas').classes()).not.toContain('show')
  })
})
