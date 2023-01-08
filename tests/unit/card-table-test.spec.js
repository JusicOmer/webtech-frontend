import { mount } from '@vue/test-utils';
import CardTableTest from '@/components/CardTableTest';

describe('Testing CarTableTest.vue', () => {
  it('should add a row for each course to the already existing row (header)', () => {
    // when
    const wrapper = mount(CardTableTest, {
      propsData: {
        courses: [
          {
            id: 1,
            name: 'Max',
            day: 'Mittwoch',
            start: '08:00',
            ende: '09:00',
          },
          {
            id: 2,
            name: 'Maxima',
            day: 'Dienstag',
            start: '08:00',
            ende: '09:00',
          },
        ],
      },
    });
    //then
    const table = wrapper.find('table')
    const row = table.findAll('tr').length
    expect(row).toEqual(3)
  });
});
