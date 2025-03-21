import { createResolver, defineNuxtModule } from '@nuxt/kit';
import { globbySync } from 'globby';

export default defineNuxtModule({
  meta: {
    name: '@rene-majewski/website-module-admin',
    configKey: 'moduleAdmin',
  },
  setup(_, nuxt) {
    console.info('📦 @rene-majewski/website-module-admin geladen!');

    const resolver = createResolver(import.meta.url);

    nuxt.hook('pages:extend', (pages) => {
      const modulePages = globbySync(['runtime/pages/**/*.vue', 'runtime/pages/*.vue'], { cwd: __dirname });

      modulePages.forEach((file) => {
        const relativePath = file.replace(/^runtime\/pages\//, '').replace(/\.vue/, '');
        const routePath = relativePath === 'index' ? '' : `/${relativePath}`;

        pages.push({
          name: `admin-${relativePath.replace(/\//g, '-')}`,
          path: `/admin${routePath}`,
          file: resolver.resolve(file),
        });
      });
    });
  },
});
