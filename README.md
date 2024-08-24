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

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                            |
| :------------------------ | :-----------------------------------------------  |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run codegen`         | Uses schema from .env and generates schema from  |
                             | Graphql                                          |
| `pnpm run lint`            | Check TS Errors                                  |
| `pnpm run lint:fix`        | Fixes TS Errors                                  |
| `pnpm run format`          | Formats all file per specified configuration     |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to reach me out [Linkedin](https://www.linkedin.com/in/ajdin-sahinbegovic/).
