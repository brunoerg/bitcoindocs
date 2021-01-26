(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{404:function(t,e,i){"use strict";i.r(e);var n=i(43),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"_118"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_118"}},[t._v("#")]),t._v(" 118")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("  BIP: 118\n  Layer: Consensus (soft fork)\n  Title: SIGHASH_NOINPUT\n  Author: Christian Decker <decker.christian@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0118\n  Status: Draft\n  Type: Standards Track\n  Created: 2017-02-28\n  License: BSD-3-Clause\n")])])]),i("h2",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),i("p",[t._v("This BIP describes a new signature hash flag ("),i("code",[t._v("sighash")]),t._v("-flag) for segwit\ntransactions. It removes any commitment to the output being spent from\nthe signature verification mechanism. This enables dynamic binding of\ntransactions to outputs, predicated solely on the compatibility of\noutput scripts to input scripts.")]),t._v(" "),i("h2",{attrs:{id:"motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),i("p",[t._v("Off-chain protocols make use of transactions that are not yet broadcast\nto the Bitcoin network in order to renegotiate the final state that\nshould be settled on-chain. In a number of cases it is desirable to\nreact to a given transaction being seen on-chain with a predetermined\nreaction in the form of another transaction. Often the reaction is\nidentical, no matter which transaction is seen on-chain, but the\napplication still needs to create many identical transactions. This is\nbecause signatures in the input of a transaction uniquely commit to the\nhash of the transaction that created the output being spent.")]),t._v(" "),i("p",[t._v("This proposal introduces a new sighash flag that modifies the behavior\nof the transaction digest algorithm used in the signature creation and\nverification, to exclude the previous output commitment. By removing the\ncommitment we enable dynamic rebinding of a signed transaction to\noutputs whose "),i("code",[t._v("witnessProgram")]),t._v(" and value match the ones in the "),i("code",[t._v("witness")]),t._v("\nof the spending transaction.")]),t._v(" "),i("p",[t._v("The dynamic binding is opt-in and can further be restricted by using\nunique "),i("code",[t._v("witnessProgram")]),t._v(" scripts that are specific to the application\ninstance, e.g., using public keys that are specific to the off-chain\nprotocol instance.")]),t._v(" "),i("h2",{attrs:{id:"specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),i("p",[i("code",[t._v("SIGHASH_NOINPUT")]),t._v(" is a flag with value "),i("code",[t._v("0x40")]),t._v(" appended to a signature so\nthat the signature does not commit to any of the inputs, and therefore\nto the outputs being spent. The flag applies solely to the verification\nof that single signature.")]),t._v(" "),i("p",[t._v("The "),i("code",[t._v("SIGHASH_NOINPUT")]),t._v(" flag is only active for segwit scripts with\nversion 1 or higher. Should the flag be used in a non-segwit script or a\nsegwit script of version 0, the current behavior is maintained and the\nscript execution MUST abort with a failure.")]),t._v(" "),i("p",[t._v("The transaction digest algorithm from BIP 143 is used when verifying a\n"),i("code",[t._v("SIGHASH_NOINPUT")]),t._v(" signature, with the following modifications:")]),t._v(" "),i("p",[i("code",[t._v("2. hashPrevouts (32-byte hash) is 32 0x00 bytes")]),i("br"),t._v(" "),i("code",[t._v("3. hashSequence (32-byte hash) is 32 0x00 bytes")]),i("br"),t._v(" "),i("code",[t._v("4. outpoint (32-byte hash + 4-byte little endian) is")]),i("br"),t._v(" "),i("code",[t._v("set to 36 0x00 bytes")]),i("br"),t._v(" "),i("code",[t._v("5. scriptCode of the input is set to an empty script")]),i("br"),t._v(" "),i("code",[t._v("0x00")])]),t._v(" "),i("p",[t._v("The "),i("code",[t._v("value")]),t._v(" of the previous output remains part of the transaction\ndigest and is therefore also committed to in the signature.")]),t._v(" "),i("p",[t._v("The "),i("code",[t._v("NOINPUT")]),t._v(" flag MAY be combined with the "),i("code",[t._v("SINGLE")]),t._v(" flag in which case\nthe "),i("code",[t._v("hashOutputs")]),t._v(" is modified as per BIP 143"),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("^1"),i("OutboundLink")],1),t._v(": it only commits to the\noutput with the matching index, if such output exists, and is a\n"),i("code",[t._v("uint256")]),t._v(" "),i("code",[t._v("0x0000......0000")]),t._v(" otherwise.")]),t._v(" "),i("p",[t._v("Being a change in the digest algorithm, the "),i("code",[t._v("NOINPUT")]),t._v(" flag applies to\nall segwit signature verification opcodes, specifically it applies to:")]),t._v(" "),i("ul",[i("li",[i("p",[i("code",[t._v("OP_CHECKSIG")])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("OP_CHECKSIGVERIFY")])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("OP_CHECKMULTISIG")])])]),t._v(" "),i("li",[i("p",[i("code",[t._v("OP_CHECKMULTISIGVERIFY")])])])]),t._v(" "),i("h2",{attrs:{id:"binding-through-scripts-binding-through-scripts"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#binding-through-scripts-binding-through-scripts"}},[t._v("#")]),t._v(" Binding through scripts {#binding_through_scripts}")]),t._v(" "),i("p",[t._v("Using "),i("code",[t._v("NOINPUT")]),t._v(" the input containing the signature no longer references\na specific output. Any participant can take a transaction and rewrite it\nby changing the hash reference to the previous output, without\ninvalidating the signatures. This allows transactions to be bound to any\noutput that matches the value committed to in the "),i("code",[t._v("witness")]),t._v(" and whose\n"),i("code",[t._v("witnessProgram")]),t._v(", combined with the spending transaction's "),i("code",[t._v("witness")]),t._v("\nreturns "),i("code",[t._v("true")]),t._v(".")]),t._v(" "),i("p",[t._v("Previously, all information in the transaction was committed in the\nsignature itself, while now the relationship between the spending\ntransaction and the output being spent is solely based on the\ncompatibility of the "),i("code",[t._v("witnessProgram")]),t._v(" and the "),i("code",[t._v("witness")]),t._v(".")]),t._v(" "),i("p",[t._v("This also means that particular care has to be taken in order to avoid\nunintentionally enabling this rebinding mechanism. "),i("code",[t._v("NOINPUT")]),t._v(" MUST NOT be\nused, unless it is explicitly needed for the application, e.g., it MUST\nNOT be a default signing flag in a wallet implementation. Rebinding is\nonly possible when the outputs the transaction may bind to all use the\nsame public keys. Any public key that is used in a "),i("code",[t._v("NOINPUT")]),t._v(" signature\nMUST only be used for outputs that the input may bind to, and they MUST\nNOT be used for transactions that the input may not bind to. For example\nan application SHOULD generate a new key-pair for the application\ninstance using "),i("code",[t._v("NOINPUT")]),t._v(" signatures and MUST NOT reuse them afterwards.")]),t._v(" "),i("h2",{attrs:{id:"deployment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),i("p",[t._v("The "),i("code",[t._v("NOINPUT")]),t._v(" sighash flag is to be deployed during a regular segwit\nscript update.")]),t._v(" "),i("h2",{attrs:{id:"backward-compatibility-backward-compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#backward-compatibility-backward-compatibility"}},[t._v("#")]),t._v(" Backward compatibility {#backward_compatibility}")]),t._v(" "),i("p",[t._v("As a soft fork, older software will continue to operate without\nmodification. Non-upgraded nodes, however, will not verify the validity\nof the new sighash flag and will consider the transaction valid by\ndefault. Being only applicable to segwit transactions, non-segwit nodes\nwill see an anyone-can-spend script and will consider it valid.")]),t._v(" "),i("h2",{attrs:{id:"acknowledgments"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgments"}},[t._v("#")]),t._v(" Acknowledgments")]),t._v(" "),i("p",[t._v("The "),i("code",[t._v("NOINPUT")]),t._v(" sighash flag was first proposed by Joseph Poon in February\n2016"),i("a",{attrs:{href:"https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2016-February/012460.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("^2"),i("OutboundLink")],1),t._v(", after being mentioned in the original Lightning paper"),i("a",{attrs:{href:"http://lightning.network/lightning-network.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("^3"),i("OutboundLink")],1),t._v(". A\nformal proposal was however deferred until after the activation of\nsegwit. This proposal is a continuation of this discussion and attempts\nto formalize it in such a way that it can be included in the Bitcoin\nprotocol. As such we'd like acknowledge Joseph Poon and Thaddeus Dryja\nas the original inventors of the "),i("code",[t._v("NOINPUT")]),t._v(" sighash flag, and its uses in\noff-chain protocols.")]),t._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("<references/>\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br")])]),i("h2",{attrs:{id:"copyright"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),i("p",[t._v("This document is licensed under the BSD 3 Clause license.")])])}),[],!1,null,null,null);e.default=a.exports}}]);