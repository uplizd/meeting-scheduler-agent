# Contributing

Thanks for contributing to **Meeting Scheduler Agent**.

```bash
git clone https://github.com/uplizd/meeting-scheduler-agent.git
cd meeting-scheduler-agent
cp .env.example .env
npm run install:all
npm run dev
```

## Guidelines

- Small, focused components
- Secrets only in `.env` (never committed)
- Prefer existing CSS variables from `global.css` / `components.css`
- Coordinate new dependencies before adding them

## PR checklist

- [ ] `cd web && npm run build` succeeds
- [ ] No `.env` in the commit
- [ ] Clear PR description
