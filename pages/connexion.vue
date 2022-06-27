<template>
  <FormulaireConnexion
    titre="CONNEXION"
    bouton_submit="Se connecter"
    lien="Inscription"
    url_lien="inscription"
  />
</template>

<script>
import FormulaireConnexion from "~/components/FormulaireConnexion";

export default {
  components: {
    FormulaireConnexion
  }
};
</script>
