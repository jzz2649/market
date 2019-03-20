/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.quotation.api.GetTrendRequest');
goog.provide('proto.quotation.api.GetTrendResponse');
goog.provide('proto.quotation.api.Trend');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
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
proto.quotation.api.GetTrendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quotation.api.GetTrendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.GetTrendRequest.displayName = 'proto.quotation.api.GetTrendRequest';
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
proto.quotation.api.GetTrendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.GetTrendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.GetTrendRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.GetTrendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    exchangeno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commodityno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commoditytype: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contractno: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.quotation.api.GetTrendRequest}
 */
proto.quotation.api.GetTrendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.GetTrendRequest;
  return proto.quotation.api.GetTrendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.GetTrendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.GetTrendRequest}
 */
proto.quotation.api.GetTrendRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setContractno(value);
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
proto.quotation.api.GetTrendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.GetTrendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.GetTrendRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.GetTrendRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getContractno();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string exchangeNo = 1;
 * @return {string}
 */
proto.quotation.api.GetTrendRequest.prototype.getExchangeno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendRequest.prototype.setExchangeno = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string commodityNo = 2;
 * @return {string}
 */
proto.quotation.api.GetTrendRequest.prototype.getCommodityno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendRequest.prototype.setCommodityno = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string commodityType = 3;
 * @return {string}
 */
proto.quotation.api.GetTrendRequest.prototype.getCommoditytype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendRequest.prototype.setCommoditytype = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string contractNo = 4;
 * @return {string}
 */
proto.quotation.api.GetTrendRequest.prototype.getContractno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendRequest.prototype.setContractno = function(value) {
  jspb.Message.setField(this, 4, value);
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
proto.quotation.api.Trend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quotation.api.Trend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.Trend.displayName = 'proto.quotation.api.Trend';
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
proto.quotation.api.Trend.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.Trend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.Trend} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.Trend.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    turnover: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalturnover: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    totalvolume: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.quotation.api.Trend}
 */
proto.quotation.api.Trend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.Trend;
  return proto.quotation.api.Trend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.Trend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.Trend}
 */
proto.quotation.api.Trend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTurnover(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setVolume(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalturnover(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setTotalvolume(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
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
proto.quotation.api.Trend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.Trend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.Trend} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.Trend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeFixed64(
      3,
      f
    );
  }
  f = message.getTotalturnover();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTotalvolume();
  if (f !== 0) {
    writer.writeFixed64(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.quotation.api.Trend.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.quotation.api.Trend.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double turnover = 2;
 * @return {number}
 */
proto.quotation.api.Trend.prototype.getTurnover = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.quotation.api.Trend.prototype.setTurnover = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional fixed64 volume = 3;
 * @return {number}
 */
proto.quotation.api.Trend.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.quotation.api.Trend.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional double totalTurnover = 4;
 * @return {number}
 */
proto.quotation.api.Trend.prototype.getTotalturnover = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.quotation.api.Trend.prototype.setTotalturnover = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional fixed64 totalVolume = 5;
 * @return {number}
 */
proto.quotation.api.Trend.prototype.getTotalvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.quotation.api.Trend.prototype.setTotalvolume = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string timestamp = 6;
 * @return {string}
 */
proto.quotation.api.Trend.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.quotation.api.Trend.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 6, value);
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
proto.quotation.api.GetTrendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quotation.api.GetTrendResponse.repeatedFields_, null);
};
goog.inherits(proto.quotation.api.GetTrendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.GetTrendResponse.displayName = 'proto.quotation.api.GetTrendResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quotation.api.GetTrendResponse.repeatedFields_ = [6,7];



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
proto.quotation.api.GetTrendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.GetTrendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.GetTrendResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.GetTrendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.quotation.api.Result.toObject(includeInstance, f),
    exchangeno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commodityno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    commoditytype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contractno: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timepointList: jspb.Message.getField(msg, 6),
    trendList: jspb.Message.toObjectList(msg.getTrendList(),
    proto.quotation.api.Trend.toObject, includeInstance)
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
 * @return {!proto.quotation.api.GetTrendResponse}
 */
proto.quotation.api.GetTrendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.GetTrendResponse;
  return proto.quotation.api.GetTrendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.GetTrendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.GetTrendResponse}
 */
proto.quotation.api.GetTrendResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangeno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommodityno(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommoditytype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractno(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTimepoint(value);
      break;
    case 7:
      var value = new proto.quotation.api.Trend;
      reader.readMessage(value,proto.quotation.api.Trend.deserializeBinaryFromReader);
      msg.addTrend(value);
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
proto.quotation.api.GetTrendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.GetTrendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.GetTrendResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.GetTrendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quotation.api.Result.serializeBinaryToWriter
    );
  }
  f = message.getExchangeno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommodityno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommoditytype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContractno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimepointList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTrendList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.quotation.api.Trend.serializeBinaryToWriter
    );
  }
};


/**
 * optional Result result = 1;
 * @return {?proto.quotation.api.Result}
 */
proto.quotation.api.GetTrendResponse.prototype.getResult = function() {
  return /** @type{?proto.quotation.api.Result} */ (
    jspb.Message.getWrapperField(this, proto.quotation.api.Result, 1));
};


/** @param {?proto.quotation.api.Result|undefined} value */
proto.quotation.api.GetTrendResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.quotation.api.GetTrendResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.quotation.api.GetTrendResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string exchangeNo = 2;
 * @return {string}
 */
proto.quotation.api.GetTrendResponse.prototype.getExchangeno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendResponse.prototype.setExchangeno = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string commodityNo = 3;
 * @return {string}
 */
proto.quotation.api.GetTrendResponse.prototype.getCommodityno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendResponse.prototype.setCommodityno = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string commodityType = 4;
 * @return {string}
 */
proto.quotation.api.GetTrendResponse.prototype.getCommoditytype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendResponse.prototype.setCommoditytype = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string contractNo = 5;
 * @return {string}
 */
proto.quotation.api.GetTrendResponse.prototype.getContractno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.quotation.api.GetTrendResponse.prototype.setContractno = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * repeated string timepoint = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.quotation.api.GetTrendResponse.prototype.getTimepointList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 6));
};


/** @param {!Array.<string>} value */
proto.quotation.api.GetTrendResponse.prototype.setTimepointList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.quotation.api.GetTrendResponse.prototype.addTimepoint = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.quotation.api.GetTrendResponse.prototype.clearTimepointList = function() {
  this.setTimepointList([]);
};


/**
 * repeated Trend trend = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.quotation.api.Trend>}
 */
proto.quotation.api.GetTrendResponse.prototype.getTrendList = function() {
  return /** @type{!Array.<!proto.quotation.api.Trend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quotation.api.Trend, 7));
};


/** @param {!Array.<!proto.quotation.api.Trend>} value */
proto.quotation.api.GetTrendResponse.prototype.setTrendList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.quotation.api.Trend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quotation.api.Trend}
 */
proto.quotation.api.GetTrendResponse.prototype.addTrend = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.quotation.api.Trend, opt_index);
};


proto.quotation.api.GetTrendResponse.prototype.clearTrendList = function() {
  this.setTrendList([]);
};


