<template>
  <v-row
    class="mt-n12"
    justify="center"
  >
    <v-col
      cols="10"
      lg=""
      class="grey lighten-5 position align justify"
      style="height: 100%;"
    >
      <v-card
        class="mx-auto paddingvcard"
      >
        <v-col
          cols="12"
          sm="12"
        >
          <v-list-item-avatar
            class="align-self-center sizeAvt"
            color="white"
          >
            <v-img
              src="@/assets/login-page-logo.png"
            />
          </v-list-item-avatar>
          <v-list-item-avatar
            class="align-self-end headWidth"
          >
            <p class="loginFont">
              Login
            </p>
          </v-list-item-avatar>
        </v-col>
        <form>
          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              filled
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            />
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              filled
              @click:append="show1 = !show1"
            />
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <v-btn
              class="mr-4 btnColo"
              @click="submit"
            >
              Login
            </v-btn>
            <v-btn
              class="btnColo"
              @click="clear"
            >
              clear
            </v-btn>
          </v-col>
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import axios from 'axios'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
    },

    data: () => ({
      name: '',
      email: '',
      alignment: 'center',
      justify: 'center',
      show1: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        // console.log('Axios starts ')
        const params = {
          uID: 'string',
          userName: this.name,
          password: this.password,
          isActive: true,
        }
        const headers = {
          'content-type': 'text/json',
        }
        axios
          .post(
            'https://webapps.klikpal.com:9002/dashboard-api/user/login', params, headers,
          )
          .then(response => {
            const token = response.data.data
            if (token.token) {
              localStorage.setItem('user', token.token)
              this.$router.push('/dashboard/panel')
            } else {
              this.$router.push('/')
            }
            // console.log(token)
            return token.token
          })
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
      },
    },
  }
</script>
<style>
@media screen and (max-width: 599px) and (min-width: 300px) {
  .position {
    position: relative;
    top: 4px !important;
    left: 11px !important;
  }
}
@media screen and (max-width: 899px) and (min-width: 600px) {
  .position {
    position: relative;
    top: 70px !important;
    left: 234px !important;
  }
}
@media screen and (max-width: 1000px) and (min-width: 900px) {
  .position {
    position: relative;
    top: 70px !important;
    left: 248px !important;
  }
}
@media screen and (max-width: 1200px) and (min-width: 999px) {
  .position {
    position: relative;
    top: 70px !important;
    left: 275px !important;
  }
}
@media screen and (max-width: 1599px) and (min-width: 1400px) {
  .position {
    position: relative;
    top: 115px !important;
    left: 590px !important;
  }
}
@media screen and (max-width: 1399px) and (min-width: 1199px) {
  .position {
    position: relative;
    top: 115px !important;
    left: 590px !important;
  }
}
@media screen and (max-width: 1800px) and (min-width: 1600px) {
  .position {
    position: relative;
    top: 100px !important;
    left: 720px !important;
  }
}
@media screen and (min-width: 1800px) {
  .position {
    position: relative;
    top: 100px !important;
    left: 720px !important;
  }
}
.paddingvcard {
      /* padding: 25px 25px; */
     height: 475px !important;
    width: 300px !important;
}
.v-image__image--cover {
      background-size: contain !important;
}
.sizeAvt {
  height: 110px !important;
  min-width: 150px !important;
}
.btnColo  {
  background-color: #6ABA2B !important;

}
.headWidth {
  min-width: 81px !important;
}
.loginFont {
  font-size: 28px;
  color: #6ABA2B;
}
</style>
