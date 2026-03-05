# Abdus Shohid Shakil's Portfolio

This is the repository for my personal portfolio website, showcasing my projects, skills, and experience as a full-stack JavaScript developer.

## About

This portfolio is a Next.js application that highlights my work, including my flagship project, APIBolt. It's designed to be a modern, responsive, and performant showcase of my abilities.

You can view the live version of my portfolio at [shakil102043.vercel.app](https://shakil102043.vercel.app) (replace with your actual domain if different).

## Built With

This project is built with a modern tech stack, including:

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and pnpm installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/your_repository.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Create a `.env.local` file in the root of the project and add the necessary environment variables. You can use `example.env.local` as a template.

4. Run the development server
   ```sh
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

The project follows a standard Next.js `app` directory structure.

```
.
├── app/                  # Main application code
│   ├── (web)/            # Main website pages
│   └── api/              # API routes
├── components/           # Reusable components
├── constant/             # Constant values
├── context/              # React context providers
├── hooks/                # Custom React hooks
├── lib/                  # Library and utility functions
├── public/               # Static assets
├── schema/               # Zod schemas for validation
└── types/                # TypeScript type definitions
```

## License

This project is licensed under the MIT License. See `LICENSE` for more information.
