# Pourya Shahverdi

**Robotics & AI/ML Engineer · Ph.D. Candidate in ECE, Oakland University (defending Nov 2026) · Lead Researcher, In Real-Life Intelligent Robotics Lab (IRL2)**

I build social robots that perceive and respond to human affect: real-time multimodal perception (face, voice, gesture), conversational and turn-taking behavior, and the study infrastructure to test it all with real people. My work sits where human-robot interaction, affective computing, and robot learning meet.

> **Open to research scientist and robotics engineer roles** in HRI, affective computing, and multimodal perception, starting late 2026.<br>
> [CV (PDF)](https://pourya-shahverdi.github.io/uploads/PouryaShahverdiAug2026CV.pdf) · [pourya.shahverdi@gmail.com](mailto:pourya.shahverdi@gmail.com)

[Website](https://pourya-shahverdi.github.io) · [Google Scholar](https://scholar.google.com/citations?user=lhc1WDQAAAAJ) · [LinkedIn](https://www.linkedin.com/in/pourya-shahverdi/) · [YouTube](https://www.youtube.com/PouryaShahverdi) · [ORCID](https://orcid.org/0000-0002-6634-2463) · [X](https://x.com/PouryaShahverdi)

## Highlights

- **5 first-author papers** at ICRA, IROS (×2), and RO-MAN (×2), plus 5 co-authored papers, including *Computers & Education*
- **Real-time multimodal perception platform**: 10 Dockerized services for facial emotion, valence–arousal, speech recognition (Whisper, NVIDIA Riva), and gesture, with WebRTC media transport
- **66-participant user study** of trainee affect during robot-mediated behavioral skills training
- **135 autonomous robot-mediated BST trials** run end to end
- **On-prem LLM serving**: Llama 3.3 70B deployed across multiple GPUs

## Featured projects

| Project | What it does | Stack |
|---|---|---|
| [**HRI Perception Platform**](https://github.com/Intelligent-Robotics-Lab/hri_perception_platform) | Microservice perception stack for live human-robot interaction. An orchestrator coordinates facial emotion (HSEmotion, EmotiEffLib), valence–arousal, speech recognition, and gesture services, with WebRTC media transport, an edge client, and a documented latency budget. | Python · Docker Compose · WebRTC · Whisper · NVIDIA Riva |
| [**BST Data Collection Platform**](https://github.com/Intelligent-Robotics-Lab/bst-data-collection-platform) | Local-first app that runs a complete robot-mediated BST/DTT study session: experimenter console, participant-tablet self-reports, raw A/V capture, and perception-signal ingest. Designed for zero data loss and immutable raw data. | FastAPI · SQLAlchemy · SQLite · React |
| [**MakiMate**](https://github.com/Intelligent-Robotics-Lab/MakiMate) | ROS 2 Jazzy codebase for the Maki social robot. Dockerized, multi-arch (ARM64 / x86) images on GHCR, so the team can develop from Linux, macOS, or Windows. | ROS 2 · Docker · GHCR |
| [**NAO Few-Shot Learning from Demonstration**](https://github.com/pourya-shahverdi/ManipulationFewShotLfD) | A NAO humanoid learns pick-and-place and pushing from a few Kinect-captured human demonstrations, in CoppeliaSim and on the real robot. | Python · PyTorch · CoppeliaSim · Kinect |
| [**NAO Whole-Body Imitation**](https://github.com/pourya-shahverdi/Imitation_NAO) | Real-time imitation of human whole-body motion with balance control (CoM and support polygon), built on a [full-body kinematics model](https://github.com/pourya-shahverdi/HumanoidSim_Mathematica). | Python · ROS · Mathematica |
| [**HRI Stats Tutorial**](https://github.com/pourya-shahverdi/hri-stats-tutorial) | A Quarto book that teaches mixed-effects and ordinal models for HRI user studies in R, with a real study as the running example. | R · Quarto |

## Robots in action

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.youtube.com/watch?v=M8Xl5e82oYw"><img src="https://i.ytimg.com/vi/M8Xl5e82oYw/mqdefault.jpg" alt="Robot backchanneling and interactive storytelling demo" width="100%"></a>
      <br><sub>Emotional backchanneling and interactive storytelling (IROS '23, ICRA '24)</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://www.youtube.com/watch?v=MuxEg3ArODg"><img src="https://i.ytimg.com/vi/MuxEg3ArODg/mqdefault.jpg" alt="Robot-led physical therapy for older adults" width="100%"></a>
      <br><sub>Robot-led physical therapy for older adults</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.youtube.com/watch?v=c37KEdAKoII"><img src="https://i.ytimg.com/vi/c37KEdAKoII/mqdefault.jpg" alt="Robot-mediated group instruction for children with autism" width="100%"></a>
      <br><sub>Robot-mediated group instruction for children with autism (pilot)</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://www.youtube.com/watch?v=0c-mpC6NMfY"><img src="https://i.ytimg.com/vi/0c-mpC6NMfY/mqdefault.jpg" alt="NAO humanoid imitating human whole-body motion" width="100%"></a>
      <br><sub>Real-time whole-body imitation on a NAO humanoid</sub>
    </td>
  </tr>
</table>

## Selected publications (first author)

- **Co-Design of a Robot-Mediated Training Program for Informal Caregivers to Learn to Deliver Interventions to Children with Autism**. RO-MAN 2026
- **Exploring the Impact of Narrator Type on Response Latency and Utterance Length During Interactive Storytelling**. ICRA 2024 · [DOI](https://doi.org/10.1109/ICRA57147.2024.10610817)
- **Emotionally Specific Backchanneling in Social Human-Robot Interaction and Human-Human Interaction**. IROS 2023 · [DOI](https://doi.org/10.1109/IROS55552.2023.10341823) · [Video](https://www.youtube.com/watch?v=M8Xl5e82oYw)
- **Robot-mediated Job Interview Training for Individuals with ASD: A Pilot Study**. RO-MAN 2023 · [DOI](https://doi.org/10.1109/RO-MAN57019.2023.10309611)
- **Learning Turn-Taking Behavior from Human Demonstrations for Social Human-Robot Interactions**. IROS 2022 · [DOI](https://doi.org/10.1109/IROS47612.2022.9981243)

[All publications →](https://pourya-shahverdi.github.io/publication/)

## Toolbox

- **Robotics:** ROS / ROS 2, NAO, Maki, CoppeliaSim, humanoid kinematics and balance control
- **ML & perception:** PyTorch, facial emotion and valence–arousal recognition, ASR (Whisper, NVIDIA Riva), LLM serving
- **Engineering:** Python, C++, Docker / Compose, FastAPI, WebRTC, SQLite
- **Research methods:** user-study design, mixed-effects and ordinal models in R, Quarto

## Before the Ph.D.

- **Controls and humanoid robotics research**: NAO balance control and whole-body imitation, PID controller tuning, and dynamic identification of a parallel mechanism (RAS 2018)
- **R&D Lead, FIRA** (2018–2020)
- **M.Sc. Mechatronics Engineering**, University of Tehran / Azad University of Qazvin · **B.Sc. Robotics Engineering**, Hamedan University of Technology
