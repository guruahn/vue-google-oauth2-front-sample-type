# vue-google-oauth2-front-sample-type
> Sample typescript vue project for vue-google-oauth2 plugin.

## Project setup

### 1.install
```
yarn install
```

### 2. set your google clientId in main.ts
```
Vue.use(gAuth,
  {
    clientId: '768834812579-cusmrncq6fitlfdb76qk9jm7bq902ic0.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account',
  }
);
```

## Project start

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
