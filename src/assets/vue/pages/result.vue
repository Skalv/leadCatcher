<template>
    <f7-page>
      <f7-block>
        <f7-row>
            <f7-link back>Retour au formulaire</f7-link>
        </f7-row>
        <f7-row>
          <f7-col class="data-table">
            <table>
              <thead>
                <tr>
                  <th class="label-cell">Nom</th>
                  <th class="label-cell">Prénom</th>
                  <th class="label-cell">Email</th>
                  <th class="label-cell">Téléphone</th>
                  <th class="label-cell">Société</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="visitor in visitors" :key="visitor.lastname">
                  <td>{{visitor.lastname}}</td>
                  <td>{{visitor.firstname}}</td>
                  <td>{{visitor.email}}</td>
                  <td>{{visitor.phone}}</td>
                  <td>{{visitor.company}}</td>
                </tr>
              </tbody>
            </table>
          </f7-col>
        </f7-row>
      </f7-block>
    </f7-page>
  </template>

  <script>
    export default {
      data () {
        return {
          visitors : JSON.parse(window.localStorage.getItem("visitors"))
        }
      }
    }
  </script>