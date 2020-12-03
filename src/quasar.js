import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'
import { Loading, Dialog } from "quasar";

Vue.use(Quasar, {
  config: {},
  plugins: {
    Loading,
    Dialog,
  },
})