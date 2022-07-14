<template>
  <div class="w-full h-full bg-pink-light">
    <connexion
      titre="Connexion"
      bouton_submit="Se connecter"
      lien="Inscription"
      url_lien="register"
      class="h-screen"
    />
  </div>
</template>

<script>
export default {
  name: "login",
  layout: "connexion",
  middleware: "log",
};
</script>
