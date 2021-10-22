<template>
  <v-content>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="https://images.unsplash.com/photo-1516783154360-123b392d0833?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light primary--text"
                  >
                    SEJA BEM-VINDO A
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black primary--text"
                  >
                    CW CONVITES
                  </span>

                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#about-me')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <!-- <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

        <v-responsive
          class="mx-auto mb-8"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >
          Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.
        </v-responsive>

        <v-avatar
          class="elevation-12 mb-12"
          size="128"
        >
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>

        <div></div>

        <v-btn
          color="grey"
          href="https://vuetifyjs.com"
          outlined
          large
        >
          <span class="grey--text text--darken-1 font-weight-bold">
            Vuetify Documentation
          </span>
        </v-btn>
      </v-container>

      <div class="py-12"></div>
    </section> -->

    <section
      id="features"
      class="grey lighten-3"
    >
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">NOSSAS ÚLTIMAS ENTREGAS</h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4"
              color="grey lighten-5"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="200"
                  >
                    <v-img :src="icon"></v-img>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              ></v-card-title>

              <v-card-text
                class="subtitle-1"
                v-text="text"
              >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="/gallery/felicidade.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                ></div>

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                ></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <v-sheet
      id="contact"
      color="#333333"
      dark
      tag="section"
      tile
    >
      <div class="py-12"></div>

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contato</h2>

        <v-responsive
          class="mx-auto"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>

        <div class="text-center my-6">
          <v-btn
            fab
            class="mx-2"
            large
            color="#25d366"
            href="https://wa.me/559293969568"
            target="_blank"
          >
            <v-icon>
              mdi-whatsapp
            </v-icon>
          </v-btn>

          <v-btn
            fab
            class="mx-2"
            large
            color="#dd2a7b"
            href="https://instagram.com/cwconvites"
            target="_blank"
          >
            <v-icon>
              mdi-instagram
            </v-icon>
          </v-btn>
          
          <v-btn
            fab
            class="mx-2"
            large
            color="blue"
            href="tel:559293969568"
            target="_blank"
          >
            <v-icon>
              mdi-phone
            </v-icon>
          </v-btn>
        </div>

        <v-theme-provider light>
          <v-row>
            <v-col cols="12">
              <v-text-field
                flat
                label="Nome*"
                solo
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                flat
                label="E-mail*"
                solo
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                flat
                label="Assunto*"
                solo
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                flat
                label="Mensagem*"
                solo
              ></v-textarea>
            </v-col>

            <v-col
              class="mx-auto"
              cols="auto"
            >
              <v-btn
                color="primary"
                x-large
              >
                Enviar
              </v-btn>
            </v-col>
          </v-row>
        </v-theme-provider>
      </v-container>

      <div class="py-12"></div>
    </v-sheet>
  </v-content>
</template>

<script>
export default {
  name: "TheContent",
  data() {
    return {
      features: [
        {
          icon: "/gallery/convite1.jpg",
          title: "Carol e Wanderson",
          text: "Convite de casamento em fio de cera e lacre de cera. Produzido em papel Vegetal Convite 14x20cm em papel Perolado alta gramatura Kit tags (3 senhas, lista de presentes e tag de convidado em papel Couché + 1 miniclip prateado) Fio de cera Lacre de cera",
        },
        {
          icon: "/gallery/floral.jpg",
          title: "Adão e Eva",
          text: "Convite de casamento em fio de cera e lacre de cera. Produzido em papel Vegetal Convite 14x20cm em papel Perolado alta gramatura Kit tags (3 senhas, lista de presentes e tag de convidado em papel Couché + 1 miniclip prateado) Fio de cera Lacre de cera",
        },
        {
          icon: "/gallery/brenna3.jpg",
          title: "Brenna & Michael",
          text: "Convite de casamento em fio de cera e lacre de cera. Produzido em papel Vegetal Convite 14x20cm em papel Perolado alta gramatura Kit tags (3 senhas, lista de presentes e tag de convidado em papel Couché + 1 miniclip prateado) Fio de cera Lacre de cera",
        },
      ],
      stats: [
        ["416", "Clientes felizes"],
        ["4300", "Cartões produzidos"],
        ["87", "Produtos"],
        ["R$ 2,5M", "Faturamento"],
      ],
    };
  },
};
</script>