import AOS from 'aos';

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  if (typeof window !== 'undefined') {
    const initAOS = () => AOS;
    inject('AOS', initAOS)
    // For Nuxt <= 2.12, also add 👇

    app.$AOS().init({
        once: false
    });
  }
}