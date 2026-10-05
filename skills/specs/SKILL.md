---
name: specs
description: Creates and validates software specifications from repository evidence and requested behavior. Use when defining scope, affected contracts, expected behavior, edge cases, errors, required tests, acceptance criteria, or implementation-ready behavior before development.
license: MIT
compatibility: Works with software repositories across languages and delivery styles; evidence quality depends on access to the target project's actual code, contracts, documentation, and tests.
metadata:
  author: Turpial AI Academy
  version: "0.5.1"
---

# specs

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Turn stable project context and the next requested behavioral change into a clear, testable software specification that can be decomposed and implemented without material ambiguity.

This capability defines behavior before implementation. It does not replace requirements discovery, task decomposition, coding, testing, or project orchestration.


## Fast path and reference loading

Use the **bounded-amendment fast path** when an existing healthy specification already governs the change, the requested behavior is clear, affected surfaces are narrow, and there is no material ambiguity or high-risk contract/security/state/migration/concurrency concern.

Fast path:

1. read the existing specification and the motivating request/evidence;
2. inspect only the implementation/contracts/tests materially affected by that behavior;
3. amend the smallest existing sections and acceptance criteria needed;
4. verify the changed criteria, numbering/traceability, and any invariant the amendment can affect;
5. preserve the existing ID, structure, terminology, and verification evidence that remains applicable.

Do not reload every detailed reference or template merely because a new delegated turn started.

Use the **deep path** and load the relevant detailed references when creating a new/full specification or when there is material ambiguity, contradictory evidence, a public/cross-module/persisted contract change, migration/compatibility work, authentication/security/privacy risk, external integration/protocol change, concurrency/distributed-state behavior, architecture/multi-module impact, complex failure behavior, unfamiliar repository conventions, or an explicit audit request.

Reference policy:

- `SPECIFICATION_STANDARD.md` / `DISCOVERY_MODEL.md`: deep path, contradiction, or specification-model uncertainty;
- `SPEC_TEMPLATE.md`: new specification or existing structure that is insufficient;
- `ACCEPTANCE_CRITERIA_GUIDE.md`: when criteria need creation/restructuring or testability is unclear;
- `VALIDATION_CHECKLIST.md`: full readiness review, material uncertainty, or deep-path validation.

The detailed references remain authoritative when triggered; the fast path is not permission to skip material behavior or acceptance evidence.
## Non-negotiable rules

- Discover the target project's actual state before writing or revising a specification.
- Preserve healthy existing specification IDs, paths, terminology, templates, and contract naming.
- Treat code, schemas, persisted formats, tests, runtime behavior, and current documentation as evidence; record contradictions instead of silently choosing a convenient version.
- Do not invent missing product behavior. Separate verified facts, reasonable inferences, assumptions, and open questions.
- If an unanswered question can materially change scope, contracts, behavior, tests, or acceptance criteria, do not declare the specification ready.
- Define observable behavior, not implementation detail, unless implementation constraints are themselves part of the requirement.
- Every acceptance criterion must be objectively verifiable and traceable to at least one required test or other explicit verification method.
- Include relevant negative behavior: edge cases, invalid inputs, failure modes, permission boundaries, state transitions, compatibility, and rollback/migration behavior when applicable.
- Use the smallest sufficient specification. Do not turn low-risk changes into ceremony, and do not compress high-risk contract changes into vague notes.
- Do not modify production/runtime code as part of this capability unless the user separately authorizes implementation work.
- Do not report skipped validation or unresolved material ambiguity as a ready specification.

## Discover

On the deep path, read [SPECIFICATION_STANDARD.md](references/SPECIFICATION_STANDARD.md) and use [DISCOVERY_MODEL.md](references/DISCOVERY_MODEL.md). On the bounded-amendment fast path, start from the existing specification and inspect only the evidence relevant to the requested behavior.

Inspect the evidence relevant to the requested behavior, including when applicable:

- the request, requirement, issue, story, bug report, or design decision that motivates the change;
- existing specs, ADRs, product docs, README/AGENTS instructions, and repository conventions;
- public APIs, commands, tools, events, schemas, configuration, environment variables, persistence formats, and user-visible behavior;
- implementation paths that currently own the behavior;
- tests that document current expectations or regressions;
- security, compatibility, migration, performance, observability, and operational constraints that materially affect the change.

Build a compact evidence model:

~~~text
requested outcome
  -> current behavior
  -> affected contracts/state
  -> constraints/invariants
  -> edge/error behavior
  -> verification surface
  -> unresolved questions
~~~

If documentation and implementation disagree, record the contradiction and determine which behavior is authoritative before specifying a change.

## Decide

Choose the smallest specification depth that makes the change safe to implement.

Use a lightweight specification for a small, low-risk, local change when objective, scope, required tests, and acceptance criteria are sufficient.

Use a full specification when the change materially affects one or more of:

- public or cross-module contracts;
- persistence, schemas, migrations, or compatibility;
- authentication, authorization, privacy, or security boundaries;
- external integrations, providers, tools, or protocols;
- concurrency, ordering, retries, idempotency, or distributed state;
- architecture or multiple modules/components;
- complex failure behavior or operational risk.

Do not choose depth from file count alone. Choose it from behavioral ambiguity and change risk.

## Implement

For a new/full specification, or when the existing structure is insufficient, use [SPEC_TEMPLATE.md](assets/SPEC_TEMPLATE.md). For a bounded amendment to a healthy existing specification, preserve its structure and edit only the necessary sections. Keep only meaningful content, but never omit information required to make the behavior verifiable.

Resolve the output location in this order:

1. use the target repository's healthy existing specification convention;
2. otherwise use an explicit path supplied by the caller/orchestrator;
3. otherwise use `docs/specs/<SPEC-ID>-<slug>/<SPEC-ID>.md`.

Preserve an existing ID scheme. If no specification ID convention exists and an ID is required, scan existing specs and use the next collision-free `SPEC-001`, `SPEC-002`, and so on.

A full specification should make these surfaces explicit:

1. **Context** — the observed problem, need, or behavior gap and supporting evidence.
2. **Objective** — one concrete outcome the change must achieve.
3. **Scope** — included and explicitly excluded work.
4. **Affected contracts** — externally visible or persisted surfaces that may change or must remain stable.
5. **Expected behavior** — main flow, state transitions, edge cases, and expected errors.
6. **Required tests** — tests or other verification mapped to acceptance criteria.
7. **Acceptance criteria** — objective closure conditions.
8. **Assumptions and open questions** — only when uncertainty remains, with material blockers clearly identified.

Use [ACCEPTANCE_CRITERIA_GUIDE.md](references/ACCEPTANCE_CRITERIA_GUIDE.md) when criteria need creation/restructuring or their verification mapping is unclear; do not reload it for a local amendment whose existing criterion pattern is already sufficient.

## Validate

Use [VALIDATION_CHECKLIST.md](references/VALIDATION_CHECKLIST.md) for a full/deep readiness review or when material uncertainty remains. On the bounded-amendment fast path, validate the affected acceptance criteria and any invariant the amendment can change, while preserving still-valid evidence for unaffected criteria.

A specification is ready only when:

- the requested outcome and scope are unambiguous;
- affected contracts and invariants are explicit enough to preserve or change deliberately;
- main, edge, and error behavior are defined to the depth relevant to the change;
- each acceptance criterion is observable and has a verification path;
- required tests cover the criteria and material risks;
- assumptions are labeled;
- no unresolved question can materially alter implementation or acceptance;
- a task author can decompose the work without inventing missing product decisions.

If a material ambiguity remains, report the specification as needing input and list the exact blocking questions. Do not hide uncertainty behind generic wording.

## Report

Report:

1. specification ID/path;
2. evidence and conventions used;
3. chosen depth: lightweight or full, with the reason;
4. affected contracts and major invariants;
5. acceptance-criteria/test traceability;
6. assumptions and open questions;
7. validation result;
8. exact material blockers, if any.

Keep facts, inferences, assumptions, and recommendations distinguishable.

## Detailed references

- [Specification Standard](references/SPECIFICATION_STANDARD.md)
- [Discovery Model](references/DISCOVERY_MODEL.md)
- [Acceptance Criteria Guide](references/ACCEPTANCE_CRITERIA_GUIDE.md)
- [Validation Checklist](references/VALIDATION_CHECKLIST.md)
- [Specification Template](assets/SPEC_TEMPLATE.md)
