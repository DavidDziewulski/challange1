
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

import './js/main.js'
import './sass/style.sass'

library.add(faMobileAlt, faMapMarkerAlt, faUser, faLock, faEnvelope)
dom.watch()
