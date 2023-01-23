<i18n>
{
  "en": {
    "form": {
      "name": "Name",
      "phone": "Phone",
      "message": "Message",
      "sending": "Sending...",
      "send": "Send"
    }
  },
  "ru": {
    "form": {
      "name": "Имя",
      "phone": "Телефон",
      "message": "Сообщение",
      "sending": "Отправляю...",
      "send": "Отправить"
    }
  },
  "it": {
    "form": {
      "name": "Nome",
      "phone": "Telefono",
      "message": "Messaggio",
      "sending": "Invio...",
      "send": "Inviare"
    }
  }
}
</i18n>
<template>
    <div id="contact-form" class="contact-form">
      <div v-if="isSending" class="loading">{{ $t('form.sending') }}</div>

      <form class="form" @submit="onSubmit">
        <input required name="name" v-model="contact.name" type="text" :placeholder="$t('form.name')" autocomplete="off">
        <input required name="email" v-model="contact.email" type="email" placeholder="Email" autocomplete="off">
        <input required name="phone" v-model="contact.phone" type="phone" :placeholder="$t('form.phone')" autocomplete="off">
        <textarea name="message" v-model="contact.message" rows="4" :placeholder="$t('form.message')"></textarea>
        <button class="button">{{ $t('form.send') }}</button>
      </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      contact: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      isSending: false
    }
  },
  methods: {
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = ''
      }
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.isSending = true;

      setTimeout(() => {
        // Build for data
        let form = new FormData();
        for (let field in this.contact) {
            form.append(field, this.contact[field]);
        }
        // Send form to server
        this.$http.post('/app.php', form).then((response) => {
            console.log(response);
            this.clearForm();
            this.isSending = false;
        }).catch((e) => {
            console.log(e)
        });
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.contact_info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contact-form {
  padding: 30px;
  margin: 20px 0;
	font-family: 16px;
	max-width: 420px;
	width: 100%;
}
.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}
.contact-form input[type="email"],
.contact-form input[type="phone"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px rgba(255,255,255,1);
	margin-bottom: 15px;
	outline: none;
}
.contact-form textarea {
	resize: none;
}
.contact-form .button {
	background: rgba(255,255,255,.75);
	border: 0;
	color: #000;
	cursor: pointer;
	padding: 10px 50px;
	text-align: center;
  letter-spacing: 2px;
	text-transform: uppercase;
  transition: .5s;
}
.contact-form .button:hover {
	background: rgba(255,255,255,1);
  transition: .5s;
}
.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #fff;
}
.contact-form input[type="email"],
.contact-form input[type="phone"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	border-radius: 0;
}
</style>