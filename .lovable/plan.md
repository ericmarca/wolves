Instalare UI/UX Pro Max Skill

Sursa: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Scop: Adăugarea unui skill de design intelligence în proiectul Lovable, care oferă ghidaje UI/UX, palete de culori, font pairings, reguli de accesibilitate și best practices pentru dezvoltarea interfețelor profesionale.

Pași de implementare:

1. **Creez structura skill-ului**
   - Director: `.agents/skills/ui-ux-pro-max/`
   - Subdirectoare: `references/`, `scripts/`, `assets/`

2. **Fetch și includ fișierele principale**
   - `SKILL.md` din `.claude/skills/ui-ux-pro-max/SKILL.md` (skill-ul principal cu 660+ linii de ghidaje)
   - `SKILL.md` din `.claude/skills/design/SKILL.md` (skill de design general)
   - `SKILL.md` din `.claude/skills/ui-styling/SKILL.md` (skill pentru stilizare cu shadcn/ui + Tailwind)
   - `SKILL.md` din `.claude/skills/design-system/SKILL.md` (skill pentru token architecture)

3. **Fetch și includ fișiere de date**
   Din `src/ui-ux-pro-max/data/`:
   - `colors.csv` — 178 palete de culori
   - `products.csv` — 161 tipuri de produse cu reasoning rules
   - `styles.csv` — 67 stiluri UI
   - `typography.csv` — 57 font pairings
   - `ux-guidelines.csv` — 99 ghidaje UX
   - `charts.csv` — 25 tipuri de chart-uri
   - `landing.csv` — structuri de landing page
   - `icons.csv` — seturi de iconițe
   - `google-fonts.csv` — fonturi Google
   - `stacks/` — ghidaje specifice pe stack (React, Vue, etc.)

4. **Fetch și includ scripturi Python**
   Din `src/ui-ux-pro-max/scripts/`:
   - `search.py` — motor de căutare fuzzy în baza de date de design
   - `design_system.py` — generator de design system
   - `core.py` — funcții utilitare

5. **Adaptez SKILL.md principal pentru format Lovable**
   - Adaug YAML frontmatter cu `name` și `description`
   - Adaptez căile la noua structură (`.agents/skills/ui-ux-pro-max/`)
   - Păstrez toate ghidajele, regulile și checklists din original
   - Adaug o secțiune "Usage in Lovable" cu instrucțiuni specifice

6. **Aplic skill-ul**
   - Apel `skills--apply_draft` pe directorul `.agents/skills/ui-ux-pro-max/`
   - Verific că skill-ul a fost activat corect

7. **Test final**
   - Verific structura fișierelor
   - Confirmăm că skill-ul e disponibil în context

Note: Skill-ul original folosește scripturi Python pentru a interoga fișiere CSV. În Lovable, agentul poate folosi direct ghidajele din SKILL.md pentru decizii de design, iar scripturile Python sunt disponibile ca instrumente opționale dacă utilizatorul dorește să ruleze căutări avansate în baza de date.