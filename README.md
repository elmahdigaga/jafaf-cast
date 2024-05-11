## Installation

Clone this repo using this command:

```github
git clone git@github.com:abdelhadi-ahram/simula.git simula
cd simula
```

After that, run this command o setup the env variables

```
cp ./.env.example ./.env.local
```

It is important to edit .env.local to include the api keys. these API keys are available in supabase dashbord

```
npm i
npm run dev
```

## Development
```
src
|--app                   used by next for routing
|-----auth
|--------signup
|-----------page.tsx    the page for /auth/signup path
|--component
|-----auth
|--------signup         the ui for /auth/signup page
|--server-actions       server actions
|--types                interface that represents database entities, we intend to use javascript object instead of classes, because it is easier to pass them from a server component to client component
|--context              context providers
|--utils                

```

## Creating Pull Requests

before editing the code, it is important to navigate to the main branch, and fetch the latest changes
```
git checkout main
git pull
```

Then, create your own branch with prefix ft- to denote a feature or fix- for fixing a problem
```
git checkout -b ft-create-models-page
```

To increase our productivity, it is very important to make the PRs minimal, and do not open a new PR until the previous one is closed

The PR will be closed by the other members of the team after verifying the code.
