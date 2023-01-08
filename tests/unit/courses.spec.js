import { mount } from '@vue/test-utils'
import CoursesCardList from '@/components/CoursesCardList'
import CoursesCreateForm from '@/components/CoursesCreateForm';
import Courses from '@/views/Courses';

describe('Courses', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Courses)

    // then
    expect(wrapper.text()).toMatch('Courses')
  })

  it('should have persons card list component', () => {
    // when
    const wrapper = mount(Courses)

    // then
    const cardList = wrapper.findComponent(CoursesCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have persons create form component', () => {
    // when
    const wrapper = mount(Courses)

    // then
    const createForm = wrapper.findComponent(CoursesCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
