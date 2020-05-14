# Grab Onboarding task

Frontend repository for onboarding task

## Integrating Backend

By default, Wordpress site must run on http://localhost:8888/grab-todo in order for this app to work.

## Development

1. Install dependencies

```
yarn
```

2. Start server

```
yarn start
```

> This will open browser at http://localhost:8000

## Production

1. Build file

```
yarn build
```

> This will bundle all files to `/dist` directory

2. Serve it

```
serve -l 5000 dist
```

> This will open your browser in http://localhost:5000. I use `serve` because it is very simple to use. Just run `npm install -g serve`
