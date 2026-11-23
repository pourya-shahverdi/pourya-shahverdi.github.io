---
title: "Conversational Dynamics: Backchanneling & Turn-Taking"
summary: How people backchannel emotionally to robots during storytelling, and how robots can learn when to take the floor from human demonstrations.
cardSummary: 28-participant storytelling study (2.4× emotional backchannels with a robot; IROS 2023, ICRA 2024*) plus LSTM multimodal turn-taking learned from 150 speaking turns (IROS 2022).
order: 4
role: Lead Researcher (first- and co-first-author)
year: 2022 – 2024
stack: [Python, LSTM, Multimodal Perception, Social Robots]
venues: ["IEEE/RSJ IROS 2023", "IEEE ICRA 2024*", "IEEE/RSJ IROS 2022"]
paper:
  label: IROS 2023
  href: https://doi.org/10.1109/IROS55552.2023.10341823
demo: https://www.youtube.com/watch?v=M8Xl5e82oYw
---

## Overview & Challenge

Natural conversation relies on small signals: nods, "mm-hmm"s, emotional reactions, and knowing when it is your turn to talk. Social robots that miss these cues feel mechanical. This line of work measures these behaviors in human–robot conversation and builds models that reproduce them.

## System Architecture

**Emotionally specific backchanneling.** In an interactive storytelling setup, people listened to stories told by a robot or by a human narrator. Their backchannels were analyzed for emotion-specific responses in human–robot and human–human interaction.

**Turn-taking from demonstration.** An **LSTM** model takes multimodal cues and predicts turn-taking behavior. It was trained on **150 speaking turns** of human demonstrations.

## Evaluation & Results

- **28-participant storytelling study.** Participants produced **2.4× more emotional backchannels** with the robot. *IEEE/RSJ IROS 2023.*
- **Narrator type, response latency, and utterance length.** Companion analysis at *IEEE ICRA 2024* (I. Bakhoda\*, P. Shahverdi\*; \* equal contribution).
- **Multimodal turn-taking.** LSTM model learned from 150 speaking turns. *IEEE/RSJ IROS 2022.*

## Key Takeaways

- People do respond emotionally to robots in conversation. Backchanneling is a signal a robot can both read and produce.
- Turn-taking can be learned from modest amounts of human demonstration when the model combines several modalities.
