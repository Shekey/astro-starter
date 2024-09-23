## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   │
│   │──── bff/
│   │   └── data-access/
│   │   │       └── hygraph/
│   │   └── service/
│   │   │       └── Log
│   │   └── use-case/
│   │            └── hygraph/
│   │                  └── get-static-params/
│   │            └── static/
│   │                  └── get-static-params/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── content/
│   │   └── collection-1
│   │    └── collection-2
|   ├──lib/
│   │   └── utils
│   │          └── index
│   └── pages/
│       └── index.astro
│        └── hygraph.astro
│        └── blog/
│            └── [...slug].astro
│            └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.


## 🧞 BFF folder

So there are 3 folders inside
 - data-access
 - service
 - use-case

Each of these folder has it's own purpose

### Data Access

I'll try to answer why we do this and then I guess the rest is on you.

Within this folder we try to:
 - separate data sources (repositories)
    - hygraph (Hygraph CMS)
    - static (content folder which is specific for Astro )
 - create data layer which gives us later posibility to switch our data source faster and safer
  Lets say you have to move from Hygraph to your custom API. With DAL (data layer) it's signifactly easier.
  Most likely you will change client implementation (hygraph/client/index.ts) and re-do requests implementation and that's it. Isn't that a huge benefit?
 - Handle data response as we want and be able to customize response how we like it and to something that we can understand and rely on (entity folder)

### Service

Here we should add all our custom logic that will help us to achieve things and save us from repetition (DRY)

### Use Case

Here we again follow same principle with folder structure, reason is we want to separate logic, like creating layers.

 #### What is a use case?
  So we use this approach when we want to implement something that describes your bussiness.
  We define use cases as something that help you to achieve your goal. Also we now here have full control over our reponse to frontend.
  Here we accept entities we have defined in Data Access layer and we know what are possibilites so it's very easy to type function parameters.
  Use cases shouldn't be mixed. Each use cases should be clear implementation of something, even if you sometimes have to fetch something you already did,
  per my experiance you shouldn't mix them, because it will be hard later to change something because they are going to be mixed so much and one change can
  cause a lot of damage to your other use cases. In this example I didn't need to bring next layer which would be Application layer or controllers.

  Side note: Idea of controllers is that you now mix more use cases and create something complex and again at the end create ReponseHandlers which will help you
  to modify output of multiple resolved use cases.

  If you're interested start reading here and then continue [Three layers Architecture](https://dev.to/sardarmudassaralikhan/three-layer-architecture-used-in-software-development-57ji)

  This is very short explanation how to handle layered architecture but of mid level projects you don't need to extend implemetation with another layer.
  As you can see `pages/[lang]/blog` are pretty okayish and they look clear.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                            |
| :------------------------ | :-----------------------------------------------  |
| `npm install`             | Installs dependencies                             |
| `npm run dev`             | Starts local dev server at `localhost:4321`       |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `npm run codegen`         | Uses schema from .env and generates schema from   |
| `npm run lint`            | Check TS Errors                                   |
| `npm run lint:fix`        | Fixes TS Errors                                   |
| `npm run format`          | Formats all file per specified configuration      |
| `npm run astro -- --help` | Get help using the Astro CLI                      |


## 👀 Hygraph starter instance?
https://app.hygraph.com/clone/976d0143fccc4ad0937c08d03d5f4576?name=Astro-starter



