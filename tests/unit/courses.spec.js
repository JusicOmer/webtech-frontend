import { mount } from '@vue/test-utils';
import CardTableTest from '@/components/CardTableTest';
import CoursesCreateForm from '@/components/CoursesCreateForm';
import Courses from '@/views/Courses';

describe('Courses', () => {
  it('should show heading of page', () => {
    // when
    const wrapper = mount(Courses);

    // then
    expect(wrapper.text().trimStart()).toMatch('Kurse');
  });

  it('should have CardTableTest component', () => {
    // when
    const wrapper = mount(Courses);

    // then
    const cardTable = wrapper.findComponent(CardTableTest);
    expect(cardTable.exists()).toBeTruthy();
  });

  it('should have CoursesCreateForm component', () => {
    // when
    const wrapper = mount(Courses);

    // then
    const createForm = wrapper.findComponent(CoursesCreateForm);
    expect(createForm.exists()).toBeTruthy();
  });
});
