/*eslint-disable*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["libp2p-circuit"] || ($protobuf.roots["libp2p-circuit"] = {});

$root.CircuitRelay = (function() {

    /**
     * Properties of a CircuitRelay.
     * @exports ICircuitRelay
     * @interface ICircuitRelay
     * @property {CircuitRelay.Type|null} [type] CircuitRelay type
     * @property {CircuitRelay.IPeer|null} [srcPeer] CircuitRelay srcPeer
     * @property {CircuitRelay.IPeer|null} [dstPeer] CircuitRelay dstPeer
     * @property {CircuitRelay.Status|null} [code] CircuitRelay code
     */

    /**
     * Constructs a new CircuitRelay.
     * @exports CircuitRelay
     * @classdesc Represents a CircuitRelay.
     * @implements ICircuitRelay
     * @constructor
     * @param {ICircuitRelay=} [p] Properties to set
     */
    function CircuitRelay(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CircuitRelay type.
     * @member {CircuitRelay.Type} type
     * @memberof CircuitRelay
     * @instance
     */
    CircuitRelay.prototype.type = 1;

    /**
     * CircuitRelay srcPeer.
     * @member {CircuitRelay.IPeer|null|undefined} srcPeer
     * @memberof CircuitRelay
     * @instance
     */
    CircuitRelay.prototype.srcPeer = null;

    /**
     * CircuitRelay dstPeer.
     * @member {CircuitRelay.IPeer|null|undefined} dstPeer
     * @memberof CircuitRelay
     * @instance
     */
    CircuitRelay.prototype.dstPeer = null;

    /**
     * CircuitRelay code.
     * @member {CircuitRelay.Status} code
     * @memberof CircuitRelay
     * @instance
     */
    CircuitRelay.prototype.code = 100;

    /**
     * Encodes the specified CircuitRelay message. Does not implicitly {@link CircuitRelay.verify|verify} messages.
     * @function encode
     * @memberof CircuitRelay
     * @static
     * @param {ICircuitRelay} m CircuitRelay message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CircuitRelay.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        if (m.srcPeer != null && Object.hasOwnProperty.call(m, "srcPeer"))
            $root.CircuitRelay.Peer.encode(m.srcPeer, w.uint32(18).fork()).ldelim();
        if (m.dstPeer != null && Object.hasOwnProperty.call(m, "dstPeer"))
            $root.CircuitRelay.Peer.encode(m.dstPeer, w.uint32(26).fork()).ldelim();
        if (m.code != null && Object.hasOwnProperty.call(m, "code"))
            w.uint32(32).int32(m.code);
        return w;
    };

    /**
     * Decodes a CircuitRelay message from the specified reader or buffer.
     * @function decode
     * @memberof CircuitRelay
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CircuitRelay} CircuitRelay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CircuitRelay.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CircuitRelay();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.srcPeer = $root.CircuitRelay.Peer.decode(r, r.uint32());
                break;
            case 3:
                m.dstPeer = $root.CircuitRelay.Peer.decode(r, r.uint32());
                break;
            case 4:
                m.code = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Creates a CircuitRelay message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CircuitRelay
     * @static
     * @param {Object.<string,*>} d Plain object
     * @returns {CircuitRelay} CircuitRelay
     */
    CircuitRelay.fromObject = function fromObject(d) {
        if (d instanceof $root.CircuitRelay)
            return d;
        var m = new $root.CircuitRelay();
        switch (d.type) {
        case "HOP":
        case 1:
            m.type = 1;
            break;
        case "STOP":
        case 2:
            m.type = 2;
            break;
        case "STATUS":
        case 3:
            m.type = 3;
            break;
        case "CAN_HOP":
        case 4:
            m.type = 4;
            break;
        }
        if (d.srcPeer != null) {
            if (typeof d.srcPeer !== "object")
                throw TypeError(".CircuitRelay.srcPeer: object expected");
            m.srcPeer = $root.CircuitRelay.Peer.fromObject(d.srcPeer);
        }
        if (d.dstPeer != null) {
            if (typeof d.dstPeer !== "object")
                throw TypeError(".CircuitRelay.dstPeer: object expected");
            m.dstPeer = $root.CircuitRelay.Peer.fromObject(d.dstPeer);
        }
        switch (d.code) {
        case "SUCCESS":
        case 100:
            m.code = 100;
            break;
        case "HOP_SRC_ADDR_TOO_LONG":
        case 220:
            m.code = 220;
            break;
        case "HOP_DST_ADDR_TOO_LONG":
        case 221:
            m.code = 221;
            break;
        case "HOP_SRC_MULTIADDR_INVALID":
        case 250:
            m.code = 250;
            break;
        case "HOP_DST_MULTIADDR_INVALID":
        case 251:
            m.code = 251;
            break;
        case "HOP_NO_CONN_TO_DST":
        case 260:
            m.code = 260;
            break;
        case "HOP_CANT_DIAL_DST":
        case 261:
            m.code = 261;
            break;
        case "HOP_CANT_OPEN_DST_STREAM":
        case 262:
            m.code = 262;
            break;
        case "HOP_CANT_SPEAK_RELAY":
        case 270:
            m.code = 270;
            break;
        case "HOP_CANT_RELAY_TO_SELF":
        case 280:
            m.code = 280;
            break;
        case "STOP_SRC_ADDR_TOO_LONG":
        case 320:
            m.code = 320;
            break;
        case "STOP_DST_ADDR_TOO_LONG":
        case 321:
            m.code = 321;
            break;
        case "STOP_SRC_MULTIADDR_INVALID":
        case 350:
            m.code = 350;
            break;
        case "STOP_DST_MULTIADDR_INVALID":
        case 351:
            m.code = 351;
            break;
        case "STOP_RELAY_REFUSED":
        case 390:
            m.code = 390;
            break;
        case "MALFORMED_MESSAGE":
        case 400:
            m.code = 400;
            break;
        }
        return m;
    };

    /**
     * Creates a plain object from a CircuitRelay message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CircuitRelay
     * @static
     * @param {CircuitRelay} m CircuitRelay
     * @param {$protobuf.IConversionOptions} [o] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CircuitRelay.toObject = function toObject(m, o) {
        if (!o)
            o = {};
        var d = {};
        if (o.defaults) {
            d.type = o.enums === String ? "HOP" : 1;
            d.srcPeer = null;
            d.dstPeer = null;
            d.code = o.enums === String ? "SUCCESS" : 100;
        }
        if (m.type != null && m.hasOwnProperty("type")) {
            d.type = o.enums === String ? $root.CircuitRelay.Type[m.type] : m.type;
        }
        if (m.srcPeer != null && m.hasOwnProperty("srcPeer")) {
            d.srcPeer = $root.CircuitRelay.Peer.toObject(m.srcPeer, o);
        }
        if (m.dstPeer != null && m.hasOwnProperty("dstPeer")) {
            d.dstPeer = $root.CircuitRelay.Peer.toObject(m.dstPeer, o);
        }
        if (m.code != null && m.hasOwnProperty("code")) {
            d.code = o.enums === String ? $root.CircuitRelay.Status[m.code] : m.code;
        }
        return d;
    };

    /**
     * Converts this CircuitRelay to JSON.
     * @function toJSON
     * @memberof CircuitRelay
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CircuitRelay.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Status enum.
     * @name CircuitRelay.Status
     * @enum {number}
     * @property {number} SUCCESS=100 SUCCESS value
     * @property {number} HOP_SRC_ADDR_TOO_LONG=220 HOP_SRC_ADDR_TOO_LONG value
     * @property {number} HOP_DST_ADDR_TOO_LONG=221 HOP_DST_ADDR_TOO_LONG value
     * @property {number} HOP_SRC_MULTIADDR_INVALID=250 HOP_SRC_MULTIADDR_INVALID value
     * @property {number} HOP_DST_MULTIADDR_INVALID=251 HOP_DST_MULTIADDR_INVALID value
     * @property {number} HOP_NO_CONN_TO_DST=260 HOP_NO_CONN_TO_DST value
     * @property {number} HOP_CANT_DIAL_DST=261 HOP_CANT_DIAL_DST value
     * @property {number} HOP_CANT_OPEN_DST_STREAM=262 HOP_CANT_OPEN_DST_STREAM value
     * @property {number} HOP_CANT_SPEAK_RELAY=270 HOP_CANT_SPEAK_RELAY value
     * @property {number} HOP_CANT_RELAY_TO_SELF=280 HOP_CANT_RELAY_TO_SELF value
     * @property {number} STOP_SRC_ADDR_TOO_LONG=320 STOP_SRC_ADDR_TOO_LONG value
     * @property {number} STOP_DST_ADDR_TOO_LONG=321 STOP_DST_ADDR_TOO_LONG value
     * @property {number} STOP_SRC_MULTIADDR_INVALID=350 STOP_SRC_MULTIADDR_INVALID value
     * @property {number} STOP_DST_MULTIADDR_INVALID=351 STOP_DST_MULTIADDR_INVALID value
     * @property {number} STOP_RELAY_REFUSED=390 STOP_RELAY_REFUSED value
     * @property {number} MALFORMED_MESSAGE=400 MALFORMED_MESSAGE value
     */
    CircuitRelay.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[100] = "SUCCESS"] = 100;
        values[valuesById[220] = "HOP_SRC_ADDR_TOO_LONG"] = 220;
        values[valuesById[221] = "HOP_DST_ADDR_TOO_LONG"] = 221;
        values[valuesById[250] = "HOP_SRC_MULTIADDR_INVALID"] = 250;
        values[valuesById[251] = "HOP_DST_MULTIADDR_INVALID"] = 251;
        values[valuesById[260] = "HOP_NO_CONN_TO_DST"] = 260;
        values[valuesById[261] = "HOP_CANT_DIAL_DST"] = 261;
        values[valuesById[262] = "HOP_CANT_OPEN_DST_STREAM"] = 262;
        values[valuesById[270] = "HOP_CANT_SPEAK_RELAY"] = 270;
        values[valuesById[280] = "HOP_CANT_RELAY_TO_SELF"] = 280;
        values[valuesById[320] = "STOP_SRC_ADDR_TOO_LONG"] = 320;
        values[valuesById[321] = "STOP_DST_ADDR_TOO_LONG"] = 321;
        values[valuesById[350] = "STOP_SRC_MULTIADDR_INVALID"] = 350;
        values[valuesById[351] = "STOP_DST_MULTIADDR_INVALID"] = 351;
        values[valuesById[390] = "STOP_RELAY_REFUSED"] = 390;
        values[valuesById[400] = "MALFORMED_MESSAGE"] = 400;
        return values;
    })();

    /**
     * Type enum.
     * @name CircuitRelay.Type
     * @enum {number}
     * @property {number} HOP=1 HOP value
     * @property {number} STOP=2 STOP value
     * @property {number} STATUS=3 STATUS value
     * @property {number} CAN_HOP=4 CAN_HOP value
     */
    CircuitRelay.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "HOP"] = 1;
        values[valuesById[2] = "STOP"] = 2;
        values[valuesById[3] = "STATUS"] = 3;
        values[valuesById[4] = "CAN_HOP"] = 4;
        return values;
    })();

    CircuitRelay.Peer = (function() {

        /**
         * Properties of a Peer.
         * @memberof CircuitRelay
         * @interface IPeer
         * @property {Uint8Array} id Peer id
         * @property {Array.<Uint8Array>|null} [addrs] Peer addrs
         */

        /**
         * Constructs a new Peer.
         * @memberof CircuitRelay
         * @classdesc Represents a Peer.
         * @implements IPeer
         * @constructor
         * @param {CircuitRelay.IPeer=} [p] Properties to set
         */
        function Peer(p) {
            this.addrs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Peer id.
         * @member {Uint8Array} id
         * @memberof CircuitRelay.Peer
         * @instance
         */
        Peer.prototype.id = $util.newBuffer([]);

        /**
         * Peer addrs.
         * @member {Array.<Uint8Array>} addrs
         * @memberof CircuitRelay.Peer
         * @instance
         */
        Peer.prototype.addrs = $util.emptyArray;

        /**
         * Encodes the specified Peer message. Does not implicitly {@link CircuitRelay.Peer.verify|verify} messages.
         * @function encode
         * @memberof CircuitRelay.Peer
         * @static
         * @param {CircuitRelay.IPeer} m Peer message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Peer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            w.uint32(10).bytes(m.id);
            if (m.addrs != null && m.addrs.length) {
                for (var i = 0; i < m.addrs.length; ++i)
                    w.uint32(18).bytes(m.addrs[i]);
            }
            return w;
        };

        /**
         * Decodes a Peer message from the specified reader or buffer.
         * @function decode
         * @memberof CircuitRelay.Peer
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {CircuitRelay.Peer} Peer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Peer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.CircuitRelay.Peer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.bytes();
                    break;
                case 2:
                    if (!(m.addrs && m.addrs.length))
                        m.addrs = [];
                    m.addrs.push(r.bytes());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            if (!m.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: m });
            return m;
        };

        /**
         * Creates a Peer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CircuitRelay.Peer
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {CircuitRelay.Peer} Peer
         */
        Peer.fromObject = function fromObject(d) {
            if (d instanceof $root.CircuitRelay.Peer)
                return d;
            var m = new $root.CircuitRelay.Peer();
            if (d.id != null) {
                if (typeof d.id === "string")
                    $util.base64.decode(d.id, m.id = $util.newBuffer($util.base64.length(d.id)), 0);
                else if (d.id.length)
                    m.id = d.id;
            }
            if (d.addrs) {
                if (!Array.isArray(d.addrs))
                    throw TypeError(".CircuitRelay.Peer.addrs: array expected");
                m.addrs = [];
                for (var i = 0; i < d.addrs.length; ++i) {
                    if (typeof d.addrs[i] === "string")
                        $util.base64.decode(d.addrs[i], m.addrs[i] = $util.newBuffer($util.base64.length(d.addrs[i])), 0);
                    else if (d.addrs[i].length)
                        m.addrs[i] = d.addrs[i];
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a Peer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CircuitRelay.Peer
         * @static
         * @param {CircuitRelay.Peer} m Peer
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Peer.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.addrs = [];
            }
            if (o.defaults) {
                if (o.bytes === String)
                    d.id = "";
                else {
                    d.id = [];
                    if (o.bytes !== Array)
                        d.id = $util.newBuffer(d.id);
                }
            }
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = o.bytes === String ? $util.base64.encode(m.id, 0, m.id.length) : o.bytes === Array ? Array.prototype.slice.call(m.id) : m.id;
            }
            if (m.addrs && m.addrs.length) {
                d.addrs = [];
                for (var j = 0; j < m.addrs.length; ++j) {
                    d.addrs[j] = o.bytes === String ? $util.base64.encode(m.addrs[j], 0, m.addrs[j].length) : o.bytes === Array ? Array.prototype.slice.call(m.addrs[j]) : m.addrs[j];
                }
            }
            return d;
        };

        /**
         * Converts this Peer to JSON.
         * @function toJSON
         * @memberof CircuitRelay.Peer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Peer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Peer;
    })();

    return CircuitRelay;
})();

$root.HopMessage = (function() {

    /**
     * Properties of a HopMessage.
     * @exports IHopMessage
     * @interface IHopMessage
     * @property {HopMessage.Type} type HopMessage type
     * @property {IPeer|null} [peer] HopMessage peer
     * @property {IReservation|null} [reservation] HopMessage reservation
     * @property {ILimit|null} [limit] HopMessage limit
     * @property {Status|null} [status] HopMessage status
     */

    /**
     * Constructs a new HopMessage.
     * @exports HopMessage
     * @classdesc Represents a HopMessage.
     * @implements IHopMessage
     * @constructor
     * @param {IHopMessage=} [p] Properties to set
     */
    function HopMessage(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HopMessage type.
     * @member {HopMessage.Type} type
     * @memberof HopMessage
     * @instance
     */
    HopMessage.prototype.type = 0;

    /**
     * HopMessage peer.
     * @member {IPeer|null|undefined} peer
     * @memberof HopMessage
     * @instance
     */
    HopMessage.prototype.peer = null;

    /**
     * HopMessage reservation.
     * @member {IReservation|null|undefined} reservation
     * @memberof HopMessage
     * @instance
     */
    HopMessage.prototype.reservation = null;

    /**
     * HopMessage limit.
     * @member {ILimit|null|undefined} limit
     * @memberof HopMessage
     * @instance
     */
    HopMessage.prototype.limit = null;

    /**
     * HopMessage status.
     * @member {Status} status
     * @memberof HopMessage
     * @instance
     */
    HopMessage.prototype.status = 100;

    /**
     * Encodes the specified HopMessage message. Does not implicitly {@link HopMessage.verify|verify} messages.
     * @function encode
     * @memberof HopMessage
     * @static
     * @param {IHopMessage} m HopMessage message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HopMessage.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.peer != null && Object.hasOwnProperty.call(m, "peer"))
            $root.Peer.encode(m.peer, w.uint32(18).fork()).ldelim();
        if (m.reservation != null && Object.hasOwnProperty.call(m, "reservation"))
            $root.Reservation.encode(m.reservation, w.uint32(26).fork()).ldelim();
        if (m.limit != null && Object.hasOwnProperty.call(m, "limit"))
            $root.Limit.encode(m.limit, w.uint32(34).fork()).ldelim();
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(40).int32(m.status);
        return w;
    };

    /**
     * Decodes a HopMessage message from the specified reader or buffer.
     * @function decode
     * @memberof HopMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HopMessage} HopMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HopMessage.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HopMessage();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.peer = $root.Peer.decode(r, r.uint32());
                break;
            case 3:
                m.reservation = $root.Reservation.decode(r, r.uint32());
                break;
            case 4:
                m.limit = $root.Limit.decode(r, r.uint32());
                break;
            case 5:
                m.status = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    /**
     * Creates a HopMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HopMessage
     * @static
     * @param {Object.<string,*>} d Plain object
     * @returns {HopMessage} HopMessage
     */
    HopMessage.fromObject = function fromObject(d) {
        if (d instanceof $root.HopMessage)
            return d;
        var m = new $root.HopMessage();
        switch (d.type) {
        case "RESERVE":
        case 0:
            m.type = 0;
            break;
        case "CONNECT":
        case 1:
            m.type = 1;
            break;
        case "STATUS":
        case 2:
            m.type = 2;
            break;
        }
        if (d.peer != null) {
            if (typeof d.peer !== "object")
                throw TypeError(".HopMessage.peer: object expected");
            m.peer = $root.Peer.fromObject(d.peer);
        }
        if (d.reservation != null) {
            if (typeof d.reservation !== "object")
                throw TypeError(".HopMessage.reservation: object expected");
            m.reservation = $root.Reservation.fromObject(d.reservation);
        }
        if (d.limit != null) {
            if (typeof d.limit !== "object")
                throw TypeError(".HopMessage.limit: object expected");
            m.limit = $root.Limit.fromObject(d.limit);
        }
        switch (d.status) {
        case "OK":
        case 100:
            m.status = 100;
            break;
        case "RESERVATION_REFUSED":
        case 200:
            m.status = 200;
            break;
        case "RESOURCE_LIMIT_EXCEEDED":
        case 201:
            m.status = 201;
            break;
        case "PERMISSION_DENIED":
        case 202:
            m.status = 202;
            break;
        case "CONNECTION_FAILED":
        case 203:
            m.status = 203;
            break;
        case "NO_RESERVATION":
        case 204:
            m.status = 204;
            break;
        case "MALFORMED_MESSAGE":
        case 400:
            m.status = 400;
            break;
        case "UNEXPECTED_MESSAGE":
        case 401:
            m.status = 401;
            break;
        }
        return m;
    };

    /**
     * Creates a plain object from a HopMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HopMessage
     * @static
     * @param {HopMessage} m HopMessage
     * @param {$protobuf.IConversionOptions} [o] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HopMessage.toObject = function toObject(m, o) {
        if (!o)
            o = {};
        var d = {};
        if (o.defaults) {
            d.type = o.enums === String ? "RESERVE" : 0;
            d.peer = null;
            d.reservation = null;
            d.limit = null;
            d.status = o.enums === String ? "OK" : 100;
        }
        if (m.type != null && m.hasOwnProperty("type")) {
            d.type = o.enums === String ? $root.HopMessage.Type[m.type] : m.type;
        }
        if (m.peer != null && m.hasOwnProperty("peer")) {
            d.peer = $root.Peer.toObject(m.peer, o);
        }
        if (m.reservation != null && m.hasOwnProperty("reservation")) {
            d.reservation = $root.Reservation.toObject(m.reservation, o);
        }
        if (m.limit != null && m.hasOwnProperty("limit")) {
            d.limit = $root.Limit.toObject(m.limit, o);
        }
        if (m.status != null && m.hasOwnProperty("status")) {
            d.status = o.enums === String ? $root.Status[m.status] : m.status;
        }
        return d;
    };

    /**
     * Converts this HopMessage to JSON.
     * @function toJSON
     * @memberof HopMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HopMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @name HopMessage.Type
     * @enum {number}
     * @property {number} RESERVE=0 RESERVE value
     * @property {number} CONNECT=1 CONNECT value
     * @property {number} STATUS=2 STATUS value
     */
    HopMessage.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RESERVE"] = 0;
        values[valuesById[1] = "CONNECT"] = 1;
        values[valuesById[2] = "STATUS"] = 2;
        return values;
    })();

    return HopMessage;
})();

$root.StopMessage = (function() {

    /**
     * Properties of a StopMessage.
     * @exports IStopMessage
     * @interface IStopMessage
     * @property {StopMessage.Type} type StopMessage type
     * @property {IPeer|null} [peer] StopMessage peer
     * @property {ILimit|null} [limit] StopMessage limit
     * @property {Status|null} [status] StopMessage status
     */

    /**
     * Constructs a new StopMessage.
     * @exports StopMessage
     * @classdesc Represents a StopMessage.
     * @implements IStopMessage
     * @constructor
     * @param {IStopMessage=} [p] Properties to set
     */
    function StopMessage(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * StopMessage type.
     * @member {StopMessage.Type} type
     * @memberof StopMessage
     * @instance
     */
    StopMessage.prototype.type = 0;

    /**
     * StopMessage peer.
     * @member {IPeer|null|undefined} peer
     * @memberof StopMessage
     * @instance
     */
    StopMessage.prototype.peer = null;

    /**
     * StopMessage limit.
     * @member {ILimit|null|undefined} limit
     * @memberof StopMessage
     * @instance
     */
    StopMessage.prototype.limit = null;

    /**
     * StopMessage status.
     * @member {Status} status
     * @memberof StopMessage
     * @instance
     */
    StopMessage.prototype.status = 100;

    /**
     * Encodes the specified StopMessage message. Does not implicitly {@link StopMessage.verify|verify} messages.
     * @function encode
     * @memberof StopMessage
     * @static
     * @param {IStopMessage} m StopMessage message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StopMessage.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.peer != null && Object.hasOwnProperty.call(m, "peer"))
            $root.Peer.encode(m.peer, w.uint32(18).fork()).ldelim();
        if (m.limit != null && Object.hasOwnProperty.call(m, "limit"))
            $root.Limit.encode(m.limit, w.uint32(26).fork()).ldelim();
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(32).int32(m.status);
        return w;
    };

    /**
     * Decodes a StopMessage message from the specified reader or buffer.
     * @function decode
     * @memberof StopMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {StopMessage} StopMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StopMessage.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.StopMessage();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            case 2:
                m.peer = $root.Peer.decode(r, r.uint32());
                break;
            case 3:
                m.limit = $root.Limit.decode(r, r.uint32());
                break;
            case 4:
                m.status = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    /**
     * Creates a StopMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StopMessage
     * @static
     * @param {Object.<string,*>} d Plain object
     * @returns {StopMessage} StopMessage
     */
    StopMessage.fromObject = function fromObject(d) {
        if (d instanceof $root.StopMessage)
            return d;
        var m = new $root.StopMessage();
        switch (d.type) {
        case "CONNECT":
        case 0:
            m.type = 0;
            break;
        case "STATUS":
        case 1:
            m.type = 1;
            break;
        }
        if (d.peer != null) {
            if (typeof d.peer !== "object")
                throw TypeError(".StopMessage.peer: object expected");
            m.peer = $root.Peer.fromObject(d.peer);
        }
        if (d.limit != null) {
            if (typeof d.limit !== "object")
                throw TypeError(".StopMessage.limit: object expected");
            m.limit = $root.Limit.fromObject(d.limit);
        }
        switch (d.status) {
        case "OK":
        case 100:
            m.status = 100;
            break;
        case "RESERVATION_REFUSED":
        case 200:
            m.status = 200;
            break;
        case "RESOURCE_LIMIT_EXCEEDED":
        case 201:
            m.status = 201;
            break;
        case "PERMISSION_DENIED":
        case 202:
            m.status = 202;
            break;
        case "CONNECTION_FAILED":
        case 203:
            m.status = 203;
            break;
        case "NO_RESERVATION":
        case 204:
            m.status = 204;
            break;
        case "MALFORMED_MESSAGE":
        case 400:
            m.status = 400;
            break;
        case "UNEXPECTED_MESSAGE":
        case 401:
            m.status = 401;
            break;
        }
        return m;
    };

    /**
     * Creates a plain object from a StopMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StopMessage
     * @static
     * @param {StopMessage} m StopMessage
     * @param {$protobuf.IConversionOptions} [o] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StopMessage.toObject = function toObject(m, o) {
        if (!o)
            o = {};
        var d = {};
        if (o.defaults) {
            d.type = o.enums === String ? "CONNECT" : 0;
            d.peer = null;
            d.limit = null;
            d.status = o.enums === String ? "OK" : 100;
        }
        if (m.type != null && m.hasOwnProperty("type")) {
            d.type = o.enums === String ? $root.StopMessage.Type[m.type] : m.type;
        }
        if (m.peer != null && m.hasOwnProperty("peer")) {
            d.peer = $root.Peer.toObject(m.peer, o);
        }
        if (m.limit != null && m.hasOwnProperty("limit")) {
            d.limit = $root.Limit.toObject(m.limit, o);
        }
        if (m.status != null && m.hasOwnProperty("status")) {
            d.status = o.enums === String ? $root.Status[m.status] : m.status;
        }
        return d;
    };

    /**
     * Converts this StopMessage to JSON.
     * @function toJSON
     * @memberof StopMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StopMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @name StopMessage.Type
     * @enum {number}
     * @property {number} CONNECT=0 CONNECT value
     * @property {number} STATUS=1 STATUS value
     */
    StopMessage.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONNECT"] = 0;
        values[valuesById[1] = "STATUS"] = 1;
        return values;
    })();

    return StopMessage;
})();

$root.Peer = (function() {

    /**
     * Properties of a Peer.
     * @exports IPeer
     * @interface IPeer
     * @property {Uint8Array} id Peer id
     * @property {Array.<Uint8Array>|null} [addrs] Peer addrs
     */

    /**
     * Constructs a new Peer.
     * @exports Peer
     * @classdesc Represents a Peer.
     * @implements IPeer
     * @constructor
     * @param {IPeer=} [p] Properties to set
     */
    function Peer(p) {
        this.addrs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Peer id.
     * @member {Uint8Array} id
     * @memberof Peer
     * @instance
     */
    Peer.prototype.id = $util.newBuffer([]);

    /**
     * Peer addrs.
     * @member {Array.<Uint8Array>} addrs
     * @memberof Peer
     * @instance
     */
    Peer.prototype.addrs = $util.emptyArray;

    /**
     * Encodes the specified Peer message. Does not implicitly {@link Peer.verify|verify} messages.
     * @function encode
     * @memberof Peer
     * @static
     * @param {IPeer} m Peer message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Peer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).bytes(m.id);
        if (m.addrs != null && m.addrs.length) {
            for (var i = 0; i < m.addrs.length; ++i)
                w.uint32(18).bytes(m.addrs[i]);
        }
        return w;
    };

    /**
     * Decodes a Peer message from the specified reader or buffer.
     * @function decode
     * @memberof Peer
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Peer} Peer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Peer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Peer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.bytes();
                break;
            case 2:
                if (!(m.addrs && m.addrs.length))
                    m.addrs = [];
                m.addrs.push(r.bytes());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    /**
     * Creates a Peer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Peer
     * @static
     * @param {Object.<string,*>} d Plain object
     * @returns {Peer} Peer
     */
    Peer.fromObject = function fromObject(d) {
        if (d instanceof $root.Peer)
            return d;
        var m = new $root.Peer();
        if (d.id != null) {
            if (typeof d.id === "string")
                $util.base64.decode(d.id, m.id = $util.newBuffer($util.base64.length(d.id)), 0);
            else if (d.id.length)
                m.id = d.id;
        }
        if (d.addrs) {
            if (!Array.isArray(d.addrs))
                throw TypeError(".Peer.addrs: array expected");
            m.addrs = [];
            for (var i = 0; i < d.addrs.length; ++i) {
                if (typeof d.addrs[i] === "string")
                    $util.base64.decode(d.addrs[i], m.addrs[i] = $util.newBuffer($util.base64.length(d.addrs[i])), 0);
                else if (d.addrs[i].length)
                    m.addrs[i] = d.addrs[i];
            }
        }
        return m;
    };

    /**
     * Creates a plain object from a Peer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Peer
     * @static
     * @param {Peer} m Peer
     * @param {$protobuf.IConversionOptions} [o] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Peer.toObject = function toObject(m, o) {
        if (!o)
            o = {};
        var d = {};
        if (o.arrays || o.defaults) {
            d.addrs = [];
        }
        if (o.defaults) {
            if (o.bytes === String)
                d.id = "";
            else {
                d.id = [];
                if (o.bytes !== Array)
                    d.id = $util.newBuffer(d.id);
            }
        }
        if (m.id != null && m.hasOwnProperty("id")) {
            d.id = o.bytes === String ? $util.base64.encode(m.id, 0, m.id.length) : o.bytes === Array ? Array.prototype.slice.call(m.id) : m.id;
        }
        if (m.addrs && m.addrs.length) {
            d.addrs = [];
            for (var j = 0; j < m.addrs.length; ++j) {
                d.addrs[j] = o.bytes === String ? $util.base64.encode(m.addrs[j], 0, m.addrs[j].length) : o.bytes === Array ? Array.prototype.slice.call(m.addrs[j]) : m.addrs[j];
            }
        }
        return d;
    };

    /**
     * Converts this Peer to JSON.
     * @function toJSON
     * @memberof Peer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Peer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Peer;
})();

$root.Reservation = (function() {

    /**
     * Properties of a Reservation.
     * @exports IReservation
     * @interface IReservation
     * @property {number} expire Reservation expire
     * @property {Array.<Uint8Array>|null} [addrs] Reservation addrs
     * @property {Uint8Array|null} [voucher] Reservation voucher
     */

    /**
     * Constructs a new Reservation.
     * @exports Reservation
     * @classdesc Represents a Reservation.
     * @implements IReservation
     * @constructor
     * @param {IReservation=} [p] Properties to set
     */
    function Reservation(p) {
        this.addrs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Reservation expire.
     * @member {number} expire
     * @memberof Reservation
     * @instance
     */
    Reservation.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Reservation addrs.
     * @member {Array.<Uint8Array>} addrs
     * @memberof Reservation
     * @instance
     */
    Reservation.prototype.addrs = $util.emptyArray;

    /**
     * Reservation voucher.
     * @member {Uint8Array} voucher
     * @memberof Reservation
     * @instance
     */
    Reservation.prototype.voucher = $util.newBuffer([]);

    /**
     * Encodes the specified Reservation message. Does not implicitly {@link Reservation.verify|verify} messages.
     * @function encode
     * @memberof Reservation
     * @static
     * @param {IReservation} m Reservation message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Reservation.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).uint64(m.expire);
        if (m.addrs != null && m.addrs.length) {
            for (var i = 0; i < m.addrs.length; ++i)
                w.uint32(18).bytes(m.addrs[i]);
        }
        if (m.voucher != null && Object.hasOwnProperty.call(m, "voucher"))
            w.uint32(26).bytes(m.voucher);
        return w;
    };

    /**
     * Decodes a Reservation message from the specified reader or buffer.
     * @function decode
     * @memberof Reservation
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Reservation} Reservation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Reservation.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Reservation();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.expire = r.uint64();
                break;
            case 2:
                if (!(m.addrs && m.addrs.length))
                    m.addrs = [];
                m.addrs.push(r.bytes());
                break;
            case 3:
                m.voucher = r.bytes();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("expire"))
            throw $util.ProtocolError("missing required 'expire'", { instance: m });
        return m;
    };

    /**
     * Creates a Reservation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Reservation
     * @static
     * @param {Object.<string,*>} d Plain object
     * @returns {Reservation} Reservation
     */
    Reservation.fromObject = function fromObject(d) {
        if (d instanceof $root.Reservation)
            return d;
        var m = new $root.Reservation();
        if (d.expire != null) {
            if ($util.Long)
                (m.expire = $util.Long.fromValue(d.expire)).unsigned = true;
            else if (typeof d.expire === "string")
                m.expire = parseInt(d.expire, 10);
            else if (typeof d.expire === "number")
                m.expire = d.expire;
            else if (typeof d.expire === "object")
                m.expire = new $util.LongBits(d.expire.low >>> 0, d.expire.high >>> 0).toNumber(true);
        }
        if (d.addrs) {
            if (!Array.isArray(d.addrs))
                throw TypeError(".Reservation.addrs: array expected");
            m.addrs = [];
            for (var i = 0; i < d.addrs.length; ++i) {
                if (typeof d.addrs[i] === "string")
                    $util.base64.decode(d.addrs[i], m.addrs[i] = $util.newBuffer($util.base64.length(d.addrs[i])), 0);
                else if (d.addrs[i].length)
                    m.addrs[i] = d.addrs[i];
            }
        }
        if (d.voucher != null) {
            if (typeof d.voucher === "string")
                $util.base64.decode(d.voucher, m.voucher = $util.newBuffer($util.base64.length(d.voucher)), 0);
            else if (d.voucher.length)
                m.voucher = d.voucher;
        }
        return m;
    };

    /**
     * Creates a plain object from a Reservation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Reservation
     * @static
     * @param {Reservation} m Reservation
     * @param {$protobuf.IConversionOptions} [o] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Reservation.toObject = function toObject(m, o) {
        if (!o)
            o = {};
        var d = {};
        if (o.arrays || o.defaults) {
            d.addrs = [];
        }
        if (o.defaults) {
            if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.expire = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
            } else
                d.expire = o.longs === String ? "0" : 0;
            if (o.bytes === String)
                d.voucher = "";
            else {
                d.voucher = [];
                if (o.bytes !== Array)
                    d.voucher = $util.newBuffer(d.voucher);
            }
        }
        if (m.expire != null && m.hasOwnProperty("expire")) {
            if (typeof m.expire === "number")
                d.expire = o.longs === String ? String(m.expire) : m.expire;
            else
                d.expire = o.longs === String ? $util.Long.prototype.toString.call(m.expire) : o.longs === Number ? new $util.LongBits(m.expire.low >>> 0, m.expire.high >>> 0).toNumber(true) : m.expire;
        }
        if (m.addrs && m.addrs.length) {
            d.addrs = [];
            for (var j = 0; j < m.addrs.length; ++j) {
                d.addrs[j] = o.bytes === String ? $util.base64.encode(m.addrs[j], 0, m.addrs[j].length) : o.bytes === Array ? Array.prototype.slice.call(m.addrs[j]) : m.addrs[j];
            }
        }
        if (m.voucher != null && m.hasOwnProperty("voucher")) {
            d.voucher = o.bytes === String ? $util.base64.encode(m.voucher, 0, m.voucher.length) : o.bytes === Array ? Array.prototype.slice.call(m.voucher) : m.voucher;
        }
        return d;
    };

    /**
     * Converts this Reservation to JSON.
     * @function toJSON
     * @memberof Reservation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Reservation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Reservation;
})();

$root.Limit = (function() {

    /**
     * Properties of a Limit.
     * @exports ILimit
     * @interface ILimit
     * @property {number|null} [duration] Limit duration
     * @property {number|null} [data] Limit data
     */

    /**
     * Constructs a new Limit.
     * @exports Limit
     * @classdesc Represents a Limit.
     * @implements ILimit
     * @constructor
     * @param {ILimit=} [p] Properties to set
     */
    function Limit(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Limit duration.
     * @member {number} duration
     * @memberof Limit
     * @instance
     */
    Limit.prototype.duration = 0;

    /**
     * Limit data.
     * @member {number} data
     * @memberof Limit
     * @instance
     */
    Limit.prototype.data = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Encodes the specified Limit message. Does not implicitly {@link Limit.verify|verify} messages.
     * @function encode
     * @memberof Limit
     * @static
     * @param {ILimit} m Limit message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Limit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.duration != null && Object.hasOwnProperty.call(m, "duration"))
            w.uint32(8).uint32(m.duration);
        if (m.data != null && Object.hasOwnProperty.call(m, "data"))
            w.uint32(16).uint64(m.data);
        return w;
    };

    /**
     * Decodes a Limit message from the specified reader or buffer.
     * @function decode
     * @memberof Limit
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Limit} Limit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Limit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Limit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.duration = r.uint32();
                break;
            case 2:
                m.data = r.uint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Creates a Limit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Limit
     * @static
     * @param {Object.<string,*>} d Plain object
     * @returns {Limit} Limit
     */
    Limit.fromObject = function fromObject(d) {
        if (d instanceof $root.Limit)
            return d;
        var m = new $root.Limit();
        if (d.duration != null) {
            m.duration = d.duration >>> 0;
        }
        if (d.data != null) {
            if ($util.Long)
                (m.data = $util.Long.fromValue(d.data)).unsigned = true;
            else if (typeof d.data === "string")
                m.data = parseInt(d.data, 10);
            else if (typeof d.data === "number")
                m.data = d.data;
            else if (typeof d.data === "object")
                m.data = new $util.LongBits(d.data.low >>> 0, d.data.high >>> 0).toNumber(true);
        }
        return m;
    };

    /**
     * Creates a plain object from a Limit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Limit
     * @static
     * @param {Limit} m Limit
     * @param {$protobuf.IConversionOptions} [o] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Limit.toObject = function toObject(m, o) {
        if (!o)
            o = {};
        var d = {};
        if (o.defaults) {
            d.duration = 0;
            if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.data = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
            } else
                d.data = o.longs === String ? "0" : 0;
        }
        if (m.duration != null && m.hasOwnProperty("duration")) {
            d.duration = m.duration;
        }
        if (m.data != null && m.hasOwnProperty("data")) {
            if (typeof m.data === "number")
                d.data = o.longs === String ? String(m.data) : m.data;
            else
                d.data = o.longs === String ? $util.Long.prototype.toString.call(m.data) : o.longs === Number ? new $util.LongBits(m.data.low >>> 0, m.data.high >>> 0).toNumber(true) : m.data;
        }
        return d;
    };

    /**
     * Converts this Limit to JSON.
     * @function toJSON
     * @memberof Limit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Limit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Limit;
})();

/**
 * Status enum.
 * @exports Status
 * @enum {number}
 * @property {number} OK=100 OK value
 * @property {number} RESERVATION_REFUSED=200 RESERVATION_REFUSED value
 * @property {number} RESOURCE_LIMIT_EXCEEDED=201 RESOURCE_LIMIT_EXCEEDED value
 * @property {number} PERMISSION_DENIED=202 PERMISSION_DENIED value
 * @property {number} CONNECTION_FAILED=203 CONNECTION_FAILED value
 * @property {number} NO_RESERVATION=204 NO_RESERVATION value
 * @property {number} MALFORMED_MESSAGE=400 MALFORMED_MESSAGE value
 * @property {number} UNEXPECTED_MESSAGE=401 UNEXPECTED_MESSAGE value
 */
$root.Status = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[100] = "OK"] = 100;
    values[valuesById[200] = "RESERVATION_REFUSED"] = 200;
    values[valuesById[201] = "RESOURCE_LIMIT_EXCEEDED"] = 201;
    values[valuesById[202] = "PERMISSION_DENIED"] = 202;
    values[valuesById[203] = "CONNECTION_FAILED"] = 203;
    values[valuesById[204] = "NO_RESERVATION"] = 204;
    values[valuesById[400] = "MALFORMED_MESSAGE"] = 400;
    values[valuesById[401] = "UNEXPECTED_MESSAGE"] = 401;
    return values;
})();

module.exports = $root;