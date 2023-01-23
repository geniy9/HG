<i18n>
{
  "en": {
    "contact": {
      "find": "Find your nearest Hermitage <br>showroom",
      "title1": "Furniture showroom",
      "title2": "Plumbing Showroom",
      "address_1": "st. S.Seydi 27, \"Durdaneli\" Trade center, 1st floor",
      "address_2": "st. G.Kuliyev 39, \"USSAT\" Trade center, 1st floor",
      "form_title": "Contact with us",
      "form_description": "Write to us, describe the question that you would like to ask and our managers will try to contact you as quickly as possible"
    }
  },
  "ru": {
    "contact": {
      "find": "Найдите ближайший шоурум <br>Hermitage",
      "title1": "Шоу-рум мебели",
      "title2": "Шоу-рум сантехники",
      "address_1": "Ул. С.Сейди 27, Торговый центр «Dürdäneli», 1 этаж",
      "address_2": "Ул. Г.Кулиева 39, Торговый центр «USSAT», 1 этаж",
      "form_title": "Свяжитесь с нами",
      "form_description": "Write to us, describe the question that you would like to ask and our managers will try to contact you as quickly as possible"
    }
  },
  "it": {
    "contact": {
      "find": "Trova il tuo showroom <br>Hermitage più vicino",
      "title1": "Showroom di mobili",
      "title2": "Showroom idraulico",
      "address_1": "st. S. Seydi 27, Centro commerciale «Dürdäneli», 1° piano",
      "address_2": "st. G. Kuliyeva 39, Centro commerciale «USSAT», 1° piano",
      "form_title": "Contattaci",
      "form_description": "Scrivici, descrivi la domanda che vorresti porre e i nostri responsabili cercheranno di contattarti il prima possibile"
    }
  }
}
</i18n>
<template>
  <div class="contact_page">

    <div class="contact_image">
      <flowmap-image data-src="../assets/img/contact/hermitage_studio.jpg">
        <div class="feedback_form">
          <div class="feedback_title">
            <h1 class="ui-title-1">{{ $t('contact.form_title') }}</h1>
            <h2 class="ui-text-regular">{{ $t('contact.form_description') }}</h2>
            <FeedbackForm />
          </div>
        </div>
      </flowmap-image>
    </div>

    <div class="contact_address">
      <h1 class="contact_title" v-html="$t('contact.find')"></h1>

      <div class="showrooms">
        <div class="showroom">
          <div class="showroom_image"><img src="/assets/img/contact/showroom_1.jpg"></div>
          <div class="showroom_title ui-text-regular">{{ $t('contact.title1') }}</div>
          <div class="showroom_address ui-text-regular">
            <a href="https://g.page/hermitage-home-interiors">{{ $t('contact.address_1') }}</a>
          </div>
          <div class="showroom_phone ui-text-regular">
            <a href="tel:+99312415901">+99312 41-59-01</a>
            <a href="tel:+99312415902">+99312 41-59-02</a>
            <a href="mailto:info@hermitage.tm">info@hermitage.tm</a>
          </div>
        </div>
        <div class="showroom">
          <div class="showroom_image"><img src="/assets/img/contact/showroom_2.jpg"></div>
          <div class="showroom_title ui-text-regular">{{ $t('contact.title2') }}</div>
          <div class="showroom_address ui-text-regular">
            <a href="https://goo.gl/maps/pnx8fLWM4pq6pSA29">{{ $t('contact.address_2') }}</a>
          </div>
          <div class="showroom_phone ui-text-regular">
            <a href="tel:+99312752875">+99312 75-28-75</a>
            <a href="tel:+99312752675">+99312 75-26-75</a>
            <a href="mailto:info@hermitage.tm">info@hermitage.tm</a>
          </div>
        </div>
      </div>
    </div>
    <iframe src="https://snazzymaps.com/embed/288811" width="100%" height="720px" style="border:none;"></iframe>
  
  </div>
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm.vue'
import FlowmapImage from '@/components/FlowmapImage'
export default {
  components: {
    FeedbackForm,
    FlowmapImage
  }
}
</script>

<style scoped>
.contact_page {
  position: relative;
  display: block;
}
.contact_image {
  position: relative;
}
.feedback_title {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 40%;
  height: 100vh;
  padding: 0 5%;
  background-color: rgba(0,0,0,.5);
  backdrop-filter: blur(10px);
}
.feedback_title h1, .feedback_title h2 { color: #fff; }
.feedback_form {
  position: absolute;
  display: flex;
  padding: 0 5%;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.contact_address {
  padding: 50px 0;
  background: #000000;
  background: linear-gradient(to top, rgba(0,0,0,0) 0%, #000000 100%);
}
.contact_title {
  text-transform: uppercase;
  font-family: konkord-retro;
  text-align: center;
  font-size: 2rem;
  padding: 10vh 0;
  letter-spacing: 3px;
  color: #fff;
}
.showrooms {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10vh;
}
.showroom {
  text-align: center;
}
.showroom_image {
  padding: 20px; 
}
.showroom_pre {
  text-transform: uppercase;
  margin-bottom: 20px;
}
.showroom_title {
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-family: konkord-retro;
  text-transform: uppercase;
  color: #fff;
}
.showroom_address a, .showroom_phone a {
  color: #666;
}
.showroom_address {
  margin-bottom: 5px;
}
.showroom_phone a {
  display: block;
}
.social_icons {
  justify-content: center;
  margin: 0;
  margin-bottom: 10px;
}
</style>