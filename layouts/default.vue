<template>
  <div class="h-screen flex flex-col justify-between">
    <div>
      <Header />
      <Overlay />
    </div>
    <div>
      <slot />
    </div>
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>

<script></script>
