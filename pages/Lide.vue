<template>
  <section>
    <div class="container px-5 py-24 mx-auto text-white">
      <form @submit="submitForm" method="post">

        <div class="hidden md:flex flex-wrap justify-start  gap-5 mb-10">
          <label for="app"  class="btn--label text-white py-3 cursor-pointer"> Приложение</label>
          <input type="radio" id="app" name="project_type" value="Приложение" v-model="value"  class="w-0" />

          <label for="Website" class="btn--label text-white py-3 cursor-pointer"> Сайт</label>
          <input type="radio" id="Website" name="project_type" value="Сайт" v-model="value"  class="w-0" />

          <label for="CRM" class="btn--label text-white py-3 cursor-pointer">CRM-система</label>
          <input type="radio" id="CRM" name="project_type" value="CRM-система" v-model="value"  class="w-0" />

          <label for="marketing" class="btn--label text-white py-3 cursor-pointer">Маркетинг</label>
          <input type="radio" id="marketing" name="project_type" value="Маркетинг" v-model="value" class="w-0" />
        </div>

        <label for="name">Имя:</label>
        <input class="text-black" type="text" id="NAME" v-model="name" required>

        <label for="email">Email:</label>
        <input class="text-black" type="email" id="EMAIL" v-model="email" required>

        <label for="phone">Телефон:</label>
        <input class="text-black" type="tel" id="PHONE" v-model="phone" required>

        <textarea id="COMMENTS" v-model="message" placeholder="Опишите проект" autocomplete="on"
          class="w-full bg-gray-100 bg-opacity-5  border-b-2 border-gray-300 focus:border-pink-500 focus:border-b-2 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>

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
      phone: '',
      message: '',
      value: ''
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      const formData = {
        fields: {
          TITLE: 'Заявка от ' + this.name,
          NAME: this.name,
          COMMENTS: this.message,
          POST: this.value,
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
          WEB: [
            {
              "VALUE": "https://athenaplus.kz/",
              "VALUE_TYPE": "Сайт компании Athena+"
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