# Content (Astro collections)

This folder holds all **content collections** used by the site. Routes and rendering are driven by `src/content.config.ts`.

| Collection | Purpose | URL pattern |
|------------|---------|-------------|
| **post** | Blog posts (frontmatter: title, description, tags, publishDate, draft, etc.) | `/posts/`, `/posts/[slug]`, `/tags/[tag]/` |
| **note** | Short notes / micro-blog | `/notes/`, `/notes/[slug]` |
| **tag** | Tag metadata (title, description) for blog tags | Used when listing/filtering posts by tag |

## Folders

- **post/** – Blog posts. Use subfolders for series or topics (e.g. `post/some-topic/my-post.md`). Use `draft: true` in frontmatter to hide from production.
- **post/testing/** – Example/test posts (e.g. for styling, long titles, drafts).
- **post/markdown-elements/** – Posts that demonstrate markdown and component features.
- **note/** – Note entries (simpler schema: title, description?, publishDate).
- **tag/** – One file per tag slug (e.g. `tag/image.md`, `tag/markdown.md`) with optional `title` and `description`.

Edit content here; pages in `src/pages/` and components in `src/components/` consume these via the Astro content layer.
