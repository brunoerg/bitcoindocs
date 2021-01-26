(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{441:function(e,t,a){"use strict";a.r(t);var i=a(43),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16"}},[e._v("#")]),e._v(" 16")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  BIP: 16\n  Layer: Consensus (soft fork)\n  Title: Pay to Script Hash\n  Author: Gavin Andresen <gavinandresen@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0016\n  Status: Final\n  Type: Standards Track\n  Created: 2012-01-03\n")])])]),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v('This BIP describes a new "standard" transaction type for the Bitcoin\nscripting system, and defines additional validation rules that apply\nonly to the new transactions.')]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("The purpose of pay-to-script-hash is to move the responsibility for\nsupplying the conditions to redeem a transaction from the sender of the\nfunds to the redeemer.")]),e._v(" "),a("p",[e._v("The benefit is allowing a sender to fund any arbitrary transaction, no\nmatter how complicated, using a fixed-length 20-byte hash that is short\nenough to scan from a QR code or easily copied and pasted.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("A new standard transaction type that is relayed and included in mined\nblocks is defined:")]),e._v(" "),a("p",[a("code",[e._v("OP_HASH160 [20-byte-hash-value] OP_EQUAL")])]),e._v(" "),a("p",[e._v("[20-byte-hash-value] shall be the push-20-bytes-onto-the-stack opcode\n(0x14) followed by exactly 20 bytes.")]),e._v(" "),a("p",[e._v("This new transaction type is redeemed by a standard scriptSig:")]),e._v(" "),a("p",[a("code",[e._v("...signatures... {serialized script}")])]),e._v(" "),a("p",[e._v("Transactions that redeem these pay-to-script outpoints are only\nconsidered standard if the "),a("em",[e._v("serialized script")]),e._v(" - also referred to as the\n"),a("em",[e._v("redeemScript")]),e._v(" - is, itself, one of the other standard transaction\ntypes.")]),e._v(" "),a("p",[e._v("The rules for validating these outpoints when relaying transactions or\nconsidering them for inclusion in a new block are as follows:")]),e._v(" "),a("ol",[a("li",[e._v('Validation fails if there are any operations other than "push\ndata" operations in the scriptSig.')]),e._v(" "),a("li",[e._v("Normal validation is done: an initial stack is created from the\nsignatures and {serialized script}, and the hash of the script is\ncomputed and validation fails immediately if it does not match the\nhash in the outpoint.")]),e._v(" "),a("li",[e._v("{serialized script} is popped off the initial stack, and the\ntransaction is validated again using the popped stack and the\ndeserialized script as the scriptPubKey.")])]),e._v(" "),a("p",[e._v("These new rules should only be applied when validating transactions in\nblocks with timestamps >= 1333238400 (Apr 1 2012) [^1]. There are\ntransactions earlier than 1333238400 in the block chain that fail these\nnew validation rules. "),a("a",{attrs:{href:"%5BTransaction"}},[e._v("^2")]),e._v(". Older transactions must be validated under\nthe old rules. (see the Backwards Compatibility section for details).")]),e._v(" "),a("p",[e._v("For example, the scriptPubKey and corresponding scriptSig for a\none-signature-required transaction is:")]),e._v(" "),a("p",[a("code",[e._v("scriptSig: [signature] {[pubkey] OP_CHECKSIG}")]),a("br"),e._v(" "),a("code",[e._v("scriptPubKey: OP_HASH160 [20-byte-hash of {[pubkey] OP_CHECKSIG} ] OP_EQUAL")])]),e._v(" "),a("p",[e._v("Signature operations in the {serialized script} shall contribute to the\nmaximum number allowed per block (20,000) as follows:")]),e._v(" "),a("ol",[a("li",[e._v("OP_CHECKSIG and OP_CHECKSIGVERIFY count as 1 signature operation,\nwhether or not they are evaluated.")]),e._v(" "),a("li",[e._v("OP_CHECKMULTISIG and OP_CHECKMULTISIGVERIFY immediately preceded by\nOP_1 through OP_16 are counted as 1 to 16 signature operation,\nwhether or not they are evaluated.")]),e._v(" "),a("li",[e._v("All other OP_CHECKMULTISIG and OP_CHECKMULTISIGVERIFY are counted as\n20 signature operations.")])]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("p",[e._v("+3 signature operations:")]),e._v(" "),a("p",[a("code",[e._v("{2 [pubkey1] [pubkey2] [pubkey3] 3 OP_CHECKMULTISIG}")])]),e._v(" "),a("p",[e._v("+22 signature operations")]),e._v(" "),a("p",[a("code",[e._v("{OP_CHECKSIG OP_IF OP_CHECKSIGVERIFY OP_ELSE OP_CHECKMULTISIGVERIFY OP_ENDIF}")])]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v('This BIP replaces BIP 12, which proposed a new Script opcode\n("OP_EVAL") to accomplish everything in this BIP and more.')]),e._v(" "),a("p",[e._v("The Motivation for this BIP (and BIP 13, the pay-to-script-hash address\ntype) is somewhat controversial; several people feel that it is\nunnecessary, and complex/multisignature transaction types should be\nsupported by simply giving the sender the complete {serialized script}.\nThe author believes that this BIP will minimize the changes needed to\nall of the supporting infrastructure that has already been created to\nsend funds to a base58-encoded-20-byte bitcoin addresses, allowing\nmerchants and exchanges and other software to start supporting\nmultisignature transactions sooner.")]),e._v(" "),a("p",[e._v("Recognizing one 'special' form of scriptPubKey and performing extra\nvalidation when it is detected is ugly. However, the consensus is that\nthe alternatives are either uglier, are more complex to implement,\nand/or expand the power of the expression language in dangerous ways.")]),e._v(" "),a("p",[e._v("The signature operation counting rules are intended to be easy and quick\nto implement by statically scanning the {serialized script}. Bitcoin\nimposes a maximum-number-of-signature-operations per block to prevent\ndenial-of-service attacks on miners. If there was no limit, a rogue\nminer might broadcast a block that required hundreds of thousands of\nECDSA signature operations to validate, and it might be able to get a\nhead start computing the next block while the rest of the network worked\nto validate the current one.")]),e._v(" "),a("p",[e._v("There is a 1-confirmation attack on old implementations, but it is\nexpensive and difficult in practice. The attack is:")]),e._v(" "),a("ol",[a("li",[e._v("Attacker creates a pay-to-script-hash transaction that is valid as\nseen by old software, but invalid for new implementation, and sends\nthemselves some coins using it.")]),e._v(" "),a("li",[e._v("Attacker also creates a standard transaction that spends the\npay-to-script transaction, and pays the victim who is running old\nsoftware.")]),e._v(" "),a("li",[e._v("Attacker mines a block that contains both transactions.")])]),e._v(" "),a("p",[e._v("If the victim accepts the 1-confirmation payment, then the attacker wins\nbecause both transactions will be invalidated when the rest of the\nnetwork overwrites the attacker's invalid block.")]),e._v(" "),a("p",[e._v("The attack is expensive because it requires the attacker create a block\nthat they know will be invalidated by the rest of the network. It is\ndifficult because creating blocks is difficult and users should not\naccept 1-confirmation transactions for higher-value transactions.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility-backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility-backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility {#backwards_compatibility}")]),e._v(" "),a("p",[e._v("These transactions are non-standard to old implementations, which will\n(typically) not relay them or include them in blocks.")]),e._v(" "),a("p",[e._v("Old implementations will validate that the {serialize script}'s hash\nvalue matches when they validate blocks created by software that fully\nsupport this BIP, but will do no other validation.")]),e._v(" "),a("p",[e._v("Avoiding a block-chain split by malicious pay-to-script transactions\nrequires careful handling of one case:")]),e._v(" "),a("ul",[a("li",[e._v("A pay-to-script-hash transaction that is invalid for new\nclients/miners but valid for old clients/miners.")])]),e._v(" "),a("p",[e._v("To gracefully upgrade and ensure no long-lasting block-chain split\noccurs, more than 50% of miners must support full validation of the new\ntransaction type and must switch from the old validation rules to the\nnew rules at the same time.")]),e._v(" "),a("p",[e._v('To judge whether or not more than 50% of hashing power supports this\nBIP, miners are asked to upgrade their software and put the string\n"/P2SH/" in the input of the coinbase transaction for blocks that they\ncreate.')]),e._v(" "),a("p",[e._v('On February 1, 2012, the block-chain will be examined to determine the\nnumber of blocks supporting pay-to-script-hash for the previous 7 days.\nIf 550 or more contain "/P2SH/" in their coinbase, then all blocks\nwith timestamps after 15 Feb 2012, 00:00:00 GMT shall have their\npay-to-script-hash transactions fully validated. Approximately 1,000\nblocks are created in a week; 550 should, therefore, be approximately\n55% of the network supporting the new feature.')]),e._v(" "),a("p",[e._v("If a majority of hashing power does not support the new validation\nrules, then rollout will be postponed (or rejected if it becomes clear\nthat a majority will never be achieved).")]),e._v(" "),a("h3",{attrs:{id:"_520-byte-limitation-on-serialized-script-size-byte-limitation-on-serialized-script-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_520-byte-limitation-on-serialized-script-size-byte-limitation-on-serialized-script-size"}},[e._v("#")]),e._v(" 520-byte limitation on serialized script size {#byte_limitation_on_serialized_script_size}")]),e._v(" "),a("p",[e._v("As a consequence of the requirement for backwards compatibility the\nserialized script is itself subject to the same rules as any other\nPUSHDATA operation, including the rule that no data greater than 520\nbytes may be pushed to the stack. Thus it is not possible to spend a\nP2SH output if the redemption script it refers to is >520 bytes in\nlength. For instance while the OP_CHECKMULTISIG opcode can itself accept\nup to 20 pubkeys, with 33-byte compressed pubkeys it is only possible to\nspend a P2SH output requiring a maximum of 15 pubkeys to redeem: 3 bytes")]),e._v(" "),a("ul",[a("li",[e._v("15 pubkeys * 34 bytes/pubkey = 513 bytes.")])]),e._v(" "),a("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference Implementation {#reference_implementation}")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://gist.github.com/gavinandresen/3966071",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gist.github.com/gavinandresen/3966071"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"see-also-see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also-see-also"}},[e._v("#")]),e._v(" See Also {#see_also}")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=46538",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://bitcointalk.org/index.php?topic=46538"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"bip-0013.mediawiki",title:"wikilink"}},[e._v("Address format for Pay to Script Hash\nBIP")])]),e._v(" "),a("li",[e._v("M-of-N Multisignature Transactions "),a("a",{attrs:{href:"bip-0011.mediawiki",title:"wikilink"}},[e._v("BIP\n11")])]),e._v(" "),a("li",[a("a",{attrs:{href:"bip-0016/qa.mediawiki",title:"wikilink"}},[e._v("Quality Assurance test checklist")])])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("[^1]: "),a("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/commit/8f188ece3c82c4cf5d52a3363e7643c23169c0ff",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remove -bip16 and -paytoscripthashtime command-line\narguments"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("6a26d2ecb67f27d1fa5524763b49029d7106e91e3cc05743073461a719776192](http://blockexplorer.com/tx/6a26d2ecb67f27d1fa5524763b49029d7106e91e3cc05743073461a719776192)\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);