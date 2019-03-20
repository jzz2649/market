/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.quotation.api.BizResult');
goog.provide('proto.quotation.api.ContractKey');
goog.provide('proto.quotation.api.Result');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');


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
proto.quotation.api.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quotation.api.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.Result.displayName = 'proto.quotation.api.Result';
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
proto.quotation.api.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.Result} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resultmessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.quotation.api.Result}
 */
proto.quotation.api.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.Result;
  return proto.quotation.api.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.Result}
 */
proto.quotation.api.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.quotation.api.BizResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultmessage(value);
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
proto.quotation.api.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.Result} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResultmessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional BizResult result = 1;
 * @return {!proto.quotation.api.BizResult}
 */
proto.quotation.api.Result.prototype.getResult = function() {
  return /** @type {!proto.quotation.api.BizResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.quotation.api.BizResult} value */
proto.quotation.api.Result.prototype.setResult = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string resultMessage = 2;
 * @return {string}
 */
proto.quotation.api.Result.prototype.getResultmessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.quotation.api.Result.prototype.setResultmessage = function(value) {
  jspb.Message.setField(this, 2, value);
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
proto.quotation.api.ContractKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quotation.api.ContractKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.ContractKey.displayName = 'proto.quotation.api.ContractKey';
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
proto.quotation.api.ContractKey.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.ContractKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.ContractKey} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.ContractKey.toObject = function(includeInstance, msg) {
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
 * @return {!proto.quotation.api.ContractKey}
 */
proto.quotation.api.ContractKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.ContractKey;
  return proto.quotation.api.ContractKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.ContractKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.ContractKey}
 */
proto.quotation.api.ContractKey.deserializeBinaryFromReader = function(msg, reader) {
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
proto.quotation.api.ContractKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.ContractKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.ContractKey} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.ContractKey.serializeBinaryToWriter = function(message, writer) {
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
proto.quotation.api.ContractKey.prototype.getExchangeno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.quotation.api.ContractKey.prototype.setExchangeno = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string commodityNo = 2;
 * @return {string}
 */
proto.quotation.api.ContractKey.prototype.getCommodityno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.quotation.api.ContractKey.prototype.setCommodityno = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string commodityType = 3;
 * @return {string}
 */
proto.quotation.api.ContractKey.prototype.getCommoditytype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.quotation.api.ContractKey.prototype.setCommoditytype = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string contractNo = 4;
 * @return {string}
 */
proto.quotation.api.ContractKey.prototype.getContractno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.quotation.api.ContractKey.prototype.setContractno = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.quotation.api.BizResult = {
  KNOERROR: 0,
  KHASNODATA: 1,
  KNOTSUPPORTED: 2,
  KERRORREQUEST: 3,
  KREPEATEDSUB: 4,
  KHASNOTSUB: 5,
  KUNKNOWNERROR: 6
};

