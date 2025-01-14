import XCTest
import SwiftTreeSitter
import TreeSitterModu

final class TreeSitterModuTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_modu())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Modu grammar")
    }
}
