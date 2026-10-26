# Daniel Oluwasegun — Data Analyst Portfolio

## Run locally

```sh
npm install
npm run dev
```

## Contact form setup

The contact form uses [Web3Forms](https://web3forms.com/) to deliver submissions. Copy `.env.example` to `.env.local`, then replace the placeholder with your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

Restart the Vite dev server after changing environment variables. Add the same variable to your hosting provider's environment settings when deploying. The `.env.local` file is git-ignored.

## Checks

```sh
npm run lint
npm run build
```
