(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{399:function(e,t,n){"use strict";n.r(t);var i=n(43),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_113"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_113"}},[e._v("#")]),e._v(" 113")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("  BIP: 113\n  Layer: Consensus (soft fork)\n  Title: Median time-past as endpoint for lock-time calculations\n  Author: Thomas Kerin <me@thomaskerin.io>\n          Mark Friedenbach <mark@friedenbach.org>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0113\n  Status: Final\n  Type: Standards Track\n  Created: 2015-08-10\n  License: PD\n")])])]),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v("This BIP is a proposal to redefine the semantics used in determining a\ntime-locked transaction's eligibility for inclusion in a block. The\nmedian of the last 11 blocks is used instead of the block's timestamp,\nensuring that it increases monotonically with each block.")]),e._v(" "),n("h2",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),n("p",[e._v("At present, transactions are excluded from inclusion in a block if the\npresent time or block height is less than or equal to that specified in\nthe locktime. Since the consensus rules do not mandate strict ordering\nof block timestamps, this has the unfortunate outcome of creating a\nperverse incentive for miners to lie about the time of their blocks in\norder to collect more fees by including transactions that by wall clock\ndetermination have not yet matured.")]),e._v(" "),n("p",[e._v("This BIP proposes comparing the locktime against the median of the past\n11 block's timestamps, rather than the timestamp of the block including\nthe transaction. Existing consensus rules guarantee this value to\nmonotonically advance, thereby removing the capability for miners to\nclaim more transaction fees by lying about the timestamps of their\nblock.")]),e._v(" "),n("p",[e._v("This proposal seeks to ensure reliable behaviour in locktime\ncalculations as required by BIP65 (CHECKLOCKTIMEVERIFY) and matching the\nbehavior of BIP68 (sequence numbers) and BIP112 (CHECKSEQUENCEVERIFY).")]),e._v(" "),n("h2",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),n("p",[e._v("The values for transaction locktime remain unchanged. The difference is\nonly in the calculation determining whether a transaction can be\nincluded. Instead of an unreliable timestamp, the following function is\nused to determine the current block time for the purpose of checking\nlock-time constraints:")]),e._v(" "),n("p",[n("code",[e._v("enum { nMedianTimeSpan=11 };")]),n("br"),e._v(" "),n("code"),n("br"),e._v(" "),n("code",[e._v("int64_t GetMedianTimePast(const CBlockIndex* pindex)")]),n("br"),e._v(" "),n("code",[e._v("{")]),n("br"),e._v(" "),n("code",[e._v("int64_t pmedian[nMedianTimeSpan];")]),n("br"),e._v(" "),n("code",[e._v("int64_t* pbegin = &pmedian[nMedianTimeSpan];")]),n("br"),e._v(" "),n("code",[e._v("int64_t* pend = &pmedian[nMedianTimeSpan];")]),n("br"),e._v(" "),n("code",[e._v("for (int i = 0; i < nMedianTimeSpan && pindex; i++, pindex = pindex->pprev)")]),n("br"),e._v(" "),n("code",[e._v("*(--pbegin) = pindex->GetBlockTime();")]),n("br"),e._v(" "),n("code",[e._v("std::sort(pbegin, pend);")]),n("br"),e._v(" "),n("code",[e._v("return pbegin[(pend - pbegin)/2];")]),n("br"),e._v(" "),n("code",[e._v("}")])]),e._v(" "),n("p",[e._v("Lock-time constraints are checked by the consensus method IsFinalTx().\nThis method takes the block time as one parameter. This BIP proposes\nthat after activation calls to IsFinalTx() within consensus code use the\nreturn value of `GetMedianTimePast(pindexPrev)` instead.")]),e._v(" "),n("p",[e._v("The new rule applies to all transactions, including the coinbase\ntransaction.")]),e._v(" "),n("p",[e._v("A reference implementation of this proposal is provided by the following\npull request:")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/pull/6566",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bitcoin/pull/6566"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),n("p",[e._v('This BIP is to be deployed by "versionbits" BIP9 using bit 0.')]),e._v(" "),n("p",[e._v("For Bitcoin "),n("strong",[e._v("mainnet")]),e._v(", the BIP9 "),n("strong",[e._v("starttime")]),e._v(" will be midnight 1st May\n2016 UTC (Epoch timestamp 1462060800) and BIP9 "),n("strong",[e._v("timeout")]),e._v(" will be\nmidnight 1st May 2017 UTC (Epoch timestamp 1493596800).")]),e._v(" "),n("p",[e._v("For Bitcoin "),n("strong",[e._v("testnet")]),e._v(", the BIP9 "),n("strong",[e._v("starttime")]),e._v(" will be midnight 1st\nMarch 2016 UTC (Epoch timestamp 1456790400) and BIP9 "),n("strong",[e._v("timeout")]),e._v(" will be\nmidnight 1st May 2017 UTC (Epoch timestamp 1493596800).")]),e._v(" "),n("p",[e._v("This BIP must be deployed simultaneously with BIP68 and BIP112 using the\nsame deployment mechanism.")]),e._v(" "),n("h2",{attrs:{id:"acknowledgements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),n("p",[e._v("Mark Friedenbach for designing and authoring the reference\nimplementation of this BIP.")]),e._v(" "),n("p",[e._v("Thanks go to Gregory Maxwell who came up with the original idea, in\n#bitcoin-wizards on 2013-07-16.")]),e._v(" "),n("p",[e._v("Thomas Kerin authored this BIP document.")]),e._v(" "),n("h2",{attrs:{id:"compatibility"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),n("p",[e._v("Transactions generated using time-based lock-time will take\napproximately an hour longer to confirm than would be expected under the\nold rules. This is not known to introduce any compatibility concerns\nwith existing protocols.")]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP9:\nVersionbits"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP65:\nOP_CHECKLOCKTIMEVERIFY"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP68: Consensus-enforced transaction replacement signaled via sequence\nnumbers"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP112:\nCHECKSEQUENCEVERIFY"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"http://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-August/010396.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Softfork deployment\nconsiderations"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://gist.github.com/sipa/bf69659f43e763540550",target:"_blank",rel:"noopener noreferrer"}},[e._v("Version bits"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),n("p",[e._v("This document is placed in the public domain.")])])}),[],!1,null,null,null);t.default=a.exports}}]);