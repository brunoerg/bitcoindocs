(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{422:function(e,t,s){"use strict";s.r(t);var a=s(43),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_142"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_142"}},[e._v("#")]),e._v(" 142")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  BIP: 142\n  Layer: Applications\n  Title: Address Format for Segregated Witness\n  Author: Johnson Lau <jl2012@xbt.hk>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0142\n  Status: Withdrawn\n  Type: Standards Track\n  Created: 2015-12-24\n  License: PD\n")])])]),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("This BIP describes new types of Bitcoin address to support native\nsegregated witness transactions with 20-byte and 32-byte program.")]),e._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),s("p",[e._v("To define standard payment address for native segregated witness\n(segwit) transactions to promote early adoption of the more efficient\ntransaction method.")]),e._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),s("p",[e._v("The new Bitcoin address format defined is for the\nPay-to-Witness-Public-Key-Hash (P2WPKH) and Pay-to-Witness-Script-Hash\n(P2WSH) transaction described in segregated witness soft fork (BIP141).\nThe scriptPubKey is an OP_0 followed by a push of 20-byte-hash (P2WPKH)\nor 32-byte hash (P2WSH).")]),e._v(" "),s("p",[e._v("The new address is encoded in a way similar to existing address formats:")]),e._v(" "),s("p",[s("code",[e._v("base58-encode:")]),s("br"),e._v(" "),s("code",[e._v("[1-byte address version]")]),s("br"),e._v(" "),s("code",[e._v("[1-byte witness program version]")]),s("br"),e._v(" "),s("code",[e._v("[0x00]")]),s("br"),e._v(" "),s("code",[e._v("[20/32-byte-hash]")]),s("br"),e._v(" "),s("code",[e._v("[4-byte checksum]")]),s("br"),e._v(" "),s("code")]),e._v(" "),s("p",[e._v("For P2WPKH address, the address version is 6 (0x06) for a main-network\naddress or 3 (0x03) for a testnet address.")]),e._v(" "),s("p",[e._v("For P2WSH address, the address version is 10 (0x0A) for a main-network\naddress or 40 (0x28) for a testnet address.")]),e._v(" "),s("p",[e._v("The witness program version is a 1-byte value between 0 (0x00) and 16\n(0x10). Only version 0 is defined in BIP141. Versions 1 to 16 are\nreserved for future extensions.")]),e._v(" "),s("p",[e._v("Following the witness program version is a 0x00 padding to make sure\nthat each witness program version will have a unique prefix.")]),e._v(" "),s("p",[e._v("Following the padding is the program hash, 20 byte for a P2WPKH address\nand 32 byte for a P2WSH address.")]),e._v(" "),s("p",[e._v("The 4-byte checksum is the first four bytes of the double SHA256 hash of\nthe serialization of the previous items.")]),e._v(" "),s("p",[e._v("All addresses generated with this scheme will have a constant length,\nwith 36 digits for 20-byte and 53 digits for 32-byte. Different witness\nprogram versions will have a unique prefix, as shown in the following\ntable:")]),e._v(" "),s("p",[e._v('rowspan=3 style=""|Witness program version   colspan=4 style=""|Hash size')]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v('colspan=2 style=""|20-byte (36 characters)   colspan=2 style=""|32-byte (53 characters)\nMainnet                                         Testnet\n0                                               p2\n1                                               p4\n2                                               p6\n3                                               p7\n4                                               pA\n5                                               pB\n6                                               pD\n7                                               pF\n8                                               pG\n9                                               pJ\n10                                              pL\n11                                              pN\n12                                              pQ\n13                                              pS\n14                                              pT\n15                                              pV\n16                                              pX')]),e._v(" "),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),s("p",[e._v('BIP141 defines 2 ways of encoding a "witness program", a data push of\n2 to 32 bytes:')]),e._v(" "),s("ul",[s("li",[e._v("A native witness program output is a scriptPubKey with a push of\nversion byte followed by a push of witness program, and nothing\nelse;")]),e._v(" "),s("li",[e._v("Segwit-in-P2SH is a BIP16 P2SH redeemScript with a push of version\nbyte followed by a push of witness program, while the scriptPubKey\nlooks like a normal P2SH output.")])]),e._v(" "),s("p",[e._v("Considering the BIP13 P2SH address has been defined in 2012, using\nsegwit-in-P2SH allows most existing wallets to pay a segwit-compatible\nwallet without any upgrade. However, this method requires more block\nspace and is only a short-term solution to make the transition smoother.\nEventually, all users are expected to use the more efficient native\nwitness program as the primary method of payment.")]),e._v(" "),s("p",[e._v("The drawbacks of Bitcoin addresses have been extensively discussed in\nBIP13. Since then, better payment methods have been proposed or\ndeployed, for example:")]),e._v(" "),s("ul",[s("li",[e._v("BIP47 Reusable Payment Codes for Hierarchical Deterministic Wallets")]),e._v(" "),s("li",[e._v("BIP63 Stealth Addresses")]),e._v(" "),s("li",[e._v("BIP70 Payment protocol")])]),e._v(" "),s("p",[e._v("However, none of these are as widely adopted as the suboptimal base-58\nscriptPubKey template addresses, which is still a standard for the whole\neco-system, from wallets, block explorers, merchants, exchanges, to end\nusers. It is believed that the proposed P2WPKH and P2WSH address format\nis the easiest way for wallets and services to adopt native witness\nprogram, which is particularly important in the context of scaling the\ncapacity of the blockchain.")]),e._v(" "),s("p",[e._v("While P2WPKH address is specific for simple payment to a single public\nkey, P2WSH address allows arbitrarily complex segwit transactions,\nsimilar to the BIP13 P2SH address.")]),e._v(" "),s("h2",{attrs:{id:"compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),s("p",[e._v("This proposal is not backward-compatible. However, an older\nimplementation will report the new address type as invalid, and refuse\nto create a transaction.")]),e._v(" "),s("p",[e._v("This proposal is forward-compatible with future versions of witness\nprograms of 20 and 32 bytes.")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("p",[e._v("The following public key,")]),e._v(" "),s("p",[s("code",[e._v("0450863AD64A87AE8A2FE83C1AF1A8403CB53F53E486D8511DAD8A04887E5B23522CD470243453A299FA9E77237716103ABC11A1DF38855ED6F2EE187E9C582BA6")]),e._v("\\")]),e._v(" "),s("p",[e._v("when encoded as a P2PKH template, would become:")]),e._v(" "),s("p",[s("code",[e._v("DUP HASH160 <010966776006953D5567439E5E39F86A0D273BEE> EQUALVERIFY CHECKSIG")])]),e._v(" "),s("p",[e._v("With the corresponding version 1 Bitcoin address being:")]),e._v(" "),s("p",[s("code",[e._v("16UwLL9Risc3QfPqBUvKofHmBQ7wMtjvM")]),e._v("\\")]),e._v(" "),s("p",[e._v("When the same public key is encoded as P2WPKH, the scriptPubKey becomes:")]),e._v(" "),s("p",[s("code",[e._v("OP_0 <010966776006953D5567439E5E39F86A0D273BEE>")])]),e._v(" "),s("p",[e._v("Using 0x06 as address version, followed by 0x00 as witness program\nversion, and a 0x00 padding, the equivalent P2WPKH address is:")]),e._v(" "),s("p",[s("code",[e._v("p2xtZoXeX5X8BP8JfFhQK2nD3emtjch7UeFm")]),e._v("\\")]),e._v(" "),s("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference implementation {#reference_implementation}")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/theuni/bitcoin/commit/ede1b57058ac8efdefe61f67395affb48f2c0d80",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/theuni/bitcoin/commit/ede1b57058ac8efdefe61f67395affb48f2c0d80"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"bip-0013.mediawiki",title:"wikilink"}},[e._v("BIP 13: Address Format for\npay-to-script-hash")])]),e._v(" "),s("li",[s("a",{attrs:{href:"bip-0016.mediawiki",title:"wikilink"}},[e._v("BIP 16: Pay to Script Hash")])]),e._v(" "),s("li",[s("a",{attrs:{href:"bip-0070.mediawiki",title:"wikilink"}},[e._v("BIP 70: Payment Protocol")])]),e._v(" "),s("li",[s("a",{attrs:{href:"bip-0141.mediawiki",title:"wikilink"}},[e._v("BIP 141: Segregated Witness")])])]),e._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),s("p",[e._v("This work is placed in the public domain.")])])}),[],!1,null,null,null);t.default=i.exports}}]);