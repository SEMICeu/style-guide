# Changelog

## Webinar 1 feedback implementation (2023-02 - 2023-04)

### Added 
* repository metadata and governance info (CHANGELOG, CODE_OF_CONDUCT,m CONTRIBUTING, CONTRIBUTORS)
*  In the *Terminological clarifications* page added a preamble section
*  new sections in architectural clarifications
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

### Changed
* In the *Terminological clarifications* page rewritten *What is a conceptual model (specification)?* section 
* In the *Terminological clarifications* page rewritten *What is an ontology (specification)?* section
* Explained the need for a conceptual model as different from teh need for diagrams as visual representation.
  * Explain the need for a diagram to interact with business.
  * Explain the need for a conceptual model to encode concepts and relations. 
* Clarified "lightweight ontology" in teh semantic conventions and introduction 
* Rechecked the rules on the "domain" and "range" in the reuse definition.
* Created an inventory of what is RE-used & RE-purposed from UML, and added a high level list in the conceptual model definition, and a detailed list when explaining the "Fixed UML interpretation".
* Explained what role deontic indicators such as is mandatory, conditionally mandatory, recommended and optional statements play in this style guide.
  * to stereotype or not to stereotype?
  * how is the cardinality coming into play?
  * do such indicators really work for classes?
* Explained better what role do UML Enumerations play in teh style guide, and how code list management is out of scope of this style guide.  
* Clarified that UML Stereotypes have no semantic value
* Clarified that UML Packages have no semantic value
* Highlighted that Attributes shall use only atomic datatypes, and classes shall be avoided as UML attribute types.
* Recommended that only OWL 2 compliant datatypes are used.
* Explained in CMC-R3 that internationalisation shall be avoided in the identifiers, and therefore only URIs are acceptable and IRIs are strongly discouraged. 
* Explained the "optional domain" in the reuse definition, but highlighted that we do not encourage it.
* Brought forward the notion of implementation models and highlighted the difference to an application profile. 
* Explained the distinction between technical and semantic interoperability layers in EIF, and how it is accommodated in this style guide.
* Ensured that it is clear: subtyping without semantic change is not allowed in teh reuse section.
* Disagree on loosening "import OR dereference" requirement in reuse definition. Reworded defintiion of "reuse" for increased clarity.
* 

### Fixed
* HTML page title is missing [#27](https://github.com/SEMICeu/style-guide/issues/27)
* Even if it has no impact in this work whether OWL or OWL 2 is referenced, we decided for clarity to always reference to OWL 2 only. (OWL vs OWL 2 [#19](https://github.com/SEMICeu/style-guide/issues/19))
* Some rules or rule titles are not stated/phrased as rules [#25](https://github.com/SEMICeu/style-guide/issues/25)
* Answered the issue on URIs and IRIs [#21](https://github.com/SEMICeu/style-guide/issues/21)
* Fixed missing `rdfs:subPropertyOf` mention [#23](https://github.com/SEMICeu/style-guide/issues/23)
* Fixed 4 styling issues as part of the process [#7](https://github.com/SEMICeu/style-guide/issues/7)
* 


