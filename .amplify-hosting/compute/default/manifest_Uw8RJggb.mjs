import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_Cy5wBaJ2.mjs';
import { k as decodeKey } from './chunks/astro/server_WP6ENgry.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_ConxHx55.mjs';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ajdin/frontend-projects/astro-starter/","adapterName":"astro-aws-amplify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ajdin/frontend-projects/astro-starter/src/pages/[lang]/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/ajdin/frontend-projects/astro-starter/src/pages/[lang]/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/ajdin/frontend-projects/astro-starter/src/pages/[lang]/hygraph.astro",{"propagation":"in-tree","containsHead":true}],["/home/ajdin/frontend-projects/astro-starter/src/pages/[lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/ajdin/frontend-projects/astro-starter/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/hygraph@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/data-access/static/requests/get-collection/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/data-access/static/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/use-case/static/blog/get-static-params/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/use-case/static/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/use-case/static/blog/get-static-params/slug.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/data-access/static/requests/get-entry/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/use-case/static/blog/models/blog/schema.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/use-case/static/blog/models/blog/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/content/_handlers/__schema__/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/content/config.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/use-case/hygraph/page/get-blog-static-params/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/ajdin/frontend-projects/astro-starter/src/bff/use-case/hygraph/index.ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/index@_@astro":"pages/_lang_/blog.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/[...slug]@_@astro":"pages/_lang_/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/[lang]/hygraph@_@astro":"pages/_lang_/hygraph.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Uw8RJggb.mjs","/home/ajdin/frontend-projects/astro-starter/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/improve-thespeed-of-app-de.md?astroContentCollectionEntry=true":"chunks/improve-thespeed-of-app-de_MfVKGhWy.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/improve-thespeed-of-app-en.md?astroContentCollectionEntry=true":"chunks/improve-thespeed-of-app-en_DIwjEo_W.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/test-de.md?astroContentCollectionEntry=true":"chunks/test-de_B6BoWpYA.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/test-en.md?astroContentCollectionEntry=true":"chunks/test-en_D5bqwt0d.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/improve-thespeed-of-app-de.md?astroPropagatedAssets":"chunks/improve-thespeed-of-app-de_Ds8zitT7.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/improve-thespeed-of-app-en.md?astroPropagatedAssets":"chunks/improve-thespeed-of-app-en_DOXfCNR-.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/test-de.md?astroPropagatedAssets":"chunks/test-de_Y_FIXMcF.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/test-en.md?astroPropagatedAssets":"chunks/test-en_DZH8Pm5t.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/improve-thespeed-of-app-de.md":"chunks/improve-thespeed-of-app-de_C1dN_Kcp.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/improve-thespeed-of-app-en.md":"chunks/improve-thespeed-of-app-en_CSNEjgPt.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/test-de.md":"chunks/test-de_w_F_n0hI.mjs","/home/ajdin/frontend-projects/astro-starter/src/content/blog/test-en.md":"chunks/test-en_D1huTlNN.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D-2wbxhY.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.CHFvcNoi.css","/favicon.svg","/_astro/client.5I5BMcNS.js","/_astro/hoisted.D-2wbxhY.js"],"i18n":{"strategy":"pathname-prefix-other-locales","locales":["en","de"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"8ejpXKPmvFYd6+V9x+DTEW+u/NyTACVnQp6n2tb3lTo=","experimentalEnvGetSecretEnabled":false});

export { manifest };
