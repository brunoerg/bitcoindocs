(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{464:function(e,t,i){"use strict";i.r(t);var n=i(43),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_42"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_42"}},[e._v("#")]),e._v(" 42")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("  BIP: 42\n  Layer: Consensus (soft fork)\n  Title: A finite monetary supply for Bitcoin\n  Author: Pieter Wuille <pieter.wuille@gmail.com>\n  Comments-Summary: Unanimously Recommended for implementation\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0042\n  Status: Final\n  Type: Standards Track\n  Created: 2014-04-01\n  License: PD\n")])])]),i("h2",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),i("p",[e._v("Although it is widely believed that Satoshi was an inflation-hating\ngoldbug he never said this, and in fact programmed Bitcoin's money\nsupply to grow indefinitely, forever. He modeled the monetary supply as\n4 gold mines being discovered per mibillenium (1024 years), with equal\nintervals between them, each one being depleted over the course of 140\nyears.")]),e._v(" "),i("p",[e._v("This poses obvious problems, however. Prominent among them is the\ndiscussion on what to call 1 billion Bitcoin, which symbol color to use\nfor it, and when wallet clients should switch to it by default.")]),e._v(" "),i("p",[e._v("To combat this, this document proposes a controversial change: making\nBitcoin's monetary supply finite.")]),e._v(" "),i("h2",{attrs:{id:"details"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[e._v("#")]),e._v(" Details")]),e._v(" "),i("p",[e._v("As is well known, Satoshi was a master programmer whose knowledge of C++\nwas surpassed only by his knowledge of Japanese culture. The code below:")]),e._v(" "),i("p",[i("code",[e._v("int64_t nSubsidy = 50 * COIN;")]),i("br"),e._v(" "),i("code",[e._v("// Subsidy is cut in half every 210,000 blocks")]),i("br"),e._v(" "),i("code",[e._v("// which will occur approximately every 4 years.")]),i("br"),e._v(" "),i("code",[e._v("nSubsidy >>= (nHeight / 210000);")])]),e._v(" "),i("p",[e._v("is carefully written to rely on undefined behaviour in the C++\nspecification - perhaps so it can be hardware accelerated in future.")]),e._v(" "),i("p",[e._v('The block number is divided by 210000 (the "apparent" subsidy halving\ninterval in blocks), and the result is used as input for a binary shift,\napplied to the original payout (50 BTC), expressed in base units. Thanks\nto the new-goldmine interval being exactly 64 times the halving\ninterval, and 64 being the size in bits of the currency datatype, the\ncycle repeats itself every 64 halvings on all currently supported\nplatforms.')]),e._v(" "),i("p",[e._v("Despite the nice showoff of underhanded programming skills - we want\nBitcoin to be well-specified. Otherwise, we're clearly in for a bumpy\nride:")]),e._v(" "),i("p",[i("img",{attrs:{src:"bip-0042/inflation.png"}})]),e._v(" "),i("p",[e._v("Note that several other programming languages do not exhibit this\nbehaviour, making new implementations likely to be slower and generally\nmore bogus than Bitcoin Core. For example, Python unexpectedly returns 0\nwhen shifting an integer beyond its size.")]),e._v(" "),i("h2",{attrs:{id:"other-solutions-other-solutions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#other-solutions-other-solutions"}},[e._v("#")]),e._v(" Other solutions {#other_solutions}")]),e._v(" "),i("h3",{attrs:{id:"floating-point-approximation-floating-point-approximation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#floating-point-approximation-floating-point-approximation"}},[e._v("#")]),e._v(" Floating-point approximation {#floating_point_approximation}")]),e._v(" "),i("p",[e._v("An obvious solution would be to reimplement the shape of the subsidy\ncurve using floating-point approximations, such as simulated annealing\nor quantitative easing, which have already proven their worth in\nconsensus systems. Unfortunately, since the financial crisis everyone\nconsiders numbers with decimal points in them fishy, and integers are\nnot well supported by Javascript.")]),e._v(" "),i("h3",{attrs:{id:"truncation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#truncation"}},[e._v("#")]),e._v(" Truncation")]),e._v(" "),i("p",[e._v("An alternative solution would be to represent the total number of\nbitcoins as a string:")]),e._v(" "),i("p",[i("code",[e._v('"21000000000000000000000"')])]),e._v(" "),i("p",[e._v("and then use string manipulation to remove the rightmost zero every 4\nyears, give or take a leap-year:")]),e._v(" "),i("p",[i("code",[e._v("strSubsidy = strSubsidy.substr(0, strSubsidy.size() - 2);")])]),e._v(" "),i("p",[e._v("This style relies less heavily on clever C++ and is more familiar to the\nCore Dev Team who are primarily PHP programmers.")]),e._v(" "),i("h2",{attrs:{id:"proposal"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),i("p",[e._v("Instead, how about we stop thinking about long term issues when we'll\nall be dead (barring near lightspeed travel, cryogenic revival, or other\ntechnology--- like cryptocurrency--- which only exists in science\nfiction).")]),e._v(" "),i("p",[e._v("A softfork (see BIP16, BIP34, BIP62) will take place on april 1st 2214,\npermanently setting the subsidy to zero. The result of this will be that\nthe total currency supply will be limited to 42 halfmillion (including\nthe genesis coinbase output, which is not actually spendable).")]),e._v(" "),i("h2",{attrs:{id:"implementation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),i("p",[e._v("An implementation for the reference client can be found on\n"),i("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/pull/3842",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bitcoin/pull/3842"),i("OutboundLink")],1),e._v(" .")]),e._v(" "),i("h2",{attrs:{id:"compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),i("p",[e._v("Given the moderate time frame over which this change is to be\nimplemented, we expect all miners to choose to screw themselves and\ndeploy this change before 2214.")]),e._v(" "),i("p",[e._v("If they don't, and a minority remains on the old code base, a fork may\noccur. Essentially, they'll be mining fool's gold after that time.")]),e._v(" "),i("h2",{attrs:{id:"acknowledgements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),i("p",[e._v('Thanks to Gregory Maxwell for proposing this solution, and to Mike Hearn\nfor insights into web development. Also thanks to "ditto-b" on github\nto implement a prototype ahead of time.')]),e._v(" "),i("h2",{attrs:{id:"copyright"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),i("p",[e._v("This document is placed in the public domain.")])])}),[],!1,null,null,null);t.default=a.exports}}]);