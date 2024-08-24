import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_hrGE5E50.mjs';
import { manifest } from './manifest_Uw8RJggb.mjs';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_lang_/blog.astro.mjs');
const _page2 = () => import('./pages/_lang_/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/_lang_/hygraph.astro.mjs');
const _page4 = () => import('./pages/_lang_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[lang]/blog/index.astro", _page1],
    ["src/pages/[lang]/blog/[...slug].astro", _page2],
    ["src/pages/[lang]/hygraph.astro", _page3],
    ["src/pages/[lang]/index.astro", _page4]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "client": "file:///home/ajdin/frontend-projects/astro-starter/.amplify-hosting/static/",
    "server": "file:///home/ajdin/frontend-projects/astro-starter/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
