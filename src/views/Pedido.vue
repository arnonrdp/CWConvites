<template>
  <h4 class="q-my-md text-center" style="margin-top: 100px">Informações para o convite</h4>
  <q-form @submit="onSubmit" class="q-gutter-y-md row">
    <q-input
      filled
      required
      v-model="nomes"
      class="col-12 q-px-md"
      label="Nome aniversariante / noivos *"
      hint="A ordem que for inserida será colocada no convite"
    />
    <q-input
      filled
      v-model="fraseIntro"
      class="col-12 q-px-md"
      label="Frase introdução"
      hint="É uma frase que seja importante para o casal/debutante, podendo ser um versículo, trecho de música, um poema."
    />
    <q-input
      filled
      v-model="fraseCorpo"
      class="col-12 q-px-md"
      label="Frase corpo do convite"
      hint="É como o casal/debutante quer convidar o seu convidado. Ex: Convidam para a celebração de seu casamento, a realizar-se..."
    />
    <q-input
      filled
      v-model="nomePais"
      class="col-12 q-px-md"
      label="Nome dos pais"
      hint="Informar em caso de “in memorian” “Sempre Presente” “I.M.” “ ♥ ”, ideal colocar nome e 1 sobrenome. Ex: João Oliveira e Julia Simas."
    />
    <q-input filled v-model="date" class="col-md-4 col-sm-6 col-xs-12 q-px-md" mask="datetime" required>
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input
      autogrow
      filled
      v-model="local"
      class="col-12 q-px-md"
      label="Local * (Nome Buffet/Salão/Igreja, Av/Rua, Número, Bairro, Cidade)"
      hint="Caso seja em dois locais informar os endereços de ambos."
      required
    />
    <q-input filled v-model="monograma" class="col-md-3 col-sm-6 col-xs-12 q-px-md" label="Monograma" hint="Informar cor e número.">
    </q-input>
    <q-input filled v-model="flores" class="col-md-3 col-sm-6 col-xs-12 q-px-md" label="Flores" hint="Informar cor." />
    <q-input filled v-model="arabesco" class="col-md-3 col-sm-6 col-xs-12 q-px-md" label="Arabesco" hint="Informar cor." />
    <q-input
      filled
      v-model="traje"
      class="col-md-3 col-sm-6 col-xs-12 q-px-md"
      label="Traje para o evento"
      hint="Ex: Esporte Fino, Black Tie, Passeio, Boho-chic, Cocktail Dress..."
    />
    <q-select filled v-model="acabamento" :options="acabamentoOptions" class="col-md-3 col-sm-6 col-xs-12 q-px-md" label="Acabamento" />
    <q-input
      filled
      v-model.number="senhas"
      type="number"
      class="col-md-3 col-sm-6 col-xs-12 q-px-md"
      label="Qtde de senhas"
      hint="Informe a quantidade de convidados. Senão, contabilizamos a quantidade de convites multiplicado por 3."
    />
    <q-input
      filled
      v-model="localListaPresentes"
      class="col-sm-6 col-xs-12 q-px-md"
      label=" Local lista de presente"
      hint="Se não houver a tradicional lista informar qual será o pedido, observando que o tamanho padrão para a tag é de 6x4cm, textos longos serão ruins para leitura."
    />
    <q-input filled v-model="cores" class="col-sm-6 col-xs-12 q-px-md" label="Cores predominantes do seu evento" />
    <q-file filled v-model="anexos" class="col-sm-6 col-xs-12 q-px-md" label="Anexos (fotos, monogramas, brasão, fontes...)" />
    <q-btn class="col-12 q-mt-xl q-px-md" label="Enviar" type="submit" />
  </q-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    nomes: '',
    fraseIntro: '',
    fraseCorpo: '',
    nomePais: '',
    date: '',
    local: '',
    monograma: '',
    flores: '',
    arabesco: '',
    traje: '',
    acabamento: '',
    acabamentoOptions: ['Fita de cetim', 'Sisal', 'Fio', 'Pérola', 'Lacre de cera'],
    senhas: null,
    localListaPresentes: '',
    cores: '',
    anexos: null
  }),

  methods: {
    onSubmit() {
      const data = {
        nomes: this.nomes,
        fraseIntro: this.fraseIntro,
        fraseCorpo: this.fraseCorpo,
        nomePais: this.nomePais,
        date: this.date,
        local: this.local,
        monograma: this.monograma,
        flores: this.flores,
        arabesco: this.arabesco,
        traje: this.traje,
        acabamento: this.acabamento,
        senhas: this.senhas,
        localListaPresentes: this.localListaPresentes,
        cores: this.cores,
        anexos: this.anexos
      }
      console.log('Dados enviados: ', { data })
      this.$q.notify({
        message: 'Informações enviadas com sucesso!',
        color: 'positive',
        icon: 'check_circle',
        position: 'top'
      })
    }
  }
}
</script>
