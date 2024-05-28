export default  [

  {
    "category": "faq",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is Microsoft Sentinel, and how does it work?",
    "correct_answer": "Microsoft Sentinel is a cloud-native security information and event management (SIEM) platform that uses built-in AI to help analyze large volumes of data across an enterprise—fast.",
      "incorrect_answers": [
        "Microsoft Sentinel is a PaaS service on Azure, and has nothing to do with security.",
        "Microsoft Sentinel allows you to build low-code/no-code security applications.",
        "Microsoft Sentinel is not a Microsoft Azure solution."
      ]
  },
  {
    "category": "faq",
    "type": "multiple",
    "difficulty": "hard",
    "question": "How much does Microsoft invest annually in cybersecurity?",
    "correct_answer": "1B USD",
      "incorrect_answers": [
        "100K USD",
        "10B USD",
        "100M USD"
      ]
  },
  {
    "category": "faq",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Which Azure resources are monitored by Microsoft Defender for Cloud?",
    "correct_answer": "Virtual machines (VMs), Virtual Machine Scale Sets and many Azure PaaS services listed in the product overview",
      "incorrect_answers": [
        "Virtual machines (VMs) and several PaaS services.",
        "Only a few Azure PaaS services listed in the product overview.",
        "All databases, storage accounts, and Virtual machines (VMs)"
      ]
  },
  {
    "category": "faq",
    "type": "multiple",
    "difficulty": "hard",
    "question": "How can I see the current security state of my Azure, multicloud, and on-premises resources?",
    "correct_answer": "The Defender for Cloud Overview page shows the overall security posture of your environment broken down by Compute, Networking, etc.",
      "incorrect_answers": [
        "You have to build a custom script that brings all your metrics together in a single place.",
        "You have dashboard for your Azure resources, and another dashboard for your on-premises resources.",
        "It's not possible.."
      ]
  },
  {
    "category": "faq",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What triggers a security alert?",
    "correct_answer": "Microsoft Defender for Cloud automatically collects, analyzes, and fuses log data from your resources. When threats are detected, a security alert is created.",
      "incorrect_answers": [
        "You have to build your own custom script that analyzes your logs.",
        "Security alerts are not built into Microsoft Defender for Cloud.",
        "You have to manually create security alerts."
      ]
  },
  {
    "category": "faq",
    "type": "multiple",
    "difficulty": "hard",
    "question": "How many security experts does Microsoft employ dedicated to data security and privacy?",
    "correct_answer": "3,500",
      "incorrect_answers": [
        "100",
        "1,500",
        "5,000"
      ]
  },
  




  {
    "category": "describe basic cybersecurity",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What are the three goals of cybersecurity?",
    "correct_answer": "Confidentiality, integrity, and availability.",
      "incorrect_answers": [
        "Confidentiality, identity, authorization.",
        "Confidentiality, authentication, authorization.",
        "Authentication, identity, authorization."
      ]
  },
  {
    "category": "describe basic cybersecurity",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Which type of attack employs malicious websites or browser extensions to get users to download malicious software on their devices?",
    "correct_answer": "Browser",
      "incorrect_answers": [
        "Social Engineering",
        "Password",
        "SQL Injection"
      ]
  },
  {
    "category": "describe basic cybersecurity",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Which mitigation strategy uses the principle of something the user is and has?",
    "correct_answer": "Multifactor authentication",
      "incorrect_answers": [
        "Browser security",
        "Threat intelligence",
        "Passwordless"
      ]
  },
  {
    "category": "describe basic cryptography",
    "type": "multiple",
    "difficulty": "hard",
    "question": "How many keys are required when using symmetric encryption?",
    "correct_answer": "One",
      "incorrect_answers": [
        "Two",
        "Three",
        "Four"
      ]
  },
  {
    "category": "describe basic cryptography",
    "type": "multiple",
    "difficulty": "hard",
    "question": "When using asymmetric encryption, which key shouldn't be shared?",
    "correct_answer": "Private key",
      "incorrect_answers": [
        "Public Key",
        "Shared Key",
        "Key pair"
      ]
  },
  {
    "category": "describe basic cryptography",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is a hashing function?",
    "correct_answer": "A hashing function is an algorithm that creates a fixed-length hexadecimal value of the plaintext.",
      "incorrect_answers": [
        "A hashing function is an algorithm that creates a new ciphertext message from the plaintext.",
        "A hashing function is an algorithm that's used to decrypt ciphertext from the sender.",
        "A hashing function is an algorithm that creates a new key pair."
      ]
  },
  {
    "category": "describe authentication",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What are the three types of authentication?",
    "correct_answer": "Something you know, something you have, and something you are.",
      "incorrect_answers": [
        "Something you own, something you know, something you learn.",
        "Something you are, something you have, something you know.",
        "Something you find, something you are, something you know."
      ]
  },
  {
    "category": "describe authentication",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is credential stuffing?",
    "correct_answer": "There's a security breach at one site, and attackers use your compromised usernames and passwords at many other sites.",
      "incorrect_answers": [
        "An attacker attempts to gain access using millions of username and password combinations.",
        "A collective hacking group attempts to gain access to a large number of accounts.",
        "A dictionary of commonly used words is used for the brute force attack."
      ]
  },
  {
    "category": "describe authentication",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What are the three principles of Zero Trust?",
    "correct_answer": "Verify explicitly, assume breach, and use least privileged access.",
      "incorrect_answers": [
        "Spear-fishing, pretexting, and baiting.",
        "Credential stuffing, key logging, spear-fishing.",
        "Trust the network, trust the user, trust the device."
      ]
  },
  {
    "category": "describe network-based-threats",
    "type": "multiple",
    "difficulty": "hard",
    "question": "In a network, what is the fundamental building block that allows multiple devices to communicate with each other?",
    "correct_answer": "The switch",
      "incorrect_answers": [
        "The router",
        "The access point",
        "The hub"
      ]
  },
  {
    "category": "describe network-based-threats",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is the name of a common network attack where the cybercriminal compromises a router in the network to eavesdrop on, or alter, data?",
    "correct_answer": "Man-in-the-middle",
      "incorrect_answers": [
        "Bluejacking",
        "Wardriving",
        "TCPDrilling"
      ]
  },
  {
    "category": "describe network-based-threats",
    "type": "multiple",
    "difficulty": "hard",
    "question": "When considering security, what is the common name given to separating your network into discrete entities?",
    "correct_answer": "Network segmentation",
      "incorrect_answers": [
        "Network access control",
        "PPNP",
        "Virtual private network"
      ]
  },


  {
    "category": "microsoft-best-practices",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Microsoft has built capabilities and resources to help accelerate your implementation of this security guidance on Microsoft Azure. Which tool is responsible for continuous assessment of the workloads and provides security visibility via Secure Score?",
    "correct_answer": "Microsoft Defender for Cloud",
      "incorrect_answers": [
        "Microsoft cloud security benchmark",
        "Microsoft Sentinel",
        "Microsoft Cloud App Security"
      ]
  },
  {
    "category": "microsoft-best-practices",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Which one of the options below isn't a key security strategy principle?",
    "correct_answer": "Reduce compromise",
      "incorrect_answers": [
        "Productivity and security",
        "Shared responsibility",
        "Integration"
      ]
  },
  {
    "category": "microsoft-best-practices",
    "type": "multiple",
    "difficulty": "hard",
    "question": "A security strategy must enable defined business outcomes while..",
    "correct_answer": "Reduce risk to an acceptable level and enable employees to be productive.",
      "incorrect_answers": [
        "Reduce risk to zero and enable employees to be productive.",
        "Reduce compromise.",
        "Reduce risk to an acceptable level and enable partners."
      ]
  },




  {
    "category": "mcra - microsoft cybersecurity reference architecture",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Why is over-customizing patch selection an antipattern?",
    "correct_answer": "It creates untested builds of operating systems and applications.",
      "incorrect_answers": [
        "It delays the deployment of critical patches.",
        "Patch selection further erodes trust in software vendors.",
        "It's not an antipattern, it's a best practice."
      ]
  },
  {
    "category": "mcra - microsoft cybersecurity reference architecture",
    "type": "multiple",
    "difficulty": "hard",
    "question": "XDR systems became widely popular for what reason?",
    "correct_answer": "They reduced false positives.",
      "incorrect_answers": [
        "They provided broad visibility and correlation across all tools and technology.",
        "They provide greater coverage that SIEM systems do.",
        "It's not expensive."
      ]
  },
  {
    "category": "mcra - microsoft cybersecurity reference architecture",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Which of the following statements is an example of the best practice 'Integrate security operations signals with access decisions'?",
    "correct_answer": "Block access to a compromised asset while it is being restored.",
      "incorrect_answers": [
        "Assume breach and explicitly validate telemetry during access requests.",
        "Use a single identity and implement single sign-on.",
        "None of the above."
      ]
  },


  {
    "category": "design solution - microsoft cybersecurity reference architecture",
    "type": "multiple",
    "difficulty": "hard",
    "question": "Which of the following best defines the objective of a cloud reference architecture like MCRA from Microsoft?",
    "correct_answer": "To define a secure cloud architecture that can be implemented anywhere with any technology stack",
      "incorrect_answers": [
        "To handle all cloud migration projects with the same approach",
        "To prescribe a set of tools and vendors for building secure clouds",
        "To focus only on technical security tips for cloud architects"
      ]
  },
  {
    "category": "design solution - microsoft cybersecurity reference architecture",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is a key benefit of using architectural patterns, such as those found in the MCRA reference architecture when addressing cloud security concerns?",
    "correct_answer": "Patterns reduce costs by limiting the number of components, platforms, and architectures that must be secured",
      "incorrect_answers": [
        "Patterns eliminate the need for detailed security assessment for each individual project",
        "Patterns enable software to adapt to any type of threat in real-time",
        "Patterns are just guidelines and should not be used in production"
      ]
  },
  {
    "category": "design solution - microsoft cybersecurity reference architecture",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is the purpose of the Microsoft Cloud Security Benchmark?",
    "correct_answer": "To provide a set of recommended security configurations and best practices for Microsoft cloud services.",
      "incorrect_answers": [
        "To provide a comprehensive list of all possible security threats to Microsoft cloud services.",
        "To provide a list of all security breaches that have occurred in Microsoft cloud services.",
        "To provide a tool for testing the vulnerability of Microsoft cloud services to attacks."
      ]
  },
  {
    "category": "design solution - microsoft cybersecurity reference architecture",
    "type": "multiple",
    "difficulty": "hard",
    "question": "What is the difference between defensive and detective security controls, as discussed in the Microsoft cloud security benchmark",
    "correct_answer": "Defensive controls proactively prevent security incidents while Detective controls detect and respond to these incidents after they occur",
      "incorrect_answers": [
        "Detective controls focus on changing user behavior while defensive controls monitor for incidents",
        "Detective controls rely on passive monitoring of system logs while defensive controls require active scanning",
        "Defensive controls rely entirely on preemptive configuration while Detective controls mostly operate via heuristic algorithms"
      ]
  },
]