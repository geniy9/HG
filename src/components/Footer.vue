<i18n>
{
  "en": {
    "footer": {
      "title1": "Plumbing Showroom",
      "title2": "Furniture showroom",
      "desc1": "st. G.Kuliyev 39, \"USSAT\" Trade center, 1st floor",
      "desc2": "st. S.Seydi 27, \"Durdaneli\" Trade center, 1st floor"
    }
  },
  "ru": {
    "footer": {
      "title1": "Шоу-рум сантехники",
      "title2": "Шоу-рум мебели",
      "desc1": "Ул. Г.Кулиева 39, Торговый центр «USSAT», 1 этаж",
      "desc2": "Ул. С.Сейди 27, Торговый центр «Dürdäneli», 1 этаж"
    }
  },
  "it": {
    "footer": {
      "title1": "Showroom Idraulico",
      "title2": "Showroom di Mobili",
      "desc1": "st. G.Kuliyev 39, Centro commerciale \"USSAT\", 1 piano",
      "desc2": "st. S.Seydi 27, Centro commerciale \"Durdaneli\", 1 piano"
    }
  }
}
</i18n>
<template>
  <div class="footer_section">
    <div class="showroom_logo">
      <hg-logo></hg-logo>
      <hermitage-logo></hermitage-logo>
    </div>
    <div class="showroom_contacts">
      <div class="showroom_contact">
        <div class="showroom_tel">
          <a href="tel:+99312752875">+99312 75 28 75</a>
          <a href="tel:+99362893366">+99362 89 33 66</a>
        </div>
        <div class="showroom_map">
          <div class="showroom_map_title">{{ $t("footer.title1") }}</div>
          <a href="https://goo.gl/maps/pnx8fLWM4pq6pSA29" target="_blank" class="showroom_map_link">
            {{ $t("footer.desc1") }}
          </a>
        </div>
      </div>
      <div class="showroom_contact">
        <div class="showroom_tel">
          <a href="tel:+99312415902">+99312 41 59 02</a>
          <a href="tel:+99365564159">+99365 56 41 59</a>
        </div>
        <div class="showroom_map">
          <div class="showroom_map_title">{{ $t("footer.title2") }}</div>
          <a href="https://g.page/hermitage-home-interiors" target="_blank" class="showroom_map_link">
            {{ $t("footer.desc2") }}
          </a>
        </div>
      </div>
      <div class="showroom_contact showroom_social">
        <a href="mailto:info@hermitage.tm">info@hermitage.tm</a>
        <social-icons></social-icons>
      </div>
    </div>
  </div>
</template>

<script>
import HgLogo from '@/components/logo/HgLogo'
import HermitageLogo from '@/components/logo/HermitageLogo'
import SocialIcons from '@/components/SocialIcons'
export default {
  components: {
    HgLogo,
    HermitageLogo,
    SocialIcons
  }
}
</script>
<style>
.footer_section {
  display: flex;
  padding: 0 5%;
  background-color: #000;
  padding: 2rem 5%;
  align-items: center;
  justify-content: space-between;
}
.showroom_logo {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
}
.showroom_logo .hg_logo {
  width: 80px;
  height: 80px;
}
.showroom_logo .hermitage_logo {
  width: 280px;
  height: 45px;
  margin-left: 1rem;
}
.showroom_contacts {
  flex: 1;
}
.showroom_contact {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1.2rem;
}
.showroom_tel {
  flex: 0 0 auto;
  font-family: 'panton_regular';
  letter-spacing: 2px;
}
.showroom_tel a {
  display: block;
  font-size: 0.7rem;
  color: #ccc
}
.showroom_map {
  margin-left: 2rem;
  font-size: 0.7rem;
  font-family: 'panton_regular';
  letter-spacing: 2px;
}
.showroom_map_title {
  color: #fff;
}
.showroom_map_link {
  color: #ccc;
}
.showroom_social {
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 1rem 0;
}
.showroom_social > a {
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: #aaa;
  margin-right: 1rem;
}
</style>