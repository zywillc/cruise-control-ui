<template>
  <div class="message-wrapper" @click.self="$close()">
    <div class="message-content">{{ content }}</div>
  </div>
</template>

<style scoped>
  .message-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(12, 12, 12, 0.33);
  }

  .message-content {
    padding: 32px;
    border-radius: 2px;
    margin: 0 16px;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.33);
    display: block;
  }
</style>
