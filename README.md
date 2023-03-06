# Setup Steps

- `cp` .vscode settings for vscode linting
- React UI
  - `npm create vite@latest` create react frontend project using [Vite](https://vitejs.dev/guide/)
  - `cp` .eslintignore, .eslintrc.json, .prettierrc.json for linting
- NestJS API
  - `npm i -g @nestjs/cli` install [NestJS CLI](https://docs.nestjs.com/first-steps)
  - `nest new <project-name>` to create API scaffolding
  - `npm i prisma --save-dev` install Prisma for ORM
  - `cp .env .env.example` and add .env to .gitignore
    - update .env database url
  - Added Code Generation block in README for useful commands
  - Added User model to prisma
  - `npx prisma migrate dev` to create initial migration
  - Added `/src/resources/db` for Prisma ORM Client
- Database
  - `docker-compose up` to set up local MySQL with docker  
