<template>
  <h1>Das sind deine Kurse</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="course in courses" v-bind:key="course.id">
      <div class="card">
          <img :src="getAvatar(course)" class="card-img-top" alt="course.name">
          <div class="card-body">
            <h5 class="card-title">{{course.name}}</h5>
            <p class="card-text">
              Du hast {{course.name}} am {{course.day}} von {{course.start}} bis {{course.ende}}.
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Courses',
  data() {
    return {
      courses: [

      ],
    };
  },
  methods: {
    // eslint-disable-next-line consistent-return
    getAvatar(course) {
      if (course.name === 'Mathe') {
        // eslint-disable-next-line global-require
        return require('../assets/mathe.png');
      } if (course.name === 'Englisch') {
        // eslint-disable-next-line global-require
        return require('../assets/english.png');
      }
    },
  },
  mounted() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:8080/api/v1/courses', requestOptions)
      .then((response) => response.json())
      .then((result) => result.forEach((person) => {
        this.courses.push(person);
      }))
      .catch((error) => console.log('error', error));
  },
};
</script>

<style scoped>

</style>
