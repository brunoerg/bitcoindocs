(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{398:function(e,t,n){"use strict";n.r(t);var i=n(43),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_112"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_112"}},[e._v("#")]),e._v(" 112")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("  BIP: 112\n  Layer: Consensus (soft fork)\n  Title: CHECKSEQUENCEVERIFY\n  Author: BtcDrak <btcdrak@gmail.com>\n          Mark Friedenbach <mark@friedenbach.org>\n          Eric Lombrozo <elombrozo@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0112\n  Status: Final\n  Type: Standards Track\n  Created: 2015-08-10\n  License: PD\n")])])]),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v("This BIP describes a new opcode (CHECKSEQUENCEVERIFY) for the Bitcoin\nscripting system that in combination with BIP 68 allows execution\npathways of a script to be restricted based on the age of the output\nbeing spent.")]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v("CHECKSEQUENCEVERIFY redefines the existing NOP3 opcode. When executed,\nif any of the following conditions are true, the script interpreter will\nterminate with an error:")]),e._v(" "),n("ul",[n("li",[e._v("the stack is empty; or")]),e._v(" "),n("li",[e._v("the top item on the stack is less than 0; or")]),e._v(" "),n("li",[e._v("the top item on the stack has the disable flag (1 << 31) unset;\nand\n"),n("ul",[n("li",[e._v("the transaction version is less than 2; or")]),e._v(" "),n("li",[e._v("the transaction input sequence number disable flag (1 << 31)\nis set; or")]),e._v(" "),n("li",[e._v("the relative lock-time type is not the same; or")]),e._v(" "),n("li",[e._v("the top stack item is greater than the transaction input\nsequence (when masked according to the BIP68);")])])])]),e._v(" "),n("p",[e._v("Otherwise, script execution will continue as if a NOP had been executed.")]),e._v(" "),n("p",[e._v("BIP 68 prevents a non-final transaction from being selected for\ninclusion in a block until the corresponding input has reached the\nspecified age, as measured in block-height or block-time. By comparing\nthe argument to CHECKSEQUENCEVERIFY against the nSequence field, we\nindirectly verify a desired minimum age of the the output being spent;\nuntil that relative age has been reached any script execution pathway\nincluding the CHECKSEQUENCEVERIFY will fail to validate, causing the\ntransaction not to be selected for inclusion in a block.")]),e._v(" "),n("h2",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),n("p",[e._v("BIP 68 repurposes the transaction nSequence field meaning by giving\nsequence numbers new consensus-enforced semantics as a relative\nlock-time. However, there is no way to build Bitcoin scripts to make\ndecisions based on this field.")]),e._v(" "),n("p",[e._v("By making the nSequence field accessible to script, it becomes possible\nto construct code pathways that only become accessible some minimum time\nafter proof-of-publication. This enables a wide variety of applications\nin phased protocols such as escrow, payment channels, or bidirectional\npegs.")]),e._v(" "),n("h3",{attrs:{id:"contracts-with-expiration-deadlines-contracts-with-expiration-deadlines"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contracts-with-expiration-deadlines-contracts-with-expiration-deadlines"}},[e._v("#")]),e._v(" Contracts With Expiration Deadlines {#contracts_with_expiration_deadlines}")]),e._v(" "),n("h4",{attrs:{id:"escrow-with-timeout-escrow-with-timeout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#escrow-with-timeout-escrow-with-timeout"}},[e._v("#")]),e._v(" Escrow with Timeout {#escrow_with_timeout}")]),e._v(" "),n("p",[e._v("An escrow that times out automatically 30 days after being funded can be\nestablished in the following way. Alice, Bob and Escrow create a 2-of-3\naddress with the following redeemscript.")]),e._v(" "),n("p",[n("code",[e._v("IF")]),n("br"),e._v(" "),n("code",[e._v("2 <Alice's pubkey> <Bob's pubkey> <Escrow's pubkey> 3 CHECKMULTISIG")]),n("br"),e._v(" "),n("code",[e._v("ELSE")]),n("br"),e._v(" "),n("code",[e._v('"30d" CHECKSEQUENCEVERIFY DROP')]),n("br"),e._v(" "),n("code",[e._v("<Alice's pubkey> CHECKSIG")]),n("br"),e._v(" "),n("code",[e._v("ENDIF")])]),e._v(" "),n("p",[e._v("At any time funds can be spent using signatures from any two of Alice,\nBob or the Escrow.")]),e._v(" "),n("p",[e._v("After 30 days Alice can sign alone.")]),e._v(" "),n("p",[e._v("The clock does not start ticking until the payment to the escrow address\nconfirms.")]),e._v(" "),n("h3",{attrs:{id:"retroactive-invalidation-retroactive-invalidation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#retroactive-invalidation-retroactive-invalidation"}},[e._v("#")]),e._v(" Retroactive Invalidation {#retroactive_invalidation}")]),e._v(" "),n("p",[e._v("In many instances, we would like to create contracts that can be revoked\nin case of some future event. However, given the immutable nature of the\nblockchain, it is practically impossible to retroactively invalidate a\nprevious commitment that has already confirmed. The only mechanism we\nreally have for retroactive invalidation is blockchain reorganization\nwhich, for fundamental security reasons, is designed to be very hard and\nvery expensive to do.")]),e._v(" "),n("p",[e._v("Despite this limitation, we do have a way to provide something\nfunctionally similar to retroactive invalidation while preserving\nirreversibility of past commitments using CHECKSEQUENCEVERIFY. By\nconstructing scripts with multiple branches of execution where one or\nmore of the branches are delayed we provide a time window in which\nsomeone can supply an invalidation condition that allows the output to\nbe spent, effectively invalidating the would-be delayed branch and\npotentially discouraging another party from broadcasting the transaction\nin the first place. If the invalidation condition does not occur before\nthe timeout, the delayed branch becomes spendable, honoring the original\ncontract.")]),e._v(" "),n("p",[e._v("Some more specific applications of this idea:")]),e._v(" "),n("h4",{attrs:{id:"hash-time-locked-contracts-hash-time-locked-contracts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hash-time-locked-contracts-hash-time-locked-contracts"}},[e._v("#")]),e._v(" Hash Time-Locked Contracts {#hash_time_locked_contracts}")]),e._v(" "),n("p",[e._v("Hash Time-Locked Contracts (HTLCs) provide a general mechanism for\noff-chain contract negotiation. An execution pathway can be made to\nrequire knowledge of a secret (a hash preimage) that can be presented\nwithin an invalidation time window. By sharing the secret it is possible\nto guarantee to the counterparty that the transaction will never be\nbroadcast since this would allow the counterparty to claim the output\nimmediately while one would have to wait for the time window to pass. If\nthe secret has not been shared, the counterparty will be unable to use\nthe instant pathway and the delayed pathway must be used instead.")]),e._v(" "),n("h4",{attrs:{id:"bidirectional-payment-channels-bidirectional-payment-channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bidirectional-payment-channels-bidirectional-payment-channels"}},[e._v("#")]),e._v(" Bidirectional Payment Channels {#bidirectional_payment_channels}")]),e._v(" "),n("p",[e._v("Scriptable relative locktime provides a predictable amount of time to\nrespond in the event a counterparty broadcasts a revoked transaction:\nAbsolute locktime necessitates closing the channel and reopen it when\ngetting close to the timeout, whereas with relative locktime, the clock\nstarts ticking the moment the transactions confirms in a block. It also\nprovides a means to know exactly how long to wait (in number of blocks)\nbefore funds can be pulled out of the channel in the event of a\nnoncooperative counterparty.")]),e._v(" "),n("h4",{attrs:{id:"lightning-network-lightning-network"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-lightning-network"}},[e._v("#")]),e._v(" Lightning Network {#lightning_network}")]),e._v(" "),n("p",[e._v("The lightning network extends the bidirectional payment channel idea to\nallow for payments to be routed over multiple bidirectional payment\nchannel hops.")]),e._v(" "),n("p",[e._v("These channels are based on an anchor transaction that requires a 2-of-2\nmultisig from Alice and Bob, and a series of revocable commitment\ntransactions that spend the anchor transaction. The commitment\ntransaction splits the funds from the anchor between Alice and Bob and\nthe latest commitment transaction may be published by either party at\nany time, finalising the channel.")]),e._v(" "),n("p",[e._v("Ideally then, a revoked commitment transaction would never be able to be\nsuccessfully spent; and the latest commitment transaction would be able\nto be spent very quickly.")]),e._v(" "),n("p",[e._v("To allow a commitment transaction to be effectively revoked, Alice and\nBob have slightly different versions of the latest commitment\ntransaction. In Alice's version, any outputs in the commitment\ntransaction that pay Alice also include a forced delay, and an\nalternative branch that allows Bob to spend the output if he knows that\ntransaction's revocation code. In Bob's version, payments to Bob are\nsimilarly encumbered. When Alice and Bob negotiate new balances and new\ncommitment transactions, they also reveal the old revocation code, thus\ncommitting to not relaying the old transaction.")]),e._v(" "),n("p",[e._v("A simple output, paying to Alice might then look like:")]),e._v(" "),n("p",[n("code",[e._v("HASH160  <revokehash>")]),e._v(" "),n("code",[e._v("EQUAL")]),n("br"),e._v(" "),n("code",[e._v("IF")]),n("br"),e._v(" "),n("code",[e._v("<Bob's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ELSE")]),n("br"),e._v(" "),n("code",[e._v('"24h" CHECKSEQUENCEVERIFY DROP')]),n("br"),e._v(" "),n("code",[e._v("<Alice's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ENDIF")]),n("br"),e._v(" "),n("code",[e._v("CHECKSIG")])]),e._v(" "),n("p",[e._v("This allows Alice to publish the latest commitment transaction at any\ntime and spend the funds after 24 hours, but also ensures that if Alice\nrelays a revoked transaction, that Bob has 24 hours to claim the funds.")]),e._v(" "),n("p",[e._v("With CHECKLOCKTIMEVERIFY, this would look like:")]),e._v(" "),n("p",[n("code",[e._v("HASH160  <revokehash>")]),e._v(" "),n("code",[e._v("EQUAL")]),n("br"),e._v(" "),n("code",[e._v("IF")]),n("br"),e._v(" "),n("code",[e._v("<Bob's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ELSE")]),n("br"),e._v(" "),n("code",[e._v('"2015/12/15" CHECKLOCKTIMEVERIFY DROP')]),n("br"),e._v(" "),n("code",[e._v("<Alice's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ENDIF")]),n("br"),e._v(" "),n("code",[e._v("CHECKSIG")])]),e._v(" "),n("p",[e._v("This form of transaction would mean that if the anchor is unspent on\n2015/12/16, Alice can use this commitment even if it has been revoked,\nsimply by spending it immediately, giving no time for Bob to claim it.")]),e._v(" "),n("p",[e._v("This means that the channel has a deadline that cannot be pushed back\nwithout hitting the blockchain; and also that funds may not be available\nuntil the deadline is hit. CHECKSEQUENCEVERIFY allows you to avoid\nmaking such a tradeoff.")]),e._v(" "),n("p",[e._v("Hashed Time-Lock Contracts (HTLCs) make this slightly more complicated,\nsince in principle they may pay either Alice or Bob, depending on\nwhether Alice discovers a secret R, or a timeout is reached, but the\nsame principle applies -- the branch paying Alice in Alice's\ncommitment transaction gets a delay, and the entire output can be\nclaimed by the other party if the revocation secret is known. With\nCHECKSEQUENCEVERIFY, a HTLC payable to Alice might look like the\nfollowing in Alice's commitment transaction:")]),e._v(" "),n("p",[n("code",[e._v("HASH160 DUP  <R-HASH>")]),e._v(" "),n("code",[e._v("EQUAL")]),n("br"),e._v(" "),n("code",[e._v("IF")]),n("br"),e._v(" "),n("code",[e._v('"24h" CHECKSEQUENCEVERIFY')]),n("br"),e._v(" "),n("code",[e._v("2DROP")]),n("br"),e._v(" "),n("code",[e._v("<Alice's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ELSE")]),n("br"),e._v(" "),n("code",[e._v("<Commit-Revocation-Hash>")]),e._v(" "),n("code",[e._v("EQUAL")]),n("br"),e._v(" "),n("code",[e._v("NOTIF")]),n("br"),e._v(" "),n("code",[e._v('"2015/10/20 10:33" CHECKLOCKTIMEVERIFY DROP')]),n("br"),e._v(" "),n("code",[e._v("ENDIF")]),n("br"),e._v(" "),n("code",[e._v("<Bob's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ENDIF")]),n("br"),e._v(" "),n("code",[e._v("CHECKSIG")])]),e._v(" "),n("p",[e._v("and correspondingly in Bob's commitment transaction:")]),e._v(" "),n("p",[n("code",[e._v("HASH160 DUP  <R-HASH>")]),e._v(" "),n("code",[e._v("EQUAL")]),n("br"),e._v(" "),n("code",[e._v("SWAP  <Commit-Revocation-Hash>")]),e._v(" "),n("code",[e._v("EQUAL ADD")]),n("br"),e._v(" "),n("code",[e._v("IF")]),n("br"),e._v(" "),n("code",[e._v("<Alice's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ELSE")]),n("br"),e._v(" "),n("code",[e._v('"2015/10/20 10:33" CHECKLOCKTIMEVERIFY')]),n("br"),e._v(" "),n("code",[e._v('"24h" CHECKSEQUENCEVERIFY')]),n("br"),e._v(" "),n("code",[e._v("2DROP")]),n("br"),e._v(" "),n("code",[e._v("<Bob's pubkey>")]),n("br"),e._v(" "),n("code",[e._v("ENDIF")]),n("br"),e._v(" "),n("code",[e._v("CHECKSIG")])]),e._v(" "),n("p",[e._v("Note that both CHECKSEQUENCEVERIFY and CHECKLOCKTIMEVERIFY are used in\nthe final branch of above to ensure Bob cannot spend the output until\nafter both the timeout is complete and Alice has had time to reveal the\nrevocation secret.")]),e._v(" "),n("p",[e._v("See the "),n("a",{attrs:{href:"https://github.com/ElementsProject/lightning/blob/master/doc/deployable-lightning.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deployable\nLightning"),n("OutboundLink")],1),e._v("\npaper.")]),e._v(" "),n("h4",{attrs:{id:"_2-way-pegged-sidechains-way-pegged-sidechains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-way-pegged-sidechains-way-pegged-sidechains"}},[e._v("#")]),e._v(" 2-Way Pegged Sidechains {#way_pegged_sidechains}")]),e._v(" "),n("p",[e._v("The 2-way pegged sidechain requires a new REORGPROOFVERIFY opcode, the\nsemantics of which are outside the scope of this BIP.\nCHECKSEQUENCEVERIFY is used to make sure that sufficient time has passed\nsince the return peg was posted to publish a reorg proof:")]),e._v(" "),n("p",[n("code",[e._v("IF")]),n("br"),e._v(" "),n("code",[e._v("lockTxHeight  <lockTxHash>")]),e._v(" "),n("code",[e._v("nlocktxOut [ <workAmount>")]),e._v(" "),n("code",[e._v("] reorgBounty Hash160(<...>)  <genesisHash>")]),e._v(" "),n("code",[e._v("REORGPROOFVERIFY")]),n("br"),e._v(" "),n("code",[e._v("ELSE")]),n("br"),e._v(" "),n("code",[e._v("withdrawLockTime CHECKSEQUENCEVERIFY DROP HASH160 p2shWithdrawDest EQUAL")]),n("br"),e._v(" "),n("code",[e._v("ENDIF")])]),e._v(" "),n("h2",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),n("p",[e._v("Refer to the reference implementation, reproduced below, for the precise\nsemantics and detailed rationale for those semantics.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("/* Below flags apply in the context of BIP 68 */\n/* If this flag set, CTxIn::nSequence is NOT interpreted as a\n * relative lock-time. */\nstatic const uint32_t SEQUENCE_LOCKTIME_DISABLE_FLAG = (1 << 31);\n\n/* If CTxIn::nSequence encodes a relative lock-time and this flag\n * is set, the relative lock-time has units of 512 seconds,\n * otherwise it specifies blocks with a granularity of 1. */\nstatic const uint32_t SEQUENCE_LOCKTIME_TYPE_FLAG = (1 << 22);\n\n/* If CTxIn::nSequence encodes a relative lock-time, this mask is\n * applied to extract that lock-time from the sequence field. */\nstatic const uint32_t SEQUENCE_LOCKTIME_MASK = 0x0000ffff;\n   \ncase OP_NOP3:\n{\n    if (!(flags & SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {\n        // not enabled; treat as a NOP3\n        if (flags & SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) {\n            return set_error(serror, SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS);\n        }\n        break;\n    }\n\n    if (stack.size() < 1)\n       return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);\n\n    // Note that elsewhere numeric opcodes are limited to\n    // operands in the range -2**31+1 to 2**31-1, however it is\n    // legal for opcodes to produce results exceeding that\n    // range. This limitation is implemented by CScriptNum's\n    // default 4-byte limit.\n    //\n    // Thus as a special case we tell CScriptNum to accept up\n    // to 5-byte bignums, which are good until 2**39-1, well\n    // beyond the 2**32-1 limit of the nSequence field itself.\n    const CScriptNum nSequence(stacktop(-1), fRequireMinimal, 5);\n\n    // In the rare event that the argument may be < 0 due to\n    // some arithmetic being done first, you can always use\n    // 0 MAX CHECKSEQUENCEVERIFY.\n    if (nSequence < 0)\n        return set_error(serror, SCRIPT_ERR_NEGATIVE_LOCKTIME);\n\n    // To provide for future soft-fork extensibility, if the\n    // operand has the disabled lock-time flag set,\n    // CHECKSEQUENCEVERIFY behaves as a NOP.\n    if ((nSequence & CTxIn::SEQUENCE_LOCKTIME_DISABLE_FLAG) != 0)\n        break;\n\n    // Compare the specified sequence number with the input.\n    if (!checker.CheckSequence(nSequence))\n        return set_error(serror, SCRIPT_ERR_UNSATISFIED_LOCKTIME);\n\n    break;\n}\n    \nbool TransactionSignatureChecker::CheckSequence(const CScriptNum& nSequence) const\n{\n    // Relative lock times are supported by comparing the passed\n    // in operand to the sequence number of the input.\n    const int64_t txToSequence = (int64_t)txTo->vin[nIn].nSequence;\n\n    // Fail if the transaction's version number is not set high\n    // enough to trigger BIP 68 rules.\n    if (static_cast<uint32_t>(txTo->nVersion) < 2)\n        return false;\n\n    // Sequence numbers with their most significant bit set are not\n    // consensus constrained. Testing that the transaction's sequence\n    // number do not have this bit set prevents using this property\n    // to get around a CHECKSEQUENCEVERIFY check.\n    if (txToSequence & CTxIn::SEQUENCE_LOCKTIME_DISABLE_FLAG)\n        return false;\n\n    // Mask off any bits that do not have consensus-enforced meaning\n    // before doing the integer comparisons\n    const uint32_t nLockTimeMask = CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG | CTxIn::SEQUENCE_LOCKTIME_MASK;\n    const int64_t txToSequenceMasked = txToSequence & nLockTimeMask;\n    const CScriptNum nSequenceMasked = nSequence & nLockTimeMask;\n\n    // There are two kinds of nSequence: lock-by-blockheight\n    // and lock-by-blocktime, distinguished by whether\n    // nSequenceMasked < CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG.\n    //\n    // We want to compare apples to apples, so fail the script\n    // unless the type of nSequenceMasked being tested is the same as\n    // the nSequenceMasked in the transaction.\n    if (!(\n        (txToSequenceMasked <  CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG && nSequenceMasked <  CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG) ||\n        (txToSequenceMasked >= CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG && nSequenceMasked >= CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG)\n    ))\n        return false;\n\n    // Now that we know we're comparing apples-to-apples, the\n    // comparison is a simple numeric one.\n    if (nSequenceMasked > txToSequenceMasked)\n        return false;\n\n    return true;\n}\n")])])]),n("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference Implementation {#reference_implementation}")]),e._v(" "),n("p",[e._v("A reference implementation is provided by the following pull request:")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/pull/7524",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bitcoin/pull/7524"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),n("p",[e._v('This BIP is to be deployed by "versionbits" BIP9 using bit 0.')]),e._v(" "),n("p",[e._v("For Bitcoin "),n("strong",[e._v("mainnet")]),e._v(", the BIP9 "),n("strong",[e._v("starttime")]),e._v(" will be midnight 1st May\n2016 UTC (Epoch timestamp 1462060800) and BIP9 "),n("strong",[e._v("timeout")]),e._v(" will be\nmidnight 1st May 2017 UTC (Epoch timestamp 1493596800).")]),e._v(" "),n("p",[e._v("For Bitcoin "),n("strong",[e._v("testnet")]),e._v(", the BIP9 "),n("strong",[e._v("starttime")]),e._v(" will be midnight 1st\nMarch 2016 UTC (Epoch timestamp 1456790400) and BIP9 "),n("strong",[e._v("timeout")]),e._v(" will be\nmidnight 1st May 2017 UTC (Epoch timestamp 1493596800).")]),e._v(" "),n("p",[e._v("This BIP must be deployed simultaneously with BIP68 and BIP113 using the\nsame deployment mechanism.")]),e._v(" "),n("h2",{attrs:{id:"credits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),n("p",[e._v("Mark Friedenbach invented the application of sequence numbers to achieve\nrelative lock-time, and wrote the reference implementation of\nCHECKSEQUENCEVERIFY.")]),e._v(" "),n("p",[e._v("The reference implementation and this BIP was based heavily on work done\nby Peter Todd for the closely related BIP 65.")]),e._v(" "),n("p",[e._v("BtcDrak authored this BIP document.")]),e._v(" "),n("p",[e._v("Thanks to Eric Lombrozo and Anthony Towns for contributing example use\ncases.")]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 9"),n("OutboundLink")],1),e._v("\nVersionbits")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 68"),n("OutboundLink")],1),e._v("\nRelative lock-time through consensus-enforced sequence numbers")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 65"),n("OutboundLink")],1),e._v("\nOP_CHECKLOCKTIMEVERIFY")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP\n113"),n("OutboundLink")],1),e._v("\nMedian past block time for time-lock constraints")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://lists.linuxfoundation.org/pipermail/lightning-dev/2015-July/000021.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTLCs using OP_CHECKSEQUENCEVERIFY/OP_LOCKTIMEVERIFY and revocation\nhashes"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"http://lightning.network/lightning-network-paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning\nNetwork"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ElementsProject/lightning/blob/master/doc/deployable-lightning.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deployable\nLightning"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"http://diyhpl.us/diyhpluswiki/transcripts/sf-bitcoin-meetup/2015-02-23-scaling-bitcoin-to-billions-of-transactions-per-day/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scaling Bitcoin to Billions of Transactions Per\nDay"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"http://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-August/010396.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Softfork deployment\nconsiderations"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://gist.github.com/sipa/bf69659f43e763540550",target:"_blank",rel:"noopener noreferrer"}},[e._v("Version bits"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2013-April/002433.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jeremy Spilman Micropayment\nChannels"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),n("p",[e._v("This document is placed in the public domain.")])])}),[],!1,null,null,null);t.default=a.exports}}]);