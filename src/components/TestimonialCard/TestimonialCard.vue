<template>
  <main>
    <div class="card" role="article" aria-labelledby="card-name">
      <div class="card-header">
        <img class="card-avatar" alt="avatar-picture" :src="profileImg" />
        <div class="card-id-info">
          <h2 class="card-name text-lg" id="card-name">Sarah Dole</h2>
          <p class="card-handle text-sm">@sarahdole</p>
        </div>
      </div>
      <section>
        <p lang="en" class="card-paragraph text-base">
          I've been searching for high-quality abstract images for my design projects, and
          I'm thrilled to have found this platform. The variety and depth of creativity
          are astounding!
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import profileImg from '../../assets/profile.png';
</script>

<style scoped>
main {
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #f9fafb, #d2d6db);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-sm {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}

.text-base {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}

.text-lg {
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
}

.card {
  margin-top: 12.5rem;
  box-shadow:
    0rem 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1),
    0rem 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1);
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  font-family: 'Noto Sans', sans-serif;
  width: 21.25rem;
}

.card:focus {
  outline: 0.125rem solid #005fcc;
}

.card-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.0313rem;
  max-width: 18.25rem;
}

.card-avatar {
  width: 3rem;
}

.card-id-info {
  display: flex;
  flex-direction: column;
  max-width: 14.25rem;
}

.card-name {
  color: #171717;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 14.25rem;
}

.card-handle {
  color: #525252;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 14.25rem;
}

.card-paragraph {
  width: 18.25rem;
  height: 7.5rem;
  color: #525252;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
