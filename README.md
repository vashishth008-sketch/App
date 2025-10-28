# VedIQ

VedIQ is an AI-driven platform for traditional Indian services: astrology, palm reading, pooja coordination and related cultural services. VedIQ combines generative AI (NLP + vision), scheduling, and secure payments to deliver personalized guidance and coordination.

## Vision
- Deliver contextual, culturally accurate guidance using AI assistants that respect tradition and privacy.
- Enable users to get birth-chart readings, palm-reading (photo-based), schedule and coordinate poojas with priests, and book consultations.

## Product preview
The repository currently contains a static product experience that communicates the VedIQ value proposition and demonstrates interactive mock flows for:
- AI-assisted astrology readings
- Palm-reading analysis from photo uploads
- Pooja coordination concierge
- Conversational AI assistant
- Pricing and onboarding journeys

Open `index.html` in any modern browser to explore the interactive demo.

## Local preview
```bash
# From the repository root
python3 -m http.server 8000
```
Navigate to [http://localhost:8000](http://localhost:8000) and open `index.html` to view the experience.

## Next steps for the full platform (recommended)
1. **User auth**: implement email/phone + social logins and secure session management.
2. **Astrology**: build accurate birth-chart generation (DOB, time, place) and layer AI interpretations with human review.
3. **Palm reading**: integrate a vision model (custom or via Replicate) to analyze palm-line features and produce readings.
4. **Pooja coordination**: searchable marketplace of priests, calendar booking, logistics support, and payments (Stripe / Razorpay).
5. **AI chat assistant**: multilingual assistant with guardrails, domain-specific knowledge, and retrieval from verified sources.
6. **Admin tools**: dashboards for practitioners and coordinators to manage availability, bookings, and ritual kits.

## Recommended tech stack
- **Frontend**: Next.js (React) for web; optional React Native / Flutter for mobile later.
- **Backend**: Node.js + Express or Python + FastAPI.
- **Database**: PostgreSQL for user data and bookings; Redis for caching/session state.
- **Storage**: S3-compatible object storage for images and media uploads.
- **Auth**: OAuth + JWT; consider Firebase Auth or Auth0 for faster setup.
- **AI**: OpenAI / Anthropic for chat orchestration; LangChain for workflow; custom/Replicate models for palm analysis.
- **Payments**: Stripe or Razorpay (India focus).
- **Deployment**: Vercel (frontend), AWS/GCP/Azure for backend and inference workloads.

## Privacy & compliance
- Collect explicit consent and offer clear terms for image uploads and AI-generated readings.
- Store minimal personally identifiable information and encrypt sensitive data at rest.
- Provide users with data deletion and export flows aligned with GDPR/DPDP requirements.

## Quick dev setup (future backend/frontend)
1. Clone repo.
2. Create `.env` with keys: `DATABASE_URL`, `NEXT_PUBLIC_API_URL`, `OPENAI_API_KEY`, storage credentials, etc.
3. Backend: install dependencies, run migrations, start dev server.
4. Frontend: install dependencies, run dev server.

## Contributing
- Follow feature branches per issue.
- Add tests for AI prompt outputs and vision model pipelines.
- Use a staged deployment to validate AI behaviors before production release.

## License
MIT
