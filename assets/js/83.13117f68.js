(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{458:function(e,t,s){"use strict";s.r(t);var n=s(43),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_322"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_322"}},[e._v("#")]),e._v(" 322")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  BIP: 322\n  Layer: Applications\n  Title: Generic Signed Message Format\n  Author: Karl-Johan Alm <karljohan-alm@garage.co.jp>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0322\n  Status: Draft\n  Type: Standards Track\n  Created: 2018-09-10\n  License: CC0-1.0\n")])])]),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("A standard for interoperable signed messages based on the Bitcoin Script\nformat, either for proving fund availability, or committing to a message\nas the intended recipient of funds sent to the invoice address.")]),e._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),s("p",[e._v("The current message signing standard only works for P2PKH (1...)\ninvoice addresses. We propose to extend and generalize the standard by\nusing a Bitcoin Script based approach. This approach minimizes the\nburden for implementers as message signing can be expected to be part of\na library or project that includes Bitcoin Script interpreters already.")]),e._v(" "),s("p",[e._v("Additionally, the current message signing only proves that the message\nhas been committed to by the recipient of a given invoice address. It\ndoes not prove anything about the invoice address itself, nor that the\nsigner has access to the private keys used to implement this invoice.\nMore importantly, it does not prove ownership nor access to any funds,\neven if the same private key would be a valid signer for spending them -\nand this is a commonly desired use case.")]),e._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),s("p",[e._v("This BIP follows the specification of BIP-325 challenges and solutions\n(see Signet comparison below).")]),e._v(" "),s("p",[e._v("Let there be two virtual transactions to_spend and to_sign.")]),e._v(" "),s("p",[e._v('The "to_spend" transaction is:')]),e._v(" "),s("p",[s("code",[e._v("nVersion = 0")]),s("br"),e._v(" "),s("code",[e._v("nLockTime = 0")]),s("br"),e._v(" "),s("code",[e._v("vin[0].prevout.hash = 0000...000")]),s("br"),e._v(" "),s("code",[e._v("vin[0].prevout.n = 0xFFFFFFFF")]),s("br"),e._v(" "),s("code",[e._v("vin[0].nSequence = 0")]),s("br"),e._v(" "),s("code",[e._v("vin[0].scriptSig = OP_0 PUSH32[ message_hash ]")]),s("br"),e._v(" "),s("code",[e._v("vin[0].scriptWitness = []")]),s("br"),e._v(" "),s("code",[e._v("vout[0].nValue = 0")]),s("br"),e._v(" "),s("code",[e._v("vout[0].scriptPubKey = message_challenge")])]),e._v(" "),s("p",[e._v('where message_hash is a BIP340-tagged hash of the message, i.e.\nsha256_tag(m), where tag = "BIP0322-signed-message", and\nmessage_challenge is the to be proven (public) key script. For proving\nfunds, message_challenge shall be simply OP_TRUE.')]),e._v(" "),s("p",[e._v('The "to_sign" transaction is:')]),e._v(" "),s("p",[s("code",[e._v("nVersion = 0 or as appropriate (e.g. 2, for time locks)")]),s("br"),e._v(" "),s("code",[e._v("nLockTime = 0 or as appropriate (for time locks)")]),s("br"),e._v(" "),s("code",[e._v("vin[0].prevout.hash = to_spend.txid")]),s("br"),e._v(" "),s("code",[e._v("vin[0].prevout.n = 0")]),s("br"),e._v(" "),s("code",[e._v("vin[0].nSequence = 0 or as appropriate (for time locks)")]),s("br"),e._v(" "),s("code",[e._v("vin[0].scriptWitness = message_signature")]),s("br"),e._v(" "),s("code",[e._v("vout[0].nValue = 0")]),s("br"),e._v(" "),s("code",[e._v("vout[0].scriptPubKey = OP_RETURN")])]),e._v(" "),s("p",[e._v("When a proof of funds is being created, additional inputs should be\nincluded for virtually spending transaction outputs of desired value.")]),e._v(" "),s("ul",[s("li",[e._v("All signatures must use the SIGHASH_ALL flag.")]),e._v(" "),s("li",[e._v('The proof is considered valid, inconclusive, or invalid based on\nwhether the to_sign transaction is a valid spend of the to_spend\ntransaction or not, according to the rules specified in the\n"Consensus and standard flags" section below.')]),e._v(" "),s("li",[e._v('Proofs of funds may be encumbered with the in_future flag, according\nto the rules specified in the "Locktime and Sequence" section\nbelow, in which case we refer to the result in text form as\n"valid_in_future", "inconclusive_in_future", etc.')])]),e._v(" "),s("p",[e._v("Proofs of funds are the base64-encoding of the to_spend and to_sign\ntransactions concatenated in standard network serialisation, and proofs\nwithout additional inputs or time locks (simple proofs) are the\nbase64-encoding of the to_sign script witness.")]),e._v(" "),s("p",[e._v('A validator must verify it is valid and meets the description of virtual\ntransactions as specified above. See "Validation" below.')]),e._v(" "),s("h3",{attrs:{id:"validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),s("p",[e._v("To validate a simple proof, the following steps must be taken:")]),e._v(" "),s("ol",[s("li",[e._v("construct the to_spend and to_sign transactions, based on the\nspecification above")]),e._v(" "),s("li",[e._v("check the signature using consensus rules, then upgradable rules")])]),e._v(" "),s("p",[e._v("To validate a proof of funds, the following steps must be taken:")]),e._v(" "),s("ol",[s("li",[e._v("deserialize the to_spend and to_sign transactions from the proof,\nand fail if the proof contains extraneous bytes")]),e._v(" "),s("li",[e._v("verify that the to_sign transaction uses all inputs covered by the\nproof of funds, exactly once")]),e._v(" "),s("li",[e._v("reconstruct the to_spend' and to_sign' transactions, based on the\nspecification above, copying the version, lock time, and sequence\nvalues")]),e._v(" "),s("li",[e._v("verify that to_spend = to_spend', that to_sign has at least 1\ninput, has exactly 1 output, and that to_sign.vin[0] =\nto_sign'.vin[0]")]),e._v(" "),s("li",[e._v('set the "in_future" flag if the transaction\'s lock time is in the\nfuture according to consensus rules')]),e._v(" "),s("li",[e._v('establish a "coins map", a mapping of outpoints (hash, vout) to\ncoins (scriptPubKey, amount), initialized to\ncoins_map(to_spend.txid, 0) = (to_spend.vout[0], 0)')]),e._v(" "),s("li",[e._v("for each proof of fund input, set the corresponding values in the\ncoins map; abort if the input cannot be found")]),e._v(" "),s("li",[e._v("check the signature of each input using consensus rules, then\nupgradable rules")])]),e._v(" "),s("h2",{attrs:{id:"legacy-format-legacy-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-format-legacy-format"}},[e._v("#")]),e._v(" Legacy format {#legacy_format}")]),e._v(" "),s("p",[e._v("New proofs should use the new format for all invoice address formats,\nincluding P2PKH.")]),e._v(" "),s("p",[e._v("The legacy format MAY be used, but must be restricted to the legacy\nP2PKH invoice address format.")]),e._v(" "),s("h3",{attrs:{id:"signing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signing"}},[e._v("#")]),e._v(" Signing")]),e._v(" "),s("p",[e._v("Given the P2PKH invoice address "),s("code",[e._v("a")]),e._v(" and the message "),s("code",[e._v("m")]),e._v(", and the\npubkey-hash function "),s("code",[e._v("pkh(P) = ripemd160(sha256(P))")]),e._v(":")]),e._v(" "),s("ol",[s("li",[e._v("let "),s("code",[e._v("p")]),e._v(" be the pubkey-hash "),s("code",[e._v("pkh(P)")]),e._v(" for the pubkey "),s("code",[e._v("P")]),e._v(", contained in\n"),s("code",[e._v("a")])]),e._v(" "),s("li",[e._v("let "),s("code",[e._v("x")]),e._v(" be the private key associated with "),s("code",[e._v("P")]),e._v(" so that "),s("code",[e._v("pkh(xG) = p")])]),e._v(" "),s("li",[e._v("let "),s("code",[e._v("digest")]),e._v(" be\n"),s("code",[e._v('SHA56d(0x18||"Bitcoin Signed')]),s("a",{attrs:{href:"Message:%5Cn"}},[s("code",[e._v("Message:\\n")])]),s("code",[e._v('"||compactint(len(m))||m)')])]),e._v(" "),s("li",[e._v("create a compact signature "),s("code",[e._v("sig")]),e._v(' (aka "recoverable ECDSA\nsignature") using '),s("code",[e._v("x")]),e._v(" on "),s("code",[e._v("digest")])])]),e._v(" "),s("p",[e._v("The resulting proof is "),s("code",[e._v("sig")]),e._v(", serialized using the base64 encoding.")]),e._v(" "),s("h3",{attrs:{id:"verifying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verifying"}},[e._v("#")]),e._v(" Verifying")]),e._v(" "),s("p",[e._v("Given the P2PKH invoice address "),s("code",[e._v("a")]),e._v(", the message "),s("code",[e._v("m")]),e._v(", the compact\nsignature "),s("code",[e._v("sig")]),e._v(", and the pubkey-hash function\n"),s("code",[e._v("pkh(P) = ripemd160(sha256(P))")]),e._v(":")]),e._v(" "),s("ol",[s("li",[e._v("let "),s("code",[e._v("p")]),e._v(" be the pubkey-hash "),s("code",[e._v("pkh(P)")]),e._v(" for the pubkey "),s("code",[e._v("P")]),e._v(", contained in\n"),s("code",[e._v("a")])]),e._v(" "),s("li",[e._v("let "),s("code",[e._v("digest")]),e._v(" be\n"),s("code",[e._v('SHA56d(0x18||"Bitcoin Signed')]),s("a",{attrs:{href:"Message:%5Cn"}},[s("code",[e._v("Message:\\n")])]),s("code",[e._v('"||compactint(len(m))||m)')])]),e._v(" "),s("li",[e._v("attempt pubkey recovery for "),s("code",[e._v("digest")]),e._v(" using the signature "),s("code",[e._v("sig")]),e._v(" and\nstore the resulting pubkey into "),s("code",[e._v("Q")]),e._v(" "),s("ol",[s("li",[e._v("fail verification if pubkey recovery above fails")])])]),e._v(" "),s("li",[e._v("let "),s("code",[e._v("q")]),e._v(" be the pubkey-hash "),s("code",[e._v("pkh(Q)")]),e._v(" for the pubkey "),s("code",[e._v("Q")])]),e._v(" "),s("li",[e._v("if "),s("code",[e._v("p == q")]),e._v(", the proof is valid, otherwise it is invalid")])]),e._v(" "),s("h2",{attrs:{id:"compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),s("p",[e._v("This specification is backwards compatible with the legacy\nsignmessage/verifymessage specification through the special case as\ndescribed above.")]),e._v(" "),s("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference implementation {#reference_implementation}")]),e._v(" "),s("p",[e._v("TODO")]),e._v(" "),s("h2",{attrs:{id:"acknowledgements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),s("p",[e._v("Thanks to David Harding, Jim Posen, Kalle Rosenbaum, Pieter Wuille, and\nmany others for their feedback on the specification.")]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ol",[s("li",[e._v("Original mailing list thread:\n"),s("a",{attrs:{href:"https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-March/015818.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-March/015818.html"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),s("p",[e._v("This document is licensed under the Creative Commons CC0 1.0 Universal\nlicense.")]),e._v(" "),s("h2",{attrs:{id:"consensus-and-standard-flags-consensus-and-standard-flags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consensus-and-standard-flags-consensus-and-standard-flags"}},[e._v("#")]),e._v(" Consensus and standard flags {#consensus_and_standard_flags}")]),e._v(" "),s("p",[e._v("Each flag is associated with some type of enforced rule (most often a\nsoft fork). There are two sets of flags: consensus flags (which result\nin a block being rejected, if violated), and upgradable flags (which are\ntypically policy-rejected by nodes specifically for the purpose of\nfuture network upgrades). The upgradable flags are a super-set of the\nconsensus flags.")]),e._v(" "),s("p",[e._v('This BIP specifies that a proof that validates for both rulesets is\nvalid, a proof that validates for consensus rules, but not for\nupgradable rules, is "inconclusive", and a proof that does not\nvalidate for consensus rules is "invalid" (regardless of upgradable\nrule validation).')]),e._v(" "),s("p",[e._v("The ruleset sometimes changes. This BIP does not intend to be complete,\nnor does it indicate enforcement of rules, it simply lists the rules as\nthey stand at the point of writing.")]),e._v(" "),s("h3",{attrs:{id:"consensus-rules-consensus-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consensus-rules-consensus-rules"}},[e._v("#")]),e._v(" Consensus rules {#consensus_rules}")]),e._v(" "),s("ul",[s("li",[e._v("P2SH: evaluate P2SH\n("),s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP16"),s("OutboundLink")],1),e._v(")\nsubscripts")]),e._v(" "),s("li",[e._v("DERSIG: enforce strict DER\n("),s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP66"),s("OutboundLink")],1),e._v(")\ncompliance")]),e._v(" "),s("li",[e._v("NULLDUMMY: enforce NULLDUMMY\n("),s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0147.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP147"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("li",[e._v("CHECKLOCKTIMEVERIFY: enable CHECKLOCKTIMEVERIFY\n("),s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP65"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("li",[e._v("CHECKSEQUENCEVERIFY: enable CHECKSEQUENCEVERIFY\n("),s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP112"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("li",[e._v("WITNESS: enable WITNESS\n("),s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP141"),s("OutboundLink")],1),e._v(")")])]),e._v(" "),s("h3",{attrs:{id:"upgradable-rules-upgradable-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgradable-rules-upgradable-rules"}},[e._v("#")]),e._v(" Upgradable rules {#upgradable_rules}")]),e._v(" "),s("p",[e._v("All of the above, plus (subject to change):")]),e._v(" "),s("ul",[s("li",[e._v("STRICTENC: non-strict DER signature or undefined hashtype")]),e._v(" "),s("li",[e._v("MINIMALDATA: require minimal encodings for all push operations")]),e._v(" "),s("li",[e._v("DISCOURAGE_UPGRADABLE_NOPS: discourage use of NOPs reserved for\nupgrades")]),e._v(" "),s("li",[e._v("CLEANSTACK: require that only a single stack element remains after\nevaluation")]),e._v(" "),s("li",[e._v("MINIMALIF: Segwit script only: require the argument of OP_IF/NOTIF\nto be exactly 0x01 or empty vector")]),e._v(" "),s("li",[e._v("NULLFAIL: signature(s) must be empty vector if a CHECK(MULTI)SIG\noperation failed")]),e._v(" "),s("li",[e._v("LOW_S: signature with S > order/2 in a checksig operation")]),e._v(" "),s("li",[e._v("DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM: v1-16 witness programs are\nnon-standard (i.e. forbidden)")]),e._v(" "),s("li",[e._v("WITNESS_PUBKEYTYPE: public keys in segregated witness scripts must\nbe compressed")]),e._v(" "),s("li",[e._v("CONST_SCRIPTCODE: OP_CODESEPARATOR and FindAndDelete fail any\nnon-segwit scripts")])]),e._v(" "),s("h2",{attrs:{id:"test-vectors-test-vectors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-vectors-test-vectors"}},[e._v("#")]),e._v(" Test vectors {#test_vectors}")]),e._v(" "),s("p",[e._v("TODO")])])}),[],!1,null,null,null);t.default=a.exports}}]);