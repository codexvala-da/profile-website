# daxilvala.com

Personal site of Daxil Vala, backend & AI software engineer. Built with Next.js (App Router), Tailwind CSS v4 and TypeScript, deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy (experience, projects, skills, education, links) lives in [`src/content.ts`](src/content.ts). The resume served by the site is `public/Daxil_Vala_Resume.pdf`; replace that file to update it.

## Contact form

The form posts to `src/app/api/send/route.ts`, which forwards messages through [Resend](https://resend.com) with the visitor's address as `Reply-To`. Set these environment variables:

| Variable         | Purpose                                   |
| ---------------- | ----------------------------------------- |
| `RESEND_API_KEY` | Resend API key                            |
| `FROM_EMAIL`     | Verified sender, e.g. `site@yourdomain`   |
| `COPY_EMAIL`     | Inbox that receives contact form messages |
