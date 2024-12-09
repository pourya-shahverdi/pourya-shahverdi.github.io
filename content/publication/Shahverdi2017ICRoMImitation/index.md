---
title: Balance Strategy for Human Imitation by a NAO Humanoid Robot
authors:
- Pourya Shahverdi
- Mohammad Javad Ansari
- Mehdi Tale Masouleh
date: '2017-01-01'
publishDate: '2024-12-02T01:59:54.057106Z'
publication_types:
- paper-conference
publication: '*2017 5th RSI International Conference on Robotics and Mechatronics
  (ICRoM)*'
doi: 10.1109/ICRoM.2017.8466225
tags:
- Humanoid robots; Motion Imitation; Humanoid Dynamic; Balance Control


abstract: ''

featured: true

links:
- name:
url: ''
url_pdf: 'https://ieeexplore.ieee.org/abstract/document/8466225'
url_code: 'https://github.com/pourya-shahverdi/Imitation_NAO'
url_dataset: ''
url_poster: ''
url_project: 'https://github.com/pourya-shahverdi/HumanoidSim_Mathematica'
url_slides: ''
url_source: ''
url_video: 'https://youtu.be/0c-mpC6NMfY'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Whole-body Human Imitation by NAO'
  focal_point: ""
  preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- humanoid-imitation

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example




---
{{< youtube 0c-mpC6NMfY >}}

**Abstract:**  
This paper presents an ankle-based balance strategy for a NAO humanoid robot while imitating the human motions. In this approach, first, an inverted pendulum model based on the computed Center of Mass (CoM) is introduced and then, the support polygon is computed for each double support and single support phases. Center of the support polygon is assumed as the reference for balance controller and Ground projection of the Center of Mass (GCoM) is considered as the balance criteria. Using ankle joints correction, GCoM is restricted to the center of the support polygon. In order to control the balance criteria a Proportional-Integral-Derivative (PID) controller is used. The coefficients are first estimated using Ziegler-Nichols method; then, they were tuned by considering advantages of the imitation process. Implementation of the proposed approach leads to a better result in preserving the balance of the robot in soft realtime imitation of human whole-body and quasi-static motions. The proposed approach is validated by performing simulation and practical tests on a NAO H-25 version 4 robot.
