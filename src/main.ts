import { createApp } from 'vue';
import App from '@/App.vue';

import 'default-passive-events';
import '@/style.css';

import { initMock } from '@/mock';
const TIME_MOCK = 'mock';
const start = async () => {
  try {
    console.time(TIME_MOCK);
    await initMock();
  } catch (error) {
    console.error(error);
  } finally {
    console.timeEnd(TIME_MOCK);
    createApp(App).mount('#app');
  }
};

start();
