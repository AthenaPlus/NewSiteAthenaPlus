<template>
    <section class="text-white min-h-screen overflow-hidden">
        <div class="w-full sm:flex-row sm:w-11/12 mx-auto justify-between px-5 pb-12 mt-16 py-5 md:py-20 2xl:py-24"> 
            <h2 class="font_Airborne 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-3xl text-2xl">политика конфиденциальности</h2>
            <h2 class="font_Airborne 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-3xl text-2xl pt-1 pb-3  md:pt-5 md:pb-10">Athena Plus</h2>
            <h3 class="text-base sm:text-xl xl:text-3xl 2xl:text-4xl font-normal w-full lg:w-5/12 pb-5 md:pb-16">Ваша конфиденциальность важна для нас, и мы подготовили эту Политику конфиденциальности, чтобы объяснить вам, как мы собираем, используем и передаем вашу личную информацию.</h3>
            <div v-for="(rule, index) in rules" :key="index" class="md:flex justify-between">
                <ol class="md:w-1/2 text-xl xl:text-3xl pb-3">
                    <li>{{ rule.title }}</li>
                </ol>
                <div v-for="(descItem, descIndex) in rule.desc" :key="descIndex" class="md:w-1/2 pb-3 pl-5 text-sm md:text-md xl:text-xl md:p xl:pb-5">
                   <div v-for="(descValue, descValueIndex) in descItem" :key="descValueIndex">
                    <p> {{ descValue }}</p>
                   </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            rules: [{
                title: '1. ОБЛАСТЬ ПРИМЕНЕНИЯ и СОГЛАСИЕ;',
                desc: [{
                    desc1: '1.  Персональные данные физических лиц-пользователей сервиса ATHENAPLUS.KZ обрабатываются ИП «Athena Plus», находящимся по адресу: Республика Казахстан, 050050, Республика Казахстан, г. Алматы, пр. Макатаева 131/1, 49 (далее - ИП). ИП является собственником и оператором Базы персональных данных пользователей ATHENAPLUS.KZ.',
                    desc2: '2.  База персональных данных пользователей ATHENAPLUS.KZ находится по месту нахождения ИП.',
                    desc3: '3.  Настоящая Политика конфиденциальности описывает установленный ИП порядок обработки персональных данных, собранных с помощью интернет-ресурса WWW.ATHENAPLUS.KZ (далее - Сайт), мобильного приложения ATHENAPLUS.KZ (далее – мобильное приложение) и связанных с ними услуг и инструментов на Сайте. Во всех указанных случаях ИП обрабатывает персональные данные пользователей исключительно в рамках требований Закон Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите», а также международных договоров, ратифицированных РК. Данная Политика конфиденциальности разработана в соответствии с их нормами.',
                    desc4: 'Пользователи должны знать, что при переходе на некоторые ссылки, размещённые на Сайте или в мобильном приложении»), они могут быть перенаправлены к сайтам (приложениям и т.д.) других компаний за пределы хостингового пространства ИП («Facebook», «google+», «ВКонтакте), где информация о Пользователях собирается вне прямого контроля ИП. В таком случае Политики конфиденциальности сайтов и/или приложений третьих лиц будут регулировать порядок обработки информации, полученной от пользователей этими третьими лицами.'
                }],
            },
            {
                title: '2. ИНФОРМАЦИЯ, КОТОРУЮ СОБИРАЕТ, ПОЛУЧАЕТ И РАЗМЕЩАЕТ ИП',
                desc: [{
                    desc1:'1.  Если пользователь решил войти на сайт, используя службу аутентификации стороннего оператора, например информацию Facebook, ИП может получить дополнительный профиль, или другую информацию, доступ к которой предоставлен таким третьим лицом.',
                    desc2: 'Обслуживание клиентов: При обращении Пользователей в отдел обслуживания клиентов, ИП может - в рамках операций своего сайта - собирать личную информацию, необходимую для выполнения запроса Пользователя и получения обратной связи при необходимости. ИП может также связаться с Пользователем, используя существующую контактную информацию учётной записи, предоставленную для этой цели. ИП может также собирать другую информацию об общении с Пользователями, например, любые запросы в службу поддержки, подаваемые Пользователями, или любую обратную связь, предоставляемую ими. Сайт и мобильные данные: ИП может автоматически получать и регистрировать на своих серверах информацию из браузера пользователя или любого устройства, включая IP-адрес, программное обеспечение и аппаратные атрибуты, страницы, которые запрашивает Пользователь, мобильные идентификаторы, информацию об использовании приложения, и/или информацию о других используемых устройствах или информацию системного уровня. Это может происходить на Сайте или на мобильном приложении, или на сервисах третьих лиц.',
                    desc3: 'Прилагаемая информация: ИП может также добавить информацию, законно полученную от деловых партнеров или третьих сторон, к существующим данным ИП о своих пользователях.'
                }]
            },
            {
                title: '3. IP-АДРЕС, КУКИСЫ (COOKIES) и МОБИЛЬНЫЕ ИДЕНТИФИКАТОРЫ',
                desc: [{
                    desc1:'1.  В рамках деятельности своего сайта, ИП может собирать определенную информацию с помощью таких технологий как Кукисы (куки, cookies), пиксели (pixels), и локального хранилища (как в Вашем браузере, или мобильном устройстве).',
                    desc2: '2. КУКИСЫ (COOKIES) - это небольшие текстовые файлы, которые хранят информацию непосредственно на компьютере пользователя, его мобильном телефоне или другом устройстве.',
                    desc3: '3. Пиксели (pixels) – небольшие цифровые изображения, которые являются частью кодов на веб-страницах, которые позволяют другому серверу измерить просматриваемость веб-страницы, и часто используются в сочетании с кукис (cookies). Код отслеживает если и когда (и на какой странице) пиксель загружен, чтобы указать, что пользователь взаимодействует со страницей или частью страницы Сайта.',
                    desc4: '4. С помощью кукис (cookies), веб-сервер может сохранить, например предпочтения и настройки на компьютере Пользователя, его мобильном телефоне или другом устройстве(ах), которое затем автоматически восстанавливается при следующем посещении. Или, говоря иначе, файлы кукис (cookies) служат, помимо прочего, чтобы сделать использование Сайта более удобным, таким образом, например, чтобы Пользователь не должен был повторять процесс входа в систему при следующем визите. ИП использует как постоянные, так и сессионные куки. Постоянные куки остаются на компьютере Пользователя в течение более длительного периода времени, а сессионные куки автоматически удаляются при закрытии окна браузера.'
                }]
            },
            {
                title: '4. ИСПОЛЬЗОВАНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ',
                desc: [{
                    desc1: '1.  Для оказания своих услуг ИП может использовать информацию, которую ИП собирает и размещает для следующих целей:',
                    desc2:'1.1 обеспечение обслуживания клиентов, в том числе для создания и управления учетными записями пользователей, решения технических трудностей и доступа к различным функциям;',
                    desc3: '2.2 адаптация предложений и опыта, в том числе рекламы на своих сервисах или сервисах третьих лиц;',
                    desc4: '2.3 контроль общей и индивидуальной активности Пользователей, а также для управления трафиком на Сайте;',
                    desc5: '2.4 связь с пользователями, в том числе по вопросам сервиса, обслуживания клиентов или разрешенных маркетинговых коммуникаций через любые доступные каналы связи;',
                    desc6: '2.5 проведение научно-исследовательской и аналитической активности с целью улучшения нашего сервиса; и',
                    desc7: '2.6 обеспечение соблюдения Пользовательского соглашения сервисов WWW.ATHENAPLUS.KZ.',
                    desc8: 'ИП может сохранять информацию, которую она собирает и получает на своем Сайте так долго, как то требуется для выполнения вышеуказанных деловых целей.'
                }] 
            },
            {
                title: '5. ОБМЕН ИНФОРМАЦИЕЙ',
                desc: [{
                    desc1: '1.  ИП может делиться информацией, которую она собирает, с аффилированными лицами. При этом переданные данные остаются предметом Политики Конфиденциальности.',
                    desc2: '2. ИП не предоставляет личную информацию пользователей не аффилированным лицам.',
                    desc3: '3. ИП оставляет за собой право в соответствии с требованиями законодательства обмениваться информацией с частными лицами и государственными органами в следующих целях:',
                    desc4: '3.1 расследования предполагаемых нарушений закона или борьбы с любыми другими предполагаемыми нарушениями Пользовательского соглашения сервисов WWW.ATHENAPLUS.KZ Пользователями.',
                    desc5: '4. ИП может предоставлять персональные данные пользователей на запросы компетентных органов, оформленных в соответствии с требованиями законодательства Республики Казахстан.',
                    desc6: '5. В соответствии с Политикой конфиденциальности, ИП обязуется не передавать в аренду или продавать любые персональные данные Пользователя. В случае если бизнес ИП или часть этого бизнеса будут проданы или реорганизованы, и ИП передает все, или практически все свои активы новому владельцу, то персональные данные пользователей могут быть переданы покупателю, чтобы обеспечить непрерывность обслуживания Сайта,',
                    desc7: '6. ИП может передавать определенную обезличенную информацию (данные, которые не позволяют идентифицировать Пользователей по отдельности) сторонним поставщикам услуг, доверенным партнерам или авторизованным исследователям в целях лучшего понимания, какая реклама или услуги могут заинтересовать Пользователей, улучшения общего качества и эффективности услуг на Сайте или сервиса, или для обеспечения своего вклада в научные исследования, которые, по мнению ИП, могут приносить большие социальные блага.',
                    desc8: '7. В случаях передачи персональных данных, информирование Пользователя о передаче его персональных данных остается на усмотрение ИП.'
            
                }]
            },
            {
                title: '6. ПОЛЬЗОВАТЕЛЬСКИЙ КОНТРОЛЬ',
                desc: [{
                    desc1: '1. Доступ, Исправление и Удаление: Если учетная запись Пользователя была создана через провайдера идентификации (например, Facebook), Пользователь может также отключить, или изменить данные учетной записи через настройки провайдера идентификации (например, на facebook.com). Размещенная информация может быть изменена или удалена в личном кабинете пользователя "Мой профиль" на веб-странице Сайта, или в приложении.',
                    desc2: '2. Кукис (Cookies): Большинство основных компьютерных (десктопных) и мобильных веб-браузеров (например, Safari, Firefox, Internet Explorer, Chrome, Opera) обеспечивают элементы управления, которые позволяют пользователю ограничить или заблокировать установку Кукис (Cookies) на ваших системах. Обратите внимание, что отключение Кукис (Cookies) в отношении доменов первой категории (посещаемых сайтов) и других доменов (сайтов, связанных с посещаемыми) может привести в некоторых случаях к ограниченной функциональности этих веб-сайтов.',
                    desc3: '3. Другие права Пользователей в связи с обработкой их персональных данных ИП:персональных данных остается на усмотрение ИП.',
                    desc4: '3.1 знать о наличии у ИП, а также третьего лица своих персональных данных, а также получать информацию, содержащую: подтверждение факта, цели, источников, способов сбора и обработки персональных данных; перечень персональных данных; сроки обработки персональных данных, в том числе сроки их хранения;',
                    desc5: '3.2 требовать от ИП изменения и дополнения своих персональных данных при наличии оснований, подтвержденных соответствующими документами;',
                    desc6: '3.3 требовать от ИП, а также третьего лица уничтожения своих персональных данных, сбор и обработка которых произведены с нарушением законодательства Республики Казахстан, а также в иных случаях, установленных нормативными правовыми актами Республики Казахстан;',
                    desc7: '2.4 отозвать согласие на сбор, обработку персональных данных, кроме случаев, предусмотренных пунктом 2 статьи 8 Закона Республики Казахстан «О персональных данных и их защите»;',
                    desc8: '3.4 на защиту своих прав и законных интересов, в том числе возмещение морального и материального вреда;',
                    desc9: '3.5 на осуществление иных прав, предусмотренных настоящим законами Республики Казахстан.'
                }]
            },
            {
                title: '7. БЕЗОПАСНОСТЬ',
                desc: [{
                    desc1: 'Вся информация, которую ИП собирает, в разумных пределах защищена техническими средствами и процедурами обеспечения безопасности в целях предотвращения несанкционированного доступа или использование данных. Аффилированные с ИП лица, партнеры и сторонние поставщики услуг обязуются использовать полученную от ИП информацию в соответствии с нашими требованиями к безопасности и этой Политикой Конфиденциальности.'
                }]
            },
            {
                title: '8. ВНЕСЕНИЕ ИЗМЕНЕНИЙ В ЭТУ ПОЛИТИКУ',
                desc: [{
                    desc1: '1. Эта политика конфиденциальности была последний раз обновлена 05.09.2017. ИП может обновлять эту политику конфиденциальности время от времени, новая редакция Политики конфиденциальности вступает в силу с момента ее размещения в сети Интернет по указанному в данном пункте адресу, если иное не предусмотрено новой редакцией Политики конфиденциальности. Действующая редакция Политики конфиденциальности всегда находится на странице по адресу https://athenaplus.kz/',
                    desc2: '2. В случае если ИП были внесены любые изменения в Политику Конфиденциальности, с которыми Пользователь не согласен, он обязан прекратить использование сервисов Сайта. Факт непрекращения использования Сайта является подтверждением согласия и принятия Пользователем соответствующей редакцией Политики Конфиденциальности.'
                }]
            }
            ]
        }
    }
}
</script>

<style scoped>
</style>