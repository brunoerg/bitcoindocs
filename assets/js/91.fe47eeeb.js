(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{465:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_43"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_43"}},[e._v("#")]),e._v(" 43")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  BIP: 43\n  Layer: Applications\n  Title: Purpose Field for Deterministic Wallets\n  Author: Marek Palatinus <slush@satoshilabs.com>\n          Pavol Rusnak <stick@satoshilabs.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0043\n  Status: Final\n  Type: Informational\n  Created: 2014-04-24\n")])])]),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v('This BIP introduces a "Purpose Field" for use in deterministic wallets\nbased on algorithm described in BIP-0032 (BIP32 from now on).')]),e._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),s("p",[e._v('Although Hierarchical Deterministic Wallet structure as described by\nBIP32 is an important step in user experience and security of the\ncryptocoin wallets, the BIP32 specification offers implementors too many\ndegrees of freedom. Multiple implementations may claim they are BIP32\ncompatible, but in fact they can produce wallets with different logical\nstructures making them non-interoperable. This situation unfortunately\nrenders "BIP32 compatible" statement rather useless.')]),e._v(" "),s("h2",{attrs:{id:"purpose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),s("p",[e._v('We propose the first level of BIP32 tree structure to be used as\n"purpose". This purpose determines the further structure beneath this\nnode.')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("m / purpose' / *\n")])])]),s("p",[e._v("Apostrophe indicates that BIP32 hardened derivation is used.")]),e._v(" "),s("p",[e._v("We encourage different schemes to apply for assigning a separate BIP\nnumber and use the same number for purpose field, so addresses won't be\ngenerated from overlapping BIP32 spaces.")]),e._v(" "),s("p",[e._v("Example: Scheme described in BIP44 should use 44' (or 0x8000002C) as\npurpose.")]),e._v(" "),s("p",[e._v("Note that m / 0' / * is already taken by BIP32 (default account),\nwhich preceded this BIP.")]),e._v(" "),s("p",[e._v('Not all wallets may want to support the full range of features and\npossibilities described in these BIPs. Instead of choosing arbitrary\nsubset of defined features and calling themselves BIPxx compatible, we\nsuggest that software which needs only a limited structure should\ndescribe such structure in another BIP and use different "purpose"\nvalue.')]),e._v(" "),s("h2",{attrs:{id:"node-serialization-node-serialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-serialization-node-serialization"}},[e._v("#")]),e._v(" Node serialization {#node_serialization}")]),e._v(" "),s("p",[e._v('Because this scheme can be used to generate nodes for more\ncryptocurrencies at once, or even something totally unrelated to\ncryptocurrencies, there\'s no point in using a special version magic\ndescribed in section "Serialization format" of BIP32. We suggest to\nuse always 0x0488B21E for public and 0x0488ADE4 for private nodes\n(leading to prefixes "xpub" and "xprv" respectively).')]),e._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"bip-0032.mediawiki",title:"wikilink"}},[e._v("BIP32 - Hierarchical Deterministic\nWallets")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);