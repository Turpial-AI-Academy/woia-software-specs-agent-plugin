# Acceptance Criteria Guide

## Purpose

Acceptance criteria define objective closure conditions. They are not a restatement of the objective and not a list of implementation tasks.

## Good criteria

Each criterion should identify an observable outcome that can be verified.

Prefer criteria that make clear:

- relevant precondition or input;
- action/event when needed;
- observable result;
- state or contract effect when relevant;
- error/failure result for material negative cases.

Given/When/Then wording is optional. Testability is mandatory.

## Avoid ambiguity

Replace subjective terms unless the project defines them:

- "fast" -> a measured latency/throughput condition when performance is actually a requirement;
- "secure" -> the concrete authorization, confidentiality, validation, or threat condition;
- "works correctly" -> the exact observable result;
- "user friendly" -> the specific interaction/accessibility/usability behavior.

Do not invent metrics merely to eliminate adjectives. If the required threshold is unknown and material, record an open question.

## Criterion granularity

Prefer one material outcome per criterion.

Split criteria when:

- success and failure behavior need independent verification;
- different contracts are affected;
- different preconditions lead to materially different results.

Do not split trivial wording into dozens of micro-criteria.

## Traceability to tests

Assign stable criterion labels such as `AC-1`, `AC-2`, and map required verification to them.

Example:

~~~markdown
## Required tests

- Unit: parser rejects malformed input (`AC-2`).
- Integration: valid request persists one record and returns the documented response (`AC-1`, `AC-3`).
- Regression: duplicate request does not create a second record (`AC-4`).

## Acceptance criteria

- `AC-1` A valid request returns the documented success payload.
- `AC-2` Malformed input is rejected with the documented error and no state change.
- `AC-3` Successful processing persists exactly one record.
- `AC-4` Repeating the same idempotency key does not create an additional record.
~~~

A criterion may map to more than one test. A test may cover more than one criterion. The mapping must still be understandable.

## Verification beyond automated tests

Not every criterion requires an automated test, but every criterion requires an explicit verification method.

Examples:

- schema/contract validation;
- deterministic command output;
- migration rehearsal;
- security review or threat-model check;
- accessibility audit;
- manual interaction check where automation is not justified.

Do not label an unavailable check as passed.
