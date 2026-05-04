{
  "meta": {
    "version": "1.0.0",
    "product": "Sasa",
    "description": "Event knowledge base for the Sasa show assembler. Each record defines an event type with MC voice mode, urgency rules, CTA, and three script variants (warm_hype, dry_wit, real_talk) for Nia and Kairo.",
    "urgency_levels": ["critical", "high", "medium", "low"],
    "voice_modes": ["warm_hype", "dry_wit", "real_talk"],
    "mc_names": ["Nia", "Kairo"],
    "rotation_rule": "Track last_variant_served per user per event_type_id. Rotate through variants. Suppress event for 7 days after all 3 variants served.",
    "urgency_mode_rule": "critical urgency must never use dry_wit. high urgency should prefer warm_hype or real_talk."
  },
  "events": [
    {
      "event_type_id": "nightlife_club_night",
      "name": "Club night / DJ set",
      "description": "Weekend dance event with DJ, ticketed entry",
      "category": "Nightlife & going out",
      "subcategory": "Dance & club",
      "timing_pattern": "recurring",
      "typical_timing": "Friday–Saturday, 9pm–late",
      "urgency_level": "high",
      "urgency_label": "Tonight only",
      "urgency_color": "#FCEBEB",
      "urgency_text_color": "#A32D2D",
      "category_color": "#993556",
      "category_bg": "#FBEAF0",
      "default_voice_mode": "warm_hype",
      "cta": "Tap → entry price + tonight's lineup",
      "tags": ["18+", "ticketed", "recurring", "indoor", "late-night"],
      "audience": ["young adults", "nightlife crowd"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Lusaka, it's Friday. You know what that means — the week is done, the music is on, and someone in this city is about to have the night of their life. Make it you." },
            { "speaker": "Kairo", "text": "Doors at nine. I'd say arrive early but we both know you won't." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "DJ set tonight. For those of you currently lying on your couch telling yourself you'll go next time — this is next time." },
            { "speaker": "Nia", "text": "He's right. The couch will still be there." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Real talk — when last did you actually dance? Not in your kitchen. In public, with other humans." },
            { "speaker": "Kairo", "text": "Tonight is a medically advisable opportunity to fix that." }
          ]
        }
      }
    },
    {
      "event_type_id": "nightlife_rooftop_sundowner",
      "name": "Rooftop sundowner",
      "description": "Drinks at sunset with city views, walk-in friendly",
      "category": "Nightlife & going out",
      "subcategory": "Bars & social drinking",
      "timing_pattern": "recurring",
      "typical_timing": "Fridays, 5–9pm",
      "urgency_level": "medium",
      "urgency_label": "Weekly, same time",
      "urgency_color": "#FAEEDA",
      "urgency_text_color": "#854F0B",
      "category_color": "#993556",
      "category_bg": "#FBEAF0",
      "default_voice_mode": "dry_wit",
      "cta": "Tap → venue address + reservation link",
      "tags": ["21+", "walk-in", "recurring", "outdoor", "golden hour"],
      "audience": ["adults", "after-work crowd", "couples"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "The sky does something special at 6pm on a Friday and there's one spot in the city where you can watch it with a drink in your hand. We have the address." },
            { "speaker": "Kairo", "text": "We do. Tap." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Rooftop sundowner this evening. Scientifically proven to make your Friday feel 40% longer than it actually was." },
            { "speaker": "Nia", "text": "That's not a real statistic." },
            { "speaker": "Kairo", "text": "It felt real when I said it." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "You've been inside since Monday. The city looks good from up high — especially at golden hour. Just go." },
            { "speaker": "Kairo", "text": "Details in the card." }
          ]
        }
      }
    },
    {
      "event_type_id": "food_street_market",
      "name": "Street food market",
      "description": "Multi-vendor outdoor food event, free entry",
      "category": "Food & drink",
      "subcategory": "Markets & street food",
      "timing_pattern": "recurring",
      "typical_timing": "Weekends, 10am–6pm",
      "urgency_level": "medium",
      "urgency_label": "This weekend",
      "urgency_color": "#FAEEDA",
      "urgency_text_color": "#854F0B",
      "category_color": "#D85A30",
      "category_bg": "#FAECE7",
      "default_voice_mode": "warm_hype",
      "cta": "Tap → vendor map + full stall list",
      "tags": ["free entry", "family", "outdoor", "recurring", "food"],
      "audience": ["families", "foodies", "all ages"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "The street food market is on and I need you to understand that there are vendors there right now just waiting to change your afternoon." },
            { "speaker": "Kairo", "text": "Genuinely good options. We checked." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Street food market this weekend. Thirty vendors. Zero bad decisions — unless you try to eat too much and also walk around in the sun." },
            { "speaker": "Nia", "text": "Bring water." },
            { "speaker": "Kairo", "text": "Bring water." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "There's a market this weekend where local vendors are selling actual food made by actual people who care about it. It's the opposite of a drive-through." },
            { "speaker": "Kairo", "text": "Free entry. Tap for the full list." }
          ]
        }
      }
    },
    {
      "event_type_id": "food_popup_restaurant",
      "name": "Pop-up restaurant",
      "description": "One-night chef takeover, limited seats, ticketed",
      "category": "Food & drink",
      "subcategory": "Dining experiences",
      "timing_pattern": "one-time",
      "typical_timing": "Single date, 7pm sharp",
      "urgency_level": "critical",
      "urgency_label": "Last seats — tonight",
      "urgency_color": "#FCEBEB",
      "urgency_text_color": "#A32D2D",
      "category_color": "#D85A30",
      "category_bg": "#FAECE7",
      "default_voice_mode": "warm_hype",
      "cta": "Tap → reserve your seat now",
      "tags": ["ticketed", "adults", "indoor", "one-time", "limited"],
      "audience": ["foodies", "date night", "adults"],
      "assembler_note": "critical urgency — do not assign dry_wit. Inject live seat count if available via API.",
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Okay this one is urgent — pop-up dinner tonight, one sitting, and Kairo how many seats are left?" },
            { "speaker": "Kairo", "text": "Twelve." },
            { "speaker": "Nia", "text": "Twelve. This is not a drill. Tap the card." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "assembler_note": "Use only if urgency drops to medium. Not appropriate for critical.",
          "lines": [
            { "speaker": "Kairo", "text": "Pop-up restaurant tonight. Twelve seats. And based on historical data, eleven of you are going to decide to go at 6:58pm." },
            { "speaker": "Nia", "text": "Don't be that person." },
            { "speaker": "Kairo", "text": "Don't be that person." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "There's a chef doing something special tonight — one sitting, small group, proper food. This is the kind of evening you'll actually remember." },
            { "speaker": "Kairo", "text": "Tap now. That's not a figure of speech." }
          ]
        }
      }
    },
    {
      "event_type_id": "community_neighbourhood_cleanup",
      "name": "Neighbourhood clean-up",
      "description": "Community action morning, all welcome, free",
      "category": "Community & civic",
      "subcategory": "Neighbourhood action",
      "timing_pattern": "one-time",
      "typical_timing": "Saturday morning, 7–10am",
      "urgency_level": "low",
      "urgency_label": "This Saturday",
      "urgency_color": "#EAF3DE",
      "urgency_text_color": "#3B6D11",
      "category_color": "#3B6D11",
      "category_bg": "#EAF3DE",
      "default_voice_mode": "real_talk",
      "cta": "Tap → confirm you're coming",
      "tags": ["free", "family", "outdoor", "civic", "community"],
      "audience": ["residents", "families", "all ages"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Saturday morning, your neighbours are going to be out there doing something good for this street. Show up. It's three hours and then you get to feel great about yourself for the rest of the weekend." },
            { "speaker": "Kairo", "text": "Scientifically proven. This time actually." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Community clean-up, Saturday 7am. Before you say that's early — your neighbour Mrs. Banda will be there at 6:55. Just so you know." },
            { "speaker": "Nia", "text": "Don't let Mrs. Banda down." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "The street looks better when people care about it. There's a clean-up happening Saturday morning. Small thing, real difference." },
            { "speaker": "Kairo", "text": "Tap to let them know you're coming — they need numbers." }
          ]
        }
      }
    },
    {
      "event_type_id": "religious_iftar",
      "name": "Iftar / Ramadan gathering",
      "description": "Community fast-breaking meal, open to all",
      "category": "Religious & spiritual",
      "subcategory": "Islamic observance",
      "timing_pattern": "seasonal",
      "typical_timing": "Daily during Ramadan, at sunset",
      "urgency_level": "high",
      "urgency_label": "Tonight at sunset",
      "urgency_color": "#FCEBEB",
      "urgency_text_color": "#A32D2D",
      "category_color": "#5F5E5A",
      "category_bg": "#F1EFE8",
      "default_voice_mode": "real_talk",
      "cta": "Tap → location + what to bring",
      "tags": ["free", "all welcome", "indoor", "seasonal", "community"],
      "audience": ["Muslim community", "all are welcome"],
      "assembler_note": "Always use hushed, warm tone. Banter is inappropriate for this event type. real_talk is the only appropriate mode.",
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "assembler_note": "Use only if no other option. Keep energy warm, never loud.",
          "lines": [
            { "speaker": "Nia", "text": "There's an iftar this evening — a community table, open to everyone, where the fast breaks together. These are the evenings worth making time for." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "assembler_note": "Use with care — lead with warmth, not wit.",
          "lines": [
            { "speaker": "Kairo", "text": "Iftar this evening. Good food, good people, and the specific kind of warmth you only find when a community comes together around a table." },
            { "speaker": "Nia", "text": "All are welcome. Tap for the address." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "For those observing — and for those who simply want to share the evening — there's an iftar gathering tonight. A warm place at the table is waiting." },
            { "speaker": "Kairo", "text": "Address in the card." }
          ]
        }
      }
    },
    {
      "event_type_id": "music_live_band",
      "name": "Live band night",
      "description": "Local artists, full set, general admission",
      "category": "Music & performance",
      "subcategory": "Live music",
      "timing_pattern": "one-time",
      "typical_timing": "Tonight, doors 7pm",
      "urgency_level": "high",
      "urgency_label": "Tonight, doors 7pm",
      "urgency_color": "#FCEBEB",
      "urgency_text_color": "#A32D2D",
      "category_color": "#534AB7",
      "category_bg": "#EEEDFE",
      "default_voice_mode": "warm_hype",
      "cta": "Tap → tickets + tonight's setlist",
      "tags": ["ticketed", "18+", "indoor", "one-time", "live music"],
      "audience": ["music lovers", "adults", "young professionals"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Live band tonight and I need you to understand that this is a different thing from a playlist. Real instruments. Real people. Real energy in the same room as you." },
            { "speaker": "Kairo", "text": "Doors open at seven." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Live music tonight. Actual humans making sounds with instruments — not speakers pretending. Apparently this is still a thing and I for one am glad." },
            { "speaker": "Nia", "text": "Tickets at the door. Tap for the lineup." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "When last did you see live music? Think about it. Then tap the card and do something about it — there's a full band playing tonight and the venue is not huge." }
          ]
        }
      }
    },
    {
      "event_type_id": "music_open_mic",
      "name": "Open mic night",
      "description": "Anyone can perform — sign up at the door",
      "category": "Music & performance",
      "subcategory": "Open performance",
      "timing_pattern": "recurring",
      "typical_timing": "Wednesdays, 7–10pm",
      "urgency_level": "low",
      "urgency_label": "Weekly — next one tomorrow",
      "urgency_color": "#EAF3DE",
      "urgency_text_color": "#3B6D11",
      "category_color": "#534AB7",
      "category_bg": "#EEEDFE",
      "default_voice_mode": "dry_wit",
      "cta": "Tap → venue details + sign-up link",
      "tags": ["free", "all ages", "indoor", "recurring", "performance"],
      "audience": ["performers", "creatives", "general public"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Open mic tomorrow — and whether you want to watch people be brilliant or finally do that thing you've been rehearsing in your mirror, there's a stage with your name on it." },
            { "speaker": "Kairo", "text": "Metaphorically. The stage doesn't have name tags." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Open mic night. Somewhere in this city is someone who's been 'almost ready' for four months." },
            { "speaker": "Nia", "text": "Be that person. Tonight's the night." },
            { "speaker": "Kairo", "text": "Or just come and watch. Also valid." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Open mic is the most honest night in any city — people showing up to try something in front of strangers. Worth watching even if you never perform." },
            { "speaker": "Kairo", "text": "Free. Weekly. Wednesday." }
          ]
        }
      }
    },
    {
      "event_type_id": "sports_fiveaside_tournament",
      "name": "5-a-side football tournament",
      "description": "Weekend football, open team registration",
      "category": "Sports & fitness",
      "subcategory": "Football",
      "timing_pattern": "one-time",
      "typical_timing": "Saturday, 8am–2pm",
      "urgency_level": "medium",
      "urgency_label": "Register by Friday",
      "urgency_color": "#FAEEDA",
      "urgency_text_color": "#854F0B",
      "category_color": "#0F6E56",
      "category_bg": "#E1F5EE",
      "default_voice_mode": "dry_wit",
      "cta": "Tap → register your team before Friday",
      "tags": ["ticketed", "adults", "outdoor", "competitive", "team"],
      "audience": ["football players", "sports groups", "men and women"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Five-a-side tournament this Saturday — if your WhatsApp group has been talking about doing something active for the last six months, this is the universe answering." },
            { "speaker": "Kairo", "text": "Registration closes Friday. Tap." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Football tournament Saturday. Prizes, glory, and a non-zero chance of a pulled hamstring. Register before Friday." },
            { "speaker": "Nia", "text": "Stretch on Thursday." },
            { "speaker": "Kairo", "text": "Stretch on Thursday." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "If your team has five people and a Saturday morning free, there's a tournament this weekend worth entering. Actual prizes. Actual competition." },
            { "speaker": "Kairo", "text": "Tap for registration — closes Friday." }
          ]
        }
      }
    },
    {
      "event_type_id": "sports_morning_yoga",
      "name": "Morning yoga session",
      "description": "Community outdoor class, all levels welcome",
      "category": "Sports & fitness",
      "subcategory": "Wellness & fitness",
      "timing_pattern": "recurring",
      "typical_timing": "Sundays, 6:30am",
      "urgency_level": "low",
      "urgency_label": "Weekly, every Sunday",
      "urgency_color": "#EAF3DE",
      "urgency_text_color": "#3B6D11",
      "category_color": "#0F6E56",
      "category_bg": "#E1F5EE",
      "default_voice_mode": "real_talk",
      "cta": "Tap → park location + what to bring",
      "tags": ["free / donation", "all ages", "outdoor", "wellness", "recurring"],
      "audience": ["wellness seekers", "beginners", "early risers"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Sunday morning yoga in the park — before the noise, before the heat, before anyone else is even awake. This is the best version of Sunday morning." },
            { "speaker": "Kairo", "text": "6:30am. All levels. Tap for the spot." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Sunday yoga at 6:30am. I'm not going to tell you it's easy to wake up for. I will tell you everyone who goes says they're glad they did." },
            { "speaker": "Nia", "text": "Every single time." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Sunday morning. Before the noise starts. There's a yoga session in the park — even if you've never done it before. Especially if you've never done it before." },
            { "speaker": "Kairo", "text": "Free. Outdoor. 6:30am. Location in the card." }
          ]
        }
      }
    },
    {
      "event_type_id": "arts_exhibition_opening",
      "name": "Art exhibition opening",
      "description": "New show, local artists, opening night with drinks",
      "category": "Arts & culture",
      "subcategory": "Visual arts",
      "timing_pattern": "one-time",
      "typical_timing": "Tonight, 6–9pm",
      "urgency_level": "high",
      "urgency_label": "Opening night only",
      "urgency_color": "#FCEBEB",
      "urgency_text_color": "#A32D2D",
      "category_color": "#BA7517",
      "category_bg": "#FAEEDA",
      "default_voice_mode": "dry_wit",
      "cta": "Tap → gallery address + RSVP",
      "tags": ["free", "adults", "indoor", "one-time", "opening night"],
      "audience": ["art lovers", "creatives", "professionals"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Art opening tonight — new work, local artists, and the particular energy that only exists on opening night when everyone's seeing something for the first time together." },
            { "speaker": "Kairo", "text": "Free entry. Wine is confirmed." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Gallery opening tonight. The art is apparently very good." },
            { "speaker": "Nia", "text": "It is, I saw the preview." },
            { "speaker": "Kairo", "text": "She saw the preview. The wine is also confirmed. These are both facts." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "A local artist has been working on something for months and tonight they're finally showing it. That's worth turning up for." },
            { "speaker": "Kairo", "text": "Free. Tonight. 6pm. Address in the card." }
          ]
        }
      }
    },
    {
      "event_type_id": "health_blood_drive",
      "name": "Blood drive",
      "description": "Community donation, walk-in welcome, ends today",
      "category": "Health & wellness",
      "subcategory": "Community health",
      "timing_pattern": "one-time",
      "typical_timing": "Today until 4pm",
      "urgency_level": "critical",
      "urgency_label": "Ends 4pm today",
      "urgency_color": "#FCEBEB",
      "urgency_text_color": "#A32D2D",
      "category_color": "#1D9E75",
      "category_bg": "#E1F5EE",
      "default_voice_mode": "real_talk",
      "cta": "Tap → location + what to bring",
      "tags": ["free", "adults", "indoor", "civic", "walk-in"],
      "audience": ["adults", "all residents"],
      "assembler_note": "critical urgency — never use dry_wit. Tone must be direct and warm. Mention biscuits — it is a genuine draw.",
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Quick one — blood drive today until 4pm. Twenty minutes of your afternoon, and you walk out knowing you actually did something that matters today." },
            { "speaker": "Kairo", "text": "Biscuits included. This is not a rumour." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "assembler_note": "Do not use for critical urgency. Reserved for if urgency drops to medium.",
          "lines": [
            { "speaker": "Kairo", "text": "Blood drive. Today. 4pm cutoff. Takes twenty minutes and they give you biscuits afterward — I'm not saying that's the main reason to go, but it's a reason." },
            { "speaker": "Nia", "text": "Go. Tap for the location." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Today until 4pm. Walk-in. Twenty minutes. The kind of thing you'll be glad you did by the time you're on your way home." },
            { "speaker": "Kairo", "text": "Location in the card." }
          ]
        }
      }
    },
    {
      "event_type_id": "education_financial_literacy",
      "name": "Financial literacy workshop",
      "description": "Free, practical, judgment-free money session",
      "category": "Educational",
      "subcategory": "Personal finance",
      "timing_pattern": "one-time",
      "typical_timing": "Saturday, 10am–12pm",
      "urgency_level": "medium",
      "urgency_label": "This Saturday — register now",
      "urgency_color": "#FAEEDA",
      "urgency_text_color": "#854F0B",
      "category_color": "#3B6D11",
      "category_bg": "#EAF3DE",
      "default_voice_mode": "real_talk",
      "cta": "Tap → register your spot",
      "tags": ["free", "adults", "indoor", "limited spots"],
      "audience": ["young adults", "working adults", "anyone"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Free financial literacy workshop this Saturday — and before you close this, just know it's practical, it's two hours, and nobody's going to judge your current situation. Clean slate energy." },
            { "speaker": "Kairo", "text": "Tap to register." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Financial literacy workshop Saturday. No judgment about past decisions. They've heard everything. They are unshockable." },
            { "speaker": "Nia", "text": "Go. It's free. It's two hours." },
            { "speaker": "Kairo", "text": "That's genuinely the whole pitch and it's a good one." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "This Saturday there's a free workshop on managing money — run by people who are genuinely trying to help, not sell you something. Two hours. Worth it." },
            { "speaker": "Kairo", "text": "Spots are limited. Tap now." }
          ]
        }
      }
    },
    {
      "event_type_id": "market_craft_makers",
      "name": "Craft & makers market",
      "description": "Local artisans only, handmade goods, free entry",
      "category": "Markets & pop-ups",
      "subcategory": "Artisan market",
      "timing_pattern": "recurring",
      "typical_timing": "Sundays, 9am–4pm",
      "urgency_level": "medium",
      "urgency_label": "This Sunday only",
      "urgency_color": "#FAEEDA",
      "urgency_text_color": "#854F0B",
      "category_color": "#639922",
      "category_bg": "#EAF3DE",
      "default_voice_mode": "real_talk",
      "cta": "Tap → stallholder map + what's there",
      "tags": ["free entry", "family", "outdoor", "weekend", "handmade"],
      "audience": ["families", "gift shoppers", "creatives", "all ages"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Makers market Sunday — everything on every table was made by a person with their actual hands. That's a different kind of shopping." },
            { "speaker": "Kairo", "text": "Free entry. Tap for the full stall list." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Craft market Sunday. Real things. Made by real people. No algorithm decided what to show you." },
            { "speaker": "Nia", "text": "That's honestly the most radical thing you've said all week." },
            { "speaker": "Kairo", "text": "I mean it." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "If you've been looking for a gift, a reason to leave the house on Sunday, or both — the makers market has you. Local artisans, no mass production." },
            { "speaker": "Kairo", "text": "Free entry. 9 to 4." }
          ]
        }
      }
    },
    {
      "event_type_id": "professional_startup_pitch",
      "name": "Startup pitch evening",
      "description": "Founders present to investors, RSVP required",
      "category": "Professional & networking",
      "subcategory": "Startup ecosystem",
      "timing_pattern": "one-time",
      "typical_timing": "Thursday, 6–9pm",
      "urgency_level": "medium",
      "urgency_label": "RSVP required",
      "urgency_color": "#FAEEDA",
      "urgency_text_color": "#854F0B",
      "category_color": "#185FA5",
      "category_bg": "#E6F1FB",
      "default_voice_mode": "dry_wit",
      "cta": "Tap → RSVP your spot",
      "tags": ["RSVP", "professionals", "indoor", "one-time", "networking"],
      "audience": ["founders", "investors", "professionals", "job seekers"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Thursday evening — people with ideas standing in front of people with money. If you want to be in the room where things start, this is the room." },
            { "speaker": "Kairo", "text": "RSVP required. Tap." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Startup pitch evening Thursday. Ideas, investors, one room. Historically this is where some interesting things have been set in motion." },
            { "speaker": "Nia", "text": "And some less interesting things." },
            { "speaker": "Kairo", "text": "That too. Still worth going." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Whether you're building something, thinking about it, or just want to see what's happening in this city's startup space — Thursday evening is a good room to be in." },
            { "speaker": "Kairo", "text": "RSVP in the card. Don't leave it late." }
          ]
        }
      }
    },
    {
      "event_type_id": "family_kids_saturday",
      "name": "Kids Saturday activity",
      "description": "Structured activities for ages 5–12, drop-off friendly",
      "category": "Family & kids",
      "subcategory": "Children's activities",
      "timing_pattern": "recurring",
      "typical_timing": "Saturdays, 9am–12pm",
      "urgency_level": "low",
      "urgency_label": "Every Saturday",
      "urgency_color": "#EAF3DE",
      "urgency_text_color": "#3B6D11",
      "category_color": "#378ADD",
      "category_bg": "#E6F1FB",
      "default_voice_mode": "warm_hype",
      "cta": "Tap → book their spot",
      "tags": ["kids", "family", "indoor/outdoor", "recurring", "ages 5-12"],
      "audience": ["parents", "families", "children"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "Parents — Saturday morning sorted. Kids activity session, structured, fun, and crucially: three hours where someone else is in charge of the energy." },
            { "speaker": "Kairo", "text": "You're welcome." },
            { "speaker": "Nia", "text": "You're so welcome." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Kids activity Saturday morning. Three hours. Structured fun." },
            { "speaker": "Nia", "text": "For the kids." },
            { "speaker": "Kairo", "text": "For the kids. But also, mathematically, for the parents." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "If you've got kids between 5 and 12 and Saturday mornings feel chaotic — there's a weekly activity session that gives them something real to do and gives you a moment." },
            { "speaker": "Kairo", "text": "Tap to book their spot." }
          ]
        }
      }
    },
    {
      "event_type_id": "seasonal_christmas_market",
      "name": "Christmas market",
      "description": "Annual festive market, food, gifts, live music",
      "category": "Seasonal & holiday",
      "subcategory": "Christmas",
      "timing_pattern": "seasonal",
      "typical_timing": "December 1–24, daily",
      "urgency_level": "low",
      "urgency_label": "Running all December",
      "urgency_color": "#EAF3DE",
      "urgency_text_color": "#3B6D11",
      "category_color": "#E24B4A",
      "category_bg": "#FCEBEB",
      "default_voice_mode": "warm_hype",
      "cta": "Tap → stall map + opening hours",
      "tags": ["free entry", "family", "outdoor", "seasonal", "annual"],
      "audience": ["families", "shoppers", "all ages"],
      "scripts": {
        "warm_hype": {
          "voice_mode": "warm_hype",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "The Christmas market is officially on and I know Kairo is going to say something measured but I want it on record that I am fully, unashamedly excited." },
            { "speaker": "Kairo", "text": "I'm cautiously festive." },
            { "speaker": "Nia", "text": "That's something." }
          ]
        },
        "dry_wit": {
          "voice_mode": "dry_wit",
          "lead_mc": "Kairo",
          "lines": [
            { "speaker": "Kairo", "text": "Christmas market opened. Running all month. Tap for the stall map so you don't spend forty minutes walking in the wrong direction like last year." },
            { "speaker": "Nia", "text": "That was one time." },
            { "speaker": "Kairo", "text": "Every year." }
          ]
        },
        "real_talk": {
          "voice_mode": "real_talk",
          "lead_mc": "Nia",
          "lines": [
            { "speaker": "Nia", "text": "The market's on — if you're buying gifts and you'd rather put money into local hands than online carts, this is a genuinely good option. Running daily through the 24th." },
            { "speaker": "Kairo", "text": "Map in the card." }
          ]
        }
      }
    }
  ]
}