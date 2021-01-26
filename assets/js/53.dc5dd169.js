(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{428:function(e,t,i){"use strict";i.r(t);var a=i(43),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_146"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_146"}},[e._v("#")]),e._v(" 146")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("  BIP: 146\n  Layer: Consensus (soft fork)\n  Title: Dealing with signature encoding malleability\n  Author: Johnson Lau <jl2012@xbt.hk>\n          Pieter Wuille <pieter.wuille@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0146\n  Status: Withdrawn\n  Type: Standards Track\n  Created: 2016-08-16\n  License: PD\n")])])]),i("h2",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),i("p",[e._v("This document specifies proposed changes to the Bitcoin transaction\nvalidity rules to fix signature malleability related to ECDSA signature\nencoding.")]),e._v(" "),i("h2",{attrs:{id:"motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),i("p",[e._v("Signature malleability refers to the ability of any relay node on the\nnetwork to transform the signature in transactions, with no access to\nthe relevant private keys required. For non-segregated witness\ntransactions, signature malleability will change the "),i("code",[e._v("txid")]),e._v(" and\ninvalidate any unconfirmed child transactions. Although the "),i("code",[e._v("txid")]),e._v(" of\nsegregated witness\n("),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP141"),i("OutboundLink")],1),e._v(")\ntransactions is not third party malleable, this malleability vector will\nchange the "),i("code",[e._v("wtxid")]),e._v(" and may reduce the efficiency of compact block relay\n("),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP152"),i("OutboundLink")],1),e._v(").")]),e._v(" "),i("p",[e._v("Since the enforcement of Strict DER signatures\n("),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP66"),i("OutboundLink")],1),e._v("),\nthere are 2 remaining known sources of malleability in ECDSA signatures:")]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("Inherent ECDSA signature malleability")]),e._v(": ECDSA signatures are\ninherently malleable as taking the negative of the number S inside\n(modulo the curve order) does not invalidate it.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Malleability of failing signature")]),e._v(": If a signature failed to\nvalidate in "),i("code",[e._v("OP_CHECKSIG")]),e._v(" or "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(", a "),i("code",[e._v("FALSE")]),e._v(" would be\nreturned to the stack and the script evaluation would continue. The\nfailing signature may take any value, as long as it follows all the\nrules described in BIP66.")])])]),e._v(" "),i("p",[e._v("This document specifies new rules to fix the aforesaid signature\nmalleability.")]),e._v(" "),i("h2",{attrs:{id:"specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),i("p",[e._v("To fix signature encoding malleability, the following new rules are\napplied to pre-segregated witness and segregated witness scripts:")]),e._v(" "),i("h3",{attrs:{id:"low-s"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#low-s"}},[e._v("#")]),e._v(" LOW_S")]),e._v(" "),i("p",[e._v("We require that the S value inside ECDSA signatures is at most the curve\norder divided by 2 (essentially restricting this value to its lower half\nrange). Every signature passed to "),i("code",[e._v("OP_CHECKSIG")]),e._v("[^1],\n"),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(", "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(", or "),i("code",[e._v("OP_CHECKMULTISIGVERIFY")]),e._v(", to\nwhich ECDSA verification is applied, MUST use a S value between "),i("code",[e._v("0x1")]),e._v("\nand\n"),i("code",[e._v("0x7FFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 5D576E73 57A4501D DFE92F46 681B20A0")]),e._v("\n(inclusive) with strict DER encoding (see\n"),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP66"),i("OutboundLink")],1),e._v(").")]),e._v(" "),i("p",[e._v("If a signature passing to ECDSA verification does not pass the Low S\nvalue check and is not an empty byte array, the entire script evaluates\nto false immediately.")]),e._v(" "),i("p",[e._v("A high S value in signature could be trivially replaced by\n"),i("code",[e._v("S' = 0xFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141 - S")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"nullfail"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nullfail"}},[e._v("#")]),e._v(" NULLFAIL")]),e._v(" "),i("p",[e._v("If an "),i("code",[e._v("OP_CHECKSIG")]),e._v(" is trying to return a "),i("code",[e._v("FALSE")]),e._v(" value to the stack, we\nrequire that the relevant signature must be an empty byte array.")]),e._v(" "),i("p",[e._v("If an "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(" is trying to return a "),i("code",[e._v("FALSE")]),e._v(" value to the\nstack, we require that all signatures passing to this "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v("\nmust be empty byte arrays, even the processing of some signatures might\nhave been skipped due to early termination of the signature\nverification.")]),e._v(" "),i("p",[e._v("Otherwise, the entire script evaluates to false immediately.")]),e._v(" "),i("h2",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("p",[e._v("The following examples are the combined results of the LOW_S and\nNULLFAIL rules.[^2]")]),e._v(" "),i("p",[e._v("Notation:")]),e._v(" "),i("p",[i("code",[e._v("CO       : curve order = 0xFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141")]),i("br"),e._v(" "),i("code",[e._v("HCO      : half curve order = CO / 2 = 0x7FFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 5D576E73 57A4501D DFE92F46 681B20A0")]),i("br"),e._v(" "),i("code",[e._v("P1, P2   : valid, serialized, public keys")]),i("br"),e._v(" "),i("code",[e._v("S1L, S2L : valid low S value signatures using respective keys P1 and P2 (1 ≤ S ≤ HCO)")]),i("br"),e._v(" "),i("code",[e._v("S1H, S2H : signatures with high S value (otherwise valid) using respective keys P1 and P2 (HCO < S < CO)")]),i("br"),e._v(" "),i("code",[e._v("F        : any BIP66-compliant non-empty byte array but not a valid signature")])]),e._v(" "),i("p",[e._v("These scripts will return a "),i("code",[e._v("TRUE")]),e._v(" to the stack as before:")]),e._v(" "),i("p",[i("code",[e._v("S1L P1 CHECKSIG")]),i("br"),e._v(" "),i("code",[e._v("0 S1L S2L 2 P1 P2 2 CHECKMULTISIG")])]),e._v(" "),i("p",[e._v("These scripts will return a "),i("code",[e._v("FALSE")]),e._v(" to the stack as before:")]),e._v(" "),i("p",[i("code",[e._v("0 P1 CHECKSIG")]),i("br"),e._v(" "),i("code",[e._v("0 0 0 2 P1 P2 2 CHECKMULTISIG")])]),e._v(" "),i("p",[e._v("These previously "),i("code",[e._v("TRUE")]),e._v(" scripts will fail immediately under the new\nrules:")]),e._v(" "),i("p",[i("code",[e._v("S1H P1 CHECKSIG")]),i("br"),e._v(" "),i("code",[e._v("0 S1H S2L 2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 S1L S2H 2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 S1H S2H 2 P1 P2 2 CHECKMULTISIG")])]),e._v(" "),i("p",[e._v("These previously "),i("code",[e._v("FALSE")]),e._v(" scripts will fail immediately under the new\nrules:")]),e._v(" "),i("p",[i("code",[e._v("F P1 CHECKSIG")]),i("br"),e._v(" "),i("code",[e._v("0 S2L S1L 2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 S1L F   2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 F   S2L 2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 S1L 0   2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 0   S2L 2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 F   0   2 P1 P2 2 CHECKMULTISIG")]),i("br"),e._v(" "),i("code",[e._v("0 0   F   2 P1 P2 2 CHECKMULTISIG")])]),e._v(" "),i("h2",{attrs:{id:"deployment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),i("p",[e._v('This BIP will be deployed by "version bits"\n'),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP9"),i("OutboundLink")],1),e._v(".\nDetails TBD.")]),e._v(" "),i("p",[e._v("For Bitcoin mainnet, the BIP9 starttime will be midnight TBD UTC (Epoch\ntimestamp TBD) and BIP9 timeout will be midnight TBD UTC (Epoch\ntimestamp TBD).")]),e._v(" "),i("p",[e._v("For Bitcoin testnet, the BIP9 starttime will be midnight TBD UTC (Epoch\ntimestamp TBD) and BIP9 timeout will be midnight TBD UTC (Epoch\ntimestamp TBD).")]),e._v(" "),i("h2",{attrs:{id:"compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),i("p",[e._v("The reference client has produced LOW_S compatible signatures since\nv0.9.0, and the LOW_S rule has been enforced as relay policy by the\nreference client since v0.11.1. As of August 2016, very few transactions\nviolating the requirement are being added to the chain. For all\nscriptPubKey types in actual use, non-compliant signatures can trivially\nbe converted into compliant ones, so there is no loss of functionality\nby these requirements.")]),e._v(" "),i("p",[e._v("Scripts with failing "),i("code",[e._v("OP_CHECKSIG")]),e._v(" or "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(" rarely happen\non the chain. The NULLFAIL rule has been enforced as relay policy by the\nreference client since v0.13.1.")]),e._v(" "),i("p",[e._v("Users MUST pay extra attention to these new rules when designing exotic\nscripts.")]),e._v(" "),i("h2",{attrs:{id:"implementation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),i("p",[e._v("Implementations for the reference client is available at:")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/35fe0393f216aa6020fc929272118eade5628636/src/script/interpreter.cpp#L185",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bitcoin/blob/35fe0393f216aa6020fc929272118eade5628636/src/script/interpreter.cpp#L185"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("and")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/pull/8634",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bitcoin/pull/8634"),i("OutboundLink")],1)]),e._v(" "),i("h2",{attrs:{id:"footnotes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#footnotes"}},[e._v("#")]),e._v(" Footnotes")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("<references />\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br")])]),i("h2",{attrs:{id:"acknowledgements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),i("p",[e._v("This document is extracted from the previous\n"),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP62"),i("OutboundLink")],1),e._v("\nproposal which had input from various people.")]),e._v(" "),i("h2",{attrs:{id:"copyright"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),i("p",[e._v("This document is placed in the public domain.")]),e._v(" "),i("p",[e._v("[^1]: Including pay-to-witness-public-key-hash (P2WPKH) described in\nBIP141")]),e._v(" "),i("p",[e._v("[^2]: Please note that due to implementation details in reference client\nv0.13.1, some signatures with S value higher than the half curve\norder might pass the LOW_S test. However, such signatures are\ncertainly invalid, and will fail later due to NULLFAIL test.")])])}),[],!1,null,null,null);t.default=n.exports}}]);