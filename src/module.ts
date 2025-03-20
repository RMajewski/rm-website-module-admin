import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    "name": "@rene-majewski/website-module-admin",
    "configKey": "@rene-majewski/website-module-admin"
  },
  setup() {
    console.debug("📦 @rene-majewski/website-module-admin geladen!")
  }
})