<template>
  <CoursesUpdateForm v-if="editmode" :courseid="this.selectedCourse"/>
  <div class="page-content page-container" id="page-content">
    <div class="padding">
      <div class="row container d-flex justify-content-center">
        <div class="col-lg-8 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">All courses</h4>
              <p class="card-description">
                Here is an overview of all your courses
              </p>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Day</th>
                    <th>Starting time</th>
                    <th>Ending time</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="course in courses" v-bind:key="course.id">
                    <td>{{course.name}}</td>
                    <td>{{course.day}}</td>
                    <td>{{course.start}}</td>
                    <td>{{course.ende}}</td>
                    <td>
                      <button type="button" class="btn btn-primary" @click=
                        "editCourse(course.id)">Edit</button>
                      <button type="button" class="btn btn-danger" @click=
                        "deleteCourse(course.id)">Delete</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import CoursesUpdateForm from '@/components/CoursesUpdateForm';

export default {
  name: 'CardTableTest',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CoursesUpdateForm,
  },
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      courseid: '',
      editmode: false,
      selectedCourse: null,
      serverValidationMessages: [],
    };
  },
  methods: {
    async editCourse(id) {
      this.editmode = true;
      this.selectedCourse = id;
      console.log(id);
    },
    async deleteCourse(id) {
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };
      const response = await fetch(`http://localhost:8080/api/v1/courses/${id}`, requestOptions);
      await this.handleResponse(response);

      console.log(id);
    },
    async handleResponse(response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'));
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
      const form = document.getElementById('card-table-test');
      form.classList.add('was-validated');
      return form.checkValidity();
    },
  },

};
</script>

<style scoped>
</style>
