<template>
<section style="height: 100%; position: relative">
  <Navbar :scrolled="true"></Navbar>


  <div data-v-ef3f8320="" style="position: fixed;bottom: 20px;z-index: 9;text-align: center;width: 100%;">

    <button v-if="finalList" class="btn" @click.prevent="scrollUp()">
      <b-icon  style="font-size: 200%;background: #0000003b;border-radius: 100px;color: #fff;" icon="arrow-up-circle" animation="cylon-vertical" font-scale="2"></b-icon>
    </button>

<button v-else-if="!finalList" class="btn" @click.prevent="scrollDown()">
  <b-icon style="font-size: 200%;background: #0000003b;border-radius: 100px;color: #fff;" icon="arrow-down-circle" animation="cylon-vertical" font-scale="2"></b-icon>
</button>

  </div>
  <transition name="fade"  mode="in-out">
  <section v-touch:swipe.bottom="scrollDown" v-touch:swipe.top="scrollUp" style="width: 100%; top: 70px; height: 100%; background: #333; position: absolute" :style="'background:' + atual.cor_principal " :key="indexAtual">
    <div class="container-fluid" style="height: 100%;">
      <div class="row" style="height: 100%;">
        <div class="col-md-6">
          <div style="position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%);">
          <h5 class="text-white-50">{{ atual.tipo }}</h5>
          <h2 class="text-white">{{ atual.titulo }} | <small>{{atual.descricao}}</small> </h2>
        </div></div>
        <div class="col-md-6" style="background-position: center; background-size: cover;" :style="'background-image: url(' + atual.imagem +'), linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 35%));' "></div>
      </div>
    </div>
  </section>
  </transition>
</section>
</template>

<script>
import Navbar from './template/navbar'
export default {
  components: {
    Navbar,

  },
  name: 'Portfolio',
  data() {
    return {
      atual: {},
      indexAtual: 0,
      finalList: false,
      portfolios: [
        {titulo: 'Zeus', descricao:'Aplicativo administrativo para Mei', tipo: 'Aplicativo', imagem: '../../static/zeus.png', cor_principal: '#59329e'},
        {titulo: 'Aue', descricao:'Rede Social para Pomotores de Eventos', tipo: 'Aplicativo', imagem: '../../static/aue.png', cor_principal: '#4b25c3'},
        {titulo: 'Logo', descricao:'Aplicativo para Controle Logístico e Acesso', tipo: 'Aplicativo', imagem: '../../static/logo.gif', cor_principal: '#222'},
        {titulo: 'DB', descricao:'Empresa de regulamentações e Registros sanitários', tipo: 'logo e Webdesign', imagem: '../../static/db.gif', cor_principal: '#ffc723'},
        // {titulo: 'Logo', tipo: 'Aplicativo', imagem: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/21d643116469363.6062cabfaf1de.png', cor_principal: 'blue'},
      ]
    }
  },
  mounted() {

    window.addEventListener('keydown', function(e) {
      switch (e.keyCode) {
        case 40:
          v.scrollDown();
          break
        case 38:
          v.scrollUp();
          break
      }
    });

    let v = this;
    v.atual = v.portfolios[this.indexAtual]
    document.addEventListener("mousewheel", function(event){
      if (event.wheelDelta >= 0) {
        v.scrollUp();
      } else {
        v.scrollDown();
      }
    });
  },
  methods: {
    scrollDown() {
      let v = this;
      v.atual = v.portfolios[this.indexAtual]
      v.indexAtual++
      if (v.indexAtual > v.portfolios.length -1) {
        v.indexAtual = v.portfolios.length -1
        v.atual = v.portfolios[v.portfolios.length -1]
      }

      if (v.indexAtual + 1 === v.portfolios.length) {
        v.finalList = true;
      }

      if (v.indexAtual < v.portfolios.length)
        v.atual = v.portfolios[v.indexAtual]
    },
    scrollUp() {
      let v = this;
      v.atual = v.portfolios[this.indexAtual]
      v.indexAtual--
      if (v.indexAtual < 0) {
        v.indexAtual = 0
        v.atual = v.portfolios[v.indexAtual]
        v.finalList = false
      }
      if (v.indexAtual > 0) {
        v.atual = v.portfolios[v.indexAtual]
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
