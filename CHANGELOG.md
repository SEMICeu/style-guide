# Changelog

## Webinar 2 feedback implementation (2023-04 - 2023-05)

### Added 
* Added favicons to the generated HTML pages, so that  SEMIC Style Guide pages will have recognizable browser tabs

### Changed
* We changed and unified the order in which the convention groups are presented; methodology conventions are listed first now (see commits [56ddcef](https://github.com/SEMICeu/style-guide/commit/56ddcef1bbd786158b57e2572c16976a302022fd) and  [6baf343](https://github.com/SEMICeu/style-guide/commit/6baf343264b5837926099c4f3cbb4fa93fe7e492))
* Changed "datatype property" to "data property", which is the correct term in OWL 2 spec (see commit [24dde9b](https://github.com/SEMICeu/style-guide/commit/24dde9b53025a0e3908e578b56458aee884f97c9))

### Fixed
We addressed the following issues raised by members of the community who reviewed the final draft presented at the 2nd SEMIC Style Guide Webinar:

* Chapters 7.9, Abstract classes + 7.17 Element stereotypes bug Something isn't working	[#76](https://github.com/SEMICeu/style-guide/issues/76)
* Chapter 9.4, Shape definitions	[#75](https://github.com/SEMICeu/style-guide/issues/75)
* IRIs (Chapter 7.3, Element names and URIs)	[#74](https://github.com/SEMICeu/style-guide/issues/74)
* Lightweight ontologies (chapter 2.2)	[#71](https://github.com/SEMICeu/style-guide/issues/71)
* Provide a consistent ordering of guideline groups (especially concerning the "Methodology Conventions" group)	[#69](https://github.com/SEMICeu/style-guide/issues/69)
* Multiple classification	[#68](https://github.com/SEMICeu/style-guide/issues/68)
* No class datatypes	[#66](https://github.com/SEMICeu/style-guide/issues/66)
* Atomic datatypes	[#65](https://github.com/SEMICeu/style-guide/issues/65)
* Bad class inheritance example	[#64](https://github.com/SEMICeu/style-guide/issues/64)
* Bad subclass example	[#63](https://github.com/SEMICeu/style-guide/issues/63)
* Prefixes	[#62](https://github.com/SEMICeu/style-guide/issues/62)
* Names of enumerations	[#61](https://github.com/SEMICeu/style-guide/issues/61)
* Domain & Range	[#60](https://github.com/SEMICeu/style-guide/issues/60)
* Optional diagram	[#59](https://github.com/SEMICeu/style-guide/issues/59)
* Concept versus Class	[#58](https://github.com/SEMICeu/style-guide/issues/58)
* A technical comment/question to Human-readable form (PC-R6)	[#57](https://github.com/SEMICeu/style-guide/issues/57)
* Some editorial comments	[#56](https://github.com/SEMICeu/style-guide/issues/56)
* Specification of the documentation of an application profile	[#55](https://github.com/SEMICeu/style-guide/issues/55)
* Transformation from UML to RDF shall consider the definition of reuse	[#31](https://github.com/SEMICeu/style-guide/issues/31)
* Do Guidelines and conventions contains all rules?	[#22](https://github.com/SEMICeu/style-guide/issues/22)
* rdfs:label vs skos:prefLabel	[#20](https://github.com/SEMICeu/style-guide/issues/20)
* Artefact generation	[#18](https://github.com/SEMICeu/style-guide/issues/18)

_For a complete overview of changes, check out the [differences between release 1.0.0 and the version presented at the 2nd Webinar (on April 19)](https://github.com/SEMICeu/style-guide/compare/public-review-webinar2...1.0.0-beta) (switch to the "Files changed" tab, for a consolidated view; for images click on the "Display the source diff" button `<>`)_



## Webinar 1 feedback implementation (2023-02 - 2023-04)

### Added 
* repository metadata and governance info (CHANGELOG, CODE_OF_CONDUCT, CONTRIBUTING, CONTRIBUTORS)
* In the *Terminological clarifications* page added a preamble section
* new sections in architectural clarifications
  * consumer context
  * editorial context
  * editorial synchronisation problem
  * technical artefacts and concerns
* new sections in general conventions 
  * reuse compliance
  * deontic modals
* new sections in conceptual model conventions
  * element stereotypes
  * attribute datatypes
* badges in the readme

### Changed
* In the *Terminological clarifications* page rewritten *What is a conceptual model (specification)?* section 
* In the *Terminological clarifications* page rewritten *What is an ontology (specification)?* section
* Explained the need for a conceptual model as different from the need for diagrams as visual representation.
  * Explain the need for a diagram to interact with business.
  * Explain the need for a conceptual model to encode concepts and relations. 
* Clarified "lightweight ontology" in the semantic conventions and introduction 
* Rechecked the rules on the "domain" and "range" in the reuse definition.
* Created an inventory of what is RE-used & RE-purposed from UML, and added a high level list in the conceptual model definition, and a detailed list when explaining the "Fixed UML interpretation".
* Explained what role deontic indicators such as is mandatory, conditionally mandatory, recommended and optional statements, play in this style guide.
  * to stereotype or not to stereotype?
  * how is the cardinality coming into play?
  * do such indicators really work for classes?
* Explained better what role do UML Enumerations play in the style guide, and how code list management is out of scope of this style guide.  
* Clarified that UML Stereotypes have no semantic value
* Clarified that UML Packages have no semantic value
* Highlighted that attributes shall use only atomic datatypes, and classes shall be avoided as UML attribute types.
* Recommended that only OWL 2 compliant datatypes are used.
* Explained in CMC-R3 that internationalisation shall be avoided in the identifiers, and therefore only URIs are acceptable and IRIs are strongly discouraged. 
* Explained the "optional domain" in the reuse definition, but highlighted that we do not encourage it.
* Brought forward the notion of implementation models and highlighted the difference to an application profile. 
* Explained the distinction between technical and semantic interoperability layers in EIF, and how it is accommodated in this style guide.
* Ensured that it is clear: subtyping without semantic change is not allowed in the reuse section.
* Disagree on loosening "import OR dereference" requirement in reuse definition. Reworded defintiion of "reuse" for increased clarity.
* Added new references to W3C best practices
* Reduced some redundant references across the text 

### Fixed
* HTML page title is missing [#27](https://github.com/SEMICeu/style-guide/issues/27)
* Contents navigation bars need to be improved	[#26](https://github.com/SEMICeu/style-guide/issues/26)
* Even if it has no impact in this work whether OWL or OWL 2 is referenced, we decided for clarity to always reference to OWL 2 only. (OWL vs OWL 2 [#19](https://github.com/SEMICeu/style-guide/issues/19))
* Some rules or rule titles are not stated/phrased as rules [#25](https://github.com/SEMICeu/style-guide/issues/25)
* Answered the issue on URIs and IRIs [#21](https://github.com/SEMICeu/style-guide/issues/21)
* Fixed missing `rdfs:subPropertyOf` mention [#23](https://github.com/SEMICeu/style-guide/issues/23)
* Fixed 4 styling issues as part of the process [#7](https://github.com/SEMICeu/style-guide/issues/7)
* Fixed a broken link in the code of conduct

