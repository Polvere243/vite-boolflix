import { createApp } from 'vue'
import App from './App.vue'
/* importo la libreria */
import { library } from '@fortawesome/fontawesome-svg-core'
// importo le icone che mi servono
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'

/* importo il componente */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMagnifyingGlass, faStar);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
