---
title: Humanoid Control, Imitation & Few-Shot LfD
summary: A decade of humanoid motion work, from whole-body imitation and balance control on NAO to VR teleoperation of Pepper and few-shot learning from demonstration.
cardSummary: NAO whole-body imitation, geometric arm IK, and ankle-strategy PID balance (ICRoM ’16/’17); VR/Kinect Pepper teleoperation (Cureus ’23); co-advised few-shot humanoid manipulation (arXiv 2026, 78% pick-and-place from 16 demos).
order: 5
role: Researcher · Co-Advisor (Few-Shot LfD)
year: 2013 – 2026
stack: [Python, ROS, Mathematica, Kinect, VR, PyTorch, CoppeliaSim, NAO, Pepper]
venues: ["ICRoM 2016", "ICRoM 2017", "Cureus 2023", "arXiv 2026"]
github:
  - label: NAO Imitation
    href: https://github.com/pourya-shahverdi/Imitation_NAO
  - label: Few-Shot LfD
    href: https://github.com/pourya-shahverdi/ManipulationFewShotLfD
paper:
  label: arXiv 2026
  href: https://arxiv.org/abs/2610.26170
demo: https://youtu.be/0c-mpC6NMfY
---

## Overview & Challenge

Humanoid robots have to move like people to be useful around people, without falling over. This project spans my M.Sc. work on real-time imitation and balance through more recent work on teleoperation and learning from a handful of demonstrations.

## System Architecture

- **Whole-body imitation on NAO.** Human whole-body motion is retargeted to the NAO in real time.
- **Geometric arm IK.** A simple, fast closed-form kinematic solution maps human arm poses to the robot (*ICRoM 2016*).
- **Ankle-strategy PID balance control.** Keeps the robot stable while it imitates whole-body motion (*ICRoM 2017*).
- **VR/Kinect teleoperation of Pepper.** Used to deliver physical-activity and fall-prevention exercise to older adults (*Cureus 2023*).
- **Few-shot humanoid manipulation.** Feature-level perception and prompt-based object detection enable data-efficient learning from Kinect-captured demonstrations. I **co-advised** this work (*arXiv 2026*).

## Evaluation & Results

- Real-time whole-body imitation with balance on a physical NAO (*ICRoM ’16/’17*).
- Robot-delivered exercise sessions with older adults (*Cureus 2023*).
- **78% pick-and-place success from 16 demonstrations** (*arXiv 2026*).

## Key Takeaways

- Analytical kinematics and classical control remain strong foundations for humanoid behavior.
- Better perception features let a humanoid learn manipulation from very few demonstrations.
