import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'
import { Notify, Loading, Dialog, LocalStorage, SessionStorage } from "quasar";

Vue.use(Quasar, {
  config: {},
  plugins: {
    Loading,
    Dialog,
    Notify,
    LocalStorage,
    SessionStorage,
  },
})