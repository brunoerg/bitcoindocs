(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{453:function(e,t,a){"use strict";a.r(t);var n=a(43),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_300"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_300"}},[e._v("#")]),e._v(" 300")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  BIP: 300\n  Layer: Consensus (soft fork)\n  Title: Hashrate Escrows (Consensus layer)\n  Author: Paul Sztorc <truthcoin@gmail.com>\n          CryptAxe <cryptaxe@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0300\n  Status: Draft\n  Type: Standards Track\n  Created: 2017-08-14\n  License: BSD-2-Clause\n  Post-History: https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-May/014364.html\n")])])]),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v('A "Hashrate Escrow" is a clearer term for the concept of "locked to\nan SPV Proof", which is itself a restatement of the phrase "within a\nsidechain" as described in '),a("a",{attrs:{href:"https://blockstream.com/sidechains.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("the 2014 Blockstream\nwhitepaper"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v('A Hashrate Escrow resembles a 2-of-3 multisig escrow, where the 3rd\nparty (who will arbitrate any disputes) is a decentralized group of\npeople: the dynamic-membership set of Bitcoin Miners. However, the 3rd\nparty does not sign escrow-withdrawal transactions with a private key.\nInstead, these are "signed" by the accumulation of hashpower over\ntime.')]),e._v(" "),a("p",[e._v("This project has "),a("a",{attrs:{href:"http://www.drivechain.info/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a website"),a("OutboundLink")],1),e._v(" which includes\n"),a("a",{attrs:{href:"http://www.drivechain.info/faq/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("an FAQ"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v('In practice these escrows are likely to be "asymmetric sidechains" of\nBitcoin (such as '),a("a",{attrs:{href:"http://www.rsk.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rootstock"),a("OutboundLink")],1),e._v(') or "virtual chains"\nwithin Bitcoin (such as '),a("a",{attrs:{href:"https://github.com/blockstack/virtualchain",target:"_blank",rel:"noopener noreferrer"}},[e._v("proposed by\nBlockstack"),a("OutboundLink")],1),e._v(" in mid-2016).")]),e._v(" "),a("p",[e._v("Sidechains have many potential benefits, including:")]),e._v(" "),a("ol",[a("li",[e._v("Protect Bitcoin from competition from altcoins and spinoffs.")]),e._v(" "),a("li",[e._v("Protect Bitcoin from hard fork campaigns. (Such campaigns represent\nan existential threat to Bitcoin, as well as an avenue for developer\ncorruption.)")]),e._v(" "),a("li",[e._v("Help with review, by making it much easier for reviewers to ignore\nbad ideas.")]),e._v(" "),a("li",[e._v("Provide an avenue for good-but-confusing ideas to prove their value\nsafely.")])]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("h4",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),a("p",[e._v("Hashrate Escrows are built of two types of component: [1] new\ndatabases, and [2] new message-interpretations.")]),e._v(" "),a("h5",{attrs:{id:"_1-new-databases-new-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-new-databases-new-databases"}},[e._v("#")]),e._v(" 1. New Databases {#new_databases}")]),e._v(" "),a("ul",[a("li",[e._v('D1. "Escrow_DB" -- a database of "accounts" and their\nattributes.')]),e._v(" "),a("li",[e._v('D2. "Withdrawal_DB" -- a database of pending withdrawals from\nthese accounts, and their statuses.')])]),e._v(" "),a("p",[e._v("Please note that these structures (D1 and D2) will not literally exist\nanywhere in the blockchain. Instead they are constructed from\nmessages...these messages, in contrast, *will* exist in the\nblockchain (with the exception of M4).")]),e._v(" "),a("h5",{attrs:{id:"_2-new-messages-new-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-new-messages-new-messages"}},[e._v("#")]),e._v(" 2. New Messages {#new_messages}")]),e._v(" "),a("ul",[a("li",[e._v('M1. "Propose New Escrow"')]),e._v(" "),a("li",[e._v('M2. "ACK Escrow Proposal"')]),e._v(" "),a("li",[e._v('M3. "Propose Withdrawal"')]),e._v(" "),a("li",[e._v('M4. (implied) "ACK Withdrawal"')]),e._v(" "),a("li",[e._v('M5. "Execute Deposit" -- a transfer of BTC from-main-to-side')]),e._v(" "),a("li",[e._v('M6. "Execute Withdrawal" -- a transfer of BTC from-side-to-main')])]),e._v(" "),a("h3",{attrs:{id:"adding-sidechains-d1-m1-m2-adding-sidechains-d1-m1-m2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-sidechains-d1-m1-m2-adding-sidechains-d1-m1-m2"}},[e._v("#")]),e._v(" Adding Sidechains (D1, M1, M2) {#adding_sidechains_d1_m1_m2}")]),e._v(" "),a("h4",{attrs:{id:"d1-escrow-db-d1-escrow-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d1-escrow-db-d1-escrow-db"}},[e._v("#")]),e._v(' D1 -- "Escrow_DB" {#d1____escrow_db}')]),e._v(" "),a("p",[e._v("The table below enumerates the new database fields, their size in bytes,\nand their purpose. In general, an escrow designer (for example, a\nsidechain-designer), is free to choose any value for these.")]),e._v(" "),a("p",[e._v("Field No.   Label                           Type      Description / Purpose")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v('1           Escrow Number                   uint8_t   A number assigned to the entire escrow. Used to make it easy to refer to each escrow.\n2           Sidechain Deposit Script Hex    string    The script that will be deposited to, and update the CTIP of the sidechain.\n3           Sidechain Private Key           string    The private key of the sidechain deposit script.\n4           Escrow Name                     string    A human-readable name of the sidechain.\n5           Escrow Description              string    A human-readable name description of the sidechain. More than enough space to hold a 32 byte hash.\n6           Hash ID 1                       uint256   A field of 32 bytes, which could be any bytes such as a sha256 hash.\n7           Hash ID 2                       uint256   A field of 32 bytes, which could be any bytes such as a sha256 hash.\n8           "CTIP" -- Part 1 "TxID"    uint256   The CTIP, or "Critical (TxID, Index) Pair" is a variable for keeping track of where the escrow\'s money is (ie, which member of the UTXO set).\n9           "CTIP" -- Part 2 "Index"   int32_t   Of the CTIP, this is second element of the pair: the Index. See #9 above.')]),e._v(" "),a("p",[e._v("D1 is updated via M1 and M2.")]),e._v(" "),a("p",[e._v("( The following messages were modeled on SegWit -- see\n"),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#commitment-structure",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("\nand\n"),a("a",{attrs:{href:"https://github.com/DriveNetTESTDRIVE/DriveNet/blob/564516653c1d876429382971a011f5f6119f7eb4/src/validation.cpp#L3348-L3375",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".\n)")]),e._v(" "),a("h4",{attrs:{id:"m1-propose-new-sidechain-m1-propose-new-sidechain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m1-propose-new-sidechain-m1-propose-new-sidechain"}},[e._v("#")]),e._v(' M1 -- "Propose New Sidechain" {#m1____propose_new_sidechain}')]),e._v(" "),a("p",[a("code",[e._v("1-byte - OP_RETURN (0x6a)")]),a("br"),e._v(" "),a("code",[e._v("4-byte - Commitment header (0xD5E0C4AF)")]),a("br"),e._v(" "),a("code",[e._v("N-byte - The serialization of the sidechain.")])]),e._v(" "),a("h4",{attrs:{id:"m2-ack-sidechain-proposal-m2-ack-sidechain-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m2-ack-sidechain-proposal-m2-ack-sidechain-proposal"}},[e._v("#")]),e._v(' M2 -- "ACK Sidechain Proposal" {#m2____ack_sidechain_proposal}')]),e._v(" "),a("p",[a("code",[e._v("1-byte - OP_RETURN (0x6a)")]),a("br"),e._v(" "),a("code",[e._v("4-byte - Commitment header (0xD6E1C5BF)")]),a("br"),e._v(" "),a("code",[e._v("32-byte - Commitment hash: sha256D hash of sidechain's serialization")])]),e._v(" "),a("h4",{attrs:{id:"new-block-validation-rules-new-block-validation-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-block-validation-rules-new-block-validation-rules"}},[e._v("#")]),e._v(" New Block Validation Rules {#new_block_validation_rules}")]),e._v(" "),a("ol",[a("li",[e._v('Escrows are added in a procedure that resembles BIP 9 soft fork\nactivation: the network must see a properly-formatted M1, followed\nby "acknowledgment" of the sidechain in 95% of the following 2016\nblocks.')]),e._v(" "),a("li",[e._v('It is possible to "overwrite" an escrow. This requires 6 months\n(26298 blocks) of M2s, instead of 2 weeks (XXXX). This possibility\ndoes not change the security assumptions (because we already assume\nthat users perform extra-protocolic validation at a rate of 1 bit\nper 26298 blocks).')])]),e._v(" "),a("h3",{attrs:{id:"withdrawing-from-escrows-d2-m3-m4-withdrawing-from-escrows-d2-m3-m4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withdrawing-from-escrows-d2-m3-m4-withdrawing-from-escrows-d2-m3-m4"}},[e._v("#")]),e._v(" Withdrawing from Escrows (D2, M3, M4) {#withdrawing_from_escrows_d2_m3_m4}")]),e._v(" "),a("h4",{attrs:{id:"d2-withdrawal-db-d2-withdrawal-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d2-withdrawal-db-d2-withdrawal-db"}},[e._v("#")]),e._v(' D2 -- "Withdrawal_DB" {#d2____withdrawal_db}')]),e._v(" "),a("p",[e._v("D2 changes deterministically with respect to M3, M4, M5, and M6.")]),e._v(" "),a("p",[e._v("Field No.   Label                    Type       Description / Purpose")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v('1           Escrow Number            uint8_t    Links the withdrawal-request to a specific escrow.\n2           WT^ Hash                uint256    This is a "blinded transaction id" (ie, the double-Sha256 of a txn that has had two fields zeroed out, see M6) of a withdrawal-attempt.\n3           ACKs (Work Score)        uint16_t   The current total number of ACKs (PoW)\n4           Blocks Remaining (Age)   uint16_t   The number of blocks which this WT^ has remaining to accumulate ACKs')]),e._v(" "),a("h4",{attrs:{id:"new-block-validation-rules-for-d2-new-block-validation-rules-for-d2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-block-validation-rules-for-d2-new-block-validation-rules-for-d2"}},[e._v("#")]),e._v(" New Block Validation Rules for D2 {#new_block_validation_rules_for_d2}")]),e._v(" "),a("ol",[a("li",[e._v("A hash commitment to D2 exists in each block (even if D2 is blank).")]),e._v(" "),a("li",[e._v("Withdrawals in D2 are sorted first by field #1 (Escrow Number) and\nsecond by field #4 (Age). This imposes a unique sort.")]),e._v(" "),a("li",[e._v('From one block to the next, "Age" fields must increase by\nexactly 1.')]),e._v(" "),a("li",[e._v('Withdrawals are stored in D2 until they fail ("Age" = "MaxAge"),\nor they succeed (the blockchain contains a txn whose blinded txID\nmatches "WT^").')])]),e._v(" "),a("p",[e._v('In addition, there are special rules for the "ACKs" field (see M4\nbelow).')]),e._v(" "),a("h4",{attrs:{id:"m3-propose-withdrawal-m3-propose-withdrawal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m3-propose-withdrawal-m3-propose-withdrawal"}},[e._v("#")]),e._v(' M3 -- "Propose Withdrawal" {#m3____propose_withdrawal}')]),e._v(" "),a("p",[a("code",[e._v("1-byte - OP_RETURN (0x6a)")]),a("br"),e._v(" "),a("code",[e._v("1-byte - Push the following 36 bytes (0x24)")]),a("br"),e._v(" "),a("code",[e._v("4-byte - Commitment header (0xD45AA943)")]),a("br"),e._v(" "),a("code",[e._v("32-byte - The WT^ hash to populate a new D2 entry")])]),e._v(" "),a("h4",{attrs:{id:"new-block-validation-rules-for-m3-new-block-validation-rules-for-m3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-block-validation-rules-for-m3-new-block-validation-rules-for-m3"}},[e._v("#")]),e._v(" New Block Validation Rules for M3 {#new_block_validation_rules_for_m3}")]),e._v(" "),a("ol",[a("li",[e._v("If the network detects a properly-formatted M3, it must add an entry\nto D2 in the very next block. The starting values of fields #3 and\n#4 are zero, and #5 is pulled over by extracting the relevant\nvalue from D1.")]),e._v(" "),a("li",[e._v("Each block can only contain one M3 per sidechain.")])]),e._v(" "),a("h4",{attrs:{id:"m4-ack-withdrawal-m4-ack-withdrawal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m4-ack-withdrawal-m4-ack-withdrawal"}},[e._v("#")]),e._v(' M4 -- "ACK Withdrawal" {#m4____ack_withdrawal}')]),e._v(" "),a("p",[e._v('M4 is a way of describing changes to the "ACKs" column of D2.')]),e._v(" "),a("p",[e._v('From one block to the next, "ACKs" can only change as follows:')]),e._v(" "),a("ul",[a("li",[e._v("The ACK-counter of any withdrawal can only change by (-1,0,+1).")]),e._v(" "),a("li",[e._v('Within a sidechain-group, upvoting one withdrawal ("+1") requires\nyou to downvote all other withdrawals in that group. However, the\nminimum ACK-value is zero (and, therefore, downvotes cannot reduce\nit below zero).')]),e._v(" "),a("li",[e._v('While only one withdrawal can be upvoted at once, they can all be\nunchanged at once ("abstain") and they can all be downvoted at\nonce ("alarm").')])]),e._v(" "),a("p",[e._v("One option for explicit transmission of M4 is:")]),e._v(" "),a("p",[a("code",[e._v("4-byte - Message identifier (0x????????)")]),a("br"),e._v(" "),a("code",[e._v("1-byte - Version of this message")]),a("br"),e._v(" "),a("code",[e._v("1-byte - Length (in bytes) of this message; total number of withdrawal attempts; y = ceiling( sum_i(m_i +2)/8 ). Nodes should already know what length to expect, because they know the sequence of M3s and therefore the vector of WT^s.")]),a("br"),e._v(" "),a("code",[e._v("N-byte - stream of bits (not bytes), with a 1 indicating the position of the chosen action [downvote all, abstain, upvote1, upvote2, ...]")])]),e._v(" "),a("p",[e._v("But sometimes M4 does not need to be transmitted at all! If there are n\nEscrows and m Withdrawals-per-escrow, then there are (m+2)^n total\ncandidates for the next D2. So, when m and n are low, all of the\npossible D2s can be trivially computed in advance.")]),e._v(" "),a("p",[e._v('Miners can impose a "soft limit" on m, blocking new\nwithdrawal-attempts until previous ones expire. For a worst-case\nscenario of n=200 and m=1,000, honest nodes can communicate M4 with ~25\nKB per block [4+1+1+(200\\*(1000+1+1)/8)].')]),e._v(" "),a("h3",{attrs:{id:"depositing-and-withdrawing-m5-m6-depositing-and-withdrawing-m5-m6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depositing-and-withdrawing-m5-m6-depositing-and-withdrawing-m5-m6"}},[e._v("#")]),e._v(" Depositing and Withdrawing (M5, M6) {#depositing_and_withdrawing_m5_m6}")]),e._v(" "),a("p",[e._v('Both M5 and M6 are regular Bitcoin txns. They are identified by meeting\nan important criteria: they select a one of the Critical TxID-index\nPairs (a "CTIP") as one of their inputs.')]),e._v(" "),a("p",[e._v("Just as these txns must select a CTIP input, they must create a new CTIP\noutput. D1 is then updated to match only the latest CTIP output. The\npurpose of this is to have all of the escrow's money (ie all of the\nsidechain's money) in one TxID, so that depositors immediately undo any\nUTXO bloat they may cause.")]),e._v(" "),a("p",[e._v('Deposits ("M5") are distinguished from withdrawals ("M6") by simply\nchecking to see if money is "going in", or "out".')]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/DriveNetTESTDRIVE/DriveNet/blob/564516653c1d876429382971a011f5f6119f7eb4/src/validation.cpp#L647-L742",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/DriveNetTESTDRIVE/DriveNet/blob/564516653c1d876429382971a011f5f6119f7eb4/src/validation.cpp#L647-L742"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"m5-make-a-deposit-a-transfer-of-btc-from-main-to-side-m5-make-a-deposit-a-transfer-of-btc-from-main-to-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m5-make-a-deposit-a-transfer-of-btc-from-main-to-side-m5-make-a-deposit-a-transfer-of-btc-from-main-to-side"}},[e._v("#")]),e._v(' M5. "Make a Deposit" -- a transfer of BTC from-main-to-side {#m5._make_a_deposit____a_transfer_of_btc_from_main_to_side}')]),e._v(" "),a("p",[e._v("As far as mainchain consensus is concerned, deposits to the escrow are\nalways valid.")]),e._v(" "),a("p",[e._v('However, in practice there will be additional requirements. The escrow\naccount (ie the "sidechain") needs to know how to credit depositors.\nOne well-known method, is for mainchain depositors to append a\nzero-value OP Return to a Deposit txn, so that the sidechain knows how\nto credit funds. Mainchain users must upgrade their wallet software, of\ncourse, (on an individual basis) in order to become aware of and take\nadvantage of new deposit-methods.')]),e._v(" "),a("h4",{attrs:{id:"m6-execute-withdrawal-a-transfer-of-btc-from-side-to-main-m6-execute-withdrawal-a-transfer-of-btc-from-side-to-main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m6-execute-withdrawal-a-transfer-of-btc-from-side-to-main-m6-execute-withdrawal-a-transfer-of-btc-from-side-to-main"}},[e._v("#")]),e._v(' M6. "Execute Withdrawal" -- a transfer of BTC from-side-to-main {#m6._execute_withdrawal____a_transfer_of_btc_from_side_to_main}')]),e._v(" "),a("p",[e._v('We come, finally, to the critical matter: where users can take their\nmoney *out* of the escrow account, and return it to the "regular"\nUTXO set. As previously mentioned, this txn is one which (a) spends from\na CTIP and (b) reduces the quantity of BTC in an account\'s CTIP. Most\nof the work has already been done by D1, M3, M4, and D2. Furthermore,\nexisting Bitcoin tx-rules prevent the sidechain from ever withdrawing\nmore money than has been placed into it.')]),e._v(" "),a("p",[e._v('In each block, a withdrawal in D2 is considered "approved" if its\n"ACKs" value meets the threshold (13,150).')]),e._v(" "),a("p",[e._v('Approved withdrawals give the green light to their respective "WT^".\nA "WT^" is 32-bytes which aspire to represent the withdrawing\ntransaction (the txn that actually withdraws funds from the escrow). The\ntwo cannot match exactly, because "WT^" is defined at onset, and the\nwithdrawing TxID depends on the its CTIP input (which is constantly\nchanging).')]),e._v(" "),a("p",[e._v('To solve this, we define a "blinded TxID" as a way of hashing a txn,\nin which some bytes are first overwritten with zeros. Specifically,\nthese bytes are the first input and the first output.')]),e._v(" "),a("p",[e._v("So, withdrawals must meet the following three criteria:")]),e._v(" "),a("ol",[a("li",[e._v('"Be ACKed" -- The "blinded TxID" of this txn must be member of\nthe "approved candidate" set in the D2 of this block.')]),e._v(" "),a("li",[e._v('"Return Change to Account" -- TxOut0 must pay to the "critical\naccount" (see D1) that corresponds to the CTIP that was selected as\na TxIn.')]),e._v(" "),a("li",[e._v('"Return *all* Change to Account" -- Sum of inputs must equal\nthe sum of outputs. No traditional tx fee is possible.')])]),e._v(" "),a("h2",{attrs:{id:"backward-compatibility-backward-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backward-compatibility-backward-compatibility"}},[e._v("#")]),e._v(" Backward compatibility {#backward_compatibility}")]),e._v(" "),a("p",[e._v("As a soft fork, older software will continue to operate without\nmodification. Non-upgraded nodes will see a number of phenomena that\nthey don't understand -- coinbase txns with non-txn data, value\naccumulating in anyone-can-spend UTXOs for months at a time, and then\nrandom amounts leaving the UTXO in single, infrequent bursts. However,\nthese phenomena don't affect them, or the validity of the money that\nthey receive.")]),e._v(" "),a("p",[e._v("( As a nice bonus, note that the sidechains themselves inherit a\nresistance to hard forks. The only way to guarantee that the WT^s\nreported by different clients will continue to match identically, is to\nupgrade sidechains via soft forks of themselves. )")]),e._v(" "),a("h2",{attrs:{id:"deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),a("p",[e._v('This BIP will be deployed by "version bits" BIP9 with the name\n"hrescrow" and using bit 4.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("// Deployment of Drivechains (BIPX, BIPY)\nconsensus.vDeployments[Consensus::DEPLOYMENT_DRIVECHAINS].bit = 4;\nconsensus.vDeployments[Consensus::DEPLOYMENT_DRIVECHAINS].nStartTime = 1579072881; // January 15th, 2020.\nconsensus.vDeployments[Consensus::DEPLOYMENT_DRIVECHAINS].nTimeout = 1610695281; // January 15th, 2021.\n")])])]),a("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference Implementation {#reference_implementation}")]),e._v(" "),a("p",[e._v("See: "),a("a",{attrs:{href:"https://github.com/DriveNetTESTDRIVE/DriveNet",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/DriveNetTESTDRIVE/DriveNet"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Also, for interest, see an example sidechain here:\n"),a("a",{attrs:{href:"https://github.com/drivechain-project/bitcoin/tree/sidechainBMM",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/drivechain-project/bitcoin/tree/sidechainBMM"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"http://www.drivechain.info/literature/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.drivechain.info/literature/index.html"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"credits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),a("p",[e._v("Thanks to everyone who contributed to the discussion, especially:\nZmnSCPxj, Adam Back, Peter Todd, Dan Anderson, Sergio Demian Lerner,\nChris Stewart, Matt Corallo, Sjors Provoost, Tier Nolan, Erik Aronesty,\nJason Dreyzehner, Joe Miyamoto, Ben Goldhaber.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("This BIP is licensed under the BSD 2-clause license.")])])}),[],!1,null,null,null);t.default=i.exports}}]);