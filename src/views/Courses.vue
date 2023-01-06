<template>
  <h1>Courses</h1>
  <div class="container-fluid">
    <card-table-test :courses="this.courses"></card-table-test>
  </div>
  <courses-create-form @created="addCourse"></courses-create-form>
</template>

<script>
// eslint-disable-next-line import/extensions
import CoursesCreateForm from '@/components/CoursesCreateForm';
// eslint-disable-next-line import/extensions
// import coursesCardList from '@/components/CoursesCardList';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import CardTableTest from '@/components/CardTableTest';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Courses',
  components: {
    CardTableTest,
    CoursesCreateForm,
  },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    // eslint-disable-next-line consistent-return
    addCourse(courseLocation) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(`http://localhost:8080/api/v1/courses/${courseLocation}`, requestOptions)
        .then((response) => response.json())
        .then((course) => this.courses.push(course))
        .catch((error) => console.log('error', error));
    },
  },
  mounted() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:8080/api/v1/courses', requestOptions)
      .then((response) => response.json())
      .then((result) => result.forEach((course) => {
        this.courses.push(course);
      }))
      .catch((error) => console.log('error', error));
  },
};
</script>

<style scoped>

</style>
