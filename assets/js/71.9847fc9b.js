(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{445:function(t,e,i){"use strict";i.r(e);var a=i(43),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"_176"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_176"}},[t._v("#")]),t._v(" 176")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("  BIP: 176\n  Title: Bits Denomination\n  Author: Jimmy Song <jaejoon@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0176\n  Status: Draft\n  Type: Informational\n  Created: 2017-12-12\n  License: BSD-2-Clause\n")])])]),i("h2",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),i("p",[t._v("Bits is presented here as the standard term for 100 (one hundred)\nsatoshis or 1/1,000,000 (one one-millionth) of a bitcoin.")]),t._v(" "),i("h2",{attrs:{id:"motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),i("p",[t._v('The bitcoin price has grown over the years and once the price is past\n$10,000 USD or so, bitcoin amounts under $10 USD start having enough\ndecimal places that it\'s difficult to tell whether the user is off by a\nfactor of 10 or not. Switching the denomination to "bits" makes\ncomprehension easier. For example, when BTC is $15,000 USD, $10.05 is\na somewhat confusing 0.00067 BTC, versus 670 bits, which is a lot\nclearer.')]),t._v(" "),i("p",[t._v("Additonally, reverse comparisons are easier as 59 bits being $1 is\neasier to comprehend for most people than 0.000059 BTC being $1.\nSimilar comparisons can be made to other currencies: 1 yen being 0.8\nbits, 1 won being 0.07 bits and so on.")]),t._v(" "),i("p",[t._v('Potential benefits of utilizing "bits" include:')]),t._v(" "),i("ol",[i("li",[t._v("Reduce user error on small bitcoin amounts.")]),t._v(" "),i("li",[t._v('Reduce unit bias for users that want a "whole" bitcoin.')]),t._v(" "),i("li",[t._v("Allow easier comparisons of prices for most users.")]),t._v(" "),i("li",[t._v("Allow easier bi-directional comparisons to fiat currencies.")]),t._v(" "),i("li",[t._v("Allows all UTXO amounts to need at most 2 decimal places, which can\nbe easier to handle.")])]),t._v(" "),i("h2",{attrs:{id:"specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),i("p",[t._v('Definition: 1 bit = 100 satoshis. Plural of "bit" is "bits". The\nterms "bit" and "bits" are not proper nouns and thus should not be\ncapitalized unless used at the start of a sentence, etc.')]),t._v(" "),i("p",[t._v("All bitcoin-denominated items are encouraged to also show the\ndenomination in bits, either as the default or as an option.")]),t._v(" "),i("h2",{attrs:{id:"rationale"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),i("p",[t._v('As bitcoin grows in price versus fiat currencies, it\'s important to\ngive users the ability to quickly and accurately calculate prices for\ntransactions, savings and other economic activities. "Bits" have been\nused as a denomination within the Bitcoin ecosystem for some time. The\nidea of this BIP is to formalize this name. Additionally, "bits" is\nlikely the only other denomination that will be needed for Bitcoin as\n0.01 bit = 1 satoshi, meaning that two decimal places will be sufficient\nto describe any current utxo.')]),t._v(" "),i("p",[t._v("Existing terms used in bitcoin such as satoshi, milli-bitcoin (mBTC) and\nbitcoin (BTC) do not conflict as they operate at different orders of\nmagnitude.")]),t._v(" "),i("p",[t._v('The term micro-bitcoin (µBTC) can continue to exist in tandem with the\nterm "bits".')]),t._v(" "),i("h2",{attrs:{id:"backwards-compatibility-backwards-compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility-backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility {#backwards_compatibility}")]),t._v(" "),i("p",[t._v('Software such as the Bitcoin Core GUI currently use the µBTC\ndenomination and can continue to do so. There is no obligation to switch\nto "bits".')]),t._v(" "),i("p",[t._v('The term "bit" has many different definitions, but the ones of\nparticular note are these:')]),t._v(" "),i("ul",[i("li",[t._v("1 bit = 1/8 dollar (e.g. That candy cost me 2 bits)")]),t._v(" "),i("li",[t._v("bit meaning some amount of data (e.g. The first bit of the version\nfield is 0)")]),t._v(" "),i("li",[t._v("bit meaning strength of a cryptographic algorithm (e.g. 256-bit\nECDSA is used in Bitcoin)")])]),t._v(" "),i("p",[t._v("The first is a bit dated and isn't likely to confuse people dealing\nwith Bitcoin. The second and third are computer science terms and\ncontext should be sufficient to figure out what the user of the word\nmeans.")]),t._v(" "),i("h2",{attrs:{id:"copyright"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),i("p",[t._v("This BIP is licensed under the BSD 2-clause license.")]),t._v(" "),i("h2",{attrs:{id:"credit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#credit"}},[t._v("#")]),t._v(" Credit")]),t._v(" "),i("p",[t._v('It\'s hard to ascertain exactly who invented the term "bits", but the\nterm has been around for a while and the author of this BIP does not\ntake any credit for inventing the term.')])])}),[],!1,null,null,null);e.default=n.exports}}]);