<template>
  <div class="offcanvas offcanvas-end show" tabindex="-1" id
    ="courses-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Update Course</h5>
      <button type="button" id="close-offcanvas" class=
        "btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
      </button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="courses-create-form" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name
            <input type="text" class="form-control" id="name" v-model="name"  >
          </label>
          <div class="invalid-feedback">
            Please provide the first name.
          </div>
        </div>
        <div class="mb-3">
          <label for="day" class="form-label">Day
            <select id="day" class="form-select" v-model="day" >
              <option value="" selected disabled>Choose...</option>
              <option value="Montag">Montag</option>
              <option value="Dienstag">Dienstag</option>
              <option value="Mittwoch">Mittwoch</option>
              <option value="Donnerstag">Donnerstag</option>
              <option value="Freitag">Freitag</option>
            </select>
          </label>
          <div class="invalid-feedback">
            Please select a valid gender.
          </div>
        </div>
        <div class="mb-3">
          <label for="start" class="form-label">Startzeit
            <input type="time" class="form-control" id="start" v-model="start" placeholder=
              "this.ende" >
          </label>
          <div class="invalid-feedback">
            Please provide the time of start.
          </div>
        </div>
        <div class="mb-3">
          <label for="ende" class="form-label">Endzeit
            <input type="time" class="form-control" id="ende" v-model="ende" placeholder=
              "hh:mm:ss" >
          </label>
          <div class="invalid-feedback">
            Please provide the time of end.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style=
              "color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click=
            "updateCourse(courseid)">Update</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

  name: 'CoursesUpdateForm',
  props: {
    courseid: {
      required: true,
    },
  },
  data() {
    return {
      name: '',
      day: '',
      start: '',
      ende: '',
      serverValidationMessages: [],
    };
  },
  emits: ['updated'],
  methods: {
    async updateCourse(id) {
      const valid = this.validate();
      if (valid) {
        try {
          const myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');

          const raw = JSON.stringify({
            name: this.name,
            day: this.day,
            start: this.start,
            ende: this.ende,
          });

          const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
          };

          const response = await fetch(`http://localhost:8080/api/v1/courses/${id}`, requestOptions);
          await this.handleResponse(response);
        } catch (e) {
          console.log(e);
        }
      }
      console.log('updated Course');
      console.log(id);
    },
    async handleResponse(response) {
      if (response.ok) {
        this.$emit('updated', response.headers.get('location'));
        document.getElementById('close-offcanvas').click();
      } else if (response.status === 400) {
        // eslint-disable-next-line no-param-reassign
        response = await response.json();
        response.errors.forEach((error) => {
          this.serverValidationMessages.push(error.defaultMessage);
        });
      } else {
        this.serverValidationMessages.push('Unknown error occurred');
      }
    },
    validate() {
      // const form = document.getElementById('card-table-test-form');
      return true;
    },
  },

};
</script>

<style scoped>

</style>
