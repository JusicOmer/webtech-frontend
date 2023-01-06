<template>
  <h1>These are your courses</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="course in courses" v-bind:key="course.id">
      <div class="card">
        <img :src="getAvatar(course)" class="card-img-top"  alt="">
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
  name: 'CoursesCardList',
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // eslint-disable-next-line consistent-return
    getAvatar(course) {
      if (course.name === 'Mathe') {
        // eslint-disable-next-line global-require
        console.log('Mathe');
        //   return require('../assets/mathe.png');
      } if (course.name === 'Englisch') {
        console.log('Englisch');
        // eslint-disable-next-line global-require
        // return require('../assets/english.png');
      }
    },
  },
};
</script>

<style scoped>

</style>
