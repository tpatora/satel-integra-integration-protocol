const Crc = require("./crc");
const Decoder = require("./decoder");
const Encoder = require("./encoder");


const Commands = Object.freeze({
  ZonesViolation: 0x00,
  ZonesViolation256: 0xFF00,
  ZonesTamper: 0x01,
  ZonesTamper256: 0xFF01,
  ZonesAlarm: 0x02,
  ZonesTamper256: 0xFF02,
  ZonesTamperAlarm: 0x03,
  ZonesTamperAlarm256: 0xFF03,
  ZonesAlarmMemory: 0x04,
  ZonesAlarmMemory256: 0xFF04,
  ZonesTamperAlarmMemory: 0x05,
  ZonesTamperAlarmMemory256: 0xFF05,
  ZonesBypass: 0x06,
  ZonesBypass256: 0xFF06,
  ZonesNoViolationTrouble: 0x07,
  ZonesNoViolationTrouble256: 0xFF07,
  ZonesLongViolationTrouble: 0x08, 
  ZonesLongViolationTrouble256: 0xFF08,
  ArmedPartitionsSuppressed: 0x09,
  ArmedPartitionsReally: 0x0A,
  PartitionsArmedInMode2: 0x0B,
  PartitionsArmedInMode3: 0x0C,
  PartitionsWith1stCodeEntered: 0x0D,
  PartitionsEntryTime: 0x0E,
  PartitionsExitTimeMore10s: 0x0F,
  PartitionsExitTimeLess10s: 0x10,
  PartitionsTemporaryBlocked: 0x11,
  PartitionsBlockedForGuardRound: 0x12,
  PartitionsAlarm: 0x13,
  PartitionsFireAlarm: 0x14,
  PartitionsAlarmMemory: 0x15,
  PartitionsFireAlarmMemory: 0x16,
  OutputsState: 0x17,
  OutputsState256: 0xFF17,
  DoorsOpened: 0x18,
  DoorsOpenedLong: 0x19,
  RTCandBasicStatusBits: 0x1A,
  TroublesPart1: 0x1B,
  TroublesPart2: 0x1C,
  TroublesPart3: 0x1D,
  TroublesPart4: 0x1E,
  TroublesPart5: 0x1F,
  TroublesMemoryPart1: 0x20,
  TroublesMemoryPart2: 0x21,
  TroublesMemoryPart3: 0x22,
  TroublesMemoryPart4: 0x23,
  TroublesMemoryPart5: 0x24,
  PartitionsWithViolatedZones: 0x25,
  ZonesIsolate: 0x26,
  ZonesIsolate256: 0xFF26,
  PartitionsWithVerifiedAlarms: 0x27,
  ZonesMasked: 0x28,
  ZonesMasked256: 0xFF28,
  ZonesMaskedMemory: 0x29,
  ZonesMaskedMemory256: 0xFF29,
  PartitionsArmedInMode1: 0x2A,
  PartitionsWithWarningAlarms: 0x2B,
  TroublesPart6: 0x2C,
  TroublesPart7: 0x2D,
  TroublesMemoryPart6: 0x2E,
  TroublesMemoryPart7: 0x2F,
  TroublesPart8: 0x30,
  TroublesMemoryPart8: 0x31,  
  NewData: 0x7f,
  NewData256: 0xFF7f,
  ArmInMode0: 0x80,
  ArmInMode1: 0x81,
  ArmInMode2: 0x82,
  ArmInMode3: 0x83,
  Disarm: 0x84,
  ClearAlarm: 0x85,
  ForceArmInMode0: 0xA0,
  ForceArmInMode1: 0xA1,
  ForceArmInMode2: 0xA2,
  ForceArmInMode3: 0xA3,
  ZonesBypassUser: 0x86, // ZonesBypass is used
  ZonesUnbypass: 0x87,
  OpenDoor: 0x8A,
  ZonesIsolate: 0x90,
  OutputsOn: 0x88,
  OutputsOff: 0x89,
  OutputsSwitch: 0x91,
  ControlCommand: 0xEF,
});


function encodeNoDataCommand(command) {
  const encoder = new Encoder();
  encoder.addByte(command);
  return encoder.frame();
}

function prefixAndUserCodeStringToBuffer(prefixAndUserCode) {
 
  if (
    !(typeof prefixAndUserCode === "string") &&
    !(prefixAndUserCode instanceof String)
  ) {
    throw "'prefixAndUserCode' must be a string";
  }
  if (prefixAndUserCode.length != 16) {
    throw "'prefixAndUserCode' must be exactly 16 characters long";
  }
  const buffer = Buffer.alloc(8, 0);
  for (var i = 0; i < 16; ++i) {
    const c = prefixAndUserCode.charAt(i);
    if ((c < "0" || c > "9") && c != "f" && c != "F") {
      throw "'prefixAndUserCode' must not contain other characters than digits or 'f' or 'F'";
    }
    const bufferIndex = Math.floor(i / 2);
    buffer[bufferIndex] = (buffer[bufferIndex] << 4) | parseInt(c, 16);
  }
  return buffer;
}

function outputsArrayToBuffer(outputs) {
  if (!Array.isArray(outputs)) {
    throw "'outputs' must be an array";
  }
  const outputsLength = 16 * 8;
  const outputsLongLength = 32 * 8;
  if (outputs.length != outputsLength && outputs.length != outputsLongLength) {
    throw (
      "'outputs' array must have " +
      outputsLength +
      " or " +
      outputsLongLength +
      " elements not " + 
	  outputs.length
    );
  }
  const buffer = Buffer.alloc(outputs.length / 8, 0);
  for (var i = 0; i < outputs.length; ++i) {
    const flag = outputs[i];
    const bufferIndex = Math.floor(i / 8);
    buffer[bufferIndex] = (buffer[bufferIndex] >> 1) | (flag ? 0x80 : 0);
  }
  return buffer;
}

function zonesArrayToBuffer(zones) {
  if (!Array.isArray(zones)) {
    throw "'zones' must be an array";
  }
  const zonesLength = 16 * 8;
  const zonesLongLength = 32 * 8;
  if (zones.length != zonesLength && zones.length != zonesLongLength) {
    throw (
      "'zones' array must have " +
      zonesLength +
      " or " +
      zonesLongLength +
      " elements not " + 
	  zones.length
    );
  }
  const buffer = Buffer.alloc(zones.length / 8, 0);
  for (var i = 0; i < zones.length; ++i) {
    const flag = zones[i];
    const bufferIndex = Math.floor(i / 8);
    buffer[bufferIndex] = (buffer[bufferIndex] >> 1) | (flag ? 0x80 : 0);
  }
  return buffer;
}

function partitionsArrayToBuffer(partitions) {
  if (!Array.isArray(partitions)) {
    throw "'partitions' must be an array";
  }
  const partitionsLength = 4 * 8;
  if (partitions.length != partitionsLength) {
    throw (
      "'partitions' array must have " +
      partitionsLength +
      " elements, not " +
	  partitions.length
    );
  }
  const buffer = Buffer.alloc(partitions.length / 8, 0);
  for (var i = 0; i < partitions.length; ++i) {
    const flag = partitions[i];
    const bufferIndex = Math.floor(i / 8);
    buffer[bufferIndex] = (buffer[bufferIndex] >> 1) | (flag ? 0x80 : 0);
  }
  return buffer;
}


function encodeChangeZonesCommand(command, prefixAndUserCode, zones) {
  const encoder = new Encoder();
  encoder.addByte(command);
  encoder.addBytes(prefixAndUserCodeStringToBuffer(prefixAndUserCode));
  encoder.addBytes(zonesArrayToBuffer(zones));
  return encoder.frame();
}

function encodeChangeOutputsCommand(command, prefixAndUserCode, outputs) {
  const encoder = new Encoder();
  encoder.addByte(command);
  encoder.addBytes(prefixAndUserCodeStringToBuffer(prefixAndUserCode));
  encoder.addBytes(outputsArrayToBuffer(outputs));
  return encoder.frame();
}

function encodeChangePartitionsCommand(command, prefixAndUserCode, partitions) {
  const encoder = new Encoder();
  encoder.addByte(command);
  encoder.addBytes(prefixAndUserCodeStringToBuffer(prefixAndUserCode));
  encoder.addBytes(partitionsArrayToBuffer(partitions));
  return encoder.frame();
}


module.exports = {
  Commands,
  encodeChangeOutputsCommand,
  encodeChangePartitionsCommand,
  encodeChangeZonesCommand,
  encodeNoDataCommand,
  outputsArrayToBuffer,
  prefixAndUserCodeStringToBuffer,
};
