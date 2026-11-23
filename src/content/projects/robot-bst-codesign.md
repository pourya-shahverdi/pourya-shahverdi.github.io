---
title: Autonomous Two-Robot Trainer & Failure Analysis
summary: A robot-mediated behavioral skills training program co-designed with behavior analysts, deployed autonomously on two robots, with failures traced to their source.
cardSummary: Co-designed with behavior analysts (Furhat + NAO). 135 autonomous trials across 5 skills, separating trainee mistakes from ASR, vision, and LLM errors. All participants reached 80% mastery.
order: 3
role: Lead Researcher (first author)
year: "2026"
stack: [Furhat, NAO, Python, ASR, Computer Vision, LLMs]
venues: [IEEE RO-MAN 2026]
---

## Overview & Challenge

Informal caregivers of children with autism benefit from learning to deliver evidence-based interventions themselves, but access to expert behavior analysts is limited. This project asks whether a pair of robots can deliver that training autonomously.

The program was **co-designed with behavior analysts**. In it, a **Furhat** robot and a **NAO** robot work together to train caregivers on intervention skills.

## System Architecture

- **Two-robot setup.** Furhat and NAO take complementary roles in the training interaction.
- **Autonomous pipeline.** Speech recognition, vision, and an LLM-driven dialogue layer run the session without a human operator.
- **Failure attribution.** Every trial is analyzed so that **trainee mistakes are separated from system errors**: ASR mishearings, vision failures, and LLM errors. That way, scoring reflects what the trainee actually did.

## Evaluation & Results

- **135 autonomous trials** across **5 skills** in a live deployment.
- **All participants reached 80% mastery.**
- Published at **IEEE RO-MAN 2026**.

## Key Takeaways

- Co-designing with domain experts made the training protocol clinically meaningful from the start.
- In a deployed system you have to separate user errors from perception and language-model errors. Without that step, the evaluation is measuring the robot rather than the learner.
