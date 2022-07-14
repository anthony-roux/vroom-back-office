<template>
  <section id="page-inscription" class="flex items-center justify-center">
    <div
      class="w-full max-w-[600px] p-12 overflow-hidden md:bg-white rounded-md"
    >
      <div
        class="flex flex-col items-center justify-center mx-auto text_center"
      >
        <base-use-svg id="vroom" size="logo-xl" class="vroom" color="pink" />
        <h1 class="mb-10 text-3xl text-center">{{ titre }}</h1>
      </div>
      <form
        action="post"
        class="mt-8"
        data-success="Thanks for your enquiry, we'll be in touch shortly."
        data-error="Please fill in all fields correctly."
        @submit.prevent="register"
      >
        <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
          <!-- <base-input-text
            type="text"
            namefor="name"
            label="Nom"
            placeholder=" "
            :required="true"
            class="border-b-2 md:mr-8 border-primary-vert1"
            v-model="userInfos.firstname"
          />
          <base-input-text
            type="text"
            namefor="lastname"
            label="Prénom"
            placeholder=" "
            :required="true"
            v-model="userInfos.lastname"
            class="border-b-2 border-primary-vert1"
          /> -->
        </div>
        <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
          <base-input-text
            type="mail"
            namefor="mail"
            label="Adresse e-mail"
            placeholder=" "
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            :required="true"
            class="border-b-2 md:mr-8 border-primary-vert1"
            v-model="email"
          />
          <base-input-text
            type="password"
            namefor="password"
            label="Mot de passe"
            password-reveal
            placeholder=" "
            :required="true"
            v-model="password"
            class="border-b-2 md:mr-8 border-primary-vert1"
          />
        </div>

        <b-notification v-if="error" type="is-warning">
          {{ error }}
        </b-notification>

        <p
          v-if="this.success"
          class="px-8 py-8 text-primary-vert1 md:px-12 md:py-12"
        >
          Merci, votre message a bien été envoyé. <br />
          Un de nos conseillers vous contactera sous 72h.
        </p>
        <p v-if="this.error" class="px-8 py-8 text-red-500 md:px-12 md:py-12">
          Ah ! une erreur est survenue...
        </p>

        <div
          class="flex justify-between py-8 mt-8 bg-transparent border-t border-gray-100 rounded-b md:px-12 bg-grey-light"
        >
          <t-button
            type="submit"
            variant="primary"
            class="w-full py-3 transitions-colors"
          >
            <span class="text-lg text-white">Envoyer</span>
          </t-button>
        </div>
      </form>
      <div class="mx-auto text-center">
        <nuxt-link class="inline-blok t-link" :to="url_lien">{{
          lien
        }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Inscription",
  props: {
    titre: {
      type: String,
      default: "Formulaire",
    },
    bouton_submit: {
      type: String,
      default: "Valider",
    },
    lien: {
      type: String,
      default: "Accueil",
    },
    url_lien: {
      type: String,
      default: "/",
    },
  },
  computed: {},
  data() {
    return {
      showModal: false,
      userInfos: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
      error: "",
      success: "",
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "inscription",
      },
    };
  },
  methods: {
    // async register() {
    //   try {
    //     await this.$auth.loginWith("local", {
    //       data: {
    //         email: this.userInfos.email,
    //         password: this.userInfos.password,
    //       },
    //     });

    //     this.$router.push("/");
    //   } catch (e) {
    //     this.error = e.response.data.message;
    //   }
    // },

    async register() {
      this.$axios
        .$post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.fbAPIKey,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          //       //Perform Success Action
          console.log("res", res);
          //       this.status = "res";
          //       this.$router.push("/");
          //       this.success = true;
        })
        .catch((error) => {
          //       // error.response.status Check status code
          console.log("error", error);
          //       this.status = "error";
          //       this.success = true;
        });
    },
  },
};
</script>

<style lang="scss"></style>
