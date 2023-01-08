<template>
  <CoursesUpdateForm v-if="editmode" :courseid="this.selectedCourse" />
  <div class="page-content page-container" id="page-content" style="margin: auto; width: 80%">
    <div class="padding">
      <div class="row container d-flex justify-content-center">
        <div class="col-lg-8 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Alle deine Kurse</h4>
              <p class="card-description">
                Hier ist eine Übersicht deiner Kurse
              </p>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Tag</th>
                    <th>Startzeit</th>
                    <th>Endzeit</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="course in courses" v-bind:key="course.id">
                    <td>{{course.name}}</td>
                    <td>{{course.day}}</td>
                    <td>{{zeit(course.start.toString().replace(/,/g, ':')) + " Uhr"}}</td>
                    <td>{{zeit(course.ende.toString().replace(/,/g, ':')) + " Uhr"}}</td>
                    <td class="rechts">
                      <button type="button" class="btn btn-primary" @click=
                        "editCourse(course.id)">Edit </button>
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
    zeit(zeit) {
      if (!zeit.substring(zeit.length - 2)
        .startsWith(':')) {
        return zeit.toString();
      }
      return `${zeit.toString()}0`;
    },
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
      window.location.reload();
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
  button{
    color: white;
    padding: 1px 32px;
    text-align: center;
    font-size: 16px;
    margin: 1px 1px;
  }
   .page-content {
     margin: auto;
   }
   thead{
     background: khaki;
     border-: 10px;
   }
   thead{
     font-size: 130%;
   }
   tbody{
     background: antiquewhite;
   }
   .btn-danger{
     background: #ff4d54;
   }
   .btn-primary{
     background: lightskyblue;
   }
   .stretch-card{
     width: 90%;
   }
   .rechts{
     width: 30%;
   }
</style>
