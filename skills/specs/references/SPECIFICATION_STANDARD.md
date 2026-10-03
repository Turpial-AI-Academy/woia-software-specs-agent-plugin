# Specification Standard

## Principle

~~~text
EVIDENCE -> BEHAVIOR -> VERIFICATION -> DECOMPOSITION
~~~

A useful software specification reduces implementation ambiguity without pretending to know facts the project has not established.

The specification is a behavioral contract for the change. It should say what outcome is required, which boundaries matter, what must happen in normal and exceptional cases, how the outcome will be verified, and what remains unknown.

## Source discipline

Prefer actual project evidence over generic assumptions.

Use, as applicable:

- current runtime behavior and implementation ownership;
- public interfaces and schemas;
- persisted formats and migrations;
- tests and regression history;
- approved requirements, product decisions, ADRs, and repository instructions;
- operational/security/compatibility constraints.

Documentation can express intent while code and tests express implemented reality. When they conflict, record the contradiction and resolve it before relying on either as the new specification.

## Lightweight versus full

### Lightweight

Use when the change is local, low-risk, and behaviorally simple.

Minimum useful content:

- objective;
- scope;
- required tests or verification;
- acceptance criteria.

Add affected contracts or expected behavior whenever omission would force an implementer to guess.

### Full

Use when behavior crosses contracts, persistence, security boundaries, integrations, architecture, multiple modules, compatibility/migration, concurrency, complex errors, or other material risk.

A full specification covers:

- context;
- objective;
- scope;
- affected contracts;
- expected behavior;
- required tests;
- acceptance criteria;
- assumptions/open questions when present.

Specification depth is proportional to ambiguity and risk, not document length.

## Behavioral completeness

Define only behavior relevant to the change, but define it concretely.

Consider:

- trigger/input/preconditions;
- main observable result;
- state transitions and persistence;
- repeated calls, retries, ordering, idempotency, or concurrency when relevant;
- invalid, empty, missing, duplicate, stale, unauthorized, unavailable, and partial-failure cases when relevant;
- compatibility with existing callers/data;
- rollback or migration constraints when the change can strand state;
- user-visible messages/statuses when those are part of the contract.

Do not add hypothetical edge cases that the system cannot encounter.

## Affected contracts

List a contract only when the change may alter it or must deliberately preserve it.

Common contract surfaces:

- API/request/response payloads;
- CLI commands/flags/output/exit behavior;
- tool names and arguments;
- schemas, events, messages, and protocols;
- persisted files, database shapes, caches, checkpoints, or runtime artifacts;
- configuration keys and environment variables;
- authentication/authorization behavior;
- public SDK/library interfaces;
- documentation examples treated as user-facing contract.

State explicitly when a material contract remains unchanged if that fact prevents accidental breakage.

## Facts, inferences, assumptions, questions

Use these meanings consistently:

- **Fact** — directly supported by repository or approved source evidence.
- **Inference** — a conclusion reasonably derived from facts but not directly stated.
- **Assumption** — a temporary condition accepted for the specification.
- **Open question** — missing information requiring resolution.

An assumption may remain only when it does not hide a material product decision. A material open question blocks readiness when different answers would change scope, contracts, expected behavior, required tests, or acceptance.

## Implementation neutrality

Specify behavior rather than an internal solution by default.

Implementation constraints belong in the specification only when they are required by:

- an existing contract or architecture invariant;
- compatibility;
- security/compliance;
- operational constraints;
- an explicit product/technical decision.

Avoid prescribing classes, functions, frameworks, data structures, or algorithms merely because one implementation seems obvious.

## Decomposition readiness

The specification is ready for task decomposition when a task author can identify implementation and verification work without inventing product behavior.

Readiness requires:

- one understood outcome;
- explicit scope boundaries;
- explicit material contracts/invariants;
- behavior detailed enough for tests;
- acceptance criteria mapped to verification;
- no unresolved material question.

If decomposition still requires guessing what the product should do, the specification is not ready.
