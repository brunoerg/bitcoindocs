(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{456:function(e,t,n){"use strict";n.r(t);var i=n(43),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_320"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_320"}},[e._v("#")]),e._v(" 320")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("  BIP: 320\n  Title: nVersion bits for general purpose use\n  Author: BtcDrak <btcdrak@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0320\n  Status: Draft\n  Type: Standards Track\n  Created: 2018-03-01\n  License: BSD-3-Clause\n           CC0-1.0\n")])])]),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v("This BIP reserves 16 bits of the block header nVersion field for general\npurpose use and removes their meaning for the purpose of version bits\nsoft-fork signalling.")]),e._v(" "),n("p",[e._v('The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL\nNOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and\n"OPTIONAL" in this document are to be interpreted as described in RFC\n2119.')]),e._v(" "),n("h2",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),n("p",[e._v("There are a variety of things that miners may desire to use some of the\nnVersion field bits for. However, due to their use to coordinate miner\nactivated soft-forks, full node software will generate false warnings\nabout unknown soft forks if those bits are used for non soft fork\nsignalling purposes. By reserving bits from the nVersion field for\ngeneral use, node software can be updated to ignore those bits and\ntherefore will not emit false warnings. Reserving 16 bits for general\nuse leaves enough for 13 parallel soft-forks using version bits.")]),e._v(" "),n("h3",{attrs:{id:"example-uses-example-uses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-uses-example-uses"}},[e._v("#")]),e._v(" Example Uses {#example_uses}")]),e._v(" "),n("p",[e._v("The following are example cases that would benefit from using some of\nthe bits from the nVersion field. This list is not exhaustive.")]),e._v(" "),n("p",[e._v("Bitcoin mining hardware currently can exhaust the 32 bit nonce field in\nless than 200ms requiring the controller to distribute new jobs very\nfrequently to each mining chip consuming a lot of bandwidth and CPU\ntime. This can be greatly reduced by rolling more bits. Rolling too many\nbits from nTime is not ideal because it may distort the timestamps over\na longer period.")]),e._v(" "),n("p",[e._v('Version-rolling AsicBoost requires two bits from the nVersion field to\ncalculate 4-way collisions. Any two bits can be used and mining\nequipment can negotiate which bits are to be used with mining pools via\nthe Stratum "version-rolling" extension.')]),e._v(" "),n("h2",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),n("p",[e._v("Sixteen bits from the block header nVersion field, starting from 13 and\nending at 28 inclusive (0x1fffe000), are reserved for general use and\nremoved from BIP8 and BIP9 specifications. A mask of 0xe0001fff should\nbe applied to nVersion bits so bits 13-28 inclusive will be ignored for\nsoft-fork signalling and unknown soft-fork warnings.")]),e._v(" "),n("p",[e._v("This specification does not reserve specific bits for specific purposes.")]),e._v(" "),n("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference Implementation {#reference_implementation}")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/btcdrak/bitcoin/commit/d12516e136d4a8952904a13eedc9f4225f35dc3b",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/btcdrak/bitcoin/commit/d12516e136d4a8952904a13eedc9f4225f35dc3b"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"backwards-compatibility-backwards-compatibility"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility-backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility {#backwards_compatibility}")]),e._v(" "),n("p",[e._v("Non-upgraded nodes will interpret the reserved bits of this proposal as\nsignals for soft forks, and may additionally activate the warning system\nfor unknown soft forks.")]),e._v(" "),n("p",[e._v("This proposal does not require a soft fork to implement.")]),e._v(" "),n("p",[e._v("At the time of writing no known soft forks are pending using any of 16\nbits reserved in this BIP, and given that a non-trivial percentage of\nthe hashrate is already making uses of those bits, future soft forks\nSHOULD NOT utilise those bits for activation signalling.")]),e._v(" "),n("h2",{attrs:{id:"acknowledgements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),n("p",[e._v("Timo Hanke and Sergio Lerner for originally proposing 15-bit extra\nnNonce2.")]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("p",[n("a",{attrs:{href:"bip-0008.mediawiki",title:"wikilink"}},[e._v("BIP8")])]),e._v(" "),n("p",[n("a",{attrs:{href:"bip-0009.mediawiki",title:"wikilink"}},[e._v("BIP9")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://arxiv.org/pdf/1604.00575.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("AsicBoost white paper"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/BlockheaderNonce2/bitcoin/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blockheader Extra nNonce2\nproposal"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/slushpool/stratumprotocol/blob/master/stratum-extensions.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stratum protocol extension BIP for\nversion-rolling"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),n("p",[e._v("This document is dual licensed as BSD 3-clause, and Creative Commons CC0\n1.0 Universal.")])])}),[],!1,null,null,null);t.default=r.exports}}]);