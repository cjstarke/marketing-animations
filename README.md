# Marketing Animations

This is a [Next.js](https://nextjs.org/) app. To run it locally:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## What is this?

This project is a marketing company's website template, built to showcase cool, highly interactive animations and visual effects. It combines modern React/Next.js patterns with animation and 3D libraries to demonstrate what's possible in a marketing/landing-page context, including:

- **[GSAP](https://gsap.com/)** (with `@gsap/react`) for scroll-driven and timeline-based animations
- **[Three.js](https://threejs.org/)** for interactive 3D backgrounds and overlays
- **[Lottie](https://lottiefiles.com/)** (`@lottiefiles/lottie-player` + interactivity) for lightweight vector animations
- **Tailwind CSS** for styling

The app is just a snippet of the homepage, where we can see these animations:

<video src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/venndiagramrecording_56123ceda0.webm" autoplay loop muted playsinline controls></video>

<video src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/threejsrecording_46f6ea5f37.webm" autoplay loop muted playsinline controls></video>

> **Note:** WebM is a fine format here — GitHub natively renders `<video>` tags in README files. However, for security/UX reasons GitHub strips the `autoplay` attribute (and sometimes `loop`) when it sanitizes README HTML, so viewers on GitHub.com will see a paused video with controls that they need to press play on, rather than a true autoplay. The `muted` + `playsinline` attributes are kept so that if this README is rendered elsewhere (e.g. a docs site or raw HTML viewer) that doesn't sanitize the tag, autoplay will work as expected there.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API
- [GSAP Documentation](https://gsap.com/docs/v3/) — learn about GSAP animations
- [Three.js Documentation](https://threejs.org/docs/) — learn about 3D rendering with Three.js

This is a template project intended to be run locally only; no staging or production deployment configuration is included.
