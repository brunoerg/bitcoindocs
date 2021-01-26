(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{406:function(e,t,a){"use strict";a.r(t);var o=a(43),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_121"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_121"}},[e._v("#")]),e._v(" 121")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  BIP: 121\n  Layer: Applications\n  Title: Proof of Payment URI scheme\n  Author: Kalle Rosenbaum <kalle@rosenbaum.se>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0121\n  Status: Withdrawn\n  Type: Standards Track\n  Created: 2015-07-27\n")])])]),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This is a proposal for a URI scheme to be used in the Proof of Payment\nprocess.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("To make a Proof of Payment, the party that wants the proof needs to\ntransfer a Proof of Payment request to the wallet software of the other\nparty. To facilitate that transfer, a new URI scheme representing the\nPoP request is proposed. This URI can then be encoded in QR images or be\nsent over NFC in order to transfer it to the wallet.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("The specification is the same as BIP0021, with the following\ndifferences:")]),e._v(" "),a("ul",[a("li",[e._v("The URI scheme is "),a("code",[e._v("btcpop")]),e._v(" instead of "),a("code",[e._v("bitcoin")])]),e._v(" "),a("li",[e._v("The path component, i.e. the address part, is always empty.")]),e._v(" "),a("li",[e._v("A mandatory "),a("code",[e._v("p")]),e._v(" parameter whose value contains the destination for\nthe PoP. This could for example be a "),a("code",[e._v("https:")]),e._v(" URL or a "),a("code",[e._v("mailto:")]),e._v("\nURI.")]),e._v(" "),a("li",[e._v("A mandatory "),a("code",[e._v("n")]),e._v(" parameter representing the nonce, base58 encoded.")]),e._v(" "),a("li",[e._v("An optional "),a("code",[e._v("txid")]),e._v(" parameter containing the Base58 encoded hash of\nthe transaction to prove.")])]),e._v(" "),a("p",[e._v("Just as in BIP0021, elements of the query component may contain\ncharacters outside the valid range. These must first be encoded\naccording to UTF-8, and then each octet of the corresponding UTF-8\nsequence must be percent-encoded as described in RFC 3986.")]),e._v(" "),a("p",[e._v("All parameters except "),a("code",[e._v("p")]),e._v(" and "),a("code",[e._v("n")]),e._v(" are hints to the wallet on which\ntransaction to create a PoP for.")]),e._v(" "),a("p",[e._v("The extensibility of BIP0021 applies to this scheme as well. For\nexample, a "),a("code",[e._v("date")]),e._v(" parameter or a "),a("code",[e._v("toaddr")]),e._v(" parameter might be useful.\n"),a("code",[e._v("req-*")]),e._v(" parameters are also allowed and obey the same rules as in\nBIP0021, clients not supporting a "),a("code",[e._v("req-*")]),e._v(" parameter must consider the\nURI invalid.")]),e._v(" "),a("h3",{attrs:{id:"keep-uris-short-keep-uris-short"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-uris-short-keep-uris-short"}},[e._v("#")]),e._v(" Keep URIs short {#keep_uris_short}")]),e._v(" "),a("p",[e._v("Implementations should keep the URIs as short as possible. This is\nbecause it makes QR decoding more stable. A camera with a scratched lens\nor low resolution may run into problems scanning huge QR codes. This is\nwhy the "),a("code",[e._v("txid")]),e._v(" parameter is encoded in Base58 instead of the classic hex\nencoded string. We get away with 44 characters instead of 64. Also, the\n"),a("code",[e._v("nonce")]),e._v(" parameter is Base58 encoded for the same reason.")]),e._v(" "),a("h2",{attrs:{id:"interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpretation"}},[e._v("#")]),e._v(" Interpretation")]),e._v(" "),a("h3",{attrs:{id:"transaction-hints-transaction-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-hints-transaction-hints"}},[e._v("#")]),e._v(" Transaction hints {#transaction_hints}")]),e._v(" "),a("p",[e._v("The wallet processing the URI must use the hints in the PoP request to\nfilter its transaction set. The "),a("code",[e._v("label")]),e._v(", "),a("code",[e._v("amount")]),e._v(" and "),a("code",[e._v("message")]),e._v("\nparameters must, if present in the URI, exactly match the data\nassociated with the original payment according to the following table:")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("btcpop:")]),e._v(" URI parameter   "),a("code",[e._v("bitcoin:")]),e._v(" URI parameter   BIP70 PaymentDetails data\n"),a("code",[e._v("label")]),e._v(" "),a("code",[e._v("label")]),e._v(" "),a("code",[e._v("memo")]),e._v(" "),a("code",[e._v("amount")]),e._v(" "),a("code",[e._v("amount")]),e._v(" "),a("code",[e._v("sum of outputs.amount")]),e._v(" "),a("code",[e._v("message")]),e._v(" "),a("code",[e._v("message")]),e._v(" "),a("code",[e._v("-")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("The "),a("code",[e._v("txid")]),e._v(" parameter value must match the transaction hash of the\npayment.")]),e._v(" "),a("p",[e._v("After filtering, the resulting transaction set is displayed to the user\nwho selects one of them to prove. An implementation could also\nautomatically select a transaction in the filtered set, but there must\nstill be a way for the user to select freely among the matching\ntransactions. If the filtered set is empty, no transaction fits the\nhints and a message about that is presented to the user. If the filtered\nset contains exactly one transaction, which is preferable, that\ntransaction can be automatically selected.")]),e._v(" "),a("p",[e._v("As a fallback, there must also be a way for the user to select any\ntransaction from the wallet regardless of the transaction hints. This\ncan be useful if the metadata of the wallet is lost, possibly due to a\nrestore from backup.")]),e._v(" "),a("h3",{attrs:{id:"pop-destination-p-pop-destination-p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pop-destination-p-pop-destination-p"}},[e._v("#")]),e._v(" PoP destination "),a("code",[e._v("p")]),e._v(" {#pop_destination_p}")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("p")]),e._v(" parameter value is the destination where to send the PoP to.\nThis destination is typically a "),a("code",[e._v("https:")]),e._v(" URL or a "),a("code",[e._v("http:")]),e._v(" URL, but it\ncould be any type of URI, for example "),a("code",[e._v("mailto:")]),e._v(". To keep "),a("code",[e._v("btcpop:")]),e._v(" URIs\nshort, users should not make their "),a("code",[e._v("p")]),e._v(" parameter unnecessarily long.")]),e._v(" "),a("h4",{attrs:{id:"http-and-https-urls-http-and-https-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-and-https-urls-http-and-https-urls"}},[e._v("#")]),e._v(" "),a("code",[e._v("http:")]),e._v(" and "),a("code",[e._v("https:")]),e._v(" URLs {#http_and_https_urls}")]),e._v(" "),a("p",[e._v("Wallet implementations must support the "),a("code",[e._v("http:")]),e._v(" and "),a("code",[e._v("https:")]),e._v(" schemes in\nwhich case "),a("code",[e._v("POST")]),e._v(" method must be used. The PoP is sent as a binary\nserialized transaction. The content type of the POST request must be set\nto "),a("code",[e._v("application/bitcoin-pop")])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v('Send PoP for a transaction with label "video 42923" to\nhttps://www.example.com/pop/352, using nonce\n'),a("code",[e._v("0x73 0xd5 0x1a 0xbb 0xd8 0x9c")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" btcpop:?p=https://www.example.com/pop/352&n=zgWTm8yH&label=video%2042923\n")])])]),a("p",[e._v("Send PoP through mail using mailto:pop@example.com?subject=pop444,\namount is 13370000 satoshis, nonce is "),a("code",[e._v("0x6f 0xe 0xfb 0x68 0x92 0xf9")]),e._v(".\nNote that the "),a("code",[e._v("?")]),e._v(" before "),a("code",[e._v("subject")]),e._v(" is OK according to RFC3986, since the\nquery part starts from the first "),a("code",[e._v("?")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" btcpop:?p=mailto:pop@example.com?subject%3Dpop444&n=xJdKmEbr&amount=0.1337\n")])])]),a("p",[e._v("Send PoP for transaction with id\n"),a("code",[e._v("cca7507897abc89628f450e8b1e0c6fca4ec3f7b34cccf55f3f531c659ff4d79")]),e._v(" to\npizza place at http://pizza.example.com/pop/laszlo111 using nonce\n"),a("code",[e._v("0xfc 0xcc 0x2c 0x35 0xf0 0xb8")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" btcpop:?p=http://pizza.example.com/pop/laszlo111&n=3AtNpVrPh&txid=Emt9MPvt1joznqHy5eEHkNtcuQuYWXzYJBQZN6BJm6NL\n")])])]),a("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference implementation {#reference_implementation}")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kallerosenbaum/poppoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("PoP Demo server on GitHub"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kallerosenbaum/wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("PoP-enabled Mycelium fork on\nGitHub"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP0021"),a("OutboundLink")],1),e._v(":\nURI Scheme")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0120.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP0120"),a("OutboundLink")],1),e._v(":\nProof of Payment")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ietf.org/rfc/rfc3986.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC3986"),a("OutboundLink")],1),e._v(": Uniform Resource\nIdentifier (URI): Generic Syntax")])])}),[],!1,null,null,null);t.default=n.exports}}]);