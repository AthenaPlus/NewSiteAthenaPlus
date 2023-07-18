<template>
  <section>
    <div class="container px-5 py-24 mx-auto text-white">
      <form @submit="submitForm" method="post">
        <div class="hidden md:flex flex-wrap justify-start  gap-5 mb-10">
          <label for="app" @click="clickButton1" class="btn--label text-white py-3 cursor-pointer"
            :class="[isClickButton1 ? 'btn--click' : '']"> Приложение</label>
          <input type="radio" id="app" name="project_type" value="Приложение" class="w-0" />

          <label for="Website" @click="clickButton2" class="btn--label text-white py-3 cursor-pointer"
            :class="[isClickButton2 ? 'btn--click' : '']"> Сайт</label>
          <input type="radio" id="Website" name="project_type" value="Сайт" class="w-0" />

          <label for="CRM" @click="clickButton3" class="btn--label text-white py-3 cursor-pointer"
            :class="[isClickButton3 ? 'btn--click' : '']">CRM-система</label>
          <input type="radio" id="CRM" name="project_type" value="CRM-система" class="w-0" />
          <label for="marketing" @click="clickButton4" class="btn--label text-white py-3 cursor-pointer"
            :class="[isClickButton4 ? 'btn--click' : '']">Маркетинг</label>
          <input type="radio" id="marketing" name="project_type" value="Маркетинг" class="w-0" />
        </div>
        <label for="name">Имя:</label>
        <input class="text-black" type="text" id="NAME" v-model="name" required>

        <label for="email">Email:</label>
        <input class="text-black" type="email" id="EMAIL" v-model="email" required>

        <label for="phone">Телефон:</label>
        <input class="text-black" type="tel" id="PHONE" v-model="phone" required>

        <button type="submit">Отправить</button>
      </form>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: ''
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      const formData = {
        fields: {
          NAME: this.name,
          EMAIL: [
            {
              "VALUE": this.email
            }
          ],
          PHONE: [
            {
              "VALUE": this.phone
            }
          ],
        },
      };

      // Отправка данных в Bitrix24
      this.sendLeadToBitrix24(formData);
    },
    async sendLeadToBitrix24(formData) {
      try {
        const response = await fetch(
          'https://athenaplus.bitrix24.kz/rest/39/ozahwi69f64tr1r9/crm.lead.add.json',
          {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        const data = await response.json();

        // Обработка ответа от сервера Bitrix24
        console.log(data);
        console.log(formData);

        // Дополнительные действия после успешной отправки формы
      } catch (error) {
        console.error(error);
        // Обработка ошибок при отправке данных в Bitrix24
      }
    }
  }
};
</script>