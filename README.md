# Sasa

**The live, local voice of what’s happening right now.**

Sasa is a hyperlocal social audio platform that helps people understand what is happening around them—and decide what to do about it—in real time.

It feels like a live local radio show, but with personality, context, and action built in.

Users can listen, ask what’s going on, make plans, buy, RSVP, join chats, or follow where friends are going.

> Hear what’s happening. Decide faster.

---

## What Sasa Is

Sasa is four systems working together:

1. **A live, adaptive audio show** assembled from nearby activity  
2. **A cast of AI hosts** with distinct personalities and interactions  
3. **A social layer** built around friends, events, vendors, and temporary group chats  
4. **A commerce layer** for food, tickets, and local offers  

The long-term vision:

> A real-time, spoken operating layer for local life.

---

## Core Question

Sasa answers:

> What is happening, who is going, and what should I do next?

---

## Core Product Insight

Sasa is not just discovery.

> **Sasa is a decision engine disguised as a radio show.**

Users are not just listening. They are:
- deciding where to go  
- coordinating with friends  
- reducing uncertainty  

---

## The Plan Layer (Critical)

Sasa should not just present options.

It should **connect them into plans**.

Example:

> “Start at Kofi’s, then drift to rooftop jazz at eight.”

This is a core behavior, not a feature.

---

## Product Decisions

Sasa should begin with one dense scene, not an entire city.

### First Narrow User
Students and young city users in a dense campus, nightlife, or downtown corridor.

### First Location
A walkable, socially concentrated area.

> The goal is not size. The goal is density of activity.

### First Habit
> “What is happening after class or work, and where should we go?”

---

## The Radio Experience

Sasa should feel like a real show—not a stream of announcements.

### Audio Layers
Layer 1: Music bed (continuous)
Layer 2: MC voice
Layer 3: Real local voices (vendors, organizers, attendees)
Layer 4: Banter layer (host interactions)
Layer 5: Stingers and transitions
Layer 6: Ducking and mixing

MC intro
→ signal
→ optional banter
→ real voice
→ social proof
→ action
→ music
→ next segment

---

## Talk Ratio

MCs should speak **20–35 seconds per minute max**.

The rest is:
- music  
- real voices  
- silence  
- action time  

---

## Silence

Silence is intentional.

If the user is:
- deciding  
- reading  
- paying  

→ reduce audio or pause completely.

---

## MC System

Sasa uses a **small cast of hosts**, not one assistant.

### Host Roles

#### Nia (Anchor)
- warm, observant, guiding  
- drives flow and decisions  

#### Kairo (Disruptor)
- energetic, reactive  
- adds urgency and push  

#### Sol (Atmosphere)
- smooth, minimal  
- adds mood and vibe  

---

## Host Dynamics

Instead of equal co-hosting:

> **Primary Host + Occasional Co-Hosts**

- Nia: ~80%  
- Kairo / Sol: ~20%  

---

## Banter System

Short, controlled host interactions create personality.

Rules:
- 1–2 lines  
- under 6 seconds  
- tied to signal  
- optional  

Example:
Nia: “Kofi’s just dropped a dinner combo.”
Kairo: “Forty minutes? That’s pressure.”
Nia: “Only if you’re slow.”


---

## Live Context Engine

Sasa must feel live.

MCs should be aware of:
- time  
- location  
- distance  
- friend activity  
- urgency  
- previous segment  

---

## Context Rules

- Avoid robotic phrasing  
- Use natural distance (“two blocks away”)  
- Avoid fake certainty  
- Avoid repetition  

---

## Show Modes (Critical)

Sasa adapts to reality.

### High Energy Mode
- many signals  
- fast pacing  
- more banter  

### Low Signal Mode

When supply is low:
if signals < threshold → low_energy_mode

Behavior:
- slower pacing  
- fewer segments  
- honest tone  

Example:

> “Tonight’s a little quieter… but that usually means better spots without the rush.”

---

## Signal Evolution (Anti-Repetition)

Each signal should evolve across plays.

Track:
times_played
last_angle_used


Rotate angles:
- announcement  
- urgency  
- momentum  
- social proof  
- fallback  

---

## Confidence-Aware Language

Each signal has a confidence score.

Tone adapts:

- High → “Tickets are available”  
- Medium → “Still has spots”  
- Low → “Might still have space”  

Never overstate certainty.

---

## Real Local Voices

Core to trust.

Sources:
- vendors  
- organizers  
- attendees  
- buyers  
- friends  

---

## Core Primitive: LocalSignal
LocalSignal

id
type
title
description
location
starts_at
ends_at
source_type
source_id
audio_asset_id
commerce_target_id
social_context
visibility
urgency
capacity
price
currency
confidence_score
times_played
created_at

---

## Product Surfaces

1. **The Feed (Sasa Live)**  
2. **Agent Screen**  
3. **Map**  
4. **Inbox / Chats**  
5. **Commerce Layer**  
6. **Vendor Dashboard**

---

## Voice Actions


"Buy it"
"RSVP"
"Join"
"Save"
"Tell me more"
"Skip"


---

## Social Layer

- event chats  
- vendor chats  
- plan chats  
- temporary groups  

Chats expire based on activity.

---

## Commerce

V1:
- tickets  
- simple deals  
- pickup orders  

---

## Ranking Signals


score =
proximity

urgency
social_relevance
preference_match
conversion_quality
freshness
fatigue
reliability_risk

---

## Failure Handling (Critical)

Sasa must handle:

### Boring Nights
→ reframe, don’t fake energy  

### Low Supply
→ evolve signals  

### Bad Data
→ reduce certainty  

---

## Audio Architecture


Signals → Show Blocks → MC → Audio Engine

Client mixes:
Music

MC
signal audio
reviews
stingers

---

## Buffer Model

Maintain:

> 20–40 second rolling buffer
PLAYING → READY → GENERATING

---

## Latency Strategy

- cached audio → instant  
- pre-generated → fast  
- live generation → masked with music  

---

## Analytics

Track:
- listens  
- skips  
- actions  
- conversions  
- repeat opens  

---

## Success Metric

> Users who open Sasa and successfully decide what to do

---

## MVP Scope

Focus:
- one dense area  
- evening plans  
- real signals  

---

## Design Principles

### Make the City Feel Alive  
### Make Decisions Easy  
### Be Audio-First  
### Add Just Enough Humanity  
### Respect Reality  
### Keep It Actionable  

---

## Product Thesis

Local life is fragmented.

Maps show places.  
Social apps show people.  
Event apps show listings.

None answer:

> “What should I do right now?”

Sasa turns local signals into a **live, social, decision-making experience**.

---

## Repository Structure
