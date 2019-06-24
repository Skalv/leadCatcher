<template>
  <f7-page>
    <f7-block>
      <f7-row>
        <img class="logo" src="../../images/logo.png" alt="Logo Normandy EcoSpace">
      </f7-row>
      <f7-row>
        <f7-col>
          <f7-list no-hairlines-md>
            <f7-list-input
              label="Nom"
              floating-label
              type="text"
              placeholder="Votre nom"
              :value="lastname"
              @input="lastname = $event.target.value"
              clear-button
              required
            ></f7-list-input>
            <f7-list-input
              label="Prenom"
              floating-label
              type="text"
              placeholder="Votre prenom"
              :value="firstname"
              @input="firstname = $event.target.value"
              clear-button
              required
            ></f7-list-input>
            <f7-list-input
              label="Email"
              floating-label
              type="email"
              placeholder="Votre adresse email"
              :value="email"
              @input="email = $event.target.value"
              clear-button
              required
            ></f7-list-input>
            <f7-list-input
              label="Téléphone"
              floating-label
              type="text"
              placeholder="Votre téléphone"
              :value="phone"
              @input="phone = $event.target.value"
              clear-button
              required
            ></f7-list-input>
            <f7-list-input
              label="Société"
              floating-label
              type="text"
              placeholder="votre société"
              :value="company"
              @input="company = $event.target.value"
              clear-button
              required
            ></f7-list-input>
          </f7-list>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <f7-button @click="save" fill>Sauvegarder</f7-button>
          <f7-link href="/result/" class="hiddenLink"></f7-link>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
  export default {
    data () {
      return {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: ""
      }
    },
    methods: {
      save () {
        let visitors = JSON.parse(window.localStorage.getItem("visitors")) || []
        visitors.push({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          company: this.company
        })
        window.localStorage.setItem("visitors", JSON.stringify(visitors))

        this.firstname = "",
        this.lastname = "",
        this.email = "",
        this.phone = "",
        this.company = ""

        this.$toasted.success('Ajouté !', {duration: 2000})
      }
    }
  }
</script>

<style lang="scss">
  .logo {
    height: 100px;
  }
  .hiddenLink {
    content: "";
    background-color: rgba(0, 0, 0, 0);
    width: 20px;
    height: 20px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>