const Crc = require("./crc");
const Decoder = require("./decoder");
const Encoder = require("./encoder");
const message_impl = require("./messages_impl");

function encodeZonesViolationCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesViolation);
}

function encodeZonesTamperCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesTamper);
}

//-----<tpatora>----------

function encodeZonesAlarmCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesAlarm);
}

function encodeZonesTamperAlarmCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesTamperAlarm);
}

function encodeZonesAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesAlarmMemory);
}

function encodeZonesTamperAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesTamperAlarmMemory);
}

function encodeZonesBypassCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesBypass);
}

function encodeZonesNoViolationTroubleCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesNoViolationTrouble);
}

function encodeZonesLongViolationTroubleCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesLongViolationTrouble);
}

function encodeArmedPartitionsSuppressedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ArmedPartitionsSuppressed);
}

function encodeArmedPartitionsReallyCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ArmedPartitionsReally);
}

function encodePartitionsArmedInMode2Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsArmedInMode2);
}

function encodePartitionsArmedInMode3Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsArmedInMode3);
}

function encodePartitionsWith1stCodeEnteredCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsWith1stCodeEntered);
}

function encodePartitionsEntryTimeCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsEntryTime);
}

function encodePartitionsExitTimeMore10sCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsExitTimeMore10s);
}

function encodePartitionsExitTimeLess10sCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsExitTimeLess10s);
}

function encodePartitionsTemporaryBlockedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsTemporaryBlocked);
}

function encodePartitionsBlockedForGuardRoundCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsBlockedForGuardRound);
}

function encodePartitionsAlarmCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsAlarm);
}

function encodePartitionsFireAlarmCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsFireAlarm);
}

function encodePartitionsAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsAlarmMemory);
}

function encodePartitionsFireAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsFireAlarmMemory);
}

//-----</tpatora>----------


function encodeOutputsStateCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.OutputsState);
}

function encodeNewDataCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.NewData);
}

//-----<tpatora>----------
function encodeDoorsOpenedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.DoorsOpened);
}

function encodeDoorsOpenedLongCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.DoorsOpenedLong);
}

function encodeRTCandBasicStatusBitsCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.RTCandBasicStatusBits);
}

function encodeTroublesPart1Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart1);
}

function encodeTroublesPart2Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart2);
}

function encodeTroublesPart3Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart3);
}

function encodeTroublesPart4Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart4);
}

function encodeTroublesPart5Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart5);
}

function encodeTroublesMemoryPart1Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart1);
}

function encodeTroublesMemoryPart2Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart2);
}

function encodeTroublesMemoryPart3Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart3);
}

function encodeTroublesMemoryPart4Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart4);
}

function encodeTroublesMemoryPart5Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart5);
}

function encodePartitionsWithViolatedZonesCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsWithViolatedZones);
}

function encodeZonesIsolateCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesIsolate);
}

function encodePartitionsWithVerifiedAlarmsCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsWithVerifiedAlarms);
}

function encodeZonesMaskedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesMasked);
}

function encodeZonesMaskedMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesMaskedMemory);
}

function encodePartitionsArmedInMode1Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsArmedInMode1);
}

function encodePartitionsWithWarningAlarmsCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsWithWarningAlarms);
}

function encodeTroublesPart6Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart6);
}

function encodeTroublesPart7Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart7);
}

function encodeTroublesMemoryPart6Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart6);
}

function encodeTroublesMemoryPart7Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart7);
}

function encodeTroublesPart8Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesPart8);
}

function encodeTroublesMemoryPart8Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.TroublesMemoryPart8);
}

function encodeArmInMode0Command(prefixAndUserCode, partitions) {
  console.log(prefixAndUserCode + " partitions="+partitions);
  
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ArmInMode0,
    prefixAndUserCode,
    partitions
  );
}

function encodeArmInMode1Command(prefixAndUserCode, arm_in_mode1) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ArmInMode1,
    prefixAndUserCode,
    arm_in_mode1
  );
}

function encodeArmInMode2Command(prefixAndUserCode, arm_in_mode2) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ArmInMode2,
    prefixAndUserCode,
    arm_in_mode2
  );
}

function encodeArmInMode3Command(prefixAndUserCode, arm_in_mode3) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ArmInMode3,
    prefixAndUserCode,
    arm_in_mode3
  );
}

function encodeDisarmCommand(prefixAndUserCode, disarm) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.Disarm,
    prefixAndUserCode,
    disarm
  );
}

function encodeClearAlarmCommand(prefixAndUserCode, clear_alarm) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ClearAlarm,
    prefixAndUserCode,
    clear_alarm
  );
}

function encodeForceArmInMode0Command(prefixAndUserCode, force_arm_in_mode0) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ForceArmInMode0,
    prefixAndUserCode,
    force_arm_in_mode0
  );
}

function encodeForceArmInMode1Command(prefixAndUserCode, force_arm_in_mode1) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ForceArmInMode1,
    prefixAndUserCode,
    force_arm_in_mode1
  );
}

function encodeForceArmInMode2Command(prefixAndUserCode, force_arm_in_mode2) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ForceArmInMode2,
    prefixAndUserCode,
    force_arm_in_mode2
  );
}

function encodeForceArmInMode3Command(prefixAndUserCode, force_arm_in_mode3) {
  return message_impl.encodeChangePartitionsCommand(
    message_impl.Commands.ForceArmInMode3,
    prefixAndUserCode,
    force_arm_in_mode3
  );
}

function encodeZonesBypassUserCommand(prefixAndUserCode, zones_bypass) {
  return message_impl.encodeChangeZonesCommand(
    message_impl.Commands.ZonesBypassUser,
    prefixAndUserCode,
    zones_bypass
  );
}

function encodeZonesUnbypassCommand(prefixAndUserCode, zones_unbypass) {
  console.log("encodeZonesUnbypassCommand function zones_unbypass:" + zones_unbypass);
  return message_impl.encodeChangeZonesCommand(
    message_impl.Commands.ZonesUnbypass,
    prefixAndUserCode,
    zones_unbypass
  );
}

function encodeOpenDoorCommand(prefixAndUserCode, open_door) {
  return message_impl.encodeChangeOutputsCommand(
    message_impl.Commands.OpenDoor,
    prefixAndUserCode,
    open_door
  );
}

function encodeZonesIsolateCommand(prefixAndUserCode, zones_isolate) {
  return message_impl.encodeChangeZonesCommand(
    message_impl.Commands.ZonesIsolate,
    prefixAndUserCode,
    zones_isolate
  );
}

//-----</tpatora>----------

function encodeOutputsOnCommand(prefixAndUserCode, outputs) {
  return message_impl.encodeChangeOutputsCommand(
    message_impl.Commands.OutputsOn,
    prefixAndUserCode,
    outputs
  );
}


function encodeOutputsOffCommand(prefixAndUserCode, outputs) {
  return message_impl.encodeChangeOutputsCommand(
    message_impl.Commands.OutputsOff,
    prefixAndUserCode,
    outputs
  );
}

function encodeOutputsSwitchCommand(prefixAndUserCode, outputs) {
  return message_impl.encodeChangeOutputsCommand(
    message_impl.Commands.OutputsSwitch,
    prefixAndUserCode,
    outputs
  );
}

class FlagArrayAnswer {
  constructor(length, longLength = undefined) {
    this._length = length;
    this._longLength = longLength;
    this._flags = [];
  }

  decode(frame) {
    if (
      frame.length != this._length &&
      typeof this._longLength != undefined &&
      frame.length != this._longLength
    ) {
      return false;
    }

    this._flags = new Array();
    for (const byte of frame) {
      for (let i = 0; i < 8; ++i) {
        this._flags.push((byte & (1 << i)) != 0);
      }
    }

    return true;
  }

  get flags() {
    return [...this._flags];
  }
}

class ZonesViolationAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesTamperAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

//-----<tpatora>----------
class ZonesTamperAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}
class ZonesTamperAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesBypassAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesNoViolationTroubleAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesLongViolationTroubleAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ArmedPartitionsSuppressedAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class ArmedPartitionsReallyAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsArmedInMode2Answer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsArmedInMode3Answer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsWith1stCodeEnteredAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsEntryTimeAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsExitTimeMore10sAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsExitTimeLess10sAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsTemporaryBlockedAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsBlockedForGuardRoundAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsFireAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsFireAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class RTCandBasicStatusBitsAnswer extends FlagArrayAnswer {
  constructor() {
    super(9);
  }
}

class TroublesPart1Answer extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesPart2Answer extends FlagArrayAnswer {
  constructor() {
    super(26);
  }
}

class TroublesPart3Answer extends FlagArrayAnswer {
  constructor() {
    super(60);
  }
}

class TroublesPart4Answer extends FlagArrayAnswer {
  constructor() {
    super(30);
  }
}

class TroublesPart5Answer extends FlagArrayAnswer {
  constructor() {
    super(31);
  }
}

class TroublesMemoryPart1Answer extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesMemoryPart2Answer extends FlagArrayAnswer {
  constructor() {
    super(39);
  }
}

class TroublesMemoryPart3Answer extends FlagArrayAnswer {
  constructor() {
    super(60);
  }
}

class TroublesMemoryPart4Answer extends FlagArrayAnswer {
  constructor() {
    super(30);
  }
}

class TroublesMemoryPart5Answer extends FlagArrayAnswer {
  constructor() {
    super(48);
  }
}

class PartitionsWithViolatedZonesAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class ZonesIsolateAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class PartitionsWithVerifiedAlarmsAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class ZonesMaskedAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesMaskedMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class PartitionsArmedInMode1Answer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsWithWarningAlarmsAnswer extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class TroublesPart6Answer extends FlagArrayAnswer {
  constructor() {
    super(45);
  }
}

class TroublesPart7Answer extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesMemoryPart6Answer extends FlagArrayAnswer {
  constructor() {
    super(45);
  }
}

class TroublesMemoryPart7Answer extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesPart8Answer extends FlagArrayAnswer {
  constructor() {
    super(64);
  }
}

class TroublesMemoryPart8Answer extends FlagArrayAnswer {
  constructor() {
    super(64);
  }
}
//-----</tpatora>----------

class OutputsStateAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

//-----<tpatora>----------
class  DoorsOpenedAnswer extends FlagArrayAnswer {
  constructor() {
    super(16,32);
  }
}
class  DoorsOpenedLongAnswer extends FlagArrayAnswer {
  constructor() {
    super(8);
  }
}

class ControlCommandAnswer extends FlagArrayAnswer {
  constructor() {
    super(1);
  }
}

//-----</tpatora>----------

class NewDataAnswer extends FlagArrayAnswer {
  constructor() {
    super(5);
  }

  zonesAlarmChanged() {
    return this._flags[message_impl.Commands.ZonesAlarm];
  }

  zonesViolationChanged() {
    return this._flags[message_impl.Commands.ZonesViolation];
  }

  zonesTamperChanged() {
    return this._flags[message_impl.Commands.ZonesTamper];
  }

  outputsStateChanged() {
    return this._flags[message_impl.Commands.OutputsState];
  }
}

function decodeMessage(frame) {
	
  const decoder = new Decoder();
  let decoded = false;
  for (const b of frame.values()) {
    if (decoder.addByte(b)) {
      decoded = true;
      break;
    }
  }

  if (!decoded) {
    return null;
  }

  const decodedFrame = decoder.frame();

  if (decodedFrame.length < 3) {
    return null;
  }

  const crc = new Crc();
  crc.addBytes(decodedFrame.subarray(0, decodedFrame.length - 2));

  if (
    crc.crc !=
    ((decodedFrame[decodedFrame.length - 2] << 8) |
      decodedFrame[decodedFrame.length - 1])
  ) {
    return null;
  }

  let message;
 
  switch (decodedFrame[0]) {
    case message_impl.Commands.ZonesViolation:
      message = new ZonesViolationAnswer();
      break;
	case message_impl.Commands.ZonesTamperAlarm:
      message = new ZonesTamperAlarmAnswer();
      break;		
    case message_impl.Commands.ZonesTamper:
      message = new ZonesTamperAnswer();
      break;
    case message_impl.Commands.OutputsState:
      message = new OutputsStateAnswer();
      break;
	//-----<tpatora>----------
    case message_impl.Commands.ControlCommand:
      message = new ControlCommandAnswer();
      break;
    case message_impl.Commands.TroublesMemoryPart8:
      message = new TroublesMemoryPart8Answer();
      break;
	case message_impl.Commands.TroublesPart8:
      message = new TroublesPart8Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart7:
	  message = new TroublesMemoryPart7Answer();
	  break;
	case message_impl.Commands.TroublesMemoryPart6:
	  message = new TroublesMemoryPart6Answer();
	  break;
	case message_impl.Commands.TroublesPart7:
	  message = new TroublesPart7Answer();
	  break;
	case message_impl.Commands.TroublesPart6:
	  message = new TroublesPart6Answer();
	  break;
	case message_impl.Commands.PartitionsWithWarningAlarms:
	  message = new PartitionsWithWarningAlarmsAnswer();
	  break;
	case message_impl.Commands.PartitionsArmedInMode1:
	  message = new PartitionsArmedInMode1Answer();
	  break;
	case message_impl.Commands.ZonesMaskedMemory:
	  message = new ZonesMaskedMemoryAnswer();
	  break;
	case message_impl.Commands.ZonesMasked:
	  message = new ZonesMaskedAnswer();
	  break;
	case message_impl.Commands.PartitionsWithVerifiedAlarms:
	  message = new PartitionsWithVerifiedAlarmsAnswer();
	  break;
	case message_impl.Commands.ZonesIsolate:
	  message = new ZonesIsolateAnswer();
	  break;
	case message_impl.Commands.PartitionsWithViolatedZones:
	  message = new PartitionsWithViolatedZonesAnswer();
	  break;
	case message_impl.Commands.TroublesMemoryPart5:
	  message = new TroublesMemoryPart5Answer();
	  break;
	case message_impl.Commands.TroublesMemoryPart4:
	  message = new TroublesMemoryPart4Answer();
	  break;
	case message_impl.Commands.TroublesMemoryPart3:
	  message = new TroublesMemoryPart3Answer();
	  break;
	case message_impl.Commands.TroublesMemoryPart2:
	  message = new TroublesMemoryPart2Answer();
	  break;
	case message_impl.Commands.TroublesMemoryPart1:
	  message = new TroublesMemoryPart1Answer();
	  break;
	case message_impl.Commands.TroublesPart5:
	  message = new TroublesPart5Answer();
	  break;
	case message_impl.Commands.TroublesPart4:
	  message = new TroublesPart4Answer();
	  break;
	case message_impl.Commands.TroublesPart3:
	  message = new TroublesPart3Answer();
	  break;
	case message_impl.Commands.TroublesPart2:
	  message = new TroublesPart2Answer();
	  break;
	case message_impl.Commands.TroublesPart1:
	  message = new TroublesPart1Answer();
	  break;
	case message_impl.Commands.RTCandBasicStatusBits:
	  message = new RTCandBasicStatusBitsAnswer();
	  break;
	case message_impl.Commands.DoorsOpenedLong:
	  message = new DoorsOpenedLongAnswer();
	  break;
	case message_impl.Commands.DoorsOpened:
	  message = new DoorsOpenedAnswer();
	  break;
	case message_impl.Commands.PartitionsFireAlarmMemory:
	  message = new PartitionsFireAlarmMemoryAnswer();
	  break;
	case message_impl.Commands.PartitionsAlarmMemory:
	  message = new PartitionsAlarmMemoryAnswer();
	  break;
	case message_impl.Commands.PartitionsFireAlarm:
	  message = new PartitionsFireAlarmAnswer();
	  break;
	case message_impl.Commands.PartitionsAlarm:
	  message = new PartitionsAlarmAnswer();
	  break;
	case message_impl.Commands.PartitionsBlockedForGuardRound:
	  message = new PartitionsBlockedForGuardRoundAnswer();
	  break;
	case message_impl.Commands.PartitionsTemporaryBlocked:
	  message = new PartitionsTemporaryBlockedAnswer();
	  break;
	case message_impl.Commands.PartitionsExitTimeLess10s:
	  message = new PartitionsExitTimeLess10sAnswer();
	  break;
	case message_impl.Commands.PartitionsExitTimeMore10s:
	  message = new PartitionsExitTimeMore10sAnswer();
	  break;
	case message_impl.Commands.PartitionsEntryTime:
	  message = new PartitionsEntryTimeAnswer();
	  break;
	case message_impl.Commands.PartitionsWith1stCodeEntered:
	  message = new PartitionsWith1stCodeEnteredAnswer();
	  break;
	case message_impl.Commands.PartitionsArmedInMode3:
	  message = new PartitionsArmedInMode3Answer();
	  break;
	case message_impl.Commands.PartitionsArmedInMode2:
	  message = new PartitionsArmedInMode2Answer();
	  break;
	case message_impl.Commands.ArmedPartitionsReally:
	  message = new ArmedPartitionsReallyAnswer();
	  break;
	case message_impl.Commands.ArmedPartitionsSuppressed:
	  message = new ArmedPartitionsSuppressedAnswer();
	  break;
	case message_impl.Commands.ZonesLongViolationTrouble:
	  message = new ZonesLongViolationTroubleAnswer();
	  break;
	case message_impl.Commands.ZonesNoViolationTrouble:
	  message = new ZonesNoViolationTroubleAnswer();
	  break;
	case message_impl.Commands.ZonesBypass:
	  message = new ZonesBypassAnswer();
	  break;
	case message_impl.Commands.ZonesTamperAlarmMemory:
	  message = new ZonesTamperAlarmMemoryAnswer();
	  break;
	case message_impl.Commands.ZonesAlarmMemory:
	  message = new ZonesAlarmMemoryAnswer();
	  break;
	case message_impl.Commands.ZonesTamperAlarm:
	  message = new ZonesTamperAlarmAnswer();
	  break;
	case message_impl.Commands.ZonesAlarm:
	  message = new ZonesAlarmAnswer();
	  break;	  
	//-----</tpatora>----------	
    case message_impl.Commands.NewData:
      message = new NewDataAnswer();
      break;
    default:
      return null;
  }

  if (message.decode(decodedFrame.subarray(1, decodedFrame.length - 2))) {
    return message;
  }
  return null;
}

module.exports = {
  decodeMessage,
  //-----<tpatora>----------
  encodeArmInMode0Command,
  encodeArmInMode1Command, 
  encodeArmInMode2Command, 
  encodeArmInMode3Command, 
  encodeDisarmCommand,
  encodeForceArmInMode0Command,
  encodeForceArmInMode1Command,
  encodeForceArmInMode2Command,
  encodeForceArmInMode3Command,  
  encodeZonesBypassUserCommand,
  encodeZonesUnbypassCommand,
  encodeOpenDoorCommand,
  encodeZonesIsolateCommand,
  //-----</tpatora>----------
  encodeNewDataCommand,
  encodeOutputsOffCommand,
  encodeOutputsOnCommand,
  encodeOutputsStateCommand,
  encodeOutputsSwitchCommand,
  //-----<tpatora>----------
  encodeTroublesMemoryPart8Command, 
  encodeTroublesPart8Command, 
  encodeTroublesMemoryPart7Command, 
  encodeTroublesMemoryPart6Command, 
  encodeTroublesPart7Command, 
  encodeTroublesPart6Command, 
  encodePartitionsWithWarningAlarmsCommand, 
  encodePartitionsArmedInMode1Command, 
  encodeZonesMaskedMemoryCommand, 
  encodeZonesMaskedCommand, 
  encodePartitionsWithVerifiedAlarmsCommand, 
  encodeZonesIsolateCommand, 
  encodePartitionsWithViolatedZonesCommand, 
  encodeTroublesMemoryPart5Command, 
  encodeTroublesMemoryPart4Command, 
  encodeTroublesMemoryPart3Command, 
  encodeTroublesMemoryPart2Command, 
  encodeTroublesMemoryPart1Command, 
  encodeTroublesPart5Command, 
  encodeTroublesPart4Command, 
  encodeTroublesPart3Command, 
  encodeTroublesPart2Command, 
  encodeTroublesPart1Command, 
  encodeRTCandBasicStatusBitsCommand, 
  encodeDoorsOpenedLongCommand, 
  encodeDoorsOpenedCommand, 
  encodePartitionsFireAlarmMemoryCommand, 
  encodePartitionsAlarmMemoryCommand, 
  encodePartitionsFireAlarmCommand, 
  encodePartitionsAlarmCommand, 
  encodePartitionsBlockedForGuardRoundCommand, 
  encodePartitionsTemporaryBlockedCommand, 
  encodePartitionsExitTimeLess10sCommand, 
  encodePartitionsExitTimeMore10sCommand, 
  encodePartitionsEntryTimeCommand, 
  encodePartitionsWith1stCodeEnteredCommand,
  encodePartitionsArmedInMode3Command,  
  encodePartitionsArmedInMode2Command,  
  encodeArmedPartitionsReallyCommand,  
  encodeArmedPartitionsSuppressedCommand,   
  encodeZonesLongViolationTroubleCommand,  
  encodeZonesNoViolationTroubleCommand,  
  encodeZonesBypassCommand,  
  encodeZonesTamperAlarmMemoryCommand,  
  encodeZonesAlarmMemoryCommand, 
  encodeZonesTamperAlarmCommand,
  encodeZonesAlarmCommand,  
  //-----</tpatora>----------
  encodeZonesTamperCommand,
  encodeZonesViolationCommand,
  NewDataAnswer,
  OutputsStateAnswer,
  //-----<tpatora>----------
  ControlCommandAnswer, 
  TroublesMemoryPart8Answer,
  TroublesPart8Answer,
  TroublesMemoryPart7Answer,
  TroublesMemoryPart6Answer,
  TroublesPart7Answer,
  TroublesPart6Answer,
  PartitionsWithWarningAlarmsAnswer,
  PartitionsArmedInMode1Answer,
  ZonesMaskedMemoryAnswer,
  ZonesMaskedAnswer,
  PartitionsWithVerifiedAlarmsAnswer,
  ZonesIsolateAnswer,
  PartitionsWithViolatedZonesAnswer,
  TroublesMemoryPart5Answer,
  TroublesMemoryPart4Answer,
  TroublesMemoryPart3Answer,
  TroublesMemoryPart2Answer,
  TroublesMemoryPart1Answer,
  TroublesPart5Answer,
  TroublesPart4Answer,
  TroublesPart3Answer,
  TroublesPart2Answer,
  TroublesPart1Answer,
  RTCandBasicStatusBitsAnswer,
  DoorsOpenedLongAnswer,
  DoorsOpenedAnswer,
  PartitionsFireAlarmMemoryAnswer,
  PartitionsAlarmMemoryAnswer,
  PartitionsFireAlarmAnswer,
  PartitionsAlarmAnswer,
  PartitionsBlockedForGuardRoundAnswer,
  PartitionsTemporaryBlockedAnswer,
  PartitionsExitTimeLess10sAnswer,
  PartitionsExitTimeMore10sAnswer,
  PartitionsEntryTimeAnswer,
  PartitionsWith1stCodeEnteredAnswer,
  PartitionsArmedInMode3Answer,
  PartitionsArmedInMode2Answer,
  ArmedPartitionsReallyAnswer,
  ArmedPartitionsSuppressedAnswer,
  ZonesLongViolationTroubleAnswer,
  ZonesNoViolationTroubleAnswer,
  ZonesBypassAnswer,
  ZonesTamperAlarmMemoryAnswer,
  ZonesAlarmMemoryAnswer,
  ZonesTamperAlarmAnswer,
  ZonesAlarmAnswer,
  //-----</tpatora>----------
  ZonesTamperAnswer,
  ZonesViolationAnswer,
};
