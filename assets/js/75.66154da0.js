(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{449:function(e,t,a){"use strict";a.r(t);var r=a(43),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_197"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_197"}},[e._v("#")]),e._v(" 197")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  BIP: 197\n  Layer: Applications\n  Title: Hashed Time-Locked Collateral Contract\n  Author: Matthew Black <matthew@atomicloans.io>\n          Tony Cai <tony@atomicloans.io>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0197\n  Status: Draft\n  Type: Standards Track\n  Created: 2019-03-19\n  License: BSD-3-Clause\n           CC0-1.0\n")])])]),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This BIP describes a script for generalized debt agreement contract\nbased on Hashed Time-Lock Contract (BIP 199) transactions according to\nthe Atomic Loans specification (https://arxiv.org/pdf/1901.05117.pdf).\nFor more details visit "),a("a",{attrs:{href:"https://atomicloans.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://atomicloans.io"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v('A Hashed Time-Locked Collateral Contract (HTLCC) consists of two scripts\nthat permit a designated party (the "borrower") to lock funds on the\nBitcoin chain for a specified amount of time as collateral in a debt\nagreement where the loan principal is denominated in a currency on\nanother blockchain. We denote the blockchain on which the loan principal\nis issued the principal blockchain.')]),e._v(" "),a("p",[e._v('The purpose of each script is to enable the creation of a debt agreement\nbetween two parties (the "borrower" and the "lender"), where the\ncollateral is locked in a P2SH, and can only be spent once the borrower\nrepays the principal and interest in the debt agreement on the principal\nblockchain. In the case that the borrower does not repay, the borrower\nor lender can opt for liquidation of the collateral, which will involve\nthe atomic swapping of collateral for the loan currency. In the case\nthat at least one of the two parties don\'t opt for liquidation, then\neach party will be entitled to a percentage of the collateral, decided\nwhen the funds are initially locked in the P2SH.')]),e._v(" "),a("p",[e._v("These funds are locked into two scripts. Refundable Collateral and\nSeizable Collateral scripts. The funds sent to these scripts represent\nthe percentage of collateral that each party is entitled to in the case\nthat repayment fails, and the parties don't opt for liquidation.")]),e._v(" "),a("p",[e._v("The Refundable Collateral script takes the following form:")]),e._v(" "),a("p",[a("code",[e._v("OP_IF")]),a("br"),e._v(" "),a("code",[e._v("OP_SIZE  <secret b2 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY [HASHOP]  <secret hash b2>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_DUP OP_HASH160  <borrower pubkey hash>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_CHECKSIG")]),a("br"),e._v(" "),a("code",[e._v("OP_ELSE")]),a("br"),e._v(" "),a("code",[e._v("OP_IF")]),a("br"),e._v(" "),a("code",[e._v("<loan expiration num>")]),e._v(" "),a("code",[e._v("[TIMEOUTOP] OP_DROP OP_SIZE OP_PUSHDATA(1)  <secret a2 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY [HASHOP]  <secret hash a2>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_SIZE  <secret b3 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY [HASHOP]  <secret hash b3>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_2  <borrower pubkey>")]),e._v(" "),a("code",[e._v("<lender pubkey>")]),e._v(" "),a("code",[e._v("OP_2 OP_CHECKMULTISIG")]),a("br"),e._v(" "),a("code",[e._v("OP_ELSE")]),a("br"),e._v(" "),a("code",[e._v("<liquidation expiration num>")]),e._v(" "),a("code",[e._v("[TIMEOUTOP] OP_DROP OP_DUP OP_HASH160  <borrower pubkey hash>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_CHECKSIG")]),a("br"),e._v(" "),a("code",[e._v("OP_ENDIF")]),a("br"),e._v(" "),a("code",[e._v("OP_ENDIF")])]),e._v(" "),a("p",[e._v("The Seizable Collateral script takes the following form:")]),e._v(" "),a("p",[a("code",[e._v("OP_IF")]),a("br"),e._v(" "),a("code",[e._v("OP_SIZE  <secret b2 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY [HASHOP]  <secret hash b2>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_DUP OP_HASH160  <borrower pubkey hash>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_CHECKSIG")]),a("br"),e._v(" "),a("code",[e._v("OP_ELSE")]),a("br"),e._v(" "),a("code",[e._v("OP_IF")]),a("br"),e._v(" "),a("code",[e._v("<loan expiration num>")]),e._v(" "),a("code",[e._v("[TIMEOUTOP] OP_DROP OP_SIZE  <secret a2 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY [HASHOP]  <secret hash a2>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_SIZE  <secret b3 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY [HASHOP]  <secret hash b3>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_2  <borrower pubkey>")]),e._v(" "),a("code",[e._v("<lender pubkey>")]),e._v(" "),a("code",[e._v("OP_2 OP_CHECKMULTISIG")]),a("br"),e._v(" "),a("code",[e._v("OP_ELSE")]),a("br"),e._v(" "),a("code",[e._v("OP_IF")]),a("br"),e._v(" "),a("code",[e._v("<bidding expiration num>")]),e._v(" "),a("code",[e._v("[TIMEOUTOP] OP_DROP OP_SIZE  <secret a1 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY [HASHOP]  <secret hash a1>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_DUP OP_HASH160  <lender pubkey hash>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_CHECKSIG")]),a("br"),e._v(" "),a("code",[e._v("OP_ELSE")]),a("br"),e._v(" "),a("code",[e._v("<seizure expiration num>")]),e._v(" "),a("code",[e._v("[TIMEOUTOP] OP_DROP OP_DUP OP_HASH160  <borrower pubkey hash>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY OP_CHECKSIG")]),a("br"),e._v(" "),a("code",[e._v("OP_ENDIF")]),a("br"),e._v(" "),a("code",[e._v("OP_ENDIF")]),a("br"),e._v(" "),a("code",[e._v("OP_ENDIF")])]),e._v(" "),a("p",[e._v("[HASHOP] is either OP_SHA256 or OP_HASH160.")]),e._v(" "),a("p",[e._v("[TIMEOUTOP] is either OP_CHECKSEQUENCEVERIFY or\nOP_CHECKLOCKTIMEVERIFY.")]),e._v(" "),a("h3",{attrs:{id:"interaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interaction"}},[e._v("#")]),e._v(" Interaction")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('Alice (the "borrower") and Bob (the "lender") exchange public\nkeys as well as two secret hashes A1, A2 created by Alice and three\nhashes B1, B2, B3 created by Bob. They then mutually agree upon a\ntimeout threshold for the Loan Period, Liquidation Period, and\nSeizure Period. Alice constructs the script and P2SH address for the\nRefundable Collateral Contract and Seizable Collateral Contract. Bob\nconstructs the script for the blockchain on which the loan principal\nwill be issued - the principal blockchain.')])]),e._v(" "),a("li",[a("p",[e._v("Bob sends loan principal funds to the loan script on the principal\nblockchain")])]),e._v(" "),a("li",[a("p",[e._v("Alice sends funds to the Refundable Collateral P2SH address and the\nSeizable Collateral P2SH address. The amount of funds she sends to\nthe two addresses will be determined beforehand off-chain between\nAlice and Bob.")])]),e._v(" "),a("li",[a("p",[e._v("Either")]),e._v(" "),a("ul",[a("li",[e._v("Bob accepts locking of collateral by Alice and reveals B1,\nallowing Alice to withdraw the loan amount on the principal\nblockchain.")]),e._v(" "),a("li",[e._v("Bob doesn't accept locking of collateral by Alice, and recovers\nthe funds after the approve expiration while revealing B2, which\nallows Alice to refund the Refundable and Seizable collateral.")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("If Bob accepts the locking of collateral by Alice")])])]),e._v(" "),a("li",[a("ul",[a("li",[e._v("Either\n"),a("ul",[a("li",[e._v("Alice repays the loan by the end of the Loan Period and Bob\nreveals the secret to Alice by revealing it in the loan\nrepayment acceptance transaction; OR")]),e._v(" "),a("li",[e._v("Alice defaults on the loan and Alice and Bob both opt for\ncollateral liquidation, where any third-party is able to bid\non the collateral. The winning bidder, Charlie, will\nsubsequently receive the liquidated collateral by way of an\nAtomic Swap between the collateral funds (ie. BTC locked in\nboth the Refundable Collateral P2SH and the Seizable\nCollateral P2SH) and the bid funds (ie. funds denominated in\nthe loan currency, put forth by Charlie as part of his bid).\nThis is done by both Alice and Bob signing a multisig and\nrevealing A2 and B2; OR")]),e._v(" "),a("li",[e._v("Alice defaults on the loan and at least one of Alice or Bob\nopts out of collateral liquidation, then Alice recovers the\nRefundable Collateral funds and Bob spends the Seizable\nCollateral funds.")]),e._v(" "),a("li",[e._v("Alice defaults on the loan and at least one of Alice or Bob\nopts out of collateral liquidation. But Bob doesn't spend\nthe Seizable Collateral funds, so Alice recovers both the\nRefundable Collateral funds and the Seizable Collateral\nfunds.")])])])])])]),e._v(" "),a("h2",{attrs:{id:"compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),a("p",[e._v("BIP 197 is compatible with [ERC\n1850](https://github.com/ethereum/EIPs/pull/1850) for [atomic\nloans](https://arxiv.org/pdf/1901.05117.pdf) with Ethereum. Can be\nextended in the future to be compatible with other HTLC and smart\ncontract compatible chains.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("In many different protocols, the revealing of secrets is used as a\nsettlement mechanism. HTLCC transactions are a safe way of exchanging\nsecrets to advance the state of a debt agreement, due to the ability to\nrecover a percentage of collateral funds from an uncooperative\ncounterparty, and ensure principal + interest + liquidation fee is paid\nwith a cooperative party.")]),e._v(" "),a("h2",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),a("p",[e._v("borrower: entity that locks collateral on the Bitcoin chain and receives\nloan amount on principal blockchain from lender following the approval\nof the borrower's borrow request")]),e._v(" "),a("p",[e._v("lender: entity that contributes funds to the Hashed Time-Locked\nPrincipal Contract (HTLPC) on the principal blockchain, to be borrowed\nby the borrower upon the locking of collateral on the Bitcoin chain and\nthe lender's approval")]),e._v(" "),a("p",[e._v("repay: when the borrower pays back the principal + interest before\nloanExpiration")]),e._v(" "),a("p",[e._v("default: when the borrower fails to pay back the principal + interest\nbefore the loanExpiration")]),e._v(" "),a("p",[e._v("secret: random number chosen by the borrower or lender, revealed to\nallow the parties to change the state of the debt agreement")]),e._v(" "),a("p",[e._v("secretHash: hash of the secret, used in the construction of HTLCC")]),e._v(" "),a("p",[e._v("SecretA1: secret generated by the borrower, used to prove that the\nborrower has withdrawn the loan")]),e._v(" "),a("p",[e._v("SecretA2: secret generated by the borrower, used to allow the bidder to\nwithdraw the liquidated collateral funds")]),e._v(" "),a("p",[e._v("SecretB1: secret generated by the lender, used to accept the locking of\ncollateral by borrower, enabling borrower to withdraw the loan amount")]),e._v(" "),a("p",[e._v("SecretB2: secret generated by the lender, used to refund themselves in\nthe event they aren't satisfied with borrower'slocking of collateral.\nAlso used to accept borrower's repayment of principal plus interest")]),e._v(" "),a("p",[e._v("SecretB3: secret generated by the lender, used to allow the bidder to\nwithdraw the liquidated collateral funds")]),e._v(" "),a("p",[e._v("SecretC: secret generated by the bidder, used to accept the signatures\nof the borrower and lender for authorizing the liquidation of collateral")]),e._v(" "),a("p",[e._v("loan expiration num: timestamp before which the borrower must repay the\nloan; or otherwise risk the liquidation or seizure of their collateral")]),e._v(" "),a("p",[e._v("bidding expiration num: timestamp that determines the amount of time\nallocated to bidding before seizure period occurs")]),e._v(" "),a("p",[e._v("seizure expiration num: timestamp that determines the amount of time\nduring which the lender can seize funds within the Seizable Collateral\nP2SH, after which the borrower can refund their corresponding amount of\nthe collateral they are entitled to (ie. either just the funds within\nthe Refundable Collateral P2SH, or both the Refundable Collateral and\nSeizable Collateral in the event where the lender failed to seize).")]),e._v(" "),a("h3",{attrs:{id:"approve-period-approve-period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approve-period-approve-period"}},[e._v("#")]),e._v(" Approve Period {#approve_period}")]),e._v(" "),a("p",[e._v("During this time, the lender deploys the HTLPC on the principal\nblockchain. Following this, the borrower locks their collateral on the\nBitcoin blockchain in a HTLCC. The lender then either reveals secretB1\nto signify that they are satisfied with the collateral, and the borrower\ncan withdraw the loan by revealing secretA1. If the lender is not\nsatisfied with the collateral locked by the borrower, the lender can\nrefunds their loan amount by revealing secretB2, which will subsequently\nallow the borrower to refund the collateral amount they deposited.")]),e._v(" "),a("h3",{attrs:{id:"loan-period-loan-period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loan-period-loan-period"}},[e._v("#")]),e._v(" Loan Period {#loan_period}")]),e._v(" "),a("p",[e._v("Once the borrower has withdrawn the loan amount, the Loan Period begins.\nOnce the Loan Period is finished, the borrower is expected to repay the\nloan. If they do, the lender can then accept the repayment by revealing\nsecretB2, enabling the borrower to refund their collateral amount. In\nthe case that the borrower defaults or does not repay the full principal\nplus interest amount, the lender can choose to not accept the loan\nrepayment, and the parties can opt for liquidation of the collateral in\nthe Bidding Period.")]),e._v(" "),a("h3",{attrs:{id:"bidding-period-bidding-period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bidding-period-bidding-period"}},[e._v("#")]),e._v(" Bidding Period {#bidding_period}")]),e._v(" "),a("p",[e._v("In the case of a default or the lender not accepting the borrower\nrepayment, the lender and borrower can opt for liquidation of the\ncollateral through the process of third party bidders bidding on the\ncollateral. The Bidding Period can be initiated by either the lender or\nthe borrower. Once the bidding timeout occurs, the lender and borrower\nmust each provide a signature, followed by secretC revealed by the\nwinning bidder once they have checked that the signature is proper.\nFinally, the lender and borrower must each reveal secretA2 and secretB3\nto allow the collateral to be withdrawn by the winning bidder.")]),e._v(" "),a("h3",{attrs:{id:"seizure-period-seizure-period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seizure-period-seizure-period"}},[e._v("#")]),e._v(" Seizure Period {#seizure_period}")]),e._v(" "),a("p",[e._v("In the case that either the lender or borrower don't accept the bid, the\nlender can seize a percentage of the collateral. The amount is dependent\non the amount of collateral locked in the Seizable Collateral and\nRefundable Collateral script as described in this BIP. During this\nperiod, the borrower can also refund the funds locked in the Refundable\nCollateral script.")]),e._v(" "),a("h3",{attrs:{id:"refund-period-refund-period"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refund-period-refund-period"}},[e._v("#")]),e._v(" Refund Period {#refund_period}")]),e._v(" "),a("p",[e._v("In the case that the lender does not seize the collateral locked in the\nSeizable Collateral script, then the borrower can refund the funds\nlocked in the Seizable Collateral script.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The rational for the following script checking the length of secrets\npushed to the stack that are used with OP_SHA256 in the following script")]),e._v(" "),a("p",[a("code",[e._v("OP_SIZE  <secret b2 length>")]),e._v(" "),a("code",[e._v("OP_EQUALVERIFY")])]),e._v(" "),a("p",[e._v("is to ensure that the secret size is exactly a certain number of bytes\nlong.")]),e._v(" "),a("p",[e._v("This is especially important when this script is used alongside the\nHTLPC on other chains like Ethereum where the sha256 opcode only takes\nup 32 bytes and disregards the rest, there is a need to ensure that the\nlength on the Bitcoin side is 32 bytes.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility-backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility-backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility {#backwards_compatibility}")]),e._v(" "),a("p",[e._v("As this is a new standard for collateralized debt, there is no need for\nbackward compatibility. Once this is accepted as a standard there are\ncertain aspects of the contract that can be modified while still\nretaining backwards compatibility, such as removing the need to verify\nthe size of the hash if being used with two blockchains with the same\nmaximum block size, which would be backward compatible with the current\nscript.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AtomicLoans/chainabstractionlayer/blob/bitcoin-collateral-provider/src/providers/bitcoin/BitcoinCollateralProvider.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/AtomicLoans/chainabstractionlayer/blob/bitcoin-collateral-provider/src/providers/bitcoin/BitcoinCollateralProvider.js"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("This document is dual licensed as BSD 3-clause, and Creative Commons CC0\n1.0 Universal.")])])}),[],!1,null,null,null);t.default=o.exports}}]);