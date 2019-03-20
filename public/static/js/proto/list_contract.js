/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.quotation.api.Commodity');
goog.provide('proto.quotation.api.ListContract');
goog.provide('proto.quotation.api.ListContractRequest');
goog.provide('proto.quotation.api.ListContractResponse');

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
proto.quotation.api.Commodity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quotation.api.Commodity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.Commodity.displayName = 'proto.quotation.api.Commodity';
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
proto.quotation.api.Commodity.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.Commodity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.Commodity} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.Commodity.toObject = function(includeInstance, msg) {
  var f, obj = {
    exchangeno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commodityno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commoditytype: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.quotation.api.Commodity}
 */
proto.quotation.api.Commodity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.Commodity;
  return proto.quotation.api.Commodity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.Commodity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.Commodity}
 */
proto.quotation.api.Commodity.deserializeBinaryFromReader = function(msg, reader) {
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
proto.quotation.api.Commodity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.Commodity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.Commodity} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.Commodity.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string exchangeNo = 1;
 * @return {string}
 */
proto.quotation.api.Commodity.prototype.getExchangeno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.quotation.api.Commodity.prototype.setExchangeno = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string commodityNo = 2;
 * @return {string}
 */
proto.quotation.api.Commodity.prototype.getCommodityno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.quotation.api.Commodity.prototype.setCommodityno = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string commodityType = 3;
 * @return {string}
 */
proto.quotation.api.Commodity.prototype.getCommoditytype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.quotation.api.Commodity.prototype.setCommoditytype = function(value) {
  jspb.Message.setField(this, 3, value);
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
proto.quotation.api.ListContractRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quotation.api.ListContractRequest.repeatedFields_, null);
};
goog.inherits(proto.quotation.api.ListContractRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.ListContractRequest.displayName = 'proto.quotation.api.ListContractRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quotation.api.ListContractRequest.repeatedFields_ = [1];



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
proto.quotation.api.ListContractRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.ListContractRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.ListContractRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.ListContractRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    listcommodityList: jspb.Message.toObjectList(msg.getListcommodityList(),
    proto.quotation.api.Commodity.toObject, includeInstance)
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
 * @return {!proto.quotation.api.ListContractRequest}
 */
proto.quotation.api.ListContractRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.ListContractRequest;
  return proto.quotation.api.ListContractRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.ListContractRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.ListContractRequest}
 */
proto.quotation.api.ListContractRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quotation.api.Commodity;
      reader.readMessage(value,proto.quotation.api.Commodity.deserializeBinaryFromReader);
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
proto.quotation.api.ListContractRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.ListContractRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.ListContractRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.ListContractRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListcommodityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quotation.api.Commodity.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Commodity listCommodity = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.quotation.api.Commodity>}
 */
proto.quotation.api.ListContractRequest.prototype.getListcommodityList = function() {
  return /** @type{!Array.<!proto.quotation.api.Commodity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quotation.api.Commodity, 1));
};


/** @param {!Array.<!proto.quotation.api.Commodity>} value */
proto.quotation.api.ListContractRequest.prototype.setListcommodityList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quotation.api.Commodity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quotation.api.Commodity}
 */
proto.quotation.api.ListContractRequest.prototype.addListcommodity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quotation.api.Commodity, opt_index);
};


proto.quotation.api.ListContractRequest.prototype.clearListcommodityList = function() {
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
proto.quotation.api.ListContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quotation.api.ListContract.repeatedFields_, null);
};
goog.inherits(proto.quotation.api.ListContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.ListContract.displayName = 'proto.quotation.api.ListContract';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quotation.api.ListContract.repeatedFields_ = [5];



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
proto.quotation.api.ListContract.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.ListContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.ListContract} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.ListContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.quotation.api.Result.toObject(includeInstance, f),
    exchangeno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commodityno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    commoditytype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    listcontractList: jspb.Message.getField(msg, 5)
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
 * @return {!proto.quotation.api.ListContract}
 */
proto.quotation.api.ListContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.ListContract;
  return proto.quotation.api.ListContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.ListContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.ListContract}
 */
proto.quotation.api.ListContract.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addListcontract(value);
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
proto.quotation.api.ListContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.ListContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.ListContract} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.ListContract.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getListcontractList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional Result result = 1;
 * @return {?proto.quotation.api.Result}
 */
proto.quotation.api.ListContract.prototype.getResult = function() {
  return /** @type{?proto.quotation.api.Result} */ (
    jspb.Message.getWrapperField(this, proto.quotation.api.Result, 1));
};


/** @param {?proto.quotation.api.Result|undefined} value */
proto.quotation.api.ListContract.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.quotation.api.ListContract.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.quotation.api.ListContract.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string exchangeNo = 2;
 * @return {string}
 */
proto.quotation.api.ListContract.prototype.getExchangeno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.quotation.api.ListContract.prototype.setExchangeno = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string commodityNo = 3;
 * @return {string}
 */
proto.quotation.api.ListContract.prototype.getCommodityno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.quotation.api.ListContract.prototype.setCommodityno = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string commodityType = 4;
 * @return {string}
 */
proto.quotation.api.ListContract.prototype.getCommoditytype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.quotation.api.ListContract.prototype.setCommoditytype = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated string listContract = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.quotation.api.ListContract.prototype.getListcontractList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 5));
};


/** @param {!Array.<string>} value */
proto.quotation.api.ListContract.prototype.setListcontractList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.quotation.api.ListContract.prototype.addListcontract = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.quotation.api.ListContract.prototype.clearListcontractList = function() {
  this.setListcontractList([]);
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
proto.quotation.api.ListContractResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quotation.api.ListContractResponse.repeatedFields_, null);
};
goog.inherits(proto.quotation.api.ListContractResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.quotation.api.ListContractResponse.displayName = 'proto.quotation.api.ListContractResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quotation.api.ListContractResponse.repeatedFields_ = [1];



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
proto.quotation.api.ListContractResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quotation.api.ListContractResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quotation.api.ListContractResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.quotation.api.ListContractResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    listcontractList: jspb.Message.toObjectList(msg.getListcontractList(),
    proto.quotation.api.ListContract.toObject, includeInstance)
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
 * @return {!proto.quotation.api.ListContractResponse}
 */
proto.quotation.api.ListContractResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quotation.api.ListContractResponse;
  return proto.quotation.api.ListContractResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quotation.api.ListContractResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quotation.api.ListContractResponse}
 */
proto.quotation.api.ListContractResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quotation.api.ListContract;
      reader.readMessage(value,proto.quotation.api.ListContract.deserializeBinaryFromReader);
      msg.addListcontract(value);
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
proto.quotation.api.ListContractResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quotation.api.ListContractResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quotation.api.ListContractResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.quotation.api.ListContractResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListcontractList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quotation.api.ListContract.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ListContract listContract = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.quotation.api.ListContract>}
 */
proto.quotation.api.ListContractResponse.prototype.getListcontractList = function() {
  return /** @type{!Array.<!proto.quotation.api.ListContract>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quotation.api.ListContract, 1));
};


/** @param {!Array.<!proto.quotation.api.ListContract>} value */
proto.quotation.api.ListContractResponse.prototype.setListcontractList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quotation.api.ListContract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quotation.api.ListContract}
 */
proto.quotation.api.ListContractResponse.prototype.addListcontract = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quotation.api.ListContract, opt_index);
};


proto.quotation.api.ListContractResponse.prototype.clearListcontractList = function() {
  this.setListcontractList([]);
};

