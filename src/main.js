import { createApp } from 'vue'
import App from './App.vue'
/* importo la libreria */
import { library } from '@fortawesome/fontawesome-svg-core'
// importo le icone che mi servono
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'

/* importo il componente */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMagnifyingGlass, solidStar, regStar);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
