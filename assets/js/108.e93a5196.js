(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{481:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_72"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_72"}},[t._v("#")]),t._v(" 72")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("  BIP: 72\n  Layer: Applications\n  Title: bitcoin: uri extensions for Payment Protocol\n  Author: Gavin Andresen <gavinandresen@gmail.com>\n  Comments-Summary: No comments yet.\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0072\n  Status: Final\n  Type: Standards Track\n  Created: 2013-07-29\n")])])]),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("This BIP describes an extension to the bitcoin: URI scheme (BIP 21) to\nsupport the payment protocol (BIP 70).")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("Allow users to click on a link in a web page or email to initiate the\npayment protocol, while being backwards-compatible with existing bitcoin\nwallets.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v('The bitcoin: URI scheme is extended with an additional, optional "r"\nparameter, whose value is a URL from which a PaymentRequest message\nshould be fetched (characters not allowed within the scope of a query\nparameter must be percent-encoded as described in RFC 3986 and\nbip-0021).')]),t._v(" "),a("p",[t._v('If the "r" parameter is provided and backwards compatibility is not\nrequired, then the bitcoin address portion of the URI may be omitted\n(the URI will be of the form: '),a("a",{attrs:{href:"bitcoin:?r="}},[t._v("bitcoin:?r=")]),t._v("... ).")]),t._v(" "),a("p",[t._v("When Bitcoin wallet software that supports this BIP receives a bitcoin:\nURI with a request parameter, it should ignore the bitcoin\naddress/amount/label/message in the URI and instead fetch a\nPaymentRequest message and then follow the payment protocol, as\ndescribed in BIP 70.")]),t._v(" "),a("p",[t._v('Bitcoin wallets must support fetching PaymentRequests via http and https\nprotocols; they may support other protocols. Wallets must include an\n"Accept" HTTP header in HTTP(s) requests (as defined in RFC 2616):')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Accept: application/bitcoin-paymentrequest\n")])])]),a("p",[t._v("If a PaymentRequest cannot be obtained (perhaps the server is\nunavailable), then the customer should be informed that the merchant's\npayment processing system is unavailable. In the case of an HTTP\nrequest, status codes which are neither success nor error (such as\nredirect) should be handled as outlined in RFC 2616.")]),t._v(" "),a("h2",{attrs:{id:"compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),a("p",[t._v("Wallet software that does not support this BIP will simply ignore the r\nparameter and will initiate a payment to bitcoin address.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("A backwards-compatible request:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("bitcoin:mq7se9wy2egettFxPbmn99cK8v5AFq55Lx?amount=0.11&r=https://merchant.com/pay.php?h%3D2a8628fc2fbe\n")])])]),a("p",[t._v("Non-backwards-compatible equivalent:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("bitcoin:?r=https://merchant.com/pay.php?h%3D2a8628fc2fbe\n")])])]),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.w3.org/Protocols/rfc2616/rfc2616.html",title:"wikilink",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 2616"),a("OutboundLink")],1),t._v("\n: Hypertext Transfer Protocol -- HTTP/1.1")])])}),[],!1,null,null,null);e.default=n.exports}}]);