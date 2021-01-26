(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{440:function(e,t,i){"use strict";i.r(t);var a=i(43),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"_158"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_158"}},[e._v("#")]),e._v(" 158")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("  BIP: 158\n  Layer: Peer Services\n  Title: Compact Block Filters for Light Clients\n  Author: Olaoluwa Osuntokun <laolu32@gmail.com>\n          Alex Akselrod <alex@akselrod.org>\n  Comments-Summary: None yet\n  Comments-URI: https://github.com/bitcoin/bips/wiki/Comments:BIP-0158\n  Status: Draft\n  Type: Standards Track\n  Created: 2017-05-24\n  License: CC0-1.0\n")])])]),i("h2",{attrs:{id:"abstract"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),i("p",[e._v("This BIP describes a structure for compact filters on block data, for\nuse in the BIP 157 light client protocol"),i("a",{attrs:{href:"bip-0157.mediawiki"}},[e._v("^1")]),e._v(". The filter construction\nproposed is an alternative to Bloom filters, as used in BIP 37, that\nminimizes filter size by using Golomb-Rice coding for compression. This\ndocument specifies one initial filter type based on this construction\nthat enables basic wallets and applications with more advanced smart\ncontracts.")]),e._v(" "),i("h2",{attrs:{id:"motivation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),i("p",[i("a",{attrs:{href:"bip-0157.mediawiki",title:"wikilink"}},[e._v("BIP 157")]),e._v(" defines a light client protocol\nbased on deterministic filters of block content. The filters are\ndesigned to minimize the expected bandwidth consumed by light clients,\ndownloading filters and full blocks. This document defines the initial\nfilter type "),i("em",[e._v("basic")]),e._v(" that is designed to reduce the filter size for\nregular wallets.")]),e._v(" "),i("h2",{attrs:{id:"definitions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),i("p",[i("code",[e._v("[]byte")]),e._v(" represents a vector of bytes.")]),e._v(" "),i("p",[i("code",[e._v("[N]byte")]),e._v(" represents a fixed-size byte array with length N.")]),e._v(" "),i("p",[i("em",[e._v("CompactSize")]),e._v(" is a compact encoding of unsigned integers used in the\nBitcoin P2P protocol.")]),e._v(" "),i("p",[i("em",[e._v("Data pushes")]),e._v(" are byte vectors pushed to the stack according to the\nrules of Bitcoin script.")]),e._v(" "),i("p",[i("em",[e._v("Bit streams")]),e._v(" are readable and writable streams of individual bits. The\nfollowing functions are used in the pseudocode in this document:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("new_bit_stream")]),e._v(" instantiates a new writable bit stream")]),e._v(" "),i("li",[i("code",[e._v("new_bit_stream(vector)")]),e._v(" instantiates a new bit stream reading data\nfrom "),i("code",[e._v("vector")])]),e._v(" "),i("li",[i("code",[e._v("write_bit(stream, b)")]),e._v(" appends the bit "),i("code",[e._v("b")]),e._v(" to the end of the stream")]),e._v(" "),i("li",[i("code",[e._v("read_bit(stream)")]),e._v(" reads the next available bit from the stream")]),e._v(" "),i("li",[i("code",[e._v("write_bits_big_endian(stream, n, k)")]),e._v(" appends the "),i("code",[e._v("k")]),e._v(" least\nsignificant bits of integer "),i("code",[e._v("n")]),e._v(" to the end of the stream in\nbig-endian bit order")]),e._v(" "),i("li",[i("code",[e._v("read_bits_big_endian(stream, k)")]),e._v(" reads the next available "),i("code",[e._v("k")]),e._v(" bits\nfrom the stream and interprets them as the least significant bits of\na big-endian integer")])]),e._v(" "),i("p",[e._v('The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL\nNOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and\n"OPTIONAL" in this document are to be interpreted as described in RFC\n2119.')]),e._v(" "),i("h2",{attrs:{id:"specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),i("h3",{attrs:{id:"golomb-coded-sets-golomb-coded-sets"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#golomb-coded-sets-golomb-coded-sets"}},[e._v("#")]),e._v(" Golomb-Coded Sets {#golomb_coded_sets}")]),e._v(" "),i("p",[e._v("For each block, compact filters are derived containing sets of items\nassociated with the block (eg. addresses sent to, outpoints spent,\netc.). A set of such data objects is compressed into a probabilistic\nstructure called a "),i("em",[e._v("Golomb-coded set")]),e._v(" (GCS), which matches all items in\nthe set with probability 1, and matches other items with probability\n"),i("code",[e._v("1/M")]),e._v(" for some integer parameter "),i("code",[e._v("M")]),e._v(". The encoding is also parameterized\nby "),i("code",[e._v("P")]),e._v(", the bit length of the remainder code. Each filter defined\nspecifies values for "),i("code",[e._v("P")]),e._v(" and "),i("code",[e._v("M")]),e._v(".")]),e._v(" "),i("p",[e._v("At a high level, a GCS is constructed from a set of "),i("code",[e._v("N")]),e._v(" items by:")]),e._v(" "),i("ol",[i("li",[e._v("hashing all items to 64-bit integers in the range "),i("code",[e._v("[0, N * M)")])]),e._v(" "),i("li",[e._v("sorting the hashed values in ascending order")]),e._v(" "),i("li",[e._v("computing the differences between each value and the previous one")]),e._v(" "),i("li",[e._v("writing the differences sequentially, compressed with Golomb-Rice\ncoding")])]),e._v(" "),i("p",[e._v("The following sections describe each step in greater detail.")]),e._v(" "),i("h4",{attrs:{id:"hashing-data-objects-hashing-data-objects"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hashing-data-objects-hashing-data-objects"}},[e._v("#")]),e._v(" Hashing Data Objects {#hashing_data_objects}")]),e._v(" "),i("p",[e._v("The first step in the filter construction is hashing the variable-sized\nraw items in the set to the range "),i("code",[e._v("[0, F)")]),e._v(", where "),i("code",[e._v("F = N *")]),e._v(" "),i("code",[e._v("M")]),e._v(".\nCustomarily, "),i("code",[e._v("M")]),e._v(" is set to "),i("code",[e._v("2^P")]),e._v(". However, if one is able to select both\nParameters independently, then more optimal values can be selected"),i("a",{attrs:{href:"https://gist.github.com/sipa/576d5f09c3b86c3b1b75598d799fc845",target:"_blank",rel:"noopener noreferrer"}},[e._v("^2"),i("OutboundLink")],1),e._v(".\nSet membership queries against the hash outputs will have a false\npositive rate of "),i("code",[e._v("M")]),e._v(". To avoid integer overflow, the number of items "),i("code",[e._v("N")]),e._v("\nMUST be <2^32 and "),i("code",[e._v("M")]),e._v(" MUST be <2^32.")]),e._v(" "),i("p",[e._v("The items are first passed through the pseudorandom function "),i("em",[e._v("SipHash")]),e._v(",\nwhich takes a 128-bit key "),i("code",[e._v("k")]),e._v(" and a variable-sized byte vector and\nproduces a uniformly random 64-bit output. Implementations of this BIP\nMUST use the SipHash parameters "),i("code",[e._v("c = 2")]),e._v(" and "),i("code",[e._v("d = 4")]),e._v(".")]),e._v(" "),i("p",[e._v("The 64-bit SipHash outputs are then mapped uniformly over the desired\nrange by multiplying with F and taking the top 64 bits of the 128-bit\nresult. This algorithm is a faster alternative to modulo reduction, as\nit avoids the expensive division operation"),i("a",{attrs:{href:"https://lemire.me/blog/2016/06/27/a-fast-alternative-to-the-modulo-reduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("^3"),i("OutboundLink")],1),e._v(". Note that care must be\ntaken when implementing this reduction to ensure the upper 64 bits of\nthe integer multiplication are not truncated; certain architectures and\nhigh level languages may require code that decomposes the 64-bit\nmultiplication into four 32-bit multiplications and recombines into the\nresult.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("hash_to_range(item: []byte, F: uint64, k: [16]byte) -> uint64:\n    return (siphash(k, item) * F) >> 64\n\nhashed_set_construct(raw_items: [][]byte, k: [16]byte, M: uint) -> []uint64:\n    let N = len(raw_items)\n    let F = N * M\n\n    let set_items = []\n\n    for item in raw_items:\n        let set_value = hash_to_range(item, F, k)\n        set_items.append(set_value)\n\n    return set_items\n")])])]),i("h4",{attrs:{id:"golomb-rice-coding-golomb-rice-coding"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#golomb-rice-coding-golomb-rice-coding"}},[e._v("#")]),e._v(" Golomb-Rice Coding {#golomb_rice_coding}")]),e._v(" "),i("p",[e._v("Instead of writing the items in the hashed set directly to the filter,\ngreater compression is achieved by only writing the differences between\nsuccessive items in sorted order. Since the items are distributed\nuniformly, it can be shown that the differences resemble a geometric\ndistribution"),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Geometric_distribution",target:"_blank",rel:"noopener noreferrer"}},[e._v("^4"),i("OutboundLink")],1),e._v(". "),i("em",[e._v("Golomb-Rice")]),e._v(" "),i("em",[e._v("coding")]),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Golomb_coding#Rice_coding",target:"_blank",rel:"noopener noreferrer"}},[e._v("^5"),i("OutboundLink")],1),e._v(" is a technique that\noptimally compresses geometrically distributed values.")]),e._v(" "),i("p",[e._v("With Golomb-Rice, a value is split into a quotient and remainder modulo\n"),i("code",[e._v("2^P")]),e._v(", which are encoded separately. The quotient "),i("code",[e._v("q")]),e._v(" is encoded as\n"),i("em",[e._v("unary")]),e._v(", with a string of "),i("code",[e._v("q")]),e._v(" 1's followed by one 0. The remainder "),i("code",[e._v("r")]),e._v("\nis represented in big-endian by P bits. For example, this is a table of\nGolomb-Rice coded values using "),i("code",[e._v("P=2")]),e._v(":")]),e._v(" "),i("p",[e._v("n   (q, r)   c")]),e._v(" "),i("hr"),e._v(" "),i("p",[e._v("0   (0, 0)   "),i("code",[e._v("0 00")]),e._v("\n1   (0, 1)   "),i("code",[e._v("0 01")]),e._v("\n2   (0, 2)   "),i("code",[e._v("0 10")]),e._v("\n3   (0, 3)   "),i("code",[e._v("0 11")]),e._v("\n4   (1, 0)   "),i("code",[e._v("10 00")]),e._v("\n5   (1, 1)   "),i("code",[e._v("10 01")]),e._v("\n6   (1, 2)   "),i("code",[e._v("10 10")]),e._v("\n7   (1, 3)   "),i("code",[e._v("10 11")]),e._v("\n8   (2, 0)   "),i("code",[e._v("110 00")]),e._v("\n9   (2, 1)   "),i("code",[e._v("110 01")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("golomb_encode(stream, x: uint64, P: uint):\n    let q = x >> P\n\n    while q > 0:\n        write_bit(stream, 1)\n        q--\n    write_bit(stream, 0)\n\n    write_bits_big_endian(stream, x, P)\n\ngolomb_decode(stream, P: uint) -> uint64:\n    let q = 0\n    while read_bit(stream) == 1:\n        q++\n\n    let r = read_bits_big_endian(stream, P)\n\n    let x = (q << P) + r\n    return x\n")])])]),i("h4",{attrs:{id:"set-construction-set-construction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#set-construction-set-construction"}},[e._v("#")]),e._v(" Set Construction {#set_construction}")]),e._v(" "),i("p",[e._v("A GCS is constructed from four parameters:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("L")]),e._v(", a vector of "),i("code",[e._v("N")]),e._v(" raw items")]),e._v(" "),i("li",[i("code",[e._v("P")]),e._v(", the bit parameter of the Golomb-Rice coding")]),e._v(" "),i("li",[i("code",[e._v("M")]),e._v(", the target false positive rate")]),e._v(" "),i("li",[i("code",[e._v("k")]),e._v(", the 128-bit key used to randomize the SipHash outputs")])]),e._v(" "),i("p",[e._v("The result is a byte vector with a minimum size of "),i("code",[e._v("N * (P + 1)")]),e._v(" bits.")]),e._v(" "),i("p",[e._v("The raw items in "),i("code",[e._v("L")]),e._v(" are first hashed to 64-bit unsigned integers as\nspecified above and sorted. The differences between consecutive values,\nhereafter referred to as "),i("em",[e._v("deltas")]),e._v(", are encoded sequentially to a bit\nstream with Golomb-Rice coding. Finally, the bit stream is padded with\n0's to the nearest byte boundary and serialized to the output byte\nvector.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("construct_gcs(L: [][]byte, P: uint, k: [16]byte, M: uint) -> []byte:\n    let set_items = hashed_set_construct(L, k, M)\n\n    set_items.sort()\n\n    let output_stream = new_bit_stream()\n\n    let last_value = 0\n    for item in set_items:\n        let delta = item - last_value\n        golomb_encode(output_stream, delta, P)\n        last_value = item\n\n    return output_stream.bytes()\n")])])]),i("h4",{attrs:{id:"set-querying-decompression-set-queryingdecompression"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#set-querying-decompression-set-queryingdecompression"}},[e._v("#")]),e._v(" Set Querying/Decompression {#set_queryingdecompression}")]),e._v(" "),i("p",[e._v("To check membership of an item in a compressed GCS, one must reconstruct\nthe hashed set members from the encoded deltas. The procedure to do so\nis the reverse of the compression: deltas are decoded one by one and\nadded to a cumulative sum. Each intermediate sum represents a hashed\nvalue in the original set. The queried item is hashed in the same way as\nthe set members and compared against the reconstructed values. Note that\nquerying does not require the entire decompressed set be held in memory\nat once.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("gcs_match(key: [16]byte, compressed_set: []byte, target: []byte, P: uint, N: uint, M: uint) -> bool:\n    let F = N * M\n    let target_hash = hash_to_range(target, F, k)\n\n    stream = new_bit_stream(compressed_set)\n\n    let last_value = 0\n\n    loop N times:\n        let delta = golomb_decode(stream, P)\n        let set_item = last_value + delta\n\n        if set_item == target_hash:\n            return true\n\n        // Since the values in the set are sorted, terminate the search once\n        // the decoded value exceeds the target.\n        if set_item > target_hash:\n            break\n\n        last_value = set_item\n\n    return false\n")])])]),i("p",[e._v("Some applications may need to check for set intersection instead of\nmembership of a single item. This can be performed far more efficiently\nthan checking each item individually by leveraging the sorted structure\nof the compressed GCS. First the query elements are all hashed and\nsorted, then compared in order against the decompressed GCS contents.\nSee "),i("a",{attrs:{href:"#golomb-coded-set-multi-match",title:"wikilink"}},[e._v("Appendix B")]),e._v(" for\npseudocode.")]),e._v(" "),i("h3",{attrs:{id:"block-filters-block-filters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#block-filters-block-filters"}},[e._v("#")]),e._v(" Block Filters {#block_filters}")]),e._v(" "),i("p",[e._v("This BIP defines one initial filter type:")]),e._v(" "),i("ul",[i("li",[e._v("Basic ("),i("code",[e._v("0x00")]),e._v(")\n"),i("ul",[i("li",[i("code",[e._v("M = 784931")])]),e._v(" "),i("li",[i("code",[e._v("P = 19")])])])])]),e._v(" "),i("h4",{attrs:{id:"contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),i("p",[e._v("The basic filter is designed to contain everything that a light client\nneeds to sync a regular Bitcoin wallet. A basic filter MUST contain\nexactly the following items for each transaction in a block:")]),e._v(" "),i("ul",[i("li",[e._v("The previous output script (the script being spent) for each input,\nexcept")])]),e._v(" "),i("p",[i("code",[e._v("for the coinbase transaction.")])]),e._v(" "),i("ul",[i("li",[e._v("The scriptPubKey of each output, aside from all "),i("code",[e._v("OP_RETURN")]),e._v(" output")])]),e._v(" "),i("p",[i("code",[e._v("scripts.")])]),e._v(" "),i("p",[e._v('Any "nil" items MUST NOT be included into the final set of filter\nelements.')]),e._v(" "),i("p",[e._v("We exclude all outputs that start with "),i("code",[e._v("OP_RETURN")]),e._v(" in order to allow\nfilters to easily be committed to in the future via a soft-fork. A\nlikely area for future commitments is an additional "),i("code",[e._v("OP_RETURN")]),e._v(" output\nin the coinbase transaction similar to the current witness commitment\n"),i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("^6"),i("OutboundLink")],1),e._v(". By excluding all "),i("code",[e._v("OP_RETURN")]),e._v(" outputs we avoid a circular\ndependency between the commitment, and the item being committed to.")]),e._v(" "),i("h4",{attrs:{id:"construction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#construction"}},[e._v("#")]),e._v(" Construction")]),e._v(" "),i("p",[e._v("The basic type is constructed as Golomb-coded sets with the following\nparameters.")]),e._v(" "),i("p",[e._v("The parameter "),i("code",[e._v("P")]),e._v(" MUST be set to "),i("code",[e._v("19")]),e._v(", and the parameter "),i("code",[e._v("M")]),e._v(" MUST be set\nto "),i("code",[e._v("784931")]),e._v(". Analysis has shown that if one is able to select "),i("code",[e._v("P")]),e._v(" and\n"),i("code",[e._v("M")]),e._v(" independently, then setting "),i("code",[e._v("M=1.497137 * 2^P")]),e._v(" is close to optimal\n"),i("a",{attrs:{href:"https://gist.github.com/sipa/576d5f09c3b86c3b1b75598d799fc845",target:"_blank",rel:"noopener noreferrer"}},[e._v("^7"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("Empirical analysis also shows that was chosen as these parameters\nminimize the bandwidth utilized, considering both the expected number of\nblocks downloaded due to false positives and the size of the filters\nthemselves.")]),e._v(" "),i("p",[e._v("The parameter "),i("code",[e._v("k")]),e._v(" MUST be set to the first 16 bytes of the hash (in\nstandard little-endian representation) of the block for which the filter\nis constructed. This ensures the key is deterministic while still\nvarying from block to block.")]),e._v(" "),i("p",[e._v("Since the value "),i("code",[e._v("N")]),e._v(" is required to decode a GCS, a serialized GCS\nincludes it as a prefix, written as a "),i("code",[e._v("CompactSize")]),e._v(". Thus, the complete\nserialization of a filter is:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("N")]),e._v(", encoded as a "),i("code",[e._v("CompactSize")])]),e._v(" "),i("li",[e._v("The bytes of the compressed filter itself")])]),e._v(" "),i("h4",{attrs:{id:"signaling"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#signaling"}},[e._v("#")]),e._v(" Signaling")]),e._v(" "),i("p",[e._v("This BIP allocates a new service bit:")]),e._v(" "),i("hr"),e._v(" "),i("p",[e._v("NODE_COMPACT_FILTERS   "),i("code",[e._v("1 << 6")]),e._v("   If enabled, the node MUST respond to all BIP 157 messages for filter type "),i("code",[e._v("0x00")])]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"compatibility"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),i("p",[e._v("This block filter construction is not incompatible with existing\nsoftware, though it requires implementation of the new filters.")]),e._v(" "),i("h2",{attrs:{id:"acknowledgments"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgments"}},[e._v("#")]),e._v(" Acknowledgments")]),e._v(" "),i("p",[e._v("We would like to thank bfd (from the bitcoin-dev mailing list) for\nbringing the basis of this BIP to our attention, Greg Maxwell for\npointing us in the direction of Golomb-Rice coding and fast range\noptimization, Pieter Wullie for his analysis of optimal GCS parameters,\nand Pedro Martelletto for writing the initial indexing code for "),i("code",[e._v("btcd")]),e._v(".")]),e._v(" "),i("p",[e._v("We would also like to thank Dave Collins, JJ Jeffrey, and Eric Lombrozo\nfor useful discussions.")]),e._v(" "),i("h2",{attrs:{id:"reference-implementation-reference-implementation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementation-reference-implementation"}},[e._v("#")]),e._v(" Reference Implementation {#reference_implementation}")]),e._v(" "),i("p",[e._v("Light client: "),i("a",{attrs:{href:"https://github.com/lightninglabs/neutrino",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("Full-node indexing: "),i("a",{attrs:{href:"https://github.com/Roasbeef/btcd/tree/segwit-cbf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Roasbeef/btcd/tree/segwit-cbf"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("Golomb-Rice Coded sets:\n"),i("a",{attrs:{href:"https://github.com/btcsuite/btcutil/blob/master/gcs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/btcsuite/btcutil/blob/master/gcs"),i("OutboundLink")],1)]),e._v(" "),i("h2",{attrs:{id:"appendix-a-alternatives-appendix-a-alternatives"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-alternatives-appendix-a-alternatives"}},[e._v("#")]),e._v(" Appendix A: Alternatives {#appendix_a_alternatives}")]),e._v(" "),i("p",[e._v("A number of alternative set encodings were considered before\nGolomb-coded sets were settled upon. In this appendix section, we'll\nlist a few of the alternatives along with our rationale for not pursuing\nthem.")]),e._v(" "),i("h4",{attrs:{id:"bloom-filters-bloom-filters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bloom-filters-bloom-filters"}},[e._v("#")]),e._v(" Bloom Filters {#bloom_filters}")]),e._v(" "),i("p",[e._v("Bloom Filters are perhaps the best known probabilistic data structure\nfor testing set membership, and were introduced into the Bitcoin\nprotocol with BIP 37. The size of a Bloom filter is larger than the\nexpected size of a GCS with the same false positive rate, which is the\nmain reason the option was rejected.")]),e._v(" "),i("h4",{attrs:{id:"cryptographic-accumulators-cryptographic-accumulators"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-accumulators-cryptographic-accumulators"}},[e._v("#")]),e._v(" Cryptographic Accumulators {#cryptographic_accumulators}")]),e._v(" "),i("p",[e._v("Cryptographic accumulators"),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Accumulator_(cryptography)",target:"_blank",rel:"noopener noreferrer"}},[e._v("^8"),i("OutboundLink")],1),e._v(" are a cryptographic data structures that\nenable (amongst other operations) a one way membership test. One\nadvantage of accumulators are that they are constant size, independent\nof the number of elements inserted into the accumulator. However,\ncurrent constructions of cryptographic accumulators require an initial\ntrusted set up. Additionally, accumulators based on the Strong-RSA\nAssumption require mapping set items to prime representatives in the\nassociated group which can be preemptively expensive.")]),e._v(" "),i("h4",{attrs:{id:"matrix-based-probabilistic-set-data-structures-matrix-based-probabilistic-set-data-structures"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#matrix-based-probabilistic-set-data-structures-matrix-based-probabilistic-set-data-structures"}},[e._v("#")]),e._v(" Matrix Based Probabilistic Set Data Structures {#matrix_based_probabilistic_set_data_structures}")]),e._v(" "),i("p",[e._v("There exist data structures based on matrix solving which are even more\nspace efficient compared to Bloom filters"),i("a",{attrs:{href:"https://arxiv.org/pdf/0804.1845.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("^9"),i("OutboundLink")],1),e._v(". We instead opted for our\nGCS-based filters as they have a much lower implementation complexity\nand are easier to understand.")]),e._v(" "),i("h2",{attrs:{id:"appendix-b-pseudocode-appendix-b-pseudocode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#appendix-b-pseudocode-appendix-b-pseudocode"}},[e._v("#")]),e._v(" Appendix B: Pseudocode {#appendix_b_pseudocode}")]),e._v(" "),i("h3",{attrs:{id:"golomb-coded-set-multi-match-golomb-coded-set-multi-match"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#golomb-coded-set-multi-match-golomb-coded-set-multi-match"}},[e._v("#")]),e._v(" Golomb-Coded Set Multi-Match {#golomb_coded_set_multi_match}")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("gcs_match_any(key: [16]byte, compressed_set: []byte, targets: [][]byte, P: uint, N: uint, M: uint) -> bool:\n    let F = N * M\n\n    // Map targets to the same range as the set hashes.\n    let target_hashes = []\n    for target in targets:\n        let target_hash = hash_to_range(target, F, k)\n        target_hashes.append(target_hash)\n\n    // Sort targets so matching can be checked in linear time.\n    target_hashes.sort()\n\n    stream = new_bit_stream(compressed_set)\n\n    let value = 0\n    let target_idx = 0\n    let target_val = target_hashes[target_idx]\n\n    loop N times:\n        let delta = golomb_decode(stream, P)\n        value += delta\n\n        inner loop:\n            if target_val == value:\n                return true\n\n            // Move on to the next set value.\n            else if target_val > value:\n                break inner loop\n\n            // Move on to the next target value.\n            else if target_val < value:\n                target_idx++\n\n                // If there are no targets left, then there are no matches.\n                if target_idx == len(targets):\n                    break outer loop\n\n                target_val = target_hashes[target_idx]\n\n    return false\n")])])]),i("h2",{attrs:{id:"appendix-c-test-vectors-appendix-c-test-vectors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#appendix-c-test-vectors-appendix-c-test-vectors"}},[e._v("#")]),e._v(" Appendix C: Test Vectors {#appendix_c_test_vectors}")]),e._v(" "),i("p",[e._v("Test vectors for basic block filters on five testnet blocks, including\nthe filters and filter headers, can be found\n"),i("a",{attrs:{href:"bip-0158/testnet-19.json",title:"wikilink"}},[e._v("here")]),e._v(". The code to generate them\ncan be found "),i("a",{attrs:{href:"bip-0158/gentestvectors.go",title:"wikilink"}},[e._v("here")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("<references/>\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br")])]),i("h2",{attrs:{id:"copyright"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),i("p",[e._v("This document is licensed under the Creative Commons CC0 1.0 Universal\nlicense.")])])}),[],!1,null,null,null);t.default=n.exports}}]);