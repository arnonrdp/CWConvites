<template>
  <v-sheet id="pedidos" class="grey lighten-3 text-center" tag="section">
    <div class="py-12"></div>
    <h2 class="display-2 font-weight-bold mb-3">PRODUTOS MAIS ACESSADOS</h2>

    <v-responsive class="mx-auto mb-12" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>

    <v-row class="flex-nowrap overflow-x-auto px-6">
      <v-card v-for="({ icon, title, text }, i) in features" :key="i" class="mx-4" color="grey lighten-5" flat shaped>
        <v-theme-provider dark>
          <v-img :src="icon" width="350" height="200" />
        </v-theme-provider>

        <v-card-title class="justify-center font-weight-black text-uppercase">{{ title }}</v-card-title>
        <v-card-text class="subtitle-1">{{ text }}</v-card-text>
      </v-card>
    </v-row>
    <div class="py-12"></div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
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
  }),
};
</script>
