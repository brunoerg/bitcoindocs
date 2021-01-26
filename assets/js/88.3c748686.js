(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{463:function(e,t,i){"use strict";i.r(t);var n=i(43),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_342"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_342"}},[e._v("#")]),e._v(" 342")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("  BIP: 342\n  Layer: Consensus (soft fork)\n  Title: Validation of Taproot Scripts\n  Author: Pieter Wuille <pieter.wuille@gmail.com>\n          Jonas Nick <jonasd.nick@gmail.com>\n          Anthony Towns <aj@erisian.com.au>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0342\n  Status: Draft\n  Type: Standards Track\n  Created: 2020-01-19\n  License: BSD-3-Clause\n  Requires: 340, 341\n  Post-History: 2019-05-06: https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2019-May/016914.html [bitcoin-dev] Taproot proposal\n")])])]),i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),i("h3",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),i("p",[e._v("This document specifies the semantics of the initial scripting system\nunder "),i("a",{attrs:{href:"bip-0341.mediawiki",title:"wikilink"}},[e._v("BIP341")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"copyright"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),i("p",[e._v("This document is licensed under the 3-clause BSD license.")]),e._v(" "),i("h3",{attrs:{id:"motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),i("p",[i("a",{attrs:{href:"bip-0341.mediawiki",title:"wikilink"}},[e._v("BIP341")]),e._v(" proposes improvements to just\nthe script structure, but some of its goals are incompatible with the\nsemantics of certain opcodes within the scripting language itself. While\nit is possible to deal with these in separate optional improvements,\ntheir impact is not guaranteed unless they are addressed simultaneously\nwith "),i("a",{attrs:{href:"bip-0341.mediawiki",title:"wikilink"}},[e._v("BIP341")]),e._v(" itself.")]),e._v(" "),i("p",[e._v("Specifically, the goal is making "),i("strong",[e._v("Schnorr signatures")]),e._v(", "),i("strong",[e._v("batch\nvalidation")]),e._v(", and "),i("strong",[e._v("signature hash")]),e._v(" improvements available to spends\nthat use the script system as well.")]),e._v(" "),i("h2",{attrs:{id:"design"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),i("p",[e._v("In order to achieve these goals, signature opcodes "),i("code",[e._v("OP_CHECKSIG")]),e._v(" and\n"),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(" are modified to verify Schnorr signatures as\nspecified in "),i("a",{attrs:{href:"bip-0340.mediawiki",title:"wikilink"}},[e._v("BIP340")]),e._v(" and to use a\nsignature message algorithm based on the common message calculation in\n"),i("a",{attrs:{href:"bip-0341.mediawiki",title:"wikilink"}},[e._v("BIP341")]),e._v(". The tapscript signature message\nalso simplifies "),i("code",[e._v("OP_CODESEPARATOR")]),e._v(" handling and makes it more efficient.")]),e._v(" "),i("p",[e._v("The inefficient "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(" and "),i("code",[e._v("OP_CHECKMULTISIGVERIFY")]),e._v(" opcodes\nare disabled. Instead, a new opcode "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(" is introduced to\nallow creating the same multisignature policies in a batch-verifiable\nway. Tapscript uses a new, simpler signature opcode limit fixing\ncomplicated interactions with transaction weight. Furthermore, a\npotential malleability vector is eliminated by requiring MINIMALIF.")]),e._v(" "),i("p",[e._v("Tapscript can be upgraded through soft forks by defining unknown key\ntypes, for example to add new "),i("code",[e._v("hash_types")]),e._v(" or signature algorithms.\nAdditionally, the new tapscript "),i("code",[e._v("OP_SUCCESS")]),e._v(" opcodes allow introducing\nnew opcodes more cleanly than through "),i("code",[e._v("OP_NOP")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),i("p",[e._v("The rules below only apply when validating a transaction input for which\nall of the conditions below are true:")]),e._v(" "),i("ul",[i("li",[e._v("The transaction input is a "),i("strong",[e._v("segregated witness spend")]),e._v(" (i.e., the\nscriptPubKey contains a witness program as defined in\n"),i("a",{attrs:{href:"bip-0141.mediawiki",title:"wikilink"}},[e._v("BIP141")]),e._v(").")]),e._v(" "),i("li",[e._v("It is a "),i("strong",[e._v("taproot spend")]),e._v(" as defined in\n"),i("a",{attrs:{href:"bip-0341.mediawiki#design",title:"wikilink"}},[e._v("BIP341")]),e._v(" (i.e., the witness\nversion is 1, the witness program is 32 bytes, and it is not P2SH\nwrapped).")]),e._v(" "),i("li",[e._v("It is a "),i("strong",[e._v("script path spend")]),e._v(" as defined in\n"),i("a",{attrs:{href:"bip-0341.mediawiki#design",title:"wikilink"}},[e._v("BIP341")]),e._v(" (i.e., after removing\nthe optional annex from the witness stack, two or more stack\nelements remain).")]),e._v(" "),i("li",[e._v("The leaf version is "),i("em",[e._v("0xc0")]),e._v(" (i.e. the first byte of the last witness\nelement after removing the optional annex is "),i("em",[e._v("0xc0")]),e._v(" or "),i("em",[e._v("0xc1")]),e._v("),\nmarking it as a "),i("strong",[e._v("tapscript spend")]),e._v(".")])]),e._v(" "),i("p",[e._v("Validation of such inputs must be equivalent to performing the following\nsteps in the specified order.")]),e._v(" "),i("ol",[i("li",[e._v("If the input is invalid due to BIP141 or BIP341, fail.")]),e._v(" "),i("li",[e._v("The script as defined in BIP341 (i.e., the penultimate witness stack\nelement after removing the optional annex) is called the\n"),i("strong",[e._v("tapscript")]),e._v(" and is decoded into opcodes, one by one:\n"),i("ol",[i("li",[e._v("If any opcode numbered "),i("em",[e._v("80, 98, 126-129, 131-134, 137-138,\n141-142, 149-153, 187-254")]),e._v(" is encountered, validation succeeds\n(none of the rules below apply). This is true even if later\nbytes in the tapscript would fail to decode otherwise. These\nopcodes are renamed to "),i("code",[e._v("OP_SUCCESS80")]),e._v(", ..., "),i("code",[e._v("OP_SUCCESS254")]),e._v(",\nand collectively known as\n"),i("code",[e._v("OP_SUCCESSx <ref>")]),e._v(" "),i("strong",[i("code",[e._v("OP_SUCCESSx")])]),e._v(" "),i("code",[e._v("OP_SUCCESSx")]),e._v(" is a\nmechanism to upgrade the Script system. Using an "),i("code",[e._v("OP_SUCCESSx")]),e._v("\nbefore its meaning is defined by a softfork is insecure and\nleads to fund loss. The inclusion of "),i("code",[e._v("OP_SUCCESSx")]),e._v(" in a script\nwill pass it unconditionally. It precedes any script execution\nrules to avoid the difficulties in specifying various edge\ncases, for example: "),i("code",[e._v("OP_SUCCESSx")]),e._v(" in a script with an input\nstack larger than 1000 elements, "),i("code",[e._v("OP_SUCCESSx")]),e._v(" after too many\nsignature opcodes, or even scripts with conditionals lacking\n"),i("code",[e._v("OP_ENDIF")]),e._v(". The mere existence of an "),i("code",[e._v("OP_SUCCESSx")]),e._v(" anywhere in\nthe script will guarantee a pass for all such cases.\n"),i("code",[e._v("OP_SUCCESSx")]),e._v(" are similar to the "),i("code",[e._v("OP_RETURN")]),e._v(" in very early\nbitcoin versions (v0.1 up to and including v0.3.5). The original\n"),i("code",[e._v("OP_RETURN")]),e._v(" terminates script execution immediately, and return\npass or fail based on the top stack element at the moment of\ntermination. This was one of a major design flaws in the\noriginal bitcoin protocol as it permitted unconditional third\nparty theft by placing an "),i("code",[e._v("OP_RETURN")]),e._v(" in "),i("code",[e._v("scriptSig")]),e._v(". This is\nnot a concern in the present proposal since it is not possible\nfor a third party to inject an "),i("code",[e._v("OP_SUCCESSx")]),e._v(" to the validation\nprocess, as the "),i("code",[e._v("OP_SUCCESSx")]),e._v(" is part of the script (and thus\ncommitted to by the taproot output), implying the consent of the\ncoin owner. "),i("code",[e._v("OP_SUCCESSx")]),e._v(" can be used for a variety of upgrade\npossibilities:")])])])]),e._v(" "),i("ul",[i("li",[e._v("An "),i("code",[e._v("OP_SUCCESSx")]),e._v(" could be turned into a functional opcode through a\nsoftfork. Unlike "),i("code",[e._v("OP_NOPx")]),e._v("-derived opcodes which only have read-only\naccess to the stack, "),i("code",[e._v("OP_SUCCESSx")]),e._v(" may also write to the stack. Any\nrule changes to an "),i("code",[e._v("OP_SUCCESSx")]),e._v("-containing script may only turn a\nvalid script into an invalid one, and this is always achievable with\nsoftforks.")]),e._v(" "),i("li",[e._v("Since "),i("code",[e._v("OP_SUCCESSx")]),e._v(" precedes size check of initial stack and push\nopcodes, an "),i("code",[e._v("OP_SUCCESSx")]),e._v("-derived opcode requiring stack elements\nbigger than 520 bytes may uplift the limit in a softfork.")]),e._v(" "),i("li",[i("code",[e._v("OP_SUCCESSx")]),e._v(" may also redefine the behavior of existing opcodes so\nthey could work together with the new opcode. For example, if an\n"),i("code",[e._v("OP_SUCCESSx")]),e._v("-derived opcode works with 64-bit integers, it may also\nallow the existing arithmetic opcodes in the "),i("em",[e._v("same script")]),e._v(" to do the\nsame.")]),e._v(" "),i("li",[e._v("Given that "),i("code",[e._v("OP_SUCCESSx")]),e._v(" even causes potentially unparseable scripts\nto pass, it can be used to introduce multi-byte opcodes, or even a\ncompletely new scripting language when prefixed with a specific\n"),i("code",[e._v("OP_SUCCESSx")]),e._v(" opcode."),i("code",[e._v("</ref>")]),e._v(" .")])]),e._v(" "),i("ol",[i("li",[i("ol",[i("li",[e._v("If any push opcode fails to decode because it would extend past\nthe end of the tapscript, fail.")])])]),e._v(" "),i("li",[i("p",[e._v("If the "),i("strong",[e._v("initial stack")]),e._v(' as defined in BIP341 (i.e., the witness\nstack after removing both the optional annex and the two last stack\nelements after that) violates any resource limits (stack size, and\nsize of the elements in the stack; see "Resource Limits" below),\nfail. Note that this check can be bypassed using '),i("code",[e._v("OP_SUCCESSx")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("The tapscript is executed according to the rules in the following\nsection, with the initial stack as input.")]),e._v(" "),i("ol",[i("li",[e._v("If execution fails for any reason, fail.")]),e._v(" "),i("li",[e._v("If the execution results in anything but exactly one element on\nthe stack which evaluates to true with "),i("code",[e._v("CastToBool()")]),e._v(", fail.")])])]),e._v(" "),i("li",[i("p",[e._v("If this step is reached without encountering a failure, validation\nsucceeds.")])])]),e._v(" "),i("h3",{attrs:{id:"script-execution-script-execution"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#script-execution-script-execution"}},[e._v("#")]),e._v(" Script execution {#script_execution}")]),e._v(" "),i("p",[e._v("The execution rules for tapscript are based on those for P2WSH according\nto BIP141, including the "),i("code",[e._v("OP_CHECKLOCKTIMEVERIFY")]),e._v(" and\n"),i("code",[e._v("OP_CHECKSEQUENCEVERIFY")]),e._v(" opcodes defined in\n"),i("a",{attrs:{href:"bip-0065.mediawiki",title:"wikilink"}},[e._v("BIP65")]),e._v(" and\n"),i("a",{attrs:{href:"bip-0112.mediawiki",title:"wikilink"}},[e._v("BIP112")]),e._v(", but with the following\nmodifications:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Disabled script opcodes")]),e._v(" The following script opcodes are\ndisabled in tapscript: "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(" and\n"),i("code",[e._v("OP_CHECKMULTISIGVERIFY")]),e._v("[^1]. The disabled opcodes behave in the\nsame way as "),i("code",[e._v("OP_RETURN")]),e._v(", by failing and terminating the script\nimmediately when executed, and being ignored when found in\nunexecuted branch of the script.")]),e._v(" "),i("li",[i("strong",[e._v("Consensus-enforced MINIMALIF")]),e._v(" The MINIMALIF rules, which are only\na standardness rule in P2WSH, are consensus enforced in tapscript.\nThis means that the input argument to the "),i("code",[e._v("OP_IF")]),e._v(" and "),i("code",[e._v("OP_NOTIF")]),e._v("\nopcodes must be either exactly 0 (the empty vector) or exactly 1\n(the one-byte vector with value 1)[^2].")]),e._v(" "),i("li",[i("strong",[e._v("OP_SUCCESSx opcodes")]),e._v(" As listed above, some opcodes are renamed to\n"),i("code",[e._v("OP_SUCCESSx")]),e._v(", and make the script unconditionally valid.")]),e._v(" "),i("li",[i("strong",[e._v("Signature opcodes")]),e._v(". The "),i("code",[e._v("OP_CHECKSIG")]),e._v(" and "),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(" are\nmodified to operate on Schnorr public keys and signatures (see\n"),i("a",{attrs:{href:"bip-0340.mediawiki",title:"wikilink"}},[e._v("BIP340")]),e._v(") instead of ECDSA, and a new\nopcode "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(" is added.\n"),i("ul",[i("li",[e._v("The opcode 186 ("),i("code",[e._v("0xba")]),e._v(") is named as "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(".\n[^3]"),i("code",[e._v("<ref>")]),e._v(" "),i("strong",[e._v("Alternatives to "),i("code",[e._v("CHECKMULTISIG")])]),e._v(" There are\nmultiple ways of implementing a threshold "),i("em",[e._v("k")]),e._v("-of-"),i("em",[e._v("n")]),e._v(" policy\nusing Taproot and Tapscript:")])])]),e._v(" "),i("li",[i("strong",[e._v("Using a single "),i("code",[e._v("OP_CHECKSIGADD")]),e._v("-based script")]),e._v(" A "),i("code",[e._v("CHECKMULTISIG")]),e._v("\nscript\n"),i("code",[e._v("m <pubkey_1>")]),e._v(" "),i("code",[e._v("... <pubkey_n>")]),e._v(" "),i("code",[e._v("n CHECKMULTISIG")]),e._v("\nwith witness "),i("code",[e._v("0 <signature_1>")]),e._v(" "),i("code",[e._v("... <signature_m>")]),e._v("\ncan be rewritten as script\n"),i("code",[e._v("<pubkey_1>")]),e._v(" "),i("code",[e._v("CHECKSIG <pubkey_2>")]),e._v(" "),i("code",[e._v("CHECKSIGADD ... <pubkey_n>")]),e._v(" "),i("code",[e._v("CHECKSIGADD m NUMEQUAL")]),e._v("\nwith witness "),i("code",[e._v("<w_n>")]),e._v(" "),i("code",[e._v("... <w_1>")]),e._v(" . Every witness\nelement "),i("code",[e._v("w_i")]),e._v(" is either a signature corresponding to "),i("code",[e._v("pubkey_i")]),e._v(" or\nan empty vector. A similar "),i("code",[e._v("CHECKMULTISIGVERIFY")]),e._v(" script can be\ntranslated to BIP342 by replacing "),i("code",[e._v("NUMEQUAL")]),e._v(" with "),i("code",[e._v("NUMEQUALVERIFY")]),e._v(".\nThis approach has very similar characteristics to the existing\n"),i("code",[e._v("OP_CHECKMULTISIG")]),e._v("-based scripts.")]),e._v(" "),i("li",[i("strong",[e._v("Using a "),i("em",[e._v("k")]),e._v("-of-"),i("em",[e._v("k")]),e._v(" script for every combination")]),e._v(" A "),i("em",[e._v("k")]),e._v("-of-"),i("em",[e._v("n")]),e._v("\npolicy can be implemented by splitting the script into several\nleaves of the Merkle tree, each implementing a "),i("em",[e._v("k")]),e._v("-of-"),i("em",[e._v("k")]),e._v(" policy\nusing\n"),i("code",[e._v("<pubkey_1>")]),e._v(" "),i("code",[e._v("CHECKSIGVERIFY ... <pubkey_(n-1)> CHECKSIGVERIFY <pubkey_n>")]),e._v(" "),i("code",[e._v("CHECKSIG")]),e._v(".\nThis may be preferable for privacy reasons over the previous\napproach, as it only exposes the participating public keys, but it\nis only more cost effective for small values of "),i("em",[e._v("k")]),e._v(" (1-of-"),i("em",[e._v("n")]),e._v(" for\nany "),i("em",[e._v("n")]),e._v(", 2-of-"),i("em",[e._v("n")]),e._v(" for "),i("em",[e._v("n ≥ 6")]),e._v(", 3-of-"),i("em",[e._v("n")]),e._v(" for "),i("em",[e._v("n ≥ 9")]),e._v(", ...).\nFurthermore, the signatures here commit to the branch used, which\nmeans signers need to be aware of which other signers will be\nparticipating, or produce signatures for each of the tree leaves.")]),e._v(" "),i("li",[i("strong",[e._v("Using an aggregated public key for every combination")]),e._v(" Instead of\nbuilding a tree where every leaf consists of "),i("em",[e._v("k")]),e._v(" public keys, it is\npossible instead build a tree where every leaf contains a single\n"),i("em",[e._v("aggregate")]),e._v(" of those "),i("em",[e._v("k")]),e._v(" keys using\n"),i("a",{attrs:{href:"https://eprint.iacr.org/2018/068",target:"_blank",rel:"noopener noreferrer"}},[e._v("MuSig"),i("OutboundLink")],1),e._v(". This approach is far more\nefficient, but does require a 3-round interactive signing protocol\nto jointly produce the (single) signature.")]),e._v(" "),i("li",[i("strong",[e._v("Native Schnorr threshold signatures")]),e._v(" Multisig policies can also\nbe realized with "),i("a",{attrs:{href:"http://cacr.uwaterloo.ca/techreports/2001/corr2001-13.ps",target:"_blank",rel:"noopener noreferrer"}},[e._v("threshold\nsignatures"),i("OutboundLink")],1),e._v("\nusing verifiable secret sharing. This results in outputs and inputs\nthat are indistinguishable from single-key payments, but at the cost\nof needing an interactive protocol (and associated backup\nprocedures) before determining the address to send\nto."),i("code",[e._v("</ref>")])])]),e._v(" "),i("h3",{attrs:{id:"rules-for-signature-opcodes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rules-for-signature-opcodes"}},[e._v("#")]),e._v(" Rules for signature opcodes")]),e._v(" "),i("p",[e._v("The following rules apply to "),i("code",[e._v("OP_CHECKSIG")]),e._v(", "),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(", and\n"),i("code",[e._v("OP_CHECKSIGADD")]),e._v(".")]),e._v(" "),i("ul",[i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(" and "),i("code",[e._v("OP_CHECKSIG")]),e._v(", the public key (top\nelement) and a signature (second to top element) are popped from the\nstack.\n"),i("ul",[i("li",[e._v("If fewer than 2 elements are on the stack, the script MUST fail\nand terminate immediately.")])])]),e._v(" "),i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(", the public key (top element), a "),i("code",[e._v("CScriptNum")]),e._v(" "),i("code",[e._v("n")]),e._v(" (second to top element), and a signature (third to top element)\nare popped from the stack.\n"),i("ul",[i("li",[e._v("If fewer than 3 elements are on the stack, the script MUST fail\nand terminate immediately.")]),e._v(" "),i("li",[e._v("If "),i("code",[e._v("n")]),e._v(" is larger than 4 bytes, the script MUST fail and\nterminate immediately.")])])]),e._v(" "),i("li",[e._v("If the public key size is zero, the script MUST fail and terminate\nimmediately.")]),e._v(" "),i("li",[e._v("If the public key size is 32 bytes, it is considered to be a public\nkey as described in BIP340:\n"),i("ul",[i("li",[e._v("If the signature is not the empty vector, the signature is\nvalidated against the public key (see the next subsection).\nValidation failure in this case immediately terminates script\nexecution with failure.")])])]),e._v(" "),i("li",[e._v("If the public key size is not zero and not 32 bytes, the public key\nis of an "),i("em",[e._v("unknown public key type")]),e._v("[^4] and no actual signature\nverification is applied. During script execution of signature\nopcodes they behave exactly as known public key types except that\nsignature validation is considered to be successful.")]),e._v(" "),i("li",[e._v("If the script did not fail and terminate before this step,\nregardless of the public key type:\n"),i("ul",[i("li",[e._v("If the signature is the empty vector:\n"),i("ul",[i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(", the script MUST fail and terminate\nimmediately.")]),e._v(" "),i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIG")]),e._v(", an empty vector is pushed onto the stack,\nand execution continues with the next opcode.")]),e._v(" "),i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(", a "),i("code",[e._v("CScriptNum")]),e._v(" with value "),i("code",[e._v("n")]),e._v(" is\npushed onto the stack, and execution continues with the next\nopcode.")])])]),e._v(" "),i("li",[e._v("If the signature is not the empty vector, the opcode is counted\ntowards the sigops budget (see further).\n"),i("ul",[i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(", execution continues without any\nfurther changes to the stack.")]),e._v(" "),i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIG")]),e._v(", a 1-byte value "),i("code",[e._v("0x01")]),e._v(" is pushed onto the\nstack.")]),e._v(" "),i("li",[e._v("For "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(", a "),i("code",[e._v("CScriptNum")]),e._v(" with value of "),i("code",[e._v("n + 1")]),e._v("\nis pushed onto the stack.")])])])])])]),e._v(" "),i("h3",{attrs:{id:"signature-validation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#signature-validation"}},[e._v("#")]),e._v(" Signature validation")]),e._v(" "),i("p",[e._v("To validate a signature "),i("em",[e._v("sig")]),e._v(" with public key "),i("em",[e._v("p")]),e._v(":")]),e._v(" "),i("ul",[i("li",[e._v("Compute the tapscript message extension "),i("em",[e._v("ext")]),e._v(", consisting of the\nconcatenation of:\n"),i("ul",[i("li",[i("em",[e._v("tapleaf_hash")]),e._v(" (32): the tapleaf hash as defined in\n"),i("a",{attrs:{href:"bip-0341.mediawiki#design",title:"wikilink"}},[e._v("BIP341")])]),e._v(" "),i("li",[i("em",[e._v("key_version")]),e._v(" (1): a constant value "),i("em",[e._v("0x00")]),e._v(" representing the\ncurrent version of public keys in the tapscript signature opcode\nexecution.")]),e._v(" "),i("li",[i("em",[e._v("codesep_pos")]),e._v(" (4): the opcode position of the last executed\n"),i("code",[e._v("OP_CODESEPARATOR")]),e._v(" before the currently executed signature\nopcode, with the value in little endian (or "),i("em",[e._v("0xffffffff")]),e._v(" if none\nexecuted). The first opcode in a script has a position of 0. A\nmulti-byte push opcode is counted as one opcode, regardless of\nthe size of data being pushed. Opcodes in parsed but unexecuted\nbranches count towards this value as well.")])])]),e._v(" "),i("li",[e._v("If the "),i("em",[e._v("sig")]),e._v(" is 64 bytes long, return "),i("em",[e._v("Verify(p,\nhash~TapSighash~(0x00 || SigMsg(0x00, 1) || ext), sig)")]),e._v(", where\n"),i("em",[e._v("Verify")]),e._v(" is defined in\n"),i("a",{attrs:{href:"bip-0340.mediawiki#design",title:"wikilink"}},[e._v("BIP340")]),e._v(".")]),e._v(" "),i("li",[e._v("If the "),i("em",[e._v("sig")]),e._v(" is 65 bytes long, return "),i("em",[e._v("sig[64] ≠ 0x00 and\nVerify(p, hash~TapSighash~(0x00 || SigMsg(sig[64], 1) || ext),\nsig[0:64])")]),e._v(".")]),e._v(" "),i("li",[e._v("Otherwise, fail.")])]),e._v(" "),i("p",[e._v("In summary, the semantics of signature validation is identical to\nBIP340, except the following:")]),e._v(" "),i("ol",[i("li",[e._v("The signature message includes the tapscript-specific data\n"),i("em",[e._v("key_version")]),e._v(".[^5]")]),e._v(" "),i("li",[e._v("The signature message commits to the executed script through the\n"),i("em",[e._v("tapleaf_hash")]),e._v(" which includes the leaf version and script instead of\n"),i("em",[e._v("scriptCode")]),e._v(". This implies that this commitment is unaffected by\n"),i("code",[e._v("OP_CODESEPARATOR")]),e._v(".")]),e._v(" "),i("li",[e._v("The signature message includes the opcode position of the last\nexecuted "),i("code",[e._v("OP_CODESEPARATOR")]),e._v(".[^6]")])]),e._v(" "),i("h3",{attrs:{id:"resource-limits-resource-limits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#resource-limits-resource-limits"}},[e._v("#")]),e._v(" Resource limits {#resource_limits}")]),e._v(" "),i("p",[e._v("In addition to changing the semantics of a number of opcodes, there are\nalso some changes to the resource limitations:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Script size limit")]),e._v(" The maximum script size of 10000 bytes does\nnot apply. Their size is only implicitly bounded by the block weight\nlimit.[^7]")]),e._v(" "),i("li",[i("strong",[e._v("Non-push opcodes limit")]),e._v(" The maximum non-push opcodes limit of 201\nper script does not apply.[^8]")]),e._v(" "),i("li",[i("strong",[e._v("Sigops limit")]),e._v(" The sigops in tapscripts do not count towards the\nblock-wide limit of 80000 (weighted). Instead, there is a per-script\nsigops "),i("em",[e._v("budget")]),e._v(". The budget equals 50 + the total serialized size in\nbytes of the transaction input's witness (including the\n"),i("code",[e._v("CompactSize")]),e._v(" prefix). Executing a signature opcode ("),i("code",[e._v("OP_CHECKSIG")]),e._v(",\n"),i("code",[e._v("OP_CHECKSIGVERIFY")]),e._v(", or "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(") with a non-empty signature\ndecrements the budget by 50. If that brings the budget below zero,\nthe script fails immediately. Signature opcodes with unknown public\nkey type and non-empty signature are also counted.[^9][^10][^11].")]),e._v(" "),i("li",[i("strong",[e._v("Stack + altstack element count limit")]),e._v(" The existing limit of 1000\nelements in the stack and altstack together after every executed\nopcode remains. It is extended to also apply to the size of initial\nstack.")]),e._v(" "),i("li",[i("strong",[e._v("Stack element size limit")]),e._v(" The existing limit of maximum 520 bytes\nper stack element remains, both in the initial stack and in push\nopcodes.")])]),e._v(" "),i("h2",{attrs:{id:"rationale"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("<references />\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br")])]),i("h2",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("h2",{attrs:{id:"acknowledgements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),i("p",[e._v("This document is the result of many discussions and contains\ncontributions by a number of people. The authors wish to thank all those\nwho provided valuable feedback and reviews, including the participants\nof the "),i("a",{attrs:{href:"https://github.com/ajtowns/taproot-review",target:"_blank",rel:"noopener noreferrer"}},[e._v("structured reviews"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("[^1]: "),i("strong",[e._v("Why are "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(" and "),i("code",[e._v("OP_CHECKMULTISIGVERIFY")]),e._v("\ndisabled, and not turned into OP_SUCCESSx?")]),e._v(" This is a precaution to\nmake sure people who accidentally keep using "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v(" in\nTapscript notice a problem immediately. It also avoids the\ncomplication of script disassemblers needing to become\ncontext-dependent.")]),e._v(" "),i("p",[e._v("[^2]: "),i("strong",[e._v("Why make MINIMALIF consensus?")]),e._v(" This makes it considerably\neasier to write non-malleable scripts that take branch information\nfrom the stack.")]),e._v(" "),i("p",[e._v("[^3]: "),i("strong",[i("code",[e._v("OP_CHECKSIGADD")])]),e._v(" This opcode is added to compensate for the\nloss of "),i("code",[e._v("OP_CHECKMULTISIG")]),e._v("-like opcodes, which are incompatible with\nbatch verification. "),i("code",[e._v("OP_CHECKSIGADD")]),e._v(" is functionally equivalent to\n"),i("code",[e._v("OP_ROT OP_SWAP OP_CHECKSIG OP_ADD")]),e._v(", but only takes 1 byte. All\n"),i("code",[e._v("CScriptNum")]),e._v("-related behaviours of "),i("code",[e._v("OP_ADD")]),e._v(" are also applicable to\n"),i("code",[e._v("OP_CHECKSIGADD")]),e._v(".")]),e._v(" "),i("p",[e._v("[^4]: "),i("strong",[e._v("Unknown public key types")]),e._v(" allow adding new signature validation\nrules through softforks. A softfork could add actual signature\nvalidation which either passes or makes the script fail and\nterminate immediately. This way, new "),i("code",[e._v("SIGHASH")]),e._v(" modes can be added,\nas well as "),i("a",{attrs:{href:"https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-December/016549.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("NOINPUT-tagged public\nkeys"),i("OutboundLink")],1),e._v("\nand a public key constant which is replaced by the taproot internal\nkey for signature validation.")]),e._v(" "),i("p",[e._v("[^5]: "),i("strong",[e._v("Why does the signature message commit to the "),i("em",[e._v("key_version")]),e._v("?")]),e._v("\nThis is for future extensions that define unknown public key types,\nmaking sure signatures can't be moved from one key type to another.")]),e._v(" "),i("p",[e._v("[^6]: "),i("strong",[e._v("Why does the signature message include the position of the last\nexecuted "),i("code",[e._v("OP_CODESEPARATOR")]),e._v("?")]),e._v(" This allows continuing to use\n"),i("code",[e._v("OP_CODESEPARATOR")]),e._v(" to sign the executed path of the script. Because\nthe "),i("code",[e._v("codeseparator_position")]),e._v(" is the last input to the hash, the\nSHA256 midstate can be efficiently cached for multiple\n"),i("code",[e._v("OP_CODESEPARATOR")]),e._v("s in a single script. In contrast, the BIP143\nhandling of "),i("code",[e._v("OP_CODESEPARATOR")]),e._v(" is to commit to the executed script\nonly from the last executed "),i("code",[e._v("OP_CODESEPARATOR")]),e._v(" onwards which\nrequires unnecessary rehashing of the script. It should be noted\nthat the one known "),i("code",[e._v("OP_CODESEPARATOR")]),e._v(" use case of saving a second\npublic key push in a script by sharing the first one between two\ncode branches can be most likely expressed even cheaper by moving\neach branch into a separate taproot leaf.")]),e._v(" "),i("p",[e._v("[^7]: "),i("strong",[e._v("Why is a limit on script size no longer needed?")]),e._v(" Since there is\nno "),i("code",[e._v("scriptCode")]),e._v(" directly included in the signature hash (only\nindirectly through a precomputable tapleaf hash), the CPU time spent\non a signature check is no longer proportional to the size of the\nscript being executed.")]),e._v(" "),i("p",[e._v("[^8]: "),i("strong",[e._v("Why is a limit on the number of opcodes no longer needed?")]),e._v(" An\nopcode limit only helps to the extent that it can prevent data\nstructures from growing unboundedly during execution (both because\nof memory usage, and because of time that may grow in proportion to\nthe size of those structures). The size of stack and altstack is\nalready independently limited. By using O(1) logic for "),i("code",[e._v("OP_IF")]),e._v(",\n"),i("code",[e._v("OP_NOTIF")]),e._v(", "),i("code",[e._v("OP_ELSE")]),e._v(", and "),i("code",[e._v("OP_ENDIF")]),e._v(" as suggested\n"),i("a",{attrs:{href:"https://bitslog.com/2017/04/17/new-quadratic-delays-in-bitcoin-scripts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v("\nand implemented\n"),i("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/pull/16902",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(", the only\nother instance can be avoided as well.")]),e._v(" "),i("p",[e._v("[^9]: "),i("strong",[e._v("The tapscript sigop limit")]),e._v(" The signature opcode limit protects\nagainst scripts which are slow to verify due to excessively many\nsignature operations. In tapscript the number of signature opcodes\ndoes not count towards the BIP141 or legacy sigop limit. The old\nsigop limit makes transaction selection in block construction\nunnecessarily difficult because it is a second constraint in\naddition to weight. Instead, the number of tapscript signature\nopcodes is limited by witness weight. Additionally, the limit\napplies to the transaction input instead of the block and only\nactually executed signature opcodes are counted. Tapscript execution\nallows one signature opcode per 50 witness weight units plus one\nfree signature opcode.")]),e._v(" "),i("p",[e._v("[^10]: "),i("strong",[e._v("Parameter choice of the sigop limit")]),e._v(" Regular witnesses are\nunaffected by the limit as their weight is composed of public key\nand ("),i("code",[e._v("SIGHASH_ALL")]),e._v(") signature pairs with "),i("em",[e._v("33 + 65")]),e._v(" weight units each\n(which includes a 1 weight unit "),i("code",[e._v("CompactSize")]),e._v(' tag). This is also the\ncase if public keys are reused in the script because a signature\'s\nweight alone is 65 or 66 weight units. However, the limit increases\nthe fees of abnormal scripts with duplicate signatures (and public\nkeys) by requiring additional weight. The weight per sigop factor 50\ncorresponds to the ratio of BIP141 block limits: 4 mega weight units\ndivided by 80,000 sigops. The "free" signature opcode permitted by\nthe limit exists to account for the weight of the non-witness parts\nof the transaction input.')]),e._v(" "),i("p",[e._v("[^11]: "),i("strong",[e._v("Why are only signature opcodes counted toward the budget, and\nnot for example hashing opcodes or other expensive operations?")]),e._v(" It\nturns out that the CPU cost per witness byte for verification of a\nscript consisting of the maximum density of signature checking\nopcodes (taking the 50 WU/sigop limit into account) is already very\nclose to that of scripts packed with other opcodes, including\nhashing opcodes (taking the 520 byte stack element limit into\naccount) and "),i("code",[e._v("OP_ROLL")]),e._v(" (taking the 1000 stack element limit into\naccount). That said, the construction is very flexible, and allows\nadding new signature opcodes like "),i("code",[e._v("CHECKSIGFROMSTACK")]),e._v(" to count\ntowards the limit through a soft fork. Even if in the future new\nopcodes are introduced which change normal script cost there is no\nneed to stuff the witness with meaningless data. Instead, the\ntaproot annex can be used to add weight to the witness without\nincreasing the actual witness size.")])])}),[],!1,null,null,null);t.default=s.exports}}]);