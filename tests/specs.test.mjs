import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const ROOT = path.resolve(import.meta.dirname, "..");

const skillRoot = path.join(ROOT, "skills", "specs");

test("skill discovers before writing and preserves project conventions", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const discover = skill.indexOf("## Discover");
  const decide = skill.indexOf("## Decide");
  const implement = skill.indexOf("## Implement");
  const validate = skill.indexOf("## Validate");
  const report = skill.indexOf("## Report");
  assert.ok(discover >= 0 && decide > discover && implement > decide && validate > implement && report > validate);
  assert.match(skill, /Preserve healthy existing specification IDs, paths, terminology, templates, and contract naming/i);
});

test("bounded amendments use a fast path and detailed references are trigger-loaded", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(skill, /## Fast path and reference loading/);
  assert.match(skill, /bounded-amendment fast path/i);
  assert.match(skill, /Do not reload every detailed reference or template merely because a new delegated turn started/i);
  assert.match(skill, /Use the \*\*deep path\*\*.*creating a new\/full specification/is);
  assert.match(skill, /SPEC_TEMPLATE\.md.*new specification or existing structure that is insufficient/is);
  assert.match(skill, /preserving still-valid evidence for unaffected criteria/i);
});

test("specification standard is evidence-first and distinguishes lightweight from full depth", async () => {
  const standard = await readFile(path.join(skillRoot, "references", "SPECIFICATION_STANDARD.md"), "utf8");
  assert.match(standard, /EVIDENCE -> BEHAVIOR -> VERIFICATION -> DECOMPOSITION/);
  assert.match(standard, /### Lightweight/);
  assert.match(standard, /### Full/);
  assert.match(standard, /Specification depth is proportional to ambiguity and risk/i);
});

test("specification standard separates facts, inferences, assumptions and questions", async () => {
  const standard = await readFile(path.join(skillRoot, "references", "SPECIFICATION_STANDARD.md"), "utf8");
  for (const label of ["Fact", "Inference", "Assumption", "Open question"]) {
    assert.match(standard, new RegExp(`\\*\\*${label}\\*\\*`));
  }
  assert.match(standard, /A material open question blocks readiness/i);
});

test("discovery model handles contradictory sources without inventing certainty", async () => {
  const discovery = await readFile(path.join(skillRoot, "references", "DISCOVERY_MODEL.md"), "utf8");
  assert.match(discovery, /name the conflicting sources/i);
  assert.match(discovery, /intended behavior from implemented behavior/i);
  assert.match(discovery, /do not silently rewrite the specification/i);
  assert.match(discovery, /stop at the blocker instead of manufacturing certainty/i);
});

test("spec template covers behavior, verification and material uncertainty", async () => {
  const template = await readFile(path.join(skillRoot, "assets", "SPEC_TEMPLATE.md"), "utf8");
  for (const heading of [
    "## Context",
    "## Objective",
    "## Scope",
    "## Affected contracts",
    "## Expected behavior",
    "## Required tests",
    "## Acceptance criteria",
    "## Assumptions and open questions",
  ]) {
    assert.ok(template.includes(heading), `missing heading: ${heading}`);
  }
  assert.match(template, /Material blockers/);
});

test("acceptance criteria require observable outcomes and verification traceability", async () => {
  const guide = await readFile(path.join(skillRoot, "references", "ACCEPTANCE_CRITERIA_GUIDE.md"), "utf8");
  assert.match(guide, /observable outcome/i);
  assert.match(guide, /Given\/When\/Then wording is optional\. Testability is mandatory/i);
  assert.match(guide, /map required verification to them/i);
  assert.match(guide, /every criterion requires an explicit verification method/i);
});

test("validation checklist enforces decomposition readiness", async () => {
  const checklist = await readFile(path.join(skillRoot, "references", "VALIDATION_CHECKLIST.md"), "utf8");
  assert.match(checklist, /An implementer can identify the expected behavior without making a new product decision/i);
  assert.match(checklist, /A task author can decompose implementation and verification work without guessing scope/i);
  assert.match(checklist, /No unresolved question can materially change scope, contracts, behavior, tests, or acceptance/i);
  assert.match(checklist, /Do not declare it ready/i);
});
