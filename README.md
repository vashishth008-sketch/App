# VedIQ

VedIQ is an AI-driven platform for traditional Indian services: astrology, palm reading, pooja coordination and related cultural services. VedIQ combines generative AI (NLP + vision), scheduling, and secure payments to deliver personalized guidance and coordination.

Vision
- Deliver contextual, culturally accurate guidance using AI assistants that respect tradition and privacy.
- Enable users to get birth-chart readings, palm-reading (photo-based), schedule and coordinate poojas with priests, and book consultations.

MVP (recommended)
- User auth (email/phone + popular social logins)
- Astrology: birth-chart generation (input: DOB, time, place), basic interpretations via AI prompts
- Palm reading: image upload + AI vision model that extracts palm-line features and produces a reading
- Pooja coordination: search priests, calendar booking, basic payments
- AI chat assistant to ask follow-up questions and provide clarifications
- Admin dashboard for priests/consultants and pooja event management

Recommended Tech Stack (initial)
- Frontend: Next.js (React) for web; optional React Native / Flutter for mobile later
- Backend: Node.js + Express or Python + FastAPI
- DB: PostgreSQL (user data, bookings), Redis (caching, session)
- Storage: S3-compatible (images, attachments)
- Auth: OAuth + JWT; consider Firebase Auth or Auth0 for faster setup
- AI: OpenAI / Anthropic for chat; Replicate or custom vision model for palm analysis; LangChain for orchestration
- Payments: Stripe / Razorpay (India)
- Deployment: Vercel (frontend), AWS/GCP/Azure for backend and models

Privacy & Compliance
- Explicit consent and clear TOS for image uploads and readings
- Store minimal PII; encrypt sensitive fields in DB
- Allow users to delete their data (GDPR-like flow)

Quick dev setup (local)
1. Clone repo
2. Create .env with keys: DATABASE_URL, NEXT_PUBLIC_API_URL, OPENAI_API_KEY, S3 credentials
3. Backend: install dependencies, run migrations, start dev server
4. Frontend: install deps, run dev server

Contributing
- Follow feature branches per issue
- Add tests for AI prompt outputs and vision model pipelines
- Use a staged deployment to validate AI behaviors before prod

License: MIT