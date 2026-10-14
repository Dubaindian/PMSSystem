# Modular PMS Application Skeleton

Node.js 24 Vercel project with separate API routes, services, middleware, templates, tests, CSS and browser JavaScript.

## Structure

- `api/index.js` application composition
- `routes/` health, evaluations, approvals and exports
- `services/` storage, workflow, email, PDF and Excel services
- `templates/` email templates
- `middleware/` validation and error handling
- `public/` pages, CSS and browser JavaScript
- `tests/` Node test suite

## Vercel

Framework Preset: Other. Leave Build Command and Output Directory blank. Set `BASE_URL`, `AZURE_TENANT_ID`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET`, and `MAIL_SENDER`.

## Important

`runtime-store.js` is intentionally isolated so it can be replaced by PostgreSQL. It currently uses temporary storage and is not durable.
