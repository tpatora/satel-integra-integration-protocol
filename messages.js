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

function encodeArmedPartitionSuppressedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ArmedPartitionSuppressed);
}

function encodeArmedPartitionReallyCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ArmedPartitionReally);
}

function encodePartitionArmedInMode2Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionArmedInMode2);
}

function encodePartitionArmedInMode3Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionArmedInMode3);
}

function encodePartitionWith1stCodeEnteredCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionWith1stCodeEntered);
}

function encodePartitionEntryTimeCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionEntryTime);
}

function encodePartitionExitTimeMore10sCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionExitTimeMore10s);
}

function encodePartitionExitTimeLess10sCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionExitTimeLess10s);
}

function encodePartitionTemporaryBlockedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionTemporaryBlocked);
}

function encodePartitionBlockedForGuardRoundCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionBlockedForGuardRound);
}

function encodePartitionAlarmCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionAlarm);
}

function encodePartitionFireAlarmCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionFireAlarm);
}

function encodePartitionAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionAlarmMemory);
}

function encodePartitionFireAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionFireAlarmMemory);
}

function encodeOutputsStateCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.OutputsState);
}

function encodeOutputsState256Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.OutputsState256);
}

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

function encodeZonesIsolate256Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesIsolate256);
}

function encodePartitionsWithVerifiedAlarmsCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.PartitionsWithVerifiedAlarms);
}

function encodeZonesMaskedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesMasked);
}

function encodeZonesMasked256Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesMasked256);
}

function encodeZonesMaskedMemoryCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesMaskedMemory);
}

function encodeZonesMaskedMemory256Command() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesMaskedMemory256);
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

function encodeNewDataCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.NewData);
}

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
    super(16,32);
  }
}

class ZonesTamperAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesTamperAlarm extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesAlarmMemory extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesTamperAlarmMemory extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesBypass extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesBypass256 extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesNoViolationTrouble extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesLongViolationTrouble extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ArmedPartitionSuppressed extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class ArmedPartitionReally extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionArmedInMode2 extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionArmedInMode3 extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionWith1stCodeEntered extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionEntryTime extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionExitTimeMore10s extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionExitTimeLess10s extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionTemporaryBlocked extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionBlockedForGuardRound extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionAlarm extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionFireAlarm extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionAlarmMemory extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionFireAlarmMemory extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class RTCandBasicStatusBits extends FlagArrayAnswer {
  constructor() {
    super(9);
  }
}

class TroublesPart1 extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesPart2 extends FlagArrayAnswer {
  constructor() {
    super(26);
  }
}

class TroublesPart3 extends FlagArrayAnswer {
  constructor() {
    super(60);
  }
}

class TroublesPart4 extends FlagArrayAnswer {
  constructor() {
    super(30);
  }
}

class TroublesPart5 extends FlagArrayAnswer {
  constructor() {
    super(31);
  }
}

class TroublesMemoryPart1 extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesMemoryPart2 extends FlagArrayAnswer {
  constructor() {
    super(39);
  }
}

class TroublesMemoryPart3 extends FlagArrayAnswer {
  constructor() {
    super(60);
  }
}

class TroublesMemoryPart4 extends FlagArrayAnswer {
  constructor() {
    super(30);
  }
}

class TroublesMemoryPart5 extends FlagArrayAnswer {
  constructor() {
    super(48);
  }
}

class PartitionsWithViolatedZones extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class ZonesIsolate extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesIsolate256 extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class PartitionsWithVerifiedAlarms extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class ZonesMasked extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class ZonesMaskedMemory extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class PartitionsArmedInMode1 extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class PartitionsWithWarningAlarms extends FlagArrayAnswer {
  constructor() {
    super(4);
  }
}

class TroublesPart6 extends FlagArrayAnswer {
  constructor() {
    super(45);
  }
}

class TroublesPart7 extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesMemoryPart6 extends FlagArrayAnswer {
  constructor() {
    super(45);
  }
}

class TroublesMemoryPart7 extends FlagArrayAnswer {
  constructor() {
    super(47);
  }
}

class TroublesPart8 extends FlagArrayAnswer {
  constructor() {
    super(64);
  }
}

class TroublesMemoryPart8 extends FlagArrayAnswer {
  constructor() {
    super(64);
  }
}

class OutputsStateAnswer extends FlagArrayAnswer {
  constructor() {
    super(16, 32);
  }
}

class NewDataAnswer extends FlagArrayAnswer {
  constructor() {
    super(5);
  }

  zonesViolationChanged() {
    return this._flags[message_impl.Commands.ZonesViolation];
  }

  zonesTamperChanged() {
    return this._flags[message_impl.Commands.ZonesTamper];
  }

  zonesAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.ZonesAlarmMemory];
  }

  zonesTamperAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.ZonesTamperAlarmMemory];
  }

  zonesBypassChanged() {
    return this._flags[message_impl.Commands.ZonesBypass];
  }

  zonesNoViolationTroubleChanged() {
    return this._flags[message_impl.Commands.ZonesNoViolationTrouble];
  }

  zonesLongViolationTroubleChanged() {
    return this._flags[message_impl.Commands.ZonesLongViolationTrouble];
  }

  armedPartitionSuppressedChanged() {
    return this._flags[message_impl.Commands.ArmedPartitionSuppressed];
  }

  armedPartitionReallyChanged() {
    return this._flags[message_impl.Commands.ArmedPartitionReally];
  }

  partitionArmedInMode2Changed() {
    return this._flags[message_impl.Commands.PartitionArmedInMode2];
  }

  partitionArmedInMode3Changed() {
    return this._flags[message_impl.Commands.PartitionArmedInMode3];
  }

  partitionWith1stCodeEnteredChanged() {
    return this._flags[message_impl.Commands.PartitionWith1stCodeEntered];
  }

  partitionEntryTimeChanged() {
    return this._flags[message_impl.Commands.PartitionEntryTime];
  }

  partitionExitTimeMore10sChanged() {
    return this._flags[message_impl.Commands.PartitionExitTimeMore10s];
  }

  partitionExitTimeLess10sChanged() {
    return this._flags[message_impl.Commands.PartitionExitTimeLess10s];
  }

  partitionTemporaryBlockedChanged() {
    return this._flags[message_impl.Commands.PartitionTemporaryBlocked];
  }

  partitionBlockedForGuardRoundChanged() {
    return this._flags[message_impl.Commands.PartitionBlockedForGuardRound];
  }

  partitionAlarmChanged() {
    return this._flags[message_impl.Commands.PartitionAlarm];
  }

  partitionFireAlarmChanged() {
    return this._flags[message_impl.Commands.PartitionFireAlarm];
  }

  partitionAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.PartitionAlarmMemory];
  }

  partitionFireAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.PartitionFireAlarmMemory];
  }
  
  doorsOpenedChanged() {
    return this._flags[message_impl.Commands.DoorsOpened];
  }
  
  doorsOpenedLongChanged() {
    return this._flags[message_impl.Commands.DoorsOpenedLong];
  }
  
  rTCandBasicStatusBitsChanged() {
    return this._flags[message_impl.Commands.RTCandBasicStatusBits];
  }
  
  troublesPart1Changed() {
    return this._flags[message_impl.Commands.TroublesPart1];
  }
  
  troublesPart2Changed() {
    return this._flags[message_impl.Commands.TroublesPart2];
  }

  troublesPart3Changed() {
    return this._flags[message_impl.Commands.TroublesPart3];
  }

  troublesPart4Changed() {
    return this._flags[message_impl.Commands.TroublesPart4];
  }

  troublesPart5Changed() {
    return this._flags[message_impl.Commands.TroublesPart5];
  }

  troublesMemoryPart1Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart1];
  }

  troublesMemoryPart2Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart2];
  }

  troublesMemoryPart3Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart3];
  }

  troublesMemoryPart4Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart4];
  }

  troublesMemoryPart5Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart5];
  }

  partitionsWithViolatedZonesChanged() {
    return this._flags[message_impl.Commands.PartitionsWithViolatedZones];
  }

  zonesIsolateChanged() {
    return this._flags[message_impl.Commands.ZonesIsolate];
  }

  partitionsWithVerifiedAlarmsChanged() {
    return this._flags[message_impl.Commands.PartitionsWithVerifiedAlarms];
  }

  zonesMaskedChanged() {
    return this._flags[message_impl.Commands.ZonesMasked];
  }

  zonesMaskedMemoryChanged() {
    return this._flags[message_impl.Commands.ZonesMaskedMemory];
  }

  partitionsArmedInMode1Changed() {
    return this._flags[message_impl.Commands.PartitionsArmedInMode1];
  }

  partitionsWithWarningAlarmsChanged() {
    return this._flags[message_impl.Commands.PartitionsWithWarningAlarms];
  }

  troublesPart6Changed() {
    return this._flags[message_impl.Commands.TroublesPart6];
  }
  
  troublesPart7Changed() {
    return this._flags[message_impl.Commands.TroublesPart7];
  }
  
  troublesMemoryPart6Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart6];
  }
  
  troublesMemoryPart7Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart7];
  }
  
  troublesPart8Changed() {
    return this._flags[message_impl.Commands.TroublesPart8];
  }
  
  troublesMemoryPart8Changed() {
    return this._flags[message_impl.Commands.TroublesMemoryPart8];
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
    case message_impl.Commands.ZonesTamper:
      message = new ZonesTamperAnswer();
      break;
    case message_impl.Commands.ZonesTamperAlarm:
      message = new ZonesTamperAlarmAnswer();
      break;
    case message_impl.Commands.ZonesAlarmMemory:
      message = new ZonesAlarmMemoryAnswer();
      break;
    case message_impl.Commands.ZonesTamperAlarmMemory:
      message = new ZonesTamperAlarmMemoryAnswer();
      break;
    case message_impl.Commands.ZonesBypass:
      message = new ZonesBypassAnswer();
      break;
    case message_impl.Commands.ZonesNoViolationTrouble:
      message = new ZonesNoViolationTroubleAnswer();
      break;
    case message_impl.Commands.ZonesLongViolationTrouble:
      message = new ZonesLongViolationTroubleAnswer();
      break;
    case message_impl.Commands.ArmedPartitionSuppressed:
      message = new ArmedPartitionSuppressedAnswer();
      break;
    case message_impl.Commands.ArmedPartitionReally:
      message = new ArmedPartitionReallyAnswer();
      break;
    case message_impl.Commands.PartitionArmedInMode2:
      message = new PartitionArmedInMode2Answer();
      break;
    case message_impl.Commands.PartitionArmedInMode3:
      message = new PartitionArmedInMode3Answer();
      break;
    case message_impl.Commands.PartitionWith1stCodeEntered:
      message = new PartitionWith1stCodeEnteredAnswer();
      break;	  
    case message_impl.Commands.PartitionEntryTime:
      message = new PartitionEntryTimeAnswer();
      break;
	case message_impl.Commands.PartitionExitTimeMore10s:
      message = new PartitionExitTimeMore10sAnswer();
      break;
	case message_impl.Commands.PartitionExitTimeLess10s:
      message = new PartitionExitTimeLess10sAnswer();
      break;
	case message_impl.Commands.PartitionTemporaryBlocked:
      message = new PartitionTemporaryBlockedAnswer();
      break;
	case message_impl.Commands.PartitionBlockedForGuardRound:
      message = new PartitionBlockedForGuardRoundAnswer();
      break;
	case message_impl.Commands.PartitionAlarm:
      message = new PartitionAlarmAnswer();
      break;
	case message_impl.Commands.PartitionFireAlarm:
      message = new PartitionFireAlarmAnswer();
      break;
	case message_impl.Commands.PartitionAlarmMemory:
      message = new PartitionAlarmMemoryAnswer();
      break;
	case message_impl.Commands.PartitionFireAlarmMemory:
      message = new PartitionFireAlarmMemoryAnswer();
      break;
	case message_impl.Commands.DoorsOpened:
      message = new DoorsOpenedAnswer();
      break;
	case message_impl.Commands.DoorsOpenedLong:
      message = new DoorsOpenedLongAnswer();
      break;
	case message_impl.Commands.RTCandBasicStatusBits:
      message = new RTCandBasicStatusBitsAnswer();
      break;
	case message_impl.Commands.TroublesPart1:
      message = new TroublesPart1Answer();
      break;
	case message_impl.Commands.TroublesPart2:
      message = new TroublesPart2Answer();
      break;
	case message_impl.Commands.TroublesPart3:
      message = new TroublesPart3Answer();
      break;	  
	case message_impl.Commands.TroublesPart4:
      message = new TroublesPart4Answer();
      break;
	case message_impl.Commands.TroublesPart5:
      message = new TroublesPart5Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart1:
      message = new TroublesMemoryPart1Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart2:
      message = new TroublesMemoryPart2Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart3:
      message = new TroublesMemoryPart3Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart4:
      message = new TroublesMemoryPart4Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart5:
      message = new TroublesMemoryPart5Answer();
      break;
	case message_impl.Commands.PartitionsWithViolatedZones:
      message = new PartitionsWithViolatedZonesAnswer();
      break;
	case message_impl.Commands.ZonesIsolate:
      message = new ZonesIsolateAnswer();
      break;
	case message_impl.Commands.PartitionsWithVerifiedAlarms:
      message = new PartitionsWithVerifiedAlarmsAnswer();
      break;
	case message_impl.Commands.ZonesMasked:
      message = new ZonesMaskedAnswer();
      break;
	case message_impl.Commands.ZonesMaskedMemory:
      message = new ZonesMaskedMemoryAnswer();
      break;
	case message_impl.Commands.PartitionsArmedInMode1:
      message = new PartitionsArmedInMode1Answer();
      break;
	case message_impl.Commands.PartitionsWithWarningAlarms:
      message = new PartitionsWithWarningAlarmsAnswer();
      break;	  
	case message_impl.Commands.TroublesPart6:
      message = new TroublesPart6Answer();
      break;
	case message_impl.Commands.TroublesPart7:
      message = new TroublesPart7Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart6:
      message = new TroublesMemoryPart6Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart7:
      message = new TroublesMemoryPart7Answer();
      break;
	case message_impl.Commands.TroublesPart8:
      message = new TroublesPart8Answer();
      break;
	case message_impl.Commands.TroublesMemoryPart8:
      message = new TroublesMemoryPart8Answer();
      break;
    case message_impl.Commands.OutputsState:
      message = new OutputsStateAnswer();
      break;
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
  encodeNewDataCommand,
  encodeOutputsOffCommand,
  encodeOutputsOnCommand,
  encodeOutputsStateCommand,
  encodeOutputsSwitchCommand,
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
  encodePartitionFireAlarmMemoryCommand, 
  encodePartitionAlarmMemoryCommand, 
  encodePartitionFireAlarmCommand, 
  encodePartitionAlarmCommand, 
  encodePartitionBlockedForGuardRoundCommand, 
  encodePartitionTemporaryBlockedCommand, 
  encodePartitionExitTimeLess10sCommand, 
  encodePartitionExitTimeMore10sCommand, 
  encodePartitionEntryTimeCommand, 
  encodePartitionWith1stCodeEnteredCommand,
  encodePartitionArmedInMode3Command,  
  encodePartitionArmedInMode2Command,  
  encodeArmedPartitionReallyCommand,  
  encodeArmedPartitionSuppressedCommand,   
  encodeZonesLongViolationTroubleCommand,  
  encodeZonesNoViolationTroubleCommand,  
  encodeZonesBypassCommand,  
  encodeZonesTamperAlarmMemoryCommand,  
  encodeZonesAlarmMemoryCommand, 
  encodeZonesTamperAlarmCommand,
  encodeZonesTamperCommand,
  encodeZonesViolationCommand,
  NewDataAnswer,
  OutputsStateAnswer, 
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
  PartitionFireAlarmMemoryAnswer,
  PartitionAlarmMemoryAnswer,
  PartitionFireAlarmAnswer,
  PartitionAlarmAnswer,
  PartitionBlockedForGuardRoundAnswer,
  PartitionTemporaryBlockedAnswer,
  PartitionExitTimeLess10sAnswer,
  PartitionExitTimeMore10sAnswer,
  PartitionEntryTimeAnswer,
  PartitionWith1stCodeEnteredAnswer,
  PartitionArmedInMode3Answer,
  PartitionArmedInMode2Answer,
  ArmedPartitionReallyAnswer,
  ArmedPartitionSuppressedAnswer,
  ZonesLongViolationTroubleAnswer,
  ZonesNoViolationTroubleAnswer,
  ZonesBypassAnswer,
  ZonesTamperAlarmMemoryAnswer,
  ZonesAlarmMemoryAnswer,
  ZonesTamperAlarmAnswer,
  ZonesTamperAnswer,
  ZonesViolationAnswer,
};
