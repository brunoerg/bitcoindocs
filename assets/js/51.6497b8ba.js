(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{426:function(t,e,s){"use strict";s.r(e);var n=s(43),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_144"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_144"}},[t._v("#")]),t._v(" 144")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  BIP: 144\n  Layer: Peer Services\n  Title: Segregated Witness (Peer Services)\n  Author: Eric Lombrozo <elombrozo@gmail.com>\n          Pieter Wuille <pieter.wuille@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0144\n  Status: Final\n  Type: Standards Track\n  Created: 2016-01-08\n  License: PD\n")])])]),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("This BIP defines new messages and serialization formats for propagation\nof transactions and blocks committing to segregated witness structures.")]),t._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v("In addition to defining witness structures and requiring commitments in\nfuture blocks\n("),s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP141"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("Consensus segwit BIP), new mechanisms must be defined to allow peers\nto advertise support for segregated witness and to relay the witness\nstructures and request them from other peers without breaking\ncompatibility with older nodes.")])]),t._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),s("h3",{attrs:{id:"serialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serialization"}},[t._v("#")]),t._v(" Serialization")]),t._v(" "),s("p",[t._v("A new serialization format for tx messages is added to the peer-to-peer\nprotocol.")]),t._v(" "),s("p",[t._v("The serialization has the following structure:")]),t._v(" "),s("p",[t._v("Field Size   Name               Type                   Description")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("4            version            int32_t                Transaction data format version\n1            marker             char                   Must be zero\n1            flag               char                   Must be nonzero\n1+           txin_count         var_int                Number of transaction inputs\n41+          txins              txin[]               A list of one or more transaction inputs\n1+           txout_count        var_int                Number of transaction outputs\n9+           txouts             txouts[]             A list of one or more transaction outputs\n1+           script_witnesses   script_witnesses[]   The witness structure as a serialized byte array\n4            lock_time          uint32_t               The block number or timestamp until which the transaction is locked")]),t._v(" "),s("p",[t._v("Parsers supporting this BIP will be able to distinguish between the old\nserialization format (without the witness) and this one. The marker byte\nis set to zero so that this structure will never parse as a valid\ntransaction in a parser that does not support this BIP. If parsing were\nto succeed, such a transaction would contain no inputs and a single\noutput.")]),t._v(" "),s("p",[t._v("If the witness is empty, the old serialization format must be used.")]),t._v(" "),s("p",[t._v("Currently, the only witness objects type supported are script witnesses\nwhich consist of a stack of byte arrays. It is encoded as a var_int item\ncount followed by each item encoded as a var_int length followed by a\nstring of bytes. Each txin has its own script witness. The number of\nscript witnesses is not explicitly encoded as it is implied by\ntxin_count. Empty script witnesses are encoded as a zero byte. The order\nof the script witnesses follows the same order as the associated txins.")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Rationale for not having an independent message type with its own\nserialization")]),t._v(': this would require separate "tx" and "block"\nmessages, and all RPC calls operating on raw transactions would need\nto be duplicated, or need inefficient or nondeterministic guesswork\nto know which type is to be used.')])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Rationale for not using just a single 0x00 byte as marker")]),t._v(": that\nwould lead to empty transactions (no inputs, no outputs, which are\nused in some tests) to be interpreted as new serialized data.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Rationale for the 0x01 flag byte in between")]),t._v(": this will allow us\nto easily add more extra non-committed data to transactions (like\ntxouts being spent, ...). It can be interpreted as a bitvector.")])])]),t._v(" "),s("h3",{attrs:{id:"handshake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handshake"}},[t._v("#")]),t._v(" Handshake")]),t._v(" "),s("p",[t._v("A node will signal that it can provide witnesses using the following\nservice bit")]),t._v(" "),s("p",[s("code",[t._v("NODE_WITNESS = (1 << 3)")]),s("br"),t._v(" "),s("code")]),t._v(" "),s("h3",{attrs:{id:"hashes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashes"}},[t._v("#")]),t._v(" Hashes")]),t._v(" "),s("p",[t._v("Transaction hashes used in the transaction merkle tree and txin\noutpoints are always computed using the old non-witness serialization.")]),t._v(" "),s("p",[t._v("Support for a new hash including the witness data is added that is\ncomputed from the new witness serialization. (Note that transactions\nwith an empty witness always use the old serialization, and therefore,\nthey have witness hash equal to normal hash.)")]),t._v(" "),s("p",[s("code",[t._v("<img src=bip-0144/witnesstx.png>")]),t._v(" "),s("code",[t._v("</img>")])]),t._v(" "),s("h3",{attrs:{id:"relay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relay"}},[t._v("#")]),t._v(" Relay")]),t._v(" "),s("p",[t._v("New inv types MSG_WITNESS_TX (0x40000001, or (1<<30)+MSG_TX) and\nMSG_WITNESS_BLOCK (0x40000002, or (1<<30)+MSG_BLOCK) are added, only\nfor use in getdata. Inventory messages themselves still use just MSG_TX\nand MSG_BLOCK, similar to MSG_FILTERED_BLOCK. A further inv type\nMSG_FILTERED_WITNESS_BLOCK (0x40000003, or (1<<30)+MSG_FILTERED_BLOCK)\nis reserved for future use.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Rationale for not advertizing witnessness in invs")]),t._v(": we don't\nalways use invs anymore (with 'sendheaders' BIP 130), plus it's\nnot useful: implicitly, every transaction and block have a witness,\nold ones just have empty ones.")])]),t._v(" "),s("p",[t._v("MSG_WITNESS_TX getdata requests should use the non-witness serialized\nhash. The peer shall respond with a tx message, and if the witness\nstructure is nonempty, the witness serialization shall be used.")]),t._v(" "),s("p",[t._v("MSG_WITNESS_BLOCK requests will return a block message with transactions\nthat have a witness using witness serialization.")]),t._v(" "),s("h2",{attrs:{id:"credits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[t._v("#")]),t._v(" Credits")]),t._v(" "),s("p",[t._v("Special thanks to Gregory Maxwell for originating many of the ideas in\nthis BIP and Luke-Jr for figuring out how to deploy this as a soft fork.")]),t._v(" "),s("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[t._v("#")]),t._v(" Reference Implementation {#reference_implementation}")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/pull/8149",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/bitcoin/bitcoin/pull/8149"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),s("p",[t._v("This document is placed in the public domain.")])])}),[],!1,null,null,null);e.default=a.exports}}]);