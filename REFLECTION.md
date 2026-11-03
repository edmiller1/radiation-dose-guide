# Reflection

## Trade-offs

- Static front end only, with no backend or database. The dataset is small and fixed so no backend/server component is necessary.
- No navigation was used, the dataset is small and fixed and filtering/searching allows for quick data access.

## How I used AI tooling

- Used Claude Code to read the assessment brief and dataset PDFs and break the brief down into deliverables and a time-boxed plan.
- Used Claude Code to scaffold the Vite + React + TS project, transcribe the dataset into a typed module and create the initial README/REFLECTION stubs.
- Used Claude Code to discuss a "Dose Level" system so users can view the procedures without knowledge of mSv. Claude suggested the level comparison values and I made tweaks to those values and the colours used.

## Assumptions

- The audience is a general patient, not a clinician, so plain language was the main priority for content in the application.
- _TODO_

## What worked well

- The reference PDF was very clear and easy to understand, converting the procedure tables to a typed dataset was the initial step which allowed for the application to have it's concrete feature implemented immediately.

## What I would improve next

- Adding charts would be fun and visual way of showing the mSv values for each procedure, I think it could aid in users being able to instantly see and understand the dose levels just from viewing the chart.
- Using URL Search Params for filtering and searching. This would allow for state to persist across page refreshes, allow for easy to access bookmarks for particular state and also allow for sharing state to other users. It was left out as the dataset is small and fixed, but using this state mangement technique could definitely improve the user experience.
- Add a more sophistcated search technique, currently search only checks the procedure names with what the user has typed. Matching words by their start rather than anywhere inside them would be a good addition as it stops `an` matching `Cancer`.
- Add a keywords list to the procedure for common words like `bone density`, `cat scan`. These would map to particular procedures so users don't have to know the clinical name or what the clincial name means to search for it.
- Adding an information icon that opens a popup and shows an explainer of the procedure for each procedure would be another great visual feature that gives non-technical user more information regarding the procedure and any visual references as well.
