# cookie-jar-protocol

Cookie Jar Protocol streamlines fund allocation in DAOs with optimistic governance and high social trust. Members can withdraw small token amounts with minimal overhead, ensuring transparency and accountability via Ethereum Attestations on EAS and Farcaster frames.

# Project Description: Cookie Jar Protocol

![upload_746e9a6c8dcdc1d137b1f3b969da210e](https://github.com/user-attachments/assets/c959c268-09b1-4cf8-a12a-6897523ce2d3)

**Overview**: Cookie Jar Protocol is an innovative smart contract solution designed to streamline and democratize fund allocation within decentralized autonomous organizations (DAOs). By leveraging optimistic governance and high social trust mechanisms, Cookie Jar Protocol enables DAO members to withdraw small amounts of tokens with minimal overhead while ensuring transparency and accountability through Ethereum Attestations on EAS and Farcaster frames.

### Key Features:

**Optimistic Governance Mechanism:**

- Allows any DAO member to withdraw small amounts of tokens from the Cookie Jar by leaving a note describing the intended use.
- DAO members can upvote or downvote these notes, fostering a transparent and community-driven decision-making process.
- Reduces governance overhead by eliminating the need for formal voting on each proposal.

**Ethereum Attestations (EAS) and Farcaster Frames:**

- Users request funds and leave notes on Farcaster frames.
- Each note is recorded as an Ethereum Attestation on EAS, ensuring verifiable and immutable records of fund usage.

**Cross-Chain Fund Withdrawals:**

- Utilizes Chainlink CCIP to enable users to withdraw funds from the Cookie Jar on multiple OP stack chains such as Optimism, Base, and others.
- Ensures seamless interoperability and flexibility across various blockchain networks.

**Human Verification:**

- Integrates Worldcoin for user verification on Farcaster frames, ensuring that only verified human users can request and withdraw funds.
- Enhances the security and integrity of the protocol by preventing fraudulent activities.

**Data Management and Transparency:**

- Employs Goldsky for creating and managing subgraphs, facilitating efficient data indexing and querying.
- Utilizes Blockscout as the blockchain explorer to provide clear and transparent insights into all transactions and activities within the protocol.

### Use Cases:

- **DAO Fund Allocation**: Simplifies the process of distributing small grants or funds to contributors without the need for extensive governance procedures.
- **Community Incentives**: Encourages community engagement by allowing members to propose and fund initiatives that benefit the DAO.
- **Project Development**: Supports decentralized project development by providing accessible and transparent funding mechanisms.

### Technical Stack:

- **Blockchain**: Optimism Mainnet and OP Stack Chains
- **Smart Contracts**: Solidity
- **Data Indexing**: Goldsky
- **Blockchain Explorer**: Blockscout
- **Cross-Chain Interoperability**: Chainlink CCIP
- **User Verification**: Worldcoin
- **Note and Attestation System**: Farcaster Frames and Ethereum Attestation Service (EAS)

**Conclusion**: Cookie Jar Protocol revolutionizes the way DAOs manage and allocate their funds by introducing an efficient, transparent, and community-driven approach. By reducing governance overhead and leveraging advanced blockchain technologies, Cookie Jar Protocol empowers DAOs to operate more effectively and inclusively, fostering a vibrant and engaged community.

---

This project involves a cross-chain system called "CookieJar," enabling users to transfer assets between two blockchain networks, "Base" and "OP."

### Key Steps:

1. **Alice deposits 5 ETH into a jar on the Base chain.**
2. **CookieJar on Base locks 1 ETH and updates its state.**
3. **Goldsky Subgraph detects a withdrawal request and triggers synchronization across chains.**
4. **CookieJar Trusted Operator verifies the request and releases 1 ETH on the OP chain to Bob.**
5. **Bob completes the withdrawal on the OP chain, receiving 1 ETH.**

This system ensures secure, synchronized cross-chain asset transfers between different blockchain networks.

---

### How It's Made: Cookie Jar Protocol

**Introduction**: The Cookie Jar Protocol is designed to simplify fund management within DAOs by enabling members to request and withdraw small amounts of tokens in a transparent and community-driven manner. This section will walk you through the various steps and components involved in creating this innovative protocol.

#### 1. Concept and Design:

- **Problem Identification**: DAOs often face high governance overhead when allocating small funds, leading to inefficiencies and delays.
- **Solution Ideation**: The idea of a "cookie jar" emerged, where verified users could request funds with minimal friction, supported by community oversight.
- **Optimistic Governance**: Adopting an optimistic governance model to allow quick access to funds, relying on community trust and transparency.

#### 2. Smart Contract Development:

- **Core Contract Functions:**
  - **User Verification**: Implementing functions to verify users using Worldcoin integration.
  - **Fund Request and Fulfillment**: Developing mechanisms for users to request funds and for the owner to fulfill these requests.
  - **Security Measures**: Setting maximum withdrawal limits and implementing ownership controls.
- **Coding and Testing:**
  - Writing the smart contract in Solidity.
  - Rigorous testing using testnets to ensure functionality and security.
  - Utilizing tools like Truffle and Hardhat for development and testing.

#### 3. User Interaction and Notes:

- **Farcaster Frames**: Integrating Farcaster frames for users to request funds and leave notes explaining their intended use.
- **Ethereum Attestations**: Recording each note as an Ethereum Attestation on EAS, providing a transparent and immutable record of requests.
- **Community Engagement**: Allowing DAO members to upvote or downvote notes, fostering community-driven oversight.

#### 4. Cross-Chain Mechanism:

- **Custom Locking Unlocking Mechanism**: Enabling cross-chain fund withdrawals, allowing users to access funds on various OP stack chains like Base and Mode.
- **Interoperability**: Ensuring seamless interaction between different blockchain networks.

#### 5. Data Management and Transparency:

- **Goldsky Subgraphs**: Using Goldsky to create and manage subgraphs for efficient data indexing and querying.
- **Blockscout Explorer**: Employing Blockscout as the blockchain explorer to provide clear insights into all transactions and activities within the protocol.

#### 6. User Verification:

- **Worldcoin Integration**: Implementing Worldcoin for human verification, ensuring that only verified users can request and withdraw funds.
- **Privacy and Security**: Ensuring that the verification process is secure and respects user privacy.

#### 7. Deployment and Launch:

- **Mainnet Deployment**: Deploying the smart contract on the Optimism Mainnet.
- **User Onboarding**: Guiding DAOs and their members through the process of using the Cookie Jar Protocol.
- **Community Support**: Providing documentation, support, and continuous updates to ensure smooth operation.

**Conclusion**: The Cookie Jar Protocol leverages advanced blockchain technologies and community-driven governance to create a transparent, efficient, and user-friendly fund management system for DAOs. By reducing governance overhead and promoting transparency, the protocol empowers DAOs to operate more effectively and inclusively.
