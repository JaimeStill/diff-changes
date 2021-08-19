# Diff Changes

[![Deploy Pages](https://github.com/JaimeStill/diff-changes/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/JaimeStill/diff-changes/actions/workflows/deploy-pages.yml)

![image](https://user-images.githubusercontent.com/14102723/130082332-7847c275-4ceb-491d-9866-5133e799fccc.png)

Working on standardizing the process of being able to present two serialized JSON strings that are related and represent changes in state. In the above screenshot, direct object properties are rendered in red (previous value) and green (proposed value). If a nested object within the comparison is different between the two states, the name of the nested object property is rendered in the primary app color.

## Relevant Files

> Cards have not yet been componetized. This is still a work in progress and will be completed once the API + rendering strategy are fully established.

* [`diff.ts`](./projects/core/src/lib/models/diff.ts)
* [`app.service.ts`](./projects/core/src/lib/services/app.service.ts)
* [`home.route.ts`](./src/app/routes/home/home.route.ts)
    * [`home.route.html`](./src/app/routes/home/home.route.html)