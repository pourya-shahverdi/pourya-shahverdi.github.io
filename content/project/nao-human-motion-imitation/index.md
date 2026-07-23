---
title: NAO Human Motion Imitation
summary: An ankle-based balance strategy for whole-body human-motion imitation by a NAO humanoid robot.
date: 2017-01-01
project_type: Humanoid Robotics
publication_url: https://ieeexplore.ieee.org/abstract/document/8466225
video_url: https://youtu.be/0c-mpC6NMfY
code_url: https://github.com/pourya-shahverdi/Imitation_NAO
simulation_url: https://github.com/pourya-shahverdi/HumanoidSim_Mathematica
tags:
  - Humanoid Robotics
  - Motion Imitation
  - Balance Control
---

## Overview

This project developed an ankle-based balance strategy that enables a NAO humanoid robot to imitate human motion while preserving stability. The work connects whole-body imitation with balance control so that a humanoid can reproduce a demonstrator's movement without losing its support constraints.

## Technical Approach

The controller uses an inverted-pendulum model based on the robot's computed center of mass, calculates support polygons for double- and single-support phases, and treats the ground projection of the center of mass as a balance criterion. Ankle-joint corrections are produced with a PID controller whose initial coefficients were estimated with the Ziegler-Nichols method and then tuned for imitation behavior.

## Contribution

Simulation and practical tests on a NAO H-25 V4 showed that the approach improves balance during soft-real-time whole-body and quasi-static imitation. The project demonstrates a control-oriented route to more stable, expressive humanoid imitation for human-robot interaction research.

## Project Links

- [Read the ICRoM publication](https://ieeexplore.ieee.org/abstract/document/8466225)
- [Watch the project video](https://youtu.be/0c-mpC6NMfY)
- [View the imitation code](https://github.com/pourya-shahverdi/Imitation_NAO)
- [View the Mathematica simulation](https://github.com/pourya-shahverdi/HumanoidSim_Mathematica)