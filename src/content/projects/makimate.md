---
title: "MakiMate: Open-Source Conversational Robot"
summary: An open-source, modular ROS 2 conversational robot built by student design teams, with a fully local speech-to-LLM-to-speech streaming loop.
cardSummary: Modular ROS 2 packages with a streaming Vosk + Ollama + Piper TTS loop and face tracking, built with 15 students across 3 senior-design teams.
order: 2
role: Technical Lead and Mentor
year: 2025 – 2026
stack: [ROS 2, Python, Vosk, Ollama, Piper TTS, Docker, GHCR]
badge: 1st Place & Public Vote, 2026 Graduate Students Showcase
github:
  - label: MakiMate
    href: https://github.com/Intelligent-Robotics-Lab/MakiMate
---

## Overview & Challenge

MakiMate turns the Maki social robot into an open-source conversational companion. The goal was a robot that listens, thinks, and speaks entirely on local hardware, and that is organized so successive student teams can extend it instead of rewriting it.

As **Technical Lead and Mentor**, I set the architecture and guided **15 students across 3 senior-design teams**.

## System Architecture

- **Modular ROS 2 packages.** Speech, dialogue, speech synthesis, and perception are separate packages with clear interfaces, so each team owns a slice of the system.
- **Streaming conversational loop.** **Vosk** handles speech recognition, **Ollama** serves the local language model, and **Piper TTS** speaks the response. All three stream, so the robot can start responding before a full turn has been processed.
- **Face tracking.** The robot orients toward the person it is talking to.
- **Containerized development.** Docker images published to GHCR let the team develop from Linux, macOS, or Windows.

## Evaluation & Results

- **1st Place & Public Vote, 2026 Graduate Students Showcase.**
- 15 students across 3 senior-design teams delivered parts of the system against a shared architecture.

## Key Takeaways

- Clear package boundaries are what make a multi-team robotics project manageable.
- A fully local speech → LLM → speech stack is now practical on modest hardware, and streaming every stage is what keeps it feeling conversational.
