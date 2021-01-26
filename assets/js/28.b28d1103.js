(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{403:function(e,t,i){"use strict";i.r(t);var n=i(43),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_117"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_117"}},[e._v("#")]),e._v(" 117")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("  BIP: 117\n  Layer: Consensus (soft fork)\n  Title: Tail Call Execution Semantics\n  Author: Mark Friedenbach <mark@friedenbach.org>\n          Kalle Alm <kalle.alm@gmail.com>\n          BtcDrak <btcdrak@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0117\n  Status: Draft\n  Type: Standards Track\n  Created: 2017-08-25\n  License: CC-BY-SA-4.0\n  License-Code: MIT\n")])])]),i("h2",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),i("p",[e._v("BIP16 (Pay to Script Hash)[1] and BIP141 (Segregated Witness)[2]\nprovide mechanisms by which script policy can be revealed at spend time\nas part of the execution witness. In both cases only a single script can\nbe committed to by the construct. While useful for achieving the goals\nof these proposals, they still require that all policies be specified\nwithin the confine of a single script, regardless of whether the\npolicies are needed at the time of spend.")]),e._v(" "),i("p",[e._v("This BIP, in conjunction with BIP116 (MERKLEBRANCHVERIFY)[3] allows\nfor a script to commit to a practically unbounded number of code\npathways, and then reveal the actual code pathway used at spend time.\nThis achieves a form of generalized MAST[4] enabling decomposition of\ncomplex branching scripts into a set of non-branching flat execution\npathways, committing to the entire set of possible pathways, and then\nrevealing only the path used at spend time.")]),e._v(" "),i("h2",{attrs:{id:"copyright"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),i("p",[e._v("This BIP is licensed under a Creative Commons Attribution-ShareAlike\nlicense. All provided source code is licensed under the MIT license.")]),e._v(" "),i("h2",{attrs:{id:"specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),i("p",[e._v("If, at the end of script execution:")]),e._v(" "),i("ul",[i("li",[e._v("the execution state is non-clean, meaning\n"),i("ol",[i("li",[e._v("the main stack has more than one item on it, or")]),e._v(" "),i("li",[e._v("the main stack has exactly one item and the alt-stack is not\nempty;")])])]),e._v(" "),i("li",[e._v("the top-most element of the main stack evaluates as true when\ninterpreted as a bool; and")]),e._v(" "),i("li",[e._v("the top-most element is not a single byte or is outside the\ninclusive range of "),i("code",[e._v("0x51")]),e._v(" to "),i("code",[e._v("0x60")]),e._v(",")])]),e._v(" "),i("p",[e._v("then that top-most element of the main stack is popped and interpreted\nas a serialized script and executed, while the remaining elements of\nboth stacks remain in place as inputs.")]),e._v(" "),i("p",[e._v("If the above conditions hold except for the last one, such that:")]),e._v(" "),i("ul",[i("li",[e._v("the top-most element "),i("em",[e._v("is")]),e._v(" a single byte within the inclusive range\nof "),i("code",[e._v("0x51")]),e._v(" ("),i("code",[e._v("OP_1")]),e._v(", meaning N=2) to "),i("code",[e._v("0x60")]),e._v(" ("),i("code",[e._v("OP_16")]),e._v(", meaning N=17);\nand")]),e._v(" "),i("li",[e._v("other than this top-most element there are at least N additional\nelements on the main stack and alt stack combined,")])]),e._v(" "),i("p",[e._v("then the top-most element of the main stack is dropped, and the N=2\n("),i("code",[e._v("0x51")]),e._v(") to 17 ("),i("code",[e._v("0x60")]),e._v(") further elements are popped from the main stack,\ncontinuing from the alt stack if the main stack is exhausted, and\nconcatenated together in reverse order to form a serialized script,\nwhich is then executed with the remaining elements of both stacks\nremaining in place as inputs.")]),e._v(" "),i("p",[e._v("The presence of CHECKSIG or CHECKMULTISIG within the subscript do not\ncount towards the global MAX_BLOCK_SIGOPS_COST limit, and the number of\nnon-push opcodes executed in the subscript is not limited by\nMAX_OPS_PER_SCRIPT. Execution state, other than the above exceptions,\ncarries over into the subscript, and termination of the subscript\nterminates execution of the script as a whole. This is known as\nexecution with tail-call semantics.")]),e._v(" "),i("p",[e._v("Only one such tail-call of a subscript is allowed per script execution\ncontext, and only from within a segwit redeem script. Alternatively\nstated, neither evaluation of witness stack nor execution of the\nscriptPubKey or scriptSig or P2SH redeem script results in tail-call\nsemantics.")]),e._v(" "),i("h2",{attrs:{id:"motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),i("p",[e._v("BIP16 (Pay to Script Hash)[1] and BIP141 (Segregated Witness)[2]\nallow delayed revelation of a script's policy until the time of spend.\nHowever these approaches are limited in that only a single policy can be\ncommitted to in a given transaction output. It is not possible to commit\nto multiple policies and then choose, at spend time, which to reveal.")]),e._v(" "),i("p",[e._v("BIP116 (MERKLEBRANCHVERIFY)[3] allows multiple data elements to be\ncommitted to while only revealing those necessary at the time of spend.\nThe MERKLEBRANCHVERIFY opcode is only able to provide commitments to a\npreselected set of data values, and does not by itself allow for\nexecuting code.")]),e._v(" "),i("p",[e._v("This BIP generalizes the approach of these prior methods by allowing the\nredeem script to perform any type of computation necessary to place the\npolicy script on the stack. The policy script is then executed from the\ntop of the data stack in a way similar to how BIP16 and BIP141 enable\nredeem scripts to be executed from the top of the witness stack. In\nparticular, using MERKLEBRANCHVERIFY[3] in the scriptPubKey or redeem\nscript allows selection of the policy script that contains only the\nnecessary conditions for validation of the spend. This is a form of\ngeneralized MAST[4] where a stage of precomputation splits a syntax\ntree into possible execution pathways, which are then enumerated and\nhashed into a Merkle tree of policy scripts. At spend time membership in\nthis tree of the provided policy script is proven before execution\nrecurses into the policy script.")]),e._v(" "),i("h2",{attrs:{id:"rationale"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),i("p",[e._v("This proposal is a soft-fork change to bitcoin's consensus rules\nbecause leaving a script that data-wise evaluates as true from its\nserialized form on the stack as execution terminates would result in the\nscript validation returning true anyway. Giving the subscript a chance\nto terminate execution is only further constraining the validation\nrules. The only scripts which would evaluate as false are the empty\nscript, or a script that does nothing more than push empty/zero values\nto the stack. None of these scripts have any real-world utility, so\nexcluding them to achieve soft-fork compatibility doesn't come with any\ndownsides.")]),e._v(" "),i("p",[e._v("By restricting ourselves to tail-call evaluation instead of a more\ngeneral EVAL opcode we greatly simplify the implementation. Tail-call\nsemantics means that execution never returns to the calling script's\ncontext, and therefore no state needs to be saved or later restored. The\nimplementation is truly as simple as pulling the subscript off the\nstack, resetting a few state variables, and performing a jump back to\nthe beginning of the script interpreter.")]),e._v(" "),i("p",[e._v("The restriction to allow only one layer of tail-call recursion is\nadmittedly limiting, however the technical challenges to supporting\nmulti-layer tail-call recursion are significant. A new metric would have\nto be developed to track script resource usage, for which transaction\ndata witness size are only two factors. This new weight would have to be\nrelayed with transactions, used as the basis for fee calculation,\nvalidated in-line with transaction execution, and policy decided upon\nfor DoS-banning peers that propagate violating transactions.")]),e._v(" "),i("p",[e._v("However should these problems be overcome, dropping the single recursion\nconstraint is itself a soft-fork for the same reason, applied\ninductively. Allowing only one layer of tail-call recursion allows us to\nreceive the primary benefit of multi-policy commitments / generalized\nMAST, while leaving the door open to future generalized tail-call\nrecursion if and when the necessary changes are made to resource\naccounting and p2p transaction distribution.")]),e._v(" "),i("p",[e._v("The global SIGOP limit and per-script opcode limits do not apply to the\npolicy script because dynamic selection of the policy script makes it\nnot possible for static analysis tools to verify these limits in\ngeneral, and because performance improvements to libsecp256k1 and\nBitcoin Core have made these limits no longer necessary as they once\nwere. The validation costs are still limited by the number of signature\noperations it is possible to encode within block size limits, and the\nmaximum script size per input is limited to 10,000 + 17*520 = 18,840\nbytes.")]),e._v(" "),i("p",[e._v("To allow for this drop of global and per-script limits, tail-call\nevaluation cannot be allowed for direct execution of the scriptPubKey,\nas such scripts are fetched from the UTXO and do not count towards block\nsize limits of the block being validated. Likewise tail-call from P2SH\nredeem scripts is not supported due to quadratic blow-up vulnerabilities\nthat are fixed in segwit.")]),e._v(" "),i("h2",{attrs:{id:"generalized-mast-generalized-mast"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#generalized-mast-generalized-mast"}},[e._v("#")]),e._v(" Generalized MAST {#generalized_mast}")]),e._v(" "),i("p",[e._v("When combined with BIP116 (MERKLEBRANCHVERIFY)[3], tail-call semantics\nallows for generalized MAST capabilities[4]. The script author starts\nwith a full description of the entire contract they want to validate at\nthe time of spend. The possible execution pathways through the script\nare then enumerated, with conditional branches replaced by a validation\nof the condition and the branch taken. The list of possible execution\npathways is then put into a Merkle tree, with the flattened policy\nscripts as the leaves of this tree. The final redeem script which funds\nare sent to is as follows:")]),e._v(" "),i("p",[i("code",[e._v("redeemScript: <root> 2 MERKLEBRANCHVERIFY 2DROP DROP")]),i("br"),e._v(" "),i("code",[e._v("witness: <argN> ... <arg1> <policyScript> <proof>")])]),e._v(" "),i("p",[e._v("Where "),i("code",[e._v("policyScript")]),e._v(" is the flattened execution pathway, "),i("code",[e._v("proof")]),e._v(" is the\nserialized Merkle branch and path that proves the policyScript is drawn\nfrom the set used to construct the Merkle tree "),i("code",[e._v("root")]),e._v(", and "),i("code",[e._v("arg1")]),e._v("\nthrough "),i("code",[e._v("argN")]),e._v(" are the arguments required by "),i("code",[e._v("policyScript")]),e._v(". The "),i("code",[e._v("2")]),e._v("\nindicates that a single leaf ("),i("code",[e._v("1 << 1")]),e._v(") follows, and the leaf value is\nnot pre-hashed. The "),i("code",[e._v("2DROP DROP")]),e._v(" is necessary to remove the arguments to\nMERKLEBRANCHVERIFY from the stack.")]),e._v(" "),i("p",[e._v("The above example was designed for clarity, but actually violates the\nCLEANSTACK rule of segwit v0 script execution. Unless the CLEANSTACK\nrule is dropped or modified in a new segwit output version, this would\nscript would have to be modified to use the alt-stack, as follows:")]),e._v(" "),i("p",[i("code",[e._v("redeemScript: [TOALTSTACK]*N <root> 2 MERKLEBRANCHVERIFY 2DROP DROP")]),i("br"),e._v(" "),i("code",[e._v("witness: <policyScript> <proof> <arg1> ... <argN>")])]),e._v(" "),i("p",[e._v("Where "),i("code",[e._v("[TOALTSTACK]*N")]),e._v(" is the TOALTSTACK opcode repeated N times. This\nmoves "),i("code",[e._v("arg1")]),e._v(" through "),i("code",[e._v("argN")]),e._v(" to the alt-stack in reverse order, such that\n"),i("code",[e._v("arg1")]),e._v(" is on the top of the alt-stack when execution of "),i("code",[e._v("policyScript")]),e._v("\nbegins. The "),i("code",[e._v("policyScript")]),e._v(" would also have to be modified to fetch its\narguments from the alt-stack, of course.")]),e._v(" "),i("p",[e._v("If the total set of policy scripts includes scripts that take a varying\nnumber of parameters, that too can be supported, within reasonable\nlimits. The following redeem script allows between 1 and 3 witness\narguments in addition to the policy script and Merkle proof:")]),e._v(" "),i("p",[i("code",[e._v("witness: <policyScript> <proof> <arg1> ... <argN> // N is between 1 and 3")]),i("br"),e._v(" "),i("code",[e._v("redeemScript: DEPTH TOALTSTACK                    // Save number of witness elements to alt-stack")]),i("br"),e._v(" "),i("code",[e._v("TOALTSTACK                          // Save 1st element (required) to alt-stack")]),i("br"),e._v(" "),i("code",[e._v("DEPTH 2 SUB                         // Calculate number of optional elements, ignoring policyScript and proof")]),i("br"),e._v(" "),i("code",[e._v("DUP IF SWAP TOALTSTACK 1SUB ENDIF   // Save 2nd element (optional) to alt-stack, if it is present")]),i("br"),e._v(" "),i("code",[e._v("IF TOALTSTACK ENDIF                 // Save 3rd element (optional) to alt-stack, if it is present; consume counter")]),i("br"),e._v(" "),i("code",[e._v("<root> 2 MERKLEBRANCHVERIFY 2DROP DROP")]),i("br"),e._v(" "),i("code",[e._v("alt-stack: <N+2> <argN> ... <arg1>")])]),e._v(" "),i("p",[e._v("Because the number of witness elements is pushed onto the alt-stack,\nthis enables policy scripts to verify the number of arguments passed,\neven though the size of the alt-stack is not usually accessible to\nscript. The following policy script for use with the above redeem script\nwill only accept 2 witness elements on the alt-stack, preventing witness\nmalleability:")]),e._v(" "),i("p",[i("code",[e._v("policyScript:  <nowiki>")]),e._v(" "),i("code",[e._v("FROMALTSTACK ...check arg1... FROMALTSTACK ...check&consume arg2/arg1&2... FROMALTSTACK 4 EQUAL")])]),e._v(" "),i("p",[e._v("The number 4 is expected as that includes the "),i("code",[e._v("policyScript")]),e._v(" and\n"),i("code",[e._v("proof")]),e._v(".")]),e._v(" "),i("p",[e._v("The verbosity of this example can be prevented by using a uniform number\nof witness elements as parameters for all policy subscripts, eliminating\nthe conditionals and stack size counts. Future script version upgrades\nshould also consider relaxing CLEANSTACK rules to allow direct\npass-through of arguments from the witness/redeem script to the policy\nscript on the main stack.")]),e._v(" "),i("h3",{attrs:{id:"comparison-with-bip114-comparison-with-bip114"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#comparison-with-bip114-comparison-with-bip114"}},[e._v("#")]),e._v(" Comparison with BIP114 {#comparison_with_bip114}")]),e._v(" "),i("p",[e._v("BIP114 (Merkelized Abstract Syntax Tree)[5] specifies an explicit MAST\nscheme activated by BIP141 script versioning[2]. Unlike BIP114, the\nscheme proposed by this BIP in conjunction with BIP116\n(MERKLEBRANCHVERIFY)[3] implicitly enables MAST constructs using\nscript itself to validate membership of the policy script in the MAST.\nThis has the advantage of requiring vastly fewer consensus code changes,\nas well as potentially enabling future script-based innovation without\nrequiring any further consensus code changes at all, as the MAST scheme\nitself is programmable.")]),e._v(" "),i("p",[e._v("Furthermore, by adding MERKLEBRANCHVERIFY and tail-call semantics to all\nscript using the NOP-expansion space, BIP141 style script versioning is\nnot required. This removes a potentially significant hurdle to\ndeployment by making this feature not dependent on resolving outstanding\nissues over address formats, how script version upgrades should be\ndeployed, and consensus over what other features might go into a v1\nupgrade.")]),e._v(" "),i("h2",{attrs:{id:"implementation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),i("p",[e._v("An implementation of this BIP, including both consensus code changes and\ntests are available at the following Github repository:")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/maaku/bitcoin/tree/tail-call-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),i("OutboundLink")],1)]),e._v(" "),i("h2",{attrs:{id:"deployment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),i("p",[e._v('This BIP will be deployed by BIP8 (Version bits with lock-in by\nheight)[9] with the name "tailcall" and using bit 3.')]),e._v(" "),i("p",[e._v("For Bitcoin mainnet, the BIP8 startheight will be at height M to be\ndetermined and BIP8 timeout activation will occur on height M + 50,400\nblocks.")]),e._v(" "),i("p",[e._v("For Bitcoin testnet, the BIP8 startheight will be at height T to be\ndetermined and BIP8 timeout activation will occur on height T + 50,400\nblocks.")]),e._v(" "),i("p",[e._v("We note that CLEANSTACK means that transactions which use this feature\nare already considered non-standard by the rules of the network, making\ndeployment easier than was the case with, for example, with BIP68\n(Relative lock-time using consensus-enforced sequence numbers)[6].")]),e._v(" "),i("h2",{attrs:{id:"compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),i("p",[e._v("The v0 segwit rules prohibit leaving anything on the stack, so for v0\nparameters have to be passed on the alt stack for compatibility reasons.")]),e._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("p",[e._v("[1] "),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP16: Pay to Script\nHash"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("[2] "),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP141: Segregated Witness (Consensus\nLayer)"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("[3] "),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0116.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP116:\nMERKLEBRANCHVERIFY"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v('[4] "'),i("a",{attrs:{href:"https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-September/015028.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("An explanation and justification of the tail-call and MBV\napproach to\nMAST"),i("OutboundLink")],1),e._v('",\nMark Friedenbach, Bitcoin Development Mailing List, 20 September 2017.')]),e._v(" "),i("p",[e._v("[5] "),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0114.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP114: Merkelized Abstract Syntax\nTree"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("[6] "),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP68: Relative lock-time using consensus-enforced sequence\nnumbers"),i("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);