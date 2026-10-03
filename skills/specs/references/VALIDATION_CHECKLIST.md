# Specification Validation Checklist

Use this before reporting a specification as ready.

## 1. Evidence and intent

- [ ] The requested outcome is sourced from the actual request/approved project context.
- [ ] Current behavior and material contracts were inspected when they affect the change.
- [ ] Contradictory evidence is resolved or explicitly listed.
- [ ] Facts, inferences, assumptions, and open questions are distinguishable.

## 2. Scope

- [ ] Included work is explicit.
- [ ] Excluded work is explicit when likely to be confused with scope.
- [ ] The specification does not silently expand into unrelated refactors or process changes.
- [ ] Existing healthy project conventions are preserved.

## 3. Behavior

- [ ] Main behavior is observable and unambiguous.
- [ ] Relevant state transitions/persistence effects are defined.
- [ ] Relevant edge cases are defined.
- [ ] Relevant error/failure behavior is defined.
- [ ] Compatibility/migration/rollback behavior is defined when applicable.
- [ ] No internal implementation detail is prescribed without a real constraint.

## 4. Contracts

- [ ] Every materially affected public/persisted contract is named.
- [ ] Contracts that must remain stable are called out when that prevents accidental breakage.
- [ ] Naming and terminology match the target project.

## 5. Verification

- [ ] Acceptance criteria are objectively verifiable.
- [ ] Acceptance criteria have stable labels when traceability benefits from them.
- [ ] Every criterion maps to at least one required test or other verification method.
- [ ] Required tests cover material negative/regression behavior.
- [ ] No skipped or unavailable validation is represented as passed.

## 6. Decomposition gate

- [ ] An implementer can identify the expected behavior without making a new product decision.
- [ ] A task author can decompose implementation and verification work without guessing scope.
- [ ] No unresolved question can materially change scope, contracts, behavior, tests, or acceptance.

If any decomposition-gate item is false, report the specification as needing input and list the exact blocker. Do not declare it ready.
