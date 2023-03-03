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

      </div>
      <!-- ================================================= -->
    </div>
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
