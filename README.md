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

For both Sky FC Evo and Sky SC Evo the save files can be downgraded for the PSP versions. This save editor currently can't do this but I want to emphasize it's possible.

# Features
## Sky FC PSP & Evo features
- Support for both vanilla PSP and Evolution save files.
- Playtime: Hours, minutes, seconds
- Difficulty
- Party
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
        - Evo exclusives:
            - Enemies Defeated
            - S-Breaks Triggered
            - Pre-emptive Attacks
            - Surprise Attacks
            - Battles Retreated From (a 2nd field)
            - Number of Retries
- Evolution Recipe Book:
    - Sit-Down Meals Made
    - To-Go Meals Made
- Evolution Message Log:
    - 1024 entries but ingame only the first 999 are displayed.
    - Name of the speaker
    - 2 Message IDs

## Sky SC PSP & Evo features
- Support for both vanilla PSP and Evolution save files.
- Playtime: Hours, minutes, seconds
- Difficulty
- Party
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
- Evolution Recipe Book:
    - Sit-Down Meals Made
    - To-Go Meals Made
- Evolution Message Log:
    - 2048 entries but ingame less might be displayed.
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
