(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{394:function(e,o,i){"use strict";i.r(o);var t=i(43),n=Object(t.a)({},(function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_106"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_106"}},[e._v("#")]),e._v(" 106")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("  BIP: 106\n  Layer: Consensus (hard fork)\n  Title: Dynamically Controlled Bitcoin Block Size Max Cap\n  Author: Upal Chakraborty <bitcoin@upalc.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0106\n  Status: Rejected\n  Type: Standards Track\n  Created: 2015-08-24\n")])])]),i("h2",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),i("p",[e._v("This BIP proposes replacing the fixed one megabyte maximum block size\nwith a dynamically controlled maximum block size that may increase or\ndecrease with difficulty change depending on various network factors. I\nhave two proposals regarding this...")]),e._v(" "),i("p",[e._v("i. Depending only on previous block size calculation.")]),e._v(" "),i("p",[e._v("ii. Depending on previous block size calculation and previous Tx fee\ncollected by miners.")]),e._v(" "),i("h2",{attrs:{id:"motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),i("p",[e._v("With increased adoption, transaction volume on bitcoin network is bound\nto grow. If the one megabyte max cap is not changed to a flexible one\nwhich changes itself with changing network demand, then adoption will\nhamper and bitcoin's growth may choke up. Following graph shows the\nchange in average block size since inception...")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://blockchain.info/charts/avg-block-size?timespan=all&showDataPoints=false&daysAverageString=1&show_header=true&scale=0&address=",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blockchain.info/charts/avg-block-size?timespan=all&showDataPoints=false&daysAverageString=1&show_header=true&scale=0&address="),i("OutboundLink")],1)]),e._v(" "),i("h2",{attrs:{id:"specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),i("h3",{attrs:{id:"proposal-1-depending-only-on-previous-block-size-calculation-proposal-1-depending-only-on-previous-block-size-calculation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proposal-1-depending-only-on-previous-block-size-calculation-proposal-1-depending-only-on-previous-block-size-calculation"}},[e._v("#")]),e._v(" Proposal 1 : Depending only on previous block size calculation {#proposal_1_depending_only_on_previous_block_size_calculation}")]),e._v(" "),i("p",[i("code",[e._v("If more than 50% of block's size, found in the first 2000 of the last difficulty period, is more than 90% MaxBlockSize")]),i("br"),e._v(" "),i("code",[e._v("Double MaxBlockSize")]),i("br"),e._v(" "),i("code",[e._v("Else if more than 90% of block's size, found in the first 2000 of the last difficulty period, is less than 50% MaxBlockSize")]),i("br"),e._v(" "),i("code",[e._v("Half MaxBlockSize")]),i("br"),e._v(" "),i("code",[e._v("Else")]),i("br"),e._v(" "),i("code",[e._v("Keep the same MaxBlockSize")])]),e._v(" "),i("h3",{attrs:{id:"proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners-proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners-proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners"}},[e._v("#")]),e._v(" Proposal 2 : Depending on previous block size calculation and previous Tx fee collected by miners {#proposal_2_depending_on_previous_block_size_calculation_and_previous_tx_fee_collected_by_miners}")]),e._v(" "),i("p",[i("code",[e._v("TotalBlockSizeInLastButOneDifficulty = Sum of all Block size of first 2008 blocks in last 2 difficulty period")]),i("br"),e._v(" "),i("code",[e._v("TotalBlockSizeInLastDifficulty = Sum of all Block size of second 2008 blocks in last 2 difficulty period (This actually includes 8 blocks from last but one difficulty)")]),i("br"),e._v(" "),i("code"),i("br"),e._v(" "),i("code",[e._v("TotalTxFeeInLastButOneDifficulty = Sum of all Tx fees of first 2008 blocks in last 2 difficulty period")]),i("br"),e._v(" "),i("code",[e._v("TotalTxFeeInLastDifficulty = Sum of all Tx fees of second 2008 blocks in last 2 difficulty period (This actually includes 8 blocks from last but one difficulty)")]),i("br"),e._v(" "),i("code"),i("br"),e._v(" "),i("code",[e._v("If ( ( (Sum of first 4016 block size in last 2 difficulty period)/4016 > 50% MaxBlockSize) AND (TotalTxFeeInLastDifficulty > TotalTxFeeInLastButOneDifficulty) AND (TotalBlockSizeInLastDifficulty > TotalBlockSizeInLastButOneDifficulty) )")]),i("br"),e._v(" "),i("code",[e._v("MaxBlockSize = TotalBlockSizeInLastDifficulty * MaxBlockSize / TotalBlockSizeInLastButOneDifficulty")]),i("br"),e._v(" "),i("code",[e._v("Else If ( ( (Sum of first 4016 block size in last 2 difficulty period)/4016 < 50% MaxBlockSize) AND (TotalTxFeeInLastDifficulty < TotalTxFeeInLastButOneDifficulty) AND (TotalBlockSizeInLastDifficulty < TotalBlockSizeInLastButOneDifficulty) )")]),i("br"),e._v(" "),i("code",[e._v("MaxBlockSize = TotalBlockSizeInLastDifficulty * MaxBlockSize / TotalBlockSizeInLastButOneDifficulty")]),i("br"),e._v(" "),i("code",[e._v("Else")]),i("br"),e._v(" "),i("code",[e._v("Keep the same MaxBlockSize")])]),e._v(" "),i("h2",{attrs:{id:"rationale"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),i("p",[e._v("These two proposals have been derived after discussion on\n"),i("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=1154536.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("BitcoinTalk"),i("OutboundLink")],1),e._v(" and\n"),i("a",{attrs:{href:"http://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-August/010285.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin-dev mailing\nlist"),i("OutboundLink")],1),e._v(".\nThe original idea and its evolution in the light of various arguments\ncan be found "),i("a",{attrs:{href:"http://upalc.com/maxblocksize.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"proposal-1-depending-only-on-previous-block-size-calculation-proposal-1-depending-only-on-previous-block-size-calculation-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proposal-1-depending-only-on-previous-block-size-calculation-proposal-1-depending-only-on-previous-block-size-calculation-1"}},[e._v("#")]),e._v(" Proposal 1 : Depending only on previous block size calculation {#proposal_1_depending_only_on_previous_block_size_calculation_1}")]),e._v(" "),i("p",[e._v("This solution is derived directly from the indication of the problem. If\ntransaction volume increases, then we will naturally see bigger blocks.\nOn the contrary, if there are not enough transaction volume, but maximum\nblock size is high, then only few blocks may sweep the mempool. Hence,\nif block size is itself taken into consideration, then maximum block\nsize can most rationally be derived. Moreover, this solution not only\nincreases, but also decreases the maximum block size, just like\ndifficulty.")]),e._v(" "),i("h3",{attrs:{id:"proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners-proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners-proposal-2-depending-on-previous-block-size-calculation-and-previous-tx-fee-collected-by-miners-1"}},[e._v("#")]),e._v(" Proposal 2 : Depending on previous block size calculation and previous Tx fee collected by miners {#proposal_2_depending_on_previous_block_size_calculation_and_previous_tx_fee_collected_by_miners_1}")]),e._v(" "),i("p",[e._v("This solution takes care of stable mining subsidy. It will not increase\nmaximum block size, if Tx fee collection is not increasing and thereby\ncreating a Tx fee pressure on the market. On the other hand, though the\nblock size max cap is dynamically controlled, it is very difficult to\ngame by any party because the increase or decrease of block size max cap\nwill take place in the same ratio of average block size increase or\ndecrease.")]),e._v(" "),i("h2",{attrs:{id:"compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),i("p",[e._v("This is a hard-forking change to the Bitcoin protocol; anybody running\ncode that fully validates blocks must upgrade before the activation time\nor they will risk rejecting a chain containing larger-than-one-megabyte\nblocks.")]),e._v(" "),i("h2",{attrs:{id:"other-solutions-considered-other-solutions-considered"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#other-solutions-considered-other-solutions-considered"}},[e._v("#")]),e._v(" Other solutions considered {#other_solutions_considered}")]),e._v(" "),i("p",[i("a",{attrs:{href:"http://gtf.org/garzik/bitcoin/BIP100-blocksizechangeproposal.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Making Decentralized Economic\nPolicy"),i("OutboundLink")],1)]),e._v(" "),i("ul",[i("li",[e._v("by Jeff Garzik")])]),e._v(" "),i("p",[i("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=1078521.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elastic block cap with rollover\npenalties"),i("OutboundLink")],1),e._v(" - by Meni\nRosenfeld")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Increase maximum block\nsize"),i("OutboundLink")],1),e._v(" -\nby Gavin Andresen")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://gist.github.com/sipa/c65665fc360ca7a176a6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Block size following technological\ngrowth"),i("OutboundLink")],1),e._v(" - by Pieter\nWuille")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://lightning.network/lightning-network-paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Bitcoin Lightning Network: Scalable Off-Chain Instant\nPayments"),i("OutboundLink")],1),e._v(" - by\nJoseph Poon & Thaddeus Dryja")]),e._v(" "),i("h2",{attrs:{id:"deployment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),i("p",[e._v("If consensus is achieved, deployment can be made at a future block\nnumber at which difficulty will change.")])])}),[],!1,null,null,null);o.default=n.exports}}]);