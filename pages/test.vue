<template>
  <section>
    <div class="container px-5 py-24 mx-auto text-white">
      <!-- ================================================= -->
      <div>
        <h2>Filtered Posts</h2>
        <pre> {{ data }}  </pre>

        <div>
          <div v-for="post in posts" :key="post.id">
            <h2>{{ post.attributes.Title }}</h2>
          </div>
        </div>
        <!-- <div v-show="showImage" class="flex justify-betweenitems-center">
            <img src="https://specials-images.forbesimg.com/imageserve/5babef3da7ea4342a948c024/416x416.jpg?background=000000&cropX1=1318&cropX2=2825&cropY1=226&cropY2=1732" alt="">
            <p class="text-white text-7xl">Дональд одобряет)0)</p>
        </div>
        <div v-show="showImage1" class="flex justify-betweenitems-center">
            <img src="https://pixel.nymag.com/imgs/daily/intelligencer/2018/08/24/24-donald-trump-2.w700.h700.jpg" alt="">
            <p class="text-white text-7xl">Дональд осуждает...((</p>
            
        </div>  -->
        <!-- <Accordion /> -->
    </section>
</template>

<script setup>
const query = gql`
  query getPosts {
    posts {
      data {
        id
        attributes {
          Title
          seo {
            seoTitle
          }
          category {
          data {
            id
            attributes {
                Title
            }
          }
        }
        }
      }
    }
  }
`

const { data } = await useAsyncQuery(query);

</script>

<script>
export default {
  setup() {
    const posts = ref([]);

    const { loading, error } = useAsyncQuery(query, {
      onCompleted(data) {
        posts.value = data.posts.data;
      }
    });

    onMounted(() => {
      if (!loading.value && !error.value) {
        posts.value = data.posts.data;
      }
    });

    return { posts, attributes  };
  }
};

</script>
