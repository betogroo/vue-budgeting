/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import {
  VCard,
  VDataTable,
  VDataTableVirtual,
  VDataTableServer,
} from 'vuetify/lib/components/index.mjs'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
  aliases: {
    VCardForm: VCard,
  },
  defaults: {
    VCardForm: {
      flat: true,
      class: 'rounded-lg pa-2',
      style: 'border: 2px dotted',
      width: '100%',
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
