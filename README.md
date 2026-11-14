# Orbal Save Editor Online
List of supported games:
- Trails in the Sky FC PSP
- Trails in the Sky FC Evolution
- Trails in the Sky SC PSP
- Trails in the Sky SC Evolution

An online save editor for the Trails series also known as Kiseki series in the wider The Legend of Heroes / Eiyuu Densetsu series.

Currently focusing on the Trails in the Sky / Sora no Kiseki Trilogy because I just got into the series.

I'm playing Sky FC Evo but after inspecting PC and PSP Sky FC save files it turned out PC is radically different from PSP/Evo and Evo is just an extension of the PSP save file meaning I can support both.
Unlike my Kingdom Hearts Save Editor project here I started to discover every single field myself for Evolution which seemed to apply to PSP as well. Fortunately the PSP dictionary data is available in the RA Code Notes. The memory addresses though don't seem to line up with file offsets which is sad.

# Features
## Sky FC PSP & Evo features
- Support for both vanilla PSP and Evolution save files.
- Evolution to PSP Downgrade:
    1. Load an Evo save file in Sky FC Evo mode.
    2. Remove equipped Evo exlcusive quartzes and equipment because you can't remove them ingame.
    3. You can keep them in your inventory instead.
    4. While your Evo save is loaded change Select Game to Sky FC PSP.
    5. Click on Save.
    - Known Data Loss:
        - Message Log
        - Evo exclusive Combat Notebook statistics listed below.
- General:
    - Playtime: Hours, minutes, seconds
    - Difficulty
    - Party: 8 slots
    - Mira
- Characters:
    - Stats:
        - Level & EXP
        - HP & Max HP
        - EP & Max EP
        - CP & possible Max CP
        - STR & DEF
        - ATS & ADF
        - SPD & MOV
        - DEX & AGL
        - RNG
    - Equipment:
        - Weapon
        - Armor
        - Boots
        - Accessories
    - Orbment:
        - Equipped Quartzes
        - Slot Unlock State
        - Arts
    - Crafts:
        - Crafts: Craft, Unlock State, Price
        - S-Crafts
- Inventory:
    - Inventory Slots
    - Sepith
- Bracer Notebook:
    - Bracer Points (BP)
    - Quests:
        - State (Viewed, Accepted, Reported, Expired)
        - Displayed Bonus BP (Evo doesn't display it but PSP does)
        - Displayed Bonus Mira (modifies the displayed mira value)
        - Progress Flags (some of these are the Bonus BP flags)
        - I eventually want to label all progress flags but that's a low priority. I ask for your understanding that this is a huge task.
- Monster Guide:
    - Combat Notebook:
        - Battles Fought
        - Battles Won
        - Battles Lost
        - Battles Retreated From
        - Evo exclusives:
            - Enemies Defeated
            - S-Breaks Triggered
            - Pre-emptive Attacks
            - Surprise Attacks
            - Battles Retreated From (a 2nd field)
            - Number of Retries
- Recipe Book:
    - Recipes learned
    - Evo exclusive stats:
        - Sit-Down Meals Made
        - To-Go Meals Made
- Evolution Message Log:
    - 1024 entries but ingame only 999 of them are displayed.
    - Name of the speaker
    - 2 Message IDs

## Sky SC PSP & Evo features
- Support for both vanilla PSP and Evolution save files.
- Evolution to PSP Downgrade:
    1. Load an Evo save file in Sky SC Evo mode.
    2. Remove equipped Evo exlcusive quartzes and equipment because you can't remove them ingame.
    3. You can keep them in your inventory instead.
    4. While your Evo save is loaded change Select Game to Sky SC PSP.
    5. Click on Save.
    - Known Data Loss:
        - Message Log
        - Evo exclusive Combat Notebook statistics listed below.
- General:
    - Playtime: Hours, minutes, seconds
    - Difficulty
    - Party: 8 slots
    - Mira
    - Casino Medals
- Characters:
    - Stats:
        - Level & EXP
        - HP & Max HP
        - EP & Max EP
        - CP & possible Max CP
        - STR & DEF
        - ATS & ADF
        - SPD & MOV
        - DEX & AGL
        - RNG
    - Equipment:
        - Weapon
        - Armor
        - Boots
        - Accessories
    - Orbment:
        - Equipped Quartzes
        - Slot Level
        - Arts
    - Crafts:
        - Crafts: Craft, Unlock State, Price
        - S-Crafts
- Inventory:
    - Inventory Slots
    - Sepith
- Bracer Notebook:
    - Bracer Points (BP)
- Monster Guide:
    - Combat Notebook:
        - Battles Fought
        - Battles Won
        - Battles Lost
        - Battles Retreated From
        - Number of Retries
        - Evo exclusives:
            - Enemies Defeated
            - S-Breaks Triggered
            - Pre-emptive Attacks
            - Surprise Attacks
            - Battles Retreated From (a 2nd field)
            - Number of Retries (a 2nd field)
- Recipe Book:
    - Recipes learned
    - Evo exclusive stats:
        - Sit-Down Meals Made
        - To-Go Meals Made
- Fishing Book:
    - Fish size records
    - Spots the fish was caught recently. Ingame only 5 out of 16 slots are displayed.
    - Fish caught counters for each spot.
- Evolution Message Log:
    - 2048 entries but ingame only 2000 of them are displayed.
    - Name of the speaker
    - 2 Message IDs

# Documentation
For now, `skyfc_src/skyfc.js` and `skysc_src/skysc.js` double as save file documentations for the respective games. It's another long term goal to create user-friendly documentations.

# Known issues
- It's heavily work in progress so expect issues.
- There are placeholder tabs that won't show anything. This isn't a bug, they just aren't implemented yet.

# Special thanks
- unknowndatax: Ys VIII Save Editor for the Yamaneko Engine checksum algorithm
- This project wouldn't have come to light if I wasn't working on KHSE and KHSE Online so I include the KH thanks here
- Xeeynamo: [Kingdom Save Editor](https://github.com/Xeeynamo/KingdomSaveEditor) the main inspiration of the KHSE project
- [Game Tools Collection](https://github.com/RyudoSynbios/game-tools-collection/blob/master/src/lib/templates/kingdom-hearts-ps2) for an [online PS2 KH1 save editor](https://game-tools-collection.com/kingdom-hearts-ps2/save-editor) that provided lots of used info
- GICU for providing various [KH1 flags](https://github.com/gaithern/KH1FM-RANDOMIZER/blob/36569375fa6f12074e02f6a2b9b09175e76a53cf/Static%20Files/scripts/1fmRandoSendAPLocations.lua) like the treasure chests and other helps
- dedede123 & fungualtissue1230 for the PowerShell script to decrypt and encrypt the KH3 PC save files
- The OpenKH community for various helps including modding the KH games
- The RetroAchievements community for the Code Notes and the fun sets and not just the KH ones
- The [Kiseki Wiki](https://kiseki.fandom.com) for both being helpful with my runs and so I don't have type the quest progress flag labels myself.
