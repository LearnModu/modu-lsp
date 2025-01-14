// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "TreeSitterModu",
    products: [
        .library(name: "TreeSitterModu", targets: ["TreeSitterModu"]),
    ],
    dependencies: [
        .package(url: "https://github.com/ChimeHQ/SwiftTreeSitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterModu",
            dependencies: [],
            path: ".",
            sources: [
                "src/parser.c",
                // NOTE: if your language has an external scanner, add it here.
            ],
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterModuTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterModu",
            ],
            path: "bindings/swift/TreeSitterModuTests"
        )
    ],
    cLanguageStandard: .c11
)