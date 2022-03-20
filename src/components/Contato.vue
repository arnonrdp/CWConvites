<template>
  <v-sheet id="contact" color="#333333" dark tag="section" tile>
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contato</h2>

      <v-responsive class="mx-auto" width="56">
        <v-divider class="mb-1" />
        <v-divider />
      </v-responsive>

      <div class="text-center my-6">
        <v-btn fab class="mx-2" large color="#25d366" href="https://wa.me/559293969568" target="_blank">
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>

        <v-btn fab class="mx-2" large color="#dd2a7b" href="https://instagram.com/cwconvites" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>

        <v-btn fab class="mx-2" large color="blue" href="tel:559293969568" target="_blank">
          <v-icon>mdi-phone</v-icon>
        </v-btn>

        <v-btn fab class="mx-2" large color="grey" href="mailto:cwconvites@gmail.com" target="_blank">
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </div>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>
