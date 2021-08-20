# Diff Changes

> The initial functionality for this feature was written by @aaronjcolclough (esq.). I just helped with optimizing the API and component design.

[![Deploy Pages](https://github.com/JaimeStill/diff-changes/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/JaimeStill/diff-changes/actions/workflows/deploy-pages.yml)

[![image](https://user-images.githubusercontent.com/14102723/130131748-cfb75da3-835a-4b6e-ae0d-69374b4a3faa.png)](https://user-images.githubusercontent.com/14102723/130131748-cfb75da3-835a-4b6e-ae0d-69374b4a3faa.png)

Working on standardizing the process of being able to present two serialized JSON strings that are related and represent changes in state. In the above screenshot, direct object properties are rendered in red (previous value) and green (proposed value). If a nested object within the comparison is different between the two states, the name of the nested object property is rendered in the primary app color.

## Relevant Files

* [`diff.ts`](./projects/core/src/lib/models/diff.ts)
* [`prop-node.ts`](./projects/core/src/lib/models/prop-node.ts)
* [`app.service.ts`](./projects/core/src/lib/services/app.service.ts)
* [`diff-card.component.ts`](./projects/core/src/lib/components/diff-card.component.ts)
  * [`diff-card.component.html`](./projects/core/src/lib/components/diff-card.component.html)
* [`prop-node.component.ts`](./projects/core/src/lib/components/prop-node.component.ts)
  * [`prop-node.component.html`](./projects/core/src/lib/components/prop-node.component.html)
* [`home.route.ts`](./src/app/routes/home/home.route.ts)
    * [`home.route.html`](./src/app/routes/home/home.route.html)
