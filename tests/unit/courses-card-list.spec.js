import { mount } from '@vue/test-utils'
import PersonsCardList from '@/components/PersonsCardList'
import CoursesCardList from '@/components/CoursesCardList';

describe('Testing CoursesCardList.vue', () => {
  it('should render a course card for each course', () => {
    // when
    const wrapper = mount(CoursesCardList, {
      propsData: {
        course: [
          {
            id: 1,
            name: 'Max',
            day: 'Mittwoch',
            start: '8:00',
            ende: '9:00'
          },
          {
            id: 2,
            name: 'Maxima',
            day: 'Dienstag',
            start: '8:00',
            ende: '9:00'
          }
        ]
      }
    })

    // then
    const courseCards = wrapper.findAllComponents(CourseCard)
    expect(courseCards.length).toBe(2)
  })
})
