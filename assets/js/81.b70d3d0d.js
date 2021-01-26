(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{457:function(e,t,n){"use strict";n.r(t);var a=n(43),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_32"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_32"}},[e._v("#")]),e._v(" 32")]),e._v(" "),n("p",[e._v("RECENT CHANGES:")]),e._v(" "),n("ul",[n("li",[e._v("(16 Apr 2013) Added private derivation for i ≥ 0x80000000 (less risk\nof parent private key leakage)")]),e._v(" "),n("li",[e._v("(30 Apr 2013) Switched from multiplication by I~L~ to addition of\nI~L~ (faster, easier implementation)")]),e._v(" "),n("li",[e._v("(25 May 2013) Added test vectors")]),e._v(" "),n("li",[e._v("(15 Jan 2014) Rename keys with index ≥ 0x80000000 to hardened keys,\nand add explicit conversion functions.")]),e._v(" "),n("li",[e._v("(24 Feb 2017) Added test vectors for hardened derivation with\nleading zeros")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("      BIP: 32\n      Layer: Applications\n      Title: Hierarchical Deterministic Wallets\n      Author: Pieter Wuille <pieter.wuille@gmail.com>\n      Comments-Summary: No comments yet.\n      Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0032\n      Status: Final\n      Type: Informational\n      Created: 2012-02-11\n      License: BSD-2-Clause\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v('This document describes hierarchical deterministic wallets (or "HD\nWallets"): wallets which can be shared partially or entirely with\ndifferent systems, each with or without the ability to spend coins.')]),e._v(" "),n("p",[e._v("The specification is intended to set a standard for deterministic\nwallets that can be interchanged between different clients. Although the\nwallets described here have many features, not all are required by\nsupporting clients.")]),e._v(" "),n("p",[e._v("The specification consists of two parts. In a first part, a system for\nderiving a tree of keypairs from a single seed is presented. The second\npart demonstrates how to build a wallet structure on top of such a tree.")]),e._v(" "),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),n("p",[e._v("This BIP is licensed under the 2-clause BSD license.")]),e._v(" "),n("h2",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),n("p",[e._v('The Bitcoin reference client uses randomly generated keys. In order to\navoid the necessity for a backup after every transaction, (by default)\n100 keys are cached in a pool of reserve keys. Still, these wallets are\nnot intended to be shared and used on several systems simultaneously.\nThey support hiding their private keys by using the wallet encrypt\nfeature and not sharing the password, but such "neutered" wallets lose\nthe power to generate public keys as well.')]),e._v(" "),n("p",[e._v("Deterministic wallets do not require such frequent backups, and elliptic\ncurve mathematics permit schemes where one can calculate the public keys\nwithout revealing the private keys. This permits for example a webshop\nbusiness to let its webserver generate fresh addresses (public key\nhashes) for each order or for each customer, without giving the\nwebserver access to the corresponding private keys (which are required\nfor spending the received funds).")]),e._v(" "),n("p",[e._v("However, deterministic wallets typically consist of a single \"chain\"\nof keypairs. The fact that there is only one chain means that sharing a\nwallet happens on an all-or-nothing basis. However, in some cases one\nonly wants some (public) keys to be shared and recoverable. In the\nexample of a webshop, the webserver does not need access to all public\nkeys of the merchant's wallet; only to those addresses which are used\nto receive customer's payments, and not for example the change\naddresses that are generated when the merchant spends money.\nHierarchical deterministic wallets allow such selective sharing by\nsupporting multiple keypair chains, derived from a single root.")]),e._v(" "),n("h2",{attrs:{id:"specification-key-derivation-specification-key-derivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification-key-derivation-specification-key-derivation"}},[e._v("#")]),e._v(" Specification: Key derivation {#specification_key_derivation}")]),e._v(" "),n("h3",{attrs:{id:"conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conventions"}},[e._v("#")]),e._v(" Conventions")]),e._v(" "),n("p",[e._v("In the rest of this text we will assume the public key cryptography used\nin Bitcoin, namely elliptic curve cryptography using the field and curve\nparameters defined by secp256k1 (http://www.secg.org/sec2-v2.pdf).\nVariables below are either:")]),e._v(" "),n("ul",[n("li",[e._v("Integers modulo the order of the curve (referred to as n).")]),e._v(" "),n("li",[e._v("Coordinates of points on the curve.")]),e._v(" "),n("li",[e._v("Byte sequences.")])]),e._v(" "),n("p",[e._v("Addition (+) of two coordinate pair is defined as application of the EC\ngroup operation. Concatenation (||) is the operation of appending one\nbyte sequence onto another.")]),e._v(" "),n("p",[e._v("As standard conversion functions, we assume:")]),e._v(" "),n("ul",[n("li",[e._v("point(p): returns the coordinate pair resulting from EC point\nmultiplication (repeated application of the EC group operation) of\nthe secp256k1 base point with the integer p.")]),e._v(" "),n("li",[e._v("ser~32~(i): serialize a 32-bit unsigned integer i as a 4-byte\nsequence, most significant byte first.")]),e._v(" "),n("li",[e._v("ser~256~(p): serializes the integer p as a 32-byte sequence, most\nsignificant byte first.")]),e._v(" "),n("li",[e._v("ser~P~(P): serializes the coordinate pair P = (x,y) as a byte\nsequence using SEC1's compressed form: (0x02 or 0x03) ||\nser~256~(x), where the header byte depends on the parity of the\nomitted y coordinate.")]),e._v(" "),n("li",[e._v("parse~256~(p): interprets a 32-byte sequence as a 256-bit number,\nmost significant byte first.")])]),e._v(" "),n("h3",{attrs:{id:"extended-keys-extended-keys"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extended-keys-extended-keys"}},[e._v("#")]),e._v(" Extended keys {#extended_keys}")]),e._v(" "),n("p",[e._v("In what follows, we will define a function that derives a number of\nchild keys from a parent key. In order to prevent these from depending\nsolely on the key itself, we extend both private and public keys first\nwith an extra 256 bits of entropy. This extension, called the chain\ncode, is identical for corresponding private and public keys, and\nconsists of 32 bytes.")]),e._v(" "),n("p",[e._v("We represent an extended private key as (k, c), with k the normal\nprivate key, and c the chain code. An extended public key is represented\nas (K, c), with K = point(k) and c the chain code.")]),e._v(" "),n("p",[e._v("Each extended key has 2^31^ normal child keys, and 2^31^ hardened child\nkeys. Each of these child keys has an index. The normal child keys use\nindices 0 through 2^31^-1. The hardened child keys use indices 2^31^\nthrough 2^32^-1. To ease notation for hardened key indices, a number\ni~H~ represents i+2^31^.")]),e._v(" "),n("h3",{attrs:{id:"child-key-derivation-ckd-functions-child-key-derivation-ckd-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#child-key-derivation-ckd-functions-child-key-derivation-ckd-functions"}},[e._v("#")]),e._v(" Child key derivation (CKD) functions {#child_key_derivation_ckd_functions}")]),e._v(" "),n("p",[e._v("Given a parent extended key and an index i, it is possible to compute\nthe corresponding child extended key. The algorithm to do so depends on\nwhether the child is a hardened key or not (or, equivalently, whether i\n≥ 2^31^), and whether we're talking about private or public keys.")]),e._v(" "),n("h4",{attrs:{id:"private-parent-key-→-private-child-key-private-parent-key-private-child-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#private-parent-key-→-private-child-key-private-parent-key-private-child-key"}},[e._v("#")]),e._v(" Private parent key → private child key {#private_parent_key_private_child_key}")]),e._v(" "),n("p",[e._v("The function CKDpriv((k~par~, c~par~), i) → (k~i~, c~i~) computes a\nchild extended private key from the parent extended private key:")]),e._v(" "),n("ul",[n("li",[e._v("Check whether i ≥ 2^31^ (whether the child is a hardened key).\n"),n("ul",[n("li",[e._v("If so (hardened child): let I = HMAC-SHA512(Key = c~par~, Data =\n0x00 || ser~256~(k~par~) || ser~32~(i)). (Note: The 0x00\npads the private key to make it 33 bytes long.)")]),e._v(" "),n("li",[e._v("If not (normal child): let I = HMAC-SHA512(Key = c~par~, Data =\nser~P~(point(k~par~)) || ser~32~(i)).")])])]),e._v(" "),n("li",[e._v("Split I into two 32-byte sequences, I~L~ and I~R~.")]),e._v(" "),n("li",[e._v("The returned child key k~i~ is parse~256~(I~L~) + k~par~ (mod n).")]),e._v(" "),n("li",[e._v("The returned chain code c~i~ is I~R~.")]),e._v(" "),n("li",[e._v("In case parse~256~(I~L~) ≥ n or k~i~ = 0, the resulting key is\ninvalid, and one should proceed with the next value for i. (Note:\nthis has probability lower than 1 in 2^127^.)")])]),e._v(" "),n("p",[e._v("The HMAC-SHA512 function is specified in "),n("a",{attrs:{href:"http://tools.ietf.org/html/rfc4231",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC\n4231"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"public-parent-key-→-public-child-key-public-parent-key-public-child-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#public-parent-key-→-public-child-key-public-parent-key-public-child-key"}},[e._v("#")]),e._v(" Public parent key → public child key {#public_parent_key_public_child_key}")]),e._v(" "),n("p",[e._v("The function CKDpub((K~par~, c~par~), i) → (K~i~, c~i~) computes a child\nextended public key from the parent extended public key. It is only\ndefined for non-hardened child keys.")]),e._v(" "),n("ul",[n("li",[e._v("Check whether i ≥ 2^31^ (whether the child is a hardened key).\n"),n("ul",[n("li",[e._v("If so (hardened child): return failure")]),e._v(" "),n("li",[e._v("If not (normal child): let I = HMAC-SHA512(Key = c~par~, Data =\nser~P~(K~par~) || ser~32~(i)).")])])]),e._v(" "),n("li",[e._v("Split I into two 32-byte sequences, I~L~ and I~R~.")]),e._v(" "),n("li",[e._v("The returned child key K~i~ is point(parse~256~(I~L~)) + K~par~.")]),e._v(" "),n("li",[e._v("The returned chain code c~i~ is I~R~.")]),e._v(" "),n("li",[e._v("In case parse~256~(I~L~) ≥ n or K~i~ is the point at infinity, the\nresulting key is invalid, and one should proceed with the next value\nfor i.")])]),e._v(" "),n("h4",{attrs:{id:"private-parent-key-→-public-child-key-private-parent-key-public-child-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#private-parent-key-→-public-child-key-private-parent-key-public-child-key"}},[e._v("#")]),e._v(" Private parent key → public child key {#private_parent_key_public_child_key}")]),e._v(" "),n("p",[e._v('The function N((k, c)) → (K, c) computes the extended public key\ncorresponding to an extended private key (the "neutered" version, as\nit removes the ability to sign transactions).')]),e._v(" "),n("ul",[n("li",[e._v("The returned key K is point(k).")]),e._v(" "),n("li",[e._v("The returned chain code c is just the passed chain code.")])]),e._v(" "),n("p",[e._v("To compute the public child key of a parent private key:")]),e._v(" "),n("ul",[n("li",[e._v("N(CKDpriv((k~par~, c~par~), i)) (works always).")]),e._v(" "),n("li",[e._v("CKDpub(N(k~par~, c~par~), i) (works only for non-hardened child\nkeys).")])]),e._v(" "),n("p",[e._v("The fact that they are equivalent is what makes non-hardened keys useful\n(one can derive child public keys of a given parent key without knowing\nany private key), and also what distinguishes them from hardened keys.\nThe reason for not always using non-hardened keys (which are more\nuseful) is security; see further for more information.")]),e._v(" "),n("h4",{attrs:{id:"public-parent-key-→-private-child-key-public-parent-key-private-child-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#public-parent-key-→-private-child-key-public-parent-key-private-child-key"}},[e._v("#")]),e._v(" Public parent key → private child key {#public_parent_key_private_child_key}")]),e._v(" "),n("p",[e._v("This is not possible.")]),e._v(" "),n("h3",{attrs:{id:"the-key-tree-the-key-tree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-key-tree-the-key-tree"}},[e._v("#")]),e._v(" The key tree {#the_key_tree}")]),e._v(" "),n("p",[e._v("The next step is cascading several CKD constructions to build a tree. We\nstart with one root, the master extended key m. By evaluating\nCKDpriv(m,i) for several values of i, we get a number of level-1 derived\nnodes. As each of these is again an extended key, CKDpriv can be applied\nto those as well.")]),e._v(" "),n("p",[e._v("To shorten notation, we will write CKDpriv(CKDpriv(CKDpriv(m,3~H~),2),5)\nas m/3~H~/2/5. Equivalently for public keys, we write\nCKDpub(CKDpub(CKDpub(M,3),2),5) as M/3/2/5. This results in the\nfollowing identities:")]),e._v(" "),n("ul",[n("li",[e._v("N(m/a/b/c) = N(m/a/b)/c = N(m/a)/b/c = N(m)/a/b/c = M/a/b/c.")]),e._v(" "),n("li",[e._v("N(m/a~H~/b/c) = N(m/a~H~/b)/c = N(m/a~H~)/b/c.")])]),e._v(" "),n("p",[e._v("However, N(m/a~H~) cannot be rewritten as N(m)/a~H~, as the latter is\nnot possible.")]),e._v(" "),n("p",[e._v("Each leaf node in the tree corresponds to an actual key, while the\ninternal nodes correspond to the collections of keys that descend from\nthem. The chain codes of the leaf nodes are ignored, and only their\nembedded private or public key is relevant. Because of this\nconstruction, knowing an extended private key allows reconstruction of\nall descendant private keys and public keys, and knowing an extended\npublic keys allows reconstruction of all descendant non-hardened public\nkeys.")]),e._v(" "),n("h3",{attrs:{id:"key-identifiers-key-identifiers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key-identifiers-key-identifiers"}},[e._v("#")]),e._v(" Key identifiers {#key_identifiers}")]),e._v(" "),n("p",[e._v("Extended keys can be identified by the Hash160 (RIPEMD160 after SHA256)\nof the serialized ECDSA public key K, ignoring the chain code. This\ncorresponds exactly to the data used in traditional Bitcoin addresses.\nIt is not advised to represent this data in base58 format though, as it\nmay be interpreted as an address that way (and wallet software is not\nrequired to accept payment to the chain key itself).")]),e._v(" "),n("p",[e._v("The first 32 bits of the identifier are called the key fingerprint.")]),e._v(" "),n("h3",{attrs:{id:"serialization-format-serialization-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#serialization-format-serialization-format"}},[e._v("#")]),e._v(" Serialization format {#serialization_format}")]),e._v(" "),n("p",[e._v("Extended public and private keys are serialized as follows:")]),e._v(" "),n("ul",[n("li",[e._v("4 byte: version bytes (mainnet: 0x0488B21E public, 0x0488ADE4\nprivate; testnet: 0x043587CF public, 0x04358394 private)")]),e._v(" "),n("li",[e._v("1 byte: depth: 0x00 for master nodes, 0x01 for level-1 derived keys,\n....")]),e._v(" "),n("li",[e._v("4 bytes: the fingerprint of the parent's key (0x00000000 if master\nkey)")]),e._v(" "),n("li",[e._v("4 bytes: child number. This is ser~32~(i) for i in x~i~ = x~par~/i,\nwith x~i~ the key being serialized. (0x00000000 if master key)")]),e._v(" "),n("li",[e._v("32 bytes: the chain code")]),e._v(" "),n("li",[e._v("33 bytes: the public key or private key data (ser~P~(K) for public\nkeys, 0x00 || ser~256~(k) for private keys)")])]),e._v(" "),n("p",[e._v('This 78 byte structure can be encoded like other Bitcoin data in Base58,\nby first adding 32 checksum bits (derived from the double SHA-256\nchecksum), and then converting to the Base58 representation. This\nresults in a Base58-encoded string of up to 112 characters. Because of\nthe choice of the version bytes, the Base58 representation will start\nwith "xprv" or "xpub" on mainnet, "tprv" or "tpub" on testnet.')]),e._v(" "),n("p",[e._v("Note that the fingerprint of the parent only serves as a fast way to\ndetect parent and child nodes in software, and software must be willing\nto deal with collisions. Internally, the full 160-bit identifier could\nbe used.")]),e._v(" "),n("p",[e._v("When importing a serialized extended public key, implementations must\nverify whether the X coordinate in the public key data corresponds to a\npoint on the curve. If not, the extended public key is invalid.")]),e._v(" "),n("h3",{attrs:{id:"master-key-generation-master-key-generation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#master-key-generation-master-key-generation"}},[e._v("#")]),e._v(" Master key generation {#master_key_generation}")]),e._v(" "),n("p",[e._v("The total number of possible extended keypairs is almost 2^512^, but the\nproduced keys are only 256 bits long, and offer about half of that in\nterms of security. Therefore, master keys are not generated directly,\nbut instead from a potentially short seed value.")]),e._v(" "),n("ul",[n("li",[e._v("Generate a seed byte sequence S of a chosen length (between 128 and\n512 bits; 256 bits is advised) from a (P)RNG.")]),e._v(" "),n("li",[e._v('Calculate I = HMAC-SHA512(Key = "Bitcoin seed", Data = S)')]),e._v(" "),n("li",[e._v("Split I into two 32-byte sequences, I~L~ and I~R~.")]),e._v(" "),n("li",[e._v("Use parse~256~(I~L~) as master secret key, and I~R~ as master chain\ncode.")])]),e._v(" "),n("p",[e._v("In case I~L~ is 0 or ≥n, the master key is invalid.")]),e._v(" "),n("p",[n("img",{attrs:{src:"bip-0032/derivation.png"}})]),e._v(" "),n("h2",{attrs:{id:"specification-wallet-structure-specification-wallet-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification-wallet-structure-specification-wallet-structure"}},[e._v("#")]),e._v(" Specification: Wallet structure {#specification_wallet_structure}")]),e._v(" "),n("p",[e._v("The previous sections specified key trees and their nodes. The next step\nis imposing a wallet structure on this tree. The layout defined in this\nsection is a default only, though clients are encouraged to mimic it for\ncompatibility, even if not all features are supported.")]),e._v(" "),n("h3",{attrs:{id:"the-default-wallet-layout-the-default-wallet-layout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-default-wallet-layout-the-default-wallet-layout"}},[e._v("#")]),e._v(" The default wallet layout {#the_default_wallet_layout}")]),e._v(" "),n("p",[e._v("An HDW is organized as several 'accounts'. Accounts are numbered, the\ndefault account (\"\") being number 0. Clients are not required to\nsupport more than one account - if not, they only use the default\naccount.")]),e._v(" "),n("p",[e._v("Each account is composed of two keypair chains: an internal and an\nexternal one. The external keychain is used to generate new public\naddresses, while the internal keychain is used for all other operations\n(change addresses, generation addresses, ..., anything that doesn't\nneed to be communicated). Clients that do not support separate keychains\nfor these should use the external one for everything.")]),e._v(" "),n("ul",[n("li",[e._v("m/i~H~/0/k corresponds to the k'th keypair of the external chain of\naccount number i of the HDW derived from master m.")]),e._v(" "),n("li",[e._v("m/i~H~/1/k corresponds to the k'th keypair of the internal chain of\naccount number i of the HDW derived from master m.")])]),e._v(" "),n("h3",{attrs:{id:"use-cases-use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases-use-cases"}},[e._v("#")]),e._v(" Use cases {#use_cases}")]),e._v(" "),n("h4",{attrs:{id:"full-wallet-sharing-m-full-wallet-sharing-m"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#full-wallet-sharing-m-full-wallet-sharing-m"}},[e._v("#")]),e._v(" Full wallet sharing: m {#full_wallet_sharing_m}")]),e._v(" "),n("p",[e._v("In cases where two systems need to access a single shared wallet, and\nboth need to be able to perform spendings, one needs to share the master\nprivate extended key. Nodes can keep a pool of N look-ahead keys cached\nfor external chains, to watch for incoming payments. The look-ahead for\ninternal chains can be very small, as no gaps are to be expected here.\nAn extra look-ahead could be active for the first unused account's\nchains - triggering the creation of a new account when used. Note that\nthe name of the account will still need to be entered manually and\ncannot be synchronized via the block chain.")]),e._v(" "),n("h4",{attrs:{id:"audits-n-m-audits-nm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#audits-n-m-audits-nm"}},[e._v("#")]),e._v(" Audits: N(m/*) {#audits_nm}")]),e._v(" "),n("p",[e._v("In case an auditor needs full access to the list of incoming and\noutgoing payments, one can share all account public extended keys. This\nwill allow the auditor to see all transactions from and to the wallet,\nin all accounts, but not a single secret key.")]),e._v(" "),n("h4",{attrs:{id:"per-office-balances-m-i-h-per-office-balances-mih"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#per-office-balances-m-i-h-per-office-balances-mih"}},[e._v("#")]),e._v(" Per-office balances: m/i~H~ {#per_office_balances_mih}")]),e._v(" "),n("p",[e._v("When a business has several independent offices, they can all use\nwallets derived from a single master. This will allow the headquarters\nto maintain a super-wallet that sees all incoming and outgoing\ntransactions of all offices, and even permit moving money between the\noffices.")]),e._v(" "),n("h4",{attrs:{id:"recurrent-business-to-business-transactions-n-m-i-h-0-recurrent-business-to-business-transactions-nmih0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#recurrent-business-to-business-transactions-n-m-i-h-0-recurrent-business-to-business-transactions-nmih0"}},[e._v("#")]),e._v(" Recurrent business-to-business transactions: N(m/i~H~/0) {#recurrent_business_to_business_transactions_nmih0}")]),e._v(" "),n("p",[e._v('In case two business partners often transfer money, one can use the\nextended public key for the external chain of a specific account (M/i\nh/0) as a sort of "super address", allowing frequent transactions that\ncannot (easily) be associated, but without needing to request a new\naddress for each payment. Such a mechanism could also be used by mining\npool operators as variable payout address.')]),e._v(" "),n("h4",{attrs:{id:"unsecure-money-receiver-n-m-i-h-0-unsecure-money-receiver-nmih0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unsecure-money-receiver-n-m-i-h-0-unsecure-money-receiver-nmih0"}},[e._v("#")]),e._v(" Unsecure money receiver: N(m/i~H~/0) {#unsecure_money_receiver_nmih0}")]),e._v(" "),n("p",[e._v("When an unsecure webserver is used to run an e-commerce site, it needs\nto know public addresses that are used to receive payments. The\nwebserver only needs to know the public extended key of the external\nchain of a single account. This means someone illegally obtaining access\nto the webserver can at most see all incoming payments but will not be\nable to steal the money, will not (trivially) be able to distinguish\noutgoing transactions, nor be able to see payments received by other\nwebservers if there are several.")]),e._v(" "),n("h2",{attrs:{id:"compatibility"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),n("p",[e._v("To comply with this standard, a client must at least be able to import\nan extended public or private key, to give access to its direct\ndescendants as wallet keys. The wallet structure\n(master/account/chain/subchain) presented in the second part of the\nspecification is advisory only, but is suggested as a minimal structure\nfor easy compatibility - even when no separate accounts or distinction\nbetween internal and external chains is made. However, implementations\nmay deviate from it for specific needs; more complex applications may\ncall for a more complex tree structure.")]),e._v(" "),n("h2",{attrs:{id:"security"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),n("p",[e._v("In addition to the expectations from the EC public-key cryptography\nitself:")]),e._v(" "),n("ul",[n("li",[e._v("Given a public key K, an attacker cannot find the corresponding\nprivate key more efficiently than by solving the EC discrete\nlogarithm problem (assumed to require 2^128^ group operations).")])]),e._v(" "),n("p",[e._v("the intended security properties of this standard are:")]),e._v(" "),n("ul",[n("li",[e._v("Given a child extended private key (k~i~,c~i~) and the integer i, an\nattacker cannot find the parent private key k~par~ more efficiently\nthan a 2^256^ brute force of HMAC-SHA512.")]),e._v(" "),n("li",[e._v("Given any number (2 ≤ N ≤ 2^32^-1) of (index, extended private key)\ntuples (i~j~,(k~i~j~~,c~i~j~~)), with distinct i~j~'s, determining\nwhether they are derived from a common parent extended private key\n(i.e., whether there exists a (k~par~,c~par~) such that for each j\nin (0..N-1) CKDpriv((k~par~,c~par~),i~j~)=(k~i~j~~,c~i~j~~)), cannot\nbe done more efficiently than a 2^256^ brute force of HMAC-SHA512.")])]),e._v(" "),n("p",[e._v("Note however that the following properties does not exist:")]),e._v(" "),n("ul",[n("li",[e._v("Given a parent extended public key (K~par~,c~par~) and a child\npublic key (K~i~), it is hard to find i.")]),e._v(" "),n("li",[e._v("Given a parent extended public key (K~par~,c~par~) and a\nnon-hardened child private key (k~i~), it is hard to find k~par~.")])]),e._v(" "),n("h3",{attrs:{id:"implications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implications"}},[e._v("#")]),e._v(" Implications")]),e._v(" "),n("p",[e._v("Private and public keys must be kept safe as usual. Leaking a private\nkey means access to coins - leaking a public key can mean loss of\nprivacy.")]),e._v(" "),n("p",[e._v("Somewhat more care must be taken regarding extended keys, as these\ncorrespond to an entire (sub)tree of keys.")]),e._v(" "),n("p",[e._v("One weakness that may not be immediately obvious, is that knowledge of a\nparent extended public key plus any non-hardened private key descending\nfrom it is equivalent to knowing the parent extended private key (and\nthus every private and public key descending from it). This means that\nextended public keys must be treated more carefully than regular public\nkeys. It is also the reason for the existence of hardened keys, and why\nthey are used for the account level in the tree. This way, a leak of\naccount-specific (or below) private key never risks compromising the\nmaster or other accounts.")]),e._v(" "),n("h2",{attrs:{id:"test-vectors-test-vectors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-vectors-test-vectors"}},[e._v("#")]),e._v(" Test Vectors {#test_vectors}")]),e._v(" "),n("h3",{attrs:{id:"test-vector-1-test-vector-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-vector-1-test-vector-1"}},[e._v("#")]),e._v(" Test vector 1 {#test_vector_1}")]),e._v(" "),n("p",[e._v("Seed (hex): 000102030405060708090a0b0c0d0e0f")]),e._v(" "),n("ul",[n("li",[e._v("Chain m\n"),n("ul",[n("li",[e._v("ext pub:\nxpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi")])])]),e._v(" "),n("li",[e._v("Chain m/0~H~\n"),n("ul",[n("li",[e._v("ext pub:\nxpub68Gmy5EdvgibQVfPdqkBBCHxA5htiqg55crXYuXoQRKfDBFA1WEjWgP6LHhwBZeNK1VTsfTFUHCdrfp1bgwQ9xv5ski8PX9rL2dZXvgGDnw")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9uHRZZhk6KAJC1avXpDAp4MDc3sQKNxDiPvvkX8Br5ngLNv1TxvUxt4cV1rGL5hj6KCesnDYUhd7oWgT11eZG7XnxHrnYeSvkzY7d2bhkJ7")])])]),e._v(" "),n("li",[e._v("Chain m/0~H~/1\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6ASuArnXKPbfEwhqN6e3mwBcDTgzisQN1wXN9BJcM47sSikHjJf3UFHKkNAWbWMiGj7Wf5uMash7SyYq527Hqck2AxYysAA7xmALppuCkwQ")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9wTYmMFdV23N2TdNG573QoEsfRrWKQgWeibmLntzniatZvR9BmLnvSxqu53Kw1UmYPxLgboyZQaXwTCg8MSY3H2EU4pWcQDnRnrVA1xe8fs")])])]),e._v(" "),n("li",[e._v("Chain m/0~H~/1/2~H~\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6D4BDPcP2GT577Vvch3R8wDkScZWzQzMMUm3PWbmWvVJrZwQY4VUNgqFJPMM3No2dFDFGTsxxpG5uJh7n7epu4trkrX7x7DogT5Uv6fcLW5")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9z4pot5VBttmtdRTWfWQmoH1taj2axGVzFqSb8C9xaxKymcFzXBDptWmT7FwuEzG3ryjH4ktypQSAewRiNMjANTtpgP4mLTj34bhnZX7UiM")])])]),e._v(" "),n("li",[e._v("Chain m/0~H~/1/2~H~/2\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6FHa3pjLCk84BayeJxFW2SP4XRrFd1JYnxeLeU8EqN3vDfZmbqBqaGJAyiLjTAwm6ZLRQUMv1ZACTj37sR62cfN7fe5JnJ7dh8zL4fiyLHV")]),e._v(" "),n("li",[e._v("ext prv:\nxprvA2JDeKCSNNZky6uBCviVfJSKyQ1mDYahRjijr5idH2WwLsEd4Hsb2Tyh8RfQMuPh7f7RtyzTtdrbdqqsunu5Mm3wDvUAKRHSC34sJ7in334")])])]),e._v(" "),n("li",[e._v("Chain m/0~H~/1/2~H~/2/1000000000\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6H1LXWLaKsWFhvm6RVpEL9P4KfRZSW7abD2ttkWP3SSQvnyA8FSVqNTEcYFgJS2UaFcxupHiYkro49S8yGasTvXEYBVPamhGW6cFJodrTHy")]),e._v(" "),n("li",[e._v("ext prv:\nxprvA41z7zogVVwxVSgdKUHDy1SKmdb533PjDz7J6N6mV6uS3ze1ai8FHa8kmHScGpWmj4WggLyQjgPie1rFSruoUihUZREPSL39UNdE3BBDu76")])])])]),e._v(" "),n("h3",{attrs:{id:"test-vector-2-test-vector-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-vector-2-test-vector-2"}},[e._v("#")]),e._v(" Test vector 2 {#test_vector_2}")]),e._v(" "),n("p",[e._v("Seed (hex):\nfffcf9f6f3f0edeae7e4e1dedbd8d5d2cfccc9c6c3c0bdbab7b4b1aeaba8a5a29f9c999693908d8a8784817e7b7875726f6c696663605d5a5754514e4b484542")]),e._v(" "),n("ul",[n("li",[e._v("Chain m\n"),n("ul",[n("li",[e._v("ext pub:\nxpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7WEGuduB")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9s21ZrQH143K31xYSDQpPDxsXRTUcvj2iNHm5NUtrGiGG5e2DtALGdso3pGz6ssrdK4PFmM8NSpSBHNqPqm55Qn3LqFtT2emdEXVYsCzC2U")])])]),e._v(" "),n("li",[e._v("Chain m/0\n"),n("ul",[n("li",[e._v("ext pub:\nxpub69H7F5d8KSRgmmdJg2KhpAK8SR3DjMwAdkxj3ZuxV27CprR9LgpeyGmXUbC6wb7ERfvrnKZjXoUmmDznezpbZb7ap6r1D3tgFxHmwMkQTPH")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9vHkqa6EV4sPZHYqZznhT2NPtPCjKuDKGY38FBWLvgaDx45zo9WQRUT3dKYnjwih2yJD9mkrocEZXo1ex8G81dwSM1fwqWpWkeS3v86pgKt")])])]),e._v(" "),n("li",[e._v("Chain m/0/2147483647~H~\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6ASAVgeehLbnwdqV6UKMHVzgqAG8Gr6riv3Fxxpj8ksbH9ebxaEyBLZ85ySDhKiLDBrQSARLq1uNRts8RuJiHjaDMBU4Zn9h8LZNnBC5y4a")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9wSp6B7kry3Vj9m1zSnLvN3xH8RdsPP1Mh7fAaR7aRLcQMKTR2vidYEeEg2mUCTAwCd6vnxVrcjfy2kRgVsFawNzmjuHc2YmYRmagcEPdU9")])])]),e._v(" "),n("li",[e._v("Chain m/0/2147483647~H~/1\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6DF8uhdarytz3FWdA8TvFSvvAh8dP3283MY7p2V4SeE2wyWmG5mg5EwVvmdMVCQcoNJxGoWaU9DCWh89LojfZ537wTfunKau47EL2dhHKon")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9zFnWC6h2cLgpmSA46vutJzBcfJ8yaJGg8cX1e5StJh45BBciYTRXSd25UEPVuesF9yog62tGAQtHjXajPPdbRCHuWS6T8XA2ECKADdw4Ef")])])]),e._v(" "),n("li",[e._v("Chain m/0/2147483647~H~/1/2147483646~H~\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6ERApfZwUNrhLCkDtcHTcxd75RbzS1ed54G1LkBUHQVHQKqhMkhgbmJbZRkrgZw4koxb5JaHWkY4ALHY2grBGRjaDMzQLcgJvLJuZZvRcEL")]),e._v(" "),n("li",[e._v("ext prv:\nxprvA1RpRA33e1JQ7ifknakTFpgNXPmW2YvmhqLQYMmrj4xJXXWYpDPS3xz7iAxn8L39njGVyuoseXzU6rcxFLJ8HFsTjSyQbLYnMpCqE2VbFWc")])])]),e._v(" "),n("li",[e._v("Chain m/0/2147483647~H~/1/2147483646~H~/2\n"),n("ul",[n("li",[e._v("ext pub:\nxpub6FnCn6nSzZAw5Tw7cgR9bi15UV96gLZhjDstkXXxvCLsUXBGXPdSnLFbdpq8p9HmGsApME5hQTZ3emM2rnY5agb9rXpVGyy3bdW6EEgAtqt")]),e._v(" "),n("li",[e._v("ext prv:\nxprvA2nrNbFZABcdryreWet9Ea4LvTJcGsqrMzxHx98MMrotbir7yrKCEXw7nadnHM8Dq38EGfSh6dqA9QWTyefMLEcBYJUuekgW4BYPJcr9E7j")])])])]),e._v(" "),n("h3",{attrs:{id:"test-vector-3-test-vector-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-vector-3-test-vector-3"}},[e._v("#")]),e._v(" Test vector 3 {#test_vector_3}")]),e._v(" "),n("p",[e._v("These vectors test for the retention of leading zeros. See\n"),n("a",{attrs:{href:"https://github.com/bitpay/bitcore-lib/issues/47",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitpay/bitcore-lib#47"),n("OutboundLink")],1),e._v("\nand\n"),n("a",{attrs:{href:"https://github.com/iancoleman/bip39/issues/58",target:"_blank",rel:"noopener noreferrer"}},[e._v("iancoleman/bip39#58"),n("OutboundLink")],1),e._v("\nfor more information.")]),e._v(" "),n("p",[e._v("Seed (hex):\n4b381541583be4423346c643850da4b320e46a87ae3d2a4e6da11eba819cd4acba45d239319ac14f863b8d5ab5a0d0c64d2e8a1e7d1457df2e5a3c51c73235be")]),e._v(" "),n("ul",[n("li",[e._v("Chain m\n"),n("ul",[n("li",[e._v("ext pub:\nxpub661MyMwAqRbcEZVB4dScxMAdx6d4nFc9nvyvH3v4gJL378CSRZiYmhRoP7mBy6gSPSCYk6SzXPTf3ND1cZAceL7SfJ1Z3GC8vBgp2epUt13")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9s21ZrQH143K25QhxbucbDDuQ4naNntJRi4KUfWT7xo4EKsHt2QJDu7KXp1A3u7Bi1j8ph3EGsZ9Xvz9dGuVrtHHs7pXeTzjuxBrCmmhgC6")])])]),e._v(" "),n("li",[e._v("Chain m/0~H~\n"),n("ul",[n("li",[e._v("ext pub:\nxpub68NZiKmJWnxxS6aaHmn81bvJeTESw724CRDs6HbuccFQN9Ku14VQrADWgqbhhTHBaohPX4CjNLf9fq9MYo6oDaPPLPxSb7gwQN3ih19Zm4Y")]),e._v(" "),n("li",[e._v("ext prv:\nxprv9uPDJpEQgRQfDcW7BkF7eTya6RPxXeJCqCJGHuCJ4GiRVLzkTXBAJMu2qaMWPrS7AANYqdq6vcBcBUdJCVVFceUvJFjaPdGZ2y9WACViL4L")])])])]),e._v(" "),n("h2",{attrs:{id:"acknowledgements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),n("ul",[n("li",[e._v("Gregory Maxwell for the original idea of type-2 deterministic\nwallets, and many discussions about it.")]),e._v(" "),n("li",[e._v("Alan Reiner for the implementation of this scheme in Armory, and the\nsuggestions that followed from that.")]),e._v(" "),n("li",[e._v("Eric Lombrozo for reviewing and revising this BIP.")]),e._v(" "),n("li",[e._v("Mike Caldwell for the version bytes to obtain human-recognizable\nBase58 strings.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);