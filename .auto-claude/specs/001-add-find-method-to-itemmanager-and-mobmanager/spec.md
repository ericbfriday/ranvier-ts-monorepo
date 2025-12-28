# Add find() method to ItemManager and MobManager

## Overview

Add a find(search, predicate?) method to ItemManager and MobManager following the established pattern from SkillManager and ChannelManager. This enables searching for items/NPCs by partial name match with optional filtering.

## Rationale

SkillManager has find(search, includePassive) for prefix-matching skills. ChannelManager has find(search) for prefix-matching channels. PlayerManager has filter(predicate) for complex searches. ItemManager and MobManager lack these search capabilities, forcing bundle code to manually iterate. The pattern is well-established and should be consistent across all managers.

---
*This spec was created from ideation and is pending detailed specification.*
