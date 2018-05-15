'use strict';
/*************************************************\
generated from arsdk-xml/xml/*.xml
generated by utils/convertSDK.js
generated on : 2/20/2017, 8:59:08 PM
\**************************************************/
const projects={
  "feature": {
    "info": {
      "id": "136",
      "name": "rc"
    },
    "details": "All commands/events related to Calibration and Mapping of RadioCommands",
    "enums": {
      "receiver_state": {
        "info": {
          "tagType": "enum",
          "name": "receiver_state"
        },
        "details": "RC Receiver state.",
        "connected": {
          "info": {
            "tagType": "value",
            "name": "connected"
          },
          "details": "RC drone receiver connected to a RC."
        },
        "disconnected": {
          "info": {
            "tagType": "value",
            "name": "disconnected"
          },
          "details": "RC drone receiver not connected to a RC."
        }
      },
      "channel_action": {
        "info": {
          "tagType": "enum",
          "name": "channel_action"
        },
        "details": "Channel action.",
        "invalid": {
          "info": {
            "tagType": "value",
            "name": "invalid"
          },
          "details": "Invalid/Unused channel."
        },
        "roll": {
          "info": {
            "tagType": "value",
            "name": "roll"
          },
          "details": "Roll axis channel."
        },
        "pitch": {
          "info": {
            "tagType": "value",
            "name": "pitch"
          },
          "details": "Pitch axis channel."
        },
        "yaw": {
          "info": {
            "tagType": "value",
            "name": "yaw"
          },
          "details": "Yaw axis channel."
        },
        "gaz": {
          "info": {
            "tagType": "value",
            "name": "gaz"
          },
          "details": "Gaz / Throttle / Altitude axis channel."
        },
        "takeoff_land": {
          "info": {
            "tagType": "value",
            "name": "takeoff_land"
          },
          "details": "Takeoff / Land channel."
        },
        "emergency": {
          "info": {
            "tagType": "value",
            "name": "emergency"
          },
          "details": "Emergency channel."
        },
        "return_home": {
          "info": {
            "tagType": "value",
            "name": "return_home"
          },
          "details": "Return Home channel."
        },
        "piloting_mode": {
          "info": {
            "tagType": "value",
            "name": "piloting_mode"
          },
          "details": "RC Piloting mode. Auto mode: used for doing flightplans and for assisted flying with a non_RC controller. Easy manual mode: used for assisted flying with a RC controller. Manual mode: used for non_assisted flying with a RC controller and for directly controlling the servomotors."
        },
        "take_control": {
          "info": {
            "tagType": "value",
            "name": "take_control"
          },
          "details": "RC take control. When take control is activated the RC controller, if available, becomes the main controller."
        }
      },
      "calibration_type": {
        "info": {
          "tagType": "enum",
          "name": "calibration_type"
        },
        "details": "Calibration type.",
        "none": {
          "info": {
            "tagType": "value",
            "name": "none"
          },
          "details": "No calibration."
        },
        "neutral": {
          "info": {
            "tagType": "value",
            "name": "neutral"
          },
          "details": "All neutral channels calibration."
        },
        "min_max": {
          "info": {
            "tagType": "value",
            "name": "min_max"
          },
          "details": "Min/Max specific channel calibration."
        }
      },
      "channel_type": {
        "info": {
          "tagType": "enum",
          "name": "channel_type"
        },
        "details": "Channel physical type.",
        "invalid": {
          "info": {
            "tagType": "value",
            "name": "invalid"
          },
          "details": "Invalid channel physical type."
        },
        "signed_axis": {
          "info": {
            "tagType": "value",
            "name": "signed_axis"
          },
          "details": "Signed axis type."
        },
        "unsigned_axis": {
          "info": {
            "tagType": "value",
            "name": "unsigned_axis"
          },
          "details": "Unsigned axis type."
        },
        "monostable_button": {
          "info": {
            "tagType": "value",
            "name": "monostable_button"
          },
          "details": "Monostable button type."
        },
        "bistable_button": {
          "info": {
            "tagType": "value",
            "name": "bistable_button"
          },
          "details": "Bistable button type."
        },
        "tristate_button": {
          "info": {
            "tagType": "value",
            "name": "tristate_button"
          },
          "details": "Tristate button type."
        },
        "rotary_button": {
          "info": {
            "tagType": "value",
            "name": "rotary_button"
          },
          "details": "Rotary button type."
        }
      }
    },
    "msgs": {
      "receiver_state": {
        "info": {
          "tagType": "evt",
          "name": "receiver_state",
          "id": "1"
        },
        "comment": {
          "info": {
            "title": "State of drone RC receiver",
            "desc": "State of drone RC receiver"
          }
        },
        "state": {
          "info": {
            "tagType": "arg",
            "name": "state",
            "type": "enum_receiver_state"
          },
          "details": "current state."
        },
        "protocol": {
          "info": {
            "tagType": "arg",
            "name": "protocol",
            "type": "string"
          },
          "details": "Protocol used by RC."
        },
        "enabled": {
          "info": {
            "tagType": "arg",
            "name": "enabled",
            "type": "u8"
          },
          "details": "1 if enabled, 0 otherwise. If enabled, drone will apply values sent by RC receiver."
        }
      },
      "monitor_channels": {
        "info": {
          "tagType": "cmd",
          "name": "monitor_channels",
          "id": "2"
        },
        "comment": {
          "info": {
            "title": "Monitor RC channels",
            "desc": "Enable or Disable RC channels monitoring. \\n If enable, drone will send periodically rc channel value \\n events."
          }
        },
        "enable": {
          "info": {
            "tagType": "arg",
            "name": "enable",
            "type": "u8"
          },
          "details": "1 for enable / 0 to disable"
        }
      },
      "channels_monitor_state": {
        "info": {
          "tagType": "evt",
          "name": "channels_monitor_state",
          "id": "3"
        },
        "comment": {
          "info": {
            "title": "RC channels monitor state",
            "desc": "RC Channel monitor state sent by drone"
          }
        },
        "state": {
          "info": {
            "tagType": "arg",
            "name": "state",
            "type": "u8"
          },
          "details": "1 if enabled, 0 if disabled"
        }
      },
      "channel_value": {
        "info": {
          "tagType": "evt",
          "name": "channel_value",
          "id": "4",
          "type": "MAP_ITEM_id"
        },
        "comment": {
          "info": {
            "title": "RC channels value",
            "desc": "RC Channel value sent by drone"
          }
        },
        "id": {
          "info": {
            "tagType": "arg",
            "name": "id",
            "type": "u8"
          },
          "details": "RC channel id."
        },
        "action": {
          "info": {
            "tagType": "arg",
            "name": "action",
            "type": "enum_channel_action"
          },
          "details": "RC channel action."
        },
        "value": {
          "info": {
            "tagType": "arg",
            "name": "value",
            "type": "i16"
          },
          "details": "RC channel value."
        },
        "list_flags": {
          "info": {
            "tagType": "arg",
            "name": "list_flags",
            "type": "bitfield_u8_list_flags"
          },
          "details": "Item attribute Bitfield. First: indicate it's the first element of the list. Last: indicate it's the last element of the list."
        }
      },
      "calibration_state": {
        "info": {
          "tagType": "evt",
          "name": "calibration_state",
          "id": "5"
        },
        "comment": {
          "info": {
            "title": "Channels calibration state",
            "desc": "RC Channels calibration state sent by drone."
          }
        },
        "calibration_type": {
          "info": {
            "tagType": "arg",
            "name": "calibration_type",
            "type": "enum_calibration_type"
          },
          "details": "Current calibration type set to 'none' if no calibration in progress."
        },
        "channel_action": {
          "info": {
            "tagType": "arg",
            "name": "channel_action",
            "type": "enum_channel_action"
          },
          "details": "Current channel action calibration Only used when calibration_type=min_max."
        },
        "required": {
          "info": {
            "tagType": "arg",
            "name": "required",
            "type": "bitfield_u32_channel_action"
          },
          "details": "bitfield of required channel actions. Neutral channels calibration is always required."
        },
        "calibrated": {
          "info": {
            "tagType": "arg",
            "name": "calibrated",
            "type": "bitfield_u32_channel_action"
          },
          "details": "bitfield of calibrated channel actions."
        },
        "neutral_calibrated": {
          "info": {
            "tagType": "arg",
            "name": "neutral_calibrated",
            "type": "u8"
          },
          "details": "1 if neutral channels are calibrated, 0 otherwise."
        }
      },
      "start_calibration": {
        "info": {
          "tagType": "cmd",
          "name": "start_calibration",
          "id": "6"
        },
        "comment": {
          "info": {
            "title": "Start a calibration",
            "desc": "Start a calibration."
          }
        },
        "calibration_type": {
          "info": {
            "tagType": "arg",
            "name": "calibration_type",
            "type": "enum_calibration_type"
          },
          "details": "Type of calibration."
        },
        "channel_action": {
          "info": {
            "tagType": "arg",
            "name": "channel_action",
            "type": "enum_channel_action"
          },
          "details": "Channel action. only used when calibration_type=min_max."
        },
        "channel_type": {
          "info": {
            "tagType": "arg",
            "name": "channel_type",
            "type": "enum_channel_type"
          },
          "details": "Channel type. only used when calibration_type=min_max."
        }
      },
      "receiver_quality": {
        "info": {
          "tagType": "evt",
          "name": "receiver_quality",
          "id": "7"
        },
        "comment": {
          "info": {
            "title": "RC signal quality level",
            "desc": "RC signal quality level"
          }
        },
        "level": {
          "info": {
            "tagType": "arg",
            "name": "level",
            "type": "u8"
          },
          "details": "Current RC signal quality level between 0 to 5."
        }
      },
      "invert_channel": {
        "info": {
          "tagType": "cmd",
          "name": "invert_channel",
          "id": "8"
        },
        "comment": {
          "info": {
            "title": "Invert a RC channel values",
            "desc": "Invert a RC channel values"
          }
        },
        "action": {
          "info": {
            "tagType": "arg",
            "name": "action",
            "type": "enum_channel_action"
          },
          "details": "Channel action."
        },
        "flag": {
          "info": {
            "tagType": "arg",
            "name": "flag",
            "type": "u8"
          },
          "details": "1 to invert channel 0 to restore channel."
        }
      },
      "abort_calibration": {
        "info": {
          "tagType": "cmd",
          "name": "abort_calibration",
          "id": "9"
        },
        "comment": {
          "info": {
            "title": "Abort current calibration",
            "desc": "Abort current calibration."
          }
        }
      },
      "reset_calibration": {
        "info": {
          "tagType": "cmd",
          "name": "reset_calibration",
          "id": "10"
        },
        "comment": {
          "info": {
            "title": "Reset calibration to default values",
            "desc": "Reset calibration to default values."
          }
        }
      },
      "enable_receiver": {
        "info": {
          "tagType": "cmd",
          "name": "enable_receiver",
          "id": "11"
        },
        "comment": {
          "info": {
            "title": "Enable RC receiver",
            "desc": "Enable or disable RC receiver. \\n If enable, drone will apply values sent by RC receiver."
          }
        },
        "enable": {
          "info": {
            "tagType": "arg",
            "name": "enable",
            "type": "u8"
          },
          "details": "1 for enable / 0 to disable"
        }
      },
      "channel_action_item": {
        "info": {
          "tagType": "evt",
          "name": "channel_action_item",
          "id": "12",
          "type": "MAP_ITEM_action"
        },
        "comment": {
          "info": {
            "title": "Channel action item",
            "desc": "Channel action supported by drone."
          }
        },
        "action": {
          "info": {
            "tagType": "arg",
            "name": "action",
            "type": "enum_channel_action"
          },
          "details": "Channel action."
        },
        "supported_type": {
          "info": {
            "tagType": "arg",
            "name": "supported_type",
            "type": "bitfield_u32_channel_type"
          },
          "details": "Bitfield of supported channel types."
        },
        "calibrated_type": {
          "info": {
            "tagType": "arg",
            "name": "calibrated_type",
            "type": "enum_channel_type"
          },
          "details": "Calibrated action channel type (none if not calibrated)."
        },
        "inverted": {
          "info": {
            "tagType": "arg",
            "name": "inverted",
            "type": "u8"
          },
          "details": "1 if inverted, 0 otherwise."
        }
      }
    }
  },
  "lookup": {}
}

module.exports=projects;
              