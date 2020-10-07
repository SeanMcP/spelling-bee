/**
 * Create a store instance
 * @param  {} {{ initialState: any, name: string, type: ('local'|'session') }}
 */
export function Store({ initialState, name, type }) {
  const storage = window[type + "Storage"];
  const key = name + "-store";

  if (!storage.getItem(key)) {
    storage.setItem(key, JSON.stringify(initialState));
  }

  const event = new CustomEvent(key + "-change");

  return {
    event,
    key,
    get() {
      return JSON.parse(storage.getItem(this.key));
    },
    set(data) {
      storage.setItem(this.key, JSON.stringify(data));
      window.dispatchEvent(this.event);
    },
    clear() {
      this.set(initialState);
    },
  };
}

export const WordsStore = new Store({
  initialState: [],
  name: "words",
  type: "session",
});
