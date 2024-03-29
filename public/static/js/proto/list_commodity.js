/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!   

goog.provide('proto.quotation.api.CommodityInfo');
goog.provide('proto.quotation.api.CommodityList');
goog.provide('proto.quotation.api.ListCommodityRequest');
goog.provide('proto.quotation.api.ListCommodityResponse');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('proto.quotation.api.Result');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quotation.api.ListCommodityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quotation.api.ListCommodityRequest.repeatedFields_, null);
};
goog.inherits(proto.quotation.api.ListCommodityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.ListCommodityRequest.displayName = 'proto.quotation.api.ListCommodityRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quotation.api.ListCommodityRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quotation.api.ListCommodityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.ListCommodityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.ListCommodityRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.ListCommodityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    listexchangeList: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quotation.api.ListCommodityRequest}
 */
proto.quotation.api.ListCommodityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.ListCommodityRequest;
  return proto.quotation.api.ListCommodityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.ListCommodityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.ListCommodityRequest}
 */
proto.quotation.api.ListCommodityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addListexchange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quotation.api.ListCommodityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.ListCommodityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.ListCommodityRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.ListCommodityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListexchangeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string listExchange = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.quotation.api.ListCommodityRequest.prototype.getListexchangeList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<string>} value */
proto.quotation.api.ListCommodityRequest.prototype.setListexchangeList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.quotation.api.ListCommodityRequest.prototype.addListexchange = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.quotation.api.ListCommodityRequest.prototype.clearListexchangeList = function() {
  this.setListexchangeList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quotation.api.CommodityInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quotation.api.CommodityInfo.repeatedFields_, null);
};
goog.inherits(proto.quotation.api.CommodityInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.CommodityInfo.displayName = 'proto.quotation.api.CommodityInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quotation.api.CommodityInfo.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quotation.api.CommodityInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.CommodityInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.CommodityInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.CommodityInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    exchangeno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commodityno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commoditytype: jspb.Message.getFieldWithDefault(msg, 3, ""),
    commodityname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    volunit: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    mpc: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    offerdenominator: jspb.Message.getFieldWithDefault(msg, 7, 0),
    centralizedbiddingsessionList: jspb.Message.getField(msg, 8),
    tradingcontinousList: jspb.Message.getField(msg, 9)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quotation.api.CommodityInfo}
 */
proto.quotation.api.CommodityInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.CommodityInfo;
  return proto.quotation.api.CommodityInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.CommodityInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.CommodityInfo}
 */
proto.quotation.api.CommodityInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangeno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommodityno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommoditytype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommodityname(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolunit(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMpc(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOfferdenominator(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addCentralizedbiddingsession(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addTradingcontinous(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quotation.api.CommodityInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.CommodityInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.CommodityInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.CommodityInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExchangeno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommodityno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommoditytype();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommodityname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVolunit();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getMpc();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getOfferdenominator();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCentralizedbiddingsessionList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTradingcontinousList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string exchangeNo = 1;
 * @return {string}
 */
proto.quotation.api.CommodityInfo.prototype.getExchangeno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.quotation.api.CommodityInfo.prototype.setExchangeno = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string commodityNo = 2;
 * @return {string}
 */
proto.quotation.api.CommodityInfo.prototype.getCommodityno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.quotation.api.CommodityInfo.prototype.setCommodityno = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string commodityType = 3;
 * @return {string}
 */
proto.quotation.api.CommodityInfo.prototype.getCommoditytype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.quotation.api.CommodityInfo.prototype.setCommoditytype = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string commodityName = 4;
 * @return {string}
 */
proto.quotation.api.CommodityInfo.prototype.getCommodityname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.quotation.api.CommodityInfo.prototype.setCommodityname = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional double volunit = 5;
 * @return {number}
 */
proto.quotation.api.CommodityInfo.prototype.getVolunit = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.quotation.api.CommodityInfo.prototype.setVolunit = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional double MPC = 6;
 * @return {number}
 */
proto.quotation.api.CommodityInfo.prototype.getMpc = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.quotation.api.CommodityInfo.prototype.setMpc = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 offerDenominator = 7;
 * @return {number}
 */
proto.quotation.api.CommodityInfo.prototype.getOfferdenominator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.quotation.api.CommodityInfo.prototype.setOfferdenominator = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * repeated string centralizedBiddingSession = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.quotation.api.CommodityInfo.prototype.getCentralizedbiddingsessionList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 8));
};


/** @param {!Array.<string>} value */
proto.quotation.api.CommodityInfo.prototype.setCentralizedbiddingsessionList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.quotation.api.CommodityInfo.prototype.addCentralizedbiddingsession = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.quotation.api.CommodityInfo.prototype.clearCentralizedbiddingsessionList = function() {
  this.setCentralizedbiddingsessionList([]);
};


/**
 * repeated string tradingContinous = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.quotation.api.CommodityInfo.prototype.getTradingcontinousList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 9));
};


/** @param {!Array.<string>} value */
proto.quotation.api.CommodityInfo.prototype.setTradingcontinousList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.quotation.api.CommodityInfo.prototype.addTradingcontinous = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


proto.quotation.api.CommodityInfo.prototype.clearTradingcontinousList = function() {
  this.setTradingcontinousList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quotation.api.CommodityList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quotation.api.CommodityList.repeatedFields_, null);
};
goog.inherits(proto.quotation.api.CommodityList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.CommodityList.displayName = 'proto.quotation.api.CommodityList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quotation.api.CommodityList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quotation.api.CommodityList.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.CommodityList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.CommodityList} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.CommodityList.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.quotation.api.Result.toObject(includeInstance, f),
    listcommodityList: jspb.Message.toObjectList(msg.getListcommodityList(),
    proto.quotation.api.CommodityInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quotation.api.CommodityList}
 */
proto.quotation.api.CommodityList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.CommodityList;
  return proto.quotation.api.CommodityList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.CommodityList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.CommodityList}
 */
proto.quotation.api.CommodityList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quotation.api.Result;
      reader.readMessage(value,proto.quotation.api.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 2:
      var value = new proto.quotation.api.CommodityInfo;
      reader.readMessage(value,proto.quotation.api.CommodityInfo.deserializeBinaryFromReader);
      msg.addListcommodity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quotation.api.CommodityList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.CommodityList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.CommodityList} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.CommodityList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quotation.api.Result.serializeBinaryToWriter
    );
  }
  f = message.getListcommodityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quotation.api.CommodityInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Result result = 1;
 * @return {?proto.quotation.api.Result}
 */
proto.quotation.api.CommodityList.prototype.getResult = function() {
  return /** @type{?proto.quotation.api.Result} */ (
    jspb.Message.getWrapperField(this, proto.quotation.api.Result, 1));
};


/** @param {?proto.quotation.api.Result|undefined} value */
proto.quotation.api.CommodityList.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.quotation.api.CommodityList.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.quotation.api.CommodityList.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CommodityInfo listCommodity = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.quotation.api.CommodityInfo>}
 */
proto.quotation.api.CommodityList.prototype.getListcommodityList = function() {
  return /** @type{!Array.<!proto.quotation.api.CommodityInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quotation.api.CommodityInfo, 2));
};


/** @param {!Array.<!proto.quotation.api.CommodityInfo>} value */
proto.quotation.api.CommodityList.prototype.setListcommodityList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quotation.api.CommodityInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quotation.api.CommodityInfo}
 */
proto.quotation.api.CommodityList.prototype.addListcommodity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quotation.api.CommodityInfo, opt_index);
};


proto.quotation.api.CommodityList.prototype.clearListcommodityList = function() {
  this.setListcommodityList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quotation.api.ListCommodityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quotation.api.ListCommodityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.ListCommodityResponse.displayName = 'proto.quotation.api.ListCommodityResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quotation.api.ListCommodityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.ListCommodityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.ListCommodityResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.ListCommodityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapcommodityMap: (f = msg.getMapcommodityMap()) ? f.toObject(includeInstance, proto.quotation.api.CommodityList.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quotation.api.ListCommodityResponse}
 */
proto.quotation.api.ListCommodityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.ListCommodityResponse;
  return proto.quotation.api.ListCommodityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.ListCommodityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.ListCommodityResponse}
 */
proto.quotation.api.ListCommodityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMapcommodityMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.quotation.api.CommodityList.deserializeBinaryFromReader);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quotation.api.ListCommodityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.ListCommodityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.ListCommodityResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.ListCommodityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapcommodityMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.quotation.api.CommodityList.serializeBinaryToWriter);
  }
};


/**
 * map<string, CommodityList> mapCommodity = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.quotation.api.CommodityList>}
 */
proto.quotation.api.ListCommodityResponse.prototype.getMapcommodityMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.quotation.api.CommodityList>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.quotation.api.CommodityList));
};


proto.quotation.api.ListCommodityResponse.prototype.clearMapcommodityMap = function() {
  this.getMapcommodityMap().clear();
};


