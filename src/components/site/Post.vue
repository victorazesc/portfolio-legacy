<template>
  <section>
    <Navbar :scrolled="true"></Navbar>
    <section style="padding-top: 120px;" class="container" id="blog-header">
      <div class="row" style="align-items: baseline;">
        <div class="col-md-3">
          <h2>
            Blog
          </h2>
        </div>
        <div class="col-md-6">
          <div class="pesquisa">
            <span class="icone">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.1001 2.10001C5.24239 2.10001 2.1001 5.24231 2.1001 9.10001C2.1001 12.9577 5.2424 16.1 9.1001 16.1C10.7777 16.1 12.3183 15.5043 13.5257 14.5154L17.7052 18.6949C17.8807 18.8778 18.1415 18.9515 18.3868 18.8875C18.6321 18.8236 18.8237 18.632 18.8876 18.3867C18.9516 18.1414 18.8779 17.8807 18.695 17.7051L14.5155 13.5256C15.5044 12.3182 16.1001 10.7776 16.1001 9.10001C16.1001 5.2423 12.9578 2.10001 9.1001 2.10001L9.1001 2.10001ZM9.1001 3.50001C12.2012 3.50001 14.7001 5.99892 14.7001 9.10001C14.7001 12.2011 12.2012 14.7 9.1001 14.7C5.99901 14.7 3.5001 12.2011 3.5001 9.10001C3.5001 5.99892 5.99901 3.50001 9.1001 3.50001V3.50001Z" fill="black" />
              </svg>
            </span>
            <input type="text" placeholder="O que Você Procura ?" class="form-control">
          </div>
        </div>
        <div class="col-md-3" style="border-left: 1px solid rgb(229 229 229);">
          <p><b>50 Notícias </b>Publicadas</p>
        </div>
      </div>
      <hr>
    </section>

    <section class="section-p-30 container">
      <h2>Como proteger suas imagens com senha no Google Fotos</h2>
      <p><small><b> 26/09/2021</b> às 19:00 . <b>3 min</b> de leitura</small></p>
      <div>
        <div class="row">
          <div class="col-md-12">
            <b-img  rounded src="https://i.picsum.photos/id/838/1500/500.jpg?hmac=Mh-1p74nQxMSVt8V4PQedwAaSfNStb2pIa5aT3meiS4" fluid alt="Responsive image" class="mb-2"></b-img>
          </div>
        </div>
      </div>
    </section>
    <section class="section-p-30 container">
      <div class="row">
        <div class="col-md-8">
          <b-card tag="article" class="mb-2">
            <b-card-text>
              <div class="row">
                <div class="col-md-6">
                  <b-media style="align-items: center;">
                    <template #aside>
                      <b-img v-bind="mainProps" rounded="circle" alt="Circle image" class="float-left"></b-img>
                    </template>
                    <span class="mt-2">Victor Azevedo</span>
                  </b-media>

                </div>
                <div class="col-md-6">
<span class="float-right">
                  <button class="btn btn-link">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.3999 2.39999V27C2.39994 27.3314 2.66855 27.6 2.9999 27.6H26.9999C27.3313 27.6 27.5999 27.3314 27.5999 27V19.2H26.3999V26.4H3.5999V2.39999H2.3999ZM22.794 2.99414C22.5499 2.9942 22.3301 3.14219 22.2382 3.3684C22.1464 3.59461 22.2007 3.85393 22.3757 4.02421L24.9515 6.59999H21.0151C14.9991 6.45027 11.1006 8.03698 8.81709 11.0391C6.53354 14.0411 5.89886 18.3042 5.9999 23.4117C6.00638 23.7431 6.28025 24.0065 6.61162 24C6.94299 23.9935 7.20637 23.7196 7.1999 23.3883C7.10114 18.396 7.75911 14.4121 9.77217 11.7656C11.7852 9.11914 15.1873 7.65572 20.9847 7.79999H20.9929H24.9515L22.3757 10.3758C22.2189 10.5263 22.1558 10.7497 22.2106 10.96C22.2654 11.1703 22.4296 11.3345 22.6399 11.3893C22.8502 11.4441 23.0736 11.381 23.2241 11.2242L27.2483 7.19999L23.2241 3.17577C23.1112 3.05965 22.956 2.99414 22.794 2.99413V2.99414Z" fill="black" />
                    </svg>
                  </button>
                   </span>
                  <span class="mt-2 float-right">
                    0 Compartilharam
                  </span>
                </div>
              </div>

              <hr>
            </b-card-text>
            <div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida, dui ac bibendum convallis, leo arcu laoreet est, non pellentesque nisi tortor sed diam. Quisque mi ipsum, mattis ac semper hendrerit, imperdiet nec lorem. Cras sapien justo, consectetur eu sapien viverra, ullamcorper aliquet metus. Integer non ante eget eros finibus blandit. Ut posuere velit urna, id scelerisque nunc accumsan efficitur. Donec eu justo sed velit pretium varius vel ut erat. Fusce mollis lorem turpis, in dapibus est pellentesque pretium. In condimentum accumsan sapien. Donec a semper nibh. Nullam vel rhoncus nibh. Nulla facilisi. Phasellus nec nulla nec massa facilisis pharetra vitae et risus. Quisque ligula erat, malesuada in elit sed, vulputate maximus sapien. Aenean dictum nisl sed tristique lacinia. Duis sit amet lectus eget justo tristique egestas.
              </p>
              <p>
                Nullam sagittis at metus et dignissim. Donec ultrices leo in sodales scelerisque. Cras tempus mi nec sem varius dignissim. Nulla accumsan accumsan urna. Etiam massa massa, condimentum sed tincidunt eu, lacinia a nisi. Mauris tempus eu nisi vel finibus. Sed rhoncus at nisl in posuere. Aliquam viverra, diam vitae aliquet elementum, justo quam scelerisque orci, quis accumsan erat mauris ut libero. Nam finibus, est eu lacinia fringilla, mi dolor dignissim augue, eu accumsan erat odio et neque. Pellentesque blandit id turpis molestie mattis. Sed gravida, ex sit amet vehicula facilisis, enim nibh venenatis leo, in hendrerit metus ex sed ipsum. Proin vel orci elit. Fusce rhoncus purus non nulla fermentum, et tincidunt elit ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eu dapibus leo. Nullam nec tristique ipsum.
              </p>
              <p>
                Nullam sagittis at metus et dignissim. Donec ultrices leo in sodales scelerisque. Cras tempus mi nec sem varius dignissim. Nulla accumsan accumsan urna. Etiam massa massa, condimentum sed tincidunt eu, lacinia a nisi. Mauris tempus eu nisi vel finibus. Sed rhoncus at nisl in posuere. Aliquam viverra, diam vitae aliquet elementum, justo quam scelerisque orci, quis accumsan erat mauris ut libero. Nam finibus, est eu lacinia fringilla, mi dolor dignissim augue, eu accumsan erat odio et neque. Pellentesque blandit id turpis molestie mattis. Sed gravida, ex sit amet vehicula facilisis, enim nibh venenatis leo, in hendrerit metus ex sed ipsum. Proin vel orci elit. Fusce rhoncus purus non nulla fermentum, et tincidunt elit ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eu dapibus leo. Nullam nec tristique ipsum.
              </p>
              <p>
                Nullam sagittis at metus et dignissim. Donec ultrices leo in sodales scelerisque. Cras tempus mi nec sem varius dignissim. Nulla accumsan accumsan urna. Etiam massa massa, condimentum sed tincidunt eu, lacinia a nisi. Mauris tempus eu nisi vel finibus. Sed rhoncus at nisl in posuere. Aliquam viverra, diam vitae aliquet elementum, justo quam scelerisque orci, quis accumsan erat mauris ut libero. Nam finibus, est eu lacinia fringilla, mi dolor dignissim augue, eu accumsan erat odio et neque. Pellentesque blandit id turpis molestie mattis. Sed gravida, ex sit amet vehicula facilisis, enim nibh venenatis leo, in hendrerit metus ex sed ipsum. Proin vel orci elit. Fusce rhoncus purus non nulla fermentum, et tincidunt elit ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eu dapibus leo. Nullam nec tristique ipsum.
              </p>
              <p>
                Nullam sagittis at metus et dignissim. Donec ultrices leo in sodales scelerisque. Cras tempus mi nec sem varius dignissim. Nulla accumsan accumsan urna. Etiam massa massa, condimentum sed tincidunt eu, lacinia a nisi. Mauris tempus eu nisi vel finibus. Sed rhoncus at nisl in posuere. Aliquam viverra, diam vitae aliquet elementum, justo quam scelerisque orci, quis accumsan erat mauris ut libero. Nam finibus, est eu lacinia fringilla, mi dolor dignissim augue, eu accumsan erat odio et neque. Pellentesque blandit id turpis molestie mattis. Sed gravida, ex sit amet vehicula facilisis, enim nibh venenatis leo, in hendrerit metus ex sed ipsum. Proin vel orci elit. Fusce rhoncus purus non nulla fermentum, et tincidunt elit ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eu dapibus leo. Nullam nec tristique ipsum.
              </p>

              <br>
              <hr>

              <p><b>Fontes</b></p>
              <p> <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
                <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
                <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              </p>
              <p><b>Categorias</b></p>
              <p> <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
                <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              </p>

              <hr>

            </div>
            <div class="text-center">
              <b-button href="#" variant="outline-primary">Ver Mais Notícias</b-button>
            </div>
          </b-card>
        </div>
        <div class="col-md-4">
          <b-card tag="article" class="mb-2">
            <b-card-text>
              <p>Marcadores</p>
              <hr>
            </b-card-text>
            <div>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
            </div>
            <hr>

            <b-img src="https://i.picsum.photos/id/34/500/400.jpg?hmac=PWkeCNtMhqcS4q_SkUkMD9JZzc16QRFgI7-W3eeYO7I" fluid alt="Responsive image"></b-img>
          </b-card>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Navbar from './template/navbar'
import Footer from './template/footer'
export default {
  name: 'Post',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 40, height: 40, class: 'm1' },
      posts: [
        { dia: 1, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 2, titulo: '7 coisas que você precisa saber sobre o desenvolvimento mobile' },
        { dia: 3, titulo: 'Firebase: o que é e quando usar no desenvolvimento mobile?' },
        { dia: 4, titulo: 'Guia de WordPress para Iniciantes: Aplicando um Tema e Instalando o WooCommerce' },
        { dia: 5, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 6, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 7, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 8, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 9, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 10, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
      ]
    }
  }
}
</script>

<style>
.pesquisa {
  border: 1px solid #9c27b0;
  border-radius: 10px;
  display: flex;
}

.pesquisa .form-control {
  border: none !important;
  background-color: transparent;
}

.pesquisa .icone {
  padding: 5px 10px !important;
}

#blog-header p {
  margin-top: revert !important;
}

#blog-header hr {
  margin-top: 5px !important;
}
</style>

