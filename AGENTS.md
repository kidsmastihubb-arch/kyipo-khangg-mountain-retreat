<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Single-page cottage site (Kyipo Khangg Cottage): all homepage sections live in src/components/*Section.tsx, assembled by src/routes/index.tsx. Why: one-page anchor-nav site, no extra routes.
- Photos: only owner-supplied PNGs in src/assets, imported as ES modules; no JSON image maps, no external/stock images. Why: hard owner requirement.
