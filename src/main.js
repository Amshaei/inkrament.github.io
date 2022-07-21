import { createApp } from 'vue'
import App from './App.vue'



// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core' // Library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // Icon Component
import { faUserSecret } from '@fortawesome/free-solid-svg-icons' // Specific Icons

library.add(faUserSecret)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
