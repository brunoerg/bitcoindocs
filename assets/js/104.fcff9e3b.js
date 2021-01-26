(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{479:function(e,n,t){"use strict";t.r(n);var i=t(43),s=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_68"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_68"}},[e._v("#")]),e._v(" 68")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  BIP: 68\n  Layer: Consensus (soft fork)\n  Title: Relative lock-time using consensus-enforced sequence numbers\n  Author: Mark Friedenbach <mark@friedenbach.org>\n          BtcDrak <btcdrak@gmail.com>\n          Nicolas Dorier <nicolas.dorier@gmail.com>\n          kinoshitajona <kinoshitajona@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0068\n  Status: Final\n  Type: Standards Track\n  Created: 2015-05-28\n")])])]),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("This BIP introduces relative lock-time (RLT) consensus-enforced\nsemantics of the sequence number field to enable a signed transaction\ninput to remain invalid for a defined period of time after confirmation\nof its corresponding outpoint.")]),e._v(" "),t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),t("p",[e._v("Bitcoin transactions have a sequence number field for each input. The\noriginal idea appears to have been that a transaction in the mempool\nwould be replaced by using the same input with a higher sequence value.\nAlthough this was not properly implemented, it assumes miners would\nprefer higher sequence numbers even if the lower ones were more\nprofitable to mine. However, a miner acting on profit motives alone\nwould break that assumption completely. The change described by this BIP\nrepurposes the sequence number for new use cases without breaking\nexisting functionality. It also leaves room for future expansion and\nother use cases.")]),e._v(" "),t("p",[e._v("The transaction nLockTime is used to prevent the mining of a transaction\nuntil a certain date. nSequence will be repurposed to prevent mining of\na transaction until a certain age of the spent output in blocks or\ntimespan. This, among other uses, allows bi-directional payment channels\nas used in "),t("a",{attrs:{href:"https://github.com/ElementsProject/lightning/raw/master/doc/deployable-lightning.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hashed Timelock Contracts\n(HTLCs)"),t("OutboundLink")],1),e._v("\nand\n"),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki#Bidirectional_Payment_Channels",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP112"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),t("p",[e._v("This specification defines the meaning of sequence numbers for\ntransactions with an nVersion greater than or equal to 2 for which the\nrest of this specification relies on.")]),e._v(" "),t("p",[e._v("All references to median-time-past (MTP) are as defined by BIP113.")]),e._v(" "),t("p",[e._v("If bit (1 << 31) of the sequence number is set, then no consensus\nmeaning is applied to the sequence number and can be included in any\nblock under all currently possible circumstances.")]),e._v(" "),t("p",[e._v("If bit (1 << 31) of the sequence number is not set, then the sequence\nnumber is interpreted as an encoded relative lock-time.")]),e._v(" "),t("p",[e._v("The sequence number encoding is interpreted as follows:")]),e._v(" "),t("p",[e._v("Bit (1 << 22) determines if the relative lock-time is time-based or\nblock based: If the bit is set, the relative lock-time specifies a\ntimespan in units of 512 seconds granularity. The timespan starts from\nthe median-time-past of the output's previous block, and ends at the MTP\nof the previous block. If the bit is not set, the relative lock-time\nspecifies a number of blocks.")]),e._v(" "),t("p",[e._v("The flag (1<<22) is the highest order bit in a 3-byte signed integer\nfor use in bitcoin scripts as a 3-byte PUSHDATA with\nOP_CHECKSEQUENCEVERIFY (BIP 112).")]),e._v(" "),t("p",[e._v("This specification only interprets 16 bits of the sequence number as\nrelative lock-time, so a mask of 0x0000ffff MUST be applied to the\nsequence field to extract the relative lock-time. The 16-bit\nspecification allows for a year of relative lock-time and the remaining\nbits allow for future expansion.")]),e._v(" "),t("p",[t("code",[e._v("<img src=bip-0068/encoding.png>")]),e._v(" "),t("code",[e._v("</img>")])]),e._v(" "),t("p",[e._v("For time based relative lock-time, 512 second granularity was chosen\nbecause bitcoin blocks are generated every 600 seconds. So when using\nblock-based or time-based, the same amount of time can be encoded with\nthe available number of bits. Converting from a sequence number to\nseconds is performed by multiplying by 512 = 2^9, or equivalently\nshifting up by 9 bits.")]),e._v(" "),t("p",[e._v("When the relative lock-time is time-based, it is interpreted as a\nminimum block-time constraint over the input's age. A relative\ntime-based lock-time of zero indicates an input which can be included in\nany block. More generally, a relative time-based lock-time n can be\nincluded into any block produced 512 * n seconds after the mining date\nof the output it is spending, or any block thereafter. The mining date\nof the output is equal to the median-time-past of the previous block\nwhich mined it.")]),e._v(" "),t("p",[e._v("The block produced time is equal to the median-time-past of its previous\nblock.")]),e._v(" "),t("p",[e._v("When the relative lock-time is block-based, it is interpreted as a\nminimum block-height constraint over the input's age. A relative\nblock-based lock-time of zero indicates an input which can be included\nin any block. More generally, a relative block lock-time n can be\nincluded n blocks after the mining date of the output it is spending, or\nany block thereafter.")]),e._v(" "),t("p",[e._v("The new rules are not applied to the nSequence field of the input of the\ncoinbase transaction.")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),t("p",[e._v("A reference implementation is provided by the following pull request")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/pull/7184",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bitcoin/pull/7184"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("enum {\n    /* Interpret sequence numbers as relative lock-time constraints. */\n    LOCKTIME_VERIFY_SEQUENCE = (1 << 0),\n};\n    \n/* Setting nSequence to this value for every input in a transaction\n * disables nLockTime. */\nstatic const uint32_t SEQUENCE_FINAL = 0xffffffff;\n\n/* Below flags apply in the context of BIP 68*/\n/* If this flag set, CTxIn::nSequence is NOT interpreted as a\n * relative lock-time. */\nstatic const uint32_t SEQUENCE_LOCKTIME_DISABLE_FLAG = (1 << 31);\n\n/* If CTxIn::nSequence encodes a relative lock-time and this flag\n * is set, the relative lock-time has units of 512 seconds,\n * otherwise it specifies blocks with a granularity of 1. */\nstatic const uint32_t SEQUENCE_LOCKTIME_TYPE_FLAG = (1 << 22);\n\n/* If CTxIn::nSequence encodes a relative lock-time, this mask is\n * applied to extract that lock-time from the sequence field. */\nstatic const uint32_t SEQUENCE_LOCKTIME_MASK = 0x0000ffff;\n\n/* In order to use the same number of bits to encode roughly the\n * same wall-clock duration, and because blocks are naturally\n * limited to occur every 600s on average, the minimum granularity\n * for time-based relative lock-time is fixed at 512 seconds.\n * Converting from CTxIn::nSequence to seconds is performed by\n * multiplying by 512 = 2^9, or equivalently shifting up by\n * 9 bits. */\nstatic const int SEQUENCE_LOCKTIME_GRANULARITY = 9;\n\n/**\n * Calculates the block height and previous block's median time past at\n * which the transaction will be considered final in the context of BIP 68.\n * Also removes from the vector of input heights any entries which did not\n * correspond to sequence locked inputs as they do not affect the calculation.\n */\nstatic std::pair<int, int64_t> CalculateSequenceLocks(const CTransaction &tx, int flags, std::vector<int>* prevHeights, const CBlockIndex& block)\n{\n    assert(prevHeights->size() == tx.vin.size());\n\n    // Will be set to the equivalent height- and time-based nLockTime\n    // values that would be necessary to satisfy all relative lock-\n    // time constraints given our view of block chain history.\n    // The semantics of nLockTime are the last invalid height/time, so\n    // use -1 to have the effect of any height or time being valid.\n    int nMinHeight = -1;\n    int64_t nMinTime = -1;\n\n    // tx.nVersion is signed integer so requires cast to unsigned otherwise\n    // we would be doing a signed comparison and half the range of nVersion\n    // wouldn't support BIP 68.\n    bool fEnforceBIP68 = static_cast<uint32_t>(tx.nVersion) >= 2\n                      && flags & LOCKTIME_VERIFY_SEQUENCE;\n\n    // Do not enforce sequence numbers as a relative lock time\n    // unless we have been instructed to\n    if (!fEnforceBIP68) {\n        return std::make_pair(nMinHeight, nMinTime);\n    }\n\n    for (size_t txinIndex = 0; txinIndex < tx.vin.size(); txinIndex++) {\n        const CTxIn& txin = tx.vin[txinIndex];\n\n        // Sequence numbers with the most significant bit set are not\n        // treated as relative lock-times, nor are they given any\n        // consensus-enforced meaning at this point.\n        if (txin.nSequence & CTxIn::SEQUENCE_LOCKTIME_DISABLE_FLAG) {\n            // The height of this input is not relevant for sequence locks\n            (*prevHeights)[txinIndex] = 0;\n            continue;\n        }\n\n        int nCoinHeight = (*prevHeights)[txinIndex];\n\n        if (txin.nSequence & CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG) {\n            int64_t nCoinTime = block.GetAncestor(std::max(nCoinHeight-1, 0))->GetMedianTimePast();\n            // NOTE: Subtract 1 to maintain nLockTime semantics\n            // BIP 68 relative lock times have the semantics of calculating\n            // the first block or time at which the transaction would be\n            // valid. When calculating the effective block time or height\n            // for the entire transaction, we switch to using the\n            // semantics of nLockTime which is the last invalid block\n            // time or height.  Thus we subtract 1 from the calculated\n            // time or height.\n\n            // Time-based relative lock-times are measured from the\n            // smallest allowed timestamp of the block containing the\n            // txout being spent, which is the median time past of the\n            // block prior.\n            nMinTime = std::max(nMinTime, nCoinTime + (int64_t)((txin.nSequence & CTxIn::SEQUENCE_LOCKTIME_MASK) << CTxIn::SEQUENCE_LOCKTIME_GRANULARITY) - 1);\n        } else {\n            nMinHeight = std::max(nMinHeight, nCoinHeight + (int)(txin.nSequence & CTxIn::SEQUENCE_LOCKTIME_MASK) - 1);\n        }\n    }\n\n    return std::make_pair(nMinHeight, nMinTime);\n}\n\nstatic bool EvaluateSequenceLocks(const CBlockIndex& block, std::pair<int, int64_t> lockPair)\n{\n    assert(block.pprev);\n    int64_t nBlockTime = block.pprev->GetMedianTimePast();\n    if (lockPair.first >= block.nHeight || lockPair.second >= nBlockTime)\n        return false;\n\n    return true;\n}\n\nbool SequenceLocks(const CTransaction &tx, int flags, std::vector<int>* prevHeights, const CBlockIndex& block)\n{\n    return EvaluateSequenceLocks(block, CalculateSequenceLocks(tx, flags, prevHeights, block));\n}\n\nbool CheckSequenceLocks(const CTransaction &tx, int flags)\n{\n    AssertLockHeld(cs_main);\n    AssertLockHeld(mempool.cs);\n\n    CBlockIndex* tip = chainActive.Tip();\n    CBlockIndex index;\n    index.pprev = tip;\n    // CheckSequenceLocks() uses chainActive.Height()+1 to evaluate\n    // height based locks because when SequenceLocks() is called within\n    // ConnectBlock(), the height of the block *being*\n    // evaluated is what is used.\n    // Thus if we want to know if a transaction can be part of the\n    // *next* block, we need to use one more than chainActive.Height()\n    index.nHeight = tip->nHeight + 1;\n\n    // pcoinsTip contains the UTXO set for chainActive.Tip()\n    CCoinsViewMemPool viewMemPool(pcoinsTip, mempool);\n    std::vector<int> prevheights;\n    prevheights.resize(tx.vin.size());\n    for (size_t txinIndex = 0; txinIndex < tx.vin.size(); txinIndex++) {\n        const CTxIn& txin = tx.vin[txinIndex];\n        CCoins coins;\n        if (!viewMemPool.GetCoins(txin.prevout.hash, coins)) {\n            return error(\"%s: Missing input\", __func__);\n        }\n        if (coins.nHeight == MEMPOOL_HEIGHT) {\n            // Assume all mempool transaction confirm in the next block\n            prevheights[txinIndex] = tip->nHeight + 1;\n        } else {\n            prevheights[txinIndex] = coins.nHeight;\n        }\n    }\n\n    std::pair<int, int64_t> lockPair = CalculateSequenceLocks(tx, flags, &prevheights, index);\n    return EvaluateSequenceLocks(index, lockPair);\n}\n")])])]),t("h2",{attrs:{id:"acknowledgments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgments"}},[e._v("#")]),e._v(" Acknowledgments")]),e._v(" "),t("p",[e._v("Credit goes to Gregory Maxwell for providing a succinct and clear\ndescription of the behavior of this change, which became the basis of\nthis BIP text.")]),e._v(" "),t("p",[e._v("This BIP was edited by BtcDrak, Nicolas Dorier and kinoshitajona.")]),e._v(" "),t("h2",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),t("p",[e._v('This BIP is to be deployed by "versionbits" BIP9 using bit 0.')]),e._v(" "),t("p",[e._v("For Bitcoin "),t("strong",[e._v("mainnet")]),e._v(", the BIP9 "),t("strong",[e._v("starttime")]),e._v(" will be midnight 1st May\n2016 UTC (Epoch timestamp 1462060800) and BIP9 "),t("strong",[e._v("timeout")]),e._v(" will be\nmidnight 1st May 2017 UTC (Epoch timestamp 1493596800).")]),e._v(" "),t("p",[e._v("For Bitcoin "),t("strong",[e._v("testnet")]),e._v(", the BIP9 "),t("strong",[e._v("starttime")]),e._v(" will be midnight 1st\nMarch 2016 UTC (Epoch timestamp 1456790400) and BIP9 "),t("strong",[e._v("timeout")]),e._v(" will be\nmidnight 1st May 2017 UTC (Epoch timestamp 1493596800).")]),e._v(" "),t("p",[e._v("This BIP must be deployed simultaneously with BIP112 and BIP113 using\nthe same deployment mechanism.")]),e._v(" "),t("h2",{attrs:{id:"compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),t("p",[e._v("The only use of sequence numbers by the Bitcoin Core reference client\nsoftware is to disable checking the nLockTime constraints in a\ntransaction. The semantics of that application are preserved by this\nBIP.")]),e._v(" "),t("p",[e._v("As can be seen from the specification section, a number of bits are\nundefined by this BIP to allow for other use cases by setting bit (1\n<< 31) as the remaining 31 bits have no meaning under this BIP.\nAdditionally, bits (1 << 23) through (1 << 30) inclusive have no\nmeaning at all when bit (1 << 31) is unset.")]),e._v(" "),t("p",[e._v("Additionally, this BIP specifies only 16 bits to actually encode\nrelative lock-time meaning a further 6 are unused (1 << 16 through 1\n<< 21 inclusive). This allows the possibility to increase granularity\nby soft-fork, or for increasing the maximum possible relative lock-time\nin the future.")]),e._v(" "),t("p",[e._v("The most efficient way to calculate sequence number from relative\nlock-time is with bit masks and shifts:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("    // 0 <= nHeight < 65,535 blocks (1.25 years)\n    nSequence = nHeight;\n    nHeight = nSequence & 0x0000ffff;\n    \n    // 0 <= nTime < 33,554,431 seconds (1.06 years)\n    nSequence = (1 << 22) | (nTime >> 9);\n    nTime = (nSequence & 0x0000ffff) << 9;\n")])])]),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("p",[e._v("Bitcoin mailing list discussion:\n"),t("a",{attrs:{href:"https://www.mail-archive.com/bitcoin-development@lists.sourceforge.net/msg07864.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.mail-archive.com/bitcoin-development@lists.sourceforge.net/msg07864.html"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("BIP9: "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("BIP112: "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("BIP113: "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Hashed Timelock Contracts (HTLCs):\n"),t("a",{attrs:{href:"https://github.com/ElementsProject/lightning/raw/master/doc/deployable-lightning.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ElementsProject/lightning/raw/master/doc/deployable-lightning.pdf"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);