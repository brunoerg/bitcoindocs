(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{413:function(t,e,r){"use strict";r.r(e);var s=r(43),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_124"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_124"}},[t._v("#")]),t._v(" 124")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("  BIP: 124\n  Layer: Applications\n  Title: Hierarchical Deterministic Script Templates\n  Author: Eric Lombrozo <eric@ciphrex.com>\n          William Swanson <swansontec@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0124\n  Status: Rejected\n  Type: Informational\n  Created: 2015-11-20\n  License: PD\n  Post-History: http://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-November/011795.html\n")])])]),r("h2",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),r("p",[t._v("This BIP defines a script template format that can be used by wallets to\ndeterministically generate scripts with specific authorization policies\nusing the key derivation mechanism defined in BIP32.")]),t._v(" "),r("h2",{attrs:{id:"motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),r("p",[t._v("Currently existing wallets typically issue scripts in only a tiny\nhandful of widely used formats. The most popular formats are\npay-to-pubkey-hash and m-of-n pay-to-script-hash (BIP16). However,\ndifferent wallets tend to use mutually incompatible derivation schemes\nto generate signing keys and construct scripts from them. Moreover, with\nthe advent of hashlocked and timelocked contracts (BIP65, BIP112), it is\nnecessary for different wallets to be able to cooperatively generate\neven more sophisticated scripts.")]),t._v(" "),r("p",[t._v("In addition, there's a lot of ongoing work in the development of\nmultilayered protocols that use the blockchain as a settlement layer\n(i.e. the Lightning Network). These efforts require sufficiently\ngeneralized templates to allow for rapidly evolving script designs.")]),t._v(" "),r("p",[t._v("This BIP provides a generalized format for constructing a script\ntemplate that guarantees that different wallets will all produce the\nsame scripts for a given set of derivation paths according to BIP32.")]),t._v(" "),r("h2",{attrs:{id:"specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),r("h3",{attrs:{id:"keys"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[t._v("#")]),t._v(" Keys")]),t._v(" "),r("p",[t._v("An individual key is determined by a BIP32 derivation path and an index.\nFor convenience, we introduce the following notation:")]),t._v(" "),r("p",[r("strong",[t._v("A")]),t._v("~k~ = (derivation path for A)/k")]),t._v(" "),r("h3",{attrs:{id:"key-groups-key-groups"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-groups-key-groups"}},[t._v("#")]),t._v(" Key Groups {#key_groups}")]),t._v(" "),r("p",[t._v("Let "),r("strong",[t._v("m")]),t._v("~i~ denote distinct BIP32 derivation paths. We define a key\ngroup of n keys as a set of key derivation paths with a free index k:")]),t._v(" "),r("p",[t._v("{"),r("strong",[t._v("K")]),t._v("~k~} = { "),r("strong",[t._v("m")]),t._v("~1~/k, "),r("strong",[t._v("m")]),t._v("~2~/k, "),r("strong",[t._v("m")]),t._v("~3~/k, ..., "),r("strong",[t._v("m")]),t._v("~n~/k }")]),t._v(" "),r("p",[t._v("Key groups are useful for constructing scripts that are symmetric in a\nset of keys. Scripts are symmetric in a set of keys if the semantics of\nthe script is unaffected by permutations of the keys. Key groups enforce\na canonical form and can improve privacy.")]),t._v(" "),r("h3",{attrs:{id:"sorting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sorting"}},[t._v("#")]),t._v(" Sorting")]),t._v(" "),r("p",[t._v("We define a lexicographic sorting of the keys. (TODO: specification of\nsorting conventions - compressed pubkeys, encoding, etc...)")]),t._v(" "),r("p",[t._v("Define {"),r("strong",[t._v("K")]),t._v("~k~}~j~ to be the jth element of the sorted keys for\nderivation index k.")]),t._v(" "),r("h3",{attrs:{id:"script-templates-script-templates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#script-templates-script-templates"}},[t._v("#")]),t._v(" Script Templates {#script_templates}")]),t._v(" "),r("p",[t._v("We construct script templates by inserting placeholders for data into a\nscript. To denote a placeholder, we use the following notation:")]),t._v(" "),r("p",[r("em",[t._v("Script")]),t._v("("),r("strong",[t._v("A")]),t._v(") = opcodes ["),r("strong",[t._v("A")]),t._v("] opcodes")]),t._v(" "),r("p",[t._v("We extend this notation to an arbitrary number of placeholders:")]),t._v(" "),r("p",[r("em",[t._v("Script")]),t._v("("),r("strong",[t._v("X1")]),t._v(", "),r("strong",[t._v("X2")]),t._v(", ..., "),r("strong",[t._v("Xn")]),t._v(") = opcodes ["),r("strong",[t._v("X1")]),t._v("] opcodes\n["),r("strong",[t._v("X2")]),t._v("] opcodes ... opcodes ["),r("strong",[t._v("Xn")]),t._v("] opcodes")]),t._v(" "),r("p",[t._v("We introduce the following convenient notation for sorted key groups:")]),t._v(" "),r("p",[t._v("[{"),r("strong",[t._v("K")]),t._v("~k~}] = [{"),r("strong",[t._v("K")]),t._v("~k~}~1~] [{"),r("strong",[t._v("K")]),t._v("~k~}~2~] ...\n[{"),r("strong",[t._v("K")]),t._v("~k~}~n~]")]),t._v(" "),r("h3",{attrs:{id:"operations-on-keys-operations-on-keys"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operations-on-keys-operations-on-keys"}},[t._v("#")]),t._v(" Operations on Keys {#operations_on_keys}")]),t._v(" "),r("p",[t._v("In some applications, we might want to insert the result of some\noperation performed on a key rather than the key itself into the script.\nFor example, we might want to insert a Hash160 of key "),r("strong",[t._v("A")]),t._v("~k~. We can\nuse the following notation:")]),t._v(" "),r("p",[t._v("["),r("em",[t._v("Hash160")]),t._v("("),r("strong",[t._v("A")]),t._v("~k~)]")]),t._v(" "),r("h3",{attrs:{id:"encoding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[t._v("#")]),t._v(" Encoding")]),t._v(" "),r("p",[t._v("TODO")]),t._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),r("h3",{attrs:{id:"_2-of-3-multisig-of-3-multisig"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-of-3-multisig-of-3-multisig"}},[t._v("#")]),t._v(" 2-of-3 Multisig {#of_3_multisig}")]),t._v(" "),r("p",[t._v("The script template is defined by:")]),t._v(" "),r("p",[r("em",[t._v("Script")]),t._v("("),r("strong",[t._v("X")]),t._v(") = 2 ["),r("strong",[t._v("X")]),t._v("] 3 OP_CHECKMULTISIG")]),t._v(" "),r("p",[t._v("Letting "),r("strong",[t._v("K")]),t._v("~k~ = { "),r("strong",[t._v("m")]),t._v("~1~/k, "),r("strong",[t._v("m")]),t._v("~2~/k, "),r("strong",[t._v("m")]),t._v("~3~/k }, the "),r("em",[t._v("k")]),t._v("th\nscript for this key group is denoted by "),r("em",[t._v("Script")]),t._v("({"),r("strong",[t._v("K")]),t._v("~k~}).")]),t._v(" "),r("h3",{attrs:{id:"_1-of-1-or-2-of-3-of-1-or-2-of-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-of-1-or-2-of-3-of-1-or-2-of-3"}},[t._v("#")]),t._v(" 1-of-1 or 2-of-3 {#of_1_or_2_of_3}")]),t._v(" "),r("p",[t._v("The script template is defined by:")]),t._v(" "),r("p",[r("em",[t._v("Script")]),t._v("("),r("strong",[t._v("A")]),t._v(", "),r("strong",[t._v("B")]),t._v(") ="),r("br"),t._v("\n        OP_DUP ["),r("strong",[t._v("A")]),t._v("] OP_CHECKSIG"),r("br"),t._v("\n        OP_NOTIF"),r("br"),t._v("\n                2 ["),r("strong",[t._v("B")]),t._v("] 3 OP_CHECKMULTISIGVERIFY"),r("br"),t._v("\n        OP_NOTIF"),r("br"),t._v("\n        OP_ENDIF"),r("br"),t._v("\n        OP_TRUE"),r("br"),t._v("\nLet "),r("strong",[t._v("M")]),t._v("~k~ = "),r("strong",[t._v("m")]),t._v("/k be a key of a superuser that can authorize all\ntransactions and {"),r("strong",[t._v("K")]),t._v("~k~} be a key group of three users that can only\nauthorize transactions if at least two of them agree.")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("k")]),t._v("th script is given by "),r("em",[t._v("Script")]),t._v("("),r("strong",[t._v("M")]),t._v("~k~, {"),r("strong",[t._v("K")]),t._v("~k~}).")]),t._v(" "),r("h3",{attrs:{id:"timelocked-contract-timelocked-contract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timelocked-contract-timelocked-contract"}},[t._v("#")]),t._v(" Timelocked Contract {#timelocked_contract}")]),t._v(" "),r("p",[t._v("The output is payable to Alice immediately if she knows the private key\nfor "),r("strong",[t._v("A")]),t._v("~k~. Bob must know the private key for "),r("strong",[t._v("B")]),t._v("~k~ and also wait\nfor a timeout "),r("strong",[t._v("t")]),t._v(" before being able to spend the output.")]),t._v(" "),r("p",[t._v("The script template is defined by:")]),t._v(" "),r("p",[r("em",[t._v("Script")]),t._v("("),r("strong",[t._v("A")]),t._v(", "),r("strong",[t._v("B")]),t._v(", "),r("strong",[t._v("T")]),t._v(") ="),r("br"),t._v("\n        OP_IF"),r("br"),t._v("\n                OP_DUP OP_HASH160 ["),r("em",[t._v("Hash160")]),t._v("("),r("strong",[t._v("A")]),t._v(")] OP_EQUALVERIFY\nOP_CHECKSIG"),r("br"),t._v("\n        OP_ELSE"),r("br"),t._v("\n                ["),r("strong",[t._v("T")]),t._v("] OP_CHECKLOCKTIMEVERIFY OP_DROP"),r("br"),t._v("\n                OP_DUP OP_HASH160 ["),r("em",[t._v("Hash160")]),t._v("("),r("strong",[t._v("B")]),t._v(")] OP_EQUALVERIFY\nOP_CHECKSIG"),r("br"),t._v("\n        OP_ENDIF")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("k")]),t._v("th script with timeout "),r("strong",[t._v("t")]),t._v(" is given by "),r("em",[t._v("Script")]),t._v("("),r("strong",[t._v("A")]),t._v("~k~,\n"),r("strong",[t._v("B")]),t._v("~k~, "),r("strong",[t._v("t")]),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"bip-0016.mediawiki",title:"wikilink"}},[t._v("BIP16 - Pay to Script Hash")])]),t._v(" "),r("li",[r("a",{attrs:{href:"bip-0032.mediawiki",title:"wikilink"}},[t._v("BIP32 - Hierarchical Deterministic\nWallets")])]),t._v(" "),r("li",[r("a",{attrs:{href:"bip-0065.mediawiki",title:"wikilink"}},[t._v("BIP65 - OP_CHECKLOCKTIMEVERIFY")])]),t._v(" "),r("li",[r("a",{attrs:{href:"bip-0112.mediawiki",title:"wikilink"}},[t._v("BIP112 - CHECKSEQUENCEVERIFY")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://lightning.network/lightning-network-paper.pdf",title:"wikilink",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lightning Network\nWhitepaper"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"copyright"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),r("p",[t._v("This document is placed in the public domain.")])])}),[],!1,null,null,null);e.default=i.exports}}]);