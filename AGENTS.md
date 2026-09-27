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

<!-- SUBU:BEGIN -->
> [!IMPORTANT]
> All visual decisions live as tokens in `src/styles.css` (paper/ink palette,
> `--font-display`/`--font-body`/`--font-hand`, `grain`/`photo-print`/`tape`
> utilities, reveal motion). Components use only those semantic classes — never
> a hardcoded colour or a one-off style — because the whole page is one
> continuous monochrome letter and any stray colour breaks it.
>
> Decorative marks are the hand-drawn SVGs in `src/components/Stickers.tsx`,
> drawn in `currentColor`; add new doodles there rather than importing an icon
> library, so the whole site keeps one hand-drawn vocabulary.
<!-- SUBU:END -->
