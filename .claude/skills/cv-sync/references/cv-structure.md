# CV Structure: LaTeX → TypeScript Schema

This documents the full schema for `src/data/pages/cv.ts` and how each LaTeX section maps to it.

## Full Schema

```ts
export const cvPage = {
  // PDF links (both open in new tab; CV and Resume)
  pdfLinks: Array<{ label: string, href: string }>,
  // e.g. [{ label: "View CV (PDF)", href: "/cv.pdf" }, { label: "View Resume (PDF)", href: "/resume.pdf" }]

  personalStatement: {
    researchInterests: string,      // clean prose only, no draft notes in parens
    professionalDevelopment: string,
    teaching: string,
    researchKeywords: string[],
    outreachKeywords: string[],
    teachingKeywords: string[],
  },

  education: Array<{
    degree: string,
    institution: string,
    institutionUrl?: string,
    period: string,
    advisor?: string,
    advisorUrl?: string,
    gpa?: string,
  }>,

  publications: {
    peerReviewed: Array<{
      date: string,
      authors: string,      // formatted string, bold your name conventionally
      title: string,
      journal: string,
      doi?: string,
      url?: string,
    }>,
  },

  technicalSkills: Array<{
    category: string,   // e.g. "Computation", "AI", "Data Science"
    items: string[],
  }>,

  researchExperience: {
    positions: Array<{
      period: string,
      role: string,
      roleUrl?: string,
      organization: string,
      orgUrl?: string,
    }>,
    projects: Array<{
      period: string,
      title: string,
      titleUrl?: string,
      githubUrl?: string,
      description: string,
      collaborators?: string,
      inPreparation?: boolean,
    }>,
  },

  graduateCoursework: Array<{
    area: string,       // e.g. "Physics", "Life Science", "Comp Sci"
    courses: string[],
  }>,

  awards: Array<{
    year: string,
    items: string[],
  }>,

  conferences: {
    conferences: Array<{
      date: string,
      title: string,
      titleUrl?: string,
      presentation: string,
      authors: string,
    }>,
    workshops: Array<{
      date: string,
      title: string,
      titleUrl?: string,
      role?: string,
      location?: string,
    }>,
    outreach: Array<{
      date: string,
      title: string,
      titleUrl?: string,
      description: string,
    }>,
  },

  service: Array<{
    period: string,
    role: string,
    roleUrl?: string,
    organization: string,
    orgUrl?: string,
    description: string,
  }>,

  references: Array<{
    name: string,
    nameUrl?: string,
    email?: string,
    department: string,
    institution: string,
  }>,
} as const;
```

## LaTeX Section → Schema Field Mapping

| LaTeX `\section*{}` | Schema field |
|---|---|
| `PERSONAL STATEMENT` | `personalStatement` |
| `EDUCATION` | `education` |
| `PUBLICATIONS` → `Peer-Reviewed Journals` | `publications.peerReviewed` |
| `TECHNICAL SKILLS` | `technicalSkills` |
| `RESEARCH EXPERIENCE` → `Positions` | `researchExperience.positions` |
| `RESEARCH EXPERIENCE` → `Projects` | `researchExperience.projects` |
| `GRADUATE COURSEWORK` | `graduateCoursework` |
| `AWARDS AND ACHIEVEMENTS` | `awards` |
| `CONFERENCES AND WORKSHOPS` → `Conferences` | `conferences.conferences` |
| `CONFERENCES AND WORKSHOPS` → `Workshops, Webinars and Tutorials` | `conferences.workshops` |
| `CONFERENCES AND WORKSHOPS` → `Outreach and Community Engagement` | `conferences.outreach` |
| `SERVICE` | `service` |
| `REFERENCES` | `references` |

## cv.astro Render Pattern

Each section in `cv.ts` needs a corresponding `<div class="mt-12">` block in `src/pages/cv.astro`. Follow the existing pattern:

```astro
<div class="mt-12">
  <h2 class="mb-4 text-xl">Section Title</h2>
  {cvPage.sectionName.map((item) => (
    <div class="mb-4">
      <!-- render item fields -->
    </div>
  ))}
</div>
```

For subsections (e.g. conferences vs workshops), use `<h3 class="mb-3 text-lg font-semibold">` inside the parent `<div>`.

Links should use `<a href={item.url} class="cactus-link" target="_blank" rel="noopener">`.
