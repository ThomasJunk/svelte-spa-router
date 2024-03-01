import { writable } from "svelte/store";

const initStore = () => {
  const state = {
    app: {
      login: false
    }
  };
  return state;
};

function createStore() {
  const { subscribe, set, update } = writable(initStore());
  return {
    subscribe,
    setLoginState: (newState) => {
      update((settings) => {
        settings.app.login = newState;
        return settings;
      });
    }
  };
}

export const appStore = createStore();
