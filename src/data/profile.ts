/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Reamar Pancho',
  firstName: 'Reamar',
  handle: '@reamarpancho',
  role: 'Customer Support / Ticketing Operations / Virtual Assistance',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Reamar Pancho',
  email: 'panchoreamar@gmail.com',
  location: 'Philippines · GMT+8',
  stats: [
    { value: '4+ years', label: 'Customer Support', Icon: Briefcase },
    { value: '2 years', label: 'Ticketing Operations', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],
  displayName: {
    line1: 'Humanely support.',
    line2: 'Frictionless operations.',
  },
  hero: {
    body: '6+ years on the front line, helping customers and keeping operations running smoothly.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Portrait of Reamar Pancho',
  },
  socials: [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/639702922315',
      iconPath: '/icons/whatsapp.svg',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/reamar-pancho-935966284',
      iconPath: '/icons/linkedin.svg',
    },
    {
      label: 'Discord',
      href: 'https://discord.com/users/767645475624321047',
      iconPath: '/icons/discord.svg',
    },
  ],
}
