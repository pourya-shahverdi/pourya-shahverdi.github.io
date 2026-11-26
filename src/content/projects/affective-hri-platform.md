---
title: Affective HRI & Real-Time Perception Stack
summary: A 66-participant affective study on a Furhat robot, backed by a 10-service real-time perception platform, a high-volume study data platform, and on-prem LLM serving.
cardSummary: 66-participant Furhat BST study (IEEE TAFFC, under review) on a 10-service Docker/WebRTC perception stack with ~18 ms emotion inference, a 4.19M-event FastAPI/SQLite data platform, and on-prem Llama 3.3 70B.
order: 1
role: Lead Researcher & Systems Engineer
year: 2024 – 2026
stack: [Python, Docker Compose, WebRTC, FastAPI, SQLAlchemy, SQLite, HTML/JS, Whisper, NVIDIA Riva, Llama 3.3 70B, Furhat]
venues: [IEEE TAFFC · Under Review]
demo: https://youtu.be/q1uA3j5aALE
github:
  - label: Perception Platform
    href: https://github.com/Intelligent-Robotics-Lab/hri_perception_platform
  - label: BST Data Platform
    href: https://github.com/Intelligent-Robotics-Lab/bst-data-collection-platform
---

## Overview & Challenge

Behavioral skills training (BST) is how caregivers and practitioners learn to deliver interventions: instruction, modeling, rehearsal, and feedback. When a social robot runs that training, it needs to know more than whether a trainee got the step right. It needs to know how the trainee *feels* while practicing.

This project studies human emotion during robot-mediated BST with a **Furhat** robot. The study included **66 participants**, **396 rehearsals**, and **1,188 affect self-reports**. The manuscript is currently **under review at IEEE Transactions on Affective Computing (TAFFC)**.

Running a study like that live, with real people, needs infrastructure that most HRI labs don't have. Perception has to keep up with the conversation, every signal must be logged without loss, and the language model has to run on hardware the lab controls.

## System Architecture

**Real-time perception platform.** Ten Dockerized services handle facial emotion, valence–arousal, speech recognition (Whisper, NVIDIA Riva), and gesture. An orchestrator coordinates them, and WebRTC carries media from the edge client. Emotion inference runs at **~18 ms**.

**Study data platform.** A local-first study app built with **FastAPI, SQLAlchemy, SQLite, and HTML/JS**. It provides an experimenter console, participant-tablet self-reports, raw A/V capture, and perception-signal ingest, and it is designed for zero data loss and immutable raw data. It has logged **4.19M perception events**.

**On-prem LLM serving.** **Llama 3.3 70B** is served on-prem on **3× RTX 6000 Ada GPUs**, so language-model inference runs on lab-controlled hardware.

## Evaluation & Results

- **66 participants · 396 rehearsals · 1,188 affect reports** collected through the platform.
- **4.19M perception events** logged end to end.
- **~18 ms** emotion inference in the live perception loop.
- **Database fix:** switching SQLite to WAL mode and adding targeted indexing cut the summary poll from **~820 ms to ~72 ms**.

## Key Takeaways

- Affect-aware HRI is a systems problem as much as a modeling problem. Latency, logging, and data integrity decide whether a study can run at all.
- Simple, well-indexed local storage scales further than expected when its write and read paths are tuned on purpose.
- On-prem serving of a 70B-parameter model keeps the conversational stack under the lab’s control during live studies.
