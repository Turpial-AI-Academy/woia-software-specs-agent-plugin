# Discovery Model

## Goal

Collect the minimum evidence needed to specify the requested behavior without replacing repository truth with generic conventions.

## Evidence map

| Concern | Evidence examples |
|---|---|
| Requested outcome | user request, issue, story, requirement, bug report |
| Existing spec intent | specs, ADRs, product docs, repository instructions |
| Current behavior | runtime path, owning modules, tests, commands, user-visible behavior |
| Contracts | APIs, tools, schemas, events, CLI, config, environment, persistence |
| Constraints | security, compatibility, migration, performance, operations |
| Verification | current tests, fixtures, contract checks, reproducible commands |

Do not require every category. Read only what can materially affect the specification.

## Contradiction handling

When sources disagree:

1. name the conflicting sources;
2. distinguish intended behavior from implemented behavior;
3. determine whether the requested change is correcting implementation, revising intent, or both;
4. preserve the contradiction as an open question if authority is unclear;
5. do not silently rewrite the specification to match whichever source is easiest.

## Existing conventions

Discover before inventing:

- specification folder/path;
- identifier scheme;
- heading/template structure;
- status/traceability convention;
- terminology and public naming;
- requirement/test identifiers;
- repository-specific constraints.

Preserve healthy conventions. Do not migrate a project's specification system merely to match this plugin's examples.

## Stable versus unstable context

Treat context as stable enough for a specification when the relevant product decision and affected system boundaries are known.

Examples of unstable context:

- two incompatible product outcomes are still under consideration;
- the responsible contract owner is unknown and alternatives change the external interface;
- the persistence model required by the behavior has not been chosen and each option changes user-visible semantics;
- an unresolved security/permission decision changes who may perform the behavior.

When unstable context affects acceptance, stop at the blocker instead of manufacturing certainty.

## Minimal evidence note

The final report should identify the evidence actually used, not an exhaustive repository inventory.

Useful evidence notes answer:

- what established current behavior;
- what established the requested change;
- what established contract or constraint boundaries;
- what remains assumption or question.
